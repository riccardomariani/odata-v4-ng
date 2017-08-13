export class Utils {
    static isNull(value: any): boolean {
        return value === null;
    }

    static isUndefined(value: any): boolean {
        return typeof (value) === 'undefined';
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
        if (typeof (fieldValue) !== 'undefined') {
            throw new Error(fieldName + ' is null');
        }
    }

    static requireNotNull(fieldValue: any, fieldName: String) {
        if (fieldValue === null) {
            throw new Error(fieldName + ' is null');
        }
    }

    static requireNotUndefined(fieldValue: any, fieldName: String) {
        if (typeof (fieldValue) === 'undefined') {
            throw new Error(fieldName + ' is undefined');
        }
    }

    static requireNotNullNorUndefined(fieldValue: any, fieldName: String) {
        Utils.requireNotNull(fieldValue, fieldName);
        Utils.requireNotUndefined(fieldValue, fieldName);
    }

    static requireNullOrUndefined(fieldValue: any, fieldName: String) {
        if (!Utils.isNull(fieldValue) && !Utils.isUndefined(fieldValue)) {
            if (!Utils.isNull(fieldValue)) {
                throw new Error(fieldName + ' is null');
            }
            if (!Utils.isUndefined(fieldValue)) {
                throw new Error(fieldName + ' is undefined');
            }
        }
    }

    static requireNotEmpty(fieldValue: any, fieldName: String) {
        if (typeof (fieldValue) === 'string' && !(<string>fieldValue).length
            || fieldValue.hasOwnProperty('isEmpty') && !fieldValue.isEmpty()) {
            throw new Error(fieldName + ' is empty');
        }
    }

    static requireNotNegative(fieldValue: number, fieldName: String) {
        if (fieldValue < 0) {
            throw new Error(fieldName + ' is negative');
        }
    }

    static removeEndingSeparator(value: string): string {
        if (!Utils.isNullOrUndefined(value) && value.endsWith('/')) {
            if (value.length === 1) {
                return '';
            }
            return value.substring(0, value.length - 1);
        }
        return value;
    }

    static getValue(value: any, asQuotedString: boolean = true): string {
        let res: any = value;

        if ((typeof (res) === 'string' || res instanceof String) && asQuotedString) {
            // escape single quote
            res = res.replace(/'/g, '\'\'');
            res = '\'' + res + '\'';
            return res;
        } else if (res instanceof Date) {
            res.toISOString();
        }

        return res;
    }

    static getValueURIEncoded(value: any): string {
        return encodeURIComponent(value);
    }
}
