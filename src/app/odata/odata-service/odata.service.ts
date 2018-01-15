import { HttpOptions } from './http-options';
import { Utils } from '../utils/utils';
import { ODataQueryAbstract } from '../odata-query/odata-query-abstract';
import { ODataResponse } from '../odata-response/odata-response';
import { RequestOptionsArgs } from '@angular/http';
import { ODataQuery } from '../odata-query/odata-query';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ODataService {
  private static readonly IF_MATCH_HEADER = 'If-Match';

  constructor(private http: HttpClient) { }

  get(odataQuery: ODataQuery, httpOptions: HttpOptions = new HttpOptions()): Observable<ODataResponse> {
    const url: string = odataQuery.toString();
    return this.http.get(url, httpOptions)
      .map(response => new ODataResponse(response));
  }

  post(odataQuery: ODataQueryAbstract, body: any, httpOptions: HttpOptions = new HttpOptions()): Observable<ODataResponse> {
    const url: string = odataQuery.toString();
    return this.http.post(url, body, httpOptions)
      .map(response => new ODataResponse(response));
  }

  patch(odataQuery: ODataQuery, body: any, etag?: string, httpOptions: HttpOptions = new HttpOptions()): Observable<ODataResponse> {
    const url: string = odataQuery.toString();
    const newHttpOptions: HttpOptions = this.mergeETag(httpOptions, etag);
    return this.http.patch(url, body, newHttpOptions)
      .map(response => new ODataResponse(response));
  }

  put(odataQuery: ODataQuery, body: any, etag?: string, httpOptions: HttpOptions = new HttpOptions()): Observable<ODataResponse> {
    const url: string = odataQuery.toString();
    const newHttpOptions: HttpOptions = this.mergeETag(httpOptions, etag);
    return this.http.put(url, body, newHttpOptions)
      .map(response => new ODataResponse(response));
  }

  delete(odataQuery: ODataQuery, etag?: string, httpOptions: HttpOptions = new HttpOptions()): Observable<ODataResponse> {
    const url: string = odataQuery.toString();
    const newHttpOptions: HttpOptions = this.mergeETag(httpOptions, etag);
    return this.http.delete(url, newHttpOptions)
      .map(response => new ODataResponse(response));
  }

  protected mergeETag(options: HttpOptions, etag: string): HttpOptions {
    if (Utils.isNullOrUndefined(etag)) {
      return options;
    }

    if (Utils.isNullOrUndefined(options)) {
      options = new HttpOptions();
    }
    if (Utils.isNullOrUndefined(options.headers)) {
      options.headers = new HttpHeaders();
    }

    options.headers.set(ODataService.IF_MATCH_HEADER, etag);

    return options;
  }

  protected mergeOverride(options1: HttpOptions, options2: HttpOptions): HttpOptions {
    if (Utils.isNullOrUndefined(options1)) {
      return options2;
    }
    if (Utils.isNullOrUndefined(options2)) {
      return options1;
    }

    const options: HttpOptions = new HttpOptions();

    // merge headers
    for (const key of options1.headers.keys()) {
      options.headers.append(key, options1.headers.getAll(key));
    }
    for (const key of options2.headers.keys()) {
      options.headers.append(key, options2.headers.getAll(key));
    }

    // override withCredentials
    options.withCredentials = options2.withCredentials;

    // override responseType
    options.responseType = options2.responseType;

    return options;
  }
}
