import { HttpHeaders } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpOptions, HttpOptionsI } from '../odata-service/http-options';
import { ODataService } from '../odata-service/odata.service';
import { ODataModule } from '../odata.module';
import { ODataQuery } from './odata-query';
import { BatchRequest, Method, ODataQueryBatch } from './odata-query-batch';

describe('ODataQueryBatch', () => {
  let odataService: ODataService;
  let odataQuery: ODataQuery;

  const SERVICE_ROOT = 'serviceRoot';
  const body: any = { test: 'test' };
  const httpOptionsI: HttpOptionsI = { headers: new HttpHeaders({ test: 'test' }) };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ODataModule]
    });

    odataService = TestBed.get(ODataService);
    odataQuery = new ODataQuery(odataService, SERVICE_ROOT);
  });

  it('test get', () => {
    const odataQueryBatch: ODataQueryBatch = new ODataQueryBatch(odataService, SERVICE_ROOT);
    expect(() => odataQueryBatch.get(undefined)).toThrowError('odataQuery cannot be undefined');
    expect(() => odataQueryBatch.get(null)).toThrowError('odataQuery cannot be null');

    odataQueryBatch.get(odataQuery);
    odataQueryBatch.get(odataQuery, httpOptionsI);
    expect(odataQueryBatch.getRequests()[0]).toEqual(new BatchRequest(Method.GET, odataQuery));
    expect(odataQueryBatch.getRequests()[1]).toEqual(new BatchRequest(Method.GET, odataQuery, undefined, httpOptionsI));
  });

  it('test post', () => {
    const odataQueryBatch: ODataQueryBatch = new ODataQueryBatch(odataService, SERVICE_ROOT);
    expect(() => odataQueryBatch.post(undefined, undefined)).toThrowError('odataQuery cannot be undefined');
    expect(() => odataQueryBatch.post(null, null)).toThrowError('odataQuery cannot be null');

    odataQueryBatch.post(odataQuery, body);
    odataQueryBatch.post(odataQuery, body, httpOptionsI);
    expect(odataQueryBatch.getRequests()[0]).toEqual(new BatchRequest(Method.POST, odataQuery, body));
    expect(odataQueryBatch.getRequests()[1]).toEqual(new BatchRequest(Method.POST, odataQuery, body, httpOptionsI));
  });

  it('test put', () => {
    const odataQueryBatch: ODataQueryBatch = new ODataQueryBatch(odataService, SERVICE_ROOT);
    expect(() => odataQueryBatch.put(undefined, undefined)).toThrowError('odataQuery cannot be undefined');
    expect(() => odataQueryBatch.put(null, null)).toThrowError('odataQuery cannot be null');

    odataQueryBatch.put(odataQuery, body);
    odataQueryBatch.put(odataQuery, body, httpOptionsI);
    expect(odataQueryBatch.getRequests()[0]).toEqual(new BatchRequest(Method.PUT, odataQuery, body));
    expect(odataQueryBatch.getRequests()[1]).toEqual(new BatchRequest(Method.PUT, odataQuery, body, httpOptionsI));
  });

  it('test patch', () => {
    const odataQueryBatch: ODataQueryBatch = new ODataQueryBatch(odataService, SERVICE_ROOT);
    expect(() => odataQueryBatch.patch(undefined, undefined)).toThrowError('odataQuery cannot be undefined');
    expect(() => odataQueryBatch.patch(null, null)).toThrowError('odataQuery cannot be null');

    odataQueryBatch.patch(odataQuery, body);
    odataQueryBatch.patch(odataQuery, body, httpOptionsI);
    expect(odataQueryBatch.getRequests()[0]).toEqual(new BatchRequest(Method.PATCH, odataQuery, body));
    expect(odataQueryBatch.getRequests()[1]).toEqual(new BatchRequest(Method.PATCH, odataQuery, body, httpOptionsI));
  });

  it('test delete', () => {
    const odataQueryBatch: ODataQueryBatch = new ODataQueryBatch(odataService, SERVICE_ROOT);
    expect(() => odataQueryBatch.delete(undefined)).toThrowError('odataQuery cannot be undefined');
    expect(() => odataQueryBatch.delete(null)).toThrowError('odataQuery cannot be null');

    odataQueryBatch.delete(odataQuery);
    odataQueryBatch.delete(odataQuery, httpOptionsI);
    expect(odataQueryBatch.getRequests()[0]).toEqual(new BatchRequest(Method.DELETE, odataQuery));
    expect(odataQueryBatch.getRequests()[1]).toEqual(new BatchRequest(Method.DELETE, odataQuery, undefined, httpOptionsI));
  });

  it('test execute', () => {
    const odataQueryBatch: ODataQueryBatch = new ODataQueryBatch(odataService, SERVICE_ROOT);
    const spy: jasmine.Spy = spyOn(odataService, 'post').and.returnValue(null);
    odataQueryBatch.setBatchBoundary('batchBoundary');

    odataQueryBatch.execute();
    expect(spy.calls.mostRecent().args[0]).toEqual(odataQueryBatch);
    expect(spy.calls.mostRecent().args[1]).toEqual(odataQueryBatch.getBody());
    const httpOptionsIArg: HttpOptionsI = spy.calls.mostRecent().args[2];
    expect(httpOptionsIArg instanceof HttpOptions).toBeFalsy();
    expect(httpOptionsIArg.headers.keys().length).toEqual(3);
    expect(httpOptionsIArg.headers.get('OData-Version')).toEqual('4.0');
    expect(httpOptionsIArg.headers.get('Content-Type')).toEqual('multipart/mixed;boundary=batchBoundary');
    expect(httpOptionsIArg.headers.get('Accept')).toEqual('multipart/mixed');
    expect(httpOptionsIArg.params).toEqual(undefined);
    expect(httpOptionsIArg.reportProgress).toEqual(undefined);
    expect(httpOptionsIArg.withCredentials).toEqual(undefined);

    odataQueryBatch.execute(new HttpOptions(new HttpHeaders({ test: 'test' })));
    expect(spy.calls.mostRecent().args[0]).toEqual(odataQueryBatch);
    expect(spy.calls.mostRecent().args[1]).toEqual(odataQueryBatch.getBody());
    const httpOptionsArg: HttpOptions = spy.calls.mostRecent().args[2];
    expect(httpOptionsArg instanceof HttpOptions).toBeTruthy();
    expect(httpOptionsArg.headers.get('test')).toEqual('test');
    expect(httpOptionsIArg.headers.keys().length).toEqual(3);
    expect(httpOptionsIArg.headers.get('OData-Version')).toEqual('4.0');
    expect(httpOptionsArg.headers.get('Content-Type')).toEqual('multipart/mixed;boundary=batchBoundary');
    expect(httpOptionsIArg.headers.get('Accept')).toEqual('multipart/mixed');
    expect(httpOptionsArg.params).toEqual(undefined);
    expect(httpOptionsArg.reportProgress).toEqual(undefined);
    expect(httpOptionsArg.withCredentials).toEqual(undefined);
  });

  it('test toString', () => {
    const odataQueryBatch: ODataQueryBatch = new ODataQueryBatch(odataService, SERVICE_ROOT);
    expect(odataQueryBatch.toString()).toEqual(SERVICE_ROOT + '/$batch');
  });

  it('test getBody', () => {
    const odataQueryBatch: ODataQueryBatch = new ODataQueryBatch(odataService, SERVICE_ROOT);
    odataQueryBatch.setBatchBoundary('batch_');
    spyOn(odataQueryBatch, 'getUUID').and.returnValue('');

    odataQueryBatch.get(odataQuery, { headers: new HttpHeaders({ header: 'value' }) });
    odataQueryBatch.post(odataQuery, body, { headers: new HttpHeaders({ header2: 'value2' }) });
    odataQueryBatch.patch(odataQuery, body, { headers: new HttpHeaders({ header3: 'value3' }) });
    odataQueryBatch.put(odataQuery, body, { headers: new HttpHeaders({ header4: 'value4' }) });
    odataQueryBatch.delete(odataQuery, { headers: new HttpHeaders({ header5: 'value5' }) });
    odataQueryBatch.get(odataQuery, { headers: new HttpHeaders({ header6: 'value6' }) });

    expect(odataQueryBatch.getBody()).toEqual(
      // BATCH SEPARATOR
      '--batch_\r\n'
      + 'Content-Type: application/http\r\n'
      + 'Content-Transfer-Encoding: binary\r\n'
      + '\r\n'
      // GET
      + 'GET serviceRoot HTTP/1.1\r\n'
      + 'header: value\r\n'
      + '\r\n'
      + '\r\n'
      // BATCH SEPARATOR
      + '--batch_\r\n'
      + 'Content-Type: multipart/mixed;boundary=changeset_\r\n'
      + '\r\n'
      // CHANGESET SEPARATOR
      + '--changeset_\r\n'
      + 'Content-Type: application/http\r\n'
      + 'Content-Transfer-Encoding: binary\r\n'
      + 'Content-ID: 1\r\n'
      + '\r\n'
      // POST
      + 'POST serviceRoot HTTP/1.1\r\n'
      + 'Content-Type: application/json\r\n'
      + 'header2: value2\r\n'
      + '\r\n'
      + '{"test":"test"}\r\n'
      // CHANGESET SEPARATOR
      + '--changeset_\r\n'
      + 'Content-Type: application/http\r\n'
      + 'Content-Transfer-Encoding: binary\r\n'
      + 'Content-ID: 2\r\n'
      + '\r\n'
      // PATCH
      + 'PATCH serviceRoot HTTP/1.1\r\n'
      + 'Content-Type: application/json\r\n'
      + 'header3: value3\r\n'
      + '\r\n'
      + '{"test":"test"}\r\n'
      // CHANGESET SEPARATOR
      + '--changeset_\r\n'
      + 'Content-Type: application/http\r\n'
      + 'Content-Transfer-Encoding: binary\r\n'
      + 'Content-ID: 3\r\n'
      + '\r\n'
      // PUT
      + 'PUT serviceRoot HTTP/1.1\r\n'
      + 'Content-Type: application/json\r\n'
      + 'header4: value4\r\n'
      + '\r\n'
      + '{"test":"test"}\r\n'
      // CHANGESET SEPARATOR
      + '--changeset_\r\n'
      + 'Content-Type: application/http\r\n'
      + 'Content-Transfer-Encoding: binary\r\n'
      + 'Content-ID: 4\r\n'
      + '\r\n'
      // DELETE
      + 'DELETE serviceRoot HTTP/1.1\r\n'
      + 'header5: value5\r\n'
      + '\r\n'
      + '\r\n'
      // CHANGESET END
      + '--changeset_--\r\n'
      // BATCH SEPARATOR
      + '--batch_\r\n'
      + 'Content-Type: application/http\r\n'
      + 'Content-Transfer-Encoding: binary\r\n'
      + '\r\n'
      // GET
      + 'GET serviceRoot HTTP/1.1\r\n'
      + 'header6: value6\r\n'
      + '\r\n'
      + '\r\n'
      // BATCH END
      + '--batch_--');
  });
});
