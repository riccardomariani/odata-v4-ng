import { Utils } from '../utils/utils';

export class QueryOptionList {
    private items: any[];

    static toString(items: any[]): string {
        let res = '';
        if (Utils.isNullOrUndefined(items) || !items.length) {
            return res;
        }

        for (const item of items) {
            if (res.length) {
                res += ',';
            }
            res += item;
        }
        return res;
    }

    static isEmpty(items: any[]): boolean {
        return Utils.isNullOrUndefined(items) || !items.length;
    }

    constructor(items: any[]) {
        Utils.requireNotNullNorUndefined(items, 'items');
        this.items = items;
    }

    toString(): string {
        let res = '';
        if (Utils.isNullOrUndefined(this.items) || !this.items.length) {
            return res;
        }

        for (const item of this.items) {
            if (res.length) {
                res += ',';
            }
            res += item;
        }
        return res;
    }

    isEmpty(): boolean {
        return Utils.isNullOrUndefined(this.items) || !this.items.length;
    }
}
