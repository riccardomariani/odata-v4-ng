import { QueryOptions } from './query-options';
import { Utils } from '../utils/utils';

export class Expand {
    private entitySet: string;
    private queryOptions: QueryOptions;

    constructor(entitySet: string, queryOptions?: QueryOptions) {
        Utils.requireNotNullNorUndefined(entitySet, 'entitySet');
        Utils.requireNotEmpty(entitySet, 'entitySet');
        this.entitySet = entitySet;
        this.queryOptions = queryOptions;
    }

    toString(): string {
        let res: string = this.entitySet;
        if (!Utils.isNullOrUndefined(this.queryOptions)) {
            res += '(' + this.queryOptions + ')';
        }
        return res;
    }
}
