import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Response, ResponseContentType, RequestOptionsArgs, Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ODataQuery } from '../odata-query/odata-query';
import { ODataResponse } from '../odata-response/odata-response';

@Injectable()
export class ODataService {
  static readonly HEADERS: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  get(odataQuery: ODataQuery, withCredentials: boolean = false): Observable<ODataResponse> {
    const url: string = odataQuery.toString();

    const requestOptionsArgs: RequestOptionsArgs = {
      headers: ODataService.HEADERS,
      withCredentials: withCredentials,
      responseType: ResponseContentType.Json
    };

    return this.http.get(url, requestOptionsArgs)
      .map(response => new ODataResponse(response))
      .catch(this.handleError);
  }

  post(odataQuery: ODataQuery, body: any, withCredentials: boolean = false): Observable<ODataResponse> {
    const url: string = odataQuery.toString();

    const requestOptionsArgs: RequestOptionsArgs = {
      headers: ODataService.HEADERS,
      withCredentials: withCredentials,
      responseType: ResponseContentType.Json
    };

    return this.http.post(url, body, requestOptionsArgs)
      .map(response => new ODataResponse(response))
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body, null, 4);
      errMsg = `${error.status} - ${error.statusText || ''} - ${JSON.stringify(err, null, 4)}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    return Observable.throw(errMsg);
  }
}
