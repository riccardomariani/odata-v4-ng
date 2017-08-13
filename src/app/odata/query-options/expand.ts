import { Filter } from './filter';
import { Utils } from '../utils/utils';
import { QueryOptionList } from './query-option-list';
import { Select } from './select';

export class Expand extends QueryOptionList {
    constructor(expandItems: ExpandItem[]) {
        super(expandItems);
    }
}

export class ExpandItem {
    private entitySet: string;
    private select: Select;
    private filter: Filter;

    constructor(entitySet: string, select?: Select, filter?: Filter) {
        Utils.requireNotNullNorUndefined(entitySet, 'entitySet');
        Utils.requireNotEmpty(entitySet, 'entitySet');
        this.entitySet = entitySet;
        this.select = select;
        this.filter = filter;
    }

    toString(): string {
        let res: string = this.entitySet;
        if (!Utils.isNullOrUndefined(this.select)) {
            res += '($select=' + this.select + ')';
        }
        if (!Utils.isNullOrUndefined(this.filter)) {
            res += '($filter=' + this.filter + ')';
        }
        return res;
    }
}
