import { OperatorComparison } from './operator';
import { FilterFreeForm, FilterBinary, Filter } from './filter';
import { Select } from './select';
import { QueryOptions } from './query-options';

describe('QueryOptions', () => {
  it('test select', () => {
    let queryOptions: QueryOptions;
    let select: Select;

    queryOptions = new QueryOptions();
    expect(() => queryOptions.select(select)).toThrowError('select is undefined');
    select = null;
    queryOptions = new QueryOptions();
    expect(() => queryOptions.select(select)).toThrowError('select is null');
    queryOptions = new QueryOptions();
    select = new Select(['value']);
    queryOptions.select(select);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$select=value'));
    expect(() => queryOptions.select(select)).toThrowError('select is already set');
    queryOptions = new QueryOptions();
    select = new Select([]);
    expect(() => queryOptions.select(select)).toThrowError('select is empty');
  });

  it('test filter', () => {
    let queryOptions: QueryOptions;
    let filter: Filter;

    queryOptions = new QueryOptions();
    expect(() => queryOptions.filter(filter)).toThrowError('filter is undefined');
    filter = null;
    queryOptions = new QueryOptions();
    expect(() => queryOptions.filter(filter)).toThrowError('filter is null');
    queryOptions = new QueryOptions();
    filter = new FilterBinary('property', OperatorComparison.EQ, 'value');
    queryOptions.filter(filter);
    expect(queryOptions.toString()).toEqual(encodeURIComponent('$filter=property eq value'));
    expect(() => queryOptions.filter(filter)).toThrowError('filter is already set');
    queryOptions = new QueryOptions();
    filter = new FilterFreeForm('');
    expect(() => queryOptions.filter(filter)).toThrowError('filter is empty');
  });
});
