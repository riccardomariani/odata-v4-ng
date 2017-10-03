export class CsdlAnnotable {
    constructor(public annotations?: CsdlAnnotation[]) { }
}

export class CsdlAnnotation {
    constructor(
        public term: string,
        public qualifier: string
    ) { }
}
