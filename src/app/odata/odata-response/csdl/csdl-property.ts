export class CsdlPropertyAbstract {
    constructor(
        public name: string,
        public type: string,
        public nullable?: boolean,
    ) { }
}

export class CsdlProperty extends CsdlPropertyAbstract {
    constructor(
        public name: string,
        public type: string,
        public nullable?: boolean,
        public srid?: number
    ) {
        super(name, type, nullable);
    }
}

export class CsdlNavigationProperty extends CsdlPropertyAbstract {
    constructor(
        public name: string,
        public type: string,
        public nullable?: boolean,
        public containsTarget?: boolean
    ) {
        super(name, type, nullable);
    }
}

export class CsdlNavigationPropertyBinding {
    constructor(
        public path: string,
        public target: string,
    ) { }
}
