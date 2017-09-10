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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n</div>\n\n<h2>Usage Examples</h2>\n<p> In \"app.module.ts\" import ODataModule and then inject the ODataService where you want to use this library.</p>\n<p>\n  All examples in this page are based on the publicly available OData V4 sample service TripPin (SERVICE_ROOT): <a href=\"https://services.odata.org/V4/TripPinServiceRW\">{{serviceRoot}}.</a><br/>  Metadata of this service is here: <a href=\"https://services.odata.org/V4/TripPinServiceRW/$metadata\">{{serviceRoot}}/$metadata.</a>\n</p>\n<p><b><i>\n  Attention to make these examples working you need to visit the TripPin service page and accept the certificate which is surprisingly not valid.<br/>\n  The lack of validity is due to the certificate host name not matching the actual host name of the service.<br/>\n  Anyway the TripPin service has been created by Microsoft so it should be safe accepting the certificate.\n</i></b></p>\n<p>To run the example queries and get the response, click on the \"Execute query\" button. Service response could be slow depending\n  on workload.</p>\n<p>Any feedback is highly appreciated and please report issues! Thanks so much!</p>\n\n<p-tabView>\n  <p-tabPanel header=\"Basic read\">\n    <ov4-basic-read></ov4-basic-read>\n  </p-tabPanel>\n  <p-tabPanel header=\"Basic write\">\n    <ov4-basic-write></ov4-basic-write>\n  </p-tabPanel>\n  <p-tabPanel header=\"Advanced read\">\n    <ov4-adv-read></ov4-adv-read>\n  </p-tabPanel>\n  <p-tabPanel header=\"Advanced write\">\n    <ov4-adv-write></ov4-adv-write>\n  </p-tabPanel>\n</p-tabView>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__docs_example_example_data__ = __webpack_require__("../../../../../src/app/docs/example/example-data.ts");
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


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'odata-v4-ng';
        this.serviceRoot = __WEBPACK_IMPORTED_MODULE_1__docs_example_example_data__["b" /* SERVICE_ROOT */];
    }
    AppComponent.prototype.ngOnInit = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ov4-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.less")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__odata_odata_module__ = __webpack_require__("../../../../../src/app/odata/odata.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__docs_basic_read_basic_read_component__ = __webpack_require__("../../../../../src/app/docs/basic-read/basic-read.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__docs_basic_write_basic_write_component__ = __webpack_require__("../../../../../src/app/docs/basic-write/basic-write.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__docs_adv_read_adv_read_component__ = __webpack_require__("../../../../../src/app/docs/adv-read/adv-read.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__docs_adv_write_adv_write_component__ = __webpack_require__("../../../../../src/app/docs/adv-write/adv-write.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__docs_example_example_component__ = __webpack_require__("../../../../../src/app/docs/example/example.component.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__docs_example_example_component__["a" /* ExampleComponent */],
            __WEBPACK_IMPORTED_MODULE_5__docs_basic_read_basic_read_component__["a" /* BasicReadComponent */],
            __WEBPACK_IMPORTED_MODULE_6__docs_basic_write_basic_write_component__["a" /* BasicWriteComponent */],
            __WEBPACK_IMPORTED_MODULE_7__docs_adv_read_adv_read_component__["a" /* AdvReadComponent */],
            __WEBPACK_IMPORTED_MODULE_8__docs_adv_write_adv_write_component__["a" /* AdvWriteComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__odata_odata_module__["a" /* ODataModule */],
            __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["TabViewModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/docs/adv-read/adv-read.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/docs/adv-read/adv-read.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__ = __webpack_require__("../../../../../src/app/odata/odata-query/odata-query.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__odata_odata_service_odata_service__ = __webpack_require__("../../../../../src/app/odata/odata-service/odata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basic_read_basic_read_component__ = __webpack_require__("../../../../../src/app/docs/basic-read/basic-read.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__example_example_data__ = __webpack_require__("../../../../../src/app/docs/example/example-data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvReadComponent; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdvReadComponent = (function (_super) {
    __extends(AdvReadComponent, _super);
    function AdvReadComponent(odataService) {
        var _this = _super.call(this, odataService) || this;
        _this.odataService = odataService;
        return _this;
    }
    AdvReadComponent.prototype.ngOnInit = function () {
        this.examples = [];
        // SINGLETON
        var example = new __WEBPACK_IMPORTED_MODULE_4__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get singleton';
        example.query = __WEBPACK_IMPORTED_MODULE_4__example_example_data__["b" /* SERVICE_ROOT */] + '/Me';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_4__example_example_data__["b" /* SERVICE_ROOT */])
            .singleton('Me');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .singleton('Me');\n" + __WEBPACK_IMPORTED_MODULE_3__basic_read_basic_read_component__["b" /* EXECUTE_GET */];
        example.func = this.executeGet;
        // SINGLETON PROPERTY
        example = new __WEBPACK_IMPORTED_MODULE_4__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get singleton property';
        example.query = __WEBPACK_IMPORTED_MODULE_4__example_example_data__["b" /* SERVICE_ROOT */] + '/Me/AddressInfo';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_4__example_example_data__["b" /* SERVICE_ROOT */])
            .singleton('Me')
            .property('AddressInfo');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .singleton('Me')\n    .property('AddressInfo');\n" + __WEBPACK_IMPORTED_MODULE_3__basic_read_basic_read_component__["b" /* EXECUTE_GET */];
        example.func = this.executeGet;
        // DERIVED ENTITYSET
        example = new __WEBPACK_IMPORTED_MODULE_4__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get derived entity set';
        example.query = __WEBPACK_IMPORTED_MODULE_4__example_example_data__["b" /* SERVICE_ROOT */] + '/People(\'russellwhyte\')/Trips(1003)/PlanItems/Microsoft.OData.SampleService.Models.TripPin.Flight';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_4__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People')
            .entityKey('\'russellwhyte\'')
            .navigationProperty('Trips')
            .entityKey(1003)
            .navigationProperty('PlanItems')
            .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .entityKey('\\'russellwhyte\\'')\n    .navigationProperty('Trips')\n    .entityKey(1003)\n    .navigationProperty('PlanItems')\n    .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight');\n" + __WEBPACK_IMPORTED_MODULE_3__basic_read_basic_read_component__["b" /* EXECUTE_GET */];
        example.func = this.executeGet;
        // DERIVED ENTITY
        example = new __WEBPACK_IMPORTED_MODULE_4__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get derived entity';
        example.query = __WEBPACK_IMPORTED_MODULE_4__example_example_data__["b" /* SERVICE_ROOT */] + '/People(\'russellwhyte\')/Trips(1003)/PlanItems(21)/Microsoft.OData.SampleService.Models.TripPin.Flight';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_4__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People')
            .entityKey('\'russellwhyte\'')
            .navigationProperty('Trips')
            .entityKey(1003)
            .navigationProperty('PlanItems')
            .entityKey(21)
            .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .entityKey('\\'russellwhyte\\'')\n    .navigationProperty('Trips')\n    .entityKey(1003)\n    .navigationProperty('PlanItems')\n    .entityKey(21)\n    .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight');\n" + __WEBPACK_IMPORTED_MODULE_3__basic_read_basic_read_component__["b" /* EXECUTE_GET */];
        example.func = this.executeGet;
        // FILTER DERIVED ENTITIES
        example = new __WEBPACK_IMPORTED_MODULE_4__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get derived entities filtered';
        example.query = __WEBPACK_IMPORTED_MODULE_4__example_example_data__["b" /* SERVICE_ROOT */] + '/People(\'russellwhyte\')/Trips(1003)/PlanItems/Microsoft.OData.SampleService.Models.TripPin.Flight?$filter=FlightNumber eq \'FM1930\'';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_4__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People')
            .entityKey('\'russellwhyte\'')
            .navigationProperty('Trips')
            .entityKey(1003)
            .navigationProperty('PlanItems')
            .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight')
            .filter('FlightNumber eq \'FM1930\'');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .entityKey('\\'russellwhyte\\'')\n    .navigationProperty('Trips')\n    .entityKey(1003)\n    .navigationProperty('PlanItems')\n    .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight')\n    .filter('FlightNumber eq \\'FM1930\\'');\n" + __WEBPACK_IMPORTED_MODULE_3__basic_read_basic_read_component__["b" /* EXECUTE_GET */];
        example.func = this.executeGet;
    };
    return AdvReadComponent;
}(__WEBPACK_IMPORTED_MODULE_3__basic_read_basic_read_component__["a" /* BasicReadComponent */]));
AdvReadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'ov4-adv-read',
        template: __webpack_require__("../../../../../src/app/docs/example/example.component.html"),
        styles: [__webpack_require__("../../../../../src/app/docs/adv-read/adv-read.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__odata_odata_service_odata_service__["a" /* ODataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__odata_odata_service_odata_service__["a" /* ODataService */]) === "function" && _a || Object])
], AdvReadComponent);

var _a;
//# sourceMappingURL=adv-read.component.js.map

/***/ }),

/***/ "../../../../../src/app/docs/adv-write/adv-write.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/docs/adv-write/adv-write.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__ = __webpack_require__("../../../../../src/app/odata/odata-query/odata-query.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__example_example_data__ = __webpack_require__("../../../../../src/app/docs/example/example-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__odata_odata_service_odata_service__ = __webpack_require__("../../../../../src/app/odata/odata-service/odata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basic_write_basic_write_component__ = __webpack_require__("../../../../../src/app/docs/basic-write/basic-write.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvWriteComponent; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EXECUTE_BATCH = "example.subscr = example.odataQuery.execute().subscribe(\n  (odataResponse: ODataResponse) => {\n    example.response = odataResponse.toString();\n  },\n  (error: string) => {\n    example.response = error;\n  }\n);";
var AdvWriteComponent = (function (_super) {
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
        var example = new __WEBPACK_IMPORTED_MODULE_1__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Batch';
        example.query = __WEBPACK_IMPORTED_MODULE_1__example_example_data__["b" /* SERVICE_ROOT */] + '/$batch';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_1__example_example_data__["b" /* SERVICE_ROOT */])
            .batch()
            .get(new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_1__example_example_data__["b" /* SERVICE_ROOT */]).entitySet('Airlines'))
            .post(new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_1__example_example_data__["b" /* SERVICE_ROOT */]).entitySet('Airlines'), {
            '@odata.type': 'Microsoft.OData.SampleService.Models.TripPin.Airline',
            'AirlineCode': 'EK',
            'Name': 'Emirates Airline'
        })
            .get(new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_1__example_example_data__["b" /* SERVICE_ROOT */]).entitySet('Airlines'));
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
    return AdvWriteComponent;
}(__WEBPACK_IMPORTED_MODULE_3__basic_write_basic_write_component__["a" /* BasicWriteComponent */]));
AdvWriteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'ov4-adv-write',
        template: __webpack_require__("../../../../../src/app/docs/example/example.component.html"),
        styles: [__webpack_require__("../../../../../src/app/docs/adv-write/adv-write.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__odata_odata_service_odata_service__["a" /* ODataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__odata_odata_service_odata_service__["a" /* ODataService */]) === "function" && _a || Object])
], AdvWriteComponent);

var _a;
//# sourceMappingURL=adv-write.component.js.map

/***/ }),

/***/ "../../../../../src/app/docs/basic-read/basic-read.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/docs/basic-read/basic-read.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__ = __webpack_require__("../../../../../src/app/odata/odata-query/odata-query.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__odata_odata_service_odata_service__ = __webpack_require__("../../../../../src/app/odata/odata-service/odata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__example_example_data__ = __webpack_require__("../../../../../src/app/docs/example/example-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__example_example_component__ = __webpack_require__("../../../../../src/app/docs/example/example.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EXECUTE_GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicReadComponent; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EXECUTE_GET = "example.odataQuery.get().subscribe(\n  (odataResponse: ODataResponse) => {\n    example.response = odataResponse.toString();\n  },\n  (error: string) => {\n    example.response = error;\n  }\n);";
var BasicReadComponent = (function (_super) {
    __extends(BasicReadComponent, _super);
    function BasicReadComponent(odataService) {
        var _this = _super.call(this, odataService) || this;
        _this.odataService = odataService;
        return _this;
    }
    BasicReadComponent.prototype.ngOnInit = function () {
        this.examples = [];
        // SERVICE DOCUMENT
        var example = new __WEBPACK_IMPORTED_MODULE_3__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get service document';
        example.query = __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */];
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */]);
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT);\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // SERVICE METADATA
        example = new __WEBPACK_IMPORTED_MODULE_3__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get service metadata';
        example.query = __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */] + '/$metadata';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */])
            .metadata();
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .metadata();\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // ENTITY SET
        example = new __WEBPACK_IMPORTED_MODULE_3__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get entity set';
        example.query = __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */] + '/People';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // ENTITY
        example = new __WEBPACK_IMPORTED_MODULE_3__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get entity';
        example.query = __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */] + '/People(\'russellwhyte\')';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People')
            .entityKey('\'russellwhyte\'');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .entityKey('\\'russellwhyte\\'');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // PROPERTY
        example = new __WEBPACK_IMPORTED_MODULE_3__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get property';
        example.query = __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */] + '/Airports(\'KSFO\')/Name';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('Airports')
            .entityKey('\'KSFO\'')
            .property('Name');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('Airports')\n    .entityKey('\\'KSFO\\'')\n    .property('Name');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // COMPLEX TYPE PROPERTY
        example = new __WEBPACK_IMPORTED_MODULE_3__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get complex type property';
        example.query = __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */] + '/Airports(\'KSFO\')/Location/Address';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('Airports')
            .entityKey('\'KSFO\'')
            .property('Location/Address');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('Airports')\n    .entityKey('\\'KSFO\\'')\n    .property('Location/Address');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // PROPERTY RAW VALUE
        example = new __WEBPACK_IMPORTED_MODULE_3__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get property raw value';
        example.query = __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */] + '/Airports(\'KSFO\')/Name/$value';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('Airports')
            .entityKey('\'KSFO\'')
            .property('Name')
            .value();
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('Airports')\n    .entityKey('\\'KSFO\\'')\n    .property('Name')\n    .value();\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // FILTER ENTITIES
        example = new __WEBPACK_IMPORTED_MODULE_3__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get filtered entities';
        example.query = __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */] + '/People?$filter=FirstName eq \'Scott\'';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People')
            .filter('FirstName eq \'Scott\'');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .filter('FirstName eq \\'Scott\\'');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // FILTER COMPLEX TYPES
        example = new __WEBPACK_IMPORTED_MODULE_3__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get filtered complex types';
        example.query = __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */] + '/Airports?$filter=contains(Location/Address, \'San Francisco\')';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('Airports')
            .filter('contains(Location/Address, \'San Francisco\')');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('Airports')\n    .filter('contains(Location/Address, \\'San Francisco\\')');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // FILTER ENUM PROPERTIES
        example = new __WEBPACK_IMPORTED_MODULE_3__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get filtered enum properties';
        example.query = __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */] + '/People?$filter=Gender eq Microsoft.OData.SampleService.Models.TripPin.PersonGender\'Female\'';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People')
            .filter('Gender eq Microsoft.OData.SampleService.Models.TripPin.PersonGender\'Female\'');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .filter('Gender eq Microsoft.OData.SampleService.Models.TripPin.PersonGender\\'Female\\'');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // EXPAND
        example = new __WEBPACK_IMPORTED_MODULE_3__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get expanded entities';
        example.query = __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */] + '/People?$expand=Trips';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People')
            .expand('Trips');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .expand('Trips');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // FILTERED EXPAND
        example = new __WEBPACK_IMPORTED_MODULE_3__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get expanded entities with nested filter';
        example.query = __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */] + '/People?$expand=Trips($filter=Name eq \'Trip in US\')';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People')
            .expand('Trips($filter=Name eq \'Trip in US\')');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .expand('Trips($filter=Name eq \\'Trip in US\\')');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // ORDERBY
        example = new __WEBPACK_IMPORTED_MODULE_3__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get ordered entities';
        example.query = __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */] + '/People(\'scottketchum\')/Trips?$orderby=EndsAt desc';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People')
            .entityKey('\'scottketchum\'')
            .navigationProperty('Trips')
            .orderby('EndsAt desc');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .entityKey('\\'scottketchum\\'')\n    .navigationProperty('Trips')\n    .orderby('EndsAt desc');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // TOP
        example = new __WEBPACK_IMPORTED_MODULE_3__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get entities using top';
        example.query = __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */] + '/People?$top=2';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People')
            .top(2);
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .top(2);\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // SKIP
        example = new __WEBPACK_IMPORTED_MODULE_3__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get entities using skip';
        example.query = __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */] + '/People?$skip=18';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People')
            .skip(18);
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .skip(18);\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // COUNT
        example = new __WEBPACK_IMPORTED_MODULE_3__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get entities count';
        example.query = __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */] + '/People?$count';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People')
            .count();
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .count();\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // PROJECTED ENTITIES
        example = new __WEBPACK_IMPORTED_MODULE_3__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get projected entities';
        example.query = __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */] + '/Airports?$select=Name, IcaoCode';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('Airports')
            .select('Name, IcaoCode');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('Airports')\n    .select('Name, IcaoCode');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // SEARCH
        example = new __WEBPACK_IMPORTED_MODULE_3__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Get entities matching search';
        example.query = __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */] + '/People?$search=Boise';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People')
            .search('Boise');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .entitySet('People')\n    .search('Boise');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // UNBOUND FUNCTION
        example = new __WEBPACK_IMPORTED_MODULE_3__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Unbound function';
        example.query = __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */] + '/GetNearestAirport(lat = 33, lon = -118)';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */])
            .functionCall('GetNearestAirport(lat = 33, lon = -118)');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n    .functionCall('GetNearestAirport(lat = 33, lon = -118)');\n" + EXECUTE_GET;
        example.func = this.executeGet;
        // BOUND FUNCTION
        example = new __WEBPACK_IMPORTED_MODULE_3__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Bound function';
        example.query = __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */] + '/People(\'russellwhyte\')/Microsoft.OData.SampleService.Models.TripPin.GetFavoriteAirline()';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */])
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
    BasicReadComponent.prototype.executeCreateEntity = function (example, odataService) {
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
    BasicReadComponent.prototype.executeDeleteEntity = function (example, odataService) {
        example.subscr = example.odataQuery.delete().subscribe(function (odataResponse) {
            example.response = odataResponse.toString();
        }, function (error) {
            example.response = error;
        });
    };
    BasicReadComponent.prototype.executeDeleteEntityETag = function (example, odataService) {
        example.subscr = example.odataQuery.delete('W/"08D15F3DD9A61539"').subscribe(function (odataResponse) {
            example.response = odataResponse.toString();
        }, function (error) {
            example.response = error;
        });
    };
    BasicReadComponent.prototype.executeUpdateEntity = function (example, odataService) {
        example.subscr = example.odataQuery.patch({
            '@odata.type': 'Microsoft.OData.SampleService.Models.TripPin.Person',
            'Emails': ['Russell@example.com', 'Russell@contoso.com', 'newRussell@contoso.com']
        }).subscribe(function (odataResponse) {
            example.response = odataResponse.toString();
        }, function (error) {
            example.response = error;
        });
    };
    BasicReadComponent.prototype.executeUpdateEntityETag = function (example, odataService) {
        example.subscr = example.odataQuery.patch({
            '@odata.type': '#Microsoft.OData.SampleService.Models.TripPin.Person',
            'FirstName': 'CLYDE'
        }, 'W/"08D15F3DD9126D84"').subscribe(function (odataResponse) {
            example.response = odataResponse.toString();
        }, function (error) {
            example.response = error;
        });
    };
    BasicReadComponent.prototype.executeCreateRelationship = function (example, odataService) {
        example.subscr = example.odataQuery.post({
            '@odata.id': new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */]).entitySet('People').entityKey('\'vincentcalabrese\'').toString()
        }).subscribe(function (odataResponse) {
            example.response = odataResponse.toString();
        }, function (error) {
            example.response = error;
        });
    };
    BasicReadComponent.prototype.executeChangeRelationship = function (example, odataService) {
        example.subscr = example.odataQuery.put({
            '@odata.id': new __WEBPACK_IMPORTED_MODULE_0__odata_odata_query_odata_query__["a" /* ODataQuery */](odataService, __WEBPACK_IMPORTED_MODULE_3__example_example_data__["b" /* SERVICE_ROOT */]).entitySet('Airlines').entityKey('\'FM\'').toString()
        }).subscribe(function (odataResponse) {
            example.response = odataResponse.toString();
        }, function (error) {
            example.response = error;
        });
    };
    BasicReadComponent.prototype.executeBoundAction = function (example, odataService) {
        example.subscr = example.odataQuery.post({
            'userName': 'scottketchum',
            'tripId': 1001
        }).subscribe(function (odataResponse) {
            example.response = odataResponse.toString();
        }, function (error) {
            example.response = error;
        });
    };
    return BasicReadComponent;
}(__WEBPACK_IMPORTED_MODULE_4__example_example_component__["a" /* ExampleComponent */]));
BasicReadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'ov4-basic-read',
        template: __webpack_require__("../../../../../src/app/docs/example/example.component.html"),
        styles: [__webpack_require__("../../../../../src/app/docs/basic-read/basic-read.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__odata_odata_service_odata_service__["a" /* ODataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__odata_odata_service_odata_service__["a" /* ODataService */]) === "function" && _a || Object])
], BasicReadComponent);

var _a;
//# sourceMappingURL=basic-read.component.js.map

/***/ }),

/***/ "../../../../../src/app/docs/basic-write/basic-write.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/docs/basic-write/basic-write.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__odata_odata_service_odata_service__ = __webpack_require__("../../../../../src/app/odata/odata-service/odata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__example_example_data__ = __webpack_require__("../../../../../src/app/docs/example/example-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__odata_odata_query_odata_query__ = __webpack_require__("../../../../../src/app/odata/odata-query/odata-query.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__example_example_component__ = __webpack_require__("../../../../../src/app/docs/example/example.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicWriteComponent; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
var BasicWriteComponent = (function (_super) {
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
        var example = new __WEBPACK_IMPORTED_MODULE_2__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Create entity';
        example.query = __WEBPACK_IMPORTED_MODULE_2__example_example_data__["b" /* SERVICE_ROOT */] + '/People';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_3__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_2__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n      .entitySet('People');\n  " + EXECUTE_CREATE_ENTITY;
        example.func = this.executeCreateEntity;
        // DELETE ENTITY
        example = new __WEBPACK_IMPORTED_MODULE_2__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Delete entity';
        example.query = __WEBPACK_IMPORTED_MODULE_2__example_example_data__["b" /* SERVICE_ROOT */] + '/People(\'vincentcalabrese\')';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_3__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_2__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People')
            .entityKey('\'vincentcalabrese\'');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n      .entitySet('People')\n      .entityKey('\\'vincentcalabrese\\'');\n  " + EXECUTE_DELETE_ENTITY;
        example.func = this.executeDeleteEntity;
        // UPDATE ENTITY
        example = new __WEBPACK_IMPORTED_MODULE_2__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Update entity';
        example.query = __WEBPACK_IMPORTED_MODULE_2__example_example_data__["b" /* SERVICE_ROOT */] + '/People(\'russellwhyte\')';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_3__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_2__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People').
            entityKey('\'russellwhyte\'');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n      .entitySet('People').\n      entityKey('\\'russellwhyte\\'');\n  " + EXECUTE_UPDATE_ENTITY;
        example.func = this.executeUpdateEntity;
        // CREATE RELATIONSHIP
        example = new __WEBPACK_IMPORTED_MODULE_2__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Create a relationship between entities';
        example.query = __WEBPACK_IMPORTED_MODULE_2__example_example_data__["b" /* SERVICE_ROOT */] + '/People(\'scottketchum\')/Friends/$ref';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_3__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_2__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People')
            .entityKey('\'scottketchum\'')
            .navigationProperty('Friends')
            .ref();
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n      .entitySet('People')\n      .entityKey('\\'scottketchum\\'')\n      .navigationProperty('Friends')\n      .ref();\n  " + EXECUTE_CREATE_RELATIONSHIP;
        example.func = this.executeCreateRelationship;
        // CHANGE RELATIONSHIP
        example = new __WEBPACK_IMPORTED_MODULE_2__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Change relationship between entities';
        example.query = __WEBPACK_IMPORTED_MODULE_2__example_example_data__["b" /* SERVICE_ROOT */] + '/People(\'russellwhyte\')/Trips(1001)/PlanItems(11)/Microsoft.OData.SampleService.Models.TripPin.Flight/Airline/$ref';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_3__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_2__example_example_data__["b" /* SERVICE_ROOT */])
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
        example = new __WEBPACK_IMPORTED_MODULE_2__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Bound action';
        example.query = __WEBPACK_IMPORTED_MODULE_2__example_example_data__["b" /* SERVICE_ROOT */] + '/People(\'russellwhyte\')/Microsoft.OData.SampleService.Models.TripPin.ShareTrip';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_3__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_2__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People')
            .entityKey('\'russellwhyte\'')
            .actionCall('Microsoft.OData.SampleService.Models.TripPin.ShareTrip');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n      .entitySet('People')\n      .entityKey('\\'russellwhyte\\'')\n      .actionCall('Microsoft.OData.SampleService.Models.TripPin.ShareTrip');\n  " + EXECUTE_BOUND_ACTION;
        example.func = this.executeBoundAction;
        // UPDATE ENTITY ETAG
        example = new __WEBPACK_IMPORTED_MODULE_2__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Update entity with ETag';
        example.query = __WEBPACK_IMPORTED_MODULE_2__example_example_data__["b" /* SERVICE_ROOT */] + '/People(\'clydeguess\')';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_3__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_2__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People')
            .entityKey('\'clydeguess\'');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n      .entitySet('People')\n      .entityKey('\\'clydeguess\\'');\n  " + EXECUTE_UPDATE_ENTITY_ETAG;
        example.func = this.executeUpdateEntityETag;
        // DELETE ENTITY ETAG
        example = new __WEBPACK_IMPORTED_MODULE_2__example_example_data__["a" /* ExampleData */]();
        this.examples.push(example);
        example.title = 'Delete entity with ETag';
        example.query = __WEBPACK_IMPORTED_MODULE_2__example_example_data__["b" /* SERVICE_ROOT */] + '/People(\'vincentcalabrese\')';
        example.odataQuery = new __WEBPACK_IMPORTED_MODULE_3__odata_odata_query_odata_query__["a" /* ODataQuery */](this.odataService, __WEBPACK_IMPORTED_MODULE_2__example_example_data__["b" /* SERVICE_ROOT */])
            .entitySet('People')
            .entityKey('\'vincentcalabrese\'');
        example.code = "example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)\n      .entitySet('People')\n      .entityKey('\\'vincentcalabrese\\'');\n  " + EXECUTE_DELETE_ENTITY_ETAG;
        example.func = this.executeDeleteEntityETag;
    };
    BasicWriteComponent.prototype.executeGet = function (example, odataService) {
        example.subscr = example.odataQuery.get().subscribe(function (odataResponse) {
            example.response = odataResponse.toString();
        }, function (error) {
            example.response = error;
        });
    };
    BasicWriteComponent.prototype.executeAllGet = function () {
        if (this.examples) {
            for (var _i = 0, _a = this.examples; _i < _a.length; _i++) {
                var example = _a[_i];
                this.executeGet(example, this.odataService);
            }
        }
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
            '@odata.id': new __WEBPACK_IMPORTED_MODULE_3__odata_odata_query_odata_query__["a" /* ODataQuery */](odataService, __WEBPACK_IMPORTED_MODULE_2__example_example_data__["b" /* SERVICE_ROOT */]).entitySet('People').entityKey('\'vincentcalabrese\'').toString()
        }).subscribe(function (odataResponse) {
            example.response = odataResponse.toString();
        }, function (error) {
            example.response = error;
        });
    };
    BasicWriteComponent.prototype.executeChangeRelationship = function (example, odataService) {
        example.subscr = example.odataQuery.put({
            '@odata.id': new __WEBPACK_IMPORTED_MODULE_3__odata_odata_query_odata_query__["a" /* ODataQuery */](odataService, __WEBPACK_IMPORTED_MODULE_2__example_example_data__["b" /* SERVICE_ROOT */]).entitySet('Airlines').entityKey('\'FM\'').toString()
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
    return BasicWriteComponent;
}(__WEBPACK_IMPORTED_MODULE_4__example_example_component__["a" /* ExampleComponent */]));
BasicWriteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ov4-basic-write',
        template: __webpack_require__("../../../../../src/app/docs/example/example.component.html"),
        styles: [__webpack_require__("../../../../../src/app/docs/basic-write/basic-write.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__odata_odata_service_odata_service__["a" /* ODataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__odata_odata_service_odata_service__["a" /* ODataService */]) === "function" && _a || Object])
], BasicWriteComponent);

var _a;
//# sourceMappingURL=basic-write.component.js.map

/***/ }),

/***/ "../../../../../src/app/docs/example/example-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SERVICE_ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleData; });
var SERVICE_ROOT = 'https://services.odata.org/v4/TripPinServiceRW';
var ExampleData = (function () {
    function ExampleData() {
    }
    return ExampleData;
}());

//# sourceMappingURL=example-data.js.map

/***/ }),

/***/ "../../../../../src/app/docs/example/example.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <input type=\"button\" value=\"Execute all queries\" (click)=\"executeAllGet()\"> -->\n\n<div *ngFor=\"let example of examples\">\n  <h3>{{example.title}}</h3>\n  <h4>Query</h4>\n  <span>{{example.query}}</span>\n  <h4>Code</h4>\n  <pre class=\"code\">{{example.code}}</pre>\n  <h4 *ngIf=\"executeEnabled\">Response <input type=\"button\" value=\"Execute query\" (click)=\"execute(example)\"></h4>\n  <textarea *ngIf=\"executeEnabled\" class=\"response\" readonly=\"true\">{{example.response}}</textarea>\n  <hr/>\n</div>"

/***/ }),

/***/ "../../../../../src/app/docs/example/example.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/docs/example/example.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__odata_odata_service_odata_service__ = __webpack_require__("../../../../../src/app/odata/odata-service/odata.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExampleComponent = (function () {
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
    return ExampleComponent;
}());
ExampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ov4-example',
        template: __webpack_require__("../../../../../src/app/docs/example/example.component.html"),
        styles: [__webpack_require__("../../../../../src/app/docs/example/example.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__odata_odata_service_odata_service__["a" /* ODataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__odata_odata_service_odata_service__["a" /* ODataService */]) === "function" && _a || Object])
], ExampleComponent);

var _a;
//# sourceMappingURL=example.component.js.map

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
        _this.batchBoundary = ODataQueryBatch.BATCH_PREFIX + __WEBPACK_IMPORTED_MODULE_3_uuid___default()();
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
            requestOptionsArgs.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({
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
                    this.changesetBoundary = ODataQueryBatch.CHANGESET_PREFIX + __WEBPACK_IMPORTED_MODULE_3_uuid___default()();
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
ODataQueryBatch.CONTENT_TYPE = 'Content-Type';
ODataQueryBatch.CONTENT_ID = 'Content-ID';
ODataQueryBatch.IF_MATCH = 'If-Match';
// HEADER VALUES
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
        _this.queryOptions = new __WEBPACK_IMPORTED_MODULE_1__query_options_query_options__["a" /* QueryOptions */](ODataQuery.SEPARATOR);
        _this.segments = [];
        _this.lastSegment = null;
        return _this;
    }
    // QUERY SEGMENTS
    ODataQuery.prototype.metadata = function () {
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNullOrUndefined(this.getSegment(ODataQuery.METADATA), ODataQuery.METADATA);
        if (this.segments.length) {
            throw new Error('metadata segment cannot be appended to other segments');
        }
        this.queryString = __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].appendSegment(this.queryString, ODataQuery.$METADATA);
        this.addSegment(ODataQuery.METADATA);
        return this;
    };
    ODataQuery.prototype.entitySet = function (entitySet) {
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNullOrUndefined(this.getSegment(ODataQuery.ENTITY_SET), ODataQuery.ENTITY_SET);
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(entitySet, 'entitySet');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotEmpty(entitySet, 'entitySet');
        this.queryString = __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].appendSegment(this.queryString, entitySet);
        this.addSegment(ODataQuery.ENTITY_SET);
        return this;
    };
    /**
     * @param {(any | any[])} entityKey
     * @returns {ODataQuery}
     * @memberof ODataQuery
     */
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
    ODataQuery.prototype.singleton = function (singleton) {
        if (this.segments.length) {
            throw new Error('singleton segment cannot be appended to other segments');
        }
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(singleton, 'singleton');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotEmpty(singleton, 'singleton');
        this.queryString = __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].appendSegment(this.queryString, singleton);
        this.addSegment(ODataQuery.SINGLETON);
        return this;
    };
    ODataQuery.prototype.typeName = function (typeName) {
        if (this.lastSegment !== ODataQuery.ENTITY_SET && this.lastSegment !== ODataQuery.NAVIGATION_PROPERTY && this.lastSegment !== ODataQuery.ENTITY_KEY) {
            throw new Error('typeName can only be appended to entitySet, navigationProperty or entityKey');
        }
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(typeName, 'typeName');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotEmpty(typeName, 'typeName');
        this.queryString = __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].appendSegment(this.queryString, typeName);
        this.addSegment(ODataQuery.TYPE_NAME);
        return this;
    };
    ODataQuery.prototype.property = function (property) {
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNullOrUndefined(this.getSegment(ODataQuery.PROPERTY), ODataQuery.PROPERTY);
        if (this.lastSegment !== ODataQuery.ENTITY_KEY && this.lastSegment !== ODataQuery.SINGLETON) {
            throw new Error('property can only be appended to entityKey or singleton');
        }
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(property, 'property');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotEmpty(property, 'property');
        this.queryString = __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].appendSegment(this.queryString, property);
        this.addSegment(ODataQuery.PROPERTY);
        return this;
    };
    ODataQuery.prototype.navigationProperty = function (navigationProperty) {
        if (this.lastSegment !== ODataQuery.ENTITY_KEY && this.lastSegment !== ODataQuery.SINGLETON && this.lastSegment !== ODataQuery.TYPE_NAME) {
            throw new Error('navigationProperty can only be appended to entityKey, singleton or typeName');
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
    ODataQuery.prototype.customOption = function (key, value) {
        this.queryOptions.customOption(key, value);
        return this;
    };
    // QUERY EXECUTION
    ODataQuery.prototype.get = function (requestOptionsArgs) {
        return this.odataService.get(this, requestOptionsArgs);
    };
    ODataQuery.prototype.post = function (body, requestOptionsArgs) {
        return this.odataService.post(this, body, requestOptionsArgs);
    };
    ODataQuery.prototype.patch = function (body, etag, requestOptionsArgs) {
        return this.odataService.patch(this, body, etag, requestOptionsArgs);
    };
    ODataQuery.prototype.put = function (body, etag, requestOptionsArgs) {
        return this.odataService.put(this, body, etag, requestOptionsArgs);
    };
    ODataQuery.prototype.delete = function (etag, requestOptionsArgs) {
        return this.odataService.delete(this, etag, requestOptionsArgs);
    };
    ODataQuery.prototype.toString = function () {
        var res = this.queryString;
        if (__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNotNullNorUndefined(this.queryOptions) && !this.queryOptions.isEmpty()) {
            res += '?' + this.queryOptions.toString();
        }
        console.log(res);
        return res;
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
        var contentType = this.response.headers.get('Content-Type');
        if (contentType.includes('json')) {
            return this.response.json();
        }
        return null;
    };
    ODataResponse.prototype.getBodyAsText = function () {
        return this.response.text();
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
        else {
            res += this.getBodyAsText();
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
        return this.http.get(url, requestOptionsArgs)
            .map(function (response) { return new __WEBPACK_IMPORTED_MODULE_7__odata_response_odata_response__["a" /* ODataResponse */](response); })
            .catch(this.handleError);
    };
    ODataService.prototype.post = function (odataQuery, body, requestOptionsArgs) {
        var url = odataQuery.toString();
        var args = this.mergeOverride(ODataService_1.REQUEST_OPTIONS_ARGS_POST, requestOptionsArgs);
        return this.http.post(url, body, args)
            .map(function (response) { return new __WEBPACK_IMPORTED_MODULE_7__odata_response_odata_response__["a" /* ODataResponse */](response); })
            .catch(this.handleError);
    };
    ODataService.prototype.patch = function (odataQuery, body, etag, requestOptionsArgs) {
        var url = odataQuery.toString();
        var args = this.mergeETag(ODataService_1.REQUEST_OPTIONS_ARGS_POST, etag);
        args = this.mergeOverride(args, requestOptionsArgs);
        return this.http.patch(url, body, args)
            .map(function (response) { return new __WEBPACK_IMPORTED_MODULE_7__odata_response_odata_response__["a" /* ODataResponse */](response); })
            .catch(this.handleError);
    };
    ODataService.prototype.put = function (odataQuery, body, etag, requestOptionsArgs) {
        var url = odataQuery.toString();
        var args = this.mergeETag(ODataService_1.REQUEST_OPTIONS_ARGS_POST, etag);
        args = this.mergeOverride(args, requestOptionsArgs);
        return this.http.put(url, body, args)
            .map(function (response) { return new __WEBPACK_IMPORTED_MODULE_7__odata_response_odata_response__["a" /* ODataResponse */](response); })
            .catch(this.handleError);
    };
    ODataService.prototype.delete = function (odataQuery, etag, requestOptionsArgs) {
        var url = odataQuery.toString();
        var args = this.mergeETag(requestOptionsArgs, etag);
        return this.http.delete(url, args)
            .map(function (response) { return new __WEBPACK_IMPORTED_MODULE_7__odata_response_odata_response__["a" /* ODataResponse */](response); })
            .catch(this.handleError);
    };
    ODataService.prototype.mergeETag = function (args, etag) {
        if (__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNullOrUndefined(etag)) {
            return args;
        }
        if (__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNullOrUndefined(args)) {
            args = {};
        }
        if (__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNullOrUndefined(args.headers)) {
            args.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Headers */]();
        }
        args.headers.set(ODataService_1.IF_MATCH_HEADER, etag);
        return args;
    };
    ODataService.prototype.mergeOverride = function (args1, args2) {
        if (__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNullOrUndefined(args1)) {
            return args2;
        }
        if (__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNullOrUndefined(args2)) {
            return args1;
        }
        var args = { headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Headers */](args1.headers) };
        // merge/override headers
        var headers2 = args2.headers;
        for (var _i = 0, _a = headers2.keys(); _i < _a.length; _i++) {
            var key = _a[_i];
            args.headers.set(key, headers2.get(key));
        }
        // override withCredentials
        args.withCredentials = args2.withCredentials;
        // override responseType
        args.responseType = args2.responseType;
        return args;
    };
    ODataService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Response */]) {
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
ODataService.REQUEST_OPTIONS_ARGS_POST = {
    headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' }),
};
ODataService.IF_MATCH_HEADER = 'If-Match';
ODataService = ODataService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ODataService);

var ODataService_1, _a;
//# sourceMappingURL=odata.service.js.map

/***/ }),

/***/ "../../../../../src/app/odata/odata.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__odata_service_odata_service__ = __webpack_require__("../../../../../src/app/odata/odata-service/odata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ODataModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ODataModule = (function () {
    function ODataModule() {
    }
    return ODataModule;
}());
ODataModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_1__odata_service_odata_service__["a" /* ODataService */]]
    })
], ODataModule);

//# sourceMappingURL=odata.module.js.map

/***/ }),

/***/ "../../../../../src/app/odata/query-options/expand.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__query_options__ = __webpack_require__("../../../../../src/app/odata/query-options/query-options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__("../../../../../src/app/odata/utils/utils.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Expand; });


var Expand = (function () {
    function Expand(entitySet) {
        __WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(entitySet, 'entitySet');
        __WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* Utils */].requireNotEmpty(entitySet, 'entitySet');
        this.entitySet = entitySet;
        this.queryOptions = new __WEBPACK_IMPORTED_MODULE_0__query_options__["a" /* QueryOptions */](Expand.SEPARATOR);
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
        if (!__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* Utils */].isEmpty(this.queryOptions)) {
            res += '(' + this.queryOptions + ')';
        }
        return res;
    };
    Expand.prototype.isEmpty = function () {
        return __WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* Utils */].isEmpty(this.entitySet);
    };
    return Expand;
}());

Expand.SEPARATOR = ';';
//# sourceMappingURL=expand.js.map

/***/ }),

/***/ "../../../../../src/app/odata/query-options/filter/filter-string.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__("../../../../../src/app/odata/utils/utils.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterString; });

var FilterString = (function () {
    function FilterString(filter) {
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(filter, 'filter');
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotEmpty(filter, 'filter');
        this.filter = filter;
    }
    FilterString.prototype.toString = function () {
        return this.filter;
    };
    FilterString.prototype.isEmpty = function () {
        return __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNullOrUndefined(this.filter) || !this.filter.length;
    };
    return FilterString;
}());

//# sourceMappingURL=filter-string.js.map

/***/ }),

/***/ "../../../../../src/app/odata/query-options/operator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OperatorComparison */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorLogical; });
/* unused harmony export OperatorArithmetic */
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
//# sourceMappingURL=operator.js.map

/***/ }),

/***/ "../../../../../src/app/odata/query-options/orderby.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__("../../../../../src/app/odata/utils/utils.ts");
/* unused harmony export Order */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Orderby; });

var Order;
(function (Order) {
    Order[Order["ASC"] = 0] = "ASC";
    Order[Order["DESC"] = 1] = "DESC";
})(Order || (Order = {}));
var Orderby = (function () {
    function Orderby(property, order) {
        __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(property, 'property');
        this.property = property;
        this.order = order;
    }
    Orderby.prototype.toString = function () {
        var res = this.property;
        if (!__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* Utils */].isNullOrUndefined(this.order)) {
            res += ' ' + Order[this.order].toLowerCase();
        }
        return res;
    };
    return Orderby;
}());

//# sourceMappingURL=orderby.js.map

/***/ }),

/***/ "../../../../../src/app/odata/query-options/query-options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter_filter_string__ = __webpack_require__("../../../../../src/app/odata/query-options/filter/filter-string.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expand__ = __webpack_require__("../../../../../src/app/odata/query-options/expand.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_utils__ = __webpack_require__("../../../../../src/app/odata/utils/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orderby__ = __webpack_require__("../../../../../src/app/odata/query-options/orderby.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryOptions; });




var QueryOptions = (function () {
    function QueryOptions(separator) {
        __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(separator, 'separator');
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
    }
    QueryOptions.prototype.select = function (select) {
        this.checkFieldAlreadySet(this._select, 'select');
        __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(select, 'select');
        __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNotEmpty(select, 'select');
        this._select = typeof (select) === 'string' ? [select] : select;
        return this;
    };
    QueryOptions.prototype.filter = function (filter) {
        this.checkFieldAlreadySet(this._filter, 'filter');
        __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(filter, 'filter');
        __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNotEmpty(filter, 'filter');
        this._filter = typeof (filter) === 'string' ? new __WEBPACK_IMPORTED_MODULE_0__filter_filter_string__["a" /* FilterString */](filter) : filter;
        return this;
    };
    QueryOptions.prototype.expand = function (expand) {
        this.checkFieldAlreadySet(this._expand, 'expand');
        __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(expand, 'expand');
        __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNotEmpty(expand, 'expand');
        this._expand = typeof (expand) === 'string' ? [new __WEBPACK_IMPORTED_MODULE_1__expand__["a" /* Expand */](expand)] : expand instanceof __WEBPACK_IMPORTED_MODULE_1__expand__["a" /* Expand */] ? [expand] : expand;
        return this;
    };
    QueryOptions.prototype.orderby = function (orderby) {
        this.checkFieldAlreadySet(this._orderby, 'orderby');
        __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(orderby, 'orderby');
        __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNotEmpty(orderby, 'orderby');
        this._orderby = typeof (orderby) === 'string' ? [new __WEBPACK_IMPORTED_MODULE_3__orderby__["a" /* Orderby */](orderby)] : orderby;
        return this;
    };
    QueryOptions.prototype.search = function (search) {
        this.checkFieldAlreadySet(this._search, 'search');
        __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNotUndefined(search, 'search');
        __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNotEmpty(search, 'search');
        this._search = search;
        return this;
    };
    QueryOptions.prototype.skip = function (skip) {
        this.checkFieldAlreadySet(this._skip, 'skip');
        __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(skip, 'skip');
        __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNotNegative(skip, 'skip');
        this._skip = skip;
        return this;
    };
    QueryOptions.prototype.top = function (top) {
        this.checkFieldAlreadySet(this._top, 'top');
        __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(top, 'top');
        __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNotNegative(top, 'top');
        this._top = top;
        return this;
    };
    QueryOptions.prototype.count = function (count) {
        this.checkFieldAlreadySet(this._count, 'count');
        __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(count, 'count');
        this._count = count;
        return this;
    };
    QueryOptions.prototype.customOption = function (key, value) {
        __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(key, 'key');
        __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNotEmpty(key, 'key');
        __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNotNullNorUndefined(value, 'value');
        __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNotEmpty(value, 'value');
        if (__WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].isNullOrUndefined(this._customOptions)) {
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
        if (!__WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].isNullOrUndefined(this._select)) {
            queryOptions += '$select=';
            if (typeof (this._select) === 'string') {
                queryOptions += this._select;
            }
            else {
                queryOptions += __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].toString(this._select);
            }
        }
        // add filter
        if (!__WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].isNullOrUndefined(this._filter)) {
            if (queryOptions.length) {
                queryOptions += this._separator;
            }
            queryOptions += '$filter=' + encodeURIComponent(this._filter.toString());
        }
        // add expand
        if (!__WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].isNullOrUndefined(this._expand)) {
            if (queryOptions.length) {
                queryOptions += this._separator;
            }
            queryOptions += '$expand=';
            if (typeof (this._expand) === 'string') {
                queryOptions += this._expand;
            }
            else {
                queryOptions += __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].toString(this._expand);
            }
        }
        // add orderby
        if (!__WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].isNullOrUndefined(this._orderby)) {
            if (queryOptions.length) {
                queryOptions += this._separator;
            }
            queryOptions += '$orderby=';
            if (typeof (this._orderby) === 'string') {
                queryOptions += this._orderby;
            }
            else {
                queryOptions += __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].toString(this._orderby);
            }
        }
        // add search
        if (!__WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].isNullOrUndefined(this._search)) {
            if (queryOptions.length) {
                queryOptions += this._separator;
            }
            queryOptions += '$search=' + encodeURIComponent(this._search.toString());
        }
        // add skip
        if (!__WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].isNullOrUndefined(this._skip)) {
            if (queryOptions.length) {
                queryOptions += this._separator;
            }
            queryOptions += '$skip=' + this._skip;
        }
        // add top
        if (!__WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].isNullOrUndefined(this._top)) {
            if (queryOptions.length) {
                queryOptions += this._separator;
            }
            queryOptions += '$top=' + this._top;
        }
        // add count
        if (!__WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].isNullOrUndefined(this._count)) {
            if (queryOptions.length) {
                queryOptions += this._separator;
            }
            queryOptions += '$count=' + this._count;
        }
        // add custom query options
        if (__WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].isNotNullNorUndefined(this._customOptions) && this._customOptions.size > 0) {
            this._customOptions.forEach(function (value, key, map) {
                if (queryOptions.length) {
                    queryOptions += _this._separator;
                }
                queryOptions += key + '=' + encodeURIComponent(value);
            });
        }
        return queryOptions;
    };
    QueryOptions.prototype.isEmpty = function () {
        for (var key in this) {
            if (key === '_purpose' || key === '_separator') {
                continue;
            }
            if (this.hasOwnProperty(key) && !__WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].isEmpty(this[key])) {
                return false;
            }
        }
        return true;
    };
    QueryOptions.prototype.checkFieldAlreadySet = function (fieldValue, fieldName) {
        try {
            __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].requireNullOrUndefined(fieldValue, fieldName);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__query_options_operator__ = __webpack_require__("../../../../../src/app/odata/query-options/operator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__odata_query_quoted_string__ = __webpack_require__("../../../../../src/app/odata/odata-query/quoted-string.ts");
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
        else if (res instanceof __WEBPACK_IMPORTED_MODULE_1__odata_query_quoted_string__["a" /* QuotedString */]) {
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
            if (Utils.isNotNullNorUndefined(operator) && operator === __WEBPACK_IMPORTED_MODULE_0__query_options_operator__["a" /* OperatorLogical */].NOT) {
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
        var operatorString = __WEBPACK_IMPORTED_MODULE_0__query_options_operator__["a" /* OperatorLogical */][operator].toLowerCase();
        if (Utils.isNotNullNorUndefined(operatorUppercase) && operatorUppercase) {
            operatorString = operatorString.toUpperCase();
        }
        return operatorString;
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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