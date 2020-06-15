(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-setting-setting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setting/setting.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setting/setting.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"primary\">\n  <div>\n    <app-sidebar-left [pageName]=\"'setting'\"></app-sidebar-left>\n  </div>\n\n  <div class=\"body\">\n    <h2>SETTINGS</h2>\n    <div *ngIf=\"user\">\n      <form [formGroup]=\"userForm\">\n        <div class=\"form-fields\">\n          <p>USERNAME</p>\n          <ion-input\n            type=\"text\"\n            [(ngModel)]=\"user.userName\"\n            formControlName=\"userName\"\n          >\n          </ion-input>\n        </div>\n\n        <div class=\"form-fields\">\n          <p>PASSWORD</p>\n          <ion-input\n            type=\"password\"\n            [(ngModel)]=\"user.password\"\n            formControlName=\"password\"\n          >\n          </ion-input>\n        </div>\n        <div class=\"form-fields\">\n          <p>E-MAIL</p>\n          <ion-input\n            type=\"email\"\n            [(ngModel)]=\"user.email\"\n            formControlName=\"email\"\n          >\n          </ion-input>\n        </div>\n\n        <div class=\"form-fields\">\n          <p>CLEARANCE TIME</p>\n          <ion-input\n            type=\"number\"\n            [(ngModel)]=\"user.clearanceTime\"\n            formControlName=\"clearanceTime\"\n          >\n          </ion-input>\n        </div>\n\n        <div class=\"submit-btn\">\n          <app-button\n            [btnType]=\"'btn-primary btn-raised'\"\n            (click)=\"updateUser()\"\n          >\n            SAVE\n          </app-button>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <div>\n    <app-sidebar-right></app-sidebar-right>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/setting/setting-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/setting/setting-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SettingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageRoutingModule", function() { return SettingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting.page */ "./src/app/pages/setting/setting.page.ts");




const routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_3__["SettingPage"]
    }
];
let SettingPageRoutingModule = class SettingPageRoutingModule {
};
SettingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/setting/setting.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/setting/setting.module.ts ***!
  \*************************************************/
/*! exports provided: SettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setting-routing.module */ "./src/app/pages/setting/setting-routing.module.ts");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting.page */ "./src/app/pages/setting/setting.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let SettingPageModule = class SettingPageModule {
};
SettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingPageRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]]
    })
], SettingPageModule);



/***/ }),

/***/ "./src/app/pages/setting/setting.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/setting/setting.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  width: 66vw;\n  float: left;\n  margin: 20px 0 0 32px;\n}\n.body h2 {\n  color: saddlebrown;\n}\n.body p {\n  margin: 4px 0;\n  font-family: Poppins;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 27px;\n  color: #c7a277;\n}\n.body .form-fields {\n  padding-top: 24px;\n  width: 48%;\n  float: left;\n  padding-right: 24px;\n}\n.body .submit-btn {\n  margin: 55px;\n  float: right;\n}\nion-input {\n  height: 50px;\n  --padding-start: 24px;\n  font-size: 22px;\n  color: #d1b18b;\n  background: linear-gradient(90deg, #fff2d9 -1.28%, #fff9e4 103.08%);\n  box-shadow: inset -7px -5px 8px rgba(255, 255, 255, 0.5), inset 5px 5px 16px rgba(0, 0, 0, 0.08);\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21za2ovQnVkZ2V0LUhhbmRsZXIvZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy9zZXR0aW5nL3NldHRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXR0aW5nL3NldHRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtBQ0NKO0FERUU7RUFDRSxhQUFBO0VBRUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNESjtBRElFO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDRko7QURLRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDSEo7QURPQTtFQUNFLFlBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBRUEsbUVBQUE7RUFDQSxnR0FBQTtFQUVBLG1CQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXR0aW5nL3NldHRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xuICB3aWR0aDogNjZ2dztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMjBweCAwIDAgMzJweDtcblxuICBoMiB7XG4gICAgY29sb3I6IHNhZGRsZWJyb3duO1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luOiA0cHggMDtcblxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIGNvbG9yOiAjYzdhMjc3O1xuICB9XG5cbiAgLmZvcm0tZmllbGRzIHtcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgICB3aWR0aDogNDglO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gIH1cblxuICAuc3VibWl0LWJ0biB7XG4gICAgbWFyZ2luOiA1NXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxufVxuXG5pb24taW5wdXQge1xuICBoZWlnaHQ6IDUwcHg7XG5cbiAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZDFiMThiO1xuXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmZjJkOSAtMS4yOCUsICNmZmY5ZTQgMTAzLjA4JSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IC03cHggLTVweCA4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxuICAgIGluc2V0IDVweCA1cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuIiwiLmJvZHkge1xuICB3aWR0aDogNjZ2dztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMjBweCAwIDAgMzJweDtcbn1cbi5ib2R5IGgyIHtcbiAgY29sb3I6IHNhZGRsZWJyb3duO1xufVxuLmJvZHkgcCB7XG4gIG1hcmdpbjogNHB4IDA7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBjb2xvcjogI2M3YTI3Nztcbn1cbi5ib2R5IC5mb3JtLWZpZWxkcyB7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICB3aWR0aDogNDglO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbn1cbi5ib2R5IC5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luOiA1NXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGhlaWdodDogNTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZDFiMThiO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmYyZDkgLTEuMjglLCAjZmZmOWU0IDEwMy4wOCUpO1xuICBib3gtc2hhZG93OiBpbnNldCAtN3B4IC01cHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgaW5zZXQgNXB4IDVweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/setting/setting.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/setting/setting.page.ts ***!
  \***********************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let SettingPage = class SettingPage {
    constructor(userService, formBuilder) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        // logged in user
        this.currentUser = localStorage.getItem("currentUser");
        this.userForm = this.formBuilder.group({
            userName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            clearanceTime: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    ngOnInit() {
        this.userService.getUser(this.currentUser).subscribe((userItem) => {
            console.log("useritem", userItem);
            this.user = userItem.data.profile;
        });
    }
    updateUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.userForm.invalid) {
                console.log("Fill valid details!");
                return;
            }
            if (this.userForm.value) {
                yield this.userService
                    .updateUser(this.userForm.value, this.currentUser)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe((data) => {
                    // console.log("user", data);
                }, (err) => {
                    console.log(err);
                });
                console.log("user after update", this.user);
            }
        });
    }
};
SettingPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
SettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-setting",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./setting.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setting/setting.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./setting.page.scss */ "./src/app/pages/setting/setting.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], SettingPage);



/***/ })

}]);
//# sourceMappingURL=pages-setting-setting-module-es2015.js.map