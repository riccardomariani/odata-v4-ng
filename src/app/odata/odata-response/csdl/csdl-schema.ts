import { CsdlEnumType } from './csdl-enum-type';
import { CsdlComplexType } from './csdl-complex-type';
import { CsdlEntityType } from './csdl-entity-type';
import { CsdlFunction, CsdlAction } from './csdl-function';
import { CsdlEntityContainer } from './csdl-entity-container';

export class CsdlSchema {
    constructor(
        public namespace: string,
        public alias?: string,
        public enumTypes?: CsdlEnumType[],
        public complexTypes?: CsdlComplexType[],
        public entityTypes?: CsdlEntityType[],
        public functions?: CsdlFunction[],
        public actions?: CsdlAction[],
        public entityContainer?: CsdlEntityContainer,
    ) { }
}
