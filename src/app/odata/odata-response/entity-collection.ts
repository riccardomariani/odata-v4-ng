export class EntityCollection<T> {
    private entities: T[];
    private count: number;

    constructor(entities: T[], count: number) {
        if (!entities) {
            throw new Error('entities is null');
        }
        this.entities = entities;
        this.count = count;
    }

    getEntities(): T[] {
        return this.entities;
    }

    getCount(): number {
        return this.count;
    }
}
