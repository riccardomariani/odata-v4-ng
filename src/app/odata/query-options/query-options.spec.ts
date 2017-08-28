import { Orderby } from './orderby';
import { Expand } from './expand';
import { OperatorComparison } from './operator';
import { QueryOptions, Purpose } from './query-options';
import { Search } from './search/search';
import { SearchSimple } from './search/search-simple';
import { Filter } from './filter/filter';
import { FilterComparison } from './filter/filter-comparison';

describe('QueryOptions', () => {
  it('test select', () => {
    let queryOptions: QueryOptions;
    let select: string | string[];
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.select(select)).toThrowError('select cannot be undefined');
    //
    select = null;
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.select(select)).toThrowError('select cannot be null');
    //
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY).select('value');
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$select=value'));
    //
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY).select(['value']);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$select=value'));
    expect(() => queryOptions.select(select)).toThrowError('select is already set');
    //
    select = [];
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.select(select)).toThrowError('select cannot be empty');
  });

  it('test filter', () => {
    let queryOptions: QueryOptions;
    let filter: string | Filter;
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.filter(filter)).toThrowError('filter cannot be undefined');
    //
    filter = null;
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.filter(filter)).toThrowError('filter cannot be null');
    //
    filter = 'property eq value';
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY).filter(filter);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$filter=property eq value'));
    //
    filter = new FilterComparison('property', OperatorComparison.EQ, 'value');
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY).filter(filter);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$filter=property eq value'));
    expect(() => queryOptions.filter(filter)).toThrowError('filter is already set');
    //
    filter = '';
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.filter(filter)).toThrowError('filter cannot be empty');
  });

  it('test expand', () => {
    let queryOptions: QueryOptions;
    let expand: string | Expand[];
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.expand(expand)).toThrowError('expand cannot be undefined');
    //
    expand = null;
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.expand(expand)).toThrowError('expand cannot be null');
    //
    expand = 'value';
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY).expand(expand);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$expand=value'));
    //
    expand = [new Expand('value')];
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY).expand(expand);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$expand=value'));
    expect(() => queryOptions.expand(expand)).toThrowError('expand is already set');
    //
    expand = [];
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.expand(expand)).toThrowError('expand cannot be empty');
  });

  it('test orderby', () => {
    let queryOptions: QueryOptions;
    let orderby: string | Orderby[];
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.orderby(orderby)).toThrowError('orderby cannot be undefined');
    //
    orderby = null;
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.orderby(orderby)).toThrowError('orderby cannot be null');
    //
    orderby = 'value';
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY).orderby(orderby);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$orderby=value'));
    //
    orderby = [new Orderby('value')];
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY).orderby(orderby);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$orderby=value'));
    expect(() => queryOptions.orderby(orderby)).toThrowError('orderby is already set');
    //
    orderby = [];
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.orderby(orderby)).toThrowError('orderby cannot be empty');
  });

  it('test search', () => {
    let queryOptions: QueryOptions;
    let search: string | Search;
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.search(search)).toThrowError('search cannot be undefined');
    //
    search = 'value';
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY).search(search);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$search=value'));
    //
    search = new SearchSimple('value');
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY).search(search);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$search=value'));
    expect(() => queryOptions.search(search)).toThrowError('search is already set');
    //
    search = new SearchSimple('null');
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY).search(search);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$search=null'));
  });

  it('test skip', () => {
    let queryOptions: QueryOptions;
    let skip: number;
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.skip(skip)).toThrowError('skip cannot be undefined');
    //
    skip = null;
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.skip(skip)).toThrowError('skip cannot be null');
    //
    skip = 0;
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY).skip(skip);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$skip=0'));
    expect(() => queryOptions.skip(skip)).toThrowError('skip is already set');
    //
    skip = -1;
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.skip(skip)).toThrowError('skip cannot be negative');
  });

  it('test top', () => {
    let queryOptions: QueryOptions;
    let top: number;
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.top(top)).toThrowError('top cannot be undefined');
    //
    top = null;
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.top(top)).toThrowError('top cannot be null');
    //
    top = 0;
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY).top(top);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$top=0'));
    expect(() => queryOptions.top(top)).toThrowError('top is already set');
    //
    top = -1;
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.top(top)).toThrowError('top cannot be negative');
  });

  it('test count', () => {
    let queryOptions: QueryOptions;
    let count: boolean;
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.count(count)).toThrowError('count cannot be undefined');
    //
    count = null;
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.count(count)).toThrowError('count cannot be null');
    //
    count = true;
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY).count(count);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$count=true'));
    expect(() => queryOptions.count(count)).toThrowError('count is already set');
  });

  it('test customOption', () => {
    let queryOptions: QueryOptions;
    let key: string;
    let value: string;
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.customOption(key, value)).toThrowError('key cannot be undefined');
    //
    key = null;
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.customOption(key, value)).toThrowError('key cannot be null');
    //
    key = 'key';
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.customOption(key, value)).toThrowError('value cannot be undefined');
    //
    value = null;
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(() => queryOptions.customOption(key, value)).toThrowError('value cannot be null');
    //
    key = 'key';
    value = 'value';
    queryOptions = new QueryOptions(Purpose.ODATA_QUERY).customOption(key, value);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('key=value'));
    queryOptions.customOption(key, value);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('key=value&key=value'));
  });

  it('test toString', () => {
    let queryOptions: QueryOptions = new QueryOptions(Purpose.ODATA_QUERY)
      .select(['value'])
      .filter('property eq value')
      .expand([new Expand('entitySet')])
      .orderby([new Orderby('property')])
      .search(new SearchSimple('value'))
      .skip(10)
      .top(20)
      .count(true);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$select=value&$filter=property eq value&$expand=entitySet&$orderby=property&$search=value&$skip=10&$top=20&$count=true'));
    //
    queryOptions = new QueryOptions(Purpose.EXPAND)
      .select(['value'])
      .filter('property eq value')
      .expand([new Expand('entitySet')])
      .orderby([new Orderby('property')])
      .search(new SearchSimple('value'))
      .skip(10)
      .top(20)
      .count(true);
    expect(queryOptions.toString()).toEqual('$select=value;$filter=property eq value;$expand=entitySet;$orderby=property;$search=value;$skip=10;$top=20;$count=true');
  });

  it('test isEmpty', () => {
    const queryOptions: QueryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    expect(queryOptions.isEmpty()).toBeTruthy();
  });
});
