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
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class ODataService {
  private static readonly IF_MATCH_HEADER = 'If-Match';

  constructor(private http: Http) { }

  get(odataQuery: ODataQuery, requestOptionsArgs?: RequestOptionsArgs): Observable<ODataResponse> {
    const url: string = odataQuery.toString();
    return this.http.get(url, requestOptionsArgs)
      .map(response => new ODataResponse(response))
      .catch(this.handleError);
  }

  post(odataQuery: ODataQueryAbstract, body: any, requestOptionsArgs?: RequestOptionsArgs): Observable<ODataResponse> {
    const url: string = odataQuery.toString();
    return this.http.post(url, body, requestOptionsArgs)
      .map(response => new ODataResponse(response))
      .catch(this.handleError);
  }

  patch(odataQuery: ODataQuery, body: any, etag?: string, requestOptionsArgs?: RequestOptionsArgs): Observable<ODataResponse> {
    const url: string = odataQuery.toString();
    const args: RequestOptionsArgs = this.mergeETag(requestOptionsArgs, etag);
    return this.http.patch(url, body, args)
      .map(response => new ODataResponse(response))
      .catch(this.handleError);
  }

  put(odataQuery: ODataQuery, body: any, etag?: string, requestOptionsArgs?: RequestOptionsArgs): Observable<ODataResponse> {
    const url: string = odataQuery.toString();
    const args: RequestOptionsArgs = this.mergeETag(requestOptionsArgs, etag);
    return this.http.put(url, body, args)
      .map(response => new ODataResponse(response))
      .catch(this.handleError);
  }

  delete(odataQuery: ODataQuery, etag?: string, requestOptionsArgs?: RequestOptionsArgs): Observable<ODataResponse> {
    const url: string = odataQuery.toString();
    const args: RequestOptionsArgs = this.mergeETag(requestOptionsArgs, etag);
    return this.http.delete(url, args)
      .map(response => new ODataResponse(response))
      .catch(this.handleError);
  }

  protected mergeETag(args: RequestOptionsArgs, etag: string): RequestOptionsArgs {
    if (Utils.isNullOrUndefined(etag)) {
      return args;
    }

    if (Utils.isNullOrUndefined(args)) {
      args = {};
    }
    if (Utils.isNullOrUndefined(args.headers)) {
      args.headers = new Headers();
    }

    args.headers.set(ODataService.IF_MATCH_HEADER, etag);

    return args;
  }

  protected mergeOverride(args1: RequestOptionsArgs, args2: RequestOptionsArgs): RequestOptionsArgs {
    if (Utils.isNullOrUndefined(args1)) {
      return args2;
    }
    if (Utils.isNullOrUndefined(args2)) {
      return args1;
    }

    const args: RequestOptionsArgs = { headers: new Headers(args1.headers) };

    // merge/override headers
    const headers2: Headers = args2.headers;
    for (const key of headers2.keys()) {
      args.headers.set(key, headers2.get(key));
    }

    // override withCredentials
    args.withCredentials = args2.withCredentials;

    // override responseType
    args.responseType = args2.responseType;

    return args;
  }

  protected handleError(error: Response | any): ErrorObservable {
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
