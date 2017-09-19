import { Utils } from '../utils/utils';
import { Response } from '@angular/http';
import { EntitySet } from './entity-collection';
import { Metadata } from './metadata';

export class ODataResponse {
    static readonly VALUE = 'value';
    static readonly ODATA_COUNT = '@odata.count';

    private response: Response;

    constructor(response: Response) {
        this.response = response;
    }

    isOk(): boolean {
        return this.response.ok;
    }

    getBodyAsJson(): any {
        const contentType: string = this.response.headers.get('Content-Type');
        if (contentType.includes('json')) {
            return this.response.json();
        }
        return null;
    }

    getBodyAsText(): string {
        return this.response.text();
    }

    toMetadata(): Metadata {
        const xml: string = this.response.text();
        return new Metadata(xml);
    }

    toEntitySet<T>(): EntitySet<T> {
        const json: any = this.getBodyAsJson();
        if (Utils.isNotNullNorUndefined(json) && json.hasOwnProperty(ODataResponse.VALUE)) {
            let count: number = null;
            if (json.hasOwnProperty(ODataResponse.ODATA_COUNT)) {
                count = json[ODataResponse.ODATA_COUNT];
            }
            return new EntitySet<T>(json[ODataResponse.VALUE], count);
        }
        return null;
    }

    toEntity<T>(): T {
        return this.toObject<T>();
    }

    toPropertyValue<T>(): T {
        const json: any = this.getBodyAsJson();
        if (Utils.isNotNullNorUndefined(json)) {
            if (json.hasOwnProperty(ODataResponse.VALUE)) {
                return <T>json[ODataResponse.VALUE];
            }
            return null;
        } else {
            return <T>JSON.parse(this.response.text());
        }
    }

    toComplexValue<T>(): T {
        return this.toObject<T>();
    }

    toCount(): number {
        return Number(this.response.text);
    }

    toString(): string {
        let res = `${this.response.status} ${this.response.statusText}\n`;

        const headers = this.response.headers;
        for (const key of headers.keys()) {
            res += key + ': ';
            let valueString = '';
            for (const value of headers.getAll(key)) {
                if (valueString.length) {
                    valueString += ' ';
                }
                valueString += value;
            }
            res += valueString + '\n';
        }

        const json = this.getBodyAsJson();
        if (Utils.isNotNullNorUndefined(json)) {
            res += JSON.stringify(json, null, 4);
        } else {
            res += this.getBodyAsText();
        }
        return res;
    }

    protected toObject<T>(): T {
        const json: any = this.getBodyAsJson();
        if (Utils.isNotNullNorUndefined(json)) {
            return <T>json;
        }
        return null;
    }
}
