import { Utils } from '../../utils/utils';
import { OperatorLogical } from '../operator';
import { SearchItem } from './search-item';

export class SearchItemLogical extends SearchItem {
    constructor(private values: SearchItem[], private operator: OperatorLogical) {
        super();
        Utils.requireNotNullNorUndefined(values, 'values');
        Utils.requireNotNullNorUndefined(operator, 'operator');
    }

    toString(): string {
        if (Utils.isNullOrUndefined(this.values)) {
            return '';
        }
        let res = '';
        for (const value of this.values) {
            if (!res.length) {
                res += ` ${this.operator} `;
            }
            res += value;
        }
    }

    isEmpty(): boolean {
        if (Utils.isNullOrUndefined(this.values)) {
            return true;
        }
        for (const value of <SearchItem[]>this.values) {
            if (value.isEmpty()) {
                return true;
            }
        }
        return false;
    }
}
