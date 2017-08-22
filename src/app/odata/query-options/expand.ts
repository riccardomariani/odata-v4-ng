import { Filter } from './filter';
import { Utils } from '../utils/utils';
import { QueryOptionList } from './query-option-list';

export class Expand {
    private entitySet: string;
    private select: string[];
    private filter: Filter;

    constructor(entitySet: string, select?: string[], filter?: Filter) {
        Utils.requireNotNullNorUndefined(entitySet, 'entitySet');
        Utils.requireNotEmpty(entitySet, 'entitySet');
        this.entitySet = entitySet;
        this.select = select;
        this.filter = filter;
    }

    toString(): string {
        let res: string = this.entitySet;
        if (!Utils.isNullOrUndefined(this.select)) {
            res += '($select=' + QueryOptionList.toString(this.select) + ')';
        }
        if (!Utils.isNullOrUndefined(this.filter)) {
            res += '($filter=' + this.filter + ')';
        }
        return res;
    }
}
