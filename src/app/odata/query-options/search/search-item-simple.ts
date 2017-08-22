import { Utils } from '../../utils/utils';
import { SearchItem } from './search-item';

export class SearchItemSimple extends SearchItem {
    constructor(protected value: string) {
        super();
        Utils.requireNotNullNorUndefined(value, 'value');
    }

    toString(): string {
        return this.value;
    }

    isEmpty(): boolean {
        return Utils.isNullOrUndefined(this.value) || !this.value.length;
    }
}
