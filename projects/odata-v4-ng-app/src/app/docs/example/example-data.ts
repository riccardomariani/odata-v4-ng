import {Subscription} from 'rxjs';
import {ODataService} from 'odata-v4-ng';

export const SERVICE_ROOT = 'https://services.odata.org/v4/TripPinServiceRW';

export class ExampleData {
    public title: string;
    public query: string;
    public odataQuery: any;
    public code: string;
    public response: string;
    public func: (example: ExampleData, odataService: ODataService) => void;
    public subscr: Subscription;
}
