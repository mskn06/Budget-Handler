function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content color=\"primary\">\n  <!-- logo header -->\n  <div class=\"head\">\n    <div class=\"head--lines first\">\n      <app-line></app-line>\n    </div>\n    <img src=\"../../../assets/logo/logo_BH_full.png\" alt=\"\" />\n    <div class=\"head--lines second\">\n      <app-line></app-line>\n    </div>\n  </div>\n\n  <!-- toggle -->\n  <div class=\"toggle\">\n    <div>\n      <app-button [routerLink]=\"['/login']\" [btnType]=\"'btn-login btn-raised'\">\n        LOGIN\n      </app-button>\n    </div>\n    <div>\n      <app-button [btnType]=\"'btn-signup btn-pressed'\">SIGNUP</app-button>\n    </div>\n  </div>\n  <!-- signup form -->\n  <div class=\"body\">\n    <div>\n      <form [formGroup]=\"userForm\">\n        <div class=\"form-fields\">\n          <p>NAME</p>\n          <ion-input\n            type=\"text\"\n            placeholder=\"John Doe\"\n            formControlName=\"userName\"\n          ></ion-input>\n          <!--  -->\n        </div>\n\n        <div class=\"form-fields\">\n          <p>EMAIL ID</p>\n          <ion-input\n            type=\"email\"\n            placeholder=\"johndoe123@gmail.com\"\n            formControlName=\"email\"\n          ></ion-input>\n        </div>\n\n        <div class=\"form-fields\">\n          <p>PASSWORD</p>\n          <ion-input\n            type=\"password\"\n            placeholder=\"John@123\"\n            formControlName=\"password\"\n          >\n          </ion-input>\n        </div>\n\n        <div class=\"btn-primary\">\n          <app-button [btnType]=\"'btn-primary'\" (click)=\"signup()\">\n            SIGN UP\n          </app-button>\n        </div>\n      </form>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/signup/signup-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: SignupPageRoutingModule */

  /***/
  function srcAppPagesSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/pages/signup/signup.page.ts");

    var routes = [{
      path: '',
      component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }];

    var SignupPageRoutingModule = function SignupPageRoutingModule() {
      _classCallCheck(this, SignupPageRoutingModule);
    };

    SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/signup/signup.module.ts ***!
    \***********************************************/

  /*! exports provided: SignupPageModule */

  /***/
  function srcAppPagesSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/pages/signup/signup-routing.module.ts");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/pages/signup/signup.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var SignupPageModule = function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    };

    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })], SignupPageModule);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/signup/signup.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".head {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 25px;\n}\n.head--lines {\n  align-self: center;\n}\n.head .first {\n  width: 150px;\n  padding-left: 56px;\n}\n.head .second {\n  padding-right: 56px;\n  width: 880px;\n}\n.toggle {\n  display: flex;\n  justify-content: center;\n  margin-top: 40px;\n}\n.body {\n  display: flex;\n  justify-content: center;\n  margin-top: 24px;\n}\n.body p {\n  color: #9f6a2a;\n  margin: 4px 0;\n  font-size: 14px;\n  font-weight: bold;\n}\n.body .form-fields {\n  padding-top: 24px;\n}\n.body .btn-primary {\n  padding-top: 40px;\n}\nion-input {\n  height: 50px;\n  --padding-start: 24px;\n  font-size: 22px;\n  color: #d1b18b;\n  background: linear-gradient(90deg, #fff2d9 -1.28%, #fff9e4 103.08%);\n  box-shadow: inset -7px -5px 8px rgba(255, 255, 255, 0.5), inset 5px 5px 16px rgba(0, 0, 0, 0.08);\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21za2ovQnVkZ2V0LUhhbmRsZXIvZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDQUo7QURJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDREY7QURHRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDREo7QURJRTtFQUNFLGlCQUFBO0FDRko7QURLRTtFQUNFLGlCQUFBO0FDSEo7QURPQTtFQUNFLFlBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBRUEsbUVBQUE7RUFDQSxnR0FBQTtFQUVBLG1CQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXRvcDogMjVweDtcblxuICAmLS1saW5lcyB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG5cbiAgLmZpcnN0IHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1NnB4O1xuICB9XG4gIC5zZWNvbmQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDU2cHg7XG4gICAgd2lkdGg6IDg4MHB4O1xuICB9XG59XG5cbi50b2dnbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjRweDtcblxuICBwIHtcbiAgICBjb2xvcjogIzlmNmEyYTtcbiAgICBtYXJnaW46IDRweCAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5mb3JtLWZpZWxkcyB7XG4gICAgcGFkZGluZy10b3A6IDI0cHg7XG4gIH1cblxuICAuYnRuLXByaW1hcnkge1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICB9XG59XG5cbmlvbi1pbnB1dCB7XG4gIGhlaWdodDogNTBweDtcblxuICAtLXBhZGRpbmctc3RhcnQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNkMWIxOGI7XG5cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZmMmQ5IC0xLjI4JSwgI2ZmZjllNCAxMDMuMDglKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTdweCAtNXB4IDhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXG4gICAgaW5zZXQgNXB4IDVweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4iLCIuaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG4uaGVhZC0tbGluZXMge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uaGVhZCAuZmlyc3Qge1xuICB3aWR0aDogMTUwcHg7XG4gIHBhZGRpbmctbGVmdDogNTZweDtcbn1cbi5oZWFkIC5zZWNvbmQge1xuICBwYWRkaW5nLXJpZ2h0OiA1NnB4O1xuICB3aWR0aDogODgwcHg7XG59XG5cbi50b2dnbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5ib2R5IHAge1xuICBjb2xvcjogIzlmNmEyYTtcbiAgbWFyZ2luOiA0cHggMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ib2R5IC5mb3JtLWZpZWxkcyB7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xufVxuLmJvZHkgLmJ0bi1wcmltYXJ5IHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGhlaWdodDogNTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZDFiMThiO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmYyZDkgLTEuMjglLCAjZmZmOWU0IDEwMy4wOCUpO1xuICBib3gtc2hhZG93OiBpbnNldCAtN3B4IC01cHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgaW5zZXQgNXB4IDVweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/signup/signup.page.ts ***!
    \*********************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppPagesSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/signup.service */
    "./src/app/services/signup.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SignupPage = /*#__PURE__*/function () {
      function SignupPage(signupService, fb, router) {
        _classCallCheck(this, SignupPage);

        this.signupService = signupService;
        this.fb = fb;
        this.router = router;
      }

      _createClass(SignupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userForm = this.fb.group({
            userName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "signup",
        value: function signup() {
          var _this = this;

          if (this.userForm.invalid) {
            console.log("fill all details!");
            return;
          }

          console.log(this.userForm.value);
          this.signupService.postUser(this.userForm.value).subscribe(function (data) {
            console.log("user created", data);

            _this.router.navigate(["/login"]);
          }, function (err) {
            console.log("err", err);
          });
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: src_app_services_signup_service__WEBPACK_IMPORTED_MODULE_3__["SignupService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-signup",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.page.scss */
      "./src/app/pages/signup/signup.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_signup_service__WEBPACK_IMPORTED_MODULE_3__["SignupService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], SignupPage);
    /***/
  },

  /***/
  "./src/app/services/signup.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/signup.service.ts ***!
    \********************************************/

  /*! exports provided: SignupService */

  /***/
  function srcAppServicesSignupServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupService", function () {
      return SignupService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _apiConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../apiConstants */
    "./apiConstants.ts");

    var SignupService = /*#__PURE__*/function () {
      function SignupService(http) {
        _classCallCheck(this, SignupService);

        this.http = http;
      }

      _createClass(SignupService, [{
        key: "postUser",
        value: function postUser(user) {
          console.log("user", user);
          return this.http.post(_apiConstants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].SIGNUP(), user);
        }
      }]);

      return SignupService;
    }();

    SignupService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SignupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], SignupService);
    /***/
  }
}]);
//# sourceMappingURL=pages-signup-signup-module-es5.js.map