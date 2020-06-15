(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-404-404-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/404/404.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/404/404.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"primary\">\n  <div class=\"head\">\n    <div class=\"head--lines first\">\n      <app-line></app-line>\n    </div>\n    <img src=\"../../../assets/logo/logo_BH_full.png\" alt=\"\" />\n    <div class=\"head--lines second\">\n      <app-line></app-line>\n    </div>\n  </div>\n\n  <!-- error -->\n  <div class=\"error\">\n    ERROR 404 !!\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/404/404-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/404/404-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ErrorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageRoutingModule", function() { return ErrorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _404_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./404.page */ "./src/app/pages/404/404.page.ts");




const routes = [
    {
        path: "",
        component: _404_page__WEBPACK_IMPORTED_MODULE_3__["ErrorPage"],
    },
];
let ErrorPageRoutingModule = class ErrorPageRoutingModule {
};
ErrorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ErrorPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/404/404.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/404/404.module.ts ***!
  \*****************************************/
/*! exports provided: ErrorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageModule", function() { return ErrorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _404_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./404-routing.module */ "./src/app/pages/404/404-routing.module.ts");
/* harmony import */ var _404_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./404.page */ "./src/app/pages/404/404.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");







let ErrorPageModule = class ErrorPageModule {
};
ErrorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _404_routing_module__WEBPACK_IMPORTED_MODULE_4__["ErrorPageRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
        declarations: [_404_page__WEBPACK_IMPORTED_MODULE_5__["ErrorPage"]],
    })
], ErrorPageModule);



/***/ }),

/***/ "./src/app/pages/404/404.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/404/404.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.error {\n  font-size: 65px;\n  font-weight: 400;\n  color: #8a4b00;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 100px;\n}\n\n.head {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 25px;\n}\n\n.head--lines {\n  align-self: center;\n}\n\n.head .first {\n  width: 150px;\n  padding-left: 56px;\n}\n\n.head .second {\n  padding-right: 56px;\n  width: 880px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21za2ovQnVkZ2V0LUhhbmRsZXIvZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy80MDQvNDA0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvNDA0LzQwNC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy80MDQvNDA0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5lcnJvciB7XG4gIGZvbnQtc2l6ZTogNjVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM4YTRiMDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuXG4uaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG5cbiAgJi0tbGluZXMge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuXG4gIC5maXJzdCB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogNTZweDtcbiAgfVxuICAuc2Vjb25kIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1NnB4O1xuICAgIHdpZHRoOiA4ODBweDtcbiAgfVxufVxuIiwiZGl2LmVycm9yIHtcbiAgZm9udC1zaXplOiA2NXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzhhNGIwMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG59XG5cbi5oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXRvcDogMjVweDtcbn1cbi5oZWFkLS1saW5lcyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5oZWFkIC5maXJzdCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1NnB4O1xufVxuLmhlYWQgLnNlY29uZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDU2cHg7XG4gIHdpZHRoOiA4ODBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/404/404.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/404/404.page.ts ***!
  \***************************************/
/*! exports provided: ErrorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPage", function() { return ErrorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorPage = class ErrorPage {
    constructor() { }
    ngOnInit() { }
};
ErrorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-error",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./404.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/404/404.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./404.page.scss */ "./src/app/pages/404/404.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ErrorPage);



/***/ })

}]);
//# sourceMappingURL=pages-404-404-module-es2015.js.map