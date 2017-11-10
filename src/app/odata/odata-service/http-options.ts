import { HttpParams, HttpHeaders } from '@angular/common/http';

export class HttpOptions {
    constructor(
        public headers?: HttpHeaders,
        public observe: 'response' = 'response',
        public params?: HttpParams,
        public reportProgress?: boolean,
        public responseType: 'text' = 'text',
        public withCredentials?: boolean
    ) { }
}
