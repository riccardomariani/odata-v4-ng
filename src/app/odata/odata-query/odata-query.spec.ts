import { TestBed, inject } from '@angular/core/testing';
import { ODataQuery } from './odata-query';
import { FilterAnyItem, FilterBinaryItem, Filter } from '../query-options/filter';
import { OperatorComparison } from '../query-options/operator';
import { Expand, ExpandItem } from '../query-options/expand';
import { Orderby, Order, OrderbyItem } from '../query-options/orderby';
import { Select } from '../query-options/select';
import { QueryOptions } from '../query-options/query-options';

const SERVICE_ROOT = 'http://services.odata.org/v4/TripPinServiceRW';
const ENTITY_SET = 'People';

describe('OdataQuery', () => {
  it('should be created', () => {
    const odataQuery: ODataQuery = new ODataQuery(SERVICE_ROOT);
    expect(odataQuery).toBeTruthy();
    expect(odataQuery.toString()).toEqual('http://services.odata.org/v4/TripPinServiceRW');
  });

  it('should create entitySet request', () => {
    const odataQuery: ODataQuery = new ODataQuery(SERVICE_ROOT)
      .entitySet(ENTITY_SET);
    expect(odataQuery.toString()).toEqual('http://services.odata.org/v4/TripPinServiceRW/People');
  });

  it('should create entity request', () => {
    const odataQuery: ODataQuery = new ODataQuery(SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey('russellwhyte');
    expect(odataQuery.toString()).toEqual('http://services.odata.org/v4/TripPinServiceRW/People(\'russellwhyte\')');
  });

  it('should create property request', () => {
    const odataQuery: ODataQuery = new ODataQuery(SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey('russellwhyte')
      .property('FirstName');
    expect(odataQuery.toString()).toEqual('http://services.odata.org/v4/TripPinServiceRW/People(\'russellwhyte\')/FirstName');
  });

  it('should create property raw value request', () => {
    const odataQuery: ODataQuery = new ODataQuery(SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey('russellwhyte')
      .property('FirstName')
      .value();
    expect(odataQuery.toString()).toEqual('http://services.odata.org/v4/TripPinServiceRW/People(\'russellwhyte\')/FirstName/$value');
  });

  it('should create entitySet request using filter', () => {
    const odataQuery: ODataQuery = new ODataQuery(SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .queryOptions(new QueryOptions().filter(new Filter([
        new FilterBinaryItem('FirstName', OperatorComparison.EQ, 'Scott')
      ])));
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People?' + encodeURIComponent('$filter=FirstName eq \'Scott\''));
  });

  it('should create reference request', () => {
    const odataQuery: ODataQuery = new ODataQuery(SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey('lewisblack')
      .navigationProperty('Trips')
      .ref();
    expect(odataQuery.toString()).toEqual('http://services.odata.org/v4/TripPinServiceRW/People(\'lewisblack\')/Trips/$ref');
  });

  it('should create function call request', () => {
    const odataQuery: ODataQuery = new ODataQuery(SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey('russellwhyte')
      .navigationProperty('Trips')
      .entityKey(0)
      .functionCall('Microsoft.OData.SampleService.Models.TripPin.GetInvolvedPeople()');
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People(\'russellwhyte\')/Trips(0)/Microsoft.OData.SampleService.Models.TripPin.GetInvolvedPeople()');
  });

  it('should create expand request', () => {
    const odataQuery: ODataQuery = new ODataQuery(SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey('russellwhyte')
      .queryOptions(new QueryOptions().expand(new Expand([new ExpandItem('Trips')])));
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People(\'russellwhyte\')?' + encodeURIComponent('$expand=Trips'));
  });

  it('should create expand request using select', () => {
    const odataQuery: ODataQuery = new ODataQuery(SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey('russellwhyte')
      .queryOptions(new QueryOptions().expand(new Expand([
        new ExpandItem('Trips', new Select(['Name']), null)
      ])));
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People(\'russellwhyte\')?' + encodeURIComponent('$expand=Trips($select=Name)'));
  });

  it('should create expand request using filter', () => {
    const odataQuery: ODataQuery = new ODataQuery(SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey('russellwhyte')
      .queryOptions(new QueryOptions().expand(new Expand([
        new ExpandItem('Trips', null, new Filter([
          new FilterBinaryItem('Name', OperatorComparison.EQ, 'Trip in US')
        ]))
      ])));
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People(\'russellwhyte\')?' + encodeURIComponent('$expand=Trips($filter=Name eq \'Trip in US\')'));
  });

  it('should create orderby request', () => {
    const odataQuery: ODataQuery = new ODataQuery(SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .queryOptions(new QueryOptions().orderby(new Orderby([new OrderbyItem('EndsAt', Order.DESC)])));
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People?' + encodeURIComponent('$orderby=EndsAt desc'));
  });

  it('should create skip and top request', () => {
    const odataQuery: ODataQuery = new ODataQuery(SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .queryOptions(new QueryOptions().skip(10).top(20));
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People?' + encodeURIComponent('$skip=10&$top=20'));
  });

  it('should create $count request', () => {
    const odataQuery: ODataQuery = new ODataQuery(SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .count();
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People/$count');
  });

  it('should create $count=true request', () => {
    const odataQuery: ODataQuery = new ODataQuery(SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .queryOptions(new QueryOptions().count(true));
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People?' + encodeURIComponent('$count=true'));
  });
});
