import { CsdlEntitySet } from './csdl-entity-set';
import { CsdlSingleton } from './csdl-singleton';
import { CsdlFunctionImport, CsdlActionImport } from './csdl-function';

export class CsdlEntityContainer {
    constructor(
        public name: string,
        public entitySets?: CsdlEntitySet[],
        public singleton?: CsdlSingleton[],
        public functionImports?: CsdlFunctionImport[],
        public actionImports?: CsdlActionImport[]
    ) { }
}
