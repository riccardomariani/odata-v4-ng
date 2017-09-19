import { CsdlNavigationPropertyBinding } from './csdl-property';

export class CsdlEntitySet {
    constructor(
        public name: string,
        public entityType: string,
        public navigationPropertyBinding?: CsdlNavigationPropertyBinding[]
    ) {

    }
}
