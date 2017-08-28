import { Filter } from '../query-options/filter/filter';
import { Headers, RequestOptionsArgs } from '@angular/http';
import { ODataResponse } from '../odata-response/odata-response';
import { ODataService } from '../odata-service/odata.service';
import { Orderby } from '../query-options/orderby';
import { Expand } from '../query-options/expand';
import { Utils } from '../utils/utils';
import { QueryOptions, Purpose } from '../query-options/query-options';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ODataQueryBatch } from './odata-query-batch';
import { ODataQueryAbstract } from './odata-query-abstract';
import { QuotedString } from './quoted-string';
import { Search } from '../query-options/search/search';

export class ODataQuery extends ODataQueryAbstract {
  // SEGMENT NAMES
  private static readonly METADATA = 'metadata';
  private static readonly ENTITY_SET = 'entitySet';
  private static readonly ENTITY_KEY = 'entityKey';
  private static readonly SINGLETON = 'singleton';
  private static readonly PROPERTY = 'property';
  private static readonly NAVIGATION_PROPERTY = 'navigationProperty';
  private static readonly REF = 'ref';
  private static readonly VALUE = 'value';
  private static readonly COUNT = 'count';
  private static readonly FUNCTION_CALL = 'functionCall';
  private static readonly ACTION_CALL = 'actionCall';

  // CONSTANT SEGMENTS
  private static readonly $METADATA = '$metadata';
  private static readonly $REF = '$ref';
  private static readonly $VALUE = '$value';
  private static readonly $COUNT = '$count';

  // VARIABLES
  private queryOptions: QueryOptions;
  private segments: string[];
  private lastSegment: string;

  constructor(odataService: ODataService, serviceRoot: string) {
    super(odataService, serviceRoot);
    Utils.requireNotNullNorUndefined(odataService, 'odataService');
    Utils.requireNotNullNorUndefined(serviceRoot, 'serviceRoot');
    Utils.requireNotEmpty(serviceRoot, 'serviceRoot');
    this.queryOptions = new QueryOptions(Purpose.ODATA_QUERY);
    this.segments = [];
    this.lastSegment = null;
  }

  // QUERY SEGMENTS

  metadata(): ODataQuery {
    Utils.requireNullOrUndefined(this.getSegment(ODataQuery.METADATA), ODataQuery.METADATA);
    if (this.segments.length) {
      throw new Error('$metadata segment cannot be appended to other segments');
    }
    this.queryString = Utils.appendSegment(this.queryString, ODataQuery.$METADATA);
    this.addSegment(ODataQuery.METADATA);
    return this;
  }

  entitySet(entitySet: string): ODataQuery {
    Utils.requireNullOrUndefined(this.getSegment(ODataQuery.ENTITY_SET), ODataQuery.ENTITY_SET);
    Utils.requireNotNullNorUndefined(entitySet, 'entitySet');
    Utils.requireNotEmpty(entitySet, 'entitySet');
    this.queryString = Utils.appendSegment(this.queryString, entitySet);
    this.addSegment(ODataQuery.ENTITY_SET);
    return this;
  }

  entityKey(entityKey: boolean | number | string | QuotedString): ODataQuery {
    if (this.lastSegment !== ODataQuery.ENTITY_SET && this.lastSegment !== ODataQuery.NAVIGATION_PROPERTY) {
      throw new Error('entityKey can only be appended to entitySet or navigationProperty');
    }
    Utils.requireNotNullNorUndefined(entityKey, 'entityKey');
    Utils.requireNotEmpty(entityKey, 'entityKey');
    entityKey = Utils.getValueURI(entityKey, true);
    this.queryString = Utils.removeEndingSeparator(this.queryString) + '(' + entityKey + ')';
    this.addSegment(ODataQuery.ENTITY_KEY);
    return this;
  }

  singleton(singleton: string) {
    Utils.requireNotNullNorUndefined(singleton, 'singleton');
    Utils.requireNotEmpty(singleton, 'singleton');
    this.queryString = Utils.appendSegment(this.queryString, singleton);
    this.addSegment(ODataQuery.SINGLETON);
    return this;
  }

  property(property: string): ODataQuery {
    Utils.requireNullOrUndefined(this.getSegment(ODataQuery.PROPERTY), ODataQuery.PROPERTY);
    if (this.lastSegment !== ODataQuery.ENTITY_KEY) {
      throw new Error('property can only be appended to entityKey');
    }
    Utils.requireNotNullNorUndefined(property, 'property');
    Utils.requireNotEmpty(property, 'property');
    this.queryString = Utils.appendSegment(this.queryString, property);
    this.addSegment(ODataQuery.PROPERTY);
    return this;
  }

  navigationProperty(navigationProperty: string): ODataQuery {
    if (this.lastSegment !== ODataQuery.ENTITY_KEY) {
      throw new Error('navigationProperty can only be appended to entityKey');
    }
    Utils.requireNotNullNorUndefined(navigationProperty, 'navigationProperty');
    Utils.requireNotEmpty(navigationProperty, 'navigationProperty');
    this.queryString = Utils.appendSegment(this.queryString, navigationProperty);
    this.addSegment(ODataQuery.NAVIGATION_PROPERTY);
    return this;
  }

  ref(): ODataQuery {
    Utils.requireNullOrUndefined(this.getSegment(ODataQuery.REF), ODataQuery.REF);
    if (this.lastSegment !== ODataQuery.NAVIGATION_PROPERTY) {
      throw new Error('ref can only be appended to navigationProperty');
    }
    this.queryString = Utils.appendSegment(this.queryString, ODataQuery.$REF);
    this.addSegment(ODataQuery.REF);
    return this;
  }

  value(): ODataQuery {
    Utils.requireNullOrUndefined(this.getSegment(ODataQuery.VALUE), ODataQuery.VALUE);
    if (this.lastSegment !== ODataQuery.PROPERTY) {
      throw new Error('value can only be appended to property');
    }
    this.queryString = Utils.appendSegment(this.queryString, ODataQuery.$VALUE);
    this.addSegment(ODataQuery.VALUE);
    return this;
  }

  count(count?: boolean): ODataQuery {
    if (Utils.isNullOrUndefined(count)) {
      Utils.requireNullOrUndefined(this.getSegment(ODataQuery.COUNT), ODataQuery.COUNT);
      if (this.lastSegment !== ODataQuery.ENTITY_SET && this.lastSegment !== ODataQuery.NAVIGATION_PROPERTY) {
        throw new Error('count can only be appended to entitySet or navigationProperty');
      }
      this.queryString = Utils.appendSegment(this.queryString, ODataQuery.$COUNT);
      this.addSegment(ODataQuery.COUNT);
    } else {
      this.queryOptions.count(count);
    }
    return this;
  }

  functionCall(functionCall: string): ODataQuery {
    Utils.requireNotNullNorUndefined(functionCall, 'functionCall');
    Utils.requireNotEmpty(functionCall, 'functionCall');
    this.queryString = Utils.appendSegment(this.queryString, functionCall);
    this.addSegment(ODataQuery.FUNCTION_CALL);
    return this;
  }

  actionCall(actionCall: string): ODataQuery {
    Utils.requireNotNullNorUndefined(actionCall, 'actionCall');
    Utils.requireNotEmpty(actionCall, 'actionCall');
    this.queryString = Utils.appendSegment(this.queryString, actionCall);
    this.addSegment(ODataQuery.ACTION_CALL);
    return this;
  }

  batch(requestOptionsArgs?: RequestOptionsArgs): ODataQueryBatch {
    return new ODataQueryBatch(this.odataService, this.serviceRoot);
  }

  // QUERY OPTIONS

  select(select: string | string[]): ODataQuery {
    this.queryOptions.select(select);
    return this;
  }

  filter(filter: string | Filter): ODataQuery {
    this.queryOptions.filter(filter);
    return this;
  }

  expand(expand: string | Expand[]): ODataQuery {
    this.queryOptions.expand(expand);
    return this;
  }

  orderby(orderby: string | Orderby[]): ODataQuery {
    this.queryOptions.orderby(orderby);
    return this;
  }

  search(search: string | Search): ODataQuery {
    this.queryOptions.search(search);
    return this;
  }

  skip(skip: number): ODataQuery {
    this.queryOptions.skip(skip);
    return this;
  }

  top(top: number): ODataQuery {
    this.queryOptions.top(top);
    return this;
  }

  customOption(key: string, value: string) {
    this.queryOptions.customOption(key, value);
    return this;
  }

  // QUERY EXECUTION

  get(requestOptionsArgs?: RequestOptionsArgs): Observable<ODataResponse> {
    return this.odataService.get(this, requestOptionsArgs);
  }

  post(body: any, requestOptionsArgs?: RequestOptionsArgs): Observable<ODataResponse> {
    return this.odataService.post(this, body, requestOptionsArgs);
  }

  put(body: any, requestOptionsArgs?: RequestOptionsArgs): Observable<ODataResponse> {
    return this.odataService.put(this, body, requestOptionsArgs);
  }

  patch(body: any, requestOptionsArgs?: RequestOptionsArgs): Observable<ODataResponse> {
    return this.odataService.patch(this, body, requestOptionsArgs);
  }

  delete(body: any, requestOptionsArgs?: RequestOptionsArgs): Observable<ODataResponse> {
    return this.odataService.delete(this, requestOptionsArgs);
  }

  toString(): string {
    if (Utils.isNotNullNorUndefined(this.queryOptions) && !this.queryOptions.isEmpty()) {
      this.queryString += '?' + this.queryOptions.toString();
    }
    console.log(this.queryString);
    return this.queryString;
  }

  protected getSegment(segment: string): string {
    Utils.requireNotNull(segment, 'segment');
    const res: string = this.segments.find((value: string, index: number, segments: string[]) => {
      return value === segment;
    });
    return res;
  }

  protected addSegment(segment: string): void {
    Utils.requireNotNull(segment, 'segment');
    this.segments.push(segment);
    if (Utils.isNotNullNorUndefined(this.segments) && this.segments.length) {
      this.lastSegment = this.segments[this.segments.length - 1];
    }
  }
}
