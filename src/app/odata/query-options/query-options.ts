import { Filter } from './filter/filter';
import { Expand } from './expand';
import { Utils } from '../utils/utils';
import { Orderby } from './orderby';
import { Search } from './search/search';

export enum Purpose {
  ODATA_QUERY, EXPAND
}

export class QueryOptions {
  private _purpose: Purpose;
  private _separator: string;
  private _select: string | string[];
  private _filter: string | Filter;
  private _expand: string | Expand[];
  private _orderby: string | Orderby[];
  private _search: string | Search;
  private _skip: number;
  private _top: number;
  private _count: boolean;
  private _customOptions: string[];

  constructor(purpose: Purpose) {
    Utils.requireNotNullNorUndefined(purpose, 'purpose');
    this._purpose = purpose;
    switch (this._purpose) {
      case Purpose.ODATA_QUERY:
        this._separator = '&';
        break;
      case Purpose.EXPAND:
        this._separator = ';';
        break;
      default:
        throw new Error('Unknown purpose: ' + purpose);
    }
    this._select = null;
    this._filter = null;
    this._expand = null;
    this._orderby = null;
    this._search = null;
    this._skip = null;
    this._top = null;
    this._count = null;
    this._customOptions = [];
  }

  select(select: string | string[]): QueryOptions {
    this.checkFieldAlreadySet(this._select, 'select');
    Utils.requireNotNullNorUndefined(select, 'select');
    Utils.requireNotEmpty(select, 'select');
    this._select = select;
    return this;
  }

  filter(filter: string | Filter): QueryOptions {
    this.checkFieldAlreadySet(this._filter, 'filter');
    Utils.requireNotNullNorUndefined(filter, 'filter');
    Utils.requireNotEmpty(filter, 'filter');
    this._filter = filter;
    return this;
  }

  expand(expand: string | Expand[]): QueryOptions {
    this.checkFieldAlreadySet(this._expand, 'expand');
    Utils.requireNotNullNorUndefined(expand, 'expand');
    Utils.requireNotEmpty(expand, 'expand');
    this._expand = expand;
    return this;
  }

  orderby(orderby: string | Orderby[]): QueryOptions {
    this.checkFieldAlreadySet(this._orderby, 'orderby');
    Utils.requireNotNullNorUndefined(orderby, 'orderby');
    Utils.requireNotEmpty(orderby, 'orderby');
    this._orderby = orderby;
    return this;
  }

  search(search: string | Search): QueryOptions {
    this.checkFieldAlreadySet(this._search, 'search');
    Utils.requireNotUndefined(search, 'search');
    Utils.requireNotEmpty(search, 'search');
    this._search = search;
    return this;
  }

  skip(skip: number): QueryOptions {
    this.checkFieldAlreadySet(this._skip, 'skip');
    Utils.requireNotNullNorUndefined(skip, 'skip');
    Utils.requireNotNegative(skip, 'skip');
    this._skip = skip;
    return this;
  }

  top(top: number): QueryOptions {
    this.checkFieldAlreadySet(this._top, 'top');
    Utils.requireNotNullNorUndefined(top, 'top');
    Utils.requireNotNegative(top, 'top');
    this._top = top;
    return this;
  }

  count(count: boolean): QueryOptions {
    this.checkFieldAlreadySet(this._count, 'count');
    Utils.requireNotNullNorUndefined(count, 'count');
    this._count = count;
    return this;
  }

  customOption(key: string, value: string) {
    Utils.requireNotNullNorUndefined(key, 'key');
    Utils.requireNotEmpty(key, 'key');
    Utils.requireNotNullNorUndefined(value, 'value');
    Utils.requireNotEmpty(value, 'value');
    this._customOptions.push(key + '=' + value);
    return this;
  }

  toString(): string {
    // query options
    let queryOptions = '';

    // add select
    if (!Utils.isNullOrUndefined(this._select)) {
      queryOptions += '$select=';
      if (typeof (this._select) === 'string') {
        queryOptions += this._select;
      } else {
        queryOptions += Utils.toString(this._select);
      }
    }

    // add filter
    if (!Utils.isNullOrUndefined(this._filter)) {
      if (queryOptions.length) {
        queryOptions += this._separator;
      }
      queryOptions += '$filter=' + this._filter;
    }

    // add expand
    if (!Utils.isNullOrUndefined(this._expand)) {
      if (queryOptions.length) {
        queryOptions += this._separator;
      }
      queryOptions += '$expand=';
      if (typeof (this._expand) === 'string') {
        queryOptions += this._expand;
      } else {
        queryOptions += Utils.toString(this._expand);
      }
    }

    // add orderby
    if (!Utils.isNullOrUndefined(this._orderby)) {
      if (queryOptions.length) {
        queryOptions += this._separator;
      }
      queryOptions += '$orderby=';
      if (typeof (this._orderby) === 'string') {
        queryOptions += this._orderby;
      } else {
        queryOptions += Utils.toString(this._orderby);
      }
    }

    // add search
    if (!Utils.isNullOrUndefined(this._search)) {
      if (queryOptions.length) {
        queryOptions += this._separator;
      }
      queryOptions += '$search=' + this._search;
    }

    // add skip
    if (!Utils.isNullOrUndefined(this._skip)) {
      if (queryOptions.length) {
        queryOptions += this._separator;
      }
      queryOptions += '$skip=' + this._skip;
    }

    // add top
    if (!Utils.isNullOrUndefined(this._top)) {
      if (queryOptions.length) {
        queryOptions += this._separator;
      }
      queryOptions += '$top=' + this._top;
    }

    // add count
    if (!Utils.isNullOrUndefined(this._count)) {
      if (queryOptions.length) {
        queryOptions += this._separator;
      }
      queryOptions += '$count=' + this._count;
    }

    // add custom query options
    if (Utils.isNotNullNorUndefined(this._customOptions) && this._customOptions.length) {
      for (const customOption of this._customOptions) {
        if (queryOptions.length) {
          queryOptions += this._separator;
        }
        queryOptions += customOption;
      }
    }

    if (this._purpose === Purpose.ODATA_QUERY) {
      return encodeURIComponent(queryOptions);
    }
    return queryOptions;
  }

  isEmpty(): boolean {
    for (const key in this) {
      if (key === '_purpose' || key === '_separator') {
        continue;
      }
      if (this.hasOwnProperty(key) && !Utils.isEmpty(this[key])) {
        return false;
      }
    }
    return true;
  }

  protected checkFieldAlreadySet(fieldValue: any, fieldName: string) {
    try {
      Utils.requireNullOrUndefined(fieldValue, fieldName);
    } catch (error) {
      throw new Error(fieldName + ' is already set');
    }
  }
}
