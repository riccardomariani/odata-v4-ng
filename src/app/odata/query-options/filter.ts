import { Utils } from '../utils/utils';
import { OperatorComparison, OperatorLogical } from './operator';
import { QueryOptionList } from './query-option-list';

export abstract class Filter {
    abstract toString(): string;
}

export abstract class FilterHasProperty {
    protected property: string;

    constructor(property: string) {
        this.setProperty(property);
    }

    setProperty(property: string): void {
        Utils.requireNotNullNorUndefined(property, 'property');
        this.property = property;
    }

    getProperty(): string {
        return this.property;
    }
}

export abstract class FilterHasFilter {
    protected filter: Filter | Filter[];

    constructor(filter: Filter | Filter[]) {
        this.filter = filter;
    }

    getFilter(): Filter | Filter[] {
        return this.filter;
    }
}

export class FilterLogical extends FilterHasFilter implements Filter {
    private operator: OperatorLogical;

    constructor(filters: Filter[], operator: OperatorLogical) {
        super(filters);
        Utils.requireNotNullNorUndefined(filters, 'filters');
        Utils.requireNotNullNorUndefined(operator, 'operator');
        this.operator = operator;
    }

    toString(): string {
        let res = '';

        for (const filter of <Filter[]>this.filter) {
            if (!res.length) {
                res += ` ${this.operator} `;
            }
            res += filter.toString();
        }

        return res;
    }
}

export class FilterBinary extends FilterHasProperty implements Filter {
    private operator: OperatorComparison;
    private value: any;
    private asQuotedString: boolean;

    constructor(property: string, operator: OperatorComparison, value: any, asQuotedString: boolean = true) {
        super(property);
        Utils.requireNotNullNorUndefined(operator, 'operand');
        this.operator = operator;
        Utils.requireNotUndefined(value, 'value');
        this.value = value;
        this.asQuotedString = asQuotedString;
    }

    toString(): string {
        return `${this.property} ${this.operator} ${Utils.getValue(this.value, this.asQuotedString)}`;
    }
}

export enum LambdaOperator {
    ANY, ALL
}

export enum LambdaCollection {
    PROPERTY_COLLECTION, ENTITY_SET
}

export class FilterLambda extends FilterHasFilter implements Filter {
    private lambdaCollection: LambdaCollection;
    private propertyOrEntitySet: string;
    private lambdaOperator: LambdaOperator;

    constructor(lambdaCollection: LambdaCollection, propertyOrEntitySet: string, lambdaOperator: LambdaOperator, filter: Filter) {
        super(filter);
        if (this.lambdaCollection === LambdaCollection.PROPERTY_COLLECTION) {
            this.checkProperty(filter);
        }
        Utils.requireNotNullNorUndefined(lambdaCollection, 'lambdaCollection');
        this.lambdaCollection = lambdaCollection;
        Utils.requireNotNullNorUndefined(propertyOrEntitySet, 'propertyOrEntitySet');
        this.propertyOrEntitySet = propertyOrEntitySet;
        Utils.requireNotNullNorUndefined(lambdaOperator, 'lambdaOperator');
        this.lambdaOperator = lambdaOperator;
        Utils.requireNotNullNorUndefined(filter, 'filter');
    }

    toString(): string {
        switch (this.lambdaCollection) {
            case LambdaCollection.PROPERTY_COLLECTION:
                this.replaceProperty(this.filter);
                return `${this.propertyOrEntitySet}/${LambdaOperator[this.lambdaOperator].toLowerCase()}(x:${this.filter.toString()})`;
            case LambdaCollection.ENTITY_SET:
                return `${this.propertyOrEntitySet}/${LambdaOperator[this.lambdaOperator].toLowerCase()}(x:x/${this.filter.toString()})`;
            default:
                throw new Error('unknown lambdaCollection: ' + this.lambdaCollection);
        }
    }

    protected checkProperty(filter: Filter | Filter[]) {
        if (Utils.isNullOrUndefined(filter)) {
            return;
        }
        if (filter instanceof FilterHasProperty) {
            if (this.propertyOrEntitySet !== filter.getProperty()) {
                throw new Error('FilterLambda property must match inner filters property');
            }
        }
        if (filter instanceof FilterHasFilter) {
            const filterChild: Filter | Filter[] = filter.getFilter();
            if (filterChild instanceof Filter) {
                this.replaceProperty(filterChild);
            } else {
                for (const f of <Filter[]>filterChild) {
                    this.replaceProperty(f);
                }
            }
        }
    }

    protected replaceProperty(filter: Filter | Filter[]) {
        if (Utils.isNullOrUndefined(filter)) {
            return;
        }
        if (filter instanceof FilterHasProperty) {
            filter.setProperty('x');
        }
        if (filter instanceof FilterHasFilter) {
            const filterChild: Filter | Filter[] = filter.getFilter();
            if (filterChild instanceof Filter) {
                this.replaceProperty(filterChild);
            } else {
                for (const f of <Filter[]>filterChild) {
                    this.replaceProperty(f);
                }
            }
        }
    }
}

class FilterFunction extends FilterHasProperty implements Filter {
    private functionName: string;
    private value: any;
    private asQuotedString: boolean;

    constructor(functionName: string, property: string, value: any, asQuotedString: boolean = true) {
        super(property);
        Utils.requireNotNullNorUndefined(functionName, 'functionName');
        this.functionName = functionName;
        Utils.requireNotUndefined(value, 'value');
        this.value = value;
        this.asQuotedString = asQuotedString;
    }

    toString(): string {
        return `${this.functionName}(${this.property},${Utils.getValue(this.value, this.asQuotedString)})`;
    }
}

export class FilterContains extends FilterFunction {
    constructor(property: string, value: any, asQuotedString: boolean = true) {
        super('contains', property, value, asQuotedString);
    }
}

export class FilterStartswith extends FilterFunction {
    constructor(property: string, value: any, asQuotedString: boolean = true) {
        super('startswith', property, value, asQuotedString);
    }
}

export class FilterEndswith extends FilterFunction {
    constructor(property: string, value: any, asQuotedString: boolean = true) {
        super('endswith', property, value, asQuotedString);
    }
}

export class FilterFreeForm {
    private filter: string;

    constructor(filter: string) {
        Utils.requireNotNullNorUndefined(filter, 'filter');
        this.filter = filter;
    }

    toString(): string {
        return this.filter;
    }
}
