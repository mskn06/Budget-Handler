(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-new-project-add-new-project-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-new-project/add-new-project.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-new-project/add-new-project.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"primary\">\n  <div>\n    <app-sidebar-left [pageName]=\"'add-new-project'\"></app-sidebar-left>\n  </div>\n\n  <div class=\"body scroll-box\">\n    <h2>ADD NEW PROJECT</h2>\n\n    <div>\n      <form [formGroup]=\"projectForm\">\n        <div class=\"form-fields\">\n          <p>PROJECT NAME</p>\n          <ion-input\n            type=\"text\"\n            placeholder=\"React Project\"\n            formControlName=\"projectName\"\n          >\n          </ion-input>\n        </div>\n\n        <div class=\"form-fields\">\n          <p>\n            PROJECT AMOUNT\n          </p>\n          <ion-input\n            type=\"number\"\n            placeholder=\"$600\"\n            formControlName=\"totalAmount\"\n          >\n          </ion-input>\n        </div>\n\n        <div class=\"form-fields\">\n          <p>\n            DELIVERY DATE\n          </p>\n          <ion-input\n            type=\"date\"\n            placeholder=\"12-05-2020\"\n            formControlName=\"delivery\"\n          >\n          </ion-input>\n        </div>\n\n        <h2 *ngIf=\"staffList\" class=\"clear-float p-t-40\">ADD STAFF</h2>\n\n        <!-- add staff -->\n        <div formArrayName=\"staff\" *ngIf=\"staffList\">\n          <div *ngFor=\"let staff of getStaff(projectForm); let i=index\">\n            <div [formGroupName]=\"i\">\n              <div class=\"form-fields\">\n                <p>\n                  STAFF NAME\n                </p>\n                <input\n                  placeholder=\"John Doe\"\n                  list=\"staffList.data\"\n                  formControlName=\"staffName\"\n                />\n                <datalist id=\"staffList.data\">\n                  <option *ngFor=\"let staff of staffList.data\">\n                    {{staff}}\n                  </option>\n                </datalist>\n              </div>\n\n              <div class=\"form-fields\">\n                <p>\n                  AMOUNT\n                </p>\n                <ion-input\n                  type=\"number\"\n                  placeholder=\"$100\"\n                  formControlName=\"amtToBePaid\"\n                >\n                </ion-input>\n              </div>\n            </div>\n          </div>\n          <div class=\"staff-btn\">\n            <app-icon-button\n              [class]=\"'primary-raised'\"\n              [icon]=\"addProjectIcon\"\n              (click)=\"addStaff()\"\n            ></app-icon-button>\n          </div>\n\n          <div class=\"submit-btn\">\n            <app-button [btnType]=\"'btn-primary btn-raised'\" (click)=\"submit()\">\n              CREATE\n            </app-button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <div>\n    <app-sidebar-right></app-sidebar-right>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/add-new-project/add-new-project-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/add-new-project/add-new-project-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AddNewProjectPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewProjectPageRoutingModule", function() { return AddNewProjectPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_new_project_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-new-project.page */ "./src/app/pages/add-new-project/add-new-project.page.ts");




const routes = [
    {
        path: "",
        component: _add_new_project_page__WEBPACK_IMPORTED_MODULE_3__["AddNewProjectPage"],
    },
];
let AddNewProjectPageRoutingModule = class AddNewProjectPageRoutingModule {
};
AddNewProjectPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddNewProjectPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/add-new-project/add-new-project.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/add-new-project/add-new-project.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddNewProjectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewProjectPageModule", function() { return AddNewProjectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_new_project_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-new-project-routing.module */ "./src/app/pages/add-new-project/add-new-project-routing.module.ts");
/* harmony import */ var _add_new_project_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-new-project.page */ "./src/app/pages/add-new-project/add-new-project.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let AddNewProjectPageModule = class AddNewProjectPageModule {
};
AddNewProjectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_new_project_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddNewProjectPageRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_add_new_project_page__WEBPACK_IMPORTED_MODULE_6__["AddNewProjectPage"]],
    })
], AddNewProjectPageModule);



/***/ }),

/***/ "./src/app/pages/add-new-project/add-new-project.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/add-new-project/add-new-project.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  width: 66vw;\n  float: left;\n  margin: 20px 0 0 32px;\n}\n.body h2 {\n  color: saddlebrown;\n}\n.body h2.clear-float {\n  clear: both;\n}\n.body .p-t-40 {\n  padding-top: 40px;\n}\n.body p {\n  margin: 4px 0;\n  font-family: Poppins;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 27px;\n  color: #c7a277;\n}\n.body .form-fields {\n  padding-top: 24px;\n  width: 45%;\n  float: left;\n  padding-right: 29px;\n}\n.body .staff-btn {\n  padding-top: 44px;\n}\n.body .submit-btn {\n  margin: 55px;\n  float: right;\n}\n.scroll-box {\n  overflow-y: scroll;\n  height: 95vh;\n}\n.scroll-box::-webkit-scrollbar {\n  width: 5px;\n}\n.scroll-box::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  height: 60px;\n  background-color: #8a4b00;\n}\nion-input,\ninput {\n  height: 50px;\n  --padding-start: 24px;\n  font-size: 22px;\n  color: #d1b18b;\n  background: linear-gradient(90deg, #fff2d9 -1.28%, #fff9e4 103.08%);\n  box-shadow: inset -7px -5px 8px rgba(255, 255, 255, 0.5), inset 5px 5px 16px rgba(0, 0, 0, 0.08);\n  border-radius: 10px;\n}\ninput {\n  border: none;\n  width: 100%;\n  padding-left: 24px;\n}\ninput:focus {\n  outline: none;\n}\ninput option {\n  border: none;\n}\ninput::-webkit-input-placeholder {\n  color: #d1b18b;\n}\ninput::-moz-placeholder {\n  color: #d1b18b;\n}\ninput::-ms-input-placeholder {\n  color: #d1b18b;\n}\ninput::placeholder {\n  color: #d1b18b;\n}\noption:hover {\n  background-color: linear-gradient(90deg, #fff2d9 -1.28%, #fff9e4 103.08%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21za2ovQnVkZ2V0LUhhbmRsZXIvZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy9hZGQtbmV3LXByb2plY3QvYWRkLW5ldy1wcm9qZWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRkLW5ldy1wcm9qZWN0L2FkZC1uZXctcHJvamVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0FDQ0o7QURFRTtFQUNFLFdBQUE7QUNBSjtBREdFO0VBQ0UsaUJBQUE7QUNESjtBRElFO0VBQ0UsYUFBQTtFQUVBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSEo7QURNRTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0pKO0FET0U7RUFDRSxpQkFBQTtBQ0xKO0FEUUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ05KO0FEVUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNQRjtBRFVBO0VBQ0UsVUFBQTtBQ1BGO0FEVUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ1BGO0FEVUE7O0VBRUUsWUFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFFQSxtRUFBQTtFQUNBLGdHQUFBO0VBRUEsbUJBQUE7QUNWRjtBRGFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1ZGO0FEYUE7RUFDRSxhQUFBO0FDVkY7QURhQTtFQUNFLFlBQUE7QUNWRjtBRGFBO0VBQ0UsY0FBQTtBQ1ZGO0FEU0E7RUFDRSxjQUFBO0FDVkY7QURTQTtFQUNFLGNBQUE7QUNWRjtBRFNBO0VBQ0UsY0FBQTtBQ1ZGO0FEWUE7RUFDRSx5RUFBQTtBQ1RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkLW5ldy1wcm9qZWN0L2FkZC1uZXctcHJvamVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XG4gIHdpZHRoOiA2NnZ3O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAyMHB4IDAgMCAzMnB4O1xuXG4gIGgyIHtcbiAgICBjb2xvcjogc2FkZGxlYnJvd247XG4gIH1cblxuICBoMi5jbGVhci1mbG9hdCB7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cblxuICAucC10LTQwIHtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogNHB4IDA7XG5cbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICBjb2xvcjogI2M3YTI3NztcbiAgfVxuXG4gIC5mb3JtLWZpZWxkcyB7XG4gICAgcGFkZGluZy10b3A6IDI0cHg7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyOXB4O1xuICB9XG5cbiAgLnN0YWZmLWJ0biB7XG4gICAgcGFkZGluZy10b3A6IDQ0cHg7XG4gIH1cblxuICAuc3VibWl0LWJ0biB7XG4gICAgbWFyZ2luOiA1NXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxufVxuXG4uc2Nyb2xsLWJveCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiA5NXZoO1xufVxuXG4uc2Nyb2xsLWJveDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG4uc2Nyb2xsLWJveDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YTRiMDA7XG59XG5cbmlvbi1pbnB1dCxcbmlucHV0IHtcbiAgaGVpZ2h0OiA1MHB4O1xuXG4gIC0tcGFkZGluZy1zdGFydDogMjRweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2QxYjE4YjtcblxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmYyZDkgLTEuMjglLCAjZmZmOWU0IDEwMy4wOCUpO1xuICBib3gtc2hhZG93OiBpbnNldCAtN3B4IC01cHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcbiAgICBpbnNldCA1cHggNXB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQgb3B0aW9uIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2QxYjE4Yjtcbn1cbm9wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmZjJkOSAtMS4yOCUsICNmZmY5ZTQgMTAzLjA4JSk7XG59XG4iLCIuYm9keSB7XG4gIHdpZHRoOiA2NnZ3O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAyMHB4IDAgMCAzMnB4O1xufVxuLmJvZHkgaDIge1xuICBjb2xvcjogc2FkZGxlYnJvd247XG59XG4uYm9keSBoMi5jbGVhci1mbG9hdCB7XG4gIGNsZWFyOiBib3RoO1xufVxuLmJvZHkgLnAtdC00MCB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLmJvZHkgcCB7XG4gIG1hcmdpbjogNHB4IDA7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBjb2xvcjogI2M3YTI3Nztcbn1cbi5ib2R5IC5mb3JtLWZpZWxkcyB7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICB3aWR0aDogNDUlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogMjlweDtcbn1cbi5ib2R5IC5zdGFmZi1idG4ge1xuICBwYWRkaW5nLXRvcDogNDRweDtcbn1cbi5ib2R5IC5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luOiA1NXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zY3JvbGwtYm94IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IDk1dmg7XG59XG5cbi5zY3JvbGwtYm94Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi5zY3JvbGwtYm94Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhhNGIwMDtcbn1cblxuaW9uLWlucHV0LFxuaW5wdXQge1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjRweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2QxYjE4YjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZmMmQ5IC0xLjI4JSwgI2ZmZjllNCAxMDMuMDglKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTdweCAtNXB4IDhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIGluc2V0IDVweCA1cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5pbnB1dCBvcHRpb24ge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZDFiMThiO1xufVxuXG5vcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmYyZDkgLTEuMjglLCAjZmZmOWU0IDEwMy4wOCUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/add-new-project/add-new-project.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/add-new-project/add-new-project.page.ts ***!
  \***************************************************************/
/*! exports provided: AddNewProjectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewProjectPage", function() { return AddNewProjectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");






let AddNewProjectPage = class AddNewProjectPage {
    constructor(projectService, formBuilder, router, route, userService) {
        this.projectService = projectService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.icon = "../../../../assets/icon/";
        this.addProjectIcon = this.icon + "add_project.png";
    }
    ngOnInit() {
        this.projectForm = this.formBuilder.group({
            projectName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalAmount: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            delivery: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            staff: this.formBuilder.array([this.initStaff()]),
        });
        this.route.params.subscribe((params) => {
            this.userId = params.userId;
        });
        this.userService.getStaffList(this.userId).subscribe((data) => {
            this.staffList = data;
            // console.log("data stafflist", this.staffList);
        });
    }
    initStaff() {
        return this.formBuilder.group({
            staffName: [""],
            amtToBePaid: [""],
        });
    }
    addStaff() {
        const control = this.projectForm.get("staff");
        // console.log(control);
        control.push(this.initStaff());
    }
    getStaff(form) {
        return form.controls.staff.controls;
    }
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.projectForm.value);
            if (this.projectForm.invalid) {
                console.log("Fill valid details!");
                return;
            }
            yield this.projectForm.value.staff.forEach((element) => {
                if (element.staffName == "" || element.amtToBePaid == "") {
                    console.log("Fill valid details!");
                    return;
                }
            });
            if (this.projectForm.value) {
                yield this.projectService
                    .postProject(this.userId, this.projectForm.value)
                    .subscribe((data) => {
                    console.log("project", data);
                    this.projectForm.reset();
                    this.router.navigate(["/user/" + this.userId + "/projects"]);
                }, (err) => {
                    console.log(err);
                });
            }
        });
    }
};
AddNewProjectPage.ctorParameters = () => [
    { type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
AddNewProjectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-new-project",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-new-project.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-new-project/add-new-project.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-new-project.page.scss */ "./src/app/pages/add-new-project/add-new-project.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], AddNewProjectPage);



/***/ })

}]);
//# sourceMappingURL=pages-add-new-project-add-new-project-module-es2015.js.map