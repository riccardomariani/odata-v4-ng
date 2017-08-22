import { Utils } from '../utils/utils';
import { QueryOptionList } from './query-option-list';

export enum Order {
    ASC, DESC
}

export class Orderby {
    private property: string;
    private order: Order;

    constructor(property: string, order?: Order) {
        Utils.requireNotNullNorUndefined(property, 'property');
        this.property = property;
        this.order = order;
    }

    toString() {
        let res = this.property;
        if (!Utils.isNullOrUndefined(this.order)) {
            res += ' ' + Order[this.order].toLowerCase();
        }
        return res;
    }
}
