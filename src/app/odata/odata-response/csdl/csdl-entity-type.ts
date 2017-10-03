import { CsdlComplexType } from './csdl-complex-type';
import { CsdlProperty, CsdlNavigationProperty } from './csdl-structural-property';

export class CsdlPropertyRef {
    constructor(
        public name: string,
    ) { }
}

export class CsdlKey {
    constructor(
        public propertyRefs: CsdlPropertyRef[],
    ) { }
}

export class CsdlEntityType extends CsdlComplexType {
    constructor(
        public name: string,
        public key?: CsdlKey,
        public properties?: CsdlProperty[],
        public navigationProperties?: CsdlNavigationProperty[],
        public baseType?: string,
        public openType?: boolean,
        public hasStream?: boolean
    ) {
        super(name, properties, baseType, openType, hasStream);
    }
}
