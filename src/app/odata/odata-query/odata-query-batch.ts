import { ODataResponse } from '../odata-response/odata-response';
import { Headers, RequestOptionsArgs } from '@angular/http';
import { ODataQuery } from './odata-query';
import { Utils } from '../utils/utils';
import { ODataService } from '../odata-service/odata.service';
import { Observable } from 'rxjs/Observable';
import { ODataQueryAbstract } from './odata-query-abstract';
import uuid from 'uuid';

enum Method {
  GET, POST, PUT, PATCH, DELETE
}
class Request {
  constructor(
    public method: Method,
    public odataQuery: ODataQuery,
    public body?: any,
    public requestOptionsArgs?: RequestOptionsArgs) { }
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

  get(odataQuery: ODataQuery, requestOptionsArgs?: RequestOptionsArgs): ODataQueryBatch {
    this.requests.push(new Request(Method.GET, odataQuery, null, requestOptionsArgs));
    return this;
  }

  post(odataQuery: ODataQuery, body: any, requestOptionsArgs?: RequestOptionsArgs): ODataQueryBatch {
    this.requests.push(new Request(Method.POST, odataQuery, body, requestOptionsArgs));
    return this;
  }

  put(odataQuery: ODataQuery, body: any, requestOptionsArgs?: RequestOptionsArgs): ODataQueryBatch {
    this.requests.push(new Request(Method.PUT, odataQuery, body, requestOptionsArgs));
    return this;
  }

  patch(odataQuery: ODataQuery, body: any, requestOptionsArgs?: RequestOptionsArgs): ODataQueryBatch {
    this.requests.push(new Request(Method.PATCH, odataQuery, body, requestOptionsArgs));
    return this;
  }

  delete(odataQuery: ODataQuery, requestOptionsArgs?: RequestOptionsArgs): ODataQueryBatch {
    this.requests.push(new Request(Method.DELETE, odataQuery, null, requestOptionsArgs));
    return this;
  }

  execute(requestOptionsArgs?: RequestOptionsArgs): Observable<ODataResponse> {
    // set headers
    if (Utils.isNullOrUndefined(requestOptionsArgs)) {
      requestOptionsArgs = {};
    }
    if (Utils.isNullOrUndefined(requestOptionsArgs.headers)) {
      requestOptionsArgs.headers = new Headers({
        CONTENT_TYPE: ODataQueryBatch.MULTIPART_MIXED + this.batchBoundary
      });
    }

    // send request
    return this.odataService.post(this, this.getBody(), requestOptionsArgs);
  }

  toString(): string {
    return this.queryString;
  }

  getBody(): string {
    let res = '';

    for (const request of this.requests) {
      const method = request.method;
      const odataQuery = request.odataQuery;
      const requestOptionsArgs = request.requestOptionsArgs;
      const body = request.body;

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
        if (Utils.isNotNullNorUndefined(requestOptionsArgs)
          && Utils.isNotNullNorUndefined(requestOptionsArgs.headers)) {
          ifMatch = requestOptionsArgs.headers.get(ODataQueryBatch.IF_MATCH);
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
