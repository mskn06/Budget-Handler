(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-projects-projects-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/projects.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/projects.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"primary\" *ngIf=\"projects\">\n  <div>\n    <app-sidebar-left [pageName]=\"'projects'\"></app-sidebar-left>\n  </div>\n\n  <div class=\"body\">\n    <h2>PROJECTS</h2>\n\n    <div class=\"header grid\">\n      <div class=\"col\">PROJECT NAME</div>\n      <div class=\"col\">DELIVERY DATE</div>\n      <div class=\"col\">EARNING</div>\n      <div class=\"col\">EXPENSE</div>\n      <div class=\"col\">STATUS</div>\n    </div>\n    <!-- accordion -->\n    <div class=\"scroll-box\">\n      <accordion *ngFor=\"let project of projects\">\n        <group [project]=\"project\">\n          <!-- collapsible: SUB-CONTENT -->\n          <table class=\"mytable\" *ngIf=\"project.staffs.length\">\n            <tr class=\"header\">\n              <td>STAFF NAME</td>\n              <td>AMOUNT</td>\n              <td>PAID ON</td>\n              <td>STATUS</td>\n            </tr>\n            <tr *ngFor=\"let staff of project.staffs\">\n              <!-- staff name -->\n              <td>{{ staff.profile.staffName }}</td>\n\n              <!-- amount -->\n              <td>\n                <div *ngIf=\"staff.payment.amtToBePaid\">\n                  ${{ staff.payment.amtToBePaid }}\n                </div>\n                <div *ngIf=\"staff.payment.amtPaid\">\n                  ${{ staff.payment.amtPaid }}\n                </div>\n              </td>\n              <td>\n                <div *ngIf=\"staff.payment.paidOn; else dash\">\n                  {{ staff.payment.paidOn | date: \"dd-MM-yyyy\"}}\n                </div>\n                <ng-template #dash>\n                  -\n                </ng-template>\n              </td>\n              <td>\n                <div *ngIf=\"staff.payment.paidOn; else pay\">\n                  <button class=\"paid\">PAID</button>\n                </div>\n                <ng-template #pay>\n                  <button (click)=\"payStaff(project, staff)\" class=\"pay\">\n                    PAY\n                  </button>\n                </ng-template>\n              </td>\n            </tr>\n          </table>\n        </group>\n      </accordion>\n    </div>\n    <!-- end accordion -->\n  </div>\n\n  <div>\n    <app-sidebar-right></app-sidebar-right>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/projects/projects-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/projects/projects-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageRoutingModule", function() { return ProjectsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _projects_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.page */ "./src/app/pages/projects/projects.page.ts");




const routes = [
    {
        path: "",
        component: _projects_page__WEBPACK_IMPORTED_MODULE_3__["ProjectsPage"],
    },
];
let ProjectsPageRoutingModule = class ProjectsPageRoutingModule {
};
ProjectsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProjectsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/projects/projects.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/projects/projects.module.ts ***!
  \***************************************************/
/*! exports provided: ProjectsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageModule", function() { return ProjectsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects-routing.module */ "./src/app/pages/projects/projects-routing.module.ts");
/* harmony import */ var _projects_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects.page */ "./src/app/pages/projects/projects.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");








let ProjectsPageModule = class ProjectsPageModule {
};
ProjectsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _projects_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectsPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_projects_page__WEBPACK_IMPORTED_MODULE_6__["ProjectsPage"]],
    })
], ProjectsPageModule);



/***/ }),

/***/ "./src/app/pages/projects/projects.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/projects/projects.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  float: left;\n  width: 66vw;\n  margin: 20px 0 0 32px;\n}\n.body h2 {\n  color: saddlebrown;\n}\n.body .grid {\n  display: flex;\n  padding: 40px 44px 4px 4px;\n}\n.body .grid .col {\n  width: 20%;\n}\n.body .header {\n  font-family: Poppins;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 27px;\n  color: #c7a277;\n}\n.body .scroll-box {\n  overflow-y: scroll;\n  padding-right: 44px;\n  height: 80vh;\n}\nbutton {\n  padding: 8px 32px;\n}\nbutton.pay {\n  background: linear-gradient(270deg, #ffecc9 -0.29%, rgba(255, 250, 234, 0.9) 100%);\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.14), -2px -2px 6px rgba(255, 255, 255, 0.5);\n  border-radius: 10.4962px;\n}\nbutton.paid {\n  background: linear-gradient(270deg, rgba(103, 220, 93, 0.3) -0.29%, rgba(193, 242, 189, 0) 100%);\n  box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.1), inset -3px -3px 6px #ffffff;\n  border-radius: 10.4962px;\n}\ntable.mytable tr td {\n  padding: 10px;\n}\nbutton:focus {\n  outline: none;\n}\n.scroll-box::-webkit-scrollbar {\n  width: 5px;\n}\n.scroll-box::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #8a4b00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21za2ovQnVkZ2V0LUhhbmRsZXIvZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL3Byb2plY3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNDRjtBREFFO0VBQ0Usa0JBQUE7QUNFSjtBRENFO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0FDQ0o7QURDSTtFQUNFLFVBQUE7QUNDTjtBREVFO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNBSjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBSjtBRElBO0VBQ0UsaUJBQUE7QUNERjtBREVFO0VBQ0Usa0ZBQUE7RUFLQSxtRkFBQTtFQUVBLHdCQUFBO0FDTEo7QURPRTtFQUNFLGdHQUFBO0VBS0EsNkVBQUE7RUFFQSx3QkFBQTtBQ1ZKO0FEY0E7RUFDRSxhQUFBO0FDWEY7QURjQTtFQUNFLGFBQUE7QUNYRjtBRGNBO0VBQ0UsVUFBQTtBQ1hGO0FEY0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FDWEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNjZ2dztcbiAgbWFyZ2luOiAyMHB4IDAgMCAzMnB4O1xuICBoMiB7XG4gICAgY29sb3I6IHNhZGRsZWJyb3duO1xuICB9XG5cbiAgLmdyaWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogNDBweCA0NHB4IDRweCA0cHg7XG5cbiAgICAuY29sIHtcbiAgICAgIHdpZHRoOiAyMCU7XG4gICAgfVxuICB9XG4gIC5oZWFkZXIge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIGNvbG9yOiAjYzdhMjc3O1xuICB9XG4gIC5zY3JvbGwtYm94IHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgcGFkZGluZy1yaWdodDogNDRweDtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gIH1cbn1cblxuYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDMycHg7XG4gICYucGF5IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAyNzBkZWcsXG4gICAgICAjZmZlY2M5IC0wLjI5JSxcbiAgICAgIHJnYmEoMjU1LCAyNTAsIDIzNCwgMC45KSAxMDAlXG4gICAgKTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgLTJweCAtMnB4IDZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAuNDk2MnB4O1xuICB9XG4gICYucGFpZCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMjcwZGVnLFxuICAgICAgcmdiYSgxMDMsIDIyMCwgOTMsIDAuMykgLTAuMjklLFxuICAgICAgcmdiYSgxOTMsIDI0MiwgMTg5LCAwKSAxMDAlXG4gICAgKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSksXG4gICAgICBpbnNldCAtM3B4IC0zcHggNnB4ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTAuNDk2MnB4O1xuICB9XG59XG5cbnRhYmxlLm15dGFibGUgdHIgdGQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2Nyb2xsLWJveDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG4uc2Nyb2xsLWJveDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE0YjAwO1xufVxuIiwiLmJvZHkge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDY2dnc7XG4gIG1hcmdpbjogMjBweCAwIDAgMzJweDtcbn1cbi5ib2R5IGgyIHtcbiAgY29sb3I6IHNhZGRsZWJyb3duO1xufVxuLmJvZHkgLmdyaWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA0MHB4IDQ0cHggNHB4IDRweDtcbn1cbi5ib2R5IC5ncmlkIC5jb2wge1xuICB3aWR0aDogMjAlO1xufVxuLmJvZHkgLmhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBjb2xvcjogI2M3YTI3Nztcbn1cbi5ib2R5IC5zY3JvbGwtYm94IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBwYWRkaW5nLXJpZ2h0OiA0NHB4O1xuICBoZWlnaHQ6IDgwdmg7XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAzMnB4O1xufVxuYnV0dG9uLnBheSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNmZmVjYzkgLTAuMjklLCByZ2JhKDI1NSwgMjUwLCAyMzQsIDAuOSkgMTAwJSk7XG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIC0ycHggLTJweCA2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxMC40OTYycHg7XG59XG5idXR0b24ucGFpZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHJnYmEoMTAzLCAyMjAsIDkzLCAwLjMpIC0wLjI5JSwgcmdiYSgxOTMsIDI0MiwgMTg5LCAwKSAxMDAlKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAtM3B4IC0zcHggNnB4ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwLjQ5NjJweDtcbn1cblxudGFibGUubXl0YWJsZSB0ciB0ZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zY3JvbGwtYm94Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi5zY3JvbGwtYm94Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YTRiMDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/projects/projects.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/projects/projects.page.ts ***!
  \*************************************************/
/*! exports provided: ProjectsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPage", function() { return ProjectsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let ProjectsPage = class ProjectsPage {
    constructor(projectService, route, router) {
        this.projectService = projectService;
        this.route = route;
        this.router = router;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
        this.route.params.subscribe((params) => {
            this.userId = params.userId;
        });
    }
    ngOnInit() {
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$))
            .subscribe(() => {
            this.getProjects();
        });
    }
    ngOnDestroy() {
        console.log("done with");
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    getProjects() {
        this.projectService.getProjects(this.userId).subscribe((projects) => {
            this.projects = projects;
            // console.log("projects", this.projects);
        });
    }
    payStaff(project, staff) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log("project", project);
            // console.log("staff", staff);
            yield this.projectService
                .payStaff(this.userId, project, staff)
                .subscribe((data) => {
                // console.log("paid staff", data);
                this.getProjects();
            });
        });
    }
};
ProjectsPage.ctorParameters = () => [
    { type: _services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:beforeunload"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ProjectsPage.prototype, "ngOnDestroy", null);
ProjectsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-projects",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/projects.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.page.scss */ "./src/app/pages/projects/projects.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ProjectsPage);



/***/ })

}]);
//# sourceMappingURL=pages-projects-projects-module-es2015.js.map