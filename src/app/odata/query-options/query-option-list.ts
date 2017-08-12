import { Utils } from '../utils/utils';

export class QueryOptionList {
    private queryOption;
    private items: any[];

    constructor(items: any[], queryOption: string) {
        Utils.requireNotNullNorUndefined(items, 'items');
        this.items = items;

        Utils.requireNotNullNorUndefined(queryOption, 'queryOption');
        this.queryOption = queryOption;
    }

    toString() {
        let res = '';
        if (Utils.isNullOrUndefined(this.items) || !this.items.length) {
            return res;
        }

        res = this.queryOption + '=';

        for (const item of this.items) {
            if (res !== this.queryOption + '=') {
                res += ',';
            }
            res += item;
        }
        return res;
    }
}
