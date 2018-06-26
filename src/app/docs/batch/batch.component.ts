

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ODataQuery } from '../../odata/odata-query/odata-query';
import { ODataQueryBatch } from '../../odata/odata-query/odata-query-batch';
import { ODataService } from '../../odata/odata-service/odata.service';
import { ODataResponse } from '../../odata/odata-response/odata-response';

export class BatchItem {
  constructor(
    public requestDescription: string,
    public observable: Observable<ODataResponse>,
    public responseBatch: ODataResponse,
    public responses: ODataResponse[]) { }
}

@Component({
  selector: 'ov4-batch',
  templateUrl: './batch.component.html'
})
export class BatchComponent implements OnInit, OnDestroy {
  serviceRoot: string;
  entitySet: string;
  entityId: string;
  entityPropertyPatch: string;
  entityPropertyPut: string;
  batchData: BatchItem[] = [];

  constructor(private odataService: ODataService) { }

  ngOnInit() { }

  ngOnDestroy() { }

  executeAllQueries(): void {
    const batchData: BatchItem[] = [];

    // POST
    let odataQueryBatch: ODataQueryBatch = new ODataQuery(this.odataService, this.serviceRoot).batch();
    const odataQuery: ODataQuery = new ODataQuery(this.odataService, this.serviceRoot).entitySet(this.entitySet);
    let body1: any = {}; body1[this.entityId] = 'id1';
    let body2: any = {}; body2[this.entityId] = 'id2';
    odataQueryBatch.post(odataQuery, body1).post(odataQuery, body2);
    batchData.push(new BatchItem('Add ' + this.entitySet, odataQueryBatch.execute(), null, null));

    // GET
    odataQueryBatch = new ODataQuery(this.odataService, this.serviceRoot).batch();
    odataQueryBatch.get(odataQuery);
    batchData.push(new BatchItem('Get ' + this.entitySet, odataQueryBatch.execute(), null, null));

    // PATCH
    odataQueryBatch = new ODataQuery(this.odataService, this.serviceRoot).batch();
    const odataQuery1: ODataQuery = new ODataQuery(this.odataService, this.serviceRoot).entitySet(this.entitySet).entityKey('\'id1\'');
    const odataQuery2: ODataQuery = new ODataQuery(this.odataService, this.serviceRoot).entitySet(this.entitySet).entityKey('\'id2\'');
    body1 = {}; body1[this.entityPropertyPatch] = 'patch1';
    body2 = {}; body2[this.entityPropertyPatch] = 'patch2';
    odataQueryBatch.patch(odataQuery1, body1).patch(odataQuery2, body2);
    batchData.push(new BatchItem('Update ' + this.entitySet + ' using PATCH', odataQueryBatch.execute(), null, null));

    // GET
    odataQueryBatch = new ODataQuery(this.odataService, this.serviceRoot).batch();
    odataQueryBatch.get(odataQuery);
    batchData.push(new BatchItem('Get ' + this.entitySet, odataQueryBatch.execute(), null, null));

    // PUT
    odataQueryBatch = new ODataQuery(this.odataService, this.serviceRoot).batch();
    body1 = {}; body1[this.entityPropertyPut] = 'put1';
    body2 = {}; body2[this.entityPropertyPut] = 'put2';
    odataQueryBatch.put(odataQuery1, body1).put(odataQuery2, body2);
    batchData.push(new BatchItem('Update ' + this.entitySet + ' using PUT', odataQueryBatch.execute(), null, null));

    // GET
    odataQueryBatch = new ODataQuery(this.odataService, this.serviceRoot).batch();
    odataQueryBatch.get(odataQuery);
    batchData.push(new BatchItem('Get ' + this.entitySet, odataQueryBatch.execute(), null, null));

    // DELETE
    odataQueryBatch = new ODataQuery(this.odataService, this.serviceRoot).batch();
    odataQueryBatch.delete(odataQuery1).delete(odataQuery2);
    batchData.push(new BatchItem('Delete ' + this.entitySet, odataQueryBatch.execute(), null, null));

    // GET
    odataQueryBatch = new ODataQuery(this.odataService, this.serviceRoot).batch();
    odataQueryBatch.get(odataQuery);
    batchData.push(new BatchItem('Get ' + this.entitySet, odataQueryBatch.execute(), null, null));

    this.execute(0, batchData);
  }

  private execute(index: number, batchData: BatchItem[]): void {
    const batchItem: BatchItem = batchData[index];

    batchItem.observable.subscribe(
      (odataResponse: ODataResponse) => {
        batchItem.responseBatch = odataResponse;
        batchItem.responses = odataResponse.toODataResponseBatch().getODataResponses();

        if (index === batchData.length - 1) {
          this.batchData = batchData;
        } else {
          this.execute(++index, batchData);
        }
      }
    );
  }
}
