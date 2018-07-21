import { Utils } from '../utils/utils';
export class EntitySet<T> {
    private entities: T[];
    private count: number;

    constructor(entities: T[], count: number, type: (new () => T)) {
        Utils.requireNotNullNorUndefined(entities, 'entities');
        this.entities = [];
        entities.forEach(entity => {
            if (Utils.isNullOrUndefined(type)) {
                this.entities.push(Object.assign({}, entity));
            } else {
                this.entities.push(Object.assign(new type(), entity));
            }
        });
        this.count = count;
    }

    getEntities(): T[] {
        return this.entities;
    }

    getCount(): number {
        return this.count;
    }
}
