import { Response } from '@angular/http';
import { EntityCollection } from './entity-collection';

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

    toEntityCollection<T>(): EntityCollection<T> {
        const json: any = this.response.json();
        if (json && json.hasOwnProperty(ODataResponse.VALUE)) {
            let count: number = null;
            if (json.hasOwnProperty(ODataResponse.ODATA_COUNT)) {
                count = json[ODataResponse.ODATA_COUNT];
            }
            return new EntityCollection<T>(json[ODataResponse.VALUE], count);
        }
        return null;
    }

    toEntity<T>(): T {
        const json: any = this.response.json();
        if (json) {
            return <T>json;
        }
        return null;
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
        return res;
    }
}
