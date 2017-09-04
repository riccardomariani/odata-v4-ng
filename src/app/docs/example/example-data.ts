import { ODataQuery } from '../../odata/odata-query/odata-query';
import { Subscription } from 'rxjs/Subscription';

export const SERVICE_ROOT = 'http://services.odata.org/v4/TripPinServiceRW';

export class ExampleData {
    public title: string;
    public query: string;
    public odataQuery: ODataQuery;
    public code: string;
    public response: string;
    public func: Function;
    public subscr: Subscription;
}
