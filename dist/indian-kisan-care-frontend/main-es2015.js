(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/niteenchougula/Documents/workspace_2021/indian-kisan-care-frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "7Vn+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function RegisterComponent_form_3_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_3_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username must be at least 3 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_3_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username must be at most 20 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_form_3_div_7_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_form_3_div_7_div_2_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_form_3_div_7_div_3_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.maxlength);
} }
function RegisterComponent_form_3_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_3_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email must be a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_3_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_form_3_div_13_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_form_3_div_13_div_2_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.email);
} }
function RegisterComponent_form_3_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_3_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_3_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_form_3_div_19_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_form_3_div_19_div_2_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.minlength);
} }
function RegisterComponent_form_3_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Signup failed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r9.errorMessage, " ");
} }
function RegisterComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_form_3_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _r2.form.valid && ctx_r17.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_form_3_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.form.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RegisterComponent_form_3_div_7_Template, 4, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_form_3_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.form.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegisterComponent_form_3_div_13_Template, 3, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_form_3_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.form.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterComponent_form_3_div_19_Template, 3, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegisterComponent_form_3_div_23_Template, 4, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.form.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.submitted && _r3.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.form.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.submitted && _r5.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.form.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.submitted && _r7.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.submitted && ctx_r0.isSignUpFailed);
} }
function RegisterComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your registration is successful! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(authService) {
        this.authService = authService;
        this.form = {};
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    ngOnInit() {
    }
    onSubmit() {
        this.authService.register(this.form).subscribe(data => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
        }, err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 5, vars: 2, consts: [[1, "col-md-12"], [1, "card", "card-container"], ["id", "profile-img", "src", "//ssl.gstatic.com/accounts/ui/avatar_2x.png", 1, "profile-img-card"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", "required", "", "minlength", "3", "maxlength", "20", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "alert-danger", 4, "ngIf"], ["for", "email"], ["type", "email", "name", "email", "required", "", "email", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "password"], ["type", "password", "name", "password", "required", "", "minlength", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "btn", "btn-primary", "btn-block"], ["class", "alert alert-warning", 4, "ngIf"], [1, "alert-danger"], [4, "ngIf"], [1, "alert", "alert-warning"], [1, "alert", "alert-success"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_form_3_Template, 24, 7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegisterComponent_div_4_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSuccessful);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSuccessful);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"]], styles: ["label[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n\n.card-container.card[_ngcontent-%COMP%] {\n  max-width: 400px !important;\n  padding: 40px 40px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUdoQixrQkFBa0I7RUFHbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUdkLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNhcmQtY29udGFpbmVyLmNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDQwcHggNDBweDtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBwYWRkaW5nOiAyMHB4IDI1cHggMzBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMjVweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4ucHJvZmlsZS1pbWctY2FyZCB7XG4gIHdpZHRoOiA5NnB4O1xuICBoZWlnaHQ6IDk2cHg7XG4gIG1hcmdpbjogMCBhdXRvIDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "25SN":
/*!*****************************************!*\
  !*** ./src/app/_model/purchaseOrder.ts ***!
  \*****************************************/
/*! exports provided: PurchaseOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrder", function() { return PurchaseOrder; });
class PurchaseOrder {
}


/***/ }),

/***/ "2Uo4":
/*!*****************************************************************!*\
  !*** ./src/app/menu/navigation-bar/navigation-bar.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/auth.service */ "7Vn+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");





class NavigationBarComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    logout() {
        this.auth.logout();
        this.router.navigateByUrl('/login');
    }
}
NavigationBarComponent.ɵfac = function NavigationBarComponent_Factory(t) { return new (t || NavigationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavigationBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationBarComponent, selectors: [["app-navigation-bar"]], decls: 7, vars: 0, consts: [[1, "navbar", "navbar-light", "navbar-expand-sm", "bg-white", "shadow-sm"], [1, "container-fluid"], [1, "navbar-brand"], [1, "navbar-nav"], [1, "nav-item", "nav-link", 2, "cursor", "pointer", 3, "click"]], template: function NavigationBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "RK-Fertilizers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_span_click_5_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation-bar',
                templateUrl: './navigation-bar.component.html',
                styleUrls: ['./navigation-bar.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "7Vn+":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _model_http_client_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_model/http-client-helper */ "aj3h");





const AUTH_API = _model_http_client_helper__WEBPACK_IMPORTED_MODULE_2__["HttpClientHelper"].baseURL + '/auth/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(credentials) {
        return this.http.post(AUTH_API + 'signin', {
            username: credentials.username,
            password: credentials.password
        }, httpOptions);
    }
    register(user) {
        return this.http.post(AUTH_API + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        }, httpOptions);
    }
    logout() {
        localStorage.clear();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "7YO1":
/*!************************************************************!*\
  !*** ./src/app/purchase-order/purchase-order.component.ts ***!
  \************************************************************/
/*! exports provided: PurchaseOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderComponent", function() { return PurchaseOrderComponent; });
/* harmony import */ var _model_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_model/product */ "TpFj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_purchaseOrder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_model/purchaseOrder */ "25SN");
/* harmony import */ var _model_purchaseOrderDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_model/purchaseOrderDetail */ "vgGD");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/product.service */ "szdb");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/supplier.service */ "8LTU");
/* harmony import */ var _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/purchase-order.service */ "QhWZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function PurchaseOrderComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const supplier_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", supplier_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](supplier_r3.supplierName);
} }
function PurchaseOrderComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", product_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r4.productName);
} }
function PurchaseOrderComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PurchaseOrderComponent_tr_33_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const i_r6 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.removeCart(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PurchaseOrderComponent_tr_33_Template_input_ngModelChange_7_listener($event) { const cart_r5 = ctx.$implicit; return cart_r5.product.productName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PurchaseOrderComponent_tr_33_Template_input_ngModelChange_9_listener($event) { const cart_r5 = ctx.$implicit; return cart_r5.price = $event; })("change", function PurchaseOrderComponent_tr_33_Template_input_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.changeInQtyOrPrice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PurchaseOrderComponent_tr_33_Template_input_ngModelChange_12_listener($event) { const cart_r5 = ctx.$implicit; return cart_r5.qtyOrdered = $event; })("change", function PurchaseOrderComponent_tr_33_Template_input_change_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.changeInQtyOrPrice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cart_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", cart_r5.product.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", cart_r5.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", cart_r5.product.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", cart_r5.qtyOrdered);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cart_r5.price * cart_r5.qtyOrdered);
} }
class PurchaseOrderComponent {
    constructor(productService, supplierService, purchaseOrderService) {
        this.productService = productService;
        this.supplierService = supplierService;
        this.purchaseOrderService = purchaseOrderService;
        this.product = new _model_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();
        this.purchaseOrder = new _model_purchaseOrder__WEBPACK_IMPORTED_MODULE_2__["PurchaseOrder"]();
        this.purchaseOrderDetail = new _model_purchaseOrderDetail__WEBPACK_IMPORTED_MODULE_3__["PurchaseOrderDetail"]();
        this.rows = [];
        this.currentBalance = 0;
        this.previousBalance = 0;
        this.totalAmount = 0;
        this.totalBalance = 0;
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.products = this.productService.getProductsList();
        this.suppliers = this.supplierService.getSupplierList();
        this.purchaseOrder.amountPaid = 0;
    }
    save() {
        this.purchaseOrder.currentBalance = this.currentBalance;
        this.purchaseOrder.purchaseOrderDetail = this.rows;
        this.purchaseOrder.totalPrice = this.totalAmount;
        this.purchaseOrderService
            .createPurchaseOrder(this.purchaseOrder).subscribe(data => {
            console.log(data);
            this.refreshAfterSave();
        }, error => console.log(error));
    }
    refreshAfterSave() {
        this.purchaseOrder = new _model_purchaseOrder__WEBPACK_IMPORTED_MODULE_2__["PurchaseOrder"]();
        this.product = new _model_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();
        this.purchaseOrder.amountPaid = 0;
        this.previousBalance = 0;
        this.currentBalance = 0;
        this.totalBalance = 0;
        this.rows = [];
    }
    getTotalPrice() {
        let total = 0;
        this.rows.forEach(obj => {
            total += Number(obj.price);
        });
        return total;
    }
    getTotalQty() {
        let total = 0;
        this.rows.forEach(obj => {
            total += Number(obj.qtyOrdered);
        });
        return total;
    }
    totalAmountToPaid() {
        let totalAmount = 0;
        this.rows.forEach(obj => {
            totalAmount += Number(obj.qtyOrdered) * Number(obj.price);
        });
        this.totalAmount = totalAmount;
        return totalAmount;
    }
    removeCart(index) {
        const amountBalance1 = this.totalAmount - (this.rows[index].price * this.rows[index].qtyOrdered);
        this.currentBalance = amountBalance1 - Number(this.purchaseOrder.amountPaid);
        this.totalBalance = this.previousBalance + this.currentBalance;
        this.rows.splice(index, 1);
        this.purchaseOrder.amountPaid = this.rows.length === 0 ? 0 : this.purchaseOrder.amountPaid;
    }
    selectedProduct(prod) {
        this.rows.push({
            product: prod,
            qtyOrdered: 0,
            price: 0
        });
    }
    supplierBalanceData(supplierID) {
        this.purchaseOrderService.getPurchaseOrderBalaceBySupplier(supplierID).subscribe((data) => {
            console.log(data);
            this.previousBalance = data;
            this.changeInQtyOrPrice();
        }, (error) => console.log(error));
    }
    amountToBePaid(amountPaid) {
        this.currentBalance = this.totalAmount - amountPaid;
        this.totalBalance = this.previousBalance + this.currentBalance;
    }
    changeInQtyOrPrice() {
        this.currentBalance = this.totalAmount - this.purchaseOrder.amountPaid;
        this.totalBalance = this.previousBalance + this.currentBalance;
    }
}
PurchaseOrderComponent.ɵfac = function PurchaseOrderComponent_Factory(t) { return new (t || PurchaseOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_supplier_service__WEBPACK_IMPORTED_MODULE_5__["SupplierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_purchase_order_service__WEBPACK_IMPORTED_MODULE_6__["PurchaseOrderService"])); };
PurchaseOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PurchaseOrderComponent, selectors: [["app-purchase-order"]], decls: 63, vars: 15, consts: [[2, "width", "400px"], [1, "form-group"], ["for", "name"], ["name", "customer", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["disabled", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["name", "products", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], [1, "table", "table-hover", "table", "table-bordered", "table-striped"], [4, "ngFor", "ngForOf"], [2, "text-align", "right"], ["type", "text", "id", "price", "required", "", "name", "price", 3, "ngModel", "ngModelChange", "input"], ["type", "text", "id", "price", "name", "price", "disabled", "", 3, "value"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [3, "ngValue"], [3, "click"], ["type", "text", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["type", "text", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange", "change"]], template: function PurchaseOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PurchaseOrderComponent_Template_select_ngModelChange_4_listener($event) { return ctx.purchaseOrder.supplier = $event; })("change", function PurchaseOrderComponent_Template_select_change_4_listener() { return ctx.supplierBalanceData(ctx.purchaseOrder.supplier.supplierID); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select Supplierr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PurchaseOrderComponent_option_7_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PurchaseOrderComponent_Template_select_ngModelChange_12_listener($event) { return ctx.product = $event; })("change", function PurchaseOrderComponent_Template_select_change_12_listener() { return ctx.selectedProduct(ctx.product); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Select Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, PurchaseOrderComponent_option_15_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "S.No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Total Amout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, PurchaseOrderComponent_tr_33_Template, 15, 6, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Amount Paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PurchaseOrderComponent_Template_input_ngModelChange_48_listener($event) { return ctx.purchaseOrder.amountPaid = $event; })("input", function PurchaseOrderComponent_Template_input_input_48_listener() { return ctx.amountToBePaid(ctx.purchaseOrder.amountPaid); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Current Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Previous Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Total Pay Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PurchaseOrderComponent_Template_button_click_61_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.purchaseOrder.supplier);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 11, ctx.suppliers));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 13, ctx.products));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getTotalQty());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.totalAmountToPaid().toLocaleString("en-IN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.purchaseOrder.amountPaid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.currentBalance.toLocaleString("en-IN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.previousBalance.toLocaleString("en-IN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.totalBalance.toLocaleString("en-IN"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PurchaseOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-purchase-order',
                templateUrl: './purchase-order.component.html'
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }, { type: _services_supplier_service__WEBPACK_IMPORTED_MODULE_5__["SupplierService"] }, { type: _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_6__["PurchaseOrderService"] }]; }, null); })();


/***/ }),

/***/ "8LCG":
/*!**********************************************************!*\
  !*** ./src/app/balance-sheet/balance-sheet.component.ts ***!
  \**********************************************************/
/*! exports provided: BalanceSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceSheetComponent", function() { return BalanceSheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_customer_balance_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_model/customer-balance-sheet */ "BDUJ");
/* harmony import */ var _model_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_model/customer */ "Xzbv");
/* harmony import */ var _model_supplier_balance_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_model/supplier-balance-sheet */ "r4IO");
/* harmony import */ var _model_supplier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_model/supplier */ "dm9D");
/* harmony import */ var _model_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_model/location */ "zOs6");
/* harmony import */ var _services_sales_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/sales-order.service */ "RQfM");
/* harmony import */ var _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/purchase-order.service */ "QhWZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function BalanceSheetComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customerBalanceSheet_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customerBalanceSheet_r2.customer.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customerBalanceSheet_r2.customer.location.cityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customerBalanceSheet_r2.currentBalance);
} }
function BalanceSheetComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const supplierBalanceSheet_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](supplierBalanceSheet_r3.supplier.supplierName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](supplierBalanceSheet_r3.supplier.company.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](supplierBalanceSheet_r3.currentBalance);
} }
class BalanceSheetComponent {
    constructor(salesOrderService, purchaseOrderService) {
        this.salesOrderService = salesOrderService;
        this.purchaseOrderService = purchaseOrderService;
        this.customerBalanceSheet = new _model_customer_balance_sheet__WEBPACK_IMPORTED_MODULE_1__["CustomerBalanceSheet"]();
        this.customer = new _model_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
        this.location = new _model_location__WEBPACK_IMPORTED_MODULE_5__["Location"]();
        this.SupplierBalanceSheet = new _model_supplier_balance_sheet__WEBPACK_IMPORTED_MODULE_3__["SupplierBalanceSheet"]();
        this.supplier = new _model_supplier__WEBPACK_IMPORTED_MODULE_4__["Supplier"]();
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.customerBalanceSheets = this.salesOrderService.getAllCustomerSalesOrderBalanceSheet();
        this.supplierBalanceSheets = this.purchaseOrderService.getAllSupplierPurchaseOrderBalanceSheet();
    }
}
BalanceSheetComponent.ɵfac = function BalanceSheetComponent_Factory(t) { return new (t || BalanceSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sales_order_service__WEBPACK_IMPORTED_MODULE_6__["SalesOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_purchase_order_service__WEBPACK_IMPORTED_MODULE_7__["PurchaseOrderService"])); };
BalanceSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BalanceSheetComponent, selectors: [["app-balance-sheet"]], decls: 35, vars: 6, consts: [[1, "panel", "panel-primary"], [1, "panel-heading"], [1, "panel-body"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"]], template: function BalanceSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Customer List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BalanceSheetComponent_tr_15_Template, 7, 3, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Supplier List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, BalanceSheetComponent_tr_33_Template, 7, 3, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 2, ctx.customerBalanceSheets));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 4, ctx.supplierBalanceSheets));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWxhbmNlLXNoZWV0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BalanceSheetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-balance-sheet',
                templateUrl: './balance-sheet.component.html',
                styleUrls: ['./balance-sheet.component.css']
            }]
    }], function () { return [{ type: _services_sales_order_service__WEBPACK_IMPORTED_MODULE_6__["SalesOrderService"] }, { type: _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_7__["PurchaseOrderService"] }]; }, null); })();


/***/ }),

/***/ "8LTU":
/*!***********************************************!*\
  !*** ./src/app/_services/supplier.service.ts ***!
  \***********************************************/
/*! exports provided: SupplierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierService", function() { return SupplierService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_model/http-client-helper */ "aj3h");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class SupplierService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__["HttpClientHelper"].baseURL + '/supplier';
    }
    getSupplier(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    // tslint:disable-next-line: ban-types
    createSupplier(supplier) {
        return this.http.post(`${this.baseUrl}`, supplier);
    }
    // tslint:disable-next-line: ban-types
    updateSupplier(value) {
        return this.http.put(`${this.baseUrl}`, value);
    }
    deleteSupplier(id) {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
    getSupplierList() {
        return this.http.get(`${this.baseUrl}`);
    }
}
SupplierService.ɵfac = function SupplierService_Factory(t) { return new (t || SupplierService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SupplierService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SupplierService, factory: SupplierService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupplierService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "9c9/":
/*!***************************************!*\
  !*** ./src/app/_model/sales-order.ts ***!
  \***************************************/
/*! exports provided: SalesOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesOrder", function() { return SalesOrder; });
class SalesOrder {
}


/***/ }),

/***/ "AfT/":
/*!***********************************************!*\
  !*** ./src/app/_services/category.service.ts ***!
  \***********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_model/http-client-helper */ "aj3h");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CategoryService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__["HttpClientHelper"].baseURL + '/category';
    }
    getCategory(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    // tslint:disable-next-line: ban-types
    createCategory(category) {
        return this.http.post(`${this.baseUrl}`, category);
    }
    // tslint:disable-next-line: ban-types
    updateCategory(value) {
        return this.http.put(`${this.baseUrl}`, value);
    }
    deleteCategory(id) {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
    getCategoryList() {
        return this.http.get(`${this.baseUrl}`);
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BAgB":
/*!***********************************************!*\
  !*** ./src/app/_services/location.service.ts ***!
  \***********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_model/http-client-helper */ "aj3h");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class LocationService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__["HttpClientHelper"].baseURL + '/location';
    }
    getLocation(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    createLocation(Location) {
        return this.http.post(`${this.baseUrl}`, Location);
    }
    updateLocation(value) {
        return this.http.put(`${this.baseUrl}`, value);
    }
    deleteLocation(id) {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
    getLocationList() {
        return this.http.get(`${this.baseUrl}`);
    }
}
LocationService.ɵfac = function LocationService_Factory(t) { return new (t || LocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocationService, factory: LocationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "BDUJ":
/*!**************************************************!*\
  !*** ./src/app/_model/customer-balance-sheet.ts ***!
  \**************************************************/
/*! exports provided: CustomerBalanceSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerBalanceSheet", function() { return CustomerBalanceSheet; });
class CustomerBalanceSheet {
}


/***/ }),

/***/ "DJpn":
/*!**********************************************!*\
  !*** ./src/app/_model/sales-order-detail.ts ***!
  \**********************************************/
/*! exports provided: SalesOrderDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesOrderDetail", function() { return SalesOrderDetail; });
class SalesOrderDetail {
}


/***/ }),

/***/ "EN+z":
/*!************************************************************!*\
  !*** ./src/app/create-product/create-product.component.ts ***!
  \************************************************************/
/*! exports provided: CreateProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductComponent", function() { return CreateProductComponent; });
/* harmony import */ var _model_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_model/product */ "TpFj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/product.service */ "szdb");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/category.service */ "AfT/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function CreateProductComponent_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", category_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r1.categoryName);
} }
class CreateProductComponent {
    constructor(productService, categoryService, router) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.router = router;
        this.product = new _model_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();
        this.submitted = false;
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.categories = this.categoryService.getCategoryList();
    }
    newProduct() {
        this.submitted = false;
        this.product = new _model_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();
    }
    save() {
        this.productService
            .createProduct(this.product).subscribe(data => {
            console.log(data);
            this.product = new _model_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();
            this.gotoList();
        }, error => console.log(error));
    }
    onSubmit() {
        this.submitted = true;
        console.log(this.product);
        this.save();
    }
    gotoList() {
        this.router.navigate(['/products']);
    }
}
CreateProductComponent.ɵfac = function CreateProductComponent_Factory(t) { return new (t || CreateProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CreateProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateProductComponent, selectors: [["app-create-productt"]], decls: 25, vars: 8, consts: [[2, "width", "400px", 3, "hidden"], [3, "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "productName", "required", "", "name", "productName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "categories", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["disabled", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "id", "price", "required", "", "name", "price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success"], [3, "hidden"], [3, "ngValue"]], template: function CreateProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Create Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CreateProductComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateProductComponent_Template_input_ngModelChange_7_listener($event) { return ctx.product.productName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateProductComponent_Template_select_ngModelChange_11_listener($event) { return ctx.product.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Select Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CreateProductComponent_option_14_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateProductComponent_Template_input_ngModelChange_19_listener($event) { return ctx.product.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "You submitted successfully!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.product.productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.product.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 6, ctx.categories));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.product.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.submitted);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-create-productt',
                templateUrl: './create-product.component.html'
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "FQmJ":
/*!****************************************************!*\
  !*** ./src/app/_services/token-storage.service.ts ***!
  \****************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
class TokenStorageService {
    constructor() { }
    signOut() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return sessionStorage.getItem(TOKEN_KEY);
    }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
    }
}
TokenStorageService.ɵfac = function TokenStorageService_Factory(t) { return new (t || TokenStorageService)(); };
TokenStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenStorageService, factory: TokenStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Hsdx":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _model_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_model/product */ "TpFj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_services/product.service */ "szdb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/category.service */ "AfT/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function ProductListComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "#Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Qty Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductListComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductListComponent_ng_template_7_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const product_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9); return ctx_r5.openModal(_r2, product_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductListComponent_ng_template_7_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const product_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.deleteProduct(product_r4.productID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductListComponent_ng_template_7_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const product_r4 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.productDetails(product_r4.productID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r4.productID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r4.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r4.category.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r4.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r4.price);
} }
function ProductListComponent_ng_template_8_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r11.categoryName);
} }
function ProductListComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Update Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductListComponent_ng_template_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProductListComponent_ng_template_8_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.updateProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductListComponent_ng_template_8_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.product.productName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductListComponent_ng_template_8_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.product.price = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductListComponent_ng_template_8_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.product.qty = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductListComponent_ng_template_8_Template_select_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.product.category = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Select Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ProductListComponent_ng_template_8_option_30_Template, 2, 1, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductListComponent_ng_template_8_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r3.editProfileForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.product.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.product.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.product.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.product.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 6, ctx_r3.categories));
} }
class ProductListComponent {
    constructor(productService, modalService, categoryService, fb, router) {
        this.productService = productService;
        this.modalService = modalService;
        this.categoryService = categoryService;
        this.fb = fb;
        this.router = router;
        this.products = null;
        this.title = 'modal2';
        this.product = new _model_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();
        this.dtOptions = null;
        this.pipeData = null;
        this.p = 1;
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
        this.reloadData();
        this.editProfileForm = this.fb.group({
            productID: '',
            productName: '',
            price: '',
            qty: '',
            category: ''
        });
    }
    reloadData() {
        this.productService.getProductsList().subscribe(response => {
            this.products = response;
        });
        this.categories = this.categoryService.getCategoryList();
    }
    deleteProduct(id) {
        this.productService.deleteProduct(id)
            .subscribe(data => {
            this.reloadData();
        }, error => console.log(error));
    }
    productDetails(id) {
        this.router.navigate(['details', id]);
    }
    updateProduct() {
        this.productService.updateProduct(this.product)
            .subscribe(data => {
            console.log(data);
            this.product = new _model_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();
            this.modalService.dismissAll();
        }, error => console.log(error));
    }
    openModal(targetModal, product) {
        this.product = product;
        this.modalService.open(targetModal, {
            centered: true,
            backdrop: 'static'
        });
    }
    sort(e) {
        // this.product =  ?
    }
    closeModal() {
        this.reloadData();
        this.modalService.dismissAll();
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], decls: 10, vars: 8, consts: [[1, "panel", "panel-primary"], [1, "panel-heading"], [1, "panel-body"], ["dataKey", "id", "sortMode", "multiple", 1, "table", "table-bordered", "row-border", "hover", 3, "value", "selection", "rowHover", "rows", "showCurrentPageReport", "loading", "responsive", "paginator", "selectionChange"], ["pTemplate", "header"], ["pTemplate", "body"], ["editProfileModal", ""], ["pSortableColumn", "productID"], ["pSortableColumn", "productName"], ["pSortableColumn", "category"], ["pSortableColumn", "qty"], ["pSortableColumn", "price"], ["colspan", "3"], [1, "btn", "btn-info", "btn-sm", 2, "margin-top", "5px", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-info", 2, "margin-left", "10px", 3, "click"], [1, "modal-header"], ["id", "editProfileLabel", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "lastname", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "formControlName", "productName", "name", "productName", "id", "productName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "firstname", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "price", "name", "price", "id", "price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "username", 1, "col-sm-4", "col-form-label"], ["type", "text", "name", "qty", "formControlName", "qty", "id", "qty", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "category", "id", "category", "formControlName", "category", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["disabled", ""], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Product List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function ProductListComponent_Template_p_table_selectionChange_5_listener($event) { return ctx.selectedCustomers = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProductListComponent_ng_template_6_Template, 13, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProductListComponent_ng_template_7_Template, 20, 5, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProductListComponent_ng_template_8_Template, 37, 8, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.products)("selection", ctx.selectedCustomers)("rowHover", true)("rows", 10)("showCurrentPageReport", true)("loading", ctx.loading)("responsive", true)("paginator", true);
    } }, directives: [primeng_table__WEBPACK_IMPORTED_MODULE_7__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_8__["PrimeTemplate"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["SortableColumn"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-product-list',
                templateUrl: './product-list.component.html'
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "Lgm+":
/*!*******************************************************************!*\
  !*** ./src/app/menu/action-bar-item/action-bar-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: ActionBarItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBarItemComponent", function() { return ActionBarItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ActionBarItemComponent {
    constructor() {
        this.shadow = false;
    }
}
ActionBarItemComponent.ɵfac = function ActionBarItemComponent_Factory(t) { return new (t || ActionBarItemComponent)(); };
ActionBarItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionBarItemComponent, selectors: [["app-action-bar-item"]], inputs: { shadow: "shadow" }, decls: 7, vars: 2, consts: [[1, "action-bar-item"], [1, "hamburger-container"], [1, "bar1"], [1, "bar2"], [1, "bar3"], ["_ngcontent-c1", "", 1, "action-bar-item-text"]], template: function ActionBarItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("shadow-sm", ctx.shadow);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYmFyLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionBarItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-action-bar-item',
                templateUrl: './action-bar-item.component.html',
                styleUrls: ['./action-bar-item.component.css']
            }]
    }], null, { shadow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "MFze":
/*!************************************************!*\
  !*** ./src/app/supplier/supplier.component.ts ***!
  \************************************************/
/*! exports provided: SupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierComponent", function() { return SupplierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_supplier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_model/supplier */ "dm9D");
/* harmony import */ var _model_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_model/location */ "zOs6");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/supplier.service */ "8LTU");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/location.service */ "BAgB");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/company.service */ "feko");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function SupplierComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", location_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](location_r5.cityName);
} }
function SupplierComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", company_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r6.companyName);
} }
function SupplierComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", location_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](location_r7.cityName);
} }
function SupplierComponent_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", company_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r8.companyName);
} }
function SupplierComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupplierComponent_tr_74_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const supplier_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.deleteSupplier(supplier_r9.supplierID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupplierComponent_tr_74_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const supplier_r9 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.getSupplier(supplier_r9.supplierID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const supplier_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](supplier_r9.supplierName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](supplier_r9.phoneNumber);
} }
class SupplierComponent {
    constructor(supplierService, locationService, companyService) {
        this.supplierService = supplierService;
        this.locationService = locationService;
        this.companyService = companyService;
        this.supplier = new _model_supplier__WEBPACK_IMPORTED_MODULE_1__["Supplier"]();
        this.location = new _model_location__WEBPACK_IMPORTED_MODULE_2__["Location"]();
        this.submitted = false;
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.suppliers = this.supplierService.getSupplierList();
        this.locations = this.locationService.getLocationList();
        this.companies = this.companyService.getCompanyList();
    }
    save() {
        this.supplierService
            .createSupplier(this.supplier).subscribe(data => {
            console.log(data);
            this.supplier = new _model_supplier__WEBPACK_IMPORTED_MODULE_1__["Supplier"]();
            this.reloadData();
        }, error => console.log(error));
    }
    onSubmit() {
        this.save();
    }
    deleteSupplier(id) {
        this.supplierService.deleteSupplier(id)
            .subscribe(data => {
            console.log(data);
            this.reloadData();
        }, error => console.log(error));
    }
    getSupplier(id) {
        this.submitted = true;
        this.supplierService.getSupplier(id)
            .subscribe(data => {
            console.log(data);
            this.supplier = data;
        }, error => console.log(error));
    }
    updateSupplier(supplier) {
        this.supplierService.updateSupplier(supplier)
            .subscribe(data => {
            console.log(data);
            this.supplier = new _model_supplier__WEBPACK_IMPORTED_MODULE_1__["Supplier"]();
            this.reloadData();
        }, error => console.log(error));
    }
}
SupplierComponent.ɵfac = function SupplierComponent_Factory(t) { return new (t || SupplierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"])); };
SupplierComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupplierComponent, selectors: [["app-supplier"]], decls: 76, vars: 25, consts: [[2, "width", "400px", 3, "hidden"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "supplierName", "required", "", "name", "supplierName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "locations", 1, "form-control", 3, "ngModel", "ngModelChange"], ["disabled", "", "selected", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["name", "companies", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "phoneNumber", "name", "phoneNumber", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [3, "ngSubmit"], ["type", "submit", 1, "btn", "btn-success"], [1, "panel", "panel-primary"], [1, "panel-heading"], [1, "panel-body"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-info", 2, "margin-left", "10px", 3, "click"]], template: function SupplierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create Supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupplierComponent_Template_input_ngModelChange_6_listener($event) { return ctx.supplier.supplierName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupplierComponent_Template_select_ngModelChange_10_listener($event) { return ctx.supplier.location = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SupplierComponent_option_13_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupplierComponent_Template_select_ngModelChange_18_listener($event) { return ctx.supplier.company = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Select Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SupplierComponent_option_21_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupplierComponent_Template_input_ngModelChange_26_listener($event) { return ctx.supplier.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupplierComponent_Template_button_click_27_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Update Supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SupplierComponent_Template_form_ngSubmit_32_listener() { return ctx.updateSupplier(ctx.supplier); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupplierComponent_Template_input_ngModelChange_36_listener($event) { return ctx.supplier.supplierName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupplierComponent_Template_select_ngModelChange_40_listener($event) { return ctx.supplier.location = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Select Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SupplierComponent_option_43_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupplierComponent_Template_select_ngModelChange_48_listener($event) { return ctx.supplier.company = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Select Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, SupplierComponent_option_51_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupplierComponent_Template_input_ngModelChange_56_listener($event) { return ctx.supplier.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Supplier List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, SupplierComponent_tr_74_Template, 10, 2, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.supplier.supplierName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.supplier.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 15, ctx.locations));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.supplier.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 17, ctx.companies));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.supplier.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.supplier.supplierName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.supplier.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 19, ctx.locations));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.supplier.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 21, ctx.companies));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.supplier.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 23, ctx.suppliers));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupplierComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-supplier',
                templateUrl: './supplier.component.html'
            }]
    }], function () { return [{ type: _services_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"] }, { type: _services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"] }, { type: _services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"] }]; }, null); })();


/***/ }),

/***/ "MOdX":
/*!***********************************!*\
  !*** ./src/app/_model/company.ts ***!
  \***********************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
class Company {
}


/***/ }),

/***/ "MwYd":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _model_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_model/location */ "zOs6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_model/customer */ "Xzbv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/customer.service */ "TZGB");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/location.service */ "BAgB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");














function CustomerComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", location_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](location_r5.cityName);
} }
function CustomerComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CustomerComponent_mat_option_20_Template_mat_option_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const option_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.changeOption(option_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r6.cityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r6.cityName, " ");
} }
function CustomerComponent_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", location_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](location_r9.cityName);
} }
function CustomerComponent_tr_65_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerComponent_tr_65_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const customer_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.deleteCustomer(customer_r10.customerID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerComponent_tr_65_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const customer_r10 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.getCustomer(customer_r10.customerID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r10.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r10.phoneNumber);
} }
class CustomerComponent {
    //
    constructor(customerService, locationService) {
        this.customerService = customerService;
        this.locationService = locationService;
        this.customer = new _model_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
        this.location = new _model_location__WEBPACK_IMPORTED_MODULE_0__["Location"]();
        this.submitted = false;
        //work in progress
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.options = [];
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.cityName.toLowerCase().includes(filterValue));
    }
    ngOnInit() {
        this.reloadData();
        this.dropDownAutoComplete();
    }
    //work in progress
    dropDownAutoComplete() {
        this.locations.subscribe(data => {
            console.log(data);
            data.forEach(x => {
                this.options.push(x);
            });
            this.filteredOptions = this.myControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => this._filter(value)));
        }, error => console.log(error));
    }
    reloadData() {
        this.customers = this.customerService.getCustomerList();
        this.locations = this.locationService.getLocationList();
    }
    save() {
        this.customer.location.cityName = this.option;
        this.customerService
            .createCustomer(this.customer).subscribe(data => {
            console.log(data);
            this.customer = new _model_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
            this.reloadData();
        }, error => console.log(error));
    }
    changeOption(option) {
        alert(option);
    }
    selectedValue(val) {
        console.log(val);
        this.selectedgroup = val;
    }
    onSubmit() {
        this.save();
    }
    deleteCustomer(id) {
        this.customerService.deleteCustomer(id)
            .subscribe(data => {
            console.log(data);
            this.reloadData();
        }, error => console.log(error));
    }
    getCustomer(id) {
        this.submitted = true;
        this.customerService.getCustomer(id)
            .subscribe(data => {
            console.log(data);
            this.customer = data;
        }, error => console.log(error));
    }
    updateCustomer(customer) {
        this.customerService.updateCustomer(customer)
            .subscribe(data => {
            console.log(data);
            this.customer = new _model_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
            this.reloadData();
        }, error => console.log(error));
    }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) { return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"])); };
CustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomerComponent, selectors: [["app-customer"]], decls: 67, vars: 21, consts: [[2, "width", "400px", 3, "hidden"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "customerName", "required", "", "name", "customerName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "locations", 1, "form-control", 3, "ngModel", "ngModelChange"], ["disabled", "", "selected", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "example-form"], [1, "example-full-width"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", "change", 4, "ngFor", "ngForOf"], ["type", "text", "id", "phoneNumber", "name", "phoneNumber", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [3, "ngSubmit"], ["name", "locations", 1, "form-control"], ["disabled", ""], ["type", "submit", 1, "btn", "btn-success"], [1, "panel", "panel-primary"], [1, "panel-heading"], [1, "panel-body"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [3, "ngValue"], [3, "value", "change"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-info", 2, "margin-left", "10px", 3, "click"]], template: function CustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Create Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerComponent_Template_input_ngModelChange_6_listener($event) { return ctx.customer.customerName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerComponent_Template_select_ngModelChange_10_listener($event) { return ctx.customer.location = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Select Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CustomerComponent_option_13_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-autocomplete", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CustomerComponent_mat_option_20_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerComponent_Template_input_ngModelChange_25_listener($event) { return ctx.customer.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerComponent_Template_button_click_26_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Update Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CustomerComponent_Template_form_ngSubmit_31_listener() { return ctx.updateCustomer(ctx.customer); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerComponent_Template_input_ngModelChange_35_listener($event) { return ctx.customer.customerName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Select City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, CustomerComponent_option_42_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerComponent_Template_input_ngModelChange_47_listener($event) { return ctx.customer.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Customer List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, CustomerComponent_tr_65_Template, 10, 2, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](66, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.customerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 13, ctx.locations));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 15, ctx.filteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.customerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 17, ctx.locations));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](66, 19, ctx.customers));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocomplete"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-customer',
                templateUrl: './customer.component.html'
            }]
    }], function () { return [{ type: _services_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"] }, { type: _services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"] }]; }, null); })();


/***/ }),

/***/ "QhWZ":
/*!*****************************************************!*\
  !*** ./src/app/_services/purchase-order.service.ts ***!
  \*****************************************************/
/*! exports provided: PurchaseOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderService", function() { return PurchaseOrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_model/http-client-helper */ "aj3h");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PurchaseOrderService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__["HttpClientHelper"].baseURL + '/purchaseOrder';
    }
    createPurchaseOrder(invoice) {
        return this.http.post(`${this.baseUrl}`, invoice);
    }
    getPurchaseOrderList() {
        return this.http.get(`${this.baseUrl}`);
    }
    getPurchaseOrderBalaceBySupplier(supplierID) {
        return this.http.get(`${this.baseUrl}/supplier/${supplierID}`);
    }
    getAllSupplierPurchaseOrderBalace() {
        return this.http.get(`${this.baseUrl}/supplier`);
    }
    getAllSupplierPurchaseOrderBalanceSheet() {
        return this.http.get(`${this.baseUrl}/supplier/balance`);
    }
}
PurchaseOrderService.ɵfac = function PurchaseOrderService_Factory(t) { return new (t || PurchaseOrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PurchaseOrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PurchaseOrderService, factory: PurchaseOrderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseOrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Qmlm":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_model/company */ "MOdX");
/* harmony import */ var _model_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_model/location */ "zOs6");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/company.service */ "feko");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/location.service */ "BAgB");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function CompanyComponent_tr_42_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyComponent_tr_42_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const company_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteCompany(company_r1.companyID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyComponent_tr_42_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const company_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.getCompany(company_r1.companyID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r1.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r1.phoneNumber);
} }
class CompanyComponent {
    constructor(companyService, locationService) {
        this.companyService = companyService;
        this.locationService = locationService;
        this.company = new _model_company__WEBPACK_IMPORTED_MODULE_1__["Company"]();
        this.location = new _model_location__WEBPACK_IMPORTED_MODULE_2__["Location"]();
        this.submitted = false;
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.companies = this.companyService.getCompanyList();
        this.locations = this.locationService.getLocationList();
    }
    save() {
        this.companyService
            .createCompany(this.company).subscribe(data => {
            console.log(data);
            this.company = new _model_company__WEBPACK_IMPORTED_MODULE_1__["Company"]();
            this.reloadData();
        }, error => console.log(error));
    }
    selectedValue(val) {
        console.log(val);
        this.selectedgroup = val;
    }
    onSubmit() {
        this.save();
    }
    deleteCompany(id) {
        this.companyService.deleteCompany(id)
            .subscribe(data => {
            console.log(data);
            this.reloadData();
        }, error => console.log(error));
    }
    getCompany(id) {
        this.submitted = true;
        this.companyService.getCompany(id)
            .subscribe(data => {
            console.log(data);
            this.company = data;
        }, error => console.log(error));
    }
    updateCompany(company) {
        this.companyService.updateCompany(company)
            .subscribe(data => {
            console.log(data);
            this.company = new _model_company__WEBPACK_IMPORTED_MODULE_1__["Company"]();
            this.reloadData();
        }, error => console.log(error));
    }
}
CompanyComponent.ɵfac = function CompanyComponent_Factory(t) { return new (t || CompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"])); };
CompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyComponent, selectors: [["app-company"]], decls: 44, vars: 9, consts: [[2, "width", "400px", 3, "hidden"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "companyName", "required", "", "name", "companyName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "phoneNumber", "name", "phoneNumber", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [3, "ngSubmit"], ["type", "submit", 1, "btn", "btn-success"], [1, "panel", "panel-primary"], [1, "panel-heading"], [1, "panel-body"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-info", 2, "margin-left", "10px", 3, "click"]], template: function CompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyComponent_Template_input_ngModelChange_6_listener($event) { return ctx.company.companyName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyComponent_Template_input_ngModelChange_10_listener($event) { return ctx.company.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyComponent_Template_button_click_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Update Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CompanyComponent_Template_form_ngSubmit_16_listener() { return ctx.updateCompany(ctx.company); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyComponent_Template_input_ngModelChange_20_listener($event) { return ctx.company.companyName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyComponent_Template_input_ngModelChange_24_listener($event) { return ctx.company.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Company List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CompanyComponent_tr_42_Template, 10, 2, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.companyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.companyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 7, ctx.companies));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-company',
                templateUrl: './company.component.html'
            }]
    }], function () { return [{ type: _services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] }, { type: _services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"] }]; }, null); })();


/***/ }),

/***/ "RD5o":
/*!***********************************!*\
  !*** ./src/app/pipe/sort.pipe.ts ***!
  \***********************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SortPipe {
    transform(value, ...args) {
        return value.sort();
    }
}
SortPipe.ɵfac = function SortPipe_Factory(t) { return new (t || SortPipe)(); };
SortPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sort", type: SortPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'sort'
            }]
    }], null, null); })();


/***/ }),

/***/ "RQfM":
/*!**************************************************!*\
  !*** ./src/app/_services/sales-order.service.ts ***!
  \**************************************************/
/*! exports provided: SalesOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesOrderService", function() { return SalesOrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_model/http-client-helper */ "aj3h");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class SalesOrderService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__["HttpClientHelper"].baseURL + '/salesOrder';
    }
    createSalesOrder(invoice) {
        return this.http.post(`${this.baseUrl}`, invoice);
    }
    getSalesOrderList() {
        return this.http.get(`${this.baseUrl}`);
    }
    getSalesOrderBalanceByCustomer(customerID) {
        return this.http.get(`${this.baseUrl}/customer/balance/${customerID}`);
    }
    getAllCustomerSalesOrderBalance() {
        return this.http.get(`${this.baseUrl}/customer/`);
    }
    getAllCustomerSalesOrderBalanceSheet() {
        return this.http.get(`${this.baseUrl}/customer/balance`);
    }
}
SalesOrderService.ɵfac = function SalesOrderService_Factory(t) { return new (t || SalesOrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SalesOrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SalesOrderService, factory: SalesOrderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesOrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/token-storage.service */ "FQmJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(tokenStorageService) {
        this.tokenStorageService = tokenStorageService;
        this.title = 'RK FERTILIZER';
        this.isLoggedIn = false;
        this.showAdminBoard = false;
        this.showModeratorBoard = false;
    }
    ngOnInit() {
        // this.isLoggedIn = !!this.tokenStorageService.getToken();
        // if (this.isLoggedIn) {
        //   const user = this.tokenStorageService.getUser();
        //   this.roles = user.roles;
        //   // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        //   // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
        //   this.username = user.username;
        // }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["id", "app"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"] }]; }, null); })();


/***/ }),

/***/ "TTYc":
/*!***********************************************************!*\
  !*** ./src/app/menu/mobile-menu/mobile-menu.component.ts ***!
  \***********************************************************/
/*! exports provided: MobileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuComponent", function() { return MobileMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class MobileMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MobileMenuComponent.ɵfac = function MobileMenuComponent_Factory(t) { return new (t || MobileMenuComponent)(); };
MobileMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileMenuComponent, selectors: [["app-mobile-menu"]], decls: 25, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "bg-primary", "navbar-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "/dashboard", 1, "nav-link"], ["href", "/dashboard/products", "routerLinkActive", "active", 1, "nav-link"], ["href", "/dashboard/salesOrder", "routerLinkActive", "active", 1, "nav-link"], ["href", "/dashboard/add", 1, "nav-link"], ["href", "/dashboard/addCategory", 1, "nav-link"], ["href", "/dashboard/supplier", 1, "nav-link"]], template: function MobileMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "RK-FERTILIZER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " DASHBOARDS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "SALES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ADD PRODUCT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " ADD CATEGORY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " SUPPLIER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2JpbGUtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mobile-menu',
                templateUrl: './mobile-menu.component.html',
                styleUrls: ['./mobile-menu.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TZGB":
/*!***********************************************!*\
  !*** ./src/app/_services/customer.service.ts ***!
  \***********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_model/http-client-helper */ "aj3h");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CustomerService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__["HttpClientHelper"].baseURL + '/customer';
    }
    getCustomer(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    // tslint:disable-next-line: ban-types
    createCustomer(customer) {
        return this.http.post(`${this.baseUrl}`, customer);
    }
    // tslint:disable-next-line: ban-types
    updateCustomer(value) {
        return this.http.put(`${this.baseUrl}`, value);
    }
    deleteCustomer(id) {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
    getCustomerList() {
        return this.http.get(`${this.baseUrl}`);
    }
}
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CustomerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "TpFj":
/*!***********************************!*\
  !*** ./src/app/_model/product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
}


/***/ }),

/***/ "U5Cf":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../menu/action-bar/action-bar.component */ "jD4/");
/* harmony import */ var _menu_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../menu/navigation-bar/navigation-bar.component */ "2Uo4");
/* harmony import */ var _menu_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../menu/mobile-menu/mobile-menu.component */ "TTYc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function DashboardComponent_ol_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r0.urlPath[0]));
} }
function DashboardComponent_ng_template_9_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r4.urlPath.pop(), " ", item_r5, " ");
} }
function DashboardComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_ng_template_9_li_1_Template, 2, 2, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.urlPath);
} }
function DashboardComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "12");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Flowz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "599");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Instances");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "6875");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "35");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor(router) {
        this.router = router;
        this.isVisible = false;
        this.urlPath = [];
    }
    ngOnInit() {
        this.getCurrentPage();
    }
    getCurrentPage() {
        const path = this.router.url.split('/');
        if (path.length === 2 && path[1] === 'dashboard') {
            this.isVisible = true;
        }
        path.forEach((e) => {
            if (e !== '') {
                this.urlPath.push(e);
            }
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 15, vars: 3, consts: [[1, "app-container"], [1, "d-none", "d-sm-block"], [1, "main-container", "flex-fill"], [1, "d-block", "d-sm-none"], [1, "container-fluid", "mt-2"], [1, "row"], ["aria-label", "breadcrumb"], ["class", "breadcrumb", 4, "ngIf", "ngIfElse"], ["visibleCrum", ""], [1, "col-md-12"], ["class", "row", 4, "ngIf"], [1, "breadcrumb"], [1, "breadcrumb-item", "active"], ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item"], [1, "col-md-3"], [1, "card-counter", "primary"], [1, "fa", "fa-code-fork"], [1, "count-numbers"], [1, "count-name"], [1, "card-counter", "danger"], [1, "fa", "fa-ticket"], [1, "card-counter", "success"], [1, "fa", "fa-database"], [1, "card-counter", "info"], [1, "fa", "fa-users"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-action-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-navigation-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-mobile-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_ol_8_Template, 5, 3, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DashboardComponent_ng_template_9_Template, 2, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DashboardComponent_div_13_Template, 29, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.urlPath.length < 2)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible);
    } }, directives: [_menu_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_2__["ActionBarComponent"], _menu_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavigationBarComponent"], _menu_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_4__["MobileMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]], styles: [".close[_ngcontent-%COMP%]{\n    width: 100%;\n    font-size: 20px;\n    padding: 10px;\n    background-color: #fff;\n    border-bottom: 1px solid #000;\n}\n\n.navbar[_ngcontent-%COMP%]{\n    background-color: #3c8dbc;\n}\n\n.main[_ngcontent-%COMP%]{\n  width: 100vw;\n  height: 100vh;\n}\n\n.content-wrapper[_ngcontent-%COMP%]{\n    float: left;\n    width: 88%;\n}\n\n#mySidebar[_ngcontent-%COMP%]{\n    height: 100vh;\n    background-color: #000;\n    \n    width: 12%;\n    float: left;\n}\n\n#mySidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color: #fff;\n}\n\n.card-counter[_ngcontent-%COMP%]{\n  box-shadow: 2px 2px 10px #DADADA;\n  margin: 5px;\n  padding: 20px 10px;\n  background-color: #fff;\n  height: 100px;\n  border-radius: 5px;\n  transition: .3s linear all;\n}\n\n.card-counter[_ngcontent-%COMP%]:hover{\n  box-shadow: 4px 4px 20px #DADADA;\n  transition: .3s linear all;\n}\n\n.card-counter.primary[_ngcontent-%COMP%]{\n  background-color: #007bff;\n  color: #FFF;\n}\n\n.card-counter.danger[_ngcontent-%COMP%]{\n  background-color: #ef5350;\n  color: #FFF;\n}\n\n.card-counter.success[_ngcontent-%COMP%]{\n  background-color: #66bb6a;\n  color: #FFF;\n}\n\n.card-counter.info[_ngcontent-%COMP%]{\n  background-color: #26c6da;\n  color: #FFF;\n}\n\n.card-counter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n  font-size: 5em;\n  opacity: 0.2;\n}\n\n.card-counter[_ngcontent-%COMP%]   .count-numbers[_ngcontent-%COMP%]{\n  position: absolute;\n  right: 35px;\n  top: 20px;\n  font-size: 32px;\n  display: block;\n}\n\n.card-counter[_ngcontent-%COMP%]   .count-name[_ngcontent-%COMP%]{\n  position: absolute;\n  right: 35px;\n  top: 65px;\n  font-style: italic;\n  text-transform: capitalize;\n  opacity: 0.5;\n  display: block;\n  font-size: 18px;\n}\n\n.breadcrumb[_ngcontent-%COMP%] {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color:transparent;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNEQUFzRDtJQUN0RCxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUdBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmNsb3Nle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG59XG5cbi5uYXZiYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNjOGRiYztcbn1cblxuLm1haW57XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNvbnRlbnQtd3JhcHBlcntcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogODglO1xufVxuXG5cbiNteVNpZGViYXJ7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIC8qIGJveC1zaGFkb3c6IDJweCAwcHggMnB4IHJnYmEoMDAwLCAwMDAsIDAwMCwgMC41KTsgKi9cbiAgICB3aWR0aDogMTIlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4jbXlTaWRlYmFyIHVsIGxpIGF7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cblxuLmNhcmQtY291bnRlcntcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4ICNEQURBREE7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogLjNzIGxpbmVhciBhbGw7XG59XG5cbi5jYXJkLWNvdW50ZXI6aG92ZXJ7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMjBweCAjREFEQURBO1xuICB0cmFuc2l0aW9uOiAuM3MgbGluZWFyIGFsbDtcbn1cblxuLmNhcmQtY291bnRlci5wcmltYXJ5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLmNhcmQtY291bnRlci5kYW5nZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjUzNTA7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uY2FyZC1jb3VudGVyLnN1Y2Nlc3N7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NmJiNmE7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uY2FyZC1jb3VudGVyLmluZm97XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmM2ZGE7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uY2FyZC1jb3VudGVyIGl7XG4gIGZvbnQtc2l6ZTogNWVtO1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5jYXJkLWNvdW50ZXIgLmNvdW50LW51bWJlcnN7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM1cHg7XG4gIHRvcDogMjBweDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNhcmQtY291bnRlciAuY291bnQtbmFtZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzVweDtcbiAgdG9wOiA2NXB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBvcGFjaXR5OiAwLjU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5icmVhZGNydW1iIHtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "Xzbv":
/*!************************************!*\
  !*** ./src/app/_model/customer.ts ***!
  \************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
class Customer {
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-product/create-product.component */ "EN+z");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-details/product-details.component */ "ylPK");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-list/product-list.component */ "Hsdx");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-category/create-category.component */ "ZuQU");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _purchase_order_purchase_order_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./purchase-order/purchase-order.component */ "7YO1");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customer/customer.component */ "MwYd");
/* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./supplier/supplier.component */ "MFze");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./location/location.component */ "yCIP");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./company/company.component */ "Qmlm");
/* harmony import */ var _sales_order_sales_order_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sales-order/sales-order.component */ "a+ZH");
/* harmony import */ var _balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./balance-sheet/balance-sheet.component */ "8LCG");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var _pipe_sort_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pipe/sort.pipe */ "RD5o");
/* harmony import */ var _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/notfound/notfound.component */ "bPkx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _menu_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./menu/mobile-menu/mobile-menu.component */ "TTYc");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var _menu_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./menu/action-bar/action-bar.component */ "jD4/");
/* harmony import */ var _menu_action_bar_item_action_bar_item_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./menu/action-bar-item/action-bar-item.component */ "Lgm+");
/* harmony import */ var _menu_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./menu/navigation-bar/navigation-bar.component */ "2Uo4");












// import { SharedModule } from "./menu/shared.module";
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            primeng_table__WEBPACK_IMPORTED_MODULE_30__["TableModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_28__["NgxPaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_5__["CreateProductComponent"],
        _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsComponent"],
        _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductListComponent"],
        _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_9__["CreateCategoryComponent"],
        _purchase_order_purchase_order_component__WEBPACK_IMPORTED_MODULE_15__["PurchaseOrderComponent"],
        _customer_customer_component__WEBPACK_IMPORTED_MODULE_16__["CustomerComponent"],
        _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_17__["SupplierComponent"],
        _location_location_component__WEBPACK_IMPORTED_MODULE_18__["LocationComponent"],
        _company_company_component__WEBPACK_IMPORTED_MODULE_19__["CompanyComponent"],
        _sales_order_sales_order_component__WEBPACK_IMPORTED_MODULE_20__["SalesOrderComponent"],
        _balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_21__["BalanceSheetComponent"],
        _menu_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_31__["ActionBarComponent"],
        _menu_action_bar_item_action_bar_item_component__WEBPACK_IMPORTED_MODULE_32__["ActionBarItemComponent"],
        _menu_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_33__["NavigationBarComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"],
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"],
        _pipe_sort_pipe__WEBPACK_IMPORTED_MODULE_25__["SortPipe"],
        _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_26__["NotfoundComponent"],
        _menu_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_29__["MobileMenuComponent"]], imports: [primeng_table__WEBPACK_IMPORTED_MODULE_30__["TableModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_28__["NgxPaginationModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_5__["CreateProductComponent"],
                    _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsComponent"],
                    _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductListComponent"],
                    _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_9__["CreateCategoryComponent"],
                    _purchase_order_purchase_order_component__WEBPACK_IMPORTED_MODULE_15__["PurchaseOrderComponent"],
                    _customer_customer_component__WEBPACK_IMPORTED_MODULE_16__["CustomerComponent"],
                    _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_17__["SupplierComponent"],
                    _location_location_component__WEBPACK_IMPORTED_MODULE_18__["LocationComponent"],
                    _company_company_component__WEBPACK_IMPORTED_MODULE_19__["CompanyComponent"],
                    _sales_order_sales_order_component__WEBPACK_IMPORTED_MODULE_20__["SalesOrderComponent"],
                    _balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_21__["BalanceSheetComponent"],
                    _menu_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_31__["ActionBarComponent"],
                    _menu_action_bar_item_action_bar_item_component__WEBPACK_IMPORTED_MODULE_32__["ActionBarItemComponent"],
                    _menu_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_33__["NavigationBarComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"],
                    _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"],
                    _pipe_sort_pipe__WEBPACK_IMPORTED_MODULE_25__["SortPipe"],
                    _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_26__["NotfoundComponent"],
                    _menu_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_29__["MobileMenuComponent"]
                ],
                imports: [
                    primeng_table__WEBPACK_IMPORTED_MODULE_30__["TableModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_28__["NgxPaginationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZuQU":
/*!**************************************************************!*\
  !*** ./src/app/create-category/create-category.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCategoryComponent", function() { return CreateCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_model/category */ "aDtp");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/category.service */ "AfT/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CreateCategoryComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateCategoryComponent_tr_43_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const category_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteCategory(category_r1.categoryID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateCategoryComponent_tr_43_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const category_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.getCategory(category_r1.categoryID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.categoryDesc);
} }
class CreateCategoryComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.category = new _model_category__WEBPACK_IMPORTED_MODULE_1__["Category"]();
        this.submitted = false;
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.categories = this.categoryService.getCategoryList();
    }
    newCategory() {
        this.category = new _model_category__WEBPACK_IMPORTED_MODULE_1__["Category"]();
    }
    save() {
        this.categoryService
            .createCategory(this.category).subscribe(data => {
            console.log(data);
            this.category = new _model_category__WEBPACK_IMPORTED_MODULE_1__["Category"]();
            this.reloadData();
        }, error => console.log(error));
    }
    onSubmit() {
        this.save();
    }
    gotoList() {
        this.router.navigate(['/Categories']);
    }
    deleteCategory(id) {
        this.categoryService.deleteCategory(id)
            .subscribe(data => {
            console.log(data);
            this.reloadData();
        }, error => console.log(error));
    }
    getCategory(id) {
        this.submitted = true;
        this.categoryService.getCategory(id)
            .subscribe(data => {
            console.log(data);
            this.category = data;
            this.gotoList();
        }, error => console.log(error));
    }
    updateCategory(category) {
        this.categoryService.updateCategory(category)
            .subscribe(data => {
            console.log(data);
            this.category = new _model_category__WEBPACK_IMPORTED_MODULE_1__["Category"]();
            this.reloadData();
        }, error => console.log(error));
    }
}
CreateCategoryComponent.ɵfac = function CreateCategoryComponent_Factory(t) { return new (t || CreateCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"])); };
CreateCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateCategoryComponent, selectors: [["app-create-category"]], decls: 45, vars: 9, consts: [[2, "width", "400px", 3, "hidden"], [3, "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "categoryName", "required", "", "name", "categoryName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "categoryDesc", "required", "", "name", "category", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success"], [1, "panel", "panel-primary"], [1, "panel-heading"], [1, "panel-body"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-info", 2, "margin-left", "10px", 3, "click"]], template: function CreateCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CREATE CATEGORY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateCategoryComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateCategoryComponent_Template_input_ngModelChange_7_listener($event) { return ctx.category.categoryName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateCategoryComponent_Template_input_ngModelChange_11_listener($event) { return ctx.category.categoryDesc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "UPDATE CATEGORY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateCategoryComponent_Template_form_ngSubmit_17_listener() { return ctx.updateCategory(ctx.category); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateCategoryComponent_Template_input_ngModelChange_21_listener($event) { return ctx.category.categoryName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateCategoryComponent_Template_input_ngModelChange_25_listener($event) { return ctx.category.categoryDesc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "category List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Decsription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, CreateCategoryComponent_tr_43_Template, 10, 2, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.category.categoryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.category.categoryDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.category.categoryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.category.categoryDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 7, ctx.categories));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-category',
                templateUrl: './create-category.component.html'
            }]
    }], function () { return [{ type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }]; }, null); })();


/***/ }),

/***/ "a+ZH":
/*!******************************************************!*\
  !*** ./src/app/sales-order/sales-order.component.ts ***!
  \******************************************************/
/*! exports provided: SalesOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesOrderComponent", function() { return SalesOrderComponent; });
/* harmony import */ var _model_sales_order_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_model/sales-order-detail */ "DJpn");
/* harmony import */ var _model_sales_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_model/sales-order */ "9c9/");
/* harmony import */ var _model_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_model/product */ "TpFj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/product.service */ "szdb");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/customer.service */ "TZGB");
/* harmony import */ var _services_sales_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/sales-order.service */ "RQfM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function SalesOrderComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", customer_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](customer_r3.customerName);
} }
function SalesOrderComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", product_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r4.productName);
} }
function SalesOrderComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesOrderComponent_tr_33_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const i_r6 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.removeCart(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SalesOrderComponent_tr_33_Template_input_ngModelChange_7_listener($event) { const cart_r5 = ctx.$implicit; return cart_r5.product.productName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SalesOrderComponent_tr_33_Template_input_ngModelChange_9_listener($event) { const cart_r5 = ctx.$implicit; return cart_r5.price = $event; })("change", function SalesOrderComponent_tr_33_Template_input_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.changeInQtyOrPrice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SalesOrderComponent_tr_33_Template_input_ngModelChange_12_listener($event) { const cart_r5 = ctx.$implicit; return cart_r5.qtyOrdered = $event; })("change", function SalesOrderComponent_tr_33_Template_input_change_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.changeInQtyOrPrice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cart_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", cart_r5.product.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", cart_r5.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", cart_r5.product.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", cart_r5.qtyOrdered);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cart_r5.price * cart_r5.qtyOrdered);
} }
class SalesOrderComponent {
    constructor(productService, customerService, salesOrderService) {
        this.productService = productService;
        this.customerService = customerService;
        this.salesOrderService = salesOrderService;
        this.product = new _model_product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
        this.salesOrder = new _model_sales_order__WEBPACK_IMPORTED_MODULE_1__["SalesOrder"]();
        this.salesOrderDetail = new _model_sales_order_detail__WEBPACK_IMPORTED_MODULE_0__["SalesOrderDetail"]();
        this.rows = [];
        this.currentBalance = 0;
        this.previousBalance = 0;
        this.totalAmount = 0;
        this.totalBalance = 0;
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.products = this.productService.getProductsList();
        this.customers = this.customerService.getCustomerList();
        this.salesOrder.amountPaid = 0;
    }
    save() {
        this.salesOrder.currentBalance = this.currentBalance;
        this.salesOrder.salesOrderDetail = this.rows;
        this.salesOrder.totalPrice = this.totalAmount;
        this.salesOrderService
            .createSalesOrder(this.salesOrder).subscribe(data => {
            console.log(data);
            this.refreshAfterSave();
            this.reloadData();
        }, error => {
            console.log(error);
            alert(error.error.errorMessage);
        });
    }
    refreshAfterSave() {
        this.salesOrder = new _model_sales_order__WEBPACK_IMPORTED_MODULE_1__["SalesOrder"]();
        this.product = new _model_product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
        this.salesOrder.amountPaid = 0;
        this.previousBalance = 0;
        this.currentBalance = 0;
        this.totalBalance = 0;
        this.rows = [];
    }
    getTotalPrice() {
        let total = 0;
        this.rows.forEach(obj => {
            total += Number(obj.price);
        });
        return total;
    }
    getTotalQty() {
        let total = 0;
        this.rows.forEach(obj => {
            total += Number(obj.qtyOrdered);
        });
        return total;
    }
    totalAmountToPaid() {
        let totalAmount = 0;
        this.rows.forEach(obj => {
            totalAmount += Number(obj.qtyOrdered) * Number(obj.price);
        });
        this.totalAmount = totalAmount;
        return totalAmount;
    }
    removeCart(index) {
        if (this.rows.length === 1) {
            alert('Atleast one product should be added');
            return;
        }
        const amountBalance1 = this.totalAmount - (this.rows[index].price * this.rows[index].qtyOrdered);
        this.currentBalance = amountBalance1 - Number(this.salesOrder.amountPaid);
        this.totalBalance = this.previousBalance + this.currentBalance;
        this.rows.splice(index, 1);
        this.salesOrder.amountPaid = this.rows.length === 0 ? 0 : this.salesOrder.amountPaid;
    }
    selectedProduct(prod) {
        this.rows.push({
            product: prod,
            qtyOrdered: 0,
            price: prod.currentPrice === 0 ? prod.price + 15 : prod.currentPrice
        });
    }
    customerBalanceData(customerID) {
        this.salesOrderService.getSalesOrderBalanceByCustomer(customerID).subscribe((data) => {
            console.log(data);
            this.previousBalance = data;
            this.changeInQtyOrPrice();
        }, (error) => console.log(error));
    }
    amountToBePaid(amountPaid) {
        this.currentBalance = this.totalAmount - amountPaid;
        this.totalBalance = this.previousBalance + this.currentBalance;
    }
    changeInQtyOrPrice() {
        this.currentBalance = this.totalAmount - this.salesOrder.amountPaid;
        this.totalBalance = this.previousBalance + this.currentBalance;
    }
}
SalesOrderComponent.ɵfac = function SalesOrderComponent_Factory(t) { return new (t || SalesOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_sales_order_service__WEBPACK_IMPORTED_MODULE_6__["SalesOrderService"])); };
SalesOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SalesOrderComponent, selectors: [["app-sales-order"]], decls: 63, vars: 15, consts: [[2, "width", "400px"], [1, "form-group"], ["for", "name"], ["name", "customer", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["disabled", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["name", "products", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], [1, "table", "table-hover", "table", "table-bordered", "table-striped"], [4, "ngFor", "ngForOf"], [2, "text-align", "right"], ["type", "text", "id", "price", "required", "", "name", "price", 3, "ngModel", "ngModelChange", "input"], ["type", "text", "id", "price", "name", "price", "disabled", "", 3, "value"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [3, "ngValue"], [3, "click"], ["type", "text", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["type", "text", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange", "change"]], template: function SalesOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SalesOrderComponent_Template_select_ngModelChange_4_listener($event) { return ctx.salesOrder.customer = $event; })("change", function SalesOrderComponent_Template_select_change_4_listener() { return ctx.customerBalanceData(ctx.salesOrder.customer.customerID); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Select Customerr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SalesOrderComponent_option_7_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SalesOrderComponent_Template_select_ngModelChange_12_listener($event) { return ctx.product = $event; })("change", function SalesOrderComponent_Template_select_change_12_listener() { return ctx.selectedProduct(ctx.product); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Select Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SalesOrderComponent_option_15_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "S.No");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Total Amout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, SalesOrderComponent_tr_33_Template, 15, 6, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Amount Paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SalesOrderComponent_Template_input_ngModelChange_48_listener($event) { return ctx.salesOrder.amountPaid = $event; })("input", function SalesOrderComponent_Template_input_input_48_listener() { return ctx.amountToBePaid(ctx.salesOrder.amountPaid); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Current Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Previous Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Total Pay Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesOrderComponent_Template_button_click_61_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.salesOrder.customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 11, ctx.customers));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 13, ctx.products));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getTotalQty());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.totalAmountToPaid().toLocaleString("en-IN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.salesOrder.amountPaid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.currentBalance.toLocaleString("en-IN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.previousBalance.toLocaleString("en-IN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.totalBalance.toLocaleString("en-IN"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SalesOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-sales-order',
                templateUrl: './sales-order.component.html'
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }, { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"] }, { type: _services_sales_order_service__WEBPACK_IMPORTED_MODULE_6__["SalesOrderService"] }]; }, null); })();


/***/ }),

/***/ "aDtp":
/*!************************************!*\
  !*** ./src/app/_model/category.ts ***!
  \************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
}


/***/ }),

/***/ "aj3h":
/*!**********************************************!*\
  !*** ./src/app/_model/http-client-helper.ts ***!
  \**********************************************/
/*! exports provided: HttpClientHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientHelper", function() { return HttpClientHelper; });
class HttpClientHelper {
}
//static baseURL: string = 'http://ec2-18-222-37-157.us-east-2.compute.amazonaws.com:8080';
//static baseURL: string = 'http://localhost:8080/indian-kisan-care-backend';
HttpClientHelper.baseURL = 'http://ec2-3-138-201-112.us-east-2.compute.amazonaws.com:8080/indian-kisan-care-backend';


/***/ }),

/***/ "bPkx":
/*!******************************************************!*\
  !*** ./src/app/pages/notfound/notfound.component.ts ***!
  \******************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) { return new (t || NotfoundComponent)(); };
NotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotfoundComponent, selectors: [["app-notfound"]], decls: 9, vars: 0, consts: [[1, "container"], [1, "error-wrapper"], [1, "man-icon"], [1, "title"], [1, "info"], ["type", "button", "routerLink", "/dashboard", 1, "home-btn"]], template: function NotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Oh! Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["p[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  background: #f3f3f3;\n}\n\n.error-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.error-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: #000;\n}\n\n.error-wrapper[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.home-btn[_ngcontent-%COMP%], .home-btn[_ngcontent-%COMP%]:focus, .home-btn[_ngcontent-%COMP%]:hover, .home-btn[_ngcontent-%COMP%]:visited {\n  text-decoration: none;\n  font-size: 14px;\n  color: #55aa29;\n  padding: 17px 77px;\n  border: 1px solid #55aa29;\n  border-radius: 3px;\n  display: block;\n  margin: 20px 0;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  background-color: transparent;\n  outline: 0;\n}\n\n.man-icon[_ngcontent-%COMP%] {\n  background: url(\"https://www.hotstar.com/assets/b5e748831c911ca02f9c07afc11f2ae5.svg\") center center no-repeat;\n  display: inline-block;\n  height: 100px;\n  width: 118px;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vdGZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBOzs7O0VBSUkscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFJQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSw4R0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6Im5vdGZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCwgaDEsIGgyLCBoMywgaDQsIGg1IHtcbiAgICBtYXJnaW46IDA7XG59XG5cbmJvZHl7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG59XG5cbi5lcnJvci13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVycm9yLXdyYXBwZXIgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLmVycm9yLXdyYXBwZXIgLmluZm8ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmhvbWUtYnRuLFxuLmhvbWUtYnRuOmZvY3VzLFxuLmhvbWUtYnRuOmhvdmVyLFxuLmhvbWUtYnRuOnZpc2l0ZWQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM1NWFhMjk7XG4gICAgcGFkZGluZzogMTdweCA3N3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NWFhMjk7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLW8tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgb3V0bGluZTogMDtcbn1cblxuLm1hbi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vd3d3LmhvdHN0YXIuY29tL2Fzc2V0cy9iNWU3NDg4MzFjOTExY2EwMmY5YzA3YWZjMTFmMmFlNS5zdmcnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notfound',
                templateUrl: './notfound.component.html',
                styleUrls: ['./notfound.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dm9D":
/*!************************************!*\
  !*** ./src/app/_model/supplier.ts ***!
  \************************************/
/*! exports provided: Supplier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supplier", function() { return Supplier; });
class Supplier {
}


/***/ }),

/***/ "feko":
/*!**********************************************!*\
  !*** ./src/app/_services/company.service.ts ***!
  \**********************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_model/http-client-helper */ "aj3h");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CompanyService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__["HttpClientHelper"].baseURL + '/company';
    }
    getCompany(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    // tslint:disable-next-line: ban-types
    createCompany(company) {
        return this.http.post(`${this.baseUrl}`, company);
    }
    // tslint:disable-next-line: ban-types
    updateCompany(value) {
        return this.http.put(`${this.baseUrl}`, value);
    }
    deleteCompany(id) {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
    getCompanyList() {
        return this.http.get(`${this.baseUrl}`);
    }
}
CompanyService.ɵfac = function CompanyService_Factory(t) { return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompanyService, factory: CompanyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "jD4/":
/*!*********************************************************!*\
  !*** ./src/app/menu/action-bar/action-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: ActionBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBarComponent", function() { return ActionBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _action_bar_item_action_bar_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-bar-item/action-bar-item.component */ "Lgm+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ActionBarComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "DASHBOARDS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionBarComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "PRODUCTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionBarComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SALES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionBarComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ADD PRODUCT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionBarComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ADD CATEGORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionBarComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SUPPLIER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ActionBarComponent {
    constructor() {
        this.expanded = false;
    }
}
ActionBarComponent.ɵfac = function ActionBarComponent_Factory(t) { return new (t || ActionBarComponent)(); };
ActionBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionBarComponent, selectors: [["app-action-bar"]], decls: 31, vars: 9, consts: [[1, "action-bar"], [3, "shadow", "click"], [1, "action-bar-item-icon", "jam", "jam-bar-chart", "transform-rotate-90"], [1, "action-bar-item-text"], [1, "navbar", "navbar-light"], [1, "navbar-nav", "nav"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-home"], ["class", "d-none d-sm-inline", 4, "ngIf"], ["routerLink", "/dashboard/products", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-list"], ["routerLink", "/dashboard/salesOrder", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-suitcase"], ["routerLink", "/dashboard/add", 1, "nav-link"], [1, "fa", "fa-plus"], ["routerLink", "/dashboard/addCategory", 1, "nav-link"], [1, "fa", "fa-list-alt"], ["routerLink", "/dashboard/supplier", 1, "nav-link"], [1, "fa", "fa-user"], [1, "d-none", "d-sm-inline"]], template: function ActionBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-action-bar-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionBarComponent_Template_app_action_bar_item_click_1_listener() { return ctx.expanded = !ctx.expanded; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ActionBarComponent_span_10_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ActionBarComponent_span_14_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ActionBarComponent_span_18_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ActionBarComponent_span_22_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ActionBarComponent_span_26_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ActionBarComponent_span_30_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("action-bar-expanded", ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("shadow", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);
    } }, directives: [_action_bar_item_action_bar_item_component__WEBPACK_IMPORTED_MODULE_1__["ActionBarItemComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  margin-left: 15px;\n}\n\n.fa[_ngcontent-%COMP%]{\n  font-size: 20px !important;\n}\n\nul.nav[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%]{\n  width: 100%;\n  float: left;\n}\n\n.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoiYWN0aW9uLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rIHNwYW57XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uZmF7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xufVxuXG51bC5uYXYgbGkubmF2LWl0ZW17XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5uYXYtaXRlbSAubmF2LWxpbmt7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-action-bar',
                templateUrl: './action-bar.component.html',
                styleUrls: ['./action-bar.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "r4IO":
/*!**************************************************!*\
  !*** ./src/app/_model/supplier-balance-sheet.ts ***!
  \**************************************************/
/*! exports provided: SupplierBalanceSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierBalanceSheet", function() { return SupplierBalanceSheet; });
class SupplierBalanceSheet {
}


/***/ }),

/***/ "szdb":
/*!**********************************************!*\
  !*** ./src/app/_services/product.service.ts ***!
  \**********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_model/http-client-helper */ "aj3h");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ProductService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__["HttpClientHelper"].baseURL + '/product';
    }
    getProduct(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    // tslint:disable-next-line: ban-types
    createProduct(product) {
        return this.http.post(`${this.baseUrl}`, product);
    }
    // tslint:disable-next-line: ban-types
    createProductWithCategory(product, id) {
        return this.http.post(`${this.baseUrl}/${id}`, product);
    }
    // tslint:disable-next-line: ban-types
    updateProduct(value) {
        return this.http.put(`${this.baseUrl}`, value);
    }
    deleteProduct(id) {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
    getProductsList() {
        return this.http.get(this.baseUrl);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthGuard {
    canActivate(route, state) {
        if (localStorage.getItem('accessToken')) {
            return true;
        }
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance-sheet/balance-sheet.component */ "8LCG");
/* harmony import */ var _sales_order_sales_order_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-order/sales-order.component */ "a+ZH");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details/product-details.component */ "ylPK");
/* harmony import */ var _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-product/create-product.component */ "EN+z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-list/product-list.component */ "Hsdx");
/* harmony import */ var _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-category/create-category.component */ "ZuQU");
/* harmony import */ var _purchase_order_purchase_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./purchase-order/purchase-order.component */ "7YO1");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./location/location.component */ "yCIP");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./company/company.component */ "Qmlm");
/* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./supplier/supplier.component */ "MFze");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customer/customer.component */ "MwYd");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/notfound/notfound.component */ "bPkx");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth.guard */ "tIkO");




















const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"] },
    { path: '404', component: _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_16__["NotfoundComponent"] },
    { path: 'dashboard', pathMatch: 'prefix', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"], children: [
            { path: 'products', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
            { path: 'add', component: _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_3__["CreateProductComponent"] },
            { path: 'details/:id', component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailsComponent"] },
            { path: 'addCategory', component: _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_7__["CreateCategoryComponent"] },
            { path: 'purchaseOrder', component: _purchase_order_purchase_order_component__WEBPACK_IMPORTED_MODULE_8__["PurchaseOrderComponent"] },
            { path: 'salesOrder', component: _sales_order_sales_order_component__WEBPACK_IMPORTED_MODULE_1__["SalesOrderComponent"] },
            { path: 'location', component: _location_location_component__WEBPACK_IMPORTED_MODULE_9__["LocationComponent"] },
            { path: 'company', component: _company_company_component__WEBPACK_IMPORTED_MODULE_10__["CompanyComponent"] },
            { path: 'customer', component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_12__["CustomerComponent"] },
            { path: 'supplier', component: _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_11__["SupplierComponent"] },
            { path: 'balance-sheet', component: _balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_0__["BalanceSheetComponent"] }
        ]
    },
    { path: '**', redirectTo: '404', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vgGD":
/*!***********************************************!*\
  !*** ./src/app/_model/purchaseOrderDetail.ts ***!
  \***********************************************/
/*! exports provided: PurchaseOrderDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderDetail", function() { return PurchaseOrderDetail; });
class PurchaseOrderDetail {
}


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "7Vn+");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/token-storage.service */ "FQmJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function LoginComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_16_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_16_div_2_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.minlength);
} }
function LoginComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Login failed: ", ctx_r5.errorMessage, " ");
} }
class LoginComponent {
    constructor(authService, tokenStorage, router) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.form = {};
        this.errorMessage = '';
        this.roles = [];
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getUser().roles;
        }
    }
    onSubmit() {
        this.authService.login(this.form).subscribe(data => {
            this.tokenStorage.saveToken(data.accessToken);
            localStorage.setItem('accessToken', data.accessToken);
            this.tokenStorage.saveUser(data);
            this.roles = this.tokenStorage.getUser().roles;
            this.router.navigate(['dashboard']);
        }, err => {
            this.errorMessage = err.error.message;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 5, consts: [[1, "col-md-12"], [1, "card", "card-container"], ["id", "profile-img", "src", "//ssl.gstatic.com/accounts/ui/avatar_2x.png", 1, "profile-img-card"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["for", "password"], ["type", "password", "name", "password", "required", "", "minlength", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "btn", "btn-primary", "btn-block"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.form.valid && ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) { return ctx.form.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.form.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_div_16_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_div_21_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.submitted && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.submitted && _r3.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.submitted);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"]], styles: ["label[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n\n.card-container.card[_ngcontent-%COMP%] {\n  max-width: 400px !important;\n  padding: 40px 40px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUdoQixrQkFBa0I7RUFHbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUdkLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNhcmQtY29udGFpbmVyLmNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDQwcHggNDBweDtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBwYWRkaW5nOiAyMHB4IDI1cHggMzBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMjVweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4ucHJvZmlsZS1pbWctY2FyZCB7XG4gIHdpZHRoOiA5NnB4O1xuICBoZWlnaHQ6IDk2cHg7XG4gIG1hcmdpbjogMCBhdXRvIDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "yCIP":
/*!************************************************!*\
  !*** ./src/app/location/location.component.ts ***!
  \************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_model/location */ "zOs6");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/location.service */ "BAgB");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function LocationComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationComponent_tr_33_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const location_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteLocation(location_r1.locationID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationComponent_tr_33_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const location_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.getLocation(location_r1.locationID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](location_r1.cityName);
} }
class LocationComponent {
    constructor(locationService) {
        this.locationService = locationService;
        this.location = new _model_location__WEBPACK_IMPORTED_MODULE_1__["Location"]();
        this.submitted = false;
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.locations = this.locationService.getLocationList();
    }
    newLocation() {
        this.location = new _model_location__WEBPACK_IMPORTED_MODULE_1__["Location"]();
    }
    save() {
        this.locationService
            .createLocation(this.location).subscribe(data => {
            console.log(data);
            this.location = new _model_location__WEBPACK_IMPORTED_MODULE_1__["Location"]();
            this.reloadData();
        }, error => console.log(error));
    }
    onSubmit() {
        this.save();
    }
    gotoList() {
        this.router.navigate(['/locations']);
    }
    deleteLocation(id) {
        this.locationService.deleteLocation(id)
            .subscribe(data => {
            console.log(data);
            this.reloadData();
        }, error => console.log(error));
    }
    getLocation(id) {
        this.submitted = true;
        this.locationService.getLocation(id)
            .subscribe(data => {
            console.log(data);
            this.location = data;
            this.gotoList();
        }, error => console.log(error));
    }
    updateLocation(location) {
        this.locationService.updateLocation(location)
            .subscribe(data => {
            console.log(data);
            this.location = new _model_location__WEBPACK_IMPORTED_MODULE_1__["Location"]();
            this.reloadData();
        }, error => console.log(error));
    }
}
LocationComponent.ɵfac = function LocationComponent_Factory(t) { return new (t || LocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"])); };
LocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocationComponent, selectors: [["app-location"]], decls: 35, vars: 7, consts: [[2, "width", "400px", 3, "hidden"], [3, "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "city", "required", "", "name", "city", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success"], [3, "hidden"], [1, "panel", "panel-primary"], [1, "panel-heading"], [1, "panel-body"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-info", 2, "margin-left", "10px", 3, "click"]], template: function LocationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LocationComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LocationComponent_Template_input_ngModelChange_7_listener($event) { return ctx.location.cityName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Update Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LocationComponent_Template_form_ngSubmit_13_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LocationComponent_Template_input_ngModelChange_17_listener($event) { return ctx.location.cityName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Location List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, LocationComponent_tr_33_Template, 8, 1, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.location.cityName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.location.cityName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 5, ctx.locations));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-location',
                templateUrl: './location.component.html'
            }]
    }], function () { return [{ type: _services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"] }]; }, null); })();


/***/ }),

/***/ "ylPK":
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _model_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_model/product */ "TpFj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/product.service */ "szdb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ProductDetailsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Product: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Category: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.product.productName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.product.category.categoryName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.product.price, " ");
} }
class ProductDetailsComponent {
    constructor(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
    }
    ngOnInit() {
        this.product = new _model_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();
        this.id = this.route.snapshot.params.id;
        this.productService.getProduct(this.id)
            .subscribe(data => {
            console.log(data);
            this.product = data;
        }, error => console.log(error));
    }
    list() {
        this.router.navigate(['products']);
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], decls: 9, vars: 1, consts: [[4, "ngIf"], [1, "btn", "btn-primary", 3, "click"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Product Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProductDetailsComponent_div_3_Template, 16, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_6_listener() { return ctx.list(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Back to product List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-product-details',
                templateUrl: './product-details.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "zOs6":
/*!************************************!*\
  !*** ./src/app/_model/location.ts ***!
  \************************************/
/*! exports provided: Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
class Location {
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map