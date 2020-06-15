(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-staff-staff-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/staff/staff.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/staff/staff.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"primary\" *ngIf=\"staffs\">\n  <div>\n    <app-sidebar-left [pageName]=\"'staff'\"></app-sidebar-left>\n  </div>\n\n  <div class=\"body\">\n    <h2>STAFF MEMBERS</h2>\n\n    <form [formGroup]=\"staffForm\">\n      <div class=\"form\">\n        <div class=\"form-field\">\n          <p>\n            STAFF NAME\n          </p>\n          <ion-input placeholder=\"John Doe\" formControlName=\"staffName\">\n          </ion-input>\n        </div>\n        <div>\n          <app-button\n            [btnType]=\"'btn-primary btn-raised'\"\n            (click)=\"postStaff()\"\n          >\n            ADD STAFF\n          </app-button>\n        </div>\n      </div>\n    </form>\n\n    <div class=\"grid header\">\n      <div class=\"col\">STAFF NAME</div>\n      <div class=\"col\">PAID</div>\n      <div class=\"col\">PROJECT %</div>\n      <div class=\"col\">PROJECTS</div>\n      <div class=\"col\">TO PAY</div>\n    </div>\n    <!-- accordion -->\n    <div class=\"scroll-box\">\n      <accordion *ngFor=\"let staff of staffs\">\n        <group [staff]=\"staff\">\n          <!-- collapsible: SUB-CONTENT -->\n          <table class=\"mytable\" *ngIf=\"staff.projects.length\">\n            <!-- heading -->\n            <tr class=\"header\">\n              <td>PROJECT NAME</td>\n              <td>AMOUNT</td>\n              <td>PROJECT %</td>\n              <td>PAID ON</td>\n            </tr>\n\n            <!-- info -->\n            <tr *ngFor=\"let project of staff.projects\">\n              <!-- project name -->\n              <td>{{ project.profile.projectName }}</td>\n\n              <!-- amount -->\n              <td>\n                <div *ngIf=\"project.payment.amtToBePaid; else paid\">\n                  ${{ project.payment.amtToBePaid }}\n                </div>\n                <ng-template #paid>\n                  ${{ project.payment.amtPaid }}\n                </ng-template>\n              </td>\n\n              <!-- project %age -->\n              <td>{{ project.payment.projectPercentage }}%</td>\n\n              <!-- date: paidOn -->\n              <td>\n                <div *ngIf=\"project.payment.paidOn; else pay\">\n                  {{ project.payment.paidOn | date: \"dd-MM-yyyy\" }}\n                </div>\n                <ng-template #pay>\n                  -\n                </ng-template>\n              </td>\n            </tr>\n          </table>\n        </group>\n      </accordion>\n    </div>\n    <!-- end accordion -->\n  </div>\n\n  <div>\n    <app-sidebar-right></app-sidebar-right>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/staff/staff-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/staff/staff-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: StaffPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffPageRoutingModule", function() { return StaffPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _staff_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff.page */ "./src/app/pages/staff/staff.page.ts");




const routes = [
    {
        path: '',
        component: _staff_page__WEBPACK_IMPORTED_MODULE_3__["StaffPage"]
    }
];
let StaffPageRoutingModule = class StaffPageRoutingModule {
};
StaffPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StaffPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/staff/staff.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/staff/staff.module.ts ***!
  \*********************************************/
/*! exports provided: StaffPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffPageModule", function() { return StaffPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _staff_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staff-routing.module */ "./src/app/pages/staff/staff-routing.module.ts");
/* harmony import */ var _staff_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff.page */ "./src/app/pages/staff/staff.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let StaffPageModule = class StaffPageModule {
};
StaffPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _staff_routing_module__WEBPACK_IMPORTED_MODULE_5__["StaffPageRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_staff_page__WEBPACK_IMPORTED_MODULE_6__["StaffPage"]]
    })
], StaffPageModule);



/***/ }),

/***/ "./src/app/pages/staff/staff.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/staff/staff.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  float: left;\n  width: 66vw;\n  margin: 20px 0 0 32px;\n}\n.body h2 {\n  color: saddlebrown;\n}\n.body p {\n  margin: 4px 0;\n  font-family: Poppins;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 27px;\n  color: #c7a277;\n}\n.body .form {\n  display: flex;\n  align-items: flex-end;\n  padding-top: 24px;\n}\n.body .form-field {\n  padding-right: 24px;\n}\n.body .grid {\n  display: flex;\n  padding: 40px 44px 4px 4px;\n}\n.body .grid .col {\n  width: 20%;\n}\n.body .header {\n  font-family: Poppins;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 27px;\n  color: #c7a277;\n  clear: both;\n}\n.body .scroll-box {\n  overflow-y: scroll;\n  padding-right: 44px;\n  height: 60vh;\n}\nbutton {\n  padding: 8px 32px;\n}\nbutton.pay {\n  background: linear-gradient(270deg, #ffecc9 -0.29%, rgba(255, 250, 234, 0.9) 100%);\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.14), -2px -2px 6px rgba(255, 255, 255, 0.5);\n  border-radius: 10.4962px;\n}\nbutton.paid {\n  background: linear-gradient(270deg, rgba(103, 220, 93, 0.3) -0.29%, rgba(193, 242, 189, 0) 100%);\n  box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.1), inset -3px -3px 6px #ffffff;\n  border-radius: 10.4962px;\n}\ntable.mytable tr td {\n  padding: 10px;\n}\n.scroll-box::-webkit-scrollbar {\n  width: 5px;\n}\n.scroll-box::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  height: 60px;\n  background-color: #8a4b00;\n}\nion-input {\n  height: 50px;\n  --padding-start: 24px;\n  font-size: 22px;\n  color: #d1b18b;\n  background: linear-gradient(90deg, #fff2d9 -1.28%, #fff9e4 103.08%);\n  box-shadow: inset -7px -5px 8px rgba(255, 255, 255, 0.5), inset 5px 5px 16px rgba(0, 0, 0, 0.08);\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21za2ovQnVkZ2V0LUhhbmRsZXIvZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy9zdGFmZi9zdGFmZi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0YWZmL3N0YWZmLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNDRjtBREFFO0VBQ0Usa0JBQUE7QUNFSjtBRENFO0VBQ0UsYUFBQTtFQUVBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQUo7QURHRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDREo7QURJRTtFQUNFLG1CQUFBO0FDRko7QURLRTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtBQ0hKO0FES0k7RUFDRSxVQUFBO0FDSE47QURPRTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBRUEsV0FBQTtBQ05KO0FEUUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ05KO0FEVUE7RUFDRSxpQkFBQTtBQ1BGO0FEUUU7RUFDRSxrRkFBQTtFQUtBLG1GQUFBO0VBRUEsd0JBQUE7QUNYSjtBRGFFO0VBQ0UsZ0dBQUE7RUFLQSw2RUFBQTtFQUVBLHdCQUFBO0FDaEJKO0FEb0JBO0VBQ0UsYUFBQTtBQ2pCRjtBRG9CQTtFQUNFLFVBQUE7QUNqQkY7QURvQkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ2pCRjtBRG9CQTtFQUNFLFlBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBRUEsbUVBQUE7RUFDQSxnR0FBQTtFQUVBLG1CQUFBO0FDcEJGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RhZmYvc3RhZmYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDY2dnc7XG4gIG1hcmdpbjogMjBweCAwIDAgMzJweDtcbiAgaDIge1xuICAgIGNvbG9yOiBzYWRkbGVicm93bjtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogNHB4IDA7XG5cbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICBjb2xvcjogI2M3YTI3NztcbiAgfVxuXG4gIC5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgfVxuXG4gIC5mb3JtLWZpZWxkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICB9XG5cbiAgLmdyaWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogNDBweCA0NHB4IDRweCA0cHg7XG5cbiAgICAuY29sIHtcbiAgICAgIHdpZHRoOiAyMCU7XG4gICAgfVxuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgY29sb3I6ICNjN2EyNzc7XG5cbiAgICBjbGVhcjogYm90aDtcbiAgfVxuICAuc2Nyb2xsLWJveCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHBhZGRpbmctcmlnaHQ6IDQ0cHg7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICB9XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAzMnB4O1xuICAmLnBheSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMjcwZGVnLFxuICAgICAgI2ZmZWNjOSAtMC4yOSUsXG4gICAgICByZ2JhKDI1NSwgMjUwLCAyMzQsIDAuOSkgMTAwJVxuICAgICk7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgIC0ycHggLTJweCA2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwLjQ5NjJweDtcbiAgfVxuICAmLnBhaWQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDI3MGRlZyxcbiAgICAgIHJnYmEoMTAzLCAyMjAsIDkzLCAwLjMpIC0wLjI5JSxcbiAgICAgIHJnYmEoMTkzLCAyNDIsIDE4OSwgMCkgMTAwJVxuICAgICk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgICAgaW5zZXQgLTNweCAtM3B4IDZweCAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwLjQ5NjJweDtcbiAgfVxufVxuXG50YWJsZS5teXRhYmxlIHRyIHRkIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnNjcm9sbC1ib3g6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuLnNjcm9sbC1ib3g6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE0YjAwO1xufVxuXG5pb24taW5wdXQge1xuICBoZWlnaHQ6IDUwcHg7XG5cbiAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZDFiMThiO1xuXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmZjJkOSAtMS4yOCUsICNmZmY5ZTQgMTAzLjA4JSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IC03cHggLTVweCA4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxuICAgIGluc2V0IDVweCA1cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuIiwiLmJvZHkge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDY2dnc7XG4gIG1hcmdpbjogMjBweCAwIDAgMzJweDtcbn1cbi5ib2R5IGgyIHtcbiAgY29sb3I6IHNhZGRsZWJyb3duO1xufVxuLmJvZHkgcCB7XG4gIG1hcmdpbjogNHB4IDA7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBjb2xvcjogI2M3YTI3Nztcbn1cbi5ib2R5IC5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn1cbi5ib2R5IC5mb3JtLWZpZWxkIHtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbn1cbi5ib2R5IC5ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNDBweCA0NHB4IDRweCA0cHg7XG59XG4uYm9keSAuZ3JpZCAuY29sIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi5ib2R5IC5oZWFkZXIge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgY29sb3I6ICNjN2EyNzc7XG4gIGNsZWFyOiBib3RoO1xufVxuLmJvZHkgLnNjcm9sbC1ib3gge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBhZGRpbmctcmlnaHQ6IDQ0cHg7XG4gIGhlaWdodDogNjB2aDtcbn1cblxuYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDMycHg7XG59XG5idXR0b24ucGF5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZmZWNjOSAtMC4yOSUsIHJnYmEoMjU1LCAyNTAsIDIzNCwgMC45KSAxMDAlKTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgLTJweCAtMnB4IDZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwLjQ5NjJweDtcbn1cbmJ1dHRvbi5wYWlkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSgxMDMsIDIyMCwgOTMsIDAuMykgLTAuMjklLCByZ2JhKDE5MywgMjQyLCAxODksIDApIDEwMCUpO1xuICBib3gtc2hhZG93OiBpbnNldCAxcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IC0zcHggLTNweCA2cHggI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTAuNDk2MnB4O1xufVxuXG50YWJsZS5teXRhYmxlIHRyIHRkIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnNjcm9sbC1ib3g6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuLnNjcm9sbC1ib3g6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE0YjAwO1xufVxuXG5pb24taW5wdXQge1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjRweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2QxYjE4YjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZmMmQ5IC0xLjI4JSwgI2ZmZjllNCAxMDMuMDglKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTdweCAtNXB4IDhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIGluc2V0IDVweCA1cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/staff/staff.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/staff/staff.page.ts ***!
  \*******************************************/
/*! exports provided: StaffPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffPage", function() { return StaffPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_staff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/staff.service */ "./src/app/services/staff.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let StaffPage = class StaffPage {
    constructor(staffService, fb, route, router) {
        this.staffService = staffService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.staffForm = this.fb.group({
            staffName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.userId = params.userId;
        });
        this.getStaff();
    }
    getStaff() {
        this.staffService.getStaffs(this.userId).subscribe((staffs) => {
            this.staffs = staffs;
            console.log("staffs", this.staffs);
        });
    }
    postStaff() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.staffForm.invalid) {
                console.log("fill staff name!");
                return;
            }
            yield this.staffService
                .postStaff(this.userId, this.staffForm.value)
                .subscribe((data) => {
                console.log("data", data);
                this.getStaff();
                this.staffForm.reset();
            });
        });
    }
};
StaffPage.ctorParameters = () => [
    { type: src_app_services_staff_service__WEBPACK_IMPORTED_MODULE_2__["StaffService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
StaffPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-staff",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./staff.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/staff/staff.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./staff.page.scss */ "./src/app/pages/staff/staff.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_staff_service__WEBPACK_IMPORTED_MODULE_2__["StaffService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], StaffPage);



/***/ }),

/***/ "./src/app/services/staff.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/staff.service.ts ***!
  \*******************************************/
/*! exports provided: StaffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffService", function() { return StaffService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _apiConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../apiConstants */ "./apiConstants.ts");




let StaffService = class StaffService {
    constructor(http) {
        this.http = http;
        // this.getStaffs(userId)
    }
    getStaffs(userId) {
        return this.http.get(_apiConstants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].GETSTAFFS(userId));
    }
    postStaff(userId, staff) {
        return this.http.post(_apiConstants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].ADDSTAFF(userId), staff);
    }
};
StaffService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StaffService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], StaffService);



/***/ })

}]);
//# sourceMappingURL=pages-staff-staff-module-es2015.js.map