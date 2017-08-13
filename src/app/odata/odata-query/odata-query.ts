import { Utils } from '../utils/utils';
import { QueryOptions } from '../query-options/query-options';

export class ODataQuery {
  private static readonly ENTITY_SET = 'entitySet';
  private static readonly ENTITY_KEY = 'entityKey';
  private static readonly PROPERTY = 'property';
  private static readonly NAVIGATION_PROPERTY = 'navigationProperty';
  private static readonly REF = 'ref';
  private static readonly VALUE = 'value';
  private static readonly COUNT = 'count';
  private static readonly FUNCTION_CALL = 'functionCall';
  private static readonly ACTION_CALL = 'actionCall';

  private static readonly $REF = '$ref';
  private static readonly $VALUE = '$value';
  private static readonly $COUNT = '$count';

  private queryString: string;
  private lastSegmentType: string;

  constructor(serviceRoot: string) {
    Utils.requireNotNullNorUndefined(serviceRoot, 'serviceRoot');
    Utils.requireNotEmpty(serviceRoot, 'serviceRoot');
    this.queryString = Utils.removeEndingSeparator(serviceRoot);
  }

  entitySet(entitySet: string): ODataQuery {
    Utils.requireNotNullNorUndefined(entitySet, 'entitySet');
    Utils.requireNotEmpty(entitySet, 'entitySet');
    this.queryString += '/' + Utils.removeEndingSeparator(entitySet);
    this.lastSegmentType = ODataQuery.ENTITY_SET;
    return this;
  }

  entityKey(entityKey: any, asQuotedString: boolean = true): ODataQuery {
    if (this.lastSegmentType !== ODataQuery.ENTITY_SET && this.lastSegmentType !== ODataQuery.NAVIGATION_PROPERTY) {
      throw new Error('entityKey can only be appended to entitySet or navigationProperty');
    }
    Utils.requireNotNullNorUndefined(entityKey, 'entityKey');
    Utils.requireNotEmpty(entityKey, 'entityKey');
    entityKey = Utils.getValue(entityKey, asQuotedString);
    this.queryString += '(' + entityKey + ')';
    this.lastSegmentType = ODataQuery.ENTITY_KEY;
    return this;
  }

  property(property: string): ODataQuery {
    Utils.requireNotNullNorUndefined(property, 'property');
    Utils.requireNotEmpty(property, 'property');
    this.queryString += '/' + property;
    this.lastSegmentType = ODataQuery.PROPERTY;
    return this;
  }

  navigationProperty(navigationProperty: string): ODataQuery {
    if (this.lastSegmentType !== ODataQuery.ENTITY_KEY) {
      throw new Error('navigationProperty can only be appended to entityKey');
    }
    Utils.requireNotNullNorUndefined(navigationProperty, 'navigationProperty');
    Utils.requireNotEmpty(navigationProperty, 'navigationProperty');
    this.queryString += '/' + Utils.removeEndingSeparator(navigationProperty);
    this.lastSegmentType = ODataQuery.NAVIGATION_PROPERTY;
    return this;
  }

  ref(): ODataQuery {
    if (this.lastSegmentType !== ODataQuery.NAVIGATION_PROPERTY) {
      throw new Error('ref can only be appended to navigationProperty');
    }
    this.queryString += '/' + ODataQuery.$REF;
    this.lastSegmentType = ODataQuery.REF;
    return this;
  }

  value(): ODataQuery {
    this.queryString += '/' + ODataQuery.$VALUE;
    this.lastSegmentType = ODataQuery.VALUE;
    return this;
  }

  count(): ODataQuery {
    this.queryString += '/' + ODataQuery.$COUNT;
    this.lastSegmentType = ODataQuery.COUNT;
    return this;
  }

  functionCall(functionCall: string): ODataQuery {
    Utils.requireNotNullNorUndefined(functionCall, 'functionCall');
    Utils.requireNotEmpty(functionCall, 'functionCall');
    this.queryString += '/' + Utils.removeEndingSeparator(functionCall);
    this.lastSegmentType = ODataQuery.FUNCTION_CALL;
    return this;
  }

  actionCall(actionCall: string): ODataQuery {
    Utils.requireNotNullNorUndefined(actionCall, 'actionCall');
    Utils.requireNotEmpty(actionCall, 'actionCall');
    this.queryString += '/' + Utils.removeEndingSeparator(actionCall);
    this.lastSegmentType = ODataQuery.ACTION_CALL;
    return this;
  }

  queryOptions(queryOptions: QueryOptions): ODataQuery {
    Utils.requireNotNullNorUndefined(queryOptions, 'queryOptions');
    Utils.requireNotEmpty(queryOptions, 'queryOptions');
    this.queryString += '?' + queryOptions.toString();
    return this;
  }

  toString(): string {
    console.log(this.queryString);
    return this.queryString;
  }
}
