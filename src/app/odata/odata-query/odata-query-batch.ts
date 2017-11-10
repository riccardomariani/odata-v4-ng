import { HttpHeaders } from '@angular/common/http';
import { ODataResponse } from '../odata-response/odata-response';
import { ODataQuery } from './odata-query';
import { Utils } from '../utils/utils';
import { ODataService } from '../odata-service/odata.service';
import { Observable } from 'rxjs/Observable';
import { ODataQueryAbstract } from './odata-query-abstract';
import uuid from 'uuid';
import { HttpOptions } from '../odata-service/http-options';

enum Method {
  GET, POST, PUT, PATCH, DELETE
}
class Request {
  constructor(
    public method: Method,
    public odataQuery: ODataQuery,
    public body?: any,
    public options?: HttpOptions) { }
}

export class ODataQueryBatch extends ODataQueryAbstract {
  private static readonly BOUNDARY_PREFIX = '--';
  private static readonly BATCH_PREFIX = 'batch_';
  private static readonly CHANGESET_PREFIX = 'changeset_';
  private static readonly NEWLINE = '\r\n';

  // CONSTANT SEGMENTS
  private static readonly $BATCH = '$batch';

  // HEADERS
  private static readonly HTTP11 = 'HTTP/1.1';
  private static readonly CONTENT_TYPE = 'Content-Type';
  private static readonly CONTENT_ID = 'Content-ID';
  private static readonly IF_MATCH = 'If-Match';

  // HEADER VALUES
  private static readonly MULTIPART_MIXED = 'multipart/mixed;boundary=';
  private static readonly APPLICATION_HTTP = 'application/http';
  private static readonly APPLICATION_JSON = 'application/json';

  // VARIABLES
  private requests: Request[];
  private batchBoundary: string;
  private changesetBoundary: string;
  private changesetID: number;

  constructor(odataService: ODataService, serviceRoot: string) {
    super(odataService, serviceRoot);
    Utils.requireNotNullNorUndefined(odataService, 'odataService');
    Utils.requireNotNullNorUndefined(serviceRoot, 'serviceRoot');
    Utils.requireNotEmpty(serviceRoot, 'serviceRoot');
    this.queryString = Utils.appendSegment(serviceRoot, ODataQueryBatch.$BATCH);
    this.requests = [];
    this.batchBoundary = ODataQueryBatch.BATCH_PREFIX + uuid();
    this.changesetBoundary = null;
    this.changesetID = 1;
  }

  get(odataQuery: ODataQuery, options?: HttpOptions): ODataQueryBatch {
    this.requests.push(new Request(Method.GET, odataQuery, null, options));
    return this;
  }

  post(odataQuery: ODataQuery, body: any, options?: HttpOptions): ODataQueryBatch {
    this.requests.push(new Request(Method.POST, odataQuery, body, options));
    return this;
  }

  put(odataQuery: ODataQuery, body: any, options?: HttpOptions): ODataQueryBatch {
    this.requests.push(new Request(Method.PUT, odataQuery, body, options));
    return this;
  }

  patch(odataQuery: ODataQuery, body: any, options?: HttpOptions): ODataQueryBatch {
    this.requests.push(new Request(Method.PATCH, odataQuery, body, options));
    return this;
  }

  delete(odataQuery: ODataQuery, options?: HttpOptions): ODataQueryBatch {
    this.requests.push(new Request(Method.DELETE, odataQuery, null, options));
    return this;
  }

  execute(options: HttpOptions = new HttpOptions()): Observable<ODataResponse> {
    // set headers
    if (Utils.isNullOrUndefined(options)) {
      options = new HttpOptions();
    }
    if (Utils.isNullOrUndefined(options.headers)) {
      options.headers = new HttpHeaders({
        CONTENT_TYPE: ODataQueryBatch.MULTIPART_MIXED + this.batchBoundary
      });
    }

    // send request
    return this.odataService.post(this, this.getBody(), options);
  }

  toString(): string {
    return this.queryString;
  }

  getBody(): string {
    let res = '';

    for (const request of this.requests) {
      const method: Method = request.method;
      const odataQuery: ODataQuery = request.odataQuery;
      const options: HttpOptions = request.options;
      const body: any = request.body;

      if (method === Method.GET) {
        if (Utils.isNotNullNorUndefined(this.changesetBoundary)) {
          res += ODataQueryBatch.BOUNDARY_PREFIX + this.changesetBoundary + ODataQueryBatch.NEWLINE;
          this.changesetBoundary = null;
        }
        res += ODataQueryBatch.BOUNDARY_PREFIX + this.batchBoundary + ODataQueryBatch.NEWLINE;
        res += ODataQueryBatch.CONTENT_TYPE + ': ' + ODataQueryBatch.APPLICATION_HTTP + ODataQueryBatch.NEWLINE;
        res += ODataQueryBatch.NEWLINE;
        res += Method[method] + ' ' + odataQuery + ODataQueryBatch.NEWLINE;
        res += ODataQueryBatch.NEWLINE;
        res += ODataQueryBatch.NEWLINE;
      } else {
        // get If-Match
        let ifMatch = null;
        if (Utils.isNotNullNorUndefined(options)
          && Utils.isNotNullNorUndefined(options.headers)) {
          ifMatch = options.headers.get(ODataQueryBatch.IF_MATCH);
        }

        if (Utils.isNullOrUndefined(this.changesetBoundary)) {
          this.changesetBoundary = ODataQueryBatch.CHANGESET_PREFIX + uuid();
          res += ODataQueryBatch.BOUNDARY_PREFIX + this.batchBoundary + ODataQueryBatch.NEWLINE;
          res += ODataQueryBatch.CONTENT_TYPE + ': ' + ODataQueryBatch.MULTIPART_MIXED + this.changesetBoundary + ODataQueryBatch.NEWLINE;
          res += ODataQueryBatch.NEWLINE;
        } else {

        }

        res += ODataQueryBatch.BOUNDARY_PREFIX + this.changesetBoundary + ODataQueryBatch.NEWLINE;
        res += ODataQueryBatch.CONTENT_TYPE + ': ' + ODataQueryBatch.APPLICATION_HTTP + ODataQueryBatch.NEWLINE;
        res += ODataQueryBatch.CONTENT_ID + ': ' + this.changesetID++ + ODataQueryBatch.NEWLINE;
        res += ODataQueryBatch.NEWLINE;
        res += Method[method] + ' ' + odataQuery + ODataQueryBatch.HTTP11 + ODataQueryBatch.NEWLINE;
        res += ODataQueryBatch.CONTENT_TYPE + ': ' + ODataQueryBatch.APPLICATION_JSON + ODataQueryBatch.NEWLINE;
        if (Utils.isNotNullNorUndefined(ifMatch)) {
          res += ODataQueryBatch.IF_MATCH + ': ' + ifMatch + ODataQueryBatch.NEWLINE;
        }
        res += ODataQueryBatch.NEWLINE;
        res += JSON.stringify(body) + ODataQueryBatch.NEWLINE;
      }
    }

    if (res.length) {
      if (Utils.isNotNullNorUndefined(this.changesetBoundary)) {
        res += ODataQueryBatch.BOUNDARY_PREFIX + this.changesetBoundary + ODataQueryBatch.NEWLINE;
        this.changesetBoundary = null;
      }
      res += ODataQueryBatch.BOUNDARY_PREFIX + this.batchBoundary;
    }

    return res;
  }

  // protected initBody(): string {
  //   let res: string = Method[Method.POST] + ' ' + this.queryString + ' ' + ODataQueryBatch.HTTP11 + ODataQueryBatch.NEWLINE;
  //   res += ODataQueryBatch.ODATA_VERSION + ': ' + ODataQueryBatch.ODATA_V4 + ODataQueryBatch.NEWLINE;
  //   res += ODataQueryBatch.CONTENT_TYPE + ': ' + ODataQueryBatch.MULTIPART_MIXED + this.batchBoundary + ODataQueryBatch.NEWLINE;
  //   res += ODataQueryBatch.NEWLINE;
  //   return res;
  // }
}
