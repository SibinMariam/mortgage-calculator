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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  margin-bottom: 0px;\n  border-bottom: 1px solid #dedede;\n  height: 50px;\n  background-color: #000;\n  padding-bottom: 10px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\"></div>\n  </nav>\n  <div class=\"ui-view\">\n    <app-mortgage-calculator></app-mortgage-calculator>\n  </div>\n</div>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "MortgageCalculator";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_mortgage_calculator_mortgage_calculator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mortgage-calculator/mortgage-calculator.component */ "./src/app/components/mortgage-calculator/mortgage-calculator.component.ts");
/* harmony import */ var _components_mortgage_summary_mortgage_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mortgage-summary/mortgage-summary.component */ "./src/app/components/mortgage-summary/mortgage-summary.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_mortgage_calculator_mortgage_calculator_component__WEBPACK_IMPORTED_MODULE_5__["MortgageCalculatorComponent"],
                _components_mortgage_summary_mortgage_summary_component__WEBPACK_IMPORTED_MODULE_6__["MortgageSummaryComponent"],
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/mortgage-calculator/mortgage-calculator.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/mortgage-calculator/mortgage-calculator.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mortgage-calc-container {\n  margin-top: 40px;\n  margin-bottom: 60px;\n}\n.section-header {\n  border-bottom: 1px solid rgb(228, 228, 228);\n}\n.form-body {\n  padding-top: 30px;\n}\n.field-section {\n  padding-bottom: 20px;\n}\n"

/***/ }),

/***/ "./src/app/components/mortgage-calculator/mortgage-calculator.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/mortgage-calculator/mortgage-calculator.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mortgage-calc-container container\">\n  <div class=\"section-header\">\n    <h4>Mortgage Payment Calculator</h4>\n  </div>\n  <div class=\"mortgage-form\">\n    <form\n      name=\"mortgageForm\"\n      #f=\"ngForm\"\n      (ngSubmit)=\"onSubmit()\"\n      id=\"mortgageForm\"\n    >\n      <div class=\"form-body\">\n        <section>\n          <div class=\"row field-section\">\n            <div class=\"col-2 field-label\">\n              <label>*Mortgage Amount</label>\n              <span\n                class=\"bi bi-question-circle-fill more-info-icon\"\n                ngbTooltip=\"The amount you expect to borrow from your financial institution\"\n                placement=\"right\"\n                container=\"body\"\n              >\n              </span>\n            </div>\n            <div class=\"col-4 field-element input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">$</span>\n              </div>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"mortgageAmount\"\n                [ngClass]=\"{\n                  'is-invalid': f.submitted && mortgageAmount.invalid\n                }\"\n                #mortgageAmount=\"ngModel\"\n                aria-label=\"Mortgage Amount\"\n                [(ngModel)]=\"formData.mortgageAmount\"\n                name=\"mortgageAmount\"\n                required\n                type=\"number\"\n                min=\"0\"\n              />\n              <div class=\"invalid-feedback\">\n                <div\n                  class=\"mortgageAmountError\"\n                  *ngIf=\"\n                    mortgageAmount.errors && mortgageAmount.errors.required\n                  \"\n                >\n                  Please provide Mortgage Amount\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row field-section\">\n            <div class=\"col-2 field-label\">\n              <label>*Interest Rate</label>\n              <span\n                class=\"bi bi-question-circle-fill more-info-icon\"\n                ngbTooltip=\"Annual interest rate for this mortgage\"\n                placement=\"right\"\n                container=\"body\"\n              >\n              </span>\n            </div>\n            <div class=\"col-4 field-element input-group\">\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                aria-label=\"Interest Rate\"\n                name=\"interestRate\"\n                id=\"interestRate\"\n                [ngClass]=\"{\n                  'is-invalid': f.submitted && interestRate.invalid\n                }\"\n                #interestRate=\"ngModel\"\n                [(ngModel)]=\"formData.interestRate\"\n                required\n              />\n\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text\" id=\"basic-addon2\">%</span>\n              </div>\n              <div class=\"invalid-feedback\">\n                <div\n                  class=\"interestRateError\"\n                  *ngIf=\"interestRate.errors && interestRate.errors.required\"\n                >\n                  Please provide Interest Rate\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row field-section\">\n            <div class=\"col-2 field-label\">\n              <label>*Amortization Period</label>\n              <span\n                class=\"bi bi-question-circle-fill more-info-icon\"\n                ngbTooltip=\"The number of years and months over which you will repay this loan\"\n                placement=\"right\"\n                container=\"body\"\n              >\n              </span>\n            </div>\n            <div class=\"col-2 field-element\">\n              <select\n                class=\"custom-select\"\n                name=\"amortizationPeriodYear\"\n                id=\"amortizationPeriodYear\"\n                [(ngModel)]=\"formData.amortizationPeriodYear\"\n              >\n                <option\n                  *ngFor=\"let option of amortizationPeriodYearOptions\"\n                  [value]=\"option\"\n                >\n                  {{ option > 1 ? option + \" Years\" : option + \" Year\" }}\n                </option>\n              </select>\n            </div>\n            <div class=\"col-2 field-element\">\n              <select\n                class=\"custom-select\"\n                name=\"amortizationPeriodMonth\"\n                id=\"amortizationPeriodMonth\"\n                [(ngModel)]=\"formData.amortizationPeriodMonth\"\n              >\n                <option value=\"\"></option>\n                <option\n                  *ngFor=\"let option of amortizationPeriodMonths\"\n                  [value]=\"option\"\n                >\n                  {{\n                    option && option != 1\n                      ? option + \" Months\"\n                      : option + \" Month\"\n                  }}\n                </option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row field-section\">\n            <div class=\"col-2 field-label\">\n              <label>*Payment Frequency</label>\n            </div>\n            <div class=\"col-4 field-element\">\n              <select\n                class=\"custom-select\"\n                [(ngModel)]=\"formData.paymentFrequency\"\n                id=\"paymentFrequency\"\n                name=\"paymentFrequency\"\n              >\n                <option\n                  *ngFor=\"let option of paymetOptions\"\n                  [value]=\"option.value\"\n                >\n                  {{ option.label }}\n                </option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row field-section\">\n            <div class=\"col-2 field-label\">\n              <label>*Term</label>\n              <span\n                class=\"bi bi-question-circle-fill more-info-icon\"\n                ngbTooltip=\"The number of term years\"\n                placement=\"right\"\n                container=\"body\"\n              >\n              </span>\n            </div>\n\n            <div class=\"col-2 field-element\">\n              <select\n                class=\"custom-select\"\n                [(ngModel)]=\"formData.term\"\n                id=\"term\"\n                name=\"term\"\n              >\n                <option *ngFor=\"let option of termYearOptions\" [value]=\"option\">\n                  {{ option > 1 ? option + \" Years\" : option + \" Year\" }}\n                </option>\n              </select>\n            </div>\n          </div>\n        </section>\n      </div>\n      <button\n        class=\"submit-button btn btn-primary\"\n        type=\"submit\"\n        id=\"mortgageSubmit\"\n      >\n        Calculate\n      </button>\n    </form>\n  </div>\n  <app-mortgage-summary [summaryInfo]=\"summaryInfo\"></app-mortgage-summary>\n</div>\n"

/***/ }),

/***/ "./src/app/components/mortgage-calculator/mortgage-calculator.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/mortgage-calculator/mortgage-calculator.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MortgageCalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MortgageCalculatorComponent", function() { return MortgageCalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MortgageCalculatorComponent = /** @class */ (function () {
    function MortgageCalculatorComponent() {
        // Creating an array of numbers from 1 to AmortizationPeriodMaxLimit to display  Amortization year dropdown
        this.amortizationPeriodYearOptions = Array.from(Array(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].amortizationPeriodMaxLimit + 1).keys()).slice(1);
        // Creating an array of numbers from 1 to 12 to display Amortization Months in dropdown
        this.amortizationPeriodMonths = Array.from(Array(12).keys());
        // Creating an array of numbers from 1 to termMaxLimit to display  Tterms year dropdown
        this.termYearOptions = Array.from(Array(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].termMaxLimit + 1).keys()).slice(1);
        this.formData = {
            mortgageAmount: null,
            interestRate: _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].defaultInterestRate,
            amortizationPeriodYear: _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].defaultamortizationPeriod,
            amortizationPeriodMonth: null,
            defaultamortizationPeriod: _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].defaultamortizationPeriod,
            paymentFrequency: _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].defaultpayOption,
            term: _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].defaultTerm,
        };
        this.paymetOptions = _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].payOptions;
    }
    MortgageCalculatorComponent.prototype.ngOnInit = function () { };
    MortgageCalculatorComponent.prototype.getPaymentDetails = function () {
        var startPrinciple = Number(this.formData.mortgageAmount);
        var interestRate = Number(this.formData.interestRate);
        var paymentType = this.formData.paymentFrequency;
        //Get payment frequecy/year from selected payment type.
        var paymentFrequency;
        paymentFrequency = _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].payOptions.filter(function (item) {
            return item.value == paymentType;
        })[0].frequency;
        var periodInterestRate = interestRate / 100 / Number(paymentFrequency);
        // Calculating total amortizationPeriod in years by combining year and month dropdown options.
        var amortizationPeriod = this.formData.amortizationPeriodYear +
            (this.formData.amortizationPeriodMonth
                ? Number(this.formData.amortizationPeriodMonth) / 12
                : 0);
        var termYears = Number(this.formData.term);
        var years = Number(amortizationPeriod);
        var numberofPayments = years * paymentFrequency;
        var termNumberOfPayments = termYears * paymentFrequency;
        /** payPerPeriod Calculation is based on equation payment/period = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
         * P = priciapl amount, i = interest rate per period, n = number of payments in the total duation.
         **/
        var expValue = Math.pow(1 + +periodInterestRate, numberofPayments);
        var payPerPeriod = startPrinciple * ((periodInterestRate * expValue) / (expValue - 1));
        /**
         * If the Total Cost calculation is needed only for Amortization Period, we can calculate Total interest paid = (pay per period*No of payments) - startPrinciple.
         * But in our case we need to find it for the term period also.
         * As we need to display Total Cost for a term period along with complete Amortization Period, iterating till the period and adding up totalInterestPaid
         * Enhancement scope: This values with each time projections while itteration can display in a table/Graph with for more detailed visualization.
         */
        var deductedPrinciple = startPrinciple;
        var totalInterestPaid = 0;
        var currentPeriod = 1;
        var totalTermInterestPaid = 0;
        var totalTermPrinciplePaid = 0;
        // Iterating till deductedPrinciple is greater than 0
        while (deductedPrinciple >= 0) {
            var periodInterest = deductedPrinciple * periodInterestRate;
            var principlePaid = payPerPeriod - periodInterest;
            totalInterestPaid = totalInterestPaid + periodInterest;
            deductedPrinciple = deductedPrinciple - principlePaid;
            /**
             * For term interest and priciple paymentt calculation.
             * Till termNumberOfPayments, adding interest and pricipal paid during that term period.
             */
            if (currentPeriod <= termNumberOfPayments) {
                totalTermInterestPaid = totalTermInterestPaid + periodInterest;
                totalTermPrinciplePaid = totalTermPrinciplePaid + principlePaid;
            }
            currentPeriod++;
        }
        var totalCost = totalInterestPaid + startPrinciple;
        var termTotalCost = totalTermPrinciplePaid + totalTermInterestPaid;
        var durationMonth = this.formData.amortizationPeriodMonth &&
            this.formData.amortizationPeriodMonth != 0
            ? ", " + this.formData.amortizationPeriodMonth + " " + "Months"
            : "";
        this.summaryInfo = {
            payPerPeriod: payPerPeriod,
            amortizationNoOfPayments: paymentFrequency * years,
            termNoOfPayments: paymentFrequency * Number(this.formData.term),
            amortizationDuration: this.formData.amortizationPeriodYear + " Years" + durationMonth,
            termDuration: this.formData.term,
            amortizationTotalInterestPaid: totalInterestPaid,
            termTotalInterestPaid: totalTermInterestPaid,
            amortizationTotalTermPrinciplePaid: startPrinciple,
            termTotalTermPrinciplePaid: totalTermPrinciplePaid,
            amortizationTotalCost: totalCost,
            termTotalCost: termTotalCost,
        };
    };
    MortgageCalculatorComponent.prototype.isFormValid = function () {
        // Checking if its number or empty for validation
        if (!this.formData.mortgageAmount ||
            !this.formData.interestRate ||
            isNaN(this.formData.mortgageAmount) ||
            isNaN(this.formData.interestRate)) {
            return false;
        }
        return true;
    };
    MortgageCalculatorComponent.prototype.onSubmit = function () {
        // Calculations are doing only if the form is valid.
        if (!this.isFormValid()) {
            return;
        }
        this.getPaymentDetails();
    };
    MortgageCalculatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-mortgage-calculator",
            template: __webpack_require__(/*! ./mortgage-calculator.component.html */ "./src/app/components/mortgage-calculator/mortgage-calculator.component.html"),
            styles: [__webpack_require__(/*! ./mortgage-calculator.component.css */ "./src/app/components/mortgage-calculator/mortgage-calculator.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], MortgageCalculatorComponent);
    return MortgageCalculatorComponent;
}());



/***/ }),

/***/ "./src/app/components/mortgage-summary/mortgage-summary.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/mortgage-summary/mortgage-summary.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mortgage-summary {\n  padding-top: 40px;\n}\n.term-summary {\n  padding-top: 25px;\n}\n.summary-title {\n  border-bottom: 1px solid #dedede;\n  padding-bottom: 12px;\n}\n.summary-content {\n  margin-top: 20px;\n}\n.bold-info {\n  font-weight: 600;\n  padding-left: 2px;\n}\n"

/***/ }),

/***/ "./src/app/components/mortgage-summary/mortgage-summary.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/mortgage-summary/mortgage-summary.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mortgage-summary\" *ngIf=\"summaryInfo && summaryInfo.payPerPeriod\">\n  <h4>Calculation Summary</h4>\n  <div class=\"summary-content\">\n    <div class=\"table-responsive\">\n      <table class=\"table table-striped table-hover table-bordered\">\n        <thead>\n          <tr>\n            <th>Category</th>\n            <th>Term</th>\n            <th>Amortization Period</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>Number of Payments</td>\n            <td>\n              {{ summaryInfo.termNoOfPayments }}\n            </td>\n            <td>\n              {{ summaryInfo.amortizationNoOfPayments }}\n            </td>\n          </tr>\n          <tr>\n            <td>Mortgage Payment</td>\n            <td>\n              {{ summaryInfo.payPerPeriod }}\n            </td>\n            <td>\n              {{ summaryInfo.payPerPeriod }}\n            </td>\n          </tr>\n          <tr>\n            <td>Principal Payments</td>\n            <td>\n              {{ summaryInfo.termTotalTermPrinciplePaid }}\n            </td>\n            <td>\n              {{ summaryInfo.amortizationTotalTermPrinciplePaid }}\n            </td>\n          </tr>\n          <tr>\n            <td>Interest Payments</td>\n            <td>\n              {{ summaryInfo.termTotalInterestPaid }}\n            </td>\n            <td>\n              {{ summaryInfo.amortizationTotalInterestPaid }}\n            </td>\n          </tr>\n          <tr>\n            <td>Total Cost</td>\n            <td>\n              {{ summaryInfo.termTotalCost }}\n            </td>\n            <td>\n              {{ summaryInfo.amortizationTotalCost }}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <h4 class=\"summary-title\">Mortgage Summary</h4>\n    <div class=\"summary-content\">\n      <div class=\"amortization-summary\">\n        <h6>Amortization Info</h6>\n        <div>\n          During the term period of\n          <span class=\"bold-info\"\n            >{{ summaryInfo.amortizationDuration }},\n          </span>\n          you will have made\n          <span class=\"bold-info\">{{\n            summaryInfo.amortizationNoOfPayments\n          }}</span>\n          payments of\n          <span class=\"bold-info\">{{ summaryInfo.payPerPeriod }}.</span>\n          <div>\n            You have paid\n            <span class=\"bold-info\">{{\n              summaryInfo.amortizationTotalTermPrinciplePaid\n            }}</span>\n            in principal,\n            <span class=\"bold-info\"\n              >{{ summaryInfo.amortizationTotalInterestPaid }}\n            </span>\n            in interest, for a total of\n            <span class=\"bold-info\"\n              >{{ summaryInfo.amortizationTotalCost }}.</span\n            >\n          </div>\n        </div>\n      </div>\n      <div class=\"term-summary\">\n        <h6>Term Info</h6>\n        <div>\n          During the term period of\n          <span class=\"bold-info\">{{ summaryInfo.termDuration }}</span>\n          Year, you will have made\n          <span class=\"bold-info\">{{ summaryInfo.termNoOfPayments }}</span>\n          payments of\n          <span class=\"bold-info\">{{ summaryInfo.payPerPeriod }}.</span>\n        </div>\n        <div>\n          You have paid\n          <span class=\"bold-info\">{{\n            summaryInfo.termTotalTermPrinciplePaid\n          }}</span>\n          in principal,\n          <span class=\"bold-info\"\n            >{{ summaryInfo.termTotalInterestPaid }}\n          </span>\n          in interest, for a total of\n          <span class=\"bold-info\">{{ summaryInfo.termTotalCost }}.</span>\n          And have a balance of\n          <span class=\"bold-info\"\n            >{{\n              summaryInfo.amortizationTotalTermPrinciplePaid -\n                summaryInfo.termTotalTermPrinciplePaid\n            }}.</span\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/mortgage-summary/mortgage-summary.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/mortgage-summary/mortgage-summary.component.ts ***!
  \***************************************************************************/
/*! exports provided: MortgageSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MortgageSummaryComponent", function() { return MortgageSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MortgageSummaryComponent = /** @class */ (function () {
    function MortgageSummaryComponent() {
    }
    MortgageSummaryComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MortgageSummaryComponent.prototype, "summaryInfo", void 0);
    MortgageSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-mortgage-summary",
            template: __webpack_require__(/*! ./mortgage-summary.component.html */ "./src/app/components/mortgage-summary/mortgage-summary.component.html"),
            styles: [__webpack_require__(/*! ./mortgage-summary.component.css */ "./src/app/components/mortgage-summary/mortgage-summary.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], MortgageSummaryComponent);
    return MortgageSummaryComponent;
}());



/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.amortizationPeriodMaxLimit = 30;
    Constants.defaultamortizationPeriod = 25;
    Constants.termMaxLimit = 5;
    Constants.defaultInterestRate = 2.5;
    Constants.defaultTerm = 1;
    Constants.payOptions = [
        { value: "WEEKLY", frequency: 52, label: "Weekly" },
        { value: "BI-WEEKLY", frequency: 26, label: "Bi-Weekly(Every 2 weeks)" },
        {
            value: "SEMI-MONTHLY",
            frequency: 24,
            label: "Semi-Monthly(24x per year)",
        },
        { value: "MONTHLY", frequency: 12, label: "Monthly(12x per year)" },
    ];
    Constants.defaultpayOption = "MONTHLY";
    return Constants;
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

module.exports = __webpack_require__(/*! /Users/sibinvarghese/Documents/getRBC/mortgage-calculator-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map