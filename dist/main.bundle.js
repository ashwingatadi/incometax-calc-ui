webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>Task: Employee payslip for a flexible pay cycle</h2>\n  <hr/>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_service__ = __webpack_require__("../../../../../src/app/report.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(reportService) {
        this.reportService = reportService;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__report_service__["a" /* ReportService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_calendar__ = __webpack_require__("../../../../primeng/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_inputs_user_inputs_component__ = __webpack_require__("../../../../../src/app/user-inputs/user-inputs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__report_report_component__ = __webpack_require__("../../../../../src/app/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__report_service__ = __webpack_require__("../../../../../src/app/report.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__user_inputs_user_inputs_component__["a" /* UserInputsComponent */] },
    { path: 'report', component: __WEBPACK_IMPORTED_MODULE_9__report_report_component__["a" /* ReportComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__user_inputs_user_inputs_component__["a" /* UserInputsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__report_report_component__["a" /* ReportComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_primeng_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__report_service__["a" /* ReportService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportService = /** @class */ (function () {
    function ReportService(http) {
        this.http = http;
    }
    ReportService.prototype.generateReport = function (firstname, lastname, annualSalary, superRate, reportDate) {
        var _this = this;
        this.fullname = firstname.trim() + ' ' + lastname.trim();
        this.payPeriod = this.getPayPeriod(reportDate);
        this.grossIncome = Math.round(annualSalary / 12);
        this.getIncomeTax(annualSalary).subscribe(function (response) {
            _this.incomeTax = parseInt(response._body);
            _this.netIncome = _this.grossIncome - _this.incomeTax;
        }, function (error) {
            console.log(error);
        });
        this.superAmount = Math.round(this.grossIncome * superRate / 100);
    };
    ReportService.prototype.getPayPeriod = function (date) {
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDate();
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        var monthname = this.getMonthName(date.getMonth());
        return firstDay + ' ' + monthname + ' - ' + lastDay + ' ' + monthname + ', ' + date.getFullYear();
    };
    ReportService.prototype.getMonthName = function (month) {
        return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][month];
    };
    ReportService.prototype.getIncomeTax = function (annualSalary) {
        return this.http.get("https://arcane-spire-97335.herokuapp.com/getIncomeTax/" + annualSalary);
        //.map((response:any) => { this.incomeTax =  parseInt(response._body)}) ;
    };
    ReportService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "../../../../../src/app/report/report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-5\"><h3>Payslip for a flexible pay cycle</h3></div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-2\"><b>Full Name</b></div>\n  <div class=\"col-sm-3\"> {{this.reportService.fullname}}</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-2\"><b>Pay Period</b></div>\n  <div class=\"col-sm-3\"> {{this.reportService.payPeriod}}</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-2\"><b>Gross Income</b></div>\n  <div class=\"col-sm-3\"> {{this.reportService.grossIncome}}</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-2\"><b>Income Tax</b></div>\n  <div class=\"col-sm-3\"> {{this.reportService.incomeTax}}</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-2\"><b>Net Income</b></div>\n  <div class=\"col-sm-3\"> {{this.reportService.netIncome}}</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-2\"><b>Super Amount</b></div>\n  <div class=\"col-sm-3\"> {{this.reportService.superAmount}}</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-5\" style=\"text-align: right\">\n    <button class=\"btn btn-primary\" routerLink = \"/\">Go to user inputs</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_service__ = __webpack_require__("../../../../../src/app/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportComponent = /** @class */ (function () {
    function ReportComponent(router, reportService) {
        this.router = router;
        this.reportService = reportService;
        if (this.reportService.fullname === undefined) {
            this.router.navigate(['/']);
        }
    }
    ReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-report',
            template: __webpack_require__("../../../../../src/app/report/report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__report_service__["a" /* ReportService */]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-inputs/user-inputs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched{\n    border: 1px solid red !important;\n}\n\nspan.ng-tns-c2-0.ui-calendar.ui-calendar-w-btn{\n    border: 1px solid red !important;\n    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-inputs/user-inputs.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"onSubmit()\" #f=\"ngForm\">\n  <div class=\"row form-group\">\n    <div class=\"col-sm-2\">\n      <label for=\"firstName\">First Name</label>\n    </div>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" \n      class=\"form-control\" \n      name=\"firstName\" \n      placeholder=\"First Name\" \n      ngModel\n      required\n      #firstName = \"ngModel\"/>\n      <span class=\"help-block\" *ngIf=\"!firstName.valid && firstName.touched\">Please enter a valid first name</span>      \n    </div>\n  </div>\n\n  <div class=\"row form-group\">\n    <div class=\"col-sm-2\">\n      <label for=\"lastname\">Last Name</label>\n    </div>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" \n      class=\"form-control\" \n      name=\"lastName\" \n      placeholder=\"Last Name\" \n      ngModel\n      required\n      #lastName = \"ngModel\"/>\n      <span class=\"help-block\" *ngIf=\"!lastName.valid && lastName.touched\">Please enter a valid last name</span>      \n    </div>\n  </div>\n\n  <div class=\"row form-group\">\n    <div class=\"col-sm-2\">\n      <label for=\"annualSalary\">Annual Salary</label>\n    </div>\n    <div class=\"col-sm-4\">\n      <input type=\"number\" \n      class=\"form-control\" \n      name=\"annualSalary\" \n      placeholder=\"Annual Salary\" \n      min=\"0\"\n      ngModel\n      required\n      #annualSalary = \"ngModel\"/>\n      <span class=\"help-block\" *ngIf=\"!annualSalary.valid && annualSalary.touched\">Please enter a valid annual salary</span>  \n      <p *ngIf=\"annualSalary.errors?.min\">error message</p>          \n    </div>\n  </div>\n\n  <div class=\"row form-group\">\n    <div class=\"col-sm-2\">\n      <label for=\"superRate\">Super Rate ( 0 - 12%)</label>\n    </div>\n    <div class=\"col-sm-4\">\n      <input type=\"number\" \n      class=\"form-control\" \n      min=\"0\" \n      max=\"12\" \n      name=\"superRate\" \n      placeholder=\"Super Rate\" \n      ngModel\n      required\n      #superRate = \"ngModel\"/>\n      <span class=\"help-block\" *ngIf=\"!superRate.valid && superRate.touched\">Please enter a valid super rate</span>      \n    </div>\n  </div>\n\n  <div class=\"row form-group\">\n    <div class=\"col-sm-2\">\n      <label for=\"paymentStartDate\">Payment Start Date</label>\n    </div>\n    <div class=\"col-sm-4\">\n          <p-calendar \n          #calendar\n          #cal = \"ngModel\"\n          name=\"paymentStartDate\" \n          [showIcon]=\"true\" \n          dateFormat=\"MM yy\" \n          placeholder=\"Payment Date\"\n          ngModel\n          required\n          ></p-calendar>\n          <span class=\"help-block\" *ngIf=\"!cal.valid && cal.touched\">Please enter a valid date</span>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-6\" style=\"text-align: right\">\n      <button type=\"submit\" \n      class=\"btn btn-primary\"\n      [disabled] = \"!f.valid\">Generate Report</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/user-inputs/user-inputs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInputsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_service__ = __webpack_require__("../../../../../src/app/report.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserInputsComponent = /** @class */ (function () {
    function UserInputsComponent(router, reportService) {
        this.router = router;
        this.reportService = reportService;
    }
    UserInputsComponent.prototype.ngAfterViewChecked = function () {
        if (this.calendar.el.nativeElement.classList.value.includes("ng-invalid")
            &&
                this.calendar.el.nativeElement.classList.value.includes("ng-touched")) {
            this.calendar.inputfieldViewChild.nativeElement.style.border = "1px solid red";
        }
        else {
            this.calendar.inputfieldViewChild.nativeElement.style.border = "";
        }
    };
    UserInputsComponent.prototype.onSubmit = function () {
        var invalid = false;
        invalid = this.form.value.annualSalary < 0 || invalid;
        if (invalid) {
            this.form.controls.annualSalary.setErrors({ 'incorrect': true });
        }
        invalid = this.form.value.superRate < 0 || this.form.value.superRate > 12 || invalid;
        if (invalid) {
            this.form.controls.superRate.setErrors({ 'incorrect': true });
        }
        if (!invalid) {
            console.log(this.form);
            this.reportService.generateReport(this.form.value.firstName, this.form.value.lastName, this.form.value.annualSalary, this.form.value.superRate, this.form.value.paymentStartDate);
            this.router.navigate(['/report']);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('calendar'),
        __metadata("design:type", Object)
    ], UserInputsComponent.prototype, "calendar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"])
    ], UserInputsComponent.prototype, "form", void 0);
    UserInputsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-inputs',
            template: __webpack_require__("../../../../../src/app/user-inputs/user-inputs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-inputs/user-inputs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__report_service__["a" /* ReportService */]])
    ], UserInputsComponent);
    return UserInputsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map