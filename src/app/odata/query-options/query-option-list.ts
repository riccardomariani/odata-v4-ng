import { Utils } from '../utils/utils';

export class QueryOptionList {
    private items: any[];

    constructor(items: any[]) {
        Utils.requireNotNullNorUndefined(items, 'items');
        this.items = items;
    }

    toString() {
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
}
