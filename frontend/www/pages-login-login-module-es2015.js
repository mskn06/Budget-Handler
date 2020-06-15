(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"primary\">\n  <!-- logo header -->\n  <div class=\"head\">\n    <div class=\"head--lines first\">\n      <app-line></app-line>\n    </div>\n    <img src=\"../../../assets/logo/logo_BH_full.png\" alt=\"\" />\n    <div class=\"head--lines second\">\n      <app-line></app-line>\n    </div>\n  </div>\n\n  <!-- toggle -->\n  <div class=\"toggle\">\n    <div>\n      <app-button [btnType]=\"'btn-login btn-pressed'\">\n        LOGIN\n      </app-button>\n    </div>\n    <div>\n      <app-button\n        [routerLink]=\"['/signup']\"\n        [btnType]=\"'btn-signup btn-raised'\"\n      >\n        SIGN UP\n      </app-button>\n    </div>\n  </div>\n  <!-- signup form -->\n  <div class=\"body\">\n    <div>\n      <form [formGroup]=\"user\">\n        <div class=\"form-fields\">\n          <p>USERNAME / EMAIL ID</p>\n          <ion-input\n            type=\"email\"\n            placeholder=\"johndoe123@gmail.com\"\n            formControlName=\"email\"\n          ></ion-input>\n        </div>\n\n        <div class=\"form-fields\">\n          <p>PASSWORD</p>\n          <ion-input\n            type=\"password\"\n            placeholder=\"John@123\"\n            formControlName=\"password\"\n          >\n          </ion-input>\n        </div>\n\n        <div class=\"btn-primary\">\n          <app-button [btnType]=\"'btn-primary'\" (click)=\"login()\">\n            LOGIN\n          </app-button>\n        </div>\n      </form>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".head {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 25px;\n}\n.head--lines {\n  align-self: center;\n}\n.head .first {\n  width: 150px;\n  padding-left: 56px;\n}\n.head .second {\n  padding-right: 56px;\n  width: 880px;\n}\n.toggle {\n  display: flex;\n  justify-content: center;\n  margin-top: 40px;\n}\n.body {\n  display: flex;\n  justify-content: center;\n  margin-top: 24px;\n}\n.body p {\n  color: #9f6a2a;\n  margin: 4px 0;\n  font-size: 14px;\n  font-weight: bold;\n}\n.body .form-fields {\n  padding-top: 24px;\n}\n.body .btn-primary {\n  padding-top: 40px;\n}\nion-input {\n  height: 50px;\n  --padding-start: 24px;\n  font-size: 22px;\n  color: #d1b18b;\n  background: linear-gradient(90deg, #fff2d9 -1.28%, #fff9e4 103.08%);\n  box-shadow: inset -7px -5px 8px rgba(255, 255, 255, 0.5), inset 5px 5px 16px rgba(0, 0, 0, 0.08);\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21za2ovQnVkZ2V0LUhhbmRsZXIvZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0FDQ0o7QURFRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNBSjtBRElBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNERjtBREdFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNESjtBRElFO0VBQ0UsaUJBQUE7QUNGSjtBREtFO0VBQ0UsaUJBQUE7QUNISjtBRE9BO0VBQ0UsWUFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFFQSxtRUFBQTtFQUNBLGdHQUFBO0VBRUEsbUJBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXRvcDogMjVweDtcblxuICAmLS1saW5lcyB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG5cbiAgLmZpcnN0IHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1NnB4O1xuICB9XG4gIC5zZWNvbmQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDU2cHg7XG4gICAgd2lkdGg6IDg4MHB4O1xuICB9XG59XG5cbi50b2dnbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjRweDtcblxuICBwIHtcbiAgICBjb2xvcjogIzlmNmEyYTtcbiAgICBtYXJnaW46IDRweCAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5mb3JtLWZpZWxkcyB7XG4gICAgcGFkZGluZy10b3A6IDI0cHg7XG4gIH1cblxuICAuYnRuLXByaW1hcnkge1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICB9XG59XG5cbmlvbi1pbnB1dCB7XG4gIGhlaWdodDogNTBweDtcblxuICAtLXBhZGRpbmctc3RhcnQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNkMWIxOGI7XG5cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZmMmQ5IC0xLjI4JSwgI2ZmZjllNCAxMDMuMDglKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTdweCAtNXB4IDhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXG4gICAgaW5zZXQgNXB4IDVweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4iLCIuaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG4uaGVhZC0tbGluZXMge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uaGVhZCAuZmlyc3Qge1xuICB3aWR0aDogMTUwcHg7XG4gIHBhZGRpbmctbGVmdDogNTZweDtcbn1cbi5oZWFkIC5zZWNvbmQge1xuICBwYWRkaW5nLXJpZ2h0OiA1NnB4O1xuICB3aWR0aDogODgwcHg7XG59XG5cbi50b2dnbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5ib2R5IHAge1xuICBjb2xvcjogIzlmNmEyYTtcbiAgbWFyZ2luOiA0cHggMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ib2R5IC5mb3JtLWZpZWxkcyB7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xufVxuLmJvZHkgLmJ0bi1wcmltYXJ5IHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGhlaWdodDogNTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZDFiMThiO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmYyZDkgLTEuMjglLCAjZmZmOWU0IDEwMy4wOCUpO1xuICBib3gtc2hhZG93OiBpbnNldCAtN3B4IC01cHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgaW5zZXQgNXB4IDVweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginPage = class LoginPage {
    constructor(loginService, formBuilder, router) {
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.user = this.formBuilder.group({
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ngOnInit() { }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.submitted = true;
            if (this.user.invalid) {
                console.log("Fill valid details!");
                return;
            }
            if (this.user.value) {
                this.loading = true;
                this.userData = yield this.loginService.login(this.user.value).subscribe((data) => {
                    console.log("user", data);
                    if (data)
                        this.router.navigate(["/user/" + data._id + "/projects"]);
                }, (err) => {
                    console.log(err);
                    this.loading = false;
                });
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map