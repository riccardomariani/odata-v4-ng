import { HttpModule } from '@angular/http';
import { ODataService } from '../odata-service/odata.service';
import { TestBed, inject } from '@angular/core/testing';
import { ODataQuery } from './odata-query';
import { FilterLambda, FilterBinary, Filter, FilterContains, LambdaCollection, LambdaOperator, FilterEndswith } from '../query-options/filter';
import { OperatorComparison } from '../query-options/operator';
import { Expand, ExpandItem } from '../query-options/expand';
import { Orderby, Order, OrderbyItem } from '../query-options/orderby';
import { Select } from '../query-options/select';
import { QueryOptions } from '../query-options/query-options';
import { ODataQueryBatch } from './odata-query-batch';
import { QuotedString } from './quoted-string';

const SERVICE_ROOT = 'http://services.odata.org/v4/TripPinServiceRW';
const ENTITY_SET = 'People';

describe('OdataQuery', () => {
  let odataService: ODataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ODataService]
    });

    odataService = TestBed.get(ODataService);
  });

  it('should be created', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT);
    expect(odataQuery).toBeTruthy();
    expect(odataQuery.toString()).toEqual('http://services.odata.org/v4/TripPinServiceRW');
  });

  it('should create entitySet request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET);
    expect(odataQuery.toString()).toEqual('http://services.odata.org/v4/TripPinServiceRW/People');
  });

  it('should create entity request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey(new QuotedString('russellwhyte'));
    expect(odataQuery.toString()).toEqual('http://services.odata.org/v4/TripPinServiceRW/People(\'russellwhyte\')');
  });

  it('should create property request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey(new QuotedString('russellwhyte'))
      .property('FirstName');
    expect(odataQuery.toString()).toEqual('http://services.odata.org/v4/TripPinServiceRW/People(\'russellwhyte\')/FirstName');
  });

  it('should create property raw value request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey(new QuotedString('russellwhyte'))
      .property('FirstName')
      .value();
    expect(odataQuery.toString()).toEqual('http://services.odata.org/v4/TripPinServiceRW/People(\'russellwhyte\')/FirstName/$value');
  });

  it('should create entitySet request using binary filter', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .filter(new FilterBinary('FirstName', OperatorComparison.EQ, new QuotedString('Scott')));
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People?' + encodeURIComponent('$filter=FirstName eq \'Scott\''));
  });

  it('should create entitySet request using contains filter', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .filter(new FilterContains('Location/Address', new QuotedString('San Francisco')));
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People?' + encodeURIComponent('$filter=contains(Location/Address,\'San Francisco\')'));
  });

  it('should create entitySet request using binary filter with enum', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .filter(new FilterBinary('Gender', OperatorComparison.EQ, 'Microsoft.OData.SampleService.Models.TripPin.PersonGender\'Female\''));
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People?' + encodeURIComponent('$filter=Gender eq Microsoft.OData.SampleService.Models.TripPin.PersonGender\'Female\''));
  });

  it('should create expand request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey(new QuotedString('russellwhyte'))
      .expand(new Expand([new ExpandItem('Trips')]));
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People(\'russellwhyte\')?' + encodeURIComponent('$expand=Trips'));
  });

  it('should create expand request using select', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey(new QuotedString('russellwhyte'))
      .expand(new Expand([
        new ExpandItem('Trips', new Select(['Name']), null)
      ]));
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People(\'russellwhyte\')?' + encodeURIComponent('$expand=Trips($select=Name)'));
  });

  it('should create expand request using filter', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey(new QuotedString('russellwhyte'))
      .expand(new Expand([
        new ExpandItem('Trips', null, new FilterBinary('Name', OperatorComparison.EQ, new QuotedString('Trip in US')))
      ]));
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People(\'russellwhyte\')?' + encodeURIComponent('$expand=Trips($filter=Name eq \'Trip in US\')'));
  });

  it('should create orderby request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .orderby(new Orderby([new OrderbyItem('EndsAt', Order.DESC)]));
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People?' + encodeURIComponent('$orderby=EndsAt desc'));
  });

  it('should create skip and top request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .skip(10).top(20);
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People?' + encodeURIComponent('$skip=10&$top=20'));
  });

  it('should create count request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .count();
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People/$count');
  });

  it('should create count=true request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .count(true);
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People?' + encodeURIComponent('$count=true'));
  });

  it('should create select request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .select(new Select(['Name', 'IcaoCode']));
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People?' + encodeURIComponent('$select=Name,IcaoCode'));
  });

  it('should create search request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .search('Boise');
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People?' + encodeURIComponent('$search=Boise'));
  });

  it('should create lambda any on properties request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .filter(new FilterLambda(LambdaCollection.PROPERTY_COLLECTION, 'Emails', LambdaOperator.ANY, new FilterEndswith('Emails', new QuotedString('contoso.com'))));
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People?' + encodeURIComponent('$filter=Emails/any(x:endswith(x,\'contoso.com\'))'));
  });

  it('should create lambda all on properties request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .filter(new FilterLambda(LambdaCollection.PROPERTY_COLLECTION, 'Emails', LambdaOperator.ALL, new FilterEndswith('Emails', new QuotedString('contoso.com'))));
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People?' + encodeURIComponent('$filter=Emails/all(x:endswith(x,\'contoso.com\'))'));
  });

  it('should create lambda any on properties request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .filter(new FilterLambda(LambdaCollection.ENTITY_SET, 'Friends', LambdaOperator.ANY, new FilterBinary('FirstName', OperatorComparison.EQ, new QuotedString('Scott'))));
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People?' + encodeURIComponent('$filter=Friends/any(x:x/FirstName eq \'Scott\')'));
  });

  it('should create lambda all on properties request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .filter(new FilterLambda(LambdaCollection.ENTITY_SET, 'Friends', LambdaOperator.ALL, new FilterBinary('FirstName', OperatorComparison.EQ, new QuotedString('Scott'))));
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People?' + encodeURIComponent('$filter=Friends/all(x:x/FirstName eq \'Scott\')'));
  });

  it('should create reference request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey(new QuotedString('scottketchum'))
      .navigationProperty('Friends')
      .ref();
    expect(odataQuery.toString()).toEqual('http://services.odata.org/v4/TripPinServiceRW/People(\'scottketchum\')/Friends/$ref');
  });

  it('should create change reference request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey(new QuotedString('russellwhyte'))
      .navigationProperty('Trips')
      .entityKey(1001)
      .navigationProperty('PlanItems')
      .entityKey(11)
      .navigationProperty('Microsoft.OData.SampleService.Models.TripPin.Flight/Airline')
      .ref();
    expect(odataQuery.toString()).toEqual('http://services.odata.org/v4/TripPinServiceRW/People(\'russellwhyte\')/Trips(1001)/PlanItems(11)/Microsoft.OData.SampleService.Models.TripPin.Flight/Airline/$ref');
  });

  it('should create unbound function call request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .functionCall('GetNearestAirport(lat = 33, lon = -118)');
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/GetNearestAirport(lat = 33, lon = -118)');
  });

  it('should create bound function call request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey(new QuotedString('russellwhyte'))
      .functionCall('Microsoft.OData.SampleService.Models.TripPin.GetFavoriteAirline()');
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People(\'russellwhyte\')/Microsoft.OData.SampleService.Models.TripPin.GetFavoriteAirline()');
  });

  it('should create unbound action call request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .actionCall('Microsoft.OData.SampleService.Models.TripPin.ShareTrip');
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/Microsoft.OData.SampleService.Models.TripPin.ShareTrip');
  });

  it('should create bound action call request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey(new QuotedString('russellwhyte'))
      .actionCall('Microsoft.OData.SampleService.Models.TripPin.ShareTrip');
    expect(odataQuery.toString()).toEqual(
      'http://services.odata.org/v4/TripPinServiceRW/People(\'russellwhyte\')/Microsoft.OData.SampleService.Models.TripPin.ShareTrip');
  });

  // it('should create batch request', () => {
  //   const odataQueryBatch: ODataQueryBatch = new ODataQuery(odataService, SERVICE_ROOT).batch()
  //     .get(new ODataQuery(odataService, SERVICE_ROOT).entitySet('Customers').entityKey(new QuotedString('ALFKI')))
  //     .post(new ODataQuery(odataService, SERVICE_ROOT).entitySet('Customers'), '<JSON representation of a new Customer>')
  //     .patch(new ODataQuery(odataService, SERVICE_ROOT).entitySet('Customers').entityKey(new QuotedString('ALFKI')), '<JSON representation of Customer ALFKI>')
  //     .get(new ODataQuery(odataService, SERVICE_ROOT).entitySet('Products'));

  //   expect(odataQueryBatch.toString()).toEqual(SERVICE_ROOT + '/$batch');
  // });
});
