import {HttpHeaders, HttpResponse} from '@angular/common/http';

import { Utils } from '../utils/utils';
import { EntitySet } from './entity-collection';
import { Metadata } from './metadata';
import { ODataResponseAbstract } from './odata-response-abstract';
import { ODataResponseBatch } from './odata-response-batch';

export class ODataResponse extends ODataResponseAbstract {
    private static readonly VALUE = 'value';
    private static readonly ODATA_COUNT = '@odata.count';
    private static readonly CONTENT_TYPE = 'content-type';

    constructor(httpResponse: HttpResponse<string>) {
        super(httpResponse);
    }

  getBodyAsJson(): any {
    const headers: HttpHeaders = this.getHttpResponse().headers;
    let contentType: string;
    for (const key of headers.keys()) {
      if (key.toLowerCase() === ODataResponse.CONTENT_TYPE) {
        contentType = headers.get(key).toLowerCase();
        break;
      }
    }
    if (Utils.isNotNullNorUndefined(contentType) && contentType.includes('application/json')) {
      try {
        return JSON.parse(this.getBodyAsText());
      } catch (error) {
        return null;
      }
    }
    return null;
  }

    toMetadata(): Metadata {
        const xml: string = this.getBodyAsText();
        return new Metadata(xml);
    }

    toEntitySet<T>(type?: (new () => T)): EntitySet<T> {
        const json: any = this.getBodyAsJson();
        if (Utils.isNotNullNorUndefined(json) && json.hasOwnProperty(ODataResponse.VALUE)) {
            let count: number = null;
            if (json.hasOwnProperty(ODataResponse.ODATA_COUNT)) {
                count = json[ODataResponse.ODATA_COUNT];
            }
            return new EntitySet<T>(json[ODataResponse.VALUE], count, type);
        }
        return null;
    }

    toComplexCollection<T>(type?: (new () => T)): T[] {
        const json: any = this.getBodyAsJson();

        if (Utils.isNotNullNorUndefined(json) && json.hasOwnProperty(ODataResponse.VALUE)) {
            const res: T[] = [];
            for (const object of json[ODataResponse.VALUE]) {
                res.push(this.toObject<T>(object, type));
            }
            return res;
        }

        return null;
    }

    toEntity<T>(type?: (new () => T)): T {
        const json: any = this.getBodyAsJson();
        return this.toObject<T>(json, type);
    }

    toComplexValue<T>(type?: (new () => T)): T {
        const json: any = this.getBodyAsJson();
        return this.toObject<T>(json, type);
    }

    toPropertyValue<T>(): T {
        const json: any = this.getBodyAsJson();
        if (Utils.isNotNullNorUndefined(json)) {
            if (json.hasOwnProperty(ODataResponse.VALUE)) {
                return json[ODataResponse.VALUE] as T;
            }
            return null;
        } else {
            return JSON.parse(this.getBodyAsText()) as T;
        }
    }

    toCount(): number {
        return Number(this.getBodyAsText());
    }

    toODataResponseBatch(): ODataResponseBatch {
        return new ODataResponseBatch(this.getHttpResponse());
    }

    protected toObject<T>(object: any, type: (new () => T)): T {
        if (Utils.isNotNullNorUndefined(object)) {
            if (Utils.isNullOrUndefined(type)) {
                return Object.assign({}, object);
            } else {
                return Object.assign(new type(), object);
            }
        }
        return null;
    }
}
