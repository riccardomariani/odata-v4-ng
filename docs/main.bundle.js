webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: 'odata-v4-ng',
        children: []
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n</div>\n\n<h2>Usage Examples</h2>\n<span>\n  For all examples in this page we are using the publicly available TripPin service (SERVICE_ROOT): <a href=\"https://services.odata.org/V4/TripPinServiceRW\">{{serviceRoot}}.</a><br/>\n  Metadata of this service are here: <a href=\"https://services.odata.org/V4/TripPinServiceRW/$metadata\">{{serviceRoot}}/$metadata.</a><br/>\n  In \"app.module.ts\" import HttpModule and declare ODataService as a provider.\n</span>\n<span>\n  <p><b><i>\n    Attention to make these examples working you need to visit the TripPin service page and accept the certificate which is surprisingly not valid.<br/>\n    The lack of validity is due to the certificate host name not matching the actual host name of the service.<br/>\n    Anyway the TripPin service has been created by Microsoft so it should be safe accepting the certificate.\n  </i></b><p>\n</span>\n\n<div *ngFor=\"let example of examples\">\n  <h3>{{example.title}}</h3>\n  <h4>Query</h4>\n  <span class=\"queryServiceRoot\">{{example.query}}</span>\n  <h4>Code</h4>\n  <pre class=\"codeServiceRoot\">{{example.code}}</pre>\n  <h4>Response</h4>\n  <textarea class=\"resultServiceRoot\" readonly=\"true\">{{example.response}}</textarea>\n  <hr/>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".codeServiceRoot {\n  margin: 0;\n}\n.resultServiceRoot {\n  width: 50%;\n  height: 150px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__odata_odata_service_odata_service__ = __webpack_require__("../../../../../src/app/odata/odata-service/odata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__odata_odata_query_odata_query__ = __webpack_require__("../../../../../src/app/odata/odata-query/odata-query.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Example = (function () {
    function Example() {
    }
    return Example;
}());
var SERVICE_ROOT = 'https://services.odata.org/v4/TripPinServiceRW';
var AppComponent = (function () {
    function AppComponent(odataService) {
        this.odataService = odataService;
        this.title = 'odata-v4-ng';
        this.serviceRoot = SERVICE_ROOT;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.examples = [];
        //
        var example = new Example();
        this.examples.push(example);
        example.title = 'Get service document';
        example.query = SERVICE_ROOT;
        example.code = "new ODataQuery(this.odataService, SERVICE_ROOT)\n    .get().subscribe((odataResponse: ODataResponse) => {\n      this.examples[0].response = odataResponse.toString();\n    });";
        example.subscr = new __WEBPACK_IMPORTED_MODULE_1__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, SERVICE_ROOT)
            .get().subscribe(function (odataResponse) {
            _this.examples[0].response = odataResponse.toString();
        });
        //
        example = new Example();
        this.examples.push(example);
        example.title = 'Get entity set';
        example.query = SERVICE_ROOT + '/People';
        example.code = "new ODataQuery(this.odataService, SERVICE_ROOT).entitySet('People')\n    .get().subscribe((odataResponse: ODataResponse) => {\n      this.examples[1].response = odataResponse.toString();\n    });";
        example.subscr = new __WEBPACK_IMPORTED_MODULE_1__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, SERVICE_ROOT).entitySet('People')
            .get().subscribe(function (odataResponse) {
            _this.examples[1].response = odataResponse.toString();
        });
        //
    };
    AppComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.examples; _i < _a.length; _i++) {
            var example = _a[_i];
            example.subscr.unsubscribe();
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_11" /* Component */])({
        selector: 'ov4-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__odata_odata_service_odata_service__["a" /* ODataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__odata_odata_service_odata_service__["a" /* ODataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__odata_odata_service_odata_service__ = __webpack_require__("../../../../../src/app/odata/odata-service/odata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_0__odata_odata_service_odata_service__["a" /* ODataService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/odata/odata-query/odata-query-abstract.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__("../../../../../src/app/odata/utils/utils.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ODataQueryAbstract; });

var ODataQueryAbstract = (function () {
    function ODataQueryAbstract(odataService, serviceRoot) {
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(odataService, 'odataService');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(serviceRoot, 'serviceRoot');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotEmpty(serviceRoot, 'serviceRoot');
        this.odataService = odataService;
        this.serviceRoot = serviceRoot;
        this.queryString = serviceRoot;
    }
    return ODataQueryAbstract;
}());

//# sourceMappingURL=odata-query-abstract.js.map

/***/ }),

/***/ "../../../../../src/app/odata/odata-query/odata-query-batch.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__("../../../../../src/app/odata/utils/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__odata_query_abstract__ = __webpack_require__("../../../../../src/app/odata/odata-query/odata-query-abstract.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid__ = __webpack_require__("../../../../uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uuid__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ODataQueryBatch; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Method;
(function (Method) {
    Method[Method["GET"] = 0] = "GET";
    Method[Method["POST"] = 1] = "POST";
    Method[Method["PUT"] = 2] = "PUT";
    Method[Method["PATCH"] = 3] = "PATCH";
    Method[Method["DELETE"] = 4] = "DELETE";
})(Method || (Method = {}));
var Request = (function () {
    function Request(method, odataQuery, body, requestOptionsArgs) {
        this.method = method;
        this.odataQuery = odataQuery;
        this.body = body;
        this.requestOptionsArgs = requestOptionsArgs;
    }
    return Request;
}());
var ODataQueryBatch = (function (_super) {
    __extends(ODataQueryBatch, _super);
    function ODataQueryBatch(odataService, serviceRoot) {
        var _this = _super.call(this, odataService, serviceRoot) || this;
        __WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(odataService, 'odataService');
        __WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(serviceRoot, 'serviceRoot');
        __WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* Utils */].requireNotEmpty(serviceRoot, 'serviceRoot');
        _this.queryString = __WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* Utils */].appendSegment(serviceRoot, ODataQueryBatch.$BATCH);
        _this.requests = [];
        _this.batchBoundary = ODataQueryBatch.BATCH_PREFIX + __WEBPACK_IMPORTED_MODULE_3_uuid__["v4"]();
        _this.changesetBoundary = null;
        _this.changesetID = 1;
        return _this;
    }
    ODataQueryBatch.prototype.get = function (odataQuery, requestOptionsArgs) {
        this.requests.push(new Request(Method.GET, odataQuery, null, requestOptionsArgs));
        return this;
    };
    ODataQueryBatch.prototype.post = function (odataQuery, body, requestOptionsArgs) {
        this.requests.push(new Request(Method.POST, odataQuery, body, requestOptionsArgs));
        return this;
    };
    ODataQueryBatch.prototype.put = function (odataQuery, body, requestOptionsArgs) {
        this.requests.push(new Request(Method.PUT, odataQuery, body, requestOptionsArgs));
        return this;
    };
    ODataQueryBatch.prototype.patch = function (odataQuery, body, requestOptionsArgs) {
        this.requests.push(new Request(Method.PATCH, odataQuery, body, requestOptionsArgs));
        return this;
    };
    ODataQueryBatch.prototype.delete = function (odataQuery, requestOptionsArgs) {
        this.requests.push(new Request(Method.DELETE, odataQuery, null, requestOptionsArgs));
        return this;
    };
    ODataQueryBatch.prototype.execute = function (requestOptionsArgs) {
        // set headers
        if (__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* Utils */].isNullOrUndefined(requestOptionsArgs)) {
            requestOptionsArgs = {};
        }
        if (__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* Utils */].isNullOrUndefined(requestOptionsArgs.headers)) {
            requestOptionsArgs.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({
                ODATA_VERSION: ODataQueryBatch.ODATA_V4,
                CONTENT_TYPE: ODataQueryBatch.MULTIPART_MIXED + this.batchBoundary
            });
        }
        // send request
        return this.odataService.post(this, this.getBody(), requestOptionsArgs);
    };
    ODataQueryBatch.prototype.toString = function () {
        console.log(this.queryString);
        return this.queryString;
    };
    ODataQueryBatch.prototype.getBody = function () {
        var res = '';
        for (var _i = 0, _a = this.requests; _i < _a.length; _i++) {
            var request = _a[_i];
            var method = request.method;
            var odataQuery = request.odataQuery;
            var requestOptionsArgs = request.requestOptionsArgs;
            var body = request.body;
            if (method === Method.GET) {
                if (__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* Utils */].isNotNullNorUndefined(this.changesetBoundary)) {
                    res += ODataQueryBatch.BOUNDARY_PREFIX + this.changesetBoundary + ODataQueryBatch.NEWLINE;
                    this.changesetBoundary = null;
                }
                res += ODataQueryBatch.BOUNDARY_PREFIX + this.batchBoundary + ODataQueryBatch.NEWLINE;
                res += ODataQueryBatch.CONTENT_TYPE + ': ' + ODataQueryBatch.APPLICATION_HTTP + ODataQueryBatch.NEWLINE;
                res += ODataQueryBatch.NEWLINE;
                res += Method[method] + ' ' + odataQuery + ODataQueryBatch.NEWLINE;
                res += ODataQueryBatch.ODATA_VERSION + ': ' + ODataQueryBatch.ODATA_V4 + ODataQueryBatch.NEWLINE;
                res += ODataQueryBatch.NEWLINE;
                res += ODataQueryBatch.NEWLINE;
            }
            else {
                // get If-Match
                var ifMatch = null;
                if (__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* Utils */].isNotNullNorUndefined(requestOptionsArgs)
                    && __WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* Utils */].isNotNullNorUndefined(requestOptionsArgs.headers)) {
                    ifMatch = requestOptionsArgs.headers.get(ODataQueryBatch.IF_MATCH);
                }
                if (__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* Utils */].isNullOrUndefined(this.changesetBoundary)) {
                    this.changesetBoundary = ODataQueryBatch.CHANGESET_PREFIX + __WEBPACK_IMPORTED_MODULE_3_uuid__["v4"]();
                    res += ODataQueryBatch.BOUNDARY_PREFIX + this.batchBoundary + ODataQueryBatch.NEWLINE;
                    res += ODataQueryBatch.CONTENT_TYPE + ': ' + ODataQueryBatch.MULTIPART_MIXED + this.changesetBoundary + ODataQueryBatch.NEWLINE;
                    res += ODataQueryBatch.NEWLINE;
                }
                else {
                }
                res += ODataQueryBatch.BOUNDARY_PREFIX + this.changesetBoundary + ODataQueryBatch.NEWLINE;
                res += ODataQueryBatch.CONTENT_TYPE + ': ' + ODataQueryBatch.APPLICATION_HTTP + ODataQueryBatch.NEWLINE;
                res += ODataQueryBatch.CONTENT_ID + ': ' + this.changesetID++ + ODataQueryBatch.NEWLINE;
                res += ODataQueryBatch.NEWLINE;
                res += Method[method] + ' ' + odataQuery + ODataQueryBatch.HTTP11 + ODataQueryBatch.NEWLINE;
                res += ODataQueryBatch.ODATA_VERSION + ': ' + ODataQueryBatch.ODATA_V4 + ODataQueryBatch.NEWLINE;
                res += ODataQueryBatch.CONTENT_TYPE + ': ' + ODataQueryBatch.APPLICATION_JSON + ODataQueryBatch.NEWLINE;
                if (__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* Utils */].isNotNullNorUndefined(ifMatch)) {
                    res += ODataQueryBatch.IF_MATCH + ': ' + ifMatch + ODataQueryBatch.NEWLINE;
                }
                res += ODataQueryBatch.NEWLINE;
                res += JSON.stringify(body) + ODataQueryBatch.NEWLINE;
            }
        }
        if (res.length) {
            if (__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* Utils */].isNotNullNorUndefined(this.changesetBoundary)) {
                res += ODataQueryBatch.BOUNDARY_PREFIX + this.changesetBoundary + ODataQueryBatch.NEWLINE;
                this.changesetBoundary = null;
            }
            res += ODataQueryBatch.BOUNDARY_PREFIX + this.batchBoundary;
        }
        return res;
    };
    return ODataQueryBatch;
}(__WEBPACK_IMPORTED_MODULE_2__odata_query_abstract__["a" /* ODataQueryAbstract */]));

ODataQueryBatch.BOUNDARY_PREFIX = '--';
ODataQueryBatch.BATCH_PREFIX = 'batch_';
ODataQueryBatch.CHANGESET_PREFIX = 'changeset_';
ODataQueryBatch.NEWLINE = '\r\n';
// CONSTANT SEGMENTS
ODataQueryBatch.$BATCH = '$batch';
// HEADERS
ODataQueryBatch.HTTP11 = 'HTTP/1.1';
ODataQueryBatch.ODATA_VERSION = 'OData-Version';
ODataQueryBatch.CONTENT_TYPE = 'Content-Type';
ODataQueryBatch.CONTENT_ID = 'Content-ID';
ODataQueryBatch.IF_MATCH = 'If-Match';
// HEADER VALUES
ODataQueryBatch.ODATA_V4 = '4.0';
ODataQueryBatch.MULTIPART_MIXED = 'multipart/mixed;boundary=';
ODataQueryBatch.APPLICATION_HTTP = 'application/http';
ODataQueryBatch.APPLICATION_JSON = 'application/json';
//# sourceMappingURL=odata-query-batch.js.map

/***/ }),

/***/ "../../../../../src/app/odata/odata-query/odata-query.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__("../../../../../src/app/odata/utils/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__query_options_query_options__ = __webpack_require__("../../../../../src/app/odata/query-options/query-options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__odata_query_batch__ = __webpack_require__("../../../../../src/app/odata/odata-query/odata-query-batch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__odata_query_abstract__ = __webpack_require__("../../../../../src/app/odata/odata-query/odata-query-abstract.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ODataQuery; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ODataQuery = (function (_super) {
    __extends(ODataQuery, _super);
    function ODataQuery(odataService, serviceRoot) {
        var _this = _super.call(this, odataService, serviceRoot) || this;
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(odataService, 'odataService');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(serviceRoot, 'serviceRoot');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotEmpty(serviceRoot, 'serviceRoot');
        _this.queryOptions = new __WEBPACK_IMPORTED_MODULE_1__query_options_query_options__["a" /* QueryOptions */]();
        _this.segments = [];
        _this.lastSegment = null;
        return _this;
    }
    // QUERY SEGMENTS
    ODataQuery.prototype.entitySet = function (entitySet) {
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNullOrUndefined(this.getSegment(ODataQuery.ENTITY_SET), ODataQuery.ENTITY_SET);
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(entitySet, 'entitySet');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotEmpty(entitySet, 'entitySet');
        this.queryString = __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].appendSegment(this.queryString, entitySet);
        this.addSegment(ODataQuery.ENTITY_SET);
        return this;
    };
    ODataQuery.prototype.entityKey = function (entityKey) {
        if (this.lastSegment !== ODataQuery.ENTITY_SET && this.lastSegment !== ODataQuery.NAVIGATION_PROPERTY) {
            throw new Error('entityKey can only be appended to entitySet or navigationProperty');
        }
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(entityKey, 'entityKey');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotEmpty(entityKey, 'entityKey');
        entityKey = __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].getValueURI(entityKey, true);
        this.queryString = __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].removeEndingSeparator(this.queryString) + '(' + entityKey + ')';
        this.addSegment(ODataQuery.ENTITY_KEY);
        return this;
    };
    ODataQuery.prototype.property = function (property) {
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNullOrUndefined(this.getSegment(ODataQuery.PROPERTY), ODataQuery.PROPERTY);
        if (this.lastSegment !== ODataQuery.ENTITY_KEY) {
            throw new Error('property can only be appended to entityKey');
        }
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(property, 'property');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotEmpty(property, 'property');
        this.queryString = __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].appendSegment(this.queryString, property);
        this.addSegment(ODataQuery.PROPERTY);
        return this;
    };
    ODataQuery.prototype.navigationProperty = function (navigationProperty) {
        if (this.lastSegment !== ODataQuery.ENTITY_KEY) {
            throw new Error('navigationProperty can only be appended to entityKey');
        }
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(navigationProperty, 'navigationProperty');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotEmpty(navigationProperty, 'navigationProperty');
        this.queryString = __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].appendSegment(this.queryString, navigationProperty);
        this.addSegment(ODataQuery.NAVIGATION_PROPERTY);
        return this;
    };
    ODataQuery.prototype.ref = function () {
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNullOrUndefined(this.getSegment(ODataQuery.REF), ODataQuery.REF);
        if (this.lastSegment !== ODataQuery.NAVIGATION_PROPERTY) {
            throw new Error('ref can only be appended to navigationProperty');
        }
        this.queryString = __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].appendSegment(this.queryString, ODataQuery.$REF);
        this.addSegment(ODataQuery.REF);
        return this;
    };
    ODataQuery.prototype.value = function () {
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNullOrUndefined(this.getSegment(ODataQuery.VALUE), ODataQuery.VALUE);
        if (this.lastSegment !== ODataQuery.PROPERTY) {
            throw new Error('value can only be appended to property');
        }
        this.queryString = __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].appendSegment(this.queryString, ODataQuery.$VALUE);
        this.addSegment(ODataQuery.VALUE);
        return this;
    };
    ODataQuery.prototype.count = function (count) {
        if (__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNullOrUndefined(count)) {
            __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNullOrUndefined(this.getSegment(ODataQuery.COUNT), ODataQuery.COUNT);
            if (this.lastSegment !== ODataQuery.ENTITY_SET && this.lastSegment !== ODataQuery.NAVIGATION_PROPERTY) {
                throw new Error('count can only be appended to entitySet or navigationProperty');
            }
            this.queryString = __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].appendSegment(this.queryString, ODataQuery.$COUNT);
            this.addSegment(ODataQuery.COUNT);
        }
        else {
            this.queryOptions.count(count);
        }
        return this;
    };
    ODataQuery.prototype.functionCall = function (functionCall) {
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(functionCall, 'functionCall');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotEmpty(functionCall, 'functionCall');
        this.queryString = __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].appendSegment(this.queryString, functionCall);
        this.addSegment(ODataQuery.FUNCTION_CALL);
        return this;
    };
    ODataQuery.prototype.actionCall = function (actionCall) {
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(actionCall, 'actionCall');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotEmpty(actionCall, 'actionCall');
        this.queryString = __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].appendSegment(this.queryString, actionCall);
        this.addSegment(ODataQuery.ACTION_CALL);
        return this;
    };
    ODataQuery.prototype.batch = function (requestOptionsArgs) {
        return new __WEBPACK_IMPORTED_MODULE_2__odata_query_batch__["a" /* ODataQueryBatch */](this.odataService, this.serviceRoot);
    };
    // QUERY OPTIONS
    ODataQuery.prototype.select = function (select) {
        this.queryOptions.select(select);
        return this;
    };
    ODataQuery.prototype.filter = function (filter) {
        this.queryOptions.filter(filter);
        return this;
    };
    ODataQuery.prototype.expand = function (expand) {
        this.queryOptions.expand(expand);
        return this;
    };
    ODataQuery.prototype.orderby = function (orderby) {
        this.queryOptions.orderby(orderby);
        return this;
    };
    ODataQuery.prototype.skip = function (skip) {
        this.queryOptions.skip(skip);
        return this;
    };
    ODataQuery.prototype.top = function (top) {
        this.queryOptions.top(top);
        return this;
    };
    ODataQuery.prototype.search = function (search) {
        this.queryOptions.search(search);
        return this;
    };
    // QUERY EXECUTION
    ODataQuery.prototype.get = function (requestOptionsArgs) {
        return this.odataService.get(this, requestOptionsArgs);
    };
    ODataQuery.prototype.post = function (body, requestOptionsArgs) {
        return this.odataService.post(this, body, requestOptionsArgs);
    };
    ODataQuery.prototype.put = function (body, requestOptionsArgs) {
        return this.odataService.put(this, body, requestOptionsArgs);
    };
    ODataQuery.prototype.patch = function (body, requestOptionsArgs) {
        return this.odataService.patch(this, body, requestOptionsArgs);
    };
    ODataQuery.prototype.delete = function (body, requestOptionsArgs) {
        return this.odataService.delete(this, requestOptionsArgs);
    };
    ODataQuery.prototype.toString = function () {
        if (__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNotNullNorUndefined(this.queryOptions) && !this.queryOptions.isEmpty()) {
            this.queryString += '?' + this.queryOptions.toString();
        }
        console.log(this.queryString);
        return this.queryString;
    };
    ODataQuery.prototype.getSegment = function (segment) {
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNull(segment, 'segment');
        var res = this.segments.find(function (value, index, segments) {
            return value === segment;
        });
        return res;
    };
    ODataQuery.prototype.addSegment = function (segment) {
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNull(segment, 'segment');
        this.segments.push(segment);
        if (__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNotNullNorUndefined(this.segments) && this.segments.length) {
            this.lastSegment = this.segments[this.segments.length - 1];
        }
    };
    return ODataQuery;
}(__WEBPACK_IMPORTED_MODULE_3__odata_query_abstract__["a" /* ODataQueryAbstract */]));

// SEGMENT NAMES
ODataQuery.ENTITY_SET = 'entitySet';
ODataQuery.ENTITY_KEY = 'entityKey';
ODataQuery.PROPERTY = 'property';
ODataQuery.NAVIGATION_PROPERTY = 'navigationProperty';
ODataQuery.REF = 'ref';
ODataQuery.VALUE = 'value';
ODataQuery.COUNT = 'count';
ODataQuery.FUNCTION_CALL = 'functionCall';
ODataQuery.ACTION_CALL = 'actionCall';
// CONSTANT SEGMENTS
ODataQuery.$REF = '$ref';
ODataQuery.$VALUE = '$value';
ODataQuery.$COUNT = '$count';
//# sourceMappingURL=odata-query.js.map

/***/ }),

/***/ "../../../../../src/app/odata/odata-query/quoted-string.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotedString; });
var QuotedString = (function () {
    function QuotedString(value) {
        this.value = value;
    }
    QuotedString.prototype.toString = function () {
        return this.value;
    };
    return QuotedString;
}());

//# sourceMappingURL=quoted-string.js.map

/***/ }),

/***/ "../../../../../src/app/odata/odata-response/entity-collection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__("../../../../../src/app/odata/utils/utils.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntitySet; });

var EntitySet = (function () {
    function EntitySet(entities, count) {
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(entities, 'entities');
        this.entities = entities;
        this.count = count;
    }
    EntitySet.prototype.getEntities = function () {
        return this.entities;
    };
    EntitySet.prototype.getCount = function () {
        return this.count;
    };
    return EntitySet;
}());

//# sourceMappingURL=entity-collection.js.map

/***/ }),

/***/ "../../../../../src/app/odata/odata-response/odata-response.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__("../../../../../src/app/odata/utils/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_collection__ = __webpack_require__("../../../../../src/app/odata/odata-response/entity-collection.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ODataResponse; });


var ODataResponse = (function () {
    function ODataResponse(response) {
        this.response = response;
    }
    ODataResponse.prototype.isOk = function () {
        return this.response.ok;
    };
    ODataResponse.prototype.getBodyAsJson = function () {
        return this.response.json();
    };
    ODataResponse.prototype.toEntitySet = function () {
        var json = this.getBodyAsJson();
        if (__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNotNullNorUndefined(json) && json.hasOwnProperty(ODataResponse.VALUE)) {
            var count = null;
            if (json.hasOwnProperty(ODataResponse.ODATA_COUNT)) {
                count = json[ODataResponse.ODATA_COUNT];
            }
            return new __WEBPACK_IMPORTED_MODULE_1__entity_collection__["a" /* EntitySet */](json[ODataResponse.VALUE], count);
        }
        return null;
    };
    ODataResponse.prototype.toEntity = function () {
        return this.toObject();
    };
    ODataResponse.prototype.toPropertyValue = function () {
        var json = this.getBodyAsJson();
        if (__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNotNullNorUndefined(json)) {
            if (json.hasOwnProperty(ODataResponse.VALUE)) {
                return json[ODataResponse.VALUE];
            }
            return null;
        }
        else {
            return JSON.parse(this.response.text());
        }
    };
    ODataResponse.prototype.toComplexValue = function () {
        return this.toObject();
    };
    ODataResponse.prototype.toCount = function () {
        return Number(this.response.text);
    };
    ODataResponse.prototype.toString = function () {
        var res = this.response.status + " " + this.response.statusText + "\n";
        var headers = this.response.headers;
        for (var _i = 0, _a = headers.keys(); _i < _a.length; _i++) {
            var key = _a[_i];
            res += key + ': ';
            var valueString = '';
            for (var _b = 0, _c = headers.getAll(key); _b < _c.length; _b++) {
                var value = _c[_b];
                if (valueString.length) {
                    valueString += ' ';
                }
                valueString += value;
            }
            res += valueString + '\n';
        }
        var json = this.getBodyAsJson();
        if (__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNotNullNorUndefined(json)) {
            res += JSON.stringify(json, null, 4);
        }
        return res;
    };
    ODataResponse.prototype.toObject = function () {
        var json = this.getBodyAsJson();
        if (__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNotNullNorUndefined(json)) {
            return json;
        }
        return null;
    };
    return ODataResponse;
}());

ODataResponse.VALUE = 'value';
ODataResponse.ODATA_COUNT = '@odata.count';
//# sourceMappingURL=odata-response.js.map

/***/ }),

/***/ "../../../../../src/app/odata/odata-service/odata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__("../../../../../src/app/odata/utils/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__odata_response_odata_response__ = __webpack_require__("../../../../../src/app/odata/odata-response/odata-response.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ODataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ODataService = ODataService_1 = (function () {
    function ODataService(http) {
        this.http = http;
    }
    ODataService.prototype.get = function (odataQuery, requestOptionsArgs) {
        var url = odataQuery.toString();
        var args = this.mergeOverride(ODataService_1.REQUEST_OPTIONS_ARGS, requestOptionsArgs);
        return this.http.get(url, args)
            .map(function (response) { return new __WEBPACK_IMPORTED_MODULE_7__odata_response_odata_response__["a" /* ODataResponse */](response); })
            .catch(this.handleError);
    };
    ODataService.prototype.post = function (odataQuery, body, requestOptionsArgs) {
        var url = odataQuery.toString();
        var args = this.mergeOverride(ODataService_1.REQUEST_OPTIONS_ARGS, requestOptionsArgs);
        return this.http.post(url, body, args)
            .map(function (response) { return new __WEBPACK_IMPORTED_MODULE_7__odata_response_odata_response__["a" /* ODataResponse */](response); })
            .catch(this.handleError);
    };
    ODataService.prototype.put = function (odataQuery, body, requestOptionsArgs) {
        var url = odataQuery.toString();
        var args = this.mergeOverride(ODataService_1.REQUEST_OPTIONS_ARGS, requestOptionsArgs);
        return this.http.put(url, body, args)
            .map(function (response) { return new __WEBPACK_IMPORTED_MODULE_7__odata_response_odata_response__["a" /* ODataResponse */](response); })
            .catch(this.handleError);
    };
    ODataService.prototype.patch = function (odataQuery, body, requestOptionsArgs) {
        var url = odataQuery.toString();
        var args = this.mergeOverride(ODataService_1.REQUEST_OPTIONS_ARGS, requestOptionsArgs);
        return this.http.patch(url, body, args)
            .map(function (response) { return new __WEBPACK_IMPORTED_MODULE_7__odata_response_odata_response__["a" /* ODataResponse */](response); })
            .catch(this.handleError);
    };
    ODataService.prototype.delete = function (odataQuery, requestOptionsArgs) {
        var url = odataQuery.toString();
        var args = this.mergeOverride(ODataService_1.REQUEST_OPTIONS_ARGS, requestOptionsArgs);
        return this.http.delete(url, args)
            .map(function (response) { return new __WEBPACK_IMPORTED_MODULE_7__odata_response_odata_response__["a" /* ODataResponse */](response); })
            .catch(this.handleError);
    };
    ODataService.prototype.mergeOverride = function (args1, args2) {
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(args1, 'args1');
        var args = args1;
        if (__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNotNullNorUndefined(args2)) {
            // merge/override headers
            var headers = args.headers;
            var headers2 = args2.headers;
            for (var _i = 0, _a = headers2.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                headers.set(key, headers2.get(key));
            }
            // override withCredentials
            args.withCredentials = args2.withCredentials;
            // override responseType
            args.responseType = args2.responseType;
        }
        return args;
    };
    ODataService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body, null, 4);
            errMsg = error.status + " - " + (error.statusText || '') + " - " + JSON.stringify(err, null, 4);
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return ODataService;
}());
ODataService.REQUEST_OPTIONS_ARGS = {
    headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' }),
    withCredentials: false,
    responseType: __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* ResponseContentType */].Json
};
ODataService = ODataService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */]) === "function" && _a || Object])
], ODataService);

var ODataService_1, _a;
//# sourceMappingURL=odata.service.js.map

/***/ }),

/***/ "../../../../../src/app/odata/query-options/query-options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__("../../../../../src/app/odata/utils/utils.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryOptions; });

var QueryOptions = (function () {
    function QueryOptions() {
    }
    QueryOptions.prototype.select = function (select) {
        this.checkFieldAlreadySet(this._select, 'select');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(select, 'select');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotEmpty(select, 'select');
        this._select = select;
        return this;
    };
    QueryOptions.prototype.filter = function (filter) {
        this.checkFieldAlreadySet(this._filter, 'filter');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(filter, 'filter');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotEmpty(filter, 'filter');
        this._filter = filter;
        return this;
    };
    QueryOptions.prototype.expand = function (expand) {
        this.checkFieldAlreadySet(this._expand, 'expand');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(expand, 'expand');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotEmpty(expand, 'expand');
        this._expand = expand;
        return this;
    };
    QueryOptions.prototype.orderby = function (orderby) {
        this.checkFieldAlreadySet(this._orderby, 'orderby');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(orderby, 'orderby');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotEmpty(orderby, 'orderby');
        this._orderby = orderby;
        return this;
    };
    QueryOptions.prototype.skip = function (skip) {
        this.checkFieldAlreadySet(this._skip, 'skip');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(skip, 'skip');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNegative(skip, 'skip');
        this._skip = skip;
        return this;
    };
    QueryOptions.prototype.top = function (top) {
        this.checkFieldAlreadySet(this._top, 'top');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(top, 'top');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNegative(top, 'top');
        this._top = top;
        return this;
    };
    QueryOptions.prototype.count = function (count) {
        this.checkFieldAlreadySet(this._count, 'count');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(count, 'count');
        this._count = count;
        return this;
    };
    QueryOptions.prototype.search = function (search) {
        this.checkFieldAlreadySet(this._search, 'search');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotUndefined(search, 'search');
        this._search = search;
        return this;
    };
    QueryOptions.prototype.toString = function () {
        // query options
        var queryOptions = '';
        // add select
        if (!__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNullOrUndefined(this._select)) {
            queryOptions += '$select=' + this._select;
        }
        // add filter
        if (!__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNullOrUndefined(this._filter)) {
            if (queryOptions.length) {
                queryOptions += '&';
            }
            queryOptions += '$filter=' + this._filter;
        }
        // add expand
        if (!__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNullOrUndefined(this._expand)) {
            if (queryOptions.length) {
                queryOptions += '&';
            }
            queryOptions += '$expand=' + this._expand;
        }
        // add orderby
        if (!__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNullOrUndefined(this._orderby)) {
            if (queryOptions.length) {
                queryOptions += '&';
            }
            queryOptions += '$orderby=' + this._orderby;
        }
        // add skip
        if (!__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNullOrUndefined(this._skip)) {
            if (queryOptions.length) {
                queryOptions += '&';
            }
            queryOptions += '$skip=' + this._skip;
        }
        // add top
        if (!__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNullOrUndefined(this._top)) {
            if (queryOptions.length) {
                queryOptions += '&';
            }
            queryOptions += '$top=' + this._top;
        }
        // add count
        if (!__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNullOrUndefined(this._count)) {
            if (queryOptions.length) {
                queryOptions += '&';
            }
            queryOptions += '$count=' + this._count;
        }
        // add search
        if (!__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNullOrUndefined(this._search)) {
            if (queryOptions.length) {
                queryOptions += '&';
            }
            queryOptions += '$search=' + this._search;
        }
        return encodeURIComponent(queryOptions);
    };
    QueryOptions.prototype.isEmpty = function () {
        for (var key in this) {
            if (this.hasOwnProperty(key) && __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNotNullNorUndefined(this[key])) {
                return false;
            }
        }
        return true;
    };
    QueryOptions.prototype.checkFieldAlreadySet = function (fieldValue, fieldName) {
        try {
            __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNullOrUndefined(fieldValue, fieldName);
        }
        catch (error) {
            throw new Error(fieldName + ' is already set');
        }
    };
    return QueryOptions;
}());

//# sourceMappingURL=query-options.js.map

/***/ }),

/***/ "../../../../../src/app/odata/utils/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__odata_query_quoted_string__ = __webpack_require__("../../../../../src/app/odata/odata-query/quoted-string.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });

var Utils = (function () {
    function Utils() {
    }
    Utils.isNull = function (value) {
        return value === null;
    };
    Utils.isUndefined = function (value) {
        return value === undefined;
    };
    Utils.isNullOrUndefined = function (value) {
        return Utils.isNull(value) || Utils.isUndefined(value);
    };
    Utils.isNotNullNorUndefined = function (value) {
        return !Utils.isNull(value) && !Utils.isUndefined(value);
    };
    Utils.requireNull = function (fieldValue, fieldName) {
        if (fieldValue !== null) {
            throw new Error(fieldName + ' is not null');
        }
    };
    Utils.requireUndefined = function (fieldValue, fieldName) {
        if (fieldValue !== undefined) {
            throw new Error(fieldName + ' is not undefined');
        }
    };
    Utils.requireNotNull = function (fieldValue, fieldName) {
        if (fieldValue === null) {
            throw new Error(fieldName + ' is null');
        }
    };
    Utils.requireNotUndefined = function (fieldValue, fieldName) {
        if (fieldValue === undefined) {
            throw new Error(fieldName + ' is undefined');
        }
    };
    Utils.requireNotNullNorUndefined = function (fieldValue, fieldName) {
        Utils.requireNotNull(fieldValue, fieldName);
        Utils.requireNotUndefined(fieldValue, fieldName);
    };
    Utils.requireNullOrUndefined = function (fieldValue, fieldName) {
        if (!Utils.isNull(fieldValue) && !Utils.isUndefined(fieldValue)) {
            throw new Error(fieldName + ' is not null nor undefined');
        }
    };
    Utils.requireNotEmpty = function (fieldValue, fieldName) {
        if (Utils.isNullOrUndefined(fieldValue)
            || typeof (fieldValue) === 'string' && !fieldValue.length
            || typeof (fieldValue.isEmpty) === 'function' && fieldValue.isEmpty()) {
            throw new Error(fieldName + ' is empty');
        }
    };
    Utils.requireNotNegative = function (fieldValue, fieldName) {
        if (fieldValue < 0) {
            throw new Error(fieldName + ' is negative');
        }
    };
    Utils.appendSegment = function (path, segment) {
        Utils.requireNotNullNorUndefined(path, 'path');
        Utils.requireNotNullNorUndefined(segment, 'segment');
        if (!path.endsWith('/')) {
            path += '/';
        }
        return path + segment;
    };
    Utils.removeEndingSeparator = function (value) {
        Utils.requireNotNullNorUndefined(value, 'value');
        if (value.endsWith('/')) {
            if (value.length === 1) {
                return '';
            }
            return value.substring(0, value.length - 1);
        }
        return value;
    };
    Utils.getValueURI = function (value, encodeURI) {
        Utils.requireNotNullNorUndefined(value, 'value');
        Utils.requireNotNullNorUndefined(encodeURI, 'encodeURI');
        var res = value;
        if (typeof (res) === 'string') {
            // encode uri component
            if (Utils.isNotNullNorUndefined(encodeURI) && encodeURI) {
                res = encodeURIComponent(res);
            }
        }
        else if (res instanceof __WEBPACK_IMPORTED_MODULE_0__odata_query_quoted_string__["a" /* QuotedString */]) {
            // escape single quote
            res = res.toString().replace(/'/g, '\'\'');
            // encode uri component
            if (Utils.isNotNullNorUndefined(encodeURI) && encodeURI) {
                res = encodeURIComponent(res);
            }
            // add start/ending quotes
            res = '\'' + res + '\'';
        }
        // boolean, number
        return res;
    };
    return Utils;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map