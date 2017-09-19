export class CsdlEnumMember {
    constructor(
        public name: string,
        public value: number
    ) { }
}

export class CsdlEnumType {
    constructor(
        public name: string,
        public members: CsdlEnumMember[]
    ) { }
}
