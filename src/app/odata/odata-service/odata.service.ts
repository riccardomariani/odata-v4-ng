import { Utils } from '../utils/utils';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Response, ResponseContentType, RequestOptionsArgs, Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ODataQuery } from '../odata-query/odata-query';
import { ODataResponse } from '../odata-response/odata-response';
import { ODataQueryAbstract } from '../odata-query/odata-query-abstract';

@Injectable()
export class ODataService {
  private static readonly REQUEST_OPTIONS_ARGS: RequestOptionsArgs = {
    headers: new Headers({ 'Content-Type': 'application/json' }),
    withCredentials: false,
    responseType: ResponseContentType.Json
  };

  constructor(private http: Http) { }

  get(odataQuery: ODataQuery, requestOptionsArgs?: RequestOptionsArgs): Observable<ODataResponse> {
    const url: string = odataQuery.toString();
    const args: RequestOptionsArgs = this.mergeOverride(ODataService.REQUEST_OPTIONS_ARGS, requestOptionsArgs);
    return this.http.get(url, args)
      .map(response => new ODataResponse(response))
      .catch(this.handleError);
  }

  post(odataQuery: ODataQueryAbstract, body: any, requestOptionsArgs?: RequestOptionsArgs): Observable<ODataResponse> {
    const url: string = odataQuery.toString();
    const args: RequestOptionsArgs = this.mergeOverride(ODataService.REQUEST_OPTIONS_ARGS, requestOptionsArgs);
    return this.http.post(url, body, args)
      .map(response => new ODataResponse(response))
      .catch(this.handleError);
  }

  put(odataQuery: ODataQuery, body: any, requestOptionsArgs?: RequestOptionsArgs): Observable<ODataResponse> {
    const url: string = odataQuery.toString();
    const args: RequestOptionsArgs = this.mergeOverride(ODataService.REQUEST_OPTIONS_ARGS, requestOptionsArgs);
    return this.http.put(url, body, args)
      .map(response => new ODataResponse(response))
      .catch(this.handleError);
  }

  patch(odataQuery: ODataQuery, body: any, requestOptionsArgs?: RequestOptionsArgs): Observable<ODataResponse> {
    const url: string = odataQuery.toString();
    const args: RequestOptionsArgs = this.mergeOverride(ODataService.REQUEST_OPTIONS_ARGS, requestOptionsArgs);
    return this.http.patch(url, body, args)
      .map(response => new ODataResponse(response))
      .catch(this.handleError);
  }

  delete(odataQuery: ODataQuery, requestOptionsArgs?: RequestOptionsArgs): Observable<ODataResponse> {
    const url: string = odataQuery.toString();
    const args: RequestOptionsArgs = this.mergeOverride(ODataService.REQUEST_OPTIONS_ARGS, requestOptionsArgs);
    return this.http.delete(url, args)
      .map(response => new ODataResponse(response))
      .catch(this.handleError);
  }

  protected mergeOverride(args1: RequestOptionsArgs, args2: RequestOptionsArgs): RequestOptionsArgs {
    Utils.requireNotNullNorUndefined(args1, 'args1');
    const args: RequestOptionsArgs = args1;

    if (Utils.isNotNullNorUndefined(args2)) {
      // merge/override headers
      const headers: Headers = args.headers;
      const headers2: Headers = args2.headers;
      for (const key of headers2.keys()) {
        headers.set(key, headers2.get(key));
      }

      // override withCredentials
      args.withCredentials = args2.withCredentials;

      // override responseType
      args.responseType = args2.responseType;
    }

    return args;
  }

  protected handleError(error: Response | any) {
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
