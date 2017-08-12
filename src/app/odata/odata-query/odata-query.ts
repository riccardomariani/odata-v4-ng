import { Utils } from '../utils/utils';
import { QueryOptions } from '../query-options/query-options';

export class ODataQuery {
  static readonly ENTITY_SET = 'entitySet';
  static readonly ENTITY_KEY = 'entityKey';
  static readonly PROPERTY = 'property';
  static readonly NAVIGATION_PROPERTY = 'navigationProperty';
  static readonly REF = 'ref';
  static readonly VALUE = 'value';
  static readonly COUNT = 'count';
  static readonly FUNCTION_CALL = 'functionCall';
  static readonly ACTION_CALL = 'actionCall';

  static readonly $REF = '$ref';
  static readonly $VALUE = '$value';
  static readonly $COUNT = '$count';

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

  entityKey(entityKey: any): ODataQuery {
    Utils.requireNotNullNorUndefined(entityKey, 'entityKey');
    Utils.requireNotEmpty(entityKey, 'entityKey');
    this.queryString += '(' + Utils.getEscapedValue(entityKey) + ')';
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
    Utils.requireNotNullNorUndefined(navigationProperty, 'navigationProperty');
    Utils.requireNotEmpty(navigationProperty, 'navigationProperty');
    this.queryString += '/' + Utils.removeEndingSeparator(navigationProperty);
    this.lastSegmentType = ODataQuery.NAVIGATION_PROPERTY;
    return this;
  }

  ref(): ODataQuery {
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
    this.queryString += '?' + queryOptions.toStringEncoded();
    return this;
  }

  toString(): string {
    console.log(this.queryString);
    return this.queryString;
  }
}
