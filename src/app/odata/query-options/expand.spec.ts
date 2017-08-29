import { Expand } from './expand';
import { QueryOptions, Purpose } from './query-options';

describe('Expand', () => {
  it('test toString', () => {
    let entitySet: string;
    let queryOptions: QueryOptions;
    expect(() => new Expand(entitySet, queryOptions)).toThrowError('entitySet cannot be undefined');
    //
    entitySet = null;
    expect(() => new Expand(entitySet, queryOptions)).toThrowError('entitySet cannot be null');
    //
    entitySet = 'entitySet';
    queryOptions = null;
    let expand: Expand = new Expand(entitySet, queryOptions);
    expect(expand.toString()).toEqual('entitySet');
    //
    queryOptions = new QueryOptions(Purpose.EXPAND).select(['property']).filter('property eq value');
    expand = new Expand(entitySet, queryOptions);
    expect(expand.toString()).toEqual('entitySet($select=property;$filter=' + encodeURIComponent('property eq value)'));
  });
});
