
import { QuotedString } from '../odata-query/quoted-string';

export class Utils {
    static isNull(value: any): boolean {
        return value === null;
    }

    static isUndefined(value: any): boolean {
        return value === undefined;
    }

    static isNullOrUndefined(value: any): boolean {
        return Utils.isNull(value) || Utils.isUndefined(value);
    }

    static isNotNullNorUndefined(value: any): boolean {
        return !Utils.isNull(value) && !Utils.isUndefined(value);
    }

    static requireNull(fieldValue: any, fieldName: String) {
        if (fieldValue !== null) {
            throw new Error(fieldName + ' is not null');
        }
    }

    static requireUndefined(fieldValue: any, fieldName: String) {
        if (fieldValue !== undefined) {
            throw new Error(fieldName + ' is not undefined');
        }
    }

    static requireNotNull(fieldValue: any, fieldName: String) {
        if (fieldValue === null) {
            throw new Error(fieldName + ' is null');
        }
    }

    static requireNotUndefined(fieldValue: any, fieldName: String) {
        if (fieldValue === undefined) {
            throw new Error(fieldName + ' is undefined');
        }
    }

    static requireNotNullNorUndefined(fieldValue: any, fieldName: String) {
        Utils.requireNotNull(fieldValue, fieldName);
        Utils.requireNotUndefined(fieldValue, fieldName);
    }

    static requireNullOrUndefined(fieldValue: any, fieldName: String) {
        if (!Utils.isNull(fieldValue) && !Utils.isUndefined(fieldValue)) {
            throw new Error(fieldName + ' is not null nor undefined');
        }
    }

    static requireNotEmpty(fieldValue: any, fieldName: String) {
        if (Utils.isNullOrUndefined(fieldValue)
            || typeof (fieldValue) === 'string' && !fieldValue.length
            || typeof (fieldValue.isEmpty) === 'function' && fieldValue.isEmpty()) {
            throw new Error(fieldName + ' is empty');
        }
    }

    static requireNotNegative(fieldValue: number, fieldName: String) {
        if (fieldValue < 0) {
            throw new Error(fieldName + ' is negative');
        }
    }

    static appendSegment(path: string, segment: string): string {
        Utils.requireNotNullNorUndefined(path, 'path');
        Utils.requireNotNullNorUndefined(segment, 'segment');
        if (!path.endsWith('/')) {
            path += '/';
        }
        return path + segment;
    }

    static removeEndingSeparator(value: string): string {
        Utils.requireNotNullNorUndefined(value, 'value');
        if (value.endsWith('/')) {
            if (value.length === 1) {
                return '';
            }
            return value.substring(0, value.length - 1);
        }
        return value;
    }

    static getValueURI(value: boolean | number | string | QuotedString, encodeURI: boolean): any {
        Utils.requireNotNullNorUndefined(value, 'value');
        Utils.requireNotNullNorUndefined(encodeURI, 'encodeURI');

        let res: any = value;

        if (typeof (res) === 'string') {
            // encode uri component
            if (Utils.isNotNullNorUndefined(encodeURI) && encodeURI) {
                res = encodeURIComponent(res);
            }
        } else if (res instanceof QuotedString) {
            // escape single quote
            res = res.toString().replace(/'/g, '\'\'');

            // encode uri component
            if (Utils.isNotNullNorUndefined(encodeURI) && encodeURI) {
                res = encodeURIComponent(res);
            }

            // add start/ending quotes
            res = '\'' + res + '\'';
        }

        // boolean, number
        return res;
    }
}
