(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n</div>\n\n<h2>Usage Examples</h2>\n<p> In \"app.module.ts\" import ODataModule and then inject the ODataService where you want to use this library.</p>\n<p>\n  All examples in this page are based on the publicly available OData V4 sample service TripPin (SERVICE_ROOT):\n  <a href=\"https://services.odata.org/V4/TripPinServiceRW\">{{serviceRoot}}.</a>\n  <br/> Metadata of this service is here:\n  <a href=\"https://services.odata.org/V4/TripPinServiceRW/$metadata\">{{serviceRoot}}/$metadata.</a>\n</p>\n<p>\n  <b>\n    <i>\n      Attention to make these examples working you need to visit the TripPin service page and accept the certificate which is surprisingly\n      not valid.\n      <br/> The lack of validity is due to the certificate host name not matching the actual host name of the service.\n      <br/> Anyway the TripPin service has been created by Microsoft so it should be safe accepting the certificate.\n    </i>\n  </b>\n</p>\n<p>To run the example queries and get the response, click on the \"Execute query\" button. Service response could be slow depending\n  on workload.</p>\n<p>Any feedback is highly appreciated and please report issues! Thanks so much!</p>\n\n<p-tabView>\n  <p-tabPanel header=\"Basic Read\">\n    <ov4-basic-read></ov4-basic-read>\n  </p-tabPanel>\n  <p-tabPanel header=\"Basic Write\">\n    <ov4-basic-write></ov4-basic-write>\n  </p-tabPanel>\n  <p-tabPanel header=\"Advanced Read\">\n    <ov4-adv-read></ov4-adv-read>\n  </p-tabPanel>\n  <p-tabPanel header=\"Advanced Write\">\n    <ov4-adv-write></ov4-adv-write>\n  </p-tabPanel>\n  <p-tabPanel header=\"Service Document and Metadata\">\n    <ov4-metadata></ov4-metadata>\n  </p-tabPanel>\n  <p-tabPanel header=\"Batch\">\n    <ov4-batch></ov4-batch>\n  </p-tabPanel>\n</p-tabView>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _docs_example_example_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs/example/example-data */ "./src/app/docs/example/example-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'odata-v4-ng';
        this.serviceRoot = _docs_example_example_data__WEBPACK_IMPORTED_MODULE_1__["SERVICE_ROOT"];
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ov4-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _docs_adv_read_adv_read_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./docs/adv-read/adv-read.component */ "./src/app/docs/adv-read/adv-read.component.ts");
/* harmony import */ var _docs_adv_write_adv_write_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./docs/adv-write/adv-write.component */ "./src/app/docs/adv-write/adv-write.component.ts");
/* harmony import */ var _docs_basic_read_basic_read_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./docs/basic-read/basic-read.component */ "./src/app/docs/basic-read/basic-read.component.ts");
/* harmony import */ var _docs_basic_write_basic_write_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./docs/basic-write/basic-write.component */ "./src/app/docs/basic-write/basic-write.component.ts");
/* harmony import */ var _docs_batch_batch_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./docs/batch/batch.component */ "./src/app/docs/batch/batch.component.ts");
/* harmony import */ var _docs_example_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./docs/example/example.component */ "./src/app/docs/example/example.component.ts");
/* harmony import */ var _docs_metadata_metadata_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./docs/metadata/metadata.component */ "./src/app/docs/metadata/metadata.component.ts");
/* harmony import */ var _odata_odata_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./odata/odata.module */ "./src/app/odata/odata.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _docs_example_example_component__WEBPACK_IMPORTED_MODULE_11__["ExampleComponent"],
                _docs_basic_read_basic_read_component__WEBPACK_IMPORTED_MODULE_8__["BasicReadComponent"],
                _docs_basic_write_basic_write_component__WEBPACK_IMPORTED_MODULE_9__["BasicWriteComponent"],
                _docs_adv_read_adv_read_component__WEBPACK_IMPORTED_MODULE_6__["AdvReadComponent"],
                _docs_adv_write_adv_write_component__WEBPACK_IMPORTED_MODULE_7__["AdvWriteComponent"],
                _docs_metadata_metadata_component__WEBPACK_IMPORTED_MODULE_12__["MetadataComponent"],
                _docs_batch_batch_component__WEBPACK_IMPORTED_MODULE_10__["BatchComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _odata_odata_module__WEBPACK_IMPORTED_MODULE_13__["ODataModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["TabViewModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["InputTextModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/docs/adv-read/adv-read.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/docs/adv-read/adv-read.component.ts ***!
  \*****************************************************/
/*! exports provided: AdvReadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvReadComponent", function() { return AdvReadComponent; });
/* harmony import */ var _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../odata/odata-query/odata-query */ "./src/app/odata/odata-query/odata-query.ts");
/* harmony import */ var _odata_odata_service_odata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../odata/odata-service/odata.service */ "./src/app/odata/odata-service/odata.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _basic_read_basic_read_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../basic-read/basic-read.component */ "./src/app/docs/basic-read/basic-read.component.ts");
/* harmony import */ var _example_example_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../example/example-data */ "./src/app/docs/example/example-data.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdvReadComponent = /** @class */ (function (_super) {
    __extends(AdvReadComponent, _super);
    function AdvReadComponent(odataService) {
        var _this = _super.call(this, odataService) || this;
        _this.odataService = odataService;
        return _this;
    }
    AdvReadComponent.prototype.ngOnInit = function () {
        this.examples = [];
        // SINGLETON
        var example = new _example_example_data__WEBPACK_IMPORTED_MODULE_4__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get singleton';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_4__["SERVICE_ROOT"] + '/Me';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_4__["SERVICE_ROOT"])
            .singleton('Me');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .singleton('Me');\n" + _basic_read_basic_read_component__WEBPACK_IMPORTED_MODULE_3__["EXECUTE_GET"];
        example.func = this.executeGet;
        // SINGLETON PROPERTY
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_4__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get singleton property';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_4__["SERVICE_ROOT"] + '/Me/AddressInfo';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_4__["SERVICE_ROOT"])
            .singleton('Me')
            .property('AddressInfo');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .singleton('Me')\n    .property('AddressInfo');\n" + _basic_read_basic_read_component__WEBPACK_IMPORTED_MODULE_3__["EXECUTE_GET"];
        example.func = this.executeGet;
        // DERIVED ENTITYSET
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_4__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get derived entity set';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_4__["SERVICE_ROOT"] + '/People(\'russellwhyte\')/Trips(1003)/PlanItems/Microsoft.OData.SampleService.Models.TripPin.Flight';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_4__["SERVICE_ROOT"])
            .entitySet('People')
            .entityKey('\'russellwhyte\'')
            .navigationProperty('Trips')
            .entityKey(1003)
            .navigationProperty('PlanItems')
            .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .entityKey('\\'russellwhyte\\'')\n    .navigationProperty('Trips')\n    .entityKey(1003)\n    .navigationProperty('PlanItems')\n    .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight');\n" + _basic_read_basic_read_component__WEBPACK_IMPORTED_MODULE_3__["EXECUTE_GET"];
        example.func = this.executeGet;
        // DERIVED ENTITY
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_4__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get derived entity';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_4__["SERVICE_ROOT"] + '/People(\'russellwhyte\')/Trips(1003)/PlanItems(21)/Microsoft.OData.SampleService.Models.TripPin.Flight';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_4__["SERVICE_ROOT"])
            .entitySet('People')
            .entityKey('\'russellwhyte\'')
            .navigationProperty('Trips')
            .entityKey(1003)
            .navigationProperty('PlanItems')
            .entityKey(21)
            .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .entityKey('\\'russellwhyte\\'')\n    .navigationProperty('Trips')\n    .entityKey(1003)\n    .navigationProperty('PlanItems')\n    .entityKey(21)\n    .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight');\n" + _basic_read_basic_read_component__WEBPACK_IMPORTED_MODULE_3__["EXECUTE_GET"];
        example.func = this.executeGet;
        // FILTER DERIVED ENTITIES
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_4__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get derived entities filtered';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_4__["SERVICE_ROOT"] + '/People(\'russellwhyte\')/Trips(1003)/PlanItems/Microsoft.OData.SampleService.Models.TripPin.Flight?$filter=FlightNumber eq \'FM1930\'';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_4__["SERVICE_ROOT"])
            .entitySet('People')
            .entityKey('\'russellwhyte\'')
            .navigationProperty('Trips')
            .entityKey(1003)
            .navigationProperty('PlanItems')
            .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight')
            .filter('FlightNumber eq \'FM1930\'');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .entityKey('\\'russellwhyte\\'')\n    .navigationProperty('Trips')\n    .entityKey(1003)\n    .navigationProperty('PlanItems')\n    .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight')\n    .filter('FlightNumber eq \\'FM1930\\'');\n" + _basic_read_basic_read_component__WEBPACK_IMPORTED_MODULE_3__["EXECUTE_GET"];
        example.func = this.executeGet;
    };
    AdvReadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ov4-adv-read',
            template: __webpack_require__(/*! ../example/example.component.html */ "./src/app/docs/example/example.component.html")
        }),
        __metadata("design:paramtypes", [_odata_odata_service_odata_service__WEBPACK_IMPORTED_MODULE_1__["ODataService"]])
    ], AdvReadComponent);
    return AdvReadComponent;
}(_basic_read_basic_read_component__WEBPACK_IMPORTED_MODULE_3__["BasicReadComponent"]));



/***/ }),

/***/ "./src/app/docs/adv-write/adv-write.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/docs/adv-write/adv-write.component.ts ***!
  \*******************************************************/
/*! exports provided: AdvWriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvWriteComponent", function() { return AdvWriteComponent; });
/* harmony import */ var _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../odata/odata-query/odata-query */ "./src/app/odata/odata-query/odata-query.ts");
/* harmony import */ var _example_example_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../example/example-data */ "./src/app/docs/example/example-data.ts");
/* harmony import */ var _odata_odata_service_odata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../odata/odata-service/odata.service */ "./src/app/odata/odata-service/odata.service.ts");
/* harmony import */ var _basic_write_basic_write_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../basic-write/basic-write.component */ "./src/app/docs/basic-write/basic-write.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EXECUTE_BATCH = "example.subscr = example.odataQuery.execute().subscribe(\n  (odataResponse: ODataResponse) => {\n    example.response = odataResponse.toString();\n  },\n  (error: string) => {\n    example.response = error;\n  }\n);";
var AdvWriteComponent = /** @class */ (function (_super) {
    __extends(AdvWriteComponent, _super);
    function AdvWriteComponent(odataService) {
        var _this = _super.call(this, odataService) || this;
        _this.odataService = odataService;
        _this.executeEnabled = false;
        return _this;
    }
    AdvWriteComponent.prototype.ngOnInit = function () {
        this.examples = [];
        // BATCH
        var example = new _example_example_data__WEBPACK_IMPORTED_MODULE_1__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Batch';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_1__["SERVICE_ROOT"] + '/$batch';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_1__["SERVICE_ROOT"])
            .batch()
            .get(new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_1__["SERVICE_ROOT"]).entitySet('Airlines'))
            .post(new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_1__["SERVICE_ROOT"]).entitySet('Airlines'), {
            '@odata.type': 'Microsoft.OData.SampleService.Models.TripPin.Airline',
            'AirlineCode': 'EK',
            'Name': 'Emirates Airline'
        })
            .get(new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_1__["SERVICE_ROOT"]).entitySet('Airlines'));
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .batch()\n    .get(new ODataQuery(this.odataService, SERVICE_ROOT).entitySet('Airlines'))\n    .post(new ODataQuery(this.odataService, SERVICE_ROOT).entitySet('Airlines'), {\n      '@odata.type': 'Microsoft.OData.SampleService.Models.TripPin.Airline',\n      'AirlineCode': 'EK',\n      'Name': 'Emirates Airline'\n    })\n    .get(new ODataQuery(this.odataService, SERVICE_ROOT).entitySet('Airlines'));\n" + EXECUTE_BATCH;
        example.func = this.executeBatch;
    };
    AdvWriteComponent.prototype.executeBatch = function (example, odataService) {
        example.subscr = example.odataQuery.execute().subscribe(function (odataResponse) {
            example.response = odataResponse.toString();
        }, function (error) {
            example.response = error;
        });
    };
    AdvWriteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'ov4-adv-write',
            template: __webpack_require__(/*! ../example/example.component.html */ "./src/app/docs/example/example.component.html")
        }),
        __metadata("design:paramtypes", [_odata_odata_service_odata_service__WEBPACK_IMPORTED_MODULE_2__["ODataService"]])
    ], AdvWriteComponent);
    return AdvWriteComponent;
}(_basic_write_basic_write_component__WEBPACK_IMPORTED_MODULE_3__["BasicWriteComponent"]));



/***/ }),

/***/ "./src/app/docs/basic-read/basic-read.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/docs/basic-read/basic-read.component.ts ***!
  \*********************************************************/
/*! exports provided: EXECUTE_GET, BasicReadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXECUTE_GET", function() { return EXECUTE_GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicReadComponent", function() { return BasicReadComponent; });
/* harmony import */ var _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../odata/odata-query/odata-query */ "./src/app/odata/odata-query/odata-query.ts");
/* harmony import */ var _odata_odata_service_odata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../odata/odata-service/odata.service */ "./src/app/odata/odata-service/odata.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _example_example_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../example/example-data */ "./src/app/docs/example/example-data.ts");
/* harmony import */ var _example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../example/example.component */ "./src/app/docs/example/example.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EXECUTE_GET = "example.odataQuery.get().subscribe(\n  (odataResponse: ODataResponse) => {\n    example.response = odataResponse.toString();\n  },\n  (error: string) => {\n    example.response = error;\n  }\n);";
var BasicReadComponent = /** @class */ (function (_super) {
    __extends(BasicReadComponent, _super);
    function BasicReadComponent(odataService) {
        var _this = _super.call(this, odataService) || this;
        _this.odataService = odataService;
        return _this;
    }
    BasicReadComponent.prototype.ngOnInit = function () {
        this.examples = [];
        // ENTITY SET
        var example = new _example_example_data__WEBPACK_IMPORTED_MODULE_3__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get entity set';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"] + '/People';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"])
            .entitySet('People');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // ENTITY
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_3__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get entity';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"] + '/People(\'russellwhyte\')';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"])
            .entitySet('People')
            .entityKey('\'russellwhyte\'');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .entityKey('\\'russellwhyte\\'');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // PROPERTY
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_3__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get property';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"] + '/Airports(\'KSFO\')/Name';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"])
            .entitySet('Airports')
            .entityKey('\'KSFO\'')
            .property('Name');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('Airports')\n    .entityKey('\\'KSFO\\'')\n    .property('Name');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // COMPLEX TYPE PROPERTY
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_3__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get complex type property';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"] + '/Airports(\'KSFO\')/Location/Address';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"])
            .entitySet('Airports')
            .entityKey('\'KSFO\'')
            .property('Location/Address');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('Airports')\n    .entityKey('\\'KSFO\\'')\n    .property('Location/Address');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // PROPERTY RAW VALUE
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_3__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get property raw value';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"] + '/Airports(\'KSFO\')/Name/$value';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"])
            .entitySet('Airports')
            .entityKey('\'KSFO\'')
            .property('Name')
            .value();
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('Airports')\n    .entityKey('\\'KSFO\\'')\n    .property('Name')\n    .value();\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // FILTER ENTITIES
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_3__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get filtered entities';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"] + '/People?$filter=FirstName eq \'Scott\'';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"])
            .entitySet('People')
            .filter('FirstName eq \'Scott\'');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .filter('FirstName eq \\'Scott\\'');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // FILTER COMPLEX TYPES
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_3__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get filtered complex types';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"] + '/Airports?$filter=contains(Location/Address, \'San Francisco\')';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"])
            .entitySet('Airports')
            .filter('contains(Location/Address, \'San Francisco\')');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('Airports')\n    .filter('contains(Location/Address, \\'San Francisco\\')');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // FILTER ENUM PROPERTIES
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_3__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get filtered enum properties';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"] + '/People?$filter=Gender eq Microsoft.OData.SampleService.Models.TripPin.PersonGender\'Female\'';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"])
            .entitySet('People')
            .filter('Gender eq Microsoft.OData.SampleService.Models.TripPin.PersonGender\'Female\'');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .filter('Gender eq Microsoft.OData.SampleService.Models.TripPin.PersonGender\\'Female\\'');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // EXPAND
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_3__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get expanded entities';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"] + '/People?$expand=Trips';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"])
            .entitySet('People')
            .expand('Trips');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .expand('Trips');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // FILTERED EXPAND
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_3__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get expanded entities with nested filter';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"] + '/People?$expand=Trips($filter=Name eq \'Trip in US\')';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"])
            .entitySet('People')
            .expand('Trips($filter=Name eq \'Trip in US\')');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .expand('Trips($filter=Name eq \\'Trip in US\\')');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // ORDERBY
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_3__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get ordered entities';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"] + '/People(\'scottketchum\')/Trips?$orderby=EndsAt desc';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"])
            .entitySet('People')
            .entityKey('\'scottketchum\'')
            .navigationProperty('Trips')
            .orderby('EndsAt desc');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .entityKey('\\'scottketchum\\'')\n    .navigationProperty('Trips')\n    .orderby('EndsAt desc');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // TOP
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_3__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get entities using top';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"] + '/People?$top=2';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"])
            .entitySet('People')
            .top(2);
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .top(2);\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // SKIP
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_3__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get entities using skip';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"] + '/People?$skip=18';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"])
            .entitySet('People')
            .skip(18);
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .skip(18);\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // COUNT
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_3__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get entities count';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"] + '/People?$count';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"])
            .entitySet('People')
            .countSegment();
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .countSegment();\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // PROJECTED ENTITIES
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_3__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get projected entities';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"] + '/Airports?$select=Name, IcaoCode';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"])
            .entitySet('Airports')
            .select('Name, IcaoCode');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('Airports')\n    .select('Name, IcaoCode');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // SEARCH
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_3__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get entities matching search';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"] + '/People?$search=Boise';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"])
            .entitySet('People')
            .search('Boise');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .search('Boise');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // UNBOUND FUNCTION
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_3__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Unbound function';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"] + '/GetNearestAirport(lat = 33, lon = -118)';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"])
            .functionCall('GetNearestAirport(lat = 33, lon = -118)');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .functionCall('GetNearestAirport(lat = 33, lon = -118)');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // BOUND FUNCTION
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_3__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Bound function';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"] + '/People(\'russellwhyte\')/Microsoft.OData.SampleService.Models.TripPin.GetFavoriteAirline()';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_3__["SERVICE_ROOT"])
            .entitySet('People')
            .entityKey('\'russellwhyte\'')
            .functionCall('Microsoft.OData.SampleService.Models.TripPin.GetFavoriteAirline()');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .entityKey('\\'russellwhyte\\'')\n    .functionCall('Microsoft.OData.SampleService.Models.TripPin.GetFavoriteAirline()');\n" + EXECUTE_GET;
        example.func = this.executeGet;
    };
    BasicReadComponent.prototype.execute = function (example) {
        if (example.func) {
            example.func(example, this.odataService);
        }
    };
    BasicReadComponent.prototype.executeGet = function (example, odataService) {
        example.subscr = example.odataQuery.get().subscribe(function (odataResponse) {
            example.response = odataResponse.toString();
        }, function (error) {
            example.response = error;
        });
    };
    BasicReadComponent.prototype.executeAllGet = function () {
        if (this.examples) {
            for (var _i = 0, _a = this.examples; _i < _a.length; _i++) {
                var example = _a[_i];
                this.executeGet(example, this.odataService);
            }
        }
    };
    BasicReadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ov4-basic-read',
            template: __webpack_require__(/*! ../example/example.component.html */ "./src/app/docs/example/example.component.html")
        }),
        __metadata("design:paramtypes", [_odata_odata_service_odata_service__WEBPACK_IMPORTED_MODULE_1__["ODataService"]])
    ], BasicReadComponent);
    return BasicReadComponent;
}(_example_example_component__WEBPACK_IMPORTED_MODULE_4__["ExampleComponent"]));



/***/ }),

/***/ "./src/app/docs/basic-write/basic-write.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/docs/basic-write/basic-write.component.ts ***!
  \***********************************************************/
/*! exports provided: BasicWriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicWriteComponent", function() { return BasicWriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _odata_odata_service_odata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../odata/odata-service/odata.service */ "./src/app/odata/odata-service/odata.service.ts");
/* harmony import */ var _example_example_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../example/example-data */ "./src/app/docs/example/example-data.ts");
/* harmony import */ var _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../odata/odata-query/odata-query */ "./src/app/odata/odata-query/odata-query.ts");
/* harmony import */ var _example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../example/example.component */ "./src/app/docs/example/example.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EXECUTE_CREATE_ENTITY = "example.subscr = example.odataQuery.post({\n  '@odata.type': 'Microsoft.OData.SampleService.Models.TripPin.Person',\n  'UserName': 'teresa',\n  'FirstName': 'Teresa',\n  'LastName': 'Gilbert',\n  'Gender': 'Female',\n  'Emails': ['teresa@example.com', 'teresa@contoso.com'],\n  'AddressInfo': [\n    {\n      'Address': '1 Suffolk Ln.',\n      'City':\n      {\n        'CountryRegion': 'United States',\n        'Name': 'Boise',\n        'Region': 'ID'\n      }\n    }]\n}).subscribe(\n  (odataResponse: ODataResponse) => {\n    example.response = odataResponse.toString();\n  },\n  (error: string) => {\n    example.response = error;\n  }\n  );";
var EXECUTE_DELETE_ENTITY = "example.subscr = example.odataQuery.delete().subscribe(\n  (odataResponse: ODataResponse) => {\n    example.response = odataResponse.toString();\n  },\n  (error: string) => {\n    example.response = error;\n  }\n);";
var EXECUTE_DELETE_ENTITY_ETAG = "example.subscr = example.odataQuery.delete('W/\"08D15F3DD9A61539\"').subscribe(\n  (odataResponse: ODataResponse) => {\n    example.response = odataResponse.toString();\n  },\n  (error: string) => {\n    example.response = error;\n  }\n);";
var EXECUTE_UPDATE_ENTITY = "example.subscr = example.odataQuery.patch({\n  '@odata.type': 'Microsoft.OData.SampleService.Models.TripPin.Person',\n  'Emails': ['Russell@example.com', 'Russell@contoso.com', 'newRussell@contoso.com']\n}).subscribe(\n  (odataResponse: ODataResponse) => {\n    example.response = odataResponse.toString();\n  },\n  (error: string) => {\n    example.response = error;\n  }\n  );";
var EXECUTE_UPDATE_ENTITY_ETAG = "example.subscr = example.odataQuery.patch({\n  '@odata.type': '#Microsoft.OData.SampleService.Models.TripPin.Person',\n  'FirstName' : 'CLYDE'\n}, 'W/\"08D15F3DD9126D84\"').subscribe(\n  (odataResponse: ODataResponse) => {\n    example.response = odataResponse.toString();\n  },\n  (error: string) => {\n    example.response = error;\n  }\n  );";
var EXECUTE_CREATE_RELATIONSHIP = "example.subscr = example.odataQuery.post({\n  '@odata.id': new ODataQuery(odataService, SERVICE_ROOT).entitySet('People').entityKey('\\'vincentcalabrese\\'').toString()\n}).subscribe(\n  (odataResponse: ODataResponse) => {\n    example.response = odataResponse.toString();\n  },\n  (error: string) => {\n    example.response = error;\n  }\n  );";
var EXECUTE_CHANGE_RELATIONSHIP = "example.subscr = example.odataQuery.put({\n  '@odata.id': new ODataQuery(odataService, SERVICE_ROOT).entitySet('Airlines').entityKey('\\'FM\\'').toString()\n}).subscribe(\n  (odataResponse: ODataResponse) => {\n    example.response = odataResponse.toString();\n  },\n  (error: string) => {\n    example.response = error;\n  }\n  );";
var EXECUTE_BOUND_ACTION = "example.subscr = example.odataQuery.post({\n    'userName': 'scottketchum',\n    'tripId': 1001\n  }).subscribe(\n    (odataResponse: ODataResponse) => {\n      example.response = odataResponse.toString();\n    },\n    (error: string) => {\n      example.response = error;\n    }\n    );";
var BasicWriteComponent = /** @class */ (function (_super) {
    __extends(BasicWriteComponent, _super);
    function BasicWriteComponent(odataService) {
        var _this = _super.call(this, odataService) || this;
        _this.odataService = odataService;
        _this.executeEnabled = false;
        return _this;
    }
    BasicWriteComponent.prototype.ngOnInit = function () {
        this.examples = [];
        // CREATE ENTITY
        var example = new _example_example_data__WEBPACK_IMPORTED_MODULE_2__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Create entity';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_2__["SERVICE_ROOT"] + '/People';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_3__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_2__["SERVICE_ROOT"])
            .entitySet('People');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n      .entitySet('People');\n  " + EXECUTE_CREATE_ENTITY;
        example.func = this.executeCreateEntity;
        // DELETE ENTITY
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_2__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Delete entity';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_2__["SERVICE_ROOT"] + '/People(\'vincentcalabrese\')';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_3__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_2__["SERVICE_ROOT"])
            .entitySet('People')
            .entityKey('\'vincentcalabrese\'');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n      .entitySet('People')\n      .entityKey('\\'vincentcalabrese\\'');\n  " + EXECUTE_DELETE_ENTITY;
        example.func = this.executeDeleteEntity;
        // UPDATE ENTITY
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_2__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Update entity';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_2__["SERVICE_ROOT"] + '/People(\'russellwhyte\')';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_3__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_2__["SERVICE_ROOT"])
            .entitySet('People').
            entityKey('\'russellwhyte\'');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n      .entitySet('People').\n      entityKey('\\'russellwhyte\\'');\n  " + EXECUTE_UPDATE_ENTITY;
        example.func = this.executeUpdateEntity;
        // CREATE RELATIONSHIP
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_2__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Create a relationship between entities';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_2__["SERVICE_ROOT"] + '/People(\'scottketchum\')/Friends/$ref';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_3__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_2__["SERVICE_ROOT"])
            .entitySet('People')
            .entityKey('\'scottketchum\'')
            .navigationProperty('Friends')
            .ref();
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n      .entitySet('People')\n      .entityKey('\\'scottketchum\\'')\n      .navigationProperty('Friends')\n      .ref();\n  " + EXECUTE_CREATE_RELATIONSHIP;
        example.func = this.executeCreateRelationship;
        // CHANGE RELATIONSHIP
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_2__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Change relationship between entities';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_2__["SERVICE_ROOT"] + '/People(\'russellwhyte\')/Trips(1001)/PlanItems(11)/Microsoft.OData.SampleService.Models.TripPin.Flight/Airline/$ref';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_3__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_2__["SERVICE_ROOT"])
            .entitySet('People')
            .entityKey('\'russellwhyte\'')
            .navigationProperty('Trips')
            .entityKey(1001)
            .navigationProperty('PlanItems')
            .entityKey(11)
            .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight')
            .navigationProperty('Airline')
            .ref();
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n      .entitySet('People')\n      .entityKey('\\'russellwhyte\\'')\n      .navigationProperty('Trips')\n      .entityKey(1001)\n      .navigationProperty('PlanItems')\n      .entityKey(11)\n      .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight')\n      .navigationProperty('Airline')\n      .ref();\n  " + EXECUTE_CHANGE_RELATIONSHIP;
        example.func = this.executeChangeRelationship;
        // BOUND ACTION
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_2__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Bound action';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_2__["SERVICE_ROOT"] + '/People(\'russellwhyte\')/Microsoft.OData.SampleService.Models.TripPin.ShareTrip';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_3__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_2__["SERVICE_ROOT"])
            .entitySet('People')
            .entityKey('\'russellwhyte\'')
            .actionCall('Microsoft.OData.SampleService.Models.TripPin.ShareTrip');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n      .entitySet('People')\n      .entityKey('\\'russellwhyte\\'')\n      .actionCall('Microsoft.OData.SampleService.Models.TripPin.ShareTrip');\n  " + EXECUTE_BOUND_ACTION;
        example.func = this.executeBoundAction;
        // UPDATE ENTITY ETAG
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_2__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Update entity with ETag';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_2__["SERVICE_ROOT"] + '/People(\'clydeguess\')';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_3__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_2__["SERVICE_ROOT"])
            .entitySet('People')
            .entityKey('\'clydeguess\'');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n      .entitySet('People')\n      .entityKey('\\'clydeguess\\'');\n  " + EXECUTE_UPDATE_ENTITY_ETAG;
        example.func = this.executeUpdateEntityETag;
        // DELETE ENTITY ETAG
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_2__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Delete entity with ETag';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_2__["SERVICE_ROOT"] + '/People(\'vincentcalabrese\')';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_3__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_2__["SERVICE_ROOT"])
            .entitySet('People')
            .entityKey('\'vincentcalabrese\'');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n      .entitySet('People')\n      .entityKey('\\'vincentcalabrese\\'');\n  " + EXECUTE_DELETE_ENTITY_ETAG;
        example.func = this.executeDeleteEntityETag;
    };
    BasicWriteComponent.prototype.executeCreateEntity = function (example, odataService) {
        example.subscr = example.odataQuery.post({
            '@odata.type': 'Microsoft.OData.SampleService.Models.TripPin.Person',
            'UserName': 'teresa',
            'FirstName': 'Teresa',
            'LastName': 'Gilbert',
            'Gender': 'Female',
            'Emails': ['teresa@example.com', 'teresa@contoso.com'],
            'AddressInfo': [
                {
                    'Address': '1 Suffolk Ln.',
                    'City': {
                        'CountryRegion': 'United States',
                        'Name': 'Boise',
                        'Region': 'ID'
                    }
                }
            ]
        }).subscribe(function (odataResponse) {
            example.response = odataResponse.toString();
        }, function (error) {
            example.response = error;
        });
    };
    BasicWriteComponent.prototype.executeDeleteEntity = function (example, odataService) {
        example.subscr = example.odataQuery.delete().subscribe(function (odataResponse) {
            example.response = odataResponse.toString();
        }, function (error) {
            example.response = error;
        });
    };
    BasicWriteComponent.prototype.executeDeleteEntityETag = function (example, odataService) {
        example.subscr = example.odataQuery.delete('W/"08D15F3DD9A61539"').subscribe(function (odataResponse) {
            example.response = odataResponse.toString();
        }, function (error) {
            example.response = error;
        });
    };
    BasicWriteComponent.prototype.executeUpdateEntity = function (example, odataService) {
        example.subscr = example.odataQuery.patch({
            '@odata.type': 'Microsoft.OData.SampleService.Models.TripPin.Person',
            'Emails': ['Russell@example.com', 'Russell@contoso.com', 'newRussell@contoso.com']
        }).subscribe(function (odataResponse) {
            example.response = odataResponse.toString();
        }, function (error) {
            example.response = error;
        });
    };
    BasicWriteComponent.prototype.executeUpdateEntityETag = function (example, odataService) {
        example.subscr = example.odataQuery.patch({
            '@odata.type': '#Microsoft.OData.SampleService.Models.TripPin.Person',
            'FirstName': 'CLYDE'
        }, 'W/"08D15F3DD9126D84"').subscribe(function (odataResponse) {
            example.response = odataResponse.toString();
        }, function (error) {
            example.response = error;
        });
    };
    BasicWriteComponent.prototype.executeCreateRelationship = function (example, odataService) {
        example.subscr = example.odataQuery.post({
            '@odata.id': new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_3__["ODataQuery"](odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_2__["SERVICE_ROOT"]).entitySet('People').entityKey('\'vincentcalabrese\'').toString()
        }).subscribe(function (odataResponse) {
            example.response = odataResponse.toString();
        }, function (error) {
            example.response = error;
        });
    };
    BasicWriteComponent.prototype.executeChangeRelationship = function (example, odataService) {
        example.subscr = example.odataQuery.put({
            '@odata.id': new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_3__["ODataQuery"](odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_2__["SERVICE_ROOT"]).entitySet('Airlines').entityKey('\'FM\'').toString()
        }).subscribe(function (odataResponse) {
            example.response = odataResponse.toString();
        }, function (error) {
            example.response = error;
        });
    };
    BasicWriteComponent.prototype.executeBoundAction = function (example, odataService) {
        example.subscr = example.odataQuery.post({
            'userName': 'scottketchum',
            'tripId': 1001
        }).subscribe(function (odataResponse) {
            example.response = odataResponse.toString();
        }, function (error) {
            example.response = error;
        });
    };
    BasicWriteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ov4-basic-write',
            template: __webpack_require__(/*! ../example/example.component.html */ "./src/app/docs/example/example.component.html")
        }),
        __metadata("design:paramtypes", [_odata_odata_service_odata_service__WEBPACK_IMPORTED_MODULE_1__["ODataService"]])
    ], BasicWriteComponent);
    return BasicWriteComponent;
}(_example_example_component__WEBPACK_IMPORTED_MODULE_4__["ExampleComponent"]));



/***/ }),

/***/ "./src/app/docs/batch/batch.component.html":
/*!*************************************************!*\
  !*** ./src/app/docs/batch/batch.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"ui-float-label\">\n  <input id=\"service-root\" type=\"text\" size=\"60\" pInputText [(ngModel)]=\"serviceRoot\">\n  <label for=\"service-root\">Service Root</label>\n</span>\n<span class=\"ui-float-label\">\n  <input id=\"entity-set\" type=\"text\" size=\"60\" pInputText [(ngModel)]=\"entitySet\">\n  <label for=\"entity-set\">Entity Set</label>\n</span>\n<span class=\"ui-float-label\">\n  <input id=\"entity-id\" type=\"text\" size=\"60\" pInputText [(ngModel)]=\"entityId\">\n  <label for=\"entity-id\">Entity ID</label>\n</span>\n<span class=\"ui-float-label\">\n  <input id=\"entity-property-patch\" type=\"text\" size=\"60\" pInputText [(ngModel)]=\"entityPropertyPatch\">\n  <label for=\"entity-property-patch\">Entity property to change using PATCH</label>\n</span>\n<span class=\"ui-float-label\">\n  <input id=\"entity-property-put\" type=\"text\" size=\"60\" pInputText [(ngModel)]=\"entityPropertyPut\">\n  <label for=\"entity-property-put\">Entity property to change using PUT</label>\n</span>\n<br/>\n<input type=\"button\" value=\"Execute all queries\" (click)=\"executeAllQueries()\">\n<div *ngFor=\"let batchItem of batchData\">\n  <h4>{{batchItem.requestDescription}} Batch Response</h4>\n  <textarea class=\"response\" readonly=\"true\">{{batchItem.responseBatch.toString()}}</textarea>\n  <h4 *ngIf=\"batchItem.responses.length\">{{batchItem.requestDescription}} Batch Response Parts</h4>\n  <textarea *ngFor=\"let response of batchItem.responses\" class=\"response\" readonly=\"true\">{{response?.toString()}}</textarea>\n</div>"

/***/ }),

/***/ "./src/app/docs/batch/batch.component.ts":
/*!***********************************************!*\
  !*** ./src/app/docs/batch/batch.component.ts ***!
  \***********************************************/
/*! exports provided: BatchItem, BatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchItem", function() { return BatchItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchComponent", function() { return BatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../odata/odata-query/odata-query */ "./src/app/odata/odata-query/odata-query.ts");
/* harmony import */ var _odata_odata_service_odata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../odata/odata-service/odata.service */ "./src/app/odata/odata-service/odata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BatchItem = /** @class */ (function () {
    function BatchItem(requestDescription, observable, responseBatch, responses) {
        this.requestDescription = requestDescription;
        this.observable = observable;
        this.responseBatch = responseBatch;
        this.responses = responses;
    }
    return BatchItem;
}());

var BatchComponent = /** @class */ (function () {
    function BatchComponent(odataService) {
        this.odataService = odataService;
        this.batchData = [];
    }
    BatchComponent.prototype.ngOnInit = function () { };
    BatchComponent.prototype.ngOnDestroy = function () { };
    BatchComponent.prototype.executeAllQueries = function () {
        var batchData = [];
        // POST
        var odataQueryBatch = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_1__["ODataQuery"](this.odataService, this.serviceRoot).batch();
        var odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_1__["ODataQuery"](this.odataService, this.serviceRoot).entitySet(this.entitySet);
        var body1 = {};
        body1[this.entityId] = 'id1';
        var body2 = {};
        body2[this.entityId] = 'id2';
        odataQueryBatch.post(odataQuery, body1).post(odataQuery, body2);
        batchData.push(new BatchItem('Add ' + this.entitySet, odataQueryBatch.execute(), null, null));
        // GET
        odataQueryBatch = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_1__["ODataQuery"](this.odataService, this.serviceRoot).batch();
        odataQueryBatch.get(odataQuery);
        batchData.push(new BatchItem('Get ' + this.entitySet, odataQueryBatch.execute(), null, null));
        // PATCH
        odataQueryBatch = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_1__["ODataQuery"](this.odataService, this.serviceRoot).batch();
        var odataQuery1 = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_1__["ODataQuery"](this.odataService, this.serviceRoot).entitySet(this.entitySet).entityKey('\'id1\'');
        var odataQuery2 = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_1__["ODataQuery"](this.odataService, this.serviceRoot).entitySet(this.entitySet).entityKey('\'id2\'');
        body1 = {};
        body1[this.entityPropertyPatch] = 'patch1';
        body2 = {};
        body2[this.entityPropertyPatch] = 'patch2';
        odataQueryBatch.patch(odataQuery1, body1).patch(odataQuery2, body2);
        batchData.push(new BatchItem('Update ' + this.entitySet + ' using PATCH', odataQueryBatch.execute(), null, null));
        // GET
        odataQueryBatch = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_1__["ODataQuery"](this.odataService, this.serviceRoot).batch();
        odataQueryBatch.get(odataQuery);
        batchData.push(new BatchItem('Get ' + this.entitySet, odataQueryBatch.execute(), null, null));
        // PUT
        odataQueryBatch = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_1__["ODataQuery"](this.odataService, this.serviceRoot).batch();
        body1 = {};
        body1[this.entityPropertyPut] = 'put1';
        body2 = {};
        body2[this.entityPropertyPut] = 'put2';
        odataQueryBatch.put(odataQuery1, body1).put(odataQuery2, body2);
        batchData.push(new BatchItem('Update ' + this.entitySet + ' using PUT', odataQueryBatch.execute(), null, null));
        // GET
        odataQueryBatch = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_1__["ODataQuery"](this.odataService, this.serviceRoot).batch();
        odataQueryBatch.get(odataQuery);
        batchData.push(new BatchItem('Get ' + this.entitySet, odataQueryBatch.execute(), null, null));
        // DELETE
        odataQueryBatch = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_1__["ODataQuery"](this.odataService, this.serviceRoot).batch();
        odataQueryBatch.delete(odataQuery1).delete(odataQuery2);
        batchData.push(new BatchItem('Delete ' + this.entitySet, odataQueryBatch.execute(), null, null));
        // GET
        odataQueryBatch = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_1__["ODataQuery"](this.odataService, this.serviceRoot).batch();
        odataQueryBatch.get(odataQuery);
        batchData.push(new BatchItem('Get ' + this.entitySet, odataQueryBatch.execute(), null, null));
        this.execute(0, batchData);
    };
    BatchComponent.prototype.execute = function (index, batchData) {
        var _this = this;
        var batchItem = batchData[index];
        batchItem.observable.subscribe(function (odataResponse) {
            batchItem.responseBatch = odataResponse;
            batchItem.responses = odataResponse.toODataResponseBatch().getODataResponses();
            if (index === batchData.length - 1) {
                _this.batchData = batchData;
            }
            else {
                _this.execute(++index, batchData);
            }
        });
    };
    BatchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ov4-batch',
            template: __webpack_require__(/*! ./batch.component.html */ "./src/app/docs/batch/batch.component.html")
        }),
        __metadata("design:paramtypes", [_odata_odata_service_odata_service__WEBPACK_IMPORTED_MODULE_2__["ODataService"]])
    ], BatchComponent);
    return BatchComponent;
}());



/***/ }),

/***/ "./src/app/docs/example/example-data.ts":
/*!**********************************************!*\
  !*** ./src/app/docs/example/example-data.ts ***!
  \**********************************************/
/*! exports provided: SERVICE_ROOT, ExampleData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_ROOT", function() { return SERVICE_ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleData", function() { return ExampleData; });
var SERVICE_ROOT = 'https://services.odata.org/v4/TripPinServiceRW';
var ExampleData = /** @class */ (function () {
    function ExampleData() {
    }
    return ExampleData;
}());



/***/ }),

/***/ "./src/app/docs/example/example.component.html":
/*!*****************************************************!*\
  !*** ./src/app/docs/example/example.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"button\" value=\"Execute all queries\" (click)=\"executeAllGet()\">\n\n<div *ngFor=\"let example of examples\">\n  <h3>{{example.title}}</h3>\n  <h4>Query</h4>\n  <span>{{example.query}}</span>\n  <h4>Code</h4>\n  <pre class=\"code\">{{example.code}}</pre>\n  <h4 *ngIf=\"executeEnabled\">Response\n    <input type=\"button\" value=\"Execute query\" (click)=\"execute(example)\">\n  </h4>\n  <textarea *ngIf=\"executeEnabled\" class=\"response\" readonly=\"true\">{{example.response}}</textarea>\n  <hr/>\n</div>"

/***/ }),

/***/ "./src/app/docs/example/example.component.ts":
/*!***************************************************!*\
  !*** ./src/app/docs/example/example.component.ts ***!
  \***************************************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return ExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _odata_odata_service_odata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../odata/odata-service/odata.service */ "./src/app/odata/odata-service/odata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExampleComponent = /** @class */ (function () {
    function ExampleComponent(odataService) {
        this.odataService = odataService;
        this.executeEnabled = true;
    }
    ExampleComponent.prototype.ngOnInit = function () {
    };
    ExampleComponent.prototype.ngOnDestroy = function () {
        if (this.examples) {
            for (var _i = 0, _a = this.examples; _i < _a.length; _i++) {
                var example = _a[_i];
                if (example.subscr) {
                    example.subscr.unsubscribe();
                }
            }
        }
    };
    ExampleComponent.prototype.execute = function (example) {
        if (example.func) {
            example.func(example, this.odataService);
        }
    };
    ExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ov4-example',
            template: __webpack_require__(/*! ./example.component.html */ "./src/app/docs/example/example.component.html")
        }),
        __metadata("design:paramtypes", [_odata_odata_service_odata_service__WEBPACK_IMPORTED_MODULE_1__["ODataService"]])
    ], ExampleComponent);
    return ExampleComponent;
}());



/***/ }),

/***/ "./src/app/docs/metadata/metadata.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/docs/metadata/metadata.component.ts ***!
  \*****************************************************/
/*! exports provided: EXECUTE_GET_TO_METADATA, MetadataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXECUTE_GET_TO_METADATA", function() { return EXECUTE_GET_TO_METADATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataComponent", function() { return MetadataComponent; });
/* harmony import */ var _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../odata/odata-query/odata-query */ "./src/app/odata/odata-query/odata-query.ts");
/* harmony import */ var _example_example_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../example/example-data */ "./src/app/docs/example/example-data.ts");
/* harmony import */ var _basic_read_basic_read_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../basic-read/basic-read.component */ "./src/app/docs/basic-read/basic-read.component.ts");
/* harmony import */ var _odata_odata_service_odata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../odata/odata-service/odata.service */ "./src/app/odata/odata-service/odata.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EXECUTE_GET_TO_METADATA = "example.odataQuery.get().subscribe(\n  (odataResponse: ODataResponse) => {\n    example.response = JSON.stringify(odataResponse.toMetadata(), null, 4);\n  },\n  (error: string) => {\n    example.response = error;\n  }\n);";
var MetadataComponent = /** @class */ (function (_super) {
    __extends(MetadataComponent, _super);
    function MetadataComponent(odataService) {
        var _this = _super.call(this, odataService) || this;
        _this.odataService = odataService;
        return _this;
    }
    MetadataComponent.prototype.ngOnInit = function () {
        this.examples = [];
        // SERVICE DOCUMENT
        var example = new _example_example_data__WEBPACK_IMPORTED_MODULE_1__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get service document';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_1__["SERVICE_ROOT"];
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_1__["SERVICE_ROOT"]);
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT);\n" + _basic_read_basic_read_component__WEBPACK_IMPORTED_MODULE_2__["EXECUTE_GET"];
        example.func = this.executeGet;
        // SERVICE METADATA
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_1__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get service metadata';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_1__["SERVICE_ROOT"] + '/$metadata';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_1__["SERVICE_ROOT"])
            .metadata();
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .metadata();\n" + _basic_read_basic_read_component__WEBPACK_IMPORTED_MODULE_2__["EXECUTE_GET"];
        example.func = this.executeGet;
        // SERVICE METADATA TO JSON
        example = new _example_example_data__WEBPACK_IMPORTED_MODULE_1__["ExampleData"]();
        this.examples.push(example);
        example.title = 'Get service metadata as a json object';
        example.query = _example_example_data__WEBPACK_IMPORTED_MODULE_1__["SERVICE_ROOT"] + '/$metadata';
        example.odataQuery = new _odata_odata_query_odata_query__WEBPACK_IMPORTED_MODULE_0__["ODataQuery"](this.odataService, _example_example_data__WEBPACK_IMPORTED_MODULE_1__["SERVICE_ROOT"])
            .metadata();
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .metadata();\n" + EXECUTE_GET_TO_METADATA;
        example.func = this.executeGetToMetadata;
    };
    MetadataComponent.prototype.executeGetToMetadata = function (example, odataService) {
        example.subscr = example.odataQuery.get().subscribe(function (odataResponse) {
            example.response = JSON.stringify(odataResponse.toMetadata(), null, 4);
        }, function (error) {
            example.response = error;
        });
    };
    MetadataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'ov4-metadata',
            template: __webpack_require__(/*! ../example/example.component.html */ "./src/app/docs/example/example.component.html")
        }),
        __metadata("design:paramtypes", [_odata_odata_service_odata_service__WEBPACK_IMPORTED_MODULE_3__["ODataService"]])
    ], MetadataComponent);
    return MetadataComponent;
}(_basic_read_basic_read_component__WEBPACK_IMPORTED_MODULE_2__["BasicReadComponent"]));



/***/ }),

/***/ "./src/app/odata/odata-query/odata-query-abstract.ts":
/*!***********************************************************!*\
  !*** ./src/app/odata/odata-query/odata-query-abstract.ts ***!
  \***********************************************************/
/*! exports provided: ODataQueryAbstract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ODataQueryAbstract", function() { return ODataQueryAbstract; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/app/odata/utils/utils.ts");

var ODataQueryAbstract = /** @class */ (function () {
    function ODataQueryAbstract(odataService, serviceRoot) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].requireNotNullNorUndefined(odataService, 'odataService');
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].requireNotNullNorUndefined(serviceRoot, 'serviceRoot');
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].requireNotEmpty(serviceRoot, 'serviceRoot');
        this.odataService = odataService;
        this.serviceRoot = serviceRoot;
        this.queryString = serviceRoot;
    }
    return ODataQueryAbstract;
}());



/***/ }),

/***/ "./src/app/odata/odata-query/odata-query-batch.ts":
/*!********************************************************!*\
  !*** ./src/app/odata/odata-query/odata-query-batch.ts ***!
  \********************************************************/
/*! exports provided: Method, BatchRequest, ODataQueryBatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Method", function() { return Method; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchRequest", function() { return BatchRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ODataQueryBatch", function() { return ODataQueryBatch; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./src/app/odata/utils/utils.ts");
/* harmony import */ var _odata_query_abstract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./odata-query-abstract */ "./src/app/odata/odata-query/odata-query-abstract.ts");
var __extends = (undefined && undefined.__extends) || (function () {
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
var BatchRequest = /** @class */ (function () {
    function BatchRequest(method, odataQuery, body, httpOptions) {
        this.method = method;
        this.odataQuery = odataQuery;
        this.body = body;
        this.httpOptions = httpOptions;
    }
    return BatchRequest;
}());

var ODataQueryBatch = /** @class */ (function (_super) {
    __extends(ODataQueryBatch, _super);
    function ODataQueryBatch(odataService, serviceRoot) {
        var _this = _super.call(this, odataService, serviceRoot) || this;
        _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].requireNotNullNorUndefined(odataService, 'odataService');
        _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].requireNotNullNorUndefined(serviceRoot, 'serviceRoot');
        _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].requireNotEmpty(serviceRoot, 'serviceRoot');
        _this.queryString = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].appendSegment(serviceRoot, ODataQueryBatch.$BATCH);
        _this.requests = [];
        _this.batchBoundary = ODataQueryBatch.BATCH_PREFIX + _this.getUUID();
        _this.changesetBoundary = null;
        _this.changesetID = 1;
        return _this;
    }
    ODataQueryBatch.prototype.get = function (odataQuery, httpOptions) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].requireNotNullNorUndefined(odataQuery, 'odataQuery');
        this.requests.push(new BatchRequest(Method.GET, odataQuery, undefined, httpOptions));
        return this;
    };
    ODataQueryBatch.prototype.post = function (odataQuery, body, httpOptions) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].requireNotNullNorUndefined(odataQuery, 'odataQuery');
        this.requests.push(new BatchRequest(Method.POST, odataQuery, body, httpOptions));
        return this;
    };
    ODataQueryBatch.prototype.put = function (odataQuery, body, httpOptions) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].requireNotNullNorUndefined(odataQuery, 'odataQuery');
        this.requests.push(new BatchRequest(Method.PUT, odataQuery, body, httpOptions));
        return this;
    };
    ODataQueryBatch.prototype.patch = function (odataQuery, body, httpOptions) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].requireNotNullNorUndefined(odataQuery, 'odataQuery');
        this.requests.push(new BatchRequest(Method.PATCH, odataQuery, body, httpOptions));
        return this;
    };
    ODataQueryBatch.prototype.delete = function (odataQuery, httpOptions) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].requireNotNullNorUndefined(odataQuery, 'odataQuery');
        this.requests.push(new BatchRequest(Method.DELETE, odataQuery, undefined, httpOptions));
        return this;
    };
    ODataQueryBatch.prototype.execute = function (httpOptions) {
        // set headers
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(httpOptions)) {
            httpOptions = {};
        }
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(httpOptions.headers)) {
            httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        }
        httpOptions.headers = httpOptions.headers.set(ODataQueryBatch.ODATA_VERSION, ODataQueryBatch.VERSION_4_0);
        httpOptions.headers = httpOptions.headers.set(ODataQueryBatch.CONTENT_TYPE, ODataQueryBatch.MULTIPART_MIXED_BOUNDARY + this.batchBoundary);
        httpOptions.headers = httpOptions.headers.set(ODataQueryBatch.ACCEPT, ODataQueryBatch.MULTIPART_MIXED);
        // send request
        return this.odataService.post(this, this.getBody(), httpOptions);
    };
    ODataQueryBatch.prototype.toString = function () {
        return this.queryString;
    };
    ODataQueryBatch.prototype.getBody = function () {
        var res = '';
        for (var _i = 0, _a = this.requests; _i < _a.length; _i++) {
            var request = _a[_i];
            var method = request.method;
            var odataQuery = request.odataQuery;
            var httpOptions = request.httpOptions;
            var body = request.body;
            // if method is GET and there is a changeset boundary open then close it
            if (method === Method.GET && _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNotNullNorUndefined(this.changesetBoundary)) {
                res += ODataQueryBatch.BOUNDARY_PREFIX_SUFFIX + this.changesetBoundary + ODataQueryBatch.BOUNDARY_PREFIX_SUFFIX + ODataQueryBatch.NEWLINE;
                this.changesetBoundary = null;
            }
            // if there is no changeset boundary open then open a batch boundary
            if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(this.changesetBoundary)) {
                res += ODataQueryBatch.BOUNDARY_PREFIX_SUFFIX + this.batchBoundary + ODataQueryBatch.NEWLINE;
            }
            // if method is not GET and there is no changeset boundary open then open a changeset boundary
            if (method !== Method.GET) {
                if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(this.changesetBoundary)) {
                    this.changesetBoundary = ODataQueryBatch.CHANGESET_PREFIX + this.getUUID();
                    res += ODataQueryBatch.CONTENT_TYPE + ': ' + ODataQueryBatch.MULTIPART_MIXED_BOUNDARY + this.changesetBoundary + ODataQueryBatch.NEWLINE;
                    res += ODataQueryBatch.NEWLINE;
                }
                res += ODataQueryBatch.BOUNDARY_PREFIX_SUFFIX + this.changesetBoundary + ODataQueryBatch.NEWLINE;
            }
            res += ODataQueryBatch.CONTENT_TYPE + ': ' + ODataQueryBatch.APPLICATION_HTTP + ODataQueryBatch.NEWLINE;
            res += ODataQueryBatch.CONTENT_TRANSFER_ENCODING + ': ' + ODataQueryBatch.BINARY + ODataQueryBatch.NEWLINE;
            if (method !== Method.GET) {
                res += ODataQueryBatch.CONTENT_ID + ': ' + this.changesetID++ + ODataQueryBatch.NEWLINE;
            }
            res += ODataQueryBatch.NEWLINE;
            res += Method[method] + ' ' + odataQuery + ' ' + ODataQueryBatch.HTTP11 + ODataQueryBatch.NEWLINE;
            res += this.getHeaders(method, httpOptions);
            res += ODataQueryBatch.NEWLINE;
            if (method === Method.GET || method === Method.DELETE) {
                res += ODataQueryBatch.NEWLINE;
            }
            else {
                res += JSON.stringify(body) + ODataQueryBatch.NEWLINE;
            }
        }
        if (res.length) {
            if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNotNullNorUndefined(this.changesetBoundary)) {
                res += ODataQueryBatch.BOUNDARY_PREFIX_SUFFIX + this.changesetBoundary + ODataQueryBatch.BOUNDARY_PREFIX_SUFFIX + ODataQueryBatch.NEWLINE;
                this.changesetBoundary = null;
            }
            res += ODataQueryBatch.BOUNDARY_PREFIX_SUFFIX + this.batchBoundary + ODataQueryBatch.BOUNDARY_PREFIX_SUFFIX;
        }
        return res;
    };
    ODataQueryBatch.prototype.getHeaders = function (method, httpOptions) {
        var res = '';
        if (method === Method.POST || method === Method.PATCH || method === Method.PUT) {
            res += ODataQueryBatch.CONTENT_TYPE + ': ' + ODataQueryBatch.APPLICATION_JSON + ODataQueryBatch.NEWLINE;
        }
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(httpOptions) || _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(httpOptions.headers)) {
            return res;
        }
        for (var _i = 0, _a = httpOptions.headers.keys(); _i < _a.length; _i++) {
            var key = _a[_i];
            res += key + ': ' + httpOptions.headers.getAll(key) + ODataQueryBatch.NEWLINE;
        }
        return res;
    };
    ODataQueryBatch.prototype.getUUID = function () {
        return angular2_uuid__WEBPACK_IMPORTED_MODULE_1__["UUID"].UUID();
    };
    ODataQueryBatch.BOUNDARY_PREFIX_SUFFIX = '--';
    ODataQueryBatch.BATCH_PREFIX = 'batch_';
    ODataQueryBatch.CHANGESET_PREFIX = 'changeset_';
    ODataQueryBatch.NEWLINE = '\r\n';
    // CONSTANT SEGMENTS
    ODataQueryBatch.$BATCH = '$batch';
    // HEADERS
    ODataQueryBatch.HTTP11 = 'HTTP/1.1';
    ODataQueryBatch.ODATA_VERSION = 'OData-Version';
    ODataQueryBatch.CONTENT_TYPE = 'Content-Type';
    ODataQueryBatch.ACCEPT = 'Accept';
    ODataQueryBatch.CONTENT_TRANSFER_ENCODING = 'Content-Transfer-Encoding';
    ODataQueryBatch.CONTENT_ID = 'Content-ID';
    // HEADER VALUES
    ODataQueryBatch.VERSION_4_0 = '4.0';
    ODataQueryBatch.MULTIPART_MIXED = 'multipart/mixed';
    ODataQueryBatch.MULTIPART_MIXED_BOUNDARY = 'multipart/mixed;boundary=';
    ODataQueryBatch.APPLICATION_HTTP = 'application/http';
    ODataQueryBatch.BINARY = 'binary';
    ODataQueryBatch.APPLICATION_JSON = 'application/json';
    return ODataQueryBatch;
}(_odata_query_abstract__WEBPACK_IMPORTED_MODULE_3__["ODataQueryAbstract"]));



/***/ }),

/***/ "./src/app/odata/odata-query/odata-query.ts":
/*!**************************************************!*\
  !*** ./src/app/odata/odata-query/odata-query.ts ***!
  \**************************************************/
/*! exports provided: ODataQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ODataQuery", function() { return ODataQuery; });
/* harmony import */ var _query_options_query_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../query-options/query-options */ "./src/app/odata/query-options/query-options.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/app/odata/utils/utils.ts");
/* harmony import */ var _odata_query_abstract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./odata-query-abstract */ "./src/app/odata/odata-query/odata-query-abstract.ts");
/* harmony import */ var _odata_query_batch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./odata-query-batch */ "./src/app/odata/odata-query/odata-query-batch.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ODataQuery = /** @class */ (function (_super) {
    __extends(ODataQuery, _super);
    function ODataQuery(odataService, serviceRoot) {
        var _this = _super.call(this, odataService, serviceRoot) || this;
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotNullNorUndefined(odataService, 'odataService');
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotNullNorUndefined(serviceRoot, 'serviceRoot');
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotEmpty(serviceRoot, 'serviceRoot');
        _this.queryOptions = new _query_options_query_options__WEBPACK_IMPORTED_MODULE_0__["QueryOptions"](ODataQuery.SEPARATOR);
        _this.segments = [];
        _this.lastSegment = null;
        return _this;
    }
    // QUERY SEGMENTS
    ODataQuery.prototype.metadata = function () {
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNullOrUndefined(this.getSegment(ODataQuery.METADATA), ODataQuery.METADATA);
        if (this.segments.length) {
            throw new Error('metadata segment cannot be appended to other segments');
        }
        this.queryString = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].appendSegment(this.queryString, ODataQuery.$METADATA);
        this.addSegment(ODataQuery.METADATA);
        return this;
    };
    ODataQuery.prototype.entitySet = function (entitySet) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNullOrUndefined(this.getSegment(ODataQuery.ENTITY_SET), ODataQuery.ENTITY_SET);
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotNullNorUndefined(entitySet, 'entitySet');
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotEmpty(entitySet, 'entitySet');
        this.queryString = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].appendSegment(this.queryString, entitySet);
        this.addSegment(ODataQuery.ENTITY_SET);
        return this;
    };
    ODataQuery.prototype.entityKey = function (entityKey) {
        if (this.lastSegment !== ODataQuery.ENTITY_SET && this.lastSegment !== ODataQuery.NAVIGATION_PROPERTY) {
            throw new Error('entityKey can only be appended to entitySet or navigationProperty');
        }
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotNullNorUndefined(entityKey, 'entityKey');
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotEmpty(entityKey, 'entityKey');
        entityKey = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getValueURI(entityKey, true);
        this.queryString = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].removeEndingSeparator(this.queryString) + '(' + entityKey + ')';
        this.addSegment(ODataQuery.ENTITY_KEY);
        return this;
    };
    ODataQuery.prototype.singleton = function (singleton) {
        if (this.segments.length) {
            throw new Error('singleton segment cannot be appended to other segments');
        }
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotNullNorUndefined(singleton, 'singleton');
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotEmpty(singleton, 'singleton');
        this.queryString = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].appendSegment(this.queryString, singleton);
        this.addSegment(ODataQuery.SINGLETON);
        return this;
    };
    ODataQuery.prototype.typeName = function (typeName) {
        if (this.lastSegment !== ODataQuery.ENTITY_SET && this.lastSegment !== ODataQuery.NAVIGATION_PROPERTY && this.lastSegment !== ODataQuery.ENTITY_KEY) {
            throw new Error('typeName can only be appended to entitySet, navigationProperty or entityKey');
        }
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotNullNorUndefined(typeName, 'typeName');
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotEmpty(typeName, 'typeName');
        this.queryString = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].appendSegment(this.queryString, typeName);
        this.addSegment(ODataQuery.TYPE_NAME);
        return this;
    };
    ODataQuery.prototype.property = function (property) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNullOrUndefined(this.getSegment(ODataQuery.PROPERTY), ODataQuery.PROPERTY);
        if (this.lastSegment !== ODataQuery.ENTITY_KEY && this.lastSegment !== ODataQuery.SINGLETON) {
            throw new Error('property can only be appended to entityKey or singleton');
        }
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotNullNorUndefined(property, 'property');
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotEmpty(property, 'property');
        this.queryString = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].appendSegment(this.queryString, property);
        this.addSegment(ODataQuery.PROPERTY);
        return this;
    };
    ODataQuery.prototype.navigationProperty = function (navigationProperty) {
        if (this.lastSegment !== ODataQuery.ENTITY_KEY && this.lastSegment !== ODataQuery.SINGLETON && this.lastSegment !== ODataQuery.TYPE_NAME) {
            throw new Error('navigationProperty can only be appended to entityKey, singleton or typeName');
        }
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotNullNorUndefined(navigationProperty, 'navigationProperty');
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotEmpty(navigationProperty, 'navigationProperty');
        this.queryString = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].appendSegment(this.queryString, navigationProperty);
        this.addSegment(ODataQuery.NAVIGATION_PROPERTY);
        return this;
    };
    ODataQuery.prototype.ref = function () {
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNullOrUndefined(this.getSegment(ODataQuery.REF), ODataQuery.REF);
        if (this.lastSegment !== ODataQuery.NAVIGATION_PROPERTY) {
            throw new Error('ref can only be appended to navigationProperty');
        }
        this.queryString = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].appendSegment(this.queryString, ODataQuery.$REF);
        this.addSegment(ODataQuery.REF);
        return this;
    };
    ODataQuery.prototype.value = function () {
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNullOrUndefined(this.getSegment(ODataQuery.VALUE), ODataQuery.VALUE);
        if (this.lastSegment !== ODataQuery.PROPERTY) {
            throw new Error('value can only be appended to property');
        }
        this.queryString = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].appendSegment(this.queryString, ODataQuery.$VALUE);
        this.addSegment(ODataQuery.VALUE);
        return this;
    };
    ODataQuery.prototype.countSegment = function () {
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNullOrUndefined(this.getSegment(ODataQuery.COUNT), ODataQuery.COUNT);
        if (this.lastSegment !== ODataQuery.ENTITY_SET && this.lastSegment !== ODataQuery.NAVIGATION_PROPERTY) {
            throw new Error('count can only be appended to entitySet or navigationProperty');
        }
        this.queryString = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].appendSegment(this.queryString, ODataQuery.$COUNT);
        this.addSegment(ODataQuery.COUNT);
        return this;
    };
    ODataQuery.prototype.functionCall = function (functionCall) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotNullNorUndefined(functionCall, 'functionCall');
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotEmpty(functionCall, 'functionCall');
        this.queryString = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].appendSegment(this.queryString, functionCall);
        this.addSegment(ODataQuery.FUNCTION_CALL);
        return this;
    };
    ODataQuery.prototype.actionCall = function (actionCall) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotNullNorUndefined(actionCall, 'actionCall');
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotEmpty(actionCall, 'actionCall');
        this.queryString = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].appendSegment(this.queryString, actionCall);
        this.addSegment(ODataQuery.ACTION_CALL);
        return this;
    };
    ODataQuery.prototype.batch = function () {
        return new _odata_query_batch__WEBPACK_IMPORTED_MODULE_3__["ODataQueryBatch"](this.odataService, this.serviceRoot);
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
    ODataQuery.prototype.search = function (search) {
        this.queryOptions.search(search);
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
    ODataQuery.prototype.countOption = function (count) {
        this.queryOptions.count(count);
        return this;
    };
    ODataQuery.prototype.customOption = function (key, value) {
        this.queryOptions.customOption(key, value);
        return this;
    };
    ODataQuery.prototype.format = function (format) {
        this.queryOptions.format(format);
        return this;
    };
    // QUERY EXECUTION
    ODataQuery.prototype.get = function (httpOptions) {
        return this.odataService.get(this, httpOptions);
    };
    ODataQuery.prototype.post = function (body, httpOptions) {
        return this.odataService.post(this, body, httpOptions);
    };
    ODataQuery.prototype.patch = function (body, etag, httpOptions) {
        return this.odataService.patch(this, body, etag, httpOptions);
    };
    ODataQuery.prototype.put = function (body, etag, httpOptions) {
        return this.odataService.put(this, body, etag, httpOptions);
    };
    ODataQuery.prototype.delete = function (etag, httpOptions) {
        return this.odataService.delete(this, etag, httpOptions);
    };
    ODataQuery.prototype.toString = function () {
        var res = this.queryString;
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotNullNorUndefined(this.queryOptions) && !this.queryOptions.isEmpty()) {
            res += '?' + this.queryOptions.toString();
        }
        return res;
    };
    ODataQuery.prototype.getSegment = function (segment) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotNull(segment, 'segment');
        var res = this.segments.find(function (value, index, segments) {
            return value === segment;
        });
        return res;
    };
    ODataQuery.prototype.addSegment = function (segment) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotNull(segment, 'segment');
        this.segments.push(segment);
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotNullNorUndefined(this.segments) && this.segments.length) {
            this.lastSegment = this.segments[this.segments.length - 1];
        }
    };
    // QUERY OPTIONS SEPARATOR
    ODataQuery.SEPARATOR = '&';
    // SEGMENT NAMES
    ODataQuery.METADATA = 'metadata';
    ODataQuery.ENTITY_SET = 'entitySet';
    ODataQuery.ENTITY_KEY = 'entityKey';
    ODataQuery.SINGLETON = 'singleton';
    ODataQuery.TYPE_NAME = 'typeName';
    ODataQuery.PROPERTY = 'property';
    ODataQuery.NAVIGATION_PROPERTY = 'navigationProperty';
    ODataQuery.REF = 'ref';
    ODataQuery.VALUE = 'value';
    ODataQuery.COUNT = 'count';
    ODataQuery.FUNCTION_CALL = 'functionCall';
    ODataQuery.ACTION_CALL = 'actionCall';
    // CONSTANT SEGMENTS
    ODataQuery.$METADATA = '$metadata';
    ODataQuery.$REF = '$ref';
    ODataQuery.$VALUE = '$value';
    ODataQuery.$COUNT = '$count';
    return ODataQuery;
}(_odata_query_abstract__WEBPACK_IMPORTED_MODULE_2__["ODataQueryAbstract"]));



/***/ }),

/***/ "./src/app/odata/odata-query/quoted-string.ts":
/*!****************************************************!*\
  !*** ./src/app/odata/odata-query/quoted-string.ts ***!
  \****************************************************/
/*! exports provided: QuotedString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotedString", function() { return QuotedString; });
var QuotedString = /** @class */ (function () {
    function QuotedString(value) {
        this.value = value;
    }
    QuotedString.prototype.toString = function () {
        return this.value;
    };
    return QuotedString;
}());



/***/ }),

/***/ "./src/app/odata/odata-response/csdl/csdl-annotation.ts":
/*!**************************************************************!*\
  !*** ./src/app/odata/odata-response/csdl/csdl-annotation.ts ***!
  \**************************************************************/
/*! exports provided: CsdlAnnotable, CsdlAnnotations, CsdlAnnotation, CsdlTerm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlAnnotable", function() { return CsdlAnnotable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlAnnotations", function() { return CsdlAnnotations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlAnnotation", function() { return CsdlAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlTerm", function() { return CsdlTerm; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CsdlAnnotable = /** @class */ (function () {
    function CsdlAnnotable(annotationList) {
        this.annotationList = annotationList;
    }
    return CsdlAnnotable;
}());

var CsdlAnnotations = /** @class */ (function (_super) {
    __extends(CsdlAnnotations, _super);
    function CsdlAnnotations(target, annotationList, qualifier) {
        var _this = _super.call(this, annotationList) || this;
        _this.target = target;
        _this.qualifier = qualifier;
        return _this;
    }
    return CsdlAnnotations;
}(CsdlAnnotable));

var CsdlAnnotation = /** @class */ (function () {
    function CsdlAnnotation(term, qualifier) {
        this.term = term;
        this.qualifier = qualifier;
    }
    return CsdlAnnotation;
}());

var CsdlTerm = /** @class */ (function () {
    function CsdlTerm(name, type, baseTerm, defaultValue, appliesTo, nullable, maxLength, precision, scale, srid) {
        this.name = name;
        this.type = type;
        this.baseTerm = baseTerm;
        this.defaultValue = defaultValue;
        this.appliesTo = appliesTo;
        this.nullable = nullable;
        this.maxLength = maxLength;
        this.precision = precision;
        this.scale = scale;
        this.srid = srid;
    }
    return CsdlTerm;
}());



/***/ }),

/***/ "./src/app/odata/odata-response/csdl/csdl-entity-container.ts":
/*!********************************************************************!*\
  !*** ./src/app/odata/odata-response/csdl/csdl-entity-container.ts ***!
  \********************************************************************/
/*! exports provided: CsdlEntityContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlEntityContainer", function() { return CsdlEntityContainer; });
var CsdlEntityContainer = /** @class */ (function () {
    function CsdlEntityContainer(name, extend, entitySets, singletons, functionImports, actionImports) {
        this.name = name;
        this.extend = extend;
        this.entitySets = entitySets;
        this.singletons = singletons;
        this.functionImports = functionImports;
        this.actionImports = actionImports;
    }
    return CsdlEntityContainer;
}());



/***/ }),

/***/ "./src/app/odata/odata-response/csdl/csdl-entity-set.ts":
/*!**************************************************************!*\
  !*** ./src/app/odata/odata-response/csdl/csdl-entity-set.ts ***!
  \**************************************************************/
/*! exports provided: CsdlEntitySet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlEntitySet", function() { return CsdlEntitySet; });
var CsdlEntitySet = /** @class */ (function () {
    function CsdlEntitySet(name, entityType, navigationPropertyBinding, includeInServiceDocument) {
        this.name = name;
        this.entityType = entityType;
        this.navigationPropertyBinding = navigationPropertyBinding;
        this.includeInServiceDocument = includeInServiceDocument;
    }
    return CsdlEntitySet;
}());



/***/ }),

/***/ "./src/app/odata/odata-response/csdl/csdl-enum-type.ts":
/*!*************************************************************!*\
  !*** ./src/app/odata/odata-response/csdl/csdl-enum-type.ts ***!
  \*************************************************************/
/*! exports provided: CsdlEnumType, CsdlEnumMember */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlEnumType", function() { return CsdlEnumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlEnumMember", function() { return CsdlEnumMember; });
var CsdlEnumType = /** @class */ (function () {
    function CsdlEnumType(name, members, underlyingType, isFlags) {
        this.name = name;
        this.members = members;
        this.underlyingType = underlyingType;
        this.isFlags = isFlags;
    }
    return CsdlEnumType;
}());

var CsdlEnumMember = /** @class */ (function () {
    function CsdlEnumMember(name, value) {
        this.name = name;
        this.value = value;
    }
    return CsdlEnumMember;
}());



/***/ }),

/***/ "./src/app/odata/odata-response/csdl/csdl-function-action.ts":
/*!*******************************************************************!*\
  !*** ./src/app/odata/odata-response/csdl/csdl-function-action.ts ***!
  \*******************************************************************/
/*! exports provided: CsdlFunction, CsdlAction, CsdlFunctionImport, CsdlActionImport, CsdlParameter, CsdlReturnType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlFunction", function() { return CsdlFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlAction", function() { return CsdlAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlFunctionImport", function() { return CsdlFunctionImport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlActionImport", function() { return CsdlActionImport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlParameter", function() { return CsdlParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlReturnType", function() { return CsdlReturnType; });
var CsdlFunction = /** @class */ (function () {
    function CsdlFunction(name, returnType, isBound, entitySetPath, isComposable, parameters) {
        this.name = name;
        this.returnType = returnType;
        this.isBound = isBound;
        this.entitySetPath = entitySetPath;
        this.isComposable = isComposable;
        this.parameters = parameters;
    }
    return CsdlFunction;
}());

var CsdlAction = /** @class */ (function () {
    function CsdlAction(name, returnType, isBound, entitySetPath, parameters) {
        this.name = name;
        this.returnType = returnType;
        this.isBound = isBound;
        this.entitySetPath = entitySetPath;
        this.parameters = parameters;
    }
    return CsdlAction;
}());

var CsdlFunctionImport = /** @class */ (function () {
    function CsdlFunctionImport(name, functionName, entitySet, IncludeInServiceDocument) {
        this.name = name;
        this.functionName = functionName;
        this.entitySet = entitySet;
        this.IncludeInServiceDocument = IncludeInServiceDocument;
    }
    return CsdlFunctionImport;
}());

var CsdlActionImport = /** @class */ (function () {
    function CsdlActionImport(name, action, entitySet) {
        this.name = name;
        this.action = action;
        this.entitySet = entitySet;
    }
    return CsdlActionImport;
}());

var CsdlParameter = /** @class */ (function () {
    function CsdlParameter(name, type, nullable, maxLength, precision, scale, srid) {
        this.name = name;
        this.type = type;
        this.nullable = nullable;
        this.maxLength = maxLength;
        this.precision = precision;
        this.scale = scale;
        this.srid = srid;
    }
    return CsdlParameter;
}());

var CsdlReturnType = /** @class */ (function () {
    function CsdlReturnType(type, nullable, maxLength, precision, scale, srid) {
        this.type = type;
        this.nullable = nullable;
        this.maxLength = maxLength;
        this.precision = precision;
        this.scale = scale;
        this.srid = srid;
    }
    return CsdlReturnType;
}());



/***/ }),

/***/ "./src/app/odata/odata-response/csdl/csdl-navigation-property-binding.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/odata/odata-response/csdl/csdl-navigation-property-binding.ts ***!
  \*******************************************************************************/
/*! exports provided: CsdlNavigationPropertyBinding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlNavigationPropertyBinding", function() { return CsdlNavigationPropertyBinding; });
var CsdlNavigationPropertyBinding = /** @class */ (function () {
    function CsdlNavigationPropertyBinding(path, target) {
        this.path = path;
        this.target = target;
    }
    return CsdlNavigationPropertyBinding;
}());



/***/ }),

/***/ "./src/app/odata/odata-response/csdl/csdl-reference.ts":
/*!*************************************************************!*\
  !*** ./src/app/odata/odata-response/csdl/csdl-reference.ts ***!
  \*************************************************************/
/*! exports provided: CsdlReference, CsdlInclude, CsdlIncludeAnnotations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlReference", function() { return CsdlReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlInclude", function() { return CsdlInclude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlIncludeAnnotations", function() { return CsdlIncludeAnnotations; });
/* harmony import */ var _csdl_annotation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csdl-annotation */ "./src/app/odata/odata-response/csdl/csdl-annotation.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CsdlReference = /** @class */ (function (_super) {
    __extends(CsdlReference, _super);
    function CsdlReference(uri, includes, includeAnnotations, annotationList) {
        var _this = _super.call(this, annotationList) || this;
        _this.uri = uri;
        _this.includes = includes;
        _this.includeAnnotations = includeAnnotations;
        return _this;
    }
    return CsdlReference;
}(_csdl_annotation__WEBPACK_IMPORTED_MODULE_0__["CsdlAnnotable"]));

var CsdlInclude = /** @class */ (function () {
    function CsdlInclude(namespace, alias) {
        this.namespace = namespace;
        this.alias = alias;
    }
    return CsdlInclude;
}());

var CsdlIncludeAnnotations = /** @class */ (function () {
    function CsdlIncludeAnnotations(termNamespace, qualifier, targetNamespace) {
        this.termNamespace = termNamespace;
        this.qualifier = qualifier;
        this.targetNamespace = targetNamespace;
    }
    return CsdlIncludeAnnotations;
}());



/***/ }),

/***/ "./src/app/odata/odata-response/csdl/csdl-schema.ts":
/*!**********************************************************!*\
  !*** ./src/app/odata/odata-response/csdl/csdl-schema.ts ***!
  \**********************************************************/
/*! exports provided: CsdlSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlSchema", function() { return CsdlSchema; });
/* harmony import */ var _csdl_annotation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csdl-annotation */ "./src/app/odata/odata-response/csdl/csdl-annotation.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CsdlSchema = /** @class */ (function (_super) {
    __extends(CsdlSchema, _super);
    function CsdlSchema(namespace, alias, enumTypes, complexTypes, entityTypes, functions, actions, entityContainer, typeDefinitions, terms, annotationsList, annotationList) {
        var _this = _super.call(this, annotationList) || this;
        _this.namespace = namespace;
        _this.alias = alias;
        _this.enumTypes = enumTypes;
        _this.complexTypes = complexTypes;
        _this.entityTypes = entityTypes;
        _this.functions = functions;
        _this.actions = actions;
        _this.entityContainer = entityContainer;
        _this.typeDefinitions = typeDefinitions;
        _this.terms = terms;
        _this.annotationsList = annotationsList;
        return _this;
    }
    return CsdlSchema;
}(_csdl_annotation__WEBPACK_IMPORTED_MODULE_0__["CsdlAnnotable"]));



/***/ }),

/***/ "./src/app/odata/odata-response/csdl/csdl-singleton.ts":
/*!*************************************************************!*\
  !*** ./src/app/odata/odata-response/csdl/csdl-singleton.ts ***!
  \*************************************************************/
/*! exports provided: CsdlSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlSingleton", function() { return CsdlSingleton; });
var CsdlSingleton = /** @class */ (function () {
    function CsdlSingleton(name, type, navigationPropertyBindings) {
        this.name = name;
        this.type = type;
        this.navigationPropertyBindings = navigationPropertyBindings;
    }
    return CsdlSingleton;
}());



/***/ }),

/***/ "./src/app/odata/odata-response/csdl/csdl-structural-property.ts":
/*!***********************************************************************!*\
  !*** ./src/app/odata/odata-response/csdl/csdl-structural-property.ts ***!
  \***********************************************************************/
/*! exports provided: CsdlStructuralProperty, CsdlProperty, CsdlNavigationProperty, CsdlReferentialConstraint, CsdlOnDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlStructuralProperty", function() { return CsdlStructuralProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlProperty", function() { return CsdlProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlNavigationProperty", function() { return CsdlNavigationProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlReferentialConstraint", function() { return CsdlReferentialConstraint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlOnDelete", function() { return CsdlOnDelete; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CsdlStructuralProperty = /** @class */ (function () {
    function CsdlStructuralProperty(name, type, nullable) {
        this.name = name;
        this.type = type;
        this.nullable = nullable;
    }
    return CsdlStructuralProperty;
}());

var CsdlProperty = /** @class */ (function (_super) {
    __extends(CsdlProperty, _super);
    function CsdlProperty(name, type, nullable, maxLength, precision, scale, unicode, srid, defaultValue) {
        var _this = _super.call(this, name, type, nullable) || this;
        _this.maxLength = maxLength;
        _this.precision = precision;
        _this.scale = scale;
        _this.unicode = unicode;
        _this.srid = srid;
        _this.defaultValue = defaultValue;
        return _this;
    }
    return CsdlProperty;
}(CsdlStructuralProperty));

var CsdlNavigationProperty = /** @class */ (function (_super) {
    __extends(CsdlNavigationProperty, _super);
    function CsdlNavigationProperty(name, type, nullable, partner, containsTarget, referentialConstraints, onDelete) {
        var _this = _super.call(this, name, type, nullable) || this;
        _this.partner = partner;
        _this.containsTarget = containsTarget;
        _this.referentialConstraints = referentialConstraints;
        _this.onDelete = onDelete;
        return _this;
    }
    return CsdlNavigationProperty;
}(CsdlStructuralProperty));

var CsdlReferentialConstraint = /** @class */ (function () {
    function CsdlReferentialConstraint(property, referencedProperty) {
        this.property = property;
        this.referencedProperty = referencedProperty;
    }
    return CsdlReferentialConstraint;
}());

var CsdlOnDelete = /** @class */ (function () {
    function CsdlOnDelete(action) {
        this.action = action;
    }
    return CsdlOnDelete;
}());



/***/ }),

/***/ "./src/app/odata/odata-response/csdl/csdl-structured-type.ts":
/*!*******************************************************************!*\
  !*** ./src/app/odata/odata-response/csdl/csdl-structured-type.ts ***!
  \*******************************************************************/
/*! exports provided: CsdlStructuredType, CsdlComplexType, CsdlEntityType, CsdlKey, CsdlPropertyRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlStructuredType", function() { return CsdlStructuredType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlComplexType", function() { return CsdlComplexType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlEntityType", function() { return CsdlEntityType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlKey", function() { return CsdlKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlPropertyRef", function() { return CsdlPropertyRef; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CsdlStructuredType = /** @class */ (function () {
    function CsdlStructuredType(name, properties, navigationProperties, baseType, openType, abstract) {
        this.name = name;
        this.properties = properties;
        this.navigationProperties = navigationProperties;
        this.baseType = baseType;
        this.openType = openType;
        this.abstract = abstract;
    }
    return CsdlStructuredType;
}());

var CsdlComplexType = /** @class */ (function (_super) {
    __extends(CsdlComplexType, _super);
    function CsdlComplexType(name, properties, navigationProperties, baseType, openType, abstract) {
        return _super.call(this, name, properties, navigationProperties, baseType, openType, abstract) || this;
    }
    return CsdlComplexType;
}(CsdlStructuredType));

var CsdlEntityType = /** @class */ (function (_super) {
    __extends(CsdlEntityType, _super);
    function CsdlEntityType(name, key, properties, navigationProperties, baseType, openType, abstract, hasStream) {
        var _this = _super.call(this, name, properties, navigationProperties, baseType, openType, abstract) || this;
        _this.key = key;
        _this.hasStream = hasStream;
        return _this;
    }
    return CsdlEntityType;
}(CsdlStructuredType));

var CsdlKey = /** @class */ (function () {
    function CsdlKey(propertyRefs) {
        this.propertyRefs = propertyRefs;
    }
    return CsdlKey;
}());

var CsdlPropertyRef = /** @class */ (function () {
    function CsdlPropertyRef(name, alias) {
        this.name = name;
        this.alias = alias;
    }
    return CsdlPropertyRef;
}());



/***/ }),

/***/ "./src/app/odata/odata-response/csdl/csdl-type-definition.ts":
/*!*******************************************************************!*\
  !*** ./src/app/odata/odata-response/csdl/csdl-type-definition.ts ***!
  \*******************************************************************/
/*! exports provided: CsdlTypeDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdlTypeDefinition", function() { return CsdlTypeDefinition; });
/* harmony import */ var _csdl_annotation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csdl-annotation */ "./src/app/odata/odata-response/csdl/csdl-annotation.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CsdlTypeDefinition = /** @class */ (function (_super) {
    __extends(CsdlTypeDefinition, _super);
    function CsdlTypeDefinition(name, underlayingType, maxLength, precision, scale, unicode, srid, annotationList) {
        var _this = _super.call(this, annotationList) || this;
        _this.name = name;
        _this.underlayingType = underlayingType;
        _this.maxLength = maxLength;
        _this.precision = precision;
        _this.scale = scale;
        _this.unicode = unicode;
        _this.srid = srid;
        return _this;
    }
    return CsdlTypeDefinition;
}(_csdl_annotation__WEBPACK_IMPORTED_MODULE_0__["CsdlAnnotable"]));



/***/ }),

/***/ "./src/app/odata/odata-response/entity-collection.ts":
/*!***********************************************************!*\
  !*** ./src/app/odata/odata-response/entity-collection.ts ***!
  \***********************************************************/
/*! exports provided: EntitySet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitySet", function() { return EntitySet; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/app/odata/utils/utils.ts");

var EntitySet = /** @class */ (function () {
    function EntitySet(entities, count) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].requireNotNullNorUndefined(entities, 'entities');
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



/***/ }),

/***/ "./src/app/odata/odata-response/metadata.ts":
/*!**************************************************!*\
  !*** ./src/app/odata/odata-response/metadata.ts ***!
  \**************************************************/
/*! exports provided: FieldType, Field, Metadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldType", function() { return FieldType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Metadata", function() { return Metadata; });
/* harmony import */ var _csdl_csdl_type_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csdl/csdl-type-definition */ "./src/app/odata/odata-response/csdl/csdl-type-definition.ts");
/* harmony import */ var _csdl_csdl_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./csdl/csdl-schema */ "./src/app/odata/odata-response/csdl/csdl-schema.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./src/app/odata/utils/utils.ts");
/* harmony import */ var _csdl_csdl_enum_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./csdl/csdl-enum-type */ "./src/app/odata/odata-response/csdl/csdl-enum-type.ts");
/* harmony import */ var _csdl_csdl_structured_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./csdl/csdl-structured-type */ "./src/app/odata/odata-response/csdl/csdl-structured-type.ts");
/* harmony import */ var _csdl_csdl_function_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./csdl/csdl-function-action */ "./src/app/odata/odata-response/csdl/csdl-function-action.ts");
/* harmony import */ var _csdl_csdl_structural_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./csdl/csdl-structural-property */ "./src/app/odata/odata-response/csdl/csdl-structural-property.ts");
/* harmony import */ var _csdl_csdl_entity_set__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./csdl/csdl-entity-set */ "./src/app/odata/odata-response/csdl/csdl-entity-set.ts");
/* harmony import */ var _csdl_csdl_singleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./csdl/csdl-singleton */ "./src/app/odata/odata-response/csdl/csdl-singleton.ts");
/* harmony import */ var _csdl_csdl_entity_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./csdl/csdl-entity-container */ "./src/app/odata/odata-response/csdl/csdl-entity-container.ts");
/* harmony import */ var _csdl_csdl_reference__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./csdl/csdl-reference */ "./src/app/odata/odata-response/csdl/csdl-reference.ts");
/* harmony import */ var _csdl_csdl_annotation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./csdl/csdl-annotation */ "./src/app/odata/odata-response/csdl/csdl-annotation.ts");
/* harmony import */ var _csdl_csdl_navigation_property_binding__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./csdl/csdl-navigation-property-binding */ "./src/app/odata/odata-response/csdl/csdl-navigation-property-binding.ts");













var FieldType;
(function (FieldType) {
    FieldType[FieldType["ATTRIBUTE"] = 0] = "ATTRIBUTE";
    FieldType[FieldType["TAG"] = 1] = "TAG";
})(FieldType || (FieldType = {}));
var Field = /** @class */ (function () {
    function Field(name, fieldType) {
        this.name = name;
        this.fieldType = fieldType;
    }
    return Field;
}());

var Metadata = /** @class */ (function () {
    function Metadata(xml) {
        try {
            var parser = new DOMParser();
            var document_1 = parser.parseFromString(xml, 'text/xml');
            this.checkVersion(document_1);
            this.version = this.getFieldValueByAttribute(new Field(Metadata.ATTRIBUTE_VERSION, FieldType.ATTRIBUTE), document_1.documentElement.attributes);
            this.references = this.getObjects(document_1.documentElement, Metadata.TAG_REFERENCE, [
                new Field(Metadata.ATTRIBUTE_URI, FieldType.ATTRIBUTE),
                new Field(Metadata.TAG_INCLUDE, FieldType.TAG),
                new Field(Metadata.TAG_INCLUDE_ANNOTATIONS, FieldType.TAG),
                new Field(Metadata.TAG_ANNOTATION, FieldType.TAG)
            ]);
            var dataServices = document_1.documentElement.getElementsByTagName(Metadata.TAG_DATA_SERVICES)[0];
            this.schemas = this.getObjects(dataServices, Metadata.TAG_SCHEMA, [
                new Field(Metadata.ATTRIBUTE_NAMESPACE, FieldType.ATTRIBUTE),
                new Field(Metadata.ATTRIBUTE_ALIAS, FieldType.ATTRIBUTE),
                new Field(Metadata.TAG_ENUM_TYPE, FieldType.TAG),
                new Field(Metadata.TAG_COMPLEX_TYPE, FieldType.TAG),
                new Field(Metadata.TAG_ENTITY_TYPE, FieldType.TAG),
                new Field(Metadata.TAG_FUNCTION, FieldType.TAG),
                new Field(Metadata.TAG_ACTION, FieldType.TAG),
                new Field(Metadata.TAG_ENTITY_CONTAINER, FieldType.TAG),
                new Field(Metadata.TAG_TYPE_DEFINITION, FieldType.TAG),
                new Field(Metadata.TAG_TERM, FieldType.TAG),
                new Field(Metadata.TAG_ANNOTATIONS, FieldType.TAG),
                new Field(Metadata.TAG_ANNOTATION, FieldType.TAG)
            ]);
        }
        catch (error) {
            throw new Error('Unable to parse metadata, ' + error);
        }
    }
    Metadata.prototype.checkVersion = function (document) {
        // check version
        var attributes = document.documentElement.attributes;
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(attributes)) {
            throw new Error('OData version is not specified in the metadata');
        }
        var attr = attributes.getNamedItem('Version');
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(attr)) {
            throw new Error('OData version is not specified in the metadata');
        }
        var odataVersion = attr.nodeValue;
        if (odataVersion !== '4.0') {
            throw new Error('OData version "' + odataVersion + '" is not supported');
        }
    };
    Metadata.prototype.getObjects = function (parentElement, tag, fieldNames) {
        var objects;
        var children = parentElement.children;
        for (var index = 0; index < children.length; index++) {
            var element = children.item(index);
            if (element.nodeName !== tag) {
                continue;
            }
            var attributes = element.attributes;
            var fieldValues = this.getFieldValues(fieldNames, attributes, element);
            if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(objects)) {
                objects = [];
            }
            switch (tag) {
                case Metadata.TAG_REFERENCE:
                    objects.push(new _csdl_csdl_reference__WEBPACK_IMPORTED_MODULE_10__["CsdlReference"](fieldValues[0], fieldValues[1], fieldValues[2], fieldValues[3]));
                    break;
                case Metadata.TAG_INCLUDE:
                    objects.push(new _csdl_csdl_reference__WEBPACK_IMPORTED_MODULE_10__["CsdlInclude"](fieldValues[0], fieldValues[1]));
                    break;
                case Metadata.TAG_INCLUDE_ANNOTATIONS:
                    objects.push(new _csdl_csdl_reference__WEBPACK_IMPORTED_MODULE_10__["CsdlIncludeAnnotations"](fieldValues[0], fieldValues[1], fieldValues[2]));
                    break;
                case Metadata.TAG_TERM:
                    objects.push(new _csdl_csdl_annotation__WEBPACK_IMPORTED_MODULE_11__["CsdlTerm"](fieldValues[0], fieldValues[1], fieldValues[2], fieldValues[3], fieldValues[4], fieldValues[5], fieldValues[6], fieldValues[7], fieldValues[8], fieldValues[9]));
                    break;
                case Metadata.TAG_ANNOTATIONS:
                    objects.push(new _csdl_csdl_annotation__WEBPACK_IMPORTED_MODULE_11__["CsdlAnnotations"](fieldValues[0], fieldValues[1], fieldValues[2]));
                    break;
                case Metadata.TAG_ANNOTATION:
                    objects.push(new _csdl_csdl_annotation__WEBPACK_IMPORTED_MODULE_11__["CsdlAnnotation"](fieldValues[0], fieldValues[1]));
                    break;
                case Metadata.TAG_SCHEMA:
                    objects.push(new _csdl_csdl_schema__WEBPACK_IMPORTED_MODULE_1__["CsdlSchema"](fieldValues[0], fieldValues[1], fieldValues[2], fieldValues[3], fieldValues[4], fieldValues[5], fieldValues[6], fieldValues[7], fieldValues[8], fieldValues[9], fieldValues[10], fieldValues[11]));
                    break;
                case Metadata.TAG_ENUM_TYPE:
                    objects.push(new _csdl_csdl_enum_type__WEBPACK_IMPORTED_MODULE_3__["CsdlEnumType"](fieldValues[0], fieldValues[1], fieldValues[2], fieldValues[3]));
                    break;
                case Metadata.TAG_COMPLEX_TYPE:
                    objects.push(new _csdl_csdl_structured_type__WEBPACK_IMPORTED_MODULE_4__["CsdlComplexType"](fieldValues[0], fieldValues[1], fieldValues[2], fieldValues[3], fieldValues[4], fieldValues[5]));
                    break;
                case Metadata.TAG_ENTITY_TYPE:
                    objects.push(new _csdl_csdl_structured_type__WEBPACK_IMPORTED_MODULE_4__["CsdlEntityType"](fieldValues[0], fieldValues[1], fieldValues[2], fieldValues[3], fieldValues[4], fieldValues[5], fieldValues[6], fieldValues[7]));
                    break;
                case Metadata.TAG_FUNCTION:
                    objects.push(new _csdl_csdl_function_action__WEBPACK_IMPORTED_MODULE_5__["CsdlFunction"](fieldValues[0], fieldValues[1], fieldValues[2], fieldValues[3], fieldValues[4], fieldValues[5]));
                    break;
                case Metadata.TAG_MEMBER:
                    objects.push(new _csdl_csdl_enum_type__WEBPACK_IMPORTED_MODULE_3__["CsdlEnumMember"](fieldValues[0], fieldValues[1]));
                    break;
                case Metadata.TAG_PROPERTY:
                    objects.push(new _csdl_csdl_structural_property__WEBPACK_IMPORTED_MODULE_6__["CsdlProperty"](fieldValues[0], fieldValues[1], fieldValues[2], fieldValues[3], fieldValues[4], fieldValues[5], fieldValues[6], fieldValues[7], fieldValues[8]));
                    break;
                case Metadata.TAG_PROPERTY_REF:
                    objects.push(new _csdl_csdl_structured_type__WEBPACK_IMPORTED_MODULE_4__["CsdlPropertyRef"](fieldValues[0], fieldValues[1]));
                    break;
                case Metadata.TAG_NAVIGATION_PROPERTY:
                    objects.push(new _csdl_csdl_structural_property__WEBPACK_IMPORTED_MODULE_6__["CsdlNavigationProperty"](fieldValues[0], fieldValues[1], fieldValues[2], fieldValues[3], fieldValues[4], fieldValues[5], fieldValues[6]));
                    break;
                case Metadata.TAG_REFERENTIAL_CONSTRAINT:
                    objects.push(new _csdl_csdl_structural_property__WEBPACK_IMPORTED_MODULE_6__["CsdlReferentialConstraint"](fieldValues[0], fieldValues[1]));
                    break;
                case Metadata.TAG_PARAMETER:
                    objects.push(new _csdl_csdl_function_action__WEBPACK_IMPORTED_MODULE_5__["CsdlParameter"](fieldValues[0], fieldValues[1], fieldValues[2], fieldValues[3], fieldValues[4], fieldValues[5], fieldValues[6]));
                    break;
                case Metadata.TAG_ACTION:
                    objects.push(new _csdl_csdl_function_action__WEBPACK_IMPORTED_MODULE_5__["CsdlAction"](fieldValues[0], fieldValues[1], fieldValues[2], fieldValues[3], fieldValues[4]));
                    break;
                case Metadata.TAG_ENTITY_SET:
                    objects.push(new _csdl_csdl_entity_set__WEBPACK_IMPORTED_MODULE_7__["CsdlEntitySet"](fieldValues[0], fieldValues[1], fieldValues[2], fieldValues[3]));
                    break;
                case Metadata.TAG_SINGLETON:
                    objects.push(new _csdl_csdl_singleton__WEBPACK_IMPORTED_MODULE_8__["CsdlSingleton"](fieldValues[0], fieldValues[1], fieldValues[2]));
                    break;
                case Metadata.TAG_FUNCTION_IMPORT:
                    objects.push(new _csdl_csdl_function_action__WEBPACK_IMPORTED_MODULE_5__["CsdlFunctionImport"](fieldValues[0], fieldValues[1], fieldValues[2], fieldValues[3]));
                    break;
                case Metadata.TAG_ACTION_IMPORT:
                    objects.push(new _csdl_csdl_function_action__WEBPACK_IMPORTED_MODULE_5__["CsdlActionImport"](fieldValues[0], fieldValues[1], fieldValues[2]));
                    break;
                case Metadata.TAG_NAVIGATION_PROPERTY_BINDING:
                    objects.push(new _csdl_csdl_navigation_property_binding__WEBPACK_IMPORTED_MODULE_12__["CsdlNavigationPropertyBinding"](fieldValues[0], fieldValues[1]));
                    break;
                case Metadata.TAG_TYPE_DEFINITION:
                    objects.push(new _csdl_csdl_type_definition__WEBPACK_IMPORTED_MODULE_0__["CsdlTypeDefinition"](fieldValues[0], fieldValues[1], fieldValues[2], fieldValues[3], fieldValues[4], fieldValues[5], fieldValues[6], fieldValues[7]));
                    break;
                default: throw new Error('Unknwon tag:' + tag);
            }
        }
        return objects;
    };
    Metadata.prototype.getObject = function (parentElement, tag, fieldNames) {
        var object;
        var children = parentElement.children;
        var element;
        for (var index = 0; index < children.length; index++) {
            if (children.item(index).nodeName === tag) {
                if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNotNullNorUndefined(element)) {
                    throw new Error('Expected one ' + tag);
                }
                element = children.item(index);
            }
        }
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNotNullNorUndefined(element)) {
            var attributes = element.attributes;
            var fieldValues = this.getFieldValues(fieldNames, attributes, element);
            switch (tag) {
                case Metadata.TAG_KEY:
                    object = new _csdl_csdl_structured_type__WEBPACK_IMPORTED_MODULE_4__["CsdlKey"](fieldValues[0]);
                    break;
                case Metadata.TAG_RETURN_TYPE:
                    object = new _csdl_csdl_function_action__WEBPACK_IMPORTED_MODULE_5__["CsdlReturnType"](fieldValues[0], fieldValues[1], fieldValues[2], fieldValues[3], fieldValues[4], fieldValues[5]);
                    break;
                case Metadata.TAG_ENTITY_CONTAINER:
                    object = new _csdl_csdl_entity_container__WEBPACK_IMPORTED_MODULE_9__["CsdlEntityContainer"](fieldValues[0], fieldValues[1], fieldValues[2], fieldValues[3], fieldValues[4], fieldValues[5]);
                    break;
                case Metadata.TAG_ON_DELETE:
                    object = new _csdl_csdl_structural_property__WEBPACK_IMPORTED_MODULE_6__["CsdlOnDelete"](fieldValues[0]);
                    break;
                default: throw new Error('Unknwon tag:' + tag);
            }
        }
        return object;
    };
    Metadata.prototype.getFieldValues = function (fields, attributes, element) {
        var fieldValues = [];
        for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
            var field = fields_1[_i];
            if (field.fieldType === FieldType.TAG) {
                fieldValues.push(this.getFieldValueByTag(field, element));
            }
            else if (field.fieldType === FieldType.ATTRIBUTE) {
                fieldValues.push(this.getFieldValueByAttribute(field, attributes));
            }
            else {
                throw new Error('Unknown field type: ' + field.fieldType);
            }
        }
        return fieldValues;
    };
    Metadata.prototype.getFieldValueByAttribute = function (field, attributes) {
        switch (field.name) {
            case Metadata.ATTRIBUTE_VERSION:
            case Metadata.ATTRIBUTE_URI:
            case Metadata.ATTRIBUTE_NAMESPACE:
            case Metadata.ATTRIBUTE_ALIAS:
            case Metadata.ATTRIBUTE_TERM_NAMESPACE:
            case Metadata.ATTRIBUTE_TERM:
            case Metadata.ATTRIBUTE_QUALIFIER:
            case Metadata.ATTRIBUTE_TARGET_NAMESPACE:
            case Metadata.ATTRIBUTE_NAME:
            case Metadata.ATTRIBUTE_TYPE:
            case Metadata.ATTRIBUTE_SRID:
            case Metadata.ATTRIBUTE_DEFAULT_VALUE:
            case Metadata.ATTRIBUTE_PARTNER:
            case Metadata.ATTRIBUTE_PROPERTY:
            case Metadata.ATTRIBUTE_REFERENCED_PROPERTY:
            case Metadata.ATTRIBUTE_BASE_TYPE:
            case Metadata.ATTRIBUTE_ENTITY_SET_PATH:
            case Metadata.ATTRIBUTE_ENTITY_TYPE:
            case Metadata.ATTRIBUTE_PATH:
            case Metadata.ATTRIBUTE_TARGET:
            case Metadata.ATTRIBUTE_FUNCTION:
            case Metadata.ATTRIBUTE_ACTION:
            case Metadata.ATTRIBUTE_ENTITY_SET:
            case Metadata.ATTRIBUTE_UNDERLYING_TYPE:
            case Metadata.ATTRIBUTE_EXTENDS:
            case Metadata.ATTRIBUTE_BASE_TERM:
            case Metadata.ATTRIBUTE_APPLIES_TO:
                return this.getAttributeValue(attributes, field.name);
            case Metadata.ATTRIBUTE_NULLABLE:
            case Metadata.ATTRIBUTE_UNICODE:
            case Metadata.ATTRIBUTE_OPEN_TYPE:
            case Metadata.ATTRIBUTE_HAS_STREAM:
            case Metadata.ATTRIBUTE_IS_BOUND:
            case Metadata.ATTRIBUTE_IS_COMPOSABLE:
            case Metadata.ATTRIBUTE_CONTAINS_TARGET:
            case Metadata.ATTRIBUTE_INCLUDE_IN_SERVICE_DOCUMENT:
            case Metadata.ATTRIBUTE_ABSTRACT:
            case Metadata.ATTRIBUTE_IS_FLAGS:
                return this.propertyValueToBoolean(this.getAttributeValue(attributes, field.name));
            case Metadata.ATTRIBUTE_VALUE:
            case Metadata.ATTRIBUTE_MAX_LENGTH:
            case Metadata.ATTRIBUTE_PRECISION:
            case Metadata.ATTRIBUTE_SCALE:
                return this.propertyValueToNumber(this.getAttributeValue(attributes, field.name));
            default: throw new Error('Unknwon attribute:' + field.name);
        }
    };
    Metadata.prototype.getFieldValueByTag = function (field, element) {
        switch (field.name) {
            case Metadata.TAG_INCLUDE:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAMESPACE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_ALIAS, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_INCLUDE_ANNOTATIONS:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_TERM_NAMESPACE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_QUALIFIER, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_TARGET_NAMESPACE, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_TERM:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_BASE_TERM, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_DEFAULT_VALUE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_APPLIES_TO, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_NULLABLE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_MAX_LENGTH, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_PRECISION, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_SCALE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_SRID, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_ANNOTATIONS:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_TARGET, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_ANNOTATION, FieldType.TAG),
                    new Field(Metadata.ATTRIBUTE_QUALIFIER, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_ANNOTATION:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_TERM, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_QUALIFIER, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_ENUM_TYPE:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_MEMBER, FieldType.TAG),
                    new Field(Metadata.ATTRIBUTE_UNDERLYING_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_IS_FLAGS, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_COMPLEX_TYPE:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_PROPERTY, FieldType.TAG),
                    new Field(Metadata.TAG_NAVIGATION_PROPERTY, FieldType.TAG),
                    new Field(Metadata.ATTRIBUTE_BASE_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_OPEN_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_ABSTRACT, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_ENTITY_TYPE:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_KEY, FieldType.TAG),
                    new Field(Metadata.TAG_PROPERTY, FieldType.TAG),
                    new Field(Metadata.TAG_NAVIGATION_PROPERTY, FieldType.TAG),
                    new Field(Metadata.ATTRIBUTE_BASE_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_OPEN_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_HAS_STREAM, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_ABSTRACT, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_FUNCTION:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_RETURN_TYPE, FieldType.TAG),
                    new Field(Metadata.ATTRIBUTE_IS_BOUND, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_ENTITY_SET_PATH, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_IS_COMPOSABLE, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_PARAMETER, FieldType.TAG)
                ]);
            case Metadata.TAG_MEMBER:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_VALUE, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_PROPERTY:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_NULLABLE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_MAX_LENGTH, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_PRECISION, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_SCALE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_UNICODE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_SRID, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_DEFAULT_VALUE, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_KEY:
                return this.getObject(element, field.name, [
                    new Field(Metadata.TAG_PROPERTY_REF, FieldType.TAG)
                ]);
            case Metadata.TAG_PROPERTY_REF:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_ALIAS, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_NAVIGATION_PROPERTY:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_NULLABLE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_PARTNER, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_CONTAINS_TARGET, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_REFERENTIAL_CONSTRAINT, FieldType.TAG),
                    new Field(Metadata.TAG_ON_DELETE, FieldType.TAG)
                ]);
            case Metadata.TAG_REFERENTIAL_CONSTRAINT:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_PROPERTY, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_REFERENCED_PROPERTY, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_ON_DELETE:
                return this.getObject(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_ACTION, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_PARAMETER:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_NULLABLE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_MAX_LENGTH, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_PRECISION, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_SCALE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_SRID, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_RETURN_TYPE:
                return this.getObject(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_NULLABLE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_MAX_LENGTH, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_PRECISION, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_SCALE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_SRID, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_ACTION:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_RETURN_TYPE, FieldType.TAG),
                    new Field(Metadata.ATTRIBUTE_IS_BOUND, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_ENTITY_SET_PATH, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_PARAMETER, FieldType.TAG)
                ]);
            case Metadata.TAG_ENTITY_CONTAINER:
                return this.getObject(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_EXTENDS, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_ENTITY_SET, FieldType.TAG),
                    new Field(Metadata.TAG_SINGLETON, FieldType.TAG),
                    new Field(Metadata.TAG_FUNCTION_IMPORT, FieldType.TAG),
                    new Field(Metadata.TAG_ACTION_IMPORT, FieldType.TAG)
                ]);
            case Metadata.TAG_ENTITY_SET:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_ENTITY_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_NAVIGATION_PROPERTY_BINDING, FieldType.TAG),
                    new Field(Metadata.ATTRIBUTE_INCLUDE_IN_SERVICE_DOCUMENT, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_SINGLETON:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_NAVIGATION_PROPERTY_BINDING, FieldType.TAG)
                ]);
            case Metadata.TAG_FUNCTION_IMPORT:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_FUNCTION, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_ENTITY_SET, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_INCLUDE_IN_SERVICE_DOCUMENT, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_ACTION_IMPORT:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_ACTION, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_ENTITY_SET, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_NAVIGATION_PROPERTY_BINDING:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_PATH, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_TARGET, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_TYPE_DEFINITION:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_UNDERLYING_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_MAX_LENGTH, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_PRECISION, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_SCALE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_UNICODE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_SRID, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_ANNOTATION, FieldType.TAG)
                ]);
            default: throw new Error('Unknwon tag:' + field.name);
        }
    };
    Metadata.prototype.getAttributeValue = function (attributes, attributeName) {
        var attribute = attributes.getNamedItem(attributeName);
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNotNullNorUndefined(attribute)) {
            return attribute.nodeValue;
        }
        return undefined;
    };
    Metadata.prototype.propertyValueToNumber = function (attributeValue) {
        return _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNotNullNorUndefined(attributeValue) ? Number(attributeValue) : undefined;
    };
    Metadata.prototype.propertyValueToBoolean = function (attributeValue) {
        return _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNotNullNorUndefined(attributeValue) ? attributeValue === 'true' : undefined;
    };
    // TAGS
    Metadata.TAG_EDMX = 'edmx:Edmx';
    Metadata.TAG_DATA_SERVICES = 'edmx:DataServices';
    Metadata.TAG_REFERENCE = 'edmx:Reference';
    Metadata.TAG_INCLUDE = 'edmx:Include';
    Metadata.TAG_INCLUDE_ANNOTATIONS = 'edmx:IncludeAnnotations';
    Metadata.TAG_TERM = 'Term';
    Metadata.TAG_ANNOTATIONS = 'Annotations';
    Metadata.TAG_ANNOTATION = 'Annotation';
    Metadata.TAG_SCHEMA = 'Schema';
    Metadata.TAG_ENUM_TYPE = 'EnumType';
    Metadata.TAG_MEMBER = 'Member';
    Metadata.TAG_COMPLEX_TYPE = 'ComplexType';
    Metadata.TAG_ENTITY_TYPE = 'EntityType';
    Metadata.TAG_PROPERTY = 'Property';
    Metadata.TAG_KEY = 'Key';
    Metadata.TAG_PROPERTY_REF = 'PropertyRef';
    Metadata.TAG_NAVIGATION_PROPERTY = 'NavigationProperty';
    Metadata.TAG_REFERENTIAL_CONSTRAINT = 'ReferentialConstraint';
    Metadata.TAG_ON_DELETE = 'OnDelete';
    Metadata.TAG_FUNCTION = 'Function';
    Metadata.TAG_RETURN_TYPE = 'ReturnType';
    Metadata.TAG_PARAMETER = 'Parameter';
    Metadata.TAG_ACTION = 'Action';
    Metadata.TAG_ENTITY_CONTAINER = 'EntityContainer';
    Metadata.TAG_ENTITY_SET = 'EntitySet';
    Metadata.TAG_SINGLETON = 'Singleton';
    Metadata.TAG_FUNCTION_IMPORT = 'FunctionImport';
    Metadata.TAG_ACTION_IMPORT = 'ActionImport';
    Metadata.TAG_NAVIGATION_PROPERTY_BINDING = 'NavigationPropertyBinding';
    Metadata.TAG_TYPE_DEFINITION = 'TypeDefinition';
    // ATTRIBUTES
    Metadata.ATTRIBUTE_VERSION = 'Version';
    Metadata.ATTRIBUTE_URI = 'Uri';
    Metadata.ATTRIBUTE_ALIAS = 'Alias';
    Metadata.ATTRIBUTE_NAMESPACE = 'Namespace';
    Metadata.ATTRIBUTE_TERM_NAMESPACE = 'TermNamespace';
    Metadata.ATTRIBUTE_QUALIFIER = 'Qualifier';
    Metadata.ATTRIBUTE_TARGET_NAMESPACE = 'TargetNamespace';
    Metadata.ATTRIBUTE_TERM = 'Term';
    Metadata.ATTRIBUTE_NAME = 'Name';
    Metadata.ATTRIBUTE_VALUE = 'Value';
    Metadata.ATTRIBUTE_BASE_TYPE = 'BaseType';
    Metadata.ATTRIBUTE_OPEN_TYPE = 'OpenType';
    Metadata.ATTRIBUTE_TYPE = 'Type';
    Metadata.ATTRIBUTE_NULLABLE = 'Nullable';
    Metadata.ATTRIBUTE_MAX_LENGTH = 'MaxLength';
    Metadata.ATTRIBUTE_PRECISION = 'Precision';
    Metadata.ATTRIBUTE_SCALE = 'Scale';
    Metadata.ATTRIBUTE_UNICODE = 'Unicode';
    Metadata.ATTRIBUTE_SRID = 'SRID';
    Metadata.ATTRIBUTE_DEFAULT_VALUE = 'DefaultValue';
    Metadata.ATTRIBUTE_PARTNER = 'Partner';
    Metadata.ATTRIBUTE_PROPERTY = 'Property';
    Metadata.ATTRIBUTE_REFERENCED_PROPERTY = 'ReferencedProperty';
    Metadata.ATTRIBUTE_HAS_STREAM = 'HasStream';
    Metadata.ATTRIBUTE_CONTAINS_TARGET = 'ContainsTarget';
    Metadata.ATTRIBUTE_IS_BOUND = 'IsBound';
    Metadata.ATTRIBUTE_ENTITY_SET_PATH = 'EntitySetPath';
    Metadata.ATTRIBUTE_IS_COMPOSABLE = 'IsComposable';
    Metadata.ATTRIBUTE_ENTITY_TYPE = 'EntityType';
    Metadata.ATTRIBUTE_PATH = 'Path';
    Metadata.ATTRIBUTE_TARGET = 'Target';
    Metadata.ATTRIBUTE_FUNCTION = 'Function';
    Metadata.ATTRIBUTE_ACTION = 'Action';
    Metadata.ATTRIBUTE_ENTITY_SET = 'EntitySet';
    Metadata.ATTRIBUTE_INCLUDE_IN_SERVICE_DOCUMENT = 'IncludeInServiceDocument';
    Metadata.ATTRIBUTE_ABSTRACT = 'Abstract';
    Metadata.ATTRIBUTE_UNDERLYING_TYPE = 'UnderlyingType';
    Metadata.ATTRIBUTE_IS_FLAGS = 'IsFlags';
    Metadata.ATTRIBUTE_EXTENDS = 'Extends';
    Metadata.ATTRIBUTE_BASE_TERM = 'BaseTerm';
    Metadata.ATTRIBUTE_APPLIES_TO = 'AppliesTo';
    return Metadata;
}());



/***/ }),

/***/ "./src/app/odata/odata-response/odata-response-abstract.ts":
/*!*****************************************************************!*\
  !*** ./src/app/odata/odata-response/odata-response-abstract.ts ***!
  \*****************************************************************/
/*! exports provided: ODataResponseAbstract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ODataResponseAbstract", function() { return ODataResponseAbstract; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/app/odata/utils/utils.ts");

var ODataResponseAbstract = /** @class */ (function () {
    function ODataResponseAbstract(httpResponse) {
        this.httpResponse = httpResponse;
    }
    ODataResponseAbstract.prototype.getHttpResponse = function () {
        return this.httpResponse;
    };
    ODataResponseAbstract.prototype.isOk = function () {
        return this.httpResponse.ok;
    };
    ODataResponseAbstract.prototype.getBodyAsJson = function () {
        return null;
    };
    ODataResponseAbstract.prototype.getBodyAsText = function () {
        return this.httpResponse.body;
    };
    ODataResponseAbstract.prototype.toString = function () {
        var res = this.httpResponse.status + " " + this.httpResponse.statusText + "\n";
        var headers = this.httpResponse.headers;
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
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isNotNullNorUndefined(json)) {
            res += JSON.stringify(json, null, 4);
        }
        else {
            res += this.getBodyAsText();
        }
        return res;
    };
    return ODataResponseAbstract;
}());



/***/ }),

/***/ "./src/app/odata/odata-response/odata-response-batch.ts":
/*!**************************************************************!*\
  !*** ./src/app/odata/odata-response/odata-response-batch.ts ***!
  \**************************************************************/
/*! exports provided: ODataResponseBatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ODataResponseBatch", function() { return ODataResponseBatch; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/app/odata/utils/utils.ts");
/* harmony import */ var _odata_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./odata-response */ "./src/app/odata/odata-response/odata-response.ts");
/* harmony import */ var _odata_response_abstract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./odata-response-abstract */ "./src/app/odata/odata-response/odata-response-abstract.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ODataResponseBatch = /** @class */ (function (_super) {
    __extends(ODataResponseBatch, _super);
    function ODataResponseBatch(httpResponse) {
        var _this = _super.call(this, httpResponse) || this;
        _this.odataResponses = [];
        _this.parseResponses();
        return _this;
    }
    ODataResponseBatch.prototype.getODataResponses = function () {
        return this.odataResponses;
    };
    ODataResponseBatch.prototype.parseResponses = function () {
        var contentType = this.getHttpResponse().headers.get(ODataResponseBatch.CONTENT_TYPE);
        var boundaryDelimiterBatch = this.getBoundaryDelimiter(contentType);
        var boundaryEndBatch = this.getBoundaryEnd(boundaryDelimiterBatch);
        var batchBody = this.getBodyAsText();
        var batchBodyLines = batchBody.split(ODataResponseBatch.NEWLINE);
        var odataResponseCS;
        var contentId;
        var boundaryDelimiterCS;
        var boundaryEndCS;
        var batchPartStartIndex;
        for (var index = 0; index < batchBodyLines.length; index++) {
            var batchBodyLine = batchBodyLines[index];
            if (batchBodyLine.startsWith(ODataResponseBatch.CONTENT_TYPE)) {
                var contentTypeValue = this.getHeaderValue(batchBodyLine);
                if (contentTypeValue === ODataResponseBatch.MULTIPART_MIXED) {
                    odataResponseCS = [];
                    contentId = undefined;
                    boundaryDelimiterCS = this.getBoundaryDelimiter(batchBodyLine);
                    boundaryEndCS = this.getBoundaryEnd(boundaryDelimiterCS);
                    batchPartStartIndex = undefined;
                }
                continue;
            }
            else if (_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotNullNorUndefined(odataResponseCS) && batchBodyLine.startsWith(ODataResponseBatch.CONTENT_ID)) {
                contentId = Number(this.getHeaderValue(batchBodyLine));
            }
            else if (batchBodyLine.startsWith(ODataResponseBatch.HTTP11)) {
                batchPartStartIndex = index;
            }
            else if (batchBodyLine === boundaryDelimiterBatch || batchBodyLine === boundaryDelimiterCS
                || batchBodyLine === boundaryEndBatch || batchBodyLine === boundaryEndCS) {
                if (!batchPartStartIndex) {
                    continue;
                }
                var odataResponse = this.createODataResponse(batchBodyLines, batchPartStartIndex, index - 1);
                if (_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotNullNorUndefined(odataResponseCS)) {
                    odataResponseCS[contentId] = odataResponse;
                }
                else {
                    this.odataResponses.push(odataResponse);
                }
                if (batchBodyLine === boundaryDelimiterBatch || batchBodyLine === boundaryDelimiterCS) {
                    batchPartStartIndex = index + 1;
                }
                else if (batchBodyLine === boundaryEndBatch || batchBodyLine === boundaryEndCS) {
                    if (_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotNullNorUndefined(odataResponseCS)) {
                        for (var _i = 0, odataResponseCS_1 = odataResponseCS; _i < odataResponseCS_1.length; _i++) {
                            var response = odataResponseCS_1[_i];
                            if (_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotNullNorUndefined(response)) {
                                this.odataResponses.push(response);
                            }
                        }
                    }
                    odataResponseCS = undefined;
                    boundaryDelimiterCS = undefined;
                    boundaryEndCS = undefined;
                    batchPartStartIndex = undefined;
                }
            }
        }
    };
    ODataResponseBatch.prototype.getHeaderValue = function (header) {
        var res = header.split(';')[0].trim();
        res = res.split(':')[1].trim();
        return res;
    };
    ODataResponseBatch.prototype.getBoundaryDelimiter = function (contentType) {
        var contentTypeParts = contentType.split(';');
        if (contentTypeParts.length === 2) {
            var boundary = contentType.split(';')[1].trim();
            var boundaryDelimiter = ODataResponseBatch.BOUNDARY_PREFIX_SUFFIX + boundary.split('=')[1];
            return boundaryDelimiter;
        }
        else {
            return '';
        }
    };
    ODataResponseBatch.prototype.getBoundaryEnd = function (boundaryDelimiter) {
        if (!boundaryDelimiter.length) {
            return '';
        }
        var boundaryEnd = boundaryDelimiter + ODataResponseBatch.BOUNDARY_PREFIX_SUFFIX;
        return boundaryEnd;
    };
    ODataResponseBatch.prototype.createODataResponse = function (batchBodyLines, batchPartStartIndex, batchPartEndIndex) {
        var index = batchPartStartIndex;
        var statusLine = batchBodyLines[index];
        var statusLineParts = batchBodyLines[index].split(' ');
        var status = statusLineParts[1];
        var statusTextIndex = statusLine.indexOf(status) + status.length + 1;
        var statusText = statusLine.substring(statusTextIndex);
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        for (++index; index <= batchPartEndIndex; index++) {
            var batchBodyLine = batchBodyLines[index];
            if (batchBodyLine === '') {
                break;
            }
            var batchBodyLineParts = batchBodyLine.split(': ');
            httpHeaders = httpHeaders.append(batchBodyLineParts[0].trim(), batchBodyLineParts[1].trim());
        }
        var body = '';
        for (; index <= batchPartEndIndex; index++) {
            body += batchBodyLines[index];
        }
        return new _odata_response__WEBPACK_IMPORTED_MODULE_2__["ODataResponse"](new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
            body: body,
            headers: httpHeaders,
            status: Number(status),
            statusText: statusText
        }));
    };
    ODataResponseBatch.CONTENT_TYPE = 'Content-Type';
    ODataResponseBatch.CONTENT_ID = 'Content-ID';
    ODataResponseBatch.HTTP11 = 'HTTP/1.1';
    ODataResponseBatch.BOUNDARY_PREFIX_SUFFIX = '--';
    ODataResponseBatch.NEWLINE = '\r\n';
    ODataResponseBatch.MULTIPART_MIXED = 'multipart/mixed';
    return ODataResponseBatch;
}(_odata_response_abstract__WEBPACK_IMPORTED_MODULE_3__["ODataResponseAbstract"]));



/***/ }),

/***/ "./src/app/odata/odata-response/odata-response.ts":
/*!********************************************************!*\
  !*** ./src/app/odata/odata-response/odata-response.ts ***!
  \********************************************************/
/*! exports provided: ODataResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ODataResponse", function() { return ODataResponse; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/app/odata/utils/utils.ts");
/* harmony import */ var _entity_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity-collection */ "./src/app/odata/odata-response/entity-collection.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata */ "./src/app/odata/odata-response/metadata.ts");
/* harmony import */ var _odata_response_abstract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./odata-response-abstract */ "./src/app/odata/odata-response/odata-response-abstract.ts");
/* harmony import */ var _odata_response_batch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./odata-response-batch */ "./src/app/odata/odata-response/odata-response-batch.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var ODataResponse = /** @class */ (function (_super) {
    __extends(ODataResponse, _super);
    function ODataResponse(httpResponse) {
        return _super.call(this, httpResponse) || this;
    }
    ODataResponse.prototype.getBodyAsJson = function () {
        var contentType = this.getHttpResponse().headers.get('Content-Type');
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isNotNullNorUndefined(contentType) && contentType.includes('json')) {
            try {
                return JSON.parse(this.getBodyAsText());
            }
            catch (error) {
                return null;
            }
        }
        return null;
    };
    ODataResponse.prototype.toMetadata = function () {
        var xml = this.getBodyAsText();
        return new _metadata__WEBPACK_IMPORTED_MODULE_2__["Metadata"](xml);
    };
    ODataResponse.prototype.toEntitySet = function () {
        var json = this.getBodyAsJson();
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isNotNullNorUndefined(json) && json.hasOwnProperty(ODataResponse.VALUE)) {
            var count = null;
            if (json.hasOwnProperty(ODataResponse.ODATA_COUNT)) {
                count = json[ODataResponse.ODATA_COUNT];
            }
            return new _entity_collection__WEBPACK_IMPORTED_MODULE_1__["EntitySet"](json[ODataResponse.VALUE], count);
        }
        return null;
    };
    ODataResponse.prototype.toEntity = function () {
        return this.toObject();
    };
    ODataResponse.prototype.toPropertyValue = function () {
        var json = this.getBodyAsJson();
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isNotNullNorUndefined(json)) {
            if (json.hasOwnProperty(ODataResponse.VALUE)) {
                return json[ODataResponse.VALUE];
            }
            return null;
        }
        else {
            return JSON.parse(this.getBodyAsText());
        }
    };
    ODataResponse.prototype.toComplexValue = function () {
        return this.toObject();
    };
    ODataResponse.prototype.toCount = function () {
        return Number(this.getBodyAsText());
    };
    ODataResponse.prototype.toODataResponseBatch = function () {
        return new _odata_response_batch__WEBPACK_IMPORTED_MODULE_4__["ODataResponseBatch"](this.getHttpResponse());
    };
    ODataResponse.prototype.toObject = function () {
        var json = this.getBodyAsJson();
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isNotNullNorUndefined(json)) {
            return json;
        }
        return null;
    };
    ODataResponse.VALUE = 'value';
    ODataResponse.ODATA_COUNT = '@odata.count';
    return ODataResponse;
}(_odata_response_abstract__WEBPACK_IMPORTED_MODULE_3__["ODataResponseAbstract"]));



/***/ }),

/***/ "./src/app/odata/odata-service/http-options.ts":
/*!*****************************************************!*\
  !*** ./src/app/odata/odata-service/http-options.ts ***!
  \*****************************************************/
/*! exports provided: HttpOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpOptions", function() { return HttpOptions; });
var HttpOptions = /** @class */ (function () {
    function HttpOptions(headers, observe, params, reportProgress, responseType, withCredentials) {
        if (observe === void 0) { observe = 'response'; }
        if (responseType === void 0) { responseType = 'text'; }
        this.headers = headers;
        this.observe = observe;
        this.params = params;
        this.reportProgress = reportProgress;
        this.responseType = responseType;
        this.withCredentials = withCredentials;
    }
    return HttpOptions;
}());



/***/ }),

/***/ "./src/app/odata/odata-service/odata.service.ts":
/*!******************************************************!*\
  !*** ./src/app/odata/odata-service/odata.service.ts ***!
  \******************************************************/
/*! exports provided: ODataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ODataService", function() { return ODataService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _odata_response_odata_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../odata-response/odata-response */ "./src/app/odata/odata-response/odata-response.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./src/app/odata/utils/utils.ts");
/* harmony import */ var _http_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-options */ "./src/app/odata/odata-service/http-options.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ODataService = /** @class */ (function () {
    function ODataService(http) {
        this.http = http;
    }
    ODataService_1 = ODataService;
    ODataService.prototype.get = function (odataQuery, httpOptions) {
        var url = odataQuery.toString();
        var options = this.createHttpOptions(httpOptions);
        return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) { return new _odata_response_odata_response__WEBPACK_IMPORTED_MODULE_3__["ODataResponse"](response); }));
    };
    ODataService.prototype.post = function (odataQuery, body, httpOptions) {
        var url = odataQuery.toString();
        var options = this.createHttpOptions(httpOptions);
        return this.http.post(url, body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) { return new _odata_response_odata_response__WEBPACK_IMPORTED_MODULE_3__["ODataResponse"](response); }));
    };
    ODataService.prototype.patch = function (odataQuery, body, etag, httpOptions) {
        var url = odataQuery.toString();
        var options = this.createHttpOptions(httpOptions);
        options = this.mergeETag(options, etag);
        return this.http.patch(url, body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) { return new _odata_response_odata_response__WEBPACK_IMPORTED_MODULE_3__["ODataResponse"](response); }));
    };
    ODataService.prototype.put = function (odataQuery, body, etag, httpOptions) {
        var url = odataQuery.toString();
        var options = this.createHttpOptions(httpOptions);
        options = this.mergeETag(options, etag);
        return this.http.put(url, body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) { return new _odata_response_odata_response__WEBPACK_IMPORTED_MODULE_3__["ODataResponse"](response); }));
    };
    ODataService.prototype.delete = function (odataQuery, etag, httpOptions) {
        var url = odataQuery.toString();
        var options = this.createHttpOptions(httpOptions);
        options = this.mergeETag(options, etag);
        return this.http.delete(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) { return new _odata_response_odata_response__WEBPACK_IMPORTED_MODULE_3__["ODataResponse"](response); }));
    };
    ODataService.prototype.createHttpOptions = function (httpOptions) {
        if (httpOptions instanceof _http_options__WEBPACK_IMPORTED_MODULE_5__["HttpOptions"]) {
            return httpOptions;
        }
        return Object.assign(new _http_options__WEBPACK_IMPORTED_MODULE_5__["HttpOptions"](), httpOptions);
    };
    ODataService.prototype.mergeETag = function (httpOptions, etag) {
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isNullOrUndefined(etag)) {
            return httpOptions;
        }
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isNullOrUndefined(httpOptions)) {
            httpOptions = new _http_options__WEBPACK_IMPORTED_MODULE_5__["HttpOptions"]();
        }
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isNullOrUndefined(httpOptions.headers)) {
            httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        }
        httpOptions.headers[ODataService_1.IF_MATCH_HEADER] = etag;
        return httpOptions;
    };
    ODataService.IF_MATCH_HEADER = 'If-Match';
    ODataService = ODataService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ODataService);
    return ODataService;
    var ODataService_1;
}());



/***/ }),

/***/ "./src/app/odata/odata.module.ts":
/*!***************************************!*\
  !*** ./src/app/odata/odata.module.ts ***!
  \***************************************/
/*! exports provided: ODataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ODataModule", function() { return ODataModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _odata_service_odata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./odata-service/odata.service */ "./src/app/odata/odata-service/odata.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ODataModule = /** @class */ (function () {
    function ODataModule() {
    }
    ODataModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]
            ],
            providers: [_odata_service_odata_service__WEBPACK_IMPORTED_MODULE_1__["ODataService"]]
        })
    ], ODataModule);
    return ODataModule;
}());



/***/ }),

/***/ "./src/app/odata/query-options/expand.ts":
/*!***********************************************!*\
  !*** ./src/app/odata/query-options/expand.ts ***!
  \***********************************************/
/*! exports provided: Expand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expand", function() { return Expand; });
/* harmony import */ var _query_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query-options */ "./src/app/odata/query-options/query-options.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/app/odata/utils/utils.ts");


var Expand = /** @class */ (function () {
    function Expand(entitySet) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotNullNorUndefined(entitySet, 'entitySet');
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].requireNotEmpty(entitySet, 'entitySet');
        this.entitySet = entitySet;
        this.queryOptions = new _query_options__WEBPACK_IMPORTED_MODULE_0__["QueryOptions"](Expand.SEPARATOR);
    }
    // QUERY OPTIONS
    Expand.prototype.select = function (select) {
        this.queryOptions.select(select);
        return this;
    };
    Expand.prototype.filter = function (filter) {
        this.queryOptions.filter(filter);
        return this;
    };
    Expand.prototype.expand = function (expand) {
        this.queryOptions.expand(expand);
        return this;
    };
    Expand.prototype.orderby = function (orderby) {
        this.queryOptions.orderby(orderby);
        return this;
    };
    Expand.prototype.search = function (search) {
        this.queryOptions.search(search);
        return this;
    };
    Expand.prototype.skip = function (skip) {
        this.queryOptions.skip(skip);
        return this;
    };
    Expand.prototype.top = function (top) {
        this.queryOptions.top(top);
        return this;
    };
    Expand.prototype.customOption = function (key, value) {
        this.queryOptions.customOption(key, value);
        return this;
    };
    Expand.prototype.toString = function () {
        var res = this.entitySet;
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isEmpty(this.queryOptions)) {
            res += '(' + this.queryOptions + ')';
        }
        return res;
    };
    Expand.prototype.isEmpty = function () {
        return _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isEmpty(this.entitySet);
    };
    Expand.SEPARATOR = ';';
    return Expand;
}());



/***/ }),

/***/ "./src/app/odata/query-options/filter/filter-string.ts":
/*!*************************************************************!*\
  !*** ./src/app/odata/query-options/filter/filter-string.ts ***!
  \*************************************************************/
/*! exports provided: FilterString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterString", function() { return FilterString; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/app/odata/utils/utils.ts");

var FilterString = /** @class */ (function () {
    function FilterString(filter) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].requireNotNullNorUndefined(filter, 'filter');
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].requireNotEmpty(filter, 'filter');
        this.filter = filter;
    }
    FilterString.prototype.toString = function () {
        return this.filter;
    };
    FilterString.prototype.isEmpty = function () {
        return _utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isNullOrUndefined(this.filter) || !this.filter.length;
    };
    return FilterString;
}());



/***/ }),

/***/ "./src/app/odata/query-options/operator.ts":
/*!*************************************************!*\
  !*** ./src/app/odata/query-options/operator.ts ***!
  \*************************************************/
/*! exports provided: OperatorComparison, OperatorLogical, OperatorArithmetic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorComparison", function() { return OperatorComparison; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorLogical", function() { return OperatorLogical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorArithmetic", function() { return OperatorArithmetic; });
var OperatorComparison;
(function (OperatorComparison) {
    OperatorComparison[OperatorComparison["EQ"] = 0] = "EQ";
    OperatorComparison[OperatorComparison["NE"] = 1] = "NE";
    OperatorComparison[OperatorComparison["GT"] = 2] = "GT";
    OperatorComparison[OperatorComparison["GE"] = 3] = "GE";
    OperatorComparison[OperatorComparison["LT"] = 4] = "LT";
    OperatorComparison[OperatorComparison["LE"] = 5] = "LE";
    OperatorComparison[OperatorComparison["HAS"] = 6] = "HAS";
})(OperatorComparison || (OperatorComparison = {}));
var OperatorLogical;
(function (OperatorLogical) {
    OperatorLogical[OperatorLogical["AND"] = 0] = "AND";
    OperatorLogical[OperatorLogical["OR"] = 1] = "OR";
    OperatorLogical[OperatorLogical["NOT"] = 2] = "NOT";
})(OperatorLogical || (OperatorLogical = {}));
var OperatorArithmetic;
(function (OperatorArithmetic) {
    OperatorArithmetic[OperatorArithmetic["ADD"] = 0] = "ADD";
    OperatorArithmetic[OperatorArithmetic["SUB"] = 1] = "SUB";
    OperatorArithmetic[OperatorArithmetic["MUL"] = 2] = "MUL";
    OperatorArithmetic[OperatorArithmetic["DIV"] = 3] = "DIV";
    OperatorArithmetic[OperatorArithmetic["MOD"] = 4] = "MOD";
})(OperatorArithmetic || (OperatorArithmetic = {}));


/***/ }),

/***/ "./src/app/odata/query-options/orderby.ts":
/*!************************************************!*\
  !*** ./src/app/odata/query-options/orderby.ts ***!
  \************************************************/
/*! exports provided: Order, Orderby */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orderby", function() { return Orderby; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/app/odata/utils/utils.ts");

var Order;
(function (Order) {
    Order[Order["ASC"] = 0] = "ASC";
    Order[Order["DESC"] = 1] = "DESC";
})(Order || (Order = {}));
var Orderby = /** @class */ (function () {
    function Orderby(property, order) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].requireNotNullNorUndefined(property, 'property');
        this.property = property;
        this.order = order;
    }
    Orderby.prototype.toString = function () {
        var res = this.property;
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isNullOrUndefined(this.order)) {
            res += ' ' + Order[this.order].toLowerCase();
        }
        return res;
    };
    return Orderby;
}());



/***/ }),

/***/ "./src/app/odata/query-options/query-options.ts":
/*!******************************************************!*\
  !*** ./src/app/odata/query-options/query-options.ts ***!
  \******************************************************/
/*! exports provided: QueryOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryOptions", function() { return QueryOptions; });
/* harmony import */ var _filter_filter_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter/filter-string */ "./src/app/odata/query-options/filter/filter-string.ts");
/* harmony import */ var _expand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expand */ "./src/app/odata/query-options/expand.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./src/app/odata/utils/utils.ts");
/* harmony import */ var _orderby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orderby */ "./src/app/odata/query-options/orderby.ts");




var QueryOptions = /** @class */ (function () {
    function QueryOptions(separator) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].requireNotNullNorUndefined(separator, 'separator');
        _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].requireNotEmpty(separator, 'separator');
        this._separator = separator;
        this._select = null;
        this._filter = null;
        this._expand = null;
        this._orderby = null;
        this._search = null;
        this._skip = null;
        this._top = null;
        this._count = null;
        this._customOptions = null;
        this._format = null;
    }
    QueryOptions.prototype.select = function (select) {
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(select) || _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isEmpty(select)) {
            this._select = null;
        }
        else {
            this._select = typeof (select) === 'string' ? [select] : select;
        }
        return this;
    };
    QueryOptions.prototype.filter = function (filter) {
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(filter) || _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isEmpty(filter)) {
            this._filter = null;
        }
        else {
            this._filter = typeof (filter) === 'string' ? new _filter_filter_string__WEBPACK_IMPORTED_MODULE_0__["FilterString"](filter) : filter;
        }
        return this;
    };
    QueryOptions.prototype.expand = function (expand) {
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(expand) || _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isEmpty(expand)) {
            this._expand = null;
        }
        else {
            this._expand = typeof (expand) === 'string' ? [new _expand__WEBPACK_IMPORTED_MODULE_1__["Expand"](expand)] : expand instanceof _expand__WEBPACK_IMPORTED_MODULE_1__["Expand"] ? [expand] : expand;
        }
        return this;
    };
    QueryOptions.prototype.orderby = function (orderby) {
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(orderby) || _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isEmpty(orderby)) {
            this._orderby = null;
        }
        else {
            this._orderby = typeof (orderby) === 'string' ? [new _orderby__WEBPACK_IMPORTED_MODULE_3__["Orderby"](orderby)] : orderby;
        }
        return this;
    };
    QueryOptions.prototype.search = function (search) {
        this._search = search;
        return this;
    };
    QueryOptions.prototype.skip = function (skip) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].requireNotNegative(skip, 'skip');
        this._skip = skip;
        return this;
    };
    QueryOptions.prototype.top = function (top) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].requireNotNegative(top, 'top');
        this._top = top;
        return this;
    };
    QueryOptions.prototype.count = function (count) {
        this._count = count;
        return this;
    };
    QueryOptions.prototype.format = function (format) {
        this._format = format;
        return this;
    };
    QueryOptions.prototype.customOption = function (key, value) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].requireNotNullNorUndefined(key, 'key');
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(this._customOptions)) {
            this._customOptions = new Map();
        }
        this._customOptions.set(key, value);
        return this;
    };
    QueryOptions.prototype.toString = function () {
        var _this = this;
        // query options
        var queryOptions = '';
        // add select
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(this._select) && !_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isEmpty(this._select)) {
            queryOptions += '$select=';
            if (typeof (this._select) === 'string') {
                queryOptions += this._select;
            }
            else {
                queryOptions += _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].toString(this._select);
            }
        }
        // add filter
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(this._filter) && !_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isEmpty(this._filter)) {
            if (queryOptions.length) {
                queryOptions += this._separator;
            }
            queryOptions += '$filter=' + encodeURIComponent(this._filter.toString());
        }
        // add expand
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(this._expand) && !_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isEmpty(this._expand)) {
            if (queryOptions.length) {
                queryOptions += this._separator;
            }
            queryOptions += '$expand=';
            if (typeof (this._expand) === 'string') {
                queryOptions += this._expand;
            }
            else {
                queryOptions += _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].toString(this._expand);
            }
        }
        // add orderby
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(this._orderby) && !_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isEmpty(this._orderby)) {
            if (queryOptions.length) {
                queryOptions += this._separator;
            }
            queryOptions += '$orderby=';
            if (typeof (this._orderby) === 'string') {
                queryOptions += this._orderby;
            }
            else {
                queryOptions += _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].toString(this._orderby);
            }
        }
        // add search
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(this._search) && !_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isEmpty(this._search)) {
            if (queryOptions.length) {
                queryOptions += this._separator;
            }
            queryOptions += '$search=' + encodeURIComponent(this._search.toString());
        }
        // add skip
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(this._skip) && !_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isEmpty(this._skip)) {
            if (queryOptions.length) {
                queryOptions += this._separator;
            }
            queryOptions += '$skip=' + this._skip;
        }
        // add top
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(this._top) && !_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isEmpty(this._top)) {
            if (queryOptions.length) {
                queryOptions += this._separator;
            }
            queryOptions += '$top=' + this._top;
        }
        // add count
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(this._count) && !_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isEmpty(this._count)) {
            if (queryOptions.length) {
                queryOptions += this._separator;
            }
            queryOptions += '$count=' + this._count;
        }
        // add custom query options
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNotNullNorUndefined(this._customOptions) && this._customOptions.size > 0) {
            this._customOptions.forEach(function (value, key, map) {
                if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNotNullNorUndefined(key) && !_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isEmpty(key)
                    && _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNotNullNorUndefined(value) && !_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isEmpty(value)) {
                    if (queryOptions.length) {
                        queryOptions += _this._separator;
                    }
                    queryOptions += key + '=' + encodeURIComponent(value);
                }
            });
        }
        // add format
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(this._format) && !_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isEmpty(this._format)) {
            if (queryOptions.length) {
                queryOptions += this._separator;
            }
            queryOptions += '$format=' + this._format;
        }
        return queryOptions;
    };
    QueryOptions.prototype.isEmpty = function () {
        for (var key in this) {
            if (key === '_purpose' || key === '_separator') {
                continue;
            }
            if (this.hasOwnProperty(key) && !_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isEmpty(this[key])) {
                return false;
            }
        }
        return true;
    };
    return QueryOptions;
}());



/***/ }),

/***/ "./src/app/odata/utils/utils.ts":
/*!**************************************!*\
  !*** ./src/app/odata/utils/utils.ts ***!
  \**************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var _query_options_operator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../query-options/operator */ "./src/app/odata/query-options/operator.ts");
/* harmony import */ var _odata_query_quoted_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../odata-query/quoted-string */ "./src/app/odata/odata-query/quoted-string.ts");


var Utils = /** @class */ (function () {
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
    Utils.isEmpty = function (value) {
        if (Utils.isNullOrUndefined(value)
            || typeof (value) === 'string' && !value.length
            || value instanceof Array && !value.length
            || typeof (value.isEmpty) === 'function' && value.isEmpty()) {
            return true;
        }
        if (value instanceof Array && value) {
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var v = value_1[_i];
                if (!Utils.isEmpty(v)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    Utils.requireNull = function (fieldValue, fieldName) {
        if (fieldValue !== null) {
            throw new Error(fieldName + ' must be null');
        }
    };
    Utils.requireUndefined = function (fieldValue, fieldName) {
        if (fieldValue !== undefined) {
            throw new Error(fieldName + ' must be undefined');
        }
    };
    Utils.requireNotNull = function (fieldValue, fieldName) {
        if (fieldValue === null) {
            throw new Error(fieldName + ' cannot be null');
        }
    };
    Utils.requireNotUndefined = function (fieldValue, fieldName) {
        if (fieldValue === undefined) {
            throw new Error(fieldName + ' cannot be undefined');
        }
    };
    Utils.requireNotNullNorUndefined = function (fieldValue, fieldName) {
        Utils.requireNotNull(fieldValue, fieldName);
        Utils.requireNotUndefined(fieldValue, fieldName);
    };
    Utils.requireNullOrUndefined = function (fieldValue, fieldName) {
        if (!Utils.isNull(fieldValue) && !Utils.isUndefined(fieldValue)) {
            throw new Error(fieldName + ' must be null or undefined');
        }
    };
    Utils.requireNotEmpty = function (fieldValue, fieldName) {
        if (Utils.isEmpty(fieldValue)) {
            throw new Error(fieldName + ' cannot be empty');
        }
    };
    Utils.requireNotNegative = function (fieldValue, fieldName) {
        if (fieldValue < 0) {
            throw new Error(fieldName + ' cannot be negative');
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
        Utils.requireNotUndefined(value, 'value');
        Utils.requireNotNullNorUndefined(encodeURI, 'encodeURI');
        var res = value;
        if (typeof (res) === 'string') {
            // encode uri component
            if (Utils.isNotNullNorUndefined(encodeURI) && encodeURI) {
                res = encodeURIComponent(res);
            }
        }
        else if (res instanceof _odata_query_quoted_string__WEBPACK_IMPORTED_MODULE_1__["QuotedString"]) {
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
    Utils.toString = function (items, operator, operatorUppercase) {
        if (operatorUppercase === void 0) { operatorUppercase = false; }
        var res = '';
        if (Utils.isNullOrUndefined(items) || !items.length) {
            return res;
        }
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            if (res.length) {
                if (Utils.isNotNullNorUndefined(operator)) {
                    var operatorString = Utils.getOperatorString(operator, operatorUppercase);
                    res += " " + operatorString + " ";
                }
                else {
                    res += ',';
                }
            }
            if (Utils.isNotNullNorUndefined(operator) && operator === _query_options_operator__WEBPACK_IMPORTED_MODULE_0__["OperatorLogical"].NOT) {
                var operatorString = Utils.getOperatorString(operator, operatorUppercase);
                res += operatorString + " ";
            }
            res += item;
        }
        if (Utils.isNotNullNorUndefined(operator)) {
            return "(" + res + ")";
        }
        return res;
    };
    Utils.getOperatorString = function (operator, operatorUppercase) {
        var operatorString = _query_options_operator__WEBPACK_IMPORTED_MODULE_0__["OperatorLogical"][operator].toLowerCase();
        if (Utils.isNotNullNorUndefined(operatorUppercase) && operatorUppercase) {
            operatorString = operatorString.toUpperCase();
        }
        return operatorString;
    };
    return Utils;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/riccardomariani/Documents/odata-v4-ng/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map