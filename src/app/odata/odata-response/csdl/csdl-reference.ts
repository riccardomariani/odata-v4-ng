import { CsdlAnnotable, CsdlAnnotation } from './csdl-annotation';

export class CsdlInclude {
    constructor(
        public namespace: string,
        public alias?: string
    ) { }
}

export class CsdlIncludeAnnotations {
    constructor(
        public termNamespace: string,
        public qualifier?: string,
        public targetNamespace?: string
    ) { }
}

export class CsdlReference extends CsdlAnnotable {
    constructor(
        public uri: string,
        public includes?: CsdlInclude[],
        public includeAnnotations?: CsdlIncludeAnnotations[],
        public annotations?: CsdlAnnotation[]
    ) {
        super(annotations);
    }
}
