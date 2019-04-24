import {HttpHeaders, HttpResponse} from '@angular/common/http';
import {ODataResponse} from './odata-response';

describe('ODataResponse', () => {
  it('test getBodyAsJson', () => {
    const body = '{"test":"test"}';
    const headers1: HttpHeaders = new HttpHeaders({'content-type': 'application/json'});
    const headers2: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json;charset=utf-8'});

    for (const headers of [headers1, headers2]) {
      const odataResponse: ODataResponse = new ODataResponse(
        new HttpResponse({body, headers})
      );
      expect(odataResponse.getBodyAsJson()).toEqual({test: 'test'});
      expect(odataResponse.getBodyAsText()).toEqual('{"test":"test"}');
    }
  });
});
