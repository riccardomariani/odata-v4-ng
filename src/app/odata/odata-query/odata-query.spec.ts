import { HttpModule } from '@angular/http';
import { ODataService } from '../odata-service/odata.service';
import { TestBed, inject } from '@angular/core/testing';
import { ODataQuery } from './odata-query';
import { OperatorComparison } from '../query-options/operator';
import { Expand } from '../query-options/expand';
import { Orderby, Order } from '../query-options/orderby';
import { QueryOptions, Purpose } from '../query-options/query-options';
import { ODataQueryBatch } from './odata-query-batch';
import { QuotedString } from './quoted-string';
import { SearchSimple } from '../query-options/search/search-simple';
import { FilterComparison } from '../query-options/filter/filter-comparison';
import { FilterContains, FilterEndswith } from '../query-options/filter/filter-function';
import { FilterLambda, LambdaCollection, LambdaOperator } from '../query-options/filter/filter-lambda';

const SERVICE_ROOT = 'https://services.odata.org/v4/TripPinServiceRW';
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
    expect(odataQuery.toString()).toEqual(SERVICE_ROOT);
  });

  it('should create metadata request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .metadata();
    expect(odataQuery.toString()).toEqual(SERVICE_ROOT + '/$metadata');
  });

  it('should create entitySet request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET);
    expect(odataQuery.toString()).toEqual(SERVICE_ROOT + '/People');
  });

  it('should create entity request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey(new QuotedString('russellwhyte'));
    expect(odataQuery.toString()).toEqual(SERVICE_ROOT + '/People(\'russellwhyte\')');
  });

  it('should create singleton request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .singleton('Me');
    expect(odataQuery.toString()).toEqual(SERVICE_ROOT + '/Me');
  });

  it('should create derived entityset request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey('\'russellwhyte\'')
      .navigationProperty('Trips')
      .entityKey(1003)
      .navigationProperty('PlanItems')
      .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight');
    expect(odataQuery.toString()).toEqual(SERVICE_ROOT + '/People(\'russellwhyte\')/Trips(1003)/PlanItems/Microsoft.OData.SampleService.Models.TripPin.Flight');
  });

  it('should create derived entity request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey('\'russellwhyte\'')
      .navigationProperty('Trips')
      .entityKey(1003)
      .navigationProperty('PlanItems')
      .entityKey(21)
      .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight');
    expect(odataQuery.toString()).toEqual(SERVICE_ROOT + '/People(\'russellwhyte\')/Trips(1003)/PlanItems(21)/Microsoft.OData.SampleService.Models.TripPin.Flight');
  });

  it('should create property request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey(new QuotedString('russellwhyte'))
      .property('FirstName');
    expect(odataQuery.toString()).toEqual(SERVICE_ROOT + '/People(\'russellwhyte\')/FirstName');
  });

  it('should create property raw value request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey(new QuotedString('russellwhyte'))
      .property('FirstName')
      .value();
    expect(odataQuery.toString()).toEqual(SERVICE_ROOT + '/People(\'russellwhyte\')/FirstName/$value');
  });

  it('should create entitySet request using binary filter', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .filter(new FilterComparison('FirstName', OperatorComparison.EQ, new QuotedString('Scott')));
    expect(odataQuery.toString()).toEqual(
      SERVICE_ROOT + '/People?$filter=' + encodeURIComponent('FirstName eq \'Scott\''));
  });

  it('should create entitySet request using contains filter', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .filter(new FilterContains('Location/Address', 'San Francisco'));
    expect(odataQuery.toString()).toEqual(
      SERVICE_ROOT + '/People?$filter=' + encodeURIComponent('contains(Location/Address,\'San Francisco\')'));
  });

  it('should create entitySet request using binary filter with enum', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .filter(new FilterComparison('Gender', OperatorComparison.EQ, 'Microsoft.OData.SampleService.Models.TripPin.PersonGender\'Female\''));
    expect(odataQuery.toString()).toEqual(
      SERVICE_ROOT + '/People?$filter=' + encodeURIComponent('Gender eq Microsoft.OData.SampleService.Models.TripPin.PersonGender\'Female\''));
  });

  it('should create expand request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey(new QuotedString('russellwhyte'))
      .expand([new Expand('Trips')]);
    expect(odataQuery.toString()).toEqual(
      SERVICE_ROOT + '/People(\'russellwhyte\')?$expand=Trips');
  });

  it('should create expand request using select', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey(new QuotedString('russellwhyte'))
      .expand([new Expand('Trips', new QueryOptions(Purpose.EXPAND).select(['Name']))]);
    expect(odataQuery.toString()).toEqual(
      SERVICE_ROOT + '/People(\'russellwhyte\')?$expand=Trips($select=Name)');
  });

  it('should create expand request using filter', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey(new QuotedString('russellwhyte'))
      .expand([new Expand('Trips', new QueryOptions(Purpose.EXPAND).filter(new FilterComparison('Name', OperatorComparison.EQ, new QuotedString('Trip in US'))))]);
    expect(odataQuery.toString()).toEqual(
      SERVICE_ROOT + '/People(\'russellwhyte\')?$expand=Trips($filter=' + encodeURIComponent('Name eq \'Trip in US\')'));
  });

  it('should create orderby request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .orderby([new Orderby('EndsAt', Order.DESC)]);
    expect(odataQuery.toString()).toEqual(
      SERVICE_ROOT + '/People?$orderby=EndsAt desc');
  });

  it('should create skip and top request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .skip(10).top(20);
    expect(odataQuery.toString()).toEqual(
      SERVICE_ROOT + '/People?$skip=10&$top=20');
  });

  it('should create count request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .count();
    expect(odataQuery.toString()).toEqual(
      SERVICE_ROOT + '/People/$count');
  });

  it('should create count=true request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .count(true);
    expect(odataQuery.toString()).toEqual(
      SERVICE_ROOT + '/People?$count=true');
  });

  it('should create select request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .select(['Name', 'IcaoCode']);
    expect(odataQuery.toString()).toEqual(
      SERVICE_ROOT + '/People?$select=Name,IcaoCode');
  });

  it('should create search request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .search(new SearchSimple('Boise'));
    expect(odataQuery.toString()).toEqual(
      SERVICE_ROOT + '/People?$search=' + encodeURIComponent('Boise'));
  });

  it('should create lambda any on properties request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .filter(new FilterLambda(LambdaCollection.PROPERTY_COLLECTION, 'Emails', LambdaOperator.ANY, new FilterEndswith('Emails', 'contoso.com')));
    expect(odataQuery.toString()).toEqual(
      SERVICE_ROOT + '/People?$filter=' + encodeURIComponent('Emails/any(x:endswith(x,\'contoso.com\'))'));
  });

  it('should create lambda all on properties request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .filter(new FilterLambda(LambdaCollection.PROPERTY_COLLECTION, 'Emails', LambdaOperator.ALL, new FilterEndswith('Emails', 'contoso.com')));
    expect(odataQuery.toString()).toEqual(
      SERVICE_ROOT + '/People?$filter=' + encodeURIComponent('Emails/all(x:endswith(x,\'contoso.com\'))'));
  });

  it('should create lambda any on properties request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .filter(new FilterLambda(LambdaCollection.ENTITY_SET, 'Friends', LambdaOperator.ANY, new FilterComparison('FirstName', OperatorComparison.EQ, new QuotedString('Scott'))));
    expect(odataQuery.toString()).toEqual(
      SERVICE_ROOT + '/People?$filter=' + encodeURIComponent('Friends/any(x:x/FirstName eq \'Scott\')'));
  });

  it('should create lambda all on properties request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .filter(new FilterLambda(LambdaCollection.ENTITY_SET, 'Friends', LambdaOperator.ALL, new FilterComparison('FirstName', OperatorComparison.EQ, new QuotedString('Scott'))));
    expect(odataQuery.toString()).toEqual(
      SERVICE_ROOT + '/People?$filter=' + encodeURIComponent('Friends/all(x:x/FirstName eq \'Scott\')'));
  });

  it('should create reference request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey(new QuotedString('scottketchum'))
      .navigationProperty('Friends')
      .ref();
    expect(odataQuery.toString()).toEqual(SERVICE_ROOT + '/People(\'scottketchum\')/Friends/$ref');
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
    expect(odataQuery.toString()).toEqual(SERVICE_ROOT + '/People(\'russellwhyte\')/Trips(1001)/PlanItems(11)/Microsoft.OData.SampleService.Models.TripPin.Flight/Airline/$ref');
  });

  it('should create unbound function call request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .functionCall('GetNearestAirport(lat = 33, lon = -118)');
    expect(odataQuery.toString()).toEqual(
      SERVICE_ROOT + '/GetNearestAirport(lat = 33, lon = -118)');
  });

  it('should create bound function call request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey(new QuotedString('russellwhyte'))
      .functionCall('Microsoft.OData.SampleService.Models.TripPin.GetFavoriteAirline()');
    expect(odataQuery.toString()).toEqual(
      SERVICE_ROOT + '/People(\'russellwhyte\')/Microsoft.OData.SampleService.Models.TripPin.GetFavoriteAirline()');
  });

  it('should create unbound action call request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .actionCall('Microsoft.OData.SampleService.Models.TripPin.ShareTrip');
    expect(odataQuery.toString()).toEqual(
      SERVICE_ROOT + '/Microsoft.OData.SampleService.Models.TripPin.ShareTrip');
  });

  it('should create bound action call request', () => {
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT)
      .entitySet(ENTITY_SET)
      .entityKey(new QuotedString('russellwhyte'))
      .actionCall('Microsoft.OData.SampleService.Models.TripPin.ShareTrip');
    expect(odataQuery.toString()).toEqual(
      SERVICE_ROOT + '/People(\'russellwhyte\')/Microsoft.OData.SampleService.Models.TripPin.ShareTrip');
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
