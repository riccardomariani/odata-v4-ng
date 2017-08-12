import { Utils } from '../utils/utils';
import { OperatorComparison, OperatorLogical } from './operator';
import { QueryOptionList } from './query-option-list';

export class Filter extends QueryOptionList {
    static readonly $FILTER = '$filter';

    constructor(filterItems: FilterItem[]) {
        super(filterItems, Filter.$FILTER);
    }
}

export abstract class FilterItem {
    abstract toString(): string;
}

export class FilterCompositionItem extends FilterItem {
    private filters: Filter[];
    private operator: OperatorLogical;

    constructor(filters: Filter[], operator: OperatorLogical) {
        super();
        this.filters = filters;
        this.operator = operator;
    }

    toString(): string {
        let res = '';

        for (const filter of this.filters) {
            if (!res.length) {
                res += ` ${this.operator} `;
            }
            res += filter.toString();
        }

        return res;
    }
}

export class FilterBinaryItem extends FilterItem {
    private operator: OperatorComparison;
    private firstOperand: any;
    private secondOperand: any;

    constructor(firstOperand: any, operator: OperatorComparison, secondOperand: any) {
        super();

        Utils.requireNotNullNorUndefined(firstOperand, 'firstOperator');
        this.firstOperand = firstOperand;

        Utils.requireNotNullNorUndefined(operator, 'operand');
        this.operator = operator;

        Utils.requireNotNullNorUndefined(secondOperand, 'secondOperator');
        this.secondOperand = secondOperand;
    }

    toString(): string {
        return `${this.firstOperand} ${this.operator} ${Utils.getEscapedValue(this.secondOperand)}`;
    }
}

export class FilterAnyItem extends FilterItem {
    private entitySet: string;
    private filter: Filter;

    constructor(entitySet: string, filter: Filter) {
        super();

        Utils.requireNotNullNorUndefined(entitySet, 'entitySet');
        this.entitySet = entitySet;

        Utils.requireNotNullNorUndefined(filter, 'filter');
        this.filter = filter;
    }

    toString(): string {
        return `${this.entitySet}/any(x:x/${this.filter.toString()})`;
    }
}

export class FilterFreeItem extends FilterItem {
    private filter: string;

    constructor(filter: string) {
        super();

        Utils.requireNotNullNorUndefined(filter, 'filter');
        this.filter = filter;
    }

    toString(): string {
        return this.filter;
    }
}
