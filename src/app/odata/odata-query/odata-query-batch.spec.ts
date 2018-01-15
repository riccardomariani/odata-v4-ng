import { ODataQueryBatch, BatchRequest, Method } from './odata-query-batch';
import { ODataService } from '../odata-service/odata.service';
import { ODataModule } from './../odata.module';
import { ODataQuery } from './odata-query';
import { HttpModule } from '@angular/http';
import { TestBed } from '@angular/core/testing';

describe('ODataQueryBatch', () => {
  let odataService: ODataService;
  const SERVICE_ROOT = 'serviceRoot';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ODataModule]
    });

    odataService = TestBed.get(ODataService);
  });

  it('test get', () => {
    const odataQueryBatch: ODataQueryBatch = new ODataQueryBatch(odataService, SERVICE_ROOT);
    expect(() => odataQueryBatch.get(undefined)).toThrowError('odataQuery cannot be undefined');
    expect(() => odataQueryBatch.get(null)).toThrowError('odataQuery cannot be null');
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT);
    odataQueryBatch.get(odataQuery);
    expect(odataQueryBatch['requests'][0]).toEqual(new BatchRequest(Method.GET, odataQuery));
  });

  it('test post', () => {
    const odataQueryBatch: ODataQueryBatch = new ODataQueryBatch(odataService, SERVICE_ROOT);
    expect(() => odataQueryBatch.post(undefined, undefined)).toThrowError('odataQuery cannot be undefined');
    expect(() => odataQueryBatch.post(null, null)).toThrowError('odataQuery cannot be null');
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT);
    odataQueryBatch.post(odataQuery, { test: 'test' });
    expect(odataQueryBatch['requests'][0]).toEqual(new BatchRequest(Method.POST, odataQuery, { test: 'test' }));
  });

  it('test put', () => {
    const odataQueryBatch: ODataQueryBatch = new ODataQueryBatch(odataService, SERVICE_ROOT);
    expect(() => odataQueryBatch.put(undefined, undefined)).toThrowError('odataQuery cannot be undefined');
    expect(() => odataQueryBatch.put(null, null)).toThrowError('odataQuery cannot be null');
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT);
    odataQueryBatch.put(odataQuery, { test: 'test' });
    expect(odataQueryBatch['requests'][0]).toEqual(new BatchRequest(Method.PUT, odataQuery, { test: 'test' }));
  });

  it('test patch', () => {
    const odataQueryBatch: ODataQueryBatch = new ODataQueryBatch(odataService, SERVICE_ROOT);
    expect(() => odataQueryBatch.patch(undefined, undefined)).toThrowError('odataQuery cannot be undefined');
    expect(() => odataQueryBatch.patch(null, null)).toThrowError('odataQuery cannot be null');
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT);
    odataQueryBatch.patch(odataQuery, { test: 'test' });
    expect(odataQueryBatch['requests'][0]).toEqual(new BatchRequest(Method.PATCH, odataQuery, { test: 'test' }));
  });

  it('test delete', () => {
    const odataQueryBatch: ODataQueryBatch = new ODataQueryBatch(odataService, SERVICE_ROOT);
    expect(() => odataQueryBatch.delete(undefined)).toThrowError('odataQuery cannot be undefined');
    expect(() => odataQueryBatch.delete(null)).toThrowError('odataQuery cannot be null');
    const odataQuery: ODataQuery = new ODataQuery(odataService, SERVICE_ROOT);
    odataQueryBatch.delete(odataQuery);
    expect(odataQueryBatch['requests'][0]).toEqual(new BatchRequest(Method.DELETE, odataQuery));
  });
});
