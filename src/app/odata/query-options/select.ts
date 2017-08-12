import { Utils } from '../utils/utils';
import { QueryOptionList } from './query-option-list';

export class Select extends QueryOptionList {
    static readonly $SELECT = '$select';

    constructor(strings: string[]) {
        super(strings, Select.$SELECT);
    }
}
