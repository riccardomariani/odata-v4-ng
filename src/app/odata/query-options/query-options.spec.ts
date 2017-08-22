import { Orderby } from './orderby';
import { Expand } from './expand';
import { OperatorComparison } from './operator';
import { FilterFreeForm, FilterBinary, Filter } from './filter';
import { QueryOptions } from './query-options';
import { SearchItem } from './search/search-item';
import { SearchItemSimple } from './search/search-item-simple';

describe('QueryOptions', () => {
  it('test select', () => {
    let queryOptions: QueryOptions;
    let select: string[];

    queryOptions = new QueryOptions();
    expect(() => queryOptions.select(select)).toThrowError('select cannot be undefined');
    select = null;
    queryOptions = new QueryOptions();
    expect(() => queryOptions.select(select)).toThrowError('select cannot be null');
    queryOptions = new QueryOptions();
    select = ['value'];
    queryOptions.select(select);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$select=value'));
    expect(() => queryOptions.select(select)).toThrowError('select is already set');
    queryOptions = new QueryOptions();
    select = [];
    expect(() => queryOptions.select(select)).toThrowError('select cannot be empty');
  });

  it('test filter', () => {
    let queryOptions: QueryOptions;
    let filter: Filter;

    queryOptions = new QueryOptions();
    expect(() => queryOptions.filter(filter)).toThrowError('filter cannot be undefined');
    filter = null;
    queryOptions = new QueryOptions();
    expect(() => queryOptions.filter(filter)).toThrowError('filter cannot be null');
    queryOptions = new QueryOptions();
    filter = new FilterBinary('property', OperatorComparison.EQ, 'value');
    queryOptions.filter(filter);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$filter=property eq value'));
    expect(() => queryOptions.filter(filter)).toThrowError('filter is already set');
    queryOptions = new QueryOptions();
    filter = new FilterFreeForm('');
    expect(() => queryOptions.filter(filter)).toThrowError('filter cannot be empty');
  });

  it('test expand', () => {
    let queryOptions: QueryOptions;
    let expand: Expand[];

    queryOptions = new QueryOptions();
    expect(() => queryOptions.expand(expand)).toThrowError('expand cannot be undefined');
    expand = null;
    queryOptions = new QueryOptions();
    expect(() => queryOptions.expand(expand)).toThrowError('expand cannot be null');
    queryOptions = new QueryOptions();
    expand = [new Expand('value')];
    queryOptions.expand(expand);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$expand=value'));
    expect(() => queryOptions.expand(expand)).toThrowError('expand is already set');
    queryOptions = new QueryOptions();
    expand = [];
    expect(() => queryOptions.expand(expand)).toThrowError('expand cannot be empty');
  });

  it('test orderby', () => {
    let queryOptions: QueryOptions;
    let orderby: Orderby[];

    queryOptions = new QueryOptions();
    expect(() => queryOptions.orderby(orderby)).toThrowError('orderby cannot be undefined');
    orderby = null;
    queryOptions = new QueryOptions();
    expect(() => queryOptions.orderby(orderby)).toThrowError('orderby cannot be null');
    queryOptions = new QueryOptions();
    orderby = [new Orderby('value')];
    queryOptions.orderby(orderby);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$orderby=value'));
    expect(() => queryOptions.orderby(orderby)).toThrowError('orderby is already set');
    queryOptions = new QueryOptions();
    orderby = [];
    expect(() => queryOptions.orderby(orderby)).toThrowError('orderby cannot be empty');
  });

  it('test skip', () => {
    let queryOptions: QueryOptions;
    let skip: number;

    queryOptions = new QueryOptions();
    expect(() => queryOptions.skip(skip)).toThrowError('skip cannot be undefined');
    skip = null;
    queryOptions = new QueryOptions();
    expect(() => queryOptions.skip(skip)).toThrowError('skip cannot be null');
    queryOptions = new QueryOptions();
    skip = 0;
    queryOptions.skip(skip);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$skip=0'));
    expect(() => queryOptions.skip(skip)).toThrowError('skip is already set');
    queryOptions = new QueryOptions();
    skip = -1;
    expect(() => queryOptions.skip(skip)).toThrowError('skip cannot be negative');
  });

  it('test top', () => {
    let queryOptions: QueryOptions;
    let top: number;

    queryOptions = new QueryOptions();
    expect(() => queryOptions.top(top)).toThrowError('top cannot be undefined');
    top = null;
    queryOptions = new QueryOptions();
    expect(() => queryOptions.top(top)).toThrowError('top cannot be null');
    queryOptions = new QueryOptions();
    top = 0;
    queryOptions.top(top);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$top=0'));
    expect(() => queryOptions.top(top)).toThrowError('top is already set');
    queryOptions = new QueryOptions();
    top = -1;
    expect(() => queryOptions.top(top)).toThrowError('top cannot be negative');
  });

  it('test count', () => {
    let queryOptions: QueryOptions;
    let count: boolean;

    queryOptions = new QueryOptions();
    expect(() => queryOptions.count(count)).toThrowError('count cannot be undefined');
    count = null;
    queryOptions = new QueryOptions();
    expect(() => queryOptions.count(count)).toThrowError('count cannot be null');
    queryOptions = new QueryOptions();
    count = true;
    queryOptions.count(count);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$count=true'));
    expect(() => queryOptions.count(count)).toThrowError('count is already set');
  });

  it('test search', () => {
    let queryOptions: QueryOptions;
    let search: SearchItem;

    queryOptions = new QueryOptions();
    expect(() => queryOptions.search(search)).toThrowError('search cannot be undefined');
    queryOptions = new QueryOptions();
    search = new SearchItemSimple('value');
    queryOptions.search(search);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$search=value'));
    expect(() => queryOptions.search(search)).toThrowError('search is already set');
    queryOptions = new QueryOptions();
    search = new SearchItemSimple('null');
    queryOptions.search(search);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$search=null'));
    queryOptions = new QueryOptions();
    search = new SearchItemSimple('');
    expect(() => queryOptions.search(search)).toThrowError('search cannot be empty');
  });

  it('test toString', () => {
    const queryOptions: QueryOptions = new QueryOptions()
      .select(['value'])
      .filter(new FilterFreeForm('property eq value'))
      .expand([new Expand('entitySet')])
      .orderby([new Orderby('property')])
      .skip(10)
      .top(20)
      .count(true)
      .search(new SearchItemSimple('value'));

    expect(queryOptions.toString()).toEqual(encodeURIComponent('$select=value&$filter=property eq value&$expand=entitySet&$orderby=property&$skip=10&$top=20&$count=true&$search=value'));
  });

  it('test isEmpty', () => {
    const queryOptions: QueryOptions = new QueryOptions();
    expect(queryOptions.isEmpty()).toBeTruthy();
  });
});
