import { CsdlNavigationPropertyBinding } from './csdl-property';

export class CsdlSingleton {
    constructor(
        public name: string,
        public type: string,
        public navigationPropertyBindings?: CsdlNavigationPropertyBinding[]
    ) { }
}
