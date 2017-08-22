import { SearchItemSimple } from './search-item-simple';

export class SearchItemPhrase extends SearchItemSimple {
    toString(): string {
        return `"${this.value}"`;
    }
}
