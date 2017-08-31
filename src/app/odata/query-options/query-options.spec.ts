import { Orderby } from './orderby';
import { Expand } from './expand';
import { OperatorComparison } from './operator';
import { QueryOptions } from './query-options';
import { Search } from './search/search';
import { SearchSimple } from './search/search-simple';
import { Filter } from './filter/filter';
import { FilterComparison } from './filter/filter-comparison';
import { ODataQuery } from '../odata-query/odata-query';

describe('QueryOptions', () => {
  it('test select', () => {
    let queryOptions: QueryOptions;
    let select: string | string[];
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.select(select)).toThrowError('select cannot be undefined');
    //
    select = null;
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.select(select)).toThrowError('select cannot be null');
    //
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR).select('value');
    expect(queryOptions.toString()).toEqual('$select=value');
    //
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR).select(['value']);
    expect(queryOptions.toString()).toEqual('$select=value');
    expect(() => queryOptions.select(select)).toThrowError('select is already set');
    //
    select = [];
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.select(select)).toThrowError('select cannot be empty');
  });

  it('test filter', () => {
    let queryOptions: QueryOptions;
    let filter: string | Filter;
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.filter(filter)).toThrowError('filter cannot be undefined');
    //
    filter = null;
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.filter(filter)).toThrowError('filter cannot be null');
    //
    filter = 'property eq value';
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR).filter(filter);
    expect(queryOptions.toString()).toEqual('$filter=' + encodeURIComponent('property eq value'));
    //
    filter = new FilterComparison('property', OperatorComparison.EQ, 'value');
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR).filter(filter);
    expect(queryOptions.toString()).toEqual('$filter=' + encodeURIComponent('property eq value'));
    expect(() => queryOptions.filter(filter)).toThrowError('filter is already set');
    //
    filter = '';
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.filter(filter)).toThrowError('filter cannot be empty');
  });

  it('test expand', () => {
    let queryOptions: QueryOptions;
    let expand: string | Expand[];
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.expand(expand)).toThrowError('expand cannot be undefined');
    //
    expand = null;
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.expand(expand)).toThrowError('expand cannot be null');
    //
    expand = 'value';
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR).expand(expand);
    expect(queryOptions.toString()).toEqual('$expand=value');
    //
    expand = [new Expand('value')];
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR).expand(expand);
    expect(queryOptions.toString()).toEqual('$expand=value');
    expect(() => queryOptions.expand(expand)).toThrowError('expand is already set');
    //
    expand = [];
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.expand(expand)).toThrowError('expand cannot be empty');
  });

  it('test orderby', () => {
    let queryOptions: QueryOptions;
    let orderby: string | Orderby[];
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.orderby(orderby)).toThrowError('orderby cannot be undefined');
    //
    orderby = null;
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.orderby(orderby)).toThrowError('orderby cannot be null');
    //
    orderby = 'value';
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR).orderby(orderby);
    expect(queryOptions.toString()).toEqual('$orderby=value');
    //
    orderby = [new Orderby('value')];
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR).orderby(orderby);
    expect(queryOptions.toString()).toEqual('$orderby=value');
    expect(() => queryOptions.orderby(orderby)).toThrowError('orderby is already set');
    //
    orderby = [];
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.orderby(orderby)).toThrowError('orderby cannot be empty');
  });

  it('test search', () => {
    let queryOptions: QueryOptions;
    let search: string | Search;
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.search(search)).toThrowError('search cannot be undefined');
    //
    search = 'value';
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR).search(search);
    expect(queryOptions.toString()).toEqual('$search=' + encodeURIComponent('value'));
    //
    search = new SearchSimple('value');
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR).search(search);
    expect(queryOptions.toString()).toEqual('$search=' + encodeURIComponent('value'));
    expect(() => queryOptions.search(search)).toThrowError('search is already set');
    //
    search = new SearchSimple('null');
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR).search(search);
    expect(queryOptions.toString()).toEqual('$search=' + encodeURIComponent('null'));
  });

  it('test skip', () => {
    let queryOptions: QueryOptions;
    let skip: number;
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.skip(skip)).toThrowError('skip cannot be undefined');
    //
    skip = null;
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.skip(skip)).toThrowError('skip cannot be null');
    //
    skip = 0;
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR).skip(skip);
    expect(queryOptions.toString()).toEqual('$skip=0');
    expect(() => queryOptions.skip(skip)).toThrowError('skip is already set');
    //
    skip = -1;
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.skip(skip)).toThrowError('skip cannot be negative');
  });

  it('test top', () => {
    let queryOptions: QueryOptions;
    let top: number;
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.top(top)).toThrowError('top cannot be undefined');
    //
    top = null;
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.top(top)).toThrowError('top cannot be null');
    //
    top = 0;
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR).top(top);
    expect(queryOptions.toString()).toEqual('$top=0');
    expect(() => queryOptions.top(top)).toThrowError('top is already set');
    //
    top = -1;
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.top(top)).toThrowError('top cannot be negative');
  });

  it('test count', () => {
    let queryOptions: QueryOptions;
    let count: boolean;
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.count(count)).toThrowError('count cannot be undefined');
    //
    count = null;
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.count(count)).toThrowError('count cannot be null');
    //
    count = true;
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR).count(count);
    expect(queryOptions.toString()).toEqual('$count=true');
    expect(() => queryOptions.count(count)).toThrowError('count is already set');
  });

  it('test customOption', () => {
    let queryOptions: QueryOptions;
    let key: string;
    let value: string;
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.customOption(key, value)).toThrowError('key cannot be undefined');
    //
    key = null;
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.customOption(key, value)).toThrowError('key cannot be null');
    //
    key = 'key';
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.customOption(key, value)).toThrowError('value cannot be undefined');
    //
    value = null;
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR);
    expect(() => queryOptions.customOption(key, value)).toThrowError('value cannot be null');
    //
    queryOptions = new QueryOptions(ODataQuery.SEPARATOR).customOption('key', 'value');
    expect(queryOptions.toString()).toEqual('key=' + encodeURIComponent('value'));
    queryOptions.customOption('key2', 'value2');
    expect(queryOptions.toString()).toEqual('key=' + encodeURIComponent('value') + '&key2=' + encodeURIComponent('value2'));
  });

  it('test toString', () => {
    let queryOptions: QueryOptions = new QueryOptions(ODataQuery.SEPARATOR)
      .select(['value'])
      .filter('property eq value')
      .expand([new Expand('entitySet')])
      .orderby([new Orderby('property')])
      .search(new SearchSimple('value'))
      .skip(10)
      .top(20)
      .count(true);
    expect(queryOptions.toString()).toEqual('$select=value&$filter=' + encodeURIComponent('property eq value') + '&$expand=entitySet&$orderby=property&$search=' + encodeURIComponent('value') + '&$skip=10&$top=20&$count=true');
    //
    queryOptions = new QueryOptions(Expand.SEPARATOR)
      .select(['value'])
      .filter('property eq value')
      .expand([new Expand('entitySet')])
      .orderby([new Orderby('property')])
      .search(new SearchSimple('value'))
      .skip(10)
      .top(20)
      .count(true);
    expect(queryOptions.toString()).toEqual('$select=value;$filter=' + encodeURIComponent('property eq value') + ';$expand=entitySet;$orderby=property;$search=' + encodeURIComponent('value') + ';$skip=10;$top=20;$count=true');
  });

  it('test isEmpty', () => {
    const queryOptions: QueryOptions = new QueryOptions(Expand.SEPARATOR);
    expect(queryOptions.isEmpty()).toBeTruthy();
  });
});
