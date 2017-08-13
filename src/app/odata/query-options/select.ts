import { Utils } from '../utils/utils';
import { QueryOptionList } from './query-option-list';

export class Select extends QueryOptionList {
    constructor(strings: string[]) {
        super(strings);
    }
}
