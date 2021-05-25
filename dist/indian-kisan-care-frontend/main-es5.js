(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/niteenchougula/Documents/workspace/indian-kisan-care-frontend/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0erm":
    /*!**************************************************!*\
      !*** ./src/app/validators/category.validator.ts ***!
      \**************************************************/

    /*! exports provided: autocompleteStringValidator */

    /***/
    function erm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "autocompleteStringValidator", function () {
        return autocompleteStringValidator;
      });

      function autocompleteStringValidator(validOptions) {
        return function (control) {
          var option = validOptions.find(function (option) {
            return (option === null || option === void 0 ? void 0 : option.categoryName) === control.value;
          });

          if (option) {
            return null;
            /* valid option selected */
          }

          return {
            'invalidAutocompleteString': {
              value: control.value
            }
          };
        };
      }
      /***/

    },

    /***/
    "1W4x":
    /*!************************************************!*\
      !*** ./src/app/register/register.component.ts ***!
      \************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function W4x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/auth.service */
      "7Vn+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function RegisterComponent_form_3_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_form_3_div_7_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username must be at least 3 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_form_3_div_7_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username must be at most 20 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_form_3_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_form_3_div_7_div_1_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_form_3_div_7_div_2_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_form_3_div_7_div_3_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.maxlength);
        }
      }

      function RegisterComponent_form_3_div_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_form_3_div_13_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email must be a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_form_3_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_form_3_div_13_div_1_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_form_3_div_13_div_2_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.email);
        }
      }

      function RegisterComponent_form_3_div_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_form_3_div_19_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_form_3_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_form_3_div_19_div_1_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_form_3_div_19_div_2_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.minlength);
        }
      }

      function RegisterComponent_form_3_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Signup failed!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r9.errorMessage, " ");
        }
      }

      function RegisterComponent_form_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_form_3_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r2.form.valid && ctx_r17.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_form_3_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.form.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RegisterComponent_form_3_div_7_Template, 4, 3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_form_3_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.form.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegisterComponent_form_3_div_13_Template, 3, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_form_3_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.form.password = $event;
          });

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
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
        }
      }

      function RegisterComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your registration is successful! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(authService) {
          _classCallCheck(this, RegisterComponent);

          this.authService = authService;
          this.form = {};
          this.isSuccessful = false;
          this.isSignUpFailed = false;
          this.errorMessage = '';
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            this.authService.register(this.form).subscribe(function (data) {
              console.log(data);
              _this.isSuccessful = true;
              _this.isSignUpFailed = false;
            }, function (err) {
              _this.errorMessage = err.error.message;
              _this.isSignUpFailed = true;
            });
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 5,
        vars: 2,
        consts: [[1, "col-md-12"], [1, "card", "card-container"], ["id", "profile-img", "src", "//ssl.gstatic.com/accounts/ui/avatar_2x.png", 1, "profile-img-card"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "username"], ["maxlength", "20", "minlength", "3", "name", "username", "required", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "alert-danger", 4, "ngIf"], ["for", "email"], ["email", "", "name", "email", "required", "", "type", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "password"], ["minlength", "6", "name", "password", "required", "", "type", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "btn", "btn-primary", "btn-block"], ["class", "alert alert-warning", 4, "ngIf"], [1, "alert-danger"], [4, "ngIf"], [1, "alert", "alert-warning"], [1, "alert", "alert-success"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_form_3_Template, 24, 7, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegisterComponent_div_4_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSuccessful);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSuccessful);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"]],
        styles: ["label[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 10px;\n}\n\n.card-container.card[_ngcontent-%COMP%] {\n    max-width: 400px !important;\n    padding: 40px 40px;\n}\n\n.card[_ngcontent-%COMP%] {\n    background-color: #f7f7f7;\n    padding: 20px 25px 30px;\n    margin: 0 auto 25px;\n    margin-top: 50px;\n    border-radius: 2px;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card[_ngcontent-%COMP%] {\n    width: 96px;\n    height: 96px;\n    margin: 0 auto 10px;\n    display: block;\n    border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUdoQixrQkFBa0I7SUFHbEIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztJQUdkLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lci5jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNDBweCA0MHB4O1xufVxuXG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHggMzBweDtcbiAgICBtYXJnaW46IDAgYXV0byAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLnByb2ZpbGUtaW1nLWNhcmQge1xuICAgIHdpZHRoOiA5NnB4O1xuICAgIGhlaWdodDogOTZweDtcbiAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
          }]
        }], function () {
          return [{
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "25SN":
    /*!*****************************************!*\
      !*** ./src/app/_model/purchaseOrder.ts ***!
      \*****************************************/

    /*! exports provided: PurchaseOrder */

    /***/
    function SN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PurchaseOrder", function () {
        return PurchaseOrder;
      });

      var PurchaseOrder = function PurchaseOrder() {
        _classCallCheck(this, PurchaseOrder);
      };
      /***/

    },

    /***/
    "2RjZ":
    /*!***********************************************************!*\
      !*** ./src/app/ui_modules/table/sales-table.component.ts ***!
      \***********************************************************/

    /*! exports provided: SalesTableComponent */

    /***/
    function RjZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalesTableComponent", function () {
        return SalesTableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _utils_numToWords_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../utils/numToWords.js */
      "oT6E");
      /* harmony import */


      var src_app_services_token_storage_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services/token-storage.service.js */
      "3zzm");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SalesTableComponent_tr_92_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cart_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r3 + 1, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cart_r2 == null ? null : cart_r2.product == null ? null : cart_r2.product.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cart_r2 == null ? null : cart_r2.product == null ? null : cart_r2.product.hsnNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", (cart_r2 == null ? null : cart_r2.price.toLocaleString("en-IN")) || 0, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((cart_r2 == null ? null : cart_r2.qtyOrdered) || 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ((cart_r2 == null ? null : cart_r2.price) * (cart_r2 == null ? null : cart_r2.qtyOrdered)).toLocaleString("en-IN") || 0, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cart_r2 == null ? null : cart_r2.product == null ? null : cart_r2.product.gst, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ((cart_r2 == null ? null : cart_r2.product == null ? null : cart_r2.product.gst) * cart_r2.price * cart_r2.qtyOrdered / 100).toLocaleString("en-IN"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9", (cart_r2.price * cart_r2.qtyOrdered + (cart_r2 == null ? null : cart_r2.product == null ? null : cart_r2.product.gst) * cart_r2.price * cart_r2.qtyOrdered / 100).toLocaleString("en-IN"), " ");
        }
      }

      function SalesTableComponent_div_116_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A/c no:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Branch:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "IFSC code:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.user == null ? null : ctx_r1.user.bankAccount == null ? null : ctx_r1.user.bankAccount.bankName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user == null ? null : ctx_r1.user.bankAccount == null ? null : ctx_r1.user.bankAccount.accountNo, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user == null ? null : ctx_r1.user.bankAccount == null ? null : ctx_r1.user.bankAccount.branchName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user == null ? null : ctx_r1.user.bankAccount == null ? null : ctx_r1.user.bankAccount.ifscCode, " ");
        }
      }

      var SalesTableComponent = /*#__PURE__*/function () {
        function SalesTableComponent(tokenStorageService) {
          _classCallCheck(this, SalesTableComponent);

          this.tokenStorageService = tokenStorageService;
          this.totalPrice = 0;
          this.amountInWords = '';
          this.user = null;
        }

        _createClass(SalesTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('this.response', JSON.stringify(window['response']));
            var salesOrder = window['response'];

            if (!salesOrder) {
              var invoiceData = sessionStorage.getItem('invoiceData');

              if (invoiceData) {
                salesOrder = JSON.parse(invoiceData);
              }
            } else {
              sessionStorage.setItem('invoiceData', JSON.stringify(salesOrder));
            }

            this.response = salesOrder;
            document.title = 'Tax Invoice';

            this._calculateTotals();

            this.user = this.tokenStorageService.getUser();
          }
        }, {
          key: "printPDF",
          value: function printPDF() {
            window.print();
          }
        }, {
          key: "_calculateTotals",
          value: function _calculateTotals() {
            var _a, _b, _c;

            var totalPrice = 0;
            console.log('response?.salesOrderDetail', (_a = this.response) === null || _a === void 0 ? void 0 : _a.salesOrderDetail);
            (_c = (_b = this.response) === null || _b === void 0 ? void 0 : _b.salesOrderDetail) === null || _c === void 0 ? void 0 : _c.forEach(function (salesOrder) {
              var _a;

              var amount = (salesOrder === null || salesOrder === void 0 ? void 0 : salesOrder.price) * (salesOrder === null || salesOrder === void 0 ? void 0 : salesOrder.qtyOrdered);
              var taxAmount = amount * ((_a = salesOrder === null || salesOrder === void 0 ? void 0 : salesOrder.product) === null || _a === void 0 ? void 0 : _a.gst) / 100;
              totalPrice += amount + taxAmount;
            });
            this.totalPrice = Math.round(totalPrice);
            this.amountInWords = Object(_utils_numToWords_js__WEBPACK_IMPORTED_MODULE_1__["numberInWords"])(this.totalPrice);
          }
        }]);

        return SalesTableComponent;
      }();

      SalesTableComponent.ɵfac = function SalesTableComponent_Factory(t) {
        return new (t || SalesTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_storage_service_js__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]));
      };

      SalesTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SalesTableComponent,
        selectors: [["app-table"]],
        decls: 156,
        vars: 28,
        consts: [[1, "page-content", "container"], [1, "page-header", "text-blue-d2"], [1, "container", "px-0"], [1, "row", "pt-4"], [1, "col-12", "col-lg-10", "offset-lg-1"], [1, "d-flex"], ["src", "/assets/images/logo.png", "alt", "image", 1, "logo"], [2, "text-align", "center", "width", "55%"], [1, "text-sm", "text-grey-m2", "align-middle", "font-weight-bold"], [1, "text-sm", "text-grey-m2", "align-middle"], [1, "row", "brc-default-l1", "mx-n1", "mb-4"], [1, "row"], [1, "col-sm-6"], [1, "my-2"], [1, "text-sm", "text-grey-m2", "align-middle", "font-weight-bold", "my-2"], [1, "text-600", "text-110", "text-blue", "align-middle"], [1, "text-95", "col-sm-6", "align-self-start", "d-sm-flex", "justify-content-end"], [1, "d-sm-none"], [1, "text-grey-m2"], [1, "text-600", "text-90", "font-weight-bold"], [1, "text-600", "text-90"], [1, "table", "table-bordered"], ["scope", "col"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"], ["colspan", "8"], [1, "text-lg", "text-grey-m2", "align-middle", "font-weight-bold"], [4, "ngIf"], [1, "text-300", "text-30"], [1, "print-btn", 2, "text-align", "center"], [3, "click"]],
        template: function SalesTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Customer Name: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " GSTIN/UIN: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Mobile Number: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Address: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Bill Date:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Due Date:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Bill Status:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Motor Vehicle no:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "table", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "SI.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "NO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Item & Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "HSN/SAC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Quantity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "CGST/SGST ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " IGST Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Tax Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Total Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, SalesTableComponent_tr_92_Template, 19, 9, "tr", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Amount chargeable(in words):");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Payment Mode:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Cash ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "PhonePe:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " NA ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, SalesTableComponent_div_116_Template, 19, 4, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "hr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Amount Paid: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Current Balance: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Previous Balance: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Total Pay Balance:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Authorised Signatory");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "This is a computer generated invoice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesTableComponent_Template_button_click_154_listener() {
              return ctx.printPDF();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user == null ? null : ctx.user.brandName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("GST: ", ctx.user == null ? null : ctx.user.gstNo, " | PAN: ", ctx.user == null ? null : ctx.user.panNo, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("P: ", ctx.user == null ? null : ctx.user.phoneNumber, " | E: ", ctx.user == null ? null : ctx.user.email, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.response == null ? null : ctx.response.customer == null ? null : ctx.response.customer.customerName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.response == null ? null : ctx.response.customer == null ? null : ctx.response.customer.gstIn, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.response == null ? null : ctx.response.customer == null ? null : ctx.response.customer.phoneNumber, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.response == null ? null : ctx.response.customer == null ? null : ctx.response.customer.location == null ? null : ctx.response.customer.location.cityName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 22, ctx.response == null ? null : ctx.response.createdDate, "dd/MM/yyyy hh:mm:ss"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](53, 25, ctx.response == null ? null : ctx.response.dueDate, "dd/MM/yyyy hh:mm:ss"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.response == null ? null : ctx.response.status, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.response == null ? null : ctx.response.vehicleNo, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.response == null ? null : ctx.response.salesOrderDetail);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx.totalPrice.toLocaleString("en-IN"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.amountInWords, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.bankAccount != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9", (ctx.response == null ? null : ctx.response.amountPaid.toLocaleString("en-IN")) || 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9", (ctx.response == null ? null : ctx.response.currentBalance.toLocaleString("en-IN")) || 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9", ((ctx.response == null ? null : ctx.response.previousBalance) - (ctx.response == null ? null : ctx.response.currentBalance) >= 0 ? (ctx.response == null ? null : ctx.response.previousBalance) - (ctx.response == null ? null : ctx.response.currentBalance) : 0).toLocaleString("en-IN") || 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9", (ctx.response == null ? null : ctx.response.previousBalance.toLocaleString("en-IN")) || 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx.user == null ? null : ctx.user.brandName, ")");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
        styles: [".logo[_ngcontent-%COMP%] {\n  width: 180px;\n}\n\n.print-btn[_ngcontent-%COMP%]{\n  margin-top: 10px;\n}\n\n@media print {\n  .print-btn[_ngcontent-%COMP%]{\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InNhbGVzLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gIHdpZHRoOiAxODBweDtcbn1cblxuLnByaW50LWJ0bntcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgLnByaW50LWJ0bntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-table',
            templateUrl: './sales-table.component.html',
            styleUrls: ['./sales-table.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_token_storage_service_js__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "2Uo4":
    /*!*****************************************************************!*\
      !*** ./src/app/menu/navigation-bar/navigation-bar.component.ts ***!
      \*****************************************************************/

    /*! exports provided: NavigationBarComponent */

    /***/
    function Uo4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function () {
        return NavigationBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../_services/auth.service */
      "7Vn+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var NavigationBarComponent = /*#__PURE__*/function () {
        function NavigationBarComponent(auth, router) {
          _classCallCheck(this, NavigationBarComponent);

          this.auth = auth;
          this.router = router;
        }

        _createClass(NavigationBarComponent, [{
          key: "logout",
          value: function logout() {
            this.auth.logout();
            this.router.navigateByUrl('/login');
          }
        }]);

        return NavigationBarComponent;
      }();

      NavigationBarComponent.ɵfac = function NavigationBarComponent_Factory(t) {
        return new (t || NavigationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      NavigationBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavigationBarComponent,
        selectors: [["app-navigation-bar"]],
        decls: 7,
        vars: 0,
        consts: [[1, "navbar", "navbar-light", "navbar-expand-sm", "bg-white", "shadow-sm"], [1, "container-fluid"], [1, "navbar-brand"], [1, "navbar-nav"], [1, "nav-item", "nav-link", 2, "cursor", "pointer", 3, "click"]],
        template: function NavigationBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "IKC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_span_click_5_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navigation-bar',
            templateUrl: './navigation-bar.component.html',
            styleUrls: ['./navigation-bar.component.css']
          }]
        }], function () {
          return [{
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "3zzm":
    /*!****************************************************!*\
      !*** ./src/app/_services/token-storage.service.js ***!
      \****************************************************/

    /*! exports provided: TokenStorageService */

    /***/
    function zzm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
        return TokenStorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TOKEN_KEY = 'auth-token';
      var USER_KEY = 'auth-user';

      var TokenStorageService = /*#__PURE__*/function () {
        function TokenStorageService() {
          _classCallCheck(this, TokenStorageService);
        }

        _createClass(TokenStorageService, [{
          key: "signOut",
          value: function signOut() {
            window.sessionStorage.clear();
          }
        }, {
          key: "saveToken",
          value: function saveToken(token) {
            window.sessionStorage.removeItem(TOKEN_KEY);
            window.sessionStorage.setItem(TOKEN_KEY, token);
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return sessionStorage.getItem(TOKEN_KEY);
          }
        }, {
          key: "saveUser",
          value: function saveUser(user) {
            window.sessionStorage.removeItem(USER_KEY);
            window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return JSON.parse(sessionStorage.getItem(USER_KEY));
          }
        }]);

        return TokenStorageService;
      }();

      TokenStorageService.ɵfac = function TokenStorageService_Factory(t) {
        return new (t || TokenStorageService)();
      };

      TokenStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TokenStorageService,
        factory: TokenStorageService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenStorageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })(); //# sourceMappingURL=token-storage.service.js.map

      /***/

    },

    /***/
    "445I":
    /*!*********************************************************************!*\
      !*** ./src/app/products/create-product/create-product.component.ts ***!
      \*********************************************************************/

    /*! exports provided: CreateProductComponent */

    /***/
    function I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateProductComponent", function () {
        return CreateProductComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_validators_category_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/validators/category.validator */
      "0erm");
      /* harmony import */


      var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/location.service */
      "BAgB");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/product.service */
      "szdb");
      /* harmony import */


      var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_services/category.service */
      "AfT/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function CreateProductComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateProductComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateProductComponent_mat_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r4 == null ? null : option_r4.categoryName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r4 == null ? null : option_r4.categoryName, " ");
        }
      }

      var CreateProductComponent = /*#__PURE__*/function () {
        function CreateProductComponent(location, productService, categoryService, dialogRef, data) {
          _classCallCheck(this, CreateProductComponent);

          this.location = location;
          this.productService = productService;
          this.categoryService = categoryService;
          this.dialogRef = dialogRef;
          this.data = data;
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.options = [];
          this.listOfCategories = [];
          this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            categoryName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            //price: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(0)]),
            gst: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]),
            hsnNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
          this.locationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            cityName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });

          if (data != null) {
            this.productUpdateData = data === null || data === void 0 ? void 0 : data.data;
            this.productForm.controls['categoryName'].setValue(this.productUpdateData.category.categoryName);
            this.productForm.controls['productName'].setValue(this.productUpdateData.productName); //this.productForm.controls['price'].setValue(this.productUpdateData.price);

            this.productForm.controls['gst'].setValue(this.productUpdateData.gst);
            this.productForm.controls['hsnNo'].setValue(this.productUpdateData.hsnNo); //this.productForm.controls['qty'].setValue(this.productUpdateData.qty);
          }
        }

        _createClass(CreateProductComponent, [{
          key: "closeModal",
          value: function closeModal() {
            this.dialogRef.close();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fetchData();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _a;

            if (((_a = this.productUpdateData) === null || _a === void 0 ? void 0 : _a.id) != null) {
              this.updateProduct();
            } else {
              this.addProduct();
            }
          }
        }, {
          key: "addProduct",
          value: function addProduct() {
            var _this2 = this;

            var selectedCategoryName = this.productForm.controls.categoryName.value;

            var category = this._findCategory(selectedCategoryName);

            if (category === undefined) {
              alert('Please select valid Category');
              return;
            }

            var data = {
              productName: this.productForm.controls.productName.value,
              //price: this.productForm.controls.price.value,
              gst: this.productForm.controls.gst.value,
              hsnNo: this.productForm.controls.hsnNo.value,
              //qty: this.productForm.controls.qty.value,
              category: category
            };
            this.productService.createProduct(data).subscribe(function (res) {
              if (res != null) {
                _this2.successMsg = 'Product Successfully Updated..!'; // this.getCategoryList();

                _this2.closeModal();
              }
            }, function (error) {
              _this2.errorMsg = error.error.errorMessage;
            });
          }
        }, {
          key: "updateProduct",
          value: function updateProduct() {
            var _this3 = this;

            var selectedCategoryName = this.productForm.controls.categoryName.value;

            var category = this._findCategory(selectedCategoryName);

            var data = {
              id: this.productUpdateData.id,
              productName: this.productForm.controls.productName.value,
              //price: this.productForm.controls.price.value,
              gst: this.productForm.controls.gst.value,
              hsnNo: this.productForm.controls.hsnNo.value,
              //qty: this.productForm.controls.qty.value,
              category: category
            };
            this.productService.updateProduct(data).subscribe(function (res) {
              if (res != null) {
                _this3.successMsg = 'Product Successfully Created..!';

                _this3.closeModal();
              }
            }, function (error) {
              _this3.errorMsg = error.error.errorMessage;
            });
          }
        }, {
          key: "getCategoryList",
          value: function getCategoryList() {
            var _this4 = this;

            this.categoryService.getCategoryList().subscribe(function (data) {
              _this4.options = data;

              _this4.productForm.get('categoryName').setValidators([Object(src_app_validators_category_validator__WEBPACK_IMPORTED_MODULE_4__["autocompleteStringValidator"])(data), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            });
          }
        }, {
          key: "fetchData",
          value: function fetchData() {
            var _this5 = this;

            this.categoryService.getCategoryList().subscribe(function (data) {
              _this5.listOfCategories = data;

              _this5._valueChangesListner();
            });
          }
        }, {
          key: "_filter",
          value: function _filter(value) {
            if (!value) {
              return this.listOfCategories;
            }

            var filterValue = value.toLowerCase();
            var supplierList = this.listOfCategories.filter(function (option) {
              return option.categoryName.toLowerCase().indexOf(filterValue) === 0;
            });
            return supplierList;
          }
        }, {
          key: "_findCategory",
          value: function _findCategory(categoryName) {
            return this.listOfCategories.find(function (option) {
              return (option === null || option === void 0 ? void 0 : option.categoryName) === categoryName;
            });
          }
        }, {
          key: "_valueChangesListner",
          value: function _valueChangesListner() {
            var _this6 = this;

            this.filteredOptions = this.productForm.controls['categoryName'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
              return _this6._filter(value);
            }));
          }
        }]);

        return CreateProductComponent;
      }();

      CreateProductComponent.ɵfac = function CreateProductComponent_Factory(t) {
        return new (t || CreateProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      CreateProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateProductComponent,
        selectors: [["app-create-product"]],
        decls: 34,
        vars: 10,
        consts: [[1, "product-conatiner"], ["class", "title-header", 4, "ngIf"], [3, "formGroup"], [1, "addproduct-container"], [1, "forms-fildes"], ["formControlName", "categoryName", "aria-label", "Number", "matInput", "", "placeholder", "Category", "type", "text", 3, "matAutocomplete"], ["autoActiveFirstOption", ""], ["supplierAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "productName", "matInput", "", "placeholder", "Product Name"], ["formControlName", "hsnNo", "matInput", "", "placeholder", "HSN/SAC"], ["formControlName", "gst", "matInput", "", "placeholder", "GST%"], [1, "button-container"], ["aria-label", "Close", 1, "btn", "btn-warning", 2, "width", "25%", "margin-left", "5px", 3, "click"], [1, "btn", "btn-primary", 2, "width", "25%", "margin-left", "5px", "border-radius", "10px", 3, "disabled", "click"], [2, "color", "green"], [2, "color", "red"], [1, "title-header"], [1, "title"], [3, "value"]],
        template: function CreateProductComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateProductComponent_div_1_Template, 3, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateProductComponent_div_2_Template, 3, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-autocomplete", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CreateProductComponent_mat_option_10_Template, 2, 2, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateProductComponent_Template_button_click_25_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateProductComponent_Template_button_click_27_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.productUpdateData == null ? null : ctx.productUpdateData.id) == null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.productUpdateData == null ? null : ctx.productUpdateData.id) != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.productForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, ctx.filteredOptions));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.productForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.successMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMsg);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
        styles: [".title[_ngcontent-%COMP%] {\n    font-weight: 500;\n    font-size: 20px;\n}\n\n.addproduct-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0IiLCJmaWxlIjoiY3JlYXRlLXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5hZGRwcm9kdWN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateProductComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-product',
            templateUrl: './create-product.component.html',
            styleUrls: ['./create-product.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"]
          }, {
            type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]
          }, {
            type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "7Vn+":
    /*!*******************************************!*\
      !*** ./src/app/_services/auth.service.ts ***!
      \*******************************************/

    /*! exports provided: AuthService */

    /***/
    function Vn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _model_http_client_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_model/http-client-helper */
      "aj3h");

      var AUTH_API = _model_http_client_helper__WEBPACK_IMPORTED_MODULE_2__["HttpClientHelper"].baseURL + '/auth/';
      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/json'
        })
      };

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(credentials) {
            return this.http.post(AUTH_API + 'signin', {
              username: credentials.username,
              password: credentials.password
            }, httpOptions);
          }
        }, {
          key: "register",
          value: function register(user) {
            return this.http.post(AUTH_API + 'signup', {
              username: user.username,
              email: user.email,
              password: user.password
            }, httpOptions);
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "7YO1":
    /*!************************************************************!*\
      !*** ./src/app/purchase-order/purchase-order.component.ts ***!
      \************************************************************/

    /*! exports provided: PurchaseOrderComponent */

    /***/
    function YO1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PurchaseOrderComponent", function () {
        return PurchaseOrderComponent;
      });
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _model_purchaseOrder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_model/purchaseOrder */
      "25SN");
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/product.service */
      "szdb");
      /* harmony import */


      var _services_supplier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/supplier.service */
      "8LTU");
      /* harmony import */


      var _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../_services/purchase-order.service */
      "QhWZ");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function PurchaseOrderComponent_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var supplier_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", supplier_r35.supplierName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", supplier_r35.supplierName, " ");
        }
      }

      function PurchaseOrderComponent_mat_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", product_r36.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r36.productName, " ");
        }
      }

      function PurchaseOrderComponent_th_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "S. No");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PurchaseOrderComponent_td_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r38 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r38 + 1, ". ");
        }
      }

      function PurchaseOrderComponent_td_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PurchaseOrderComponent_th_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PurchaseOrderComponent_td_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PurchaseOrderComponent_td_40_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42);

            var i_r40 = ctx.index;

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r41.removeProduct(i_r40);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PurchaseOrderComponent_td_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 45);
        }
      }

      function PurchaseOrderComponent_th_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Item & Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PurchaseOrderComponent_td_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r43.get("product").value == null ? null : element_r43.get("product").value.productName);
        }
      }

      function PurchaseOrderComponent_td_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 45);
        }
      }

      function PurchaseOrderComponent_th_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Rate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PurchaseOrderComponent_td_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u20B9\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var index_r45 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", index_r45);
        }
      }

      function PurchaseOrderComponent_td_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 45);
        }
      }

      function PurchaseOrderComponent_th_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PurchaseOrderComponent_td_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r46 = ctx.$implicit;
          var index_r47 = ctx.index;
          var tmp_1_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", index_r47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", (tmp_1_0 = element_r46.get("product")) == null ? null : tmp_1_0.value == null ? null : tmp_1_0.value.qty);
        }
      }

      function PurchaseOrderComponent_td_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 45);
        }
      }

      function PurchaseOrderComponent_th_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PurchaseOrderComponent_td_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r48 = ctx.$implicit;
          var tmp_0_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u20B9", ((tmp_0_0 = element_r48.get("price")) == null ? null : tmp_0_0.value) * ((tmp_0_0 = element_r48.get("qtyOrdered")) == null ? null : tmp_0_0.value), "");
        }
      }

      function PurchaseOrderComponent_td_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 45);
        }
      }

      function PurchaseOrderComponent_th_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " CGST/SGST ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " IGST Rate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PurchaseOrderComponent_td_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r49 = ctx.$implicit;
          var tmp_0_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = element_r49.get("product")) == null ? null : tmp_0_0.value.gst, "%");
        }
      }

      function PurchaseOrderComponent_td_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 45);
        }
      }

      function PurchaseOrderComponent_th_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tax Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PurchaseOrderComponent_td_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r50 = ctx.$implicit;
          var tmp_0_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u20B9", ((tmp_0_0 = element_r50.get("price")) == null ? null : tmp_0_0.value) * ((tmp_0_0 = element_r50.get("qtyOrdered")) == null ? null : tmp_0_0.value) * ((tmp_0_0 = element_r50.get("product")) == null ? null : tmp_0_0.value.gst) / 100, " ");
        }
      }

      function PurchaseOrderComponent_td_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 45);
        }
      }

      function PurchaseOrderComponent_th_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Total Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PurchaseOrderComponent_td_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r51 = ctx.$implicit;
          var tmp_0_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u20B9", ((tmp_0_0 = element_r51.get("price")) == null ? null : tmp_0_0.value) * ((tmp_0_0 = element_r51.get("qtyOrdered")) == null ? null : tmp_0_0.value) + ((tmp_0_0 = element_r51.get("price")) == null ? null : tmp_0_0.value) * ((tmp_0_0 = element_r51.get("qtyOrdered")) == null ? null : tmp_0_0.value) * ((tmp_0_0 = element_r51.get("product")) == null ? null : tmp_0_0.value.gst) / 100, " ");
        }
      }

      function PurchaseOrderComponent_td_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r31.totalAmount, "INR"), " ");
        }
      }

      function PurchaseOrderComponent_tr_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 57);
        }
      }

      function PurchaseOrderComponent_tr_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 58);
        }
      }

      function PurchaseOrderComponent_tr_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 59);
        }
      }

      var PurchaseOrderComponent = /*#__PURE__*/function () {
        function PurchaseOrderComponent(_fb, productService, supplierService, purchaseOrderService) {
          _classCallCheck(this, PurchaseOrderComponent);

          this._fb = _fb;
          this.productService = productService;
          this.supplierService = supplierService;
          this.purchaseOrderService = purchaseOrderService;
          this.displayedColumns = ['sno', 'action', 'item', 'price', 'quantity', 'amount', 'taxType', 'taxAmount', 'totalAmount'];
          this.previousBalance = 0;
          this.totalAmount = 0;
          this.suppliers = [];
          this.products = [];
        }

        _createClass(PurchaseOrderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fetchData();

            this._createForm();

            console.log('this.purchaserOrderForm', this.purchaserOrderForm);
          }
        }, {
          key: "removeProduct",
          value: function removeProduct(index) {
            this.purchaseOrderDetailArr.removeAt(index);
            this.purchaseOrderDetailData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.purchaseOrderDetailArr.controls);
          }
        }, {
          key: "selectedProduct",
          value: function selectedProduct(_selectedProduct) {
            var product = this._findProduct(_selectedProduct);

            this._addProduct(product);
          }
        }, {
          key: "selectedSupplier",
          value: function selectedSupplier(_selectedSupplier) {
            var supplier = this._findSupplier(_selectedSupplier);

            this._supplierBalanceData(supplier === null || supplier === void 0 ? void 0 : supplier.id);
          }
        }, {
          key: "fetchData",
          value: function fetchData() {
            var _this7 = this;

            this.supplierService.getSupplierList().subscribe(function (data) {
              _this7.suppliers = data;
            });
            this.productService.getProductsList().subscribe(function (data) {
              _this7.products = data;

              _this7._valueChangesListner();
            });
          }
        }, {
          key: "getCurrentBalance",
          value: function getCurrentBalance() {
            return this.totalAmount - this.amountPaid.value;
          }
        }, {
          key: "getTotalBalance",
          value: function getTotalBalance() {
            return this.previousBalance + this.getCurrentBalance();
          }
        }, {
          key: "save",
          value: function save() {
            var _this8 = this;

            // console.log('this.purchaserOrderForm', this.purchaserOrderForm.value);
            var purchaseOrder = new _model_purchaseOrder__WEBPACK_IMPORTED_MODULE_4__["PurchaseOrder"]();
            var supplierName = this.purchaserOrderForm.get('supplierName').value;

            var supplier = this._findSupplier(supplierName);

            purchaseOrder.supplier = supplier;
            purchaseOrder.currentBalance = this.getCurrentBalance();
            purchaseOrder.purchaseOrderDetail = this.purchaseOrderDetailArr.value;
            purchaseOrder.totalPrice = this.totalAmount;
            purchaseOrder.vehicleNo = this.purchaserOrderForm.get('motorVehicleNo').value;
            purchaseOrder.amountPaid = this.purchaserOrderForm.get('amountPaid').value;
            purchaseOrder.dueDate = this.purchaserOrderForm.get('dueDate').value;

            if (purchaseOrder.currentBalance <= 0) {
              purchaseOrder.status = 'PAID';
            } else if (purchaseOrder.amountPaid > 0) {
              purchaseOrder.status = 'PARTIAL';
            } else {
              purchaseOrder.status = 'DUE';
            }

            this.purchaseOrderService.createPurchaseOrder(purchaseOrder).subscribe(function (data) {
              console.log(data);

              _this8._printPdf(data);

              _this8.refreshAfterSave();
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "refreshAfterSave",
          value: function refreshAfterSave() {
            window.location.reload(); // this.previousBalance = 0;
            // this.purchaseOrderDetailData = [];
            // this._createForm();
          }
        }, {
          key: "_supplierBalanceData",
          value: function _supplierBalanceData(supplierID) {
            var _this9 = this;

            this.purchaseOrderService.getPurchaseOrderBalaceBySupplier(supplierID).subscribe(function (data) {
              _this9.previousBalance = data;
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "_printPdf",
          value: function _printPdf(response) {
            var url = "".concat(location.origin, "/#table");
            var myWindow = window.open(url);
            myWindow['response'] = response;
          }
        }, {
          key: "_filterSupplier",
          value: function _filterSupplier(value) {
            if (!value) {
              return this.suppliers;
            }

            var filterValue = value.toLowerCase();
            var supplierList = this.suppliers.filter(function (option) {
              return option.supplierName.toLowerCase().indexOf(filterValue) === 0;
            });
            return supplierList;
          }
        }, {
          key: "_filterProduct",
          value: function _filterProduct(value) {
            if (!value) {
              return this.products;
            }

            var filterValue = value.toLowerCase();
            return this.products.filter(function (option) {
              return option.productName.toLowerCase().indexOf(filterValue) === 0;
            });
          }
        }, {
          key: "_findProduct",
          value: function _findProduct(value) {
            return this.products.find(function (option) {
              return option.productName === value;
            });
          }
        }, {
          key: "_findSupplier",
          value: function _findSupplier(value) {
            return this.suppliers.find(function (option) {
              return option.supplierName === value;
            });
          }
        }, {
          key: "_initRow",
          value: function _initRow(product) {
            return this._fb.group({
              price: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100000)]],
              qtyOrdered: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10000)]],
              product: [product]
            });
          }
        }, {
          key: "_addProduct",
          value: function _addProduct(product) {
            var newRow = this._initRow(product);

            this.purchaseOrderDetailArr.push(newRow);
            this.purchaseOrderDetailData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.purchaseOrderDetailArr.controls);
          }
        }, {
          key: "_valueChangesListner",
          value: function _valueChangesListner() {
            var _this10 = this;

            this.filteredSuppliers = this.purchaserOrderForm.controls['supplierName'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
              return _this10._filterSupplier(value);
            }));
            this.filteredProducts = this.purchaserOrderForm.controls['productName'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
              return _this10._filterProduct(value);
            }));
            this.purchaseOrderDetailArr.valueChanges.subscribe(function (productList) {
              var totalAmount = 0;
              productList.forEach(function (product) {
                var _a;

                var amount = Number(product.qtyOrdered) * Number(product.price);
                var taxAmount = amount * (((_a = product.product) === null || _a === void 0 ? void 0 : _a.gst) || 0) / 100;
                totalAmount += amount + taxAmount;
              });
              _this10.totalAmount = Math.round(totalAmount);
            });
          }
        }, {
          key: "_createForm",
          value: function _createForm() {
            this.purchaserOrderForm = this._fb.group({
              supplierName: [''],
              productName: [''],
              motorVehicleNo: [''],
              dueDate: [new Date()],
              purchaseOrderDetail: this._fb.array([]),
              amountPaid: [0]
            });
          }
        }, {
          key: "purchaseOrderDetailArr",
          get: function get() {
            return this.purchaserOrderForm.get('purchaseOrderDetail');
          }
        }, {
          key: "amountPaid",
          get: function get() {
            return this.purchaserOrderForm.get('amountPaid');
          }
        }]);

        return PurchaseOrderComponent;
      }();

      PurchaseOrderComponent.ɵfac = function PurchaseOrderComponent_Factory(t) {
        return new (t || PurchaseOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_supplier_service__WEBPACK_IMPORTED_MODULE_6__["SupplierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_purchase_order_service__WEBPACK_IMPORTED_MODULE_7__["PurchaseOrderService"]));
      };

      PurchaseOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PurchaseOrderComponent,
        selectors: [["app-purchase-order"]],
        decls: 98,
        vars: 29,
        consts: [[3, "formGroup"], [1, "d-flex"], [1, "form-group", "col-3"], [1, "forms-fildes"], ["type", "text", "placeholder", "Select Supplier", "aria-label", "Supplier", "matInput", "", "formControlName", "supplierName", 3, "matAutocomplete"], ["autoActiveFirstOption", "", 3, "optionSelected"], ["supplierAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Select Product", "aria-label", "Product", "matInput", "", "formControlName", "productName", "required", "", 3, "matAutocomplete"], ["productAuto", "matAutocomplete"], ["type", "text", "placeholder", "Motor Vehicle No", "aria-label", "Motor Vehicle no", "matInput", "", "formControlName", "motorVehicleNo"], [1, "form-group", "col-2"], ["matInput", "", "formControlName", "dueDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "mat-elevation-z8", "purchase-order-container"], ["formArrayName", "purchaseOrderDetail", "mat-table", "", 3, "dataSource"], ["matColumnDef", "sno"], ["mat-header-cell", "", "class", "text-left pr-4", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right pr-4", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "action"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "price"], ["mat-header-cell", "", "class", "text-right pr-4", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right pr-4", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "quantity"], ["matColumnDef", "amount"], ["matColumnDef", "taxType"], ["matColumnDef", "taxAmount"], ["matColumnDef", "totalAmount"], ["mat-footer-cell", "", "class", "text-right pr-4", 4, "matFooterCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], [1, "total-container"], ["for", "name"], ["type", "number", "formControlName", "amountPaid", "required", "", 1, "amount-edit"], [1, "amount-read-only"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], [3, "value"], ["mat-header-cell", "", 1, "text-left", "pr-4"], ["mat-cell", "", 1, "text-right", "pr-4"], ["mat-footer-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "aria-label", "Remove product", 3, "click"], ["mat-header-cell", ""], ["mat-header-cell", "", 1, "text-right", "pr-4"], ["mat-cell", "", 1, "text-right", "pr-4", 3, "formGroupName"], ["floatLabel", "never"], ["matInput", "", "placeholder", "Price", "type", "number", "formControlName", "price", "required", "", 1, "text-right"], ["matPrefix", ""], ["floatLabel", "never", 1, "text-right"], ["matInput", "", "type", "number", "formControlName", "qtyOrdered", "required", "", 3, "placeholder"], ["mat-footer-cell", "", 1, "text-right", "pr-4"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]],
        template: function PurchaseOrderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Supplier");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-autocomplete", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function PurchaseOrderComponent_Template_mat_autocomplete_optionSelected_7_listener($event) {
              return ctx.selectedSupplier($event.option.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PurchaseOrderComponent_mat_option_9_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-autocomplete", 5, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function PurchaseOrderComponent_Template_mat_autocomplete_optionSelected_16_listener($event) {
              return ctx.selectedProduct($event.option.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PurchaseOrderComponent_mat_option_18_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Motor Vehicle no");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Due date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "mat-datepicker-toggle", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "mat-datepicker", null, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "table", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](34, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, PurchaseOrderComponent_th_35_Template, 2, 0, "th", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, PurchaseOrderComponent_td_36_Template, 2, 1, "td", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, PurchaseOrderComponent_td_37_Template, 3, 0, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](38, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, PurchaseOrderComponent_th_39_Template, 2, 0, "th", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, PurchaseOrderComponent_td_40_Template, 4, 0, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, PurchaseOrderComponent_td_41_Template, 1, 0, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](42, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, PurchaseOrderComponent_th_43_Template, 2, 0, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, PurchaseOrderComponent_td_44_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, PurchaseOrderComponent_td_45_Template, 1, 0, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](46, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, PurchaseOrderComponent_th_47_Template, 2, 0, "th", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, PurchaseOrderComponent_td_48_Template, 5, 1, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, PurchaseOrderComponent_td_49_Template, 1, 0, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](50, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, PurchaseOrderComponent_th_51_Template, 2, 0, "th", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, PurchaseOrderComponent_td_52_Template, 3, 2, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, PurchaseOrderComponent_td_53_Template, 1, 0, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](54, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, PurchaseOrderComponent_th_55_Template, 2, 0, "th", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, PurchaseOrderComponent_td_56_Template, 2, 1, "td", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, PurchaseOrderComponent_td_57_Template, 1, 0, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](58, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, PurchaseOrderComponent_th_59_Template, 4, 0, "th", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, PurchaseOrderComponent_td_60_Template, 2, 1, "td", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, PurchaseOrderComponent_td_61_Template, 1, 0, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](62, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, PurchaseOrderComponent_th_63_Template, 2, 0, "th", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, PurchaseOrderComponent_td_64_Template, 2, 1, "td", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, PurchaseOrderComponent_td_65_Template, 1, 0, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](66, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, PurchaseOrderComponent_th_67_Template, 2, 0, "th", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, PurchaseOrderComponent_td_68_Template, 2, 1, "td", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, PurchaseOrderComponent_td_69_Template, 3, 4, "td", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, PurchaseOrderComponent_tr_70_Template, 1, 0, "tr", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, PurchaseOrderComponent_tr_71_Template, 1, 0, "tr", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, PurchaseOrderComponent_tr_72_Template, 1, 0, "tr", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Amount Paid ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Current Balance ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "span", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](83, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Previous Balance ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "span", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](89, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Total Pay Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "span", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](95, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PurchaseOrderComponent_Template_button_click_96_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.purchaserOrderForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 16, ctx.filteredSuppliers));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 18, ctx.filteredProducts));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.purchaseOrderDetailData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matFooterRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](83, 20, ctx.getCurrentBalance(), "INR"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](89, 23, ctx.previousBalance, "INR"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](95, 26, ctx.getTotalBalance(), "INR"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.purchaserOrderForm.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatFooterRowDef"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatFooterCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatPrefix"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatFooterRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"]],
        styles: [".amount-read-only[_ngcontent-%COMP%] {\n  width: 100px;\n  display: inline-block;\n}\n\n.amount-edit[_ngcontent-%COMP%] {\n  width: 100px;\n  text-align: right;\n  margin-left: 4px;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #ababab;\n  font-size: 15px;\n}\n\n.total-container[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: right;\n}\n\n.purchase-order-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 150px);\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.forms-fildes[_ngcontent-%COMP%] {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLW9yZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InB1cmNoYXNlLW9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW1vdW50LXJlYWQtb25seSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYW1vdW50LWVkaXQge1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmFiYWI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRvdGFsLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucHVyY2hhc2Utb3JkZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZm9ybXMtZmlsZGVzIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PurchaseOrderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-purchase-order',
            templateUrl: './purchase-order.component.html',
            styleUrls: ['./purchase-order.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
          }, {
            type: _services_supplier_service__WEBPACK_IMPORTED_MODULE_6__["SupplierService"]
          }, {
            type: _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_7__["PurchaseOrderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8LCG":
    /*!**********************************************************!*\
      !*** ./src/app/balance-sheet/balance-sheet.component.ts ***!
      \**********************************************************/

    /*! exports provided: BalanceSheetComponent */

    /***/
    function LCG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BalanceSheetComponent", function () {
        return BalanceSheetComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _model_customer_balance_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_model/customer-balance-sheet */
      "BDUJ");
      /* harmony import */


      var _model_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_model/customer */
      "Xzbv");
      /* harmony import */


      var _model_supplier_balance_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_model/supplier-balance-sheet */
      "r4IO");
      /* harmony import */


      var _model_supplier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_model/supplier */
      "dm9D");
      /* harmony import */


      var _model_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_model/location */
      "zOs6");
      /* harmony import */


      var _services_sales_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/sales-order.service */
      "RQfM");
      /* harmony import */


      var _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../_services/purchase-order.service */
      "QhWZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function BalanceSheetComponent_tr_15_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var customerBalanceSheet_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customerBalanceSheet_r2.customer.customerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customerBalanceSheet_r2.customer.location.cityName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customerBalanceSheet_r2.currentBalance);
        }
      }

      function BalanceSheetComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var supplierBalanceSheet_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](supplierBalanceSheet_r3.supplier.supplierName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](supplierBalanceSheet_r3.supplier.company.companyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](supplierBalanceSheet_r3.currentBalance);
        }
      }

      var BalanceSheetComponent = /*#__PURE__*/function () {
        function BalanceSheetComponent(salesOrderService, purchaseOrderService) {
          _classCallCheck(this, BalanceSheetComponent);

          this.salesOrderService = salesOrderService;
          this.purchaseOrderService = purchaseOrderService;
          this.customerBalanceSheet = new _model_customer_balance_sheet__WEBPACK_IMPORTED_MODULE_1__["CustomerBalanceSheet"]();
          this.customer = new _model_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
          this.location = new _model_location__WEBPACK_IMPORTED_MODULE_5__["Location"]();
          this.SupplierBalanceSheet = new _model_supplier_balance_sheet__WEBPACK_IMPORTED_MODULE_3__["SupplierBalanceSheet"]();
          this.supplier = new _model_supplier__WEBPACK_IMPORTED_MODULE_4__["Supplier"]();
        }

        _createClass(BalanceSheetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reloadData();
          }
        }, {
          key: "reloadData",
          value: function reloadData() {
            this.customerBalanceSheets = this.salesOrderService.getAllCustomerSalesOrderBalanceSheet();
            this.supplierBalanceSheets = this.purchaseOrderService.getAllSupplierPurchaseOrderBalanceSheet();
          }
        }]);

        return BalanceSheetComponent;
      }();

      BalanceSheetComponent.ɵfac = function BalanceSheetComponent_Factory(t) {
        return new (t || BalanceSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sales_order_service__WEBPACK_IMPORTED_MODULE_6__["SalesOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_purchase_order_service__WEBPACK_IMPORTED_MODULE_7__["PurchaseOrderService"]));
      };

      BalanceSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BalanceSheetComponent,
        selectors: [["app-balance-sheet"]],
        decls: 35,
        vars: 6,
        consts: [[1, "panel", "panel-primary"], [1, "panel-heading"], [1, "panel-body"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"]],
        template: function BalanceSheetComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 2, ctx.customerBalanceSheets));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 4, ctx.supplierBalanceSheets));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWxhbmNlLXNoZWV0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BalanceSheetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-balance-sheet',
            templateUrl: './balance-sheet.component.html',
            styleUrls: ['./balance-sheet.component.css']
          }]
        }], function () {
          return [{
            type: _services_sales_order_service__WEBPACK_IMPORTED_MODULE_6__["SalesOrderService"]
          }, {
            type: _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_7__["PurchaseOrderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8LTU":
    /*!***********************************************!*\
      !*** ./src/app/_services/supplier.service.ts ***!
      \***********************************************/

    /*! exports provided: SupplierService */

    /***/
    function LTU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupplierService", function () {
        return SupplierService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_model/http-client-helper */
      "aj3h");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var SupplierService = /*#__PURE__*/function () {
        function SupplierService(http) {
          _classCallCheck(this, SupplierService);

          this.http = http;
          this.baseUrl = _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__["HttpClientHelper"].baseURL + '/supplier';
        }

        _createClass(SupplierService, [{
          key: "getSupplier",
          value: function getSupplier(id) {
            return this.http.get("".concat(this.baseUrl, "/").concat(id));
          } // tslint:disable-next-line: ban-types

        }, {
          key: "createSupplier",
          value: function createSupplier(supplier) {
            return this.http.post("".concat(this.baseUrl), supplier);
          } // tslint:disable-next-line: ban-types

        }, {
          key: "updateSupplier",
          value: function updateSupplier(value) {
            return this.http.put("".concat(this.baseUrl), value);
          }
        }, {
          key: "deleteSupplier",
          value: function deleteSupplier(id) {
            return this.http["delete"]("".concat(this.baseUrl, "/").concat(id), {
              responseType: 'text'
            });
          }
        }, {
          key: "getSupplierList",
          value: function getSupplierList() {
            return this.http.get("".concat(this.baseUrl));
          }
        }]);

        return SupplierService;
      }();

      SupplierService.ɵfac = function SupplierService_Factory(t) {
        return new (t || SupplierService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      SupplierService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SupplierService,
        factory: SupplierService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupplierService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9c9/":
    /*!***************************************!*\
      !*** ./src/app/_model/sales-order.ts ***!
      \***************************************/

    /*! exports provided: SalesOrder */

    /***/
    function c9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalesOrder", function () {
        return SalesOrder;
      });

      var SalesOrder = function SalesOrder() {
        _classCallCheck(this, SalesOrder);
      };
      /***/

    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/product.service */
      "szdb");
      /* harmony import */


      var _services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../_services/customer.service */
      "TZGB");
      /* harmony import */


      var _services_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../_services/supplier.service */
      "8LTU");
      /* harmony import */


      var _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../_services/purchase-order.service */
      "QhWZ");
      /* harmony import */


      var _services_sales_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../_services/sales-order.service */
      "RQfM");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(productService, customerService, supplierService, purchaseOrderService, salesOrderService) {
          _classCallCheck(this, HomeComponent);

          this.productService = productService;
          this.customerService = customerService;
          this.supplierService = supplierService;
          this.purchaseOrderService = purchaseOrderService;
          this.salesOrderService = salesOrderService;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reload();
          }
        }, {
          key: "reload",
          value: function reload() {
            var _this11 = this;

            this.productService.getProductsList().subscribe(function (data) {
              console.log(data);
              _this11.productsCount = data.length;
            }, function (error) {
              return console.log(error);
            });
            this.customerService.getCustomerList().subscribe(function (data) {
              console.log(data);
              _this11.customersCount = data.length;
            }, function (error) {
              return console.log(error);
            });
            this.supplierService.getSupplierList().subscribe(function (data) {
              console.log(data);
              _this11.suppliersCount = data.length;
            }, function (error) {
              return console.log(error);
            });
            this.purchaseOrderService.getPurchaseOrderList().subscribe(function (data) {
              console.log(data);
              _this11.purchaseOrdersCount = data.length;
            }, function (error) {
              return console.log(error);
            });
            this.salesOrderService.getSalesOrderList().subscribe(function (data) {
              console.log(data);
              _this11.salesOrdersCount = data.length;
            }, function (error) {
              return console.log(error);
            });
            this.salesOrderService.getAllCustomerSalesOrderBalance().subscribe(function (data) {
              console.log(data);
              _this11.totalCustomerBalance = data;
            }, function (error) {
              return console.log(error);
            });
            this.purchaseOrderService.getAllSupplierPurchaseOrderBalace().subscribe(function (data) {
              console.log(data);
              _this11.totalSupplierBalance = data;
            }, function (error) {
              return console.log(error);
            });
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_purchase_order_service__WEBPACK_IMPORTED_MODULE_4__["PurchaseOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sales_order_service__WEBPACK_IMPORTED_MODULE_5__["SalesOrderService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 34,
        vars: 4,
        consts: [[1, "app-container"], [1, "main-container", "flex-fill"], [1, "container-fluid", "mt-2"], [1, "row"], [1, "col-md-12"], [1, "col-md-3"], [1, "card-counter", "primary"], [1, "fa", "fa-code-forkl"], [1, "count-numbers"], [1, "count-name"], [1, "card-counter", "danger"], [1, "fa", "fa-ticketa"], [1, "card-counter", "success"], [1, "fa", "fa-users"], [1, "card-counter", "info"], [1, "fa", "fa-users1"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Total Purchase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Total Sell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Total Supplier");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Total Supplier Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.purchaseOrdersCount);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.salesOrdersCount);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.suppliersCount);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalSupplierBalance);
          }
        },
        styles: [".close[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 20px;\n    padding: 10px;\n    background-color: #fff;\n    border-bottom: 1px solid #000;\n}\n\n.navbar[_ngcontent-%COMP%] {\n    background-color: #3c8dbc;\n}\n\n.main[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 100vh;\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n    float: left;\n    width: 88%;\n}\n\n#mySidebar[_ngcontent-%COMP%] {\n    height: 100vh;\n    background-color: #000;\n    \n    width: 12%;\n    float: left;\n}\n\n#mySidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff;\n}\n\n.card-counter[_ngcontent-%COMP%] {\n    box-shadow: 2px 2px 10px #DADADA;\n    margin: 5px;\n    padding: 20px 10px;\n    background-color: #fff;\n    height: 100px;\n    border-radius: 5px;\n    transition: .3s linear all;\n}\n\n.card-counter[_ngcontent-%COMP%]:hover {\n    box-shadow: 4px 4px 20px #DADADA;\n    transition: .3s linear all;\n}\n\n.card-counter.primary[_ngcontent-%COMP%] {\n    background-color: #007bff;\n    color: #FFF;\n}\n\n.card-counter.danger[_ngcontent-%COMP%] {\n    background-color: #ef5350;\n    color: #FFF;\n}\n\n.card-counter.success[_ngcontent-%COMP%] {\n    background-color: #66bb6a;\n    color: #FFF;\n}\n\n.card-counter.info[_ngcontent-%COMP%] {\n    background-color: #26c6da;\n    color: #FFF;\n}\n\n.card-counter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 5em;\n    opacity: 0.2;\n}\n\n.card-counter[_ngcontent-%COMP%]   .count-numbers[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 35px;\n    top: 20px;\n    font-size: 32px;\n    display: block;\n}\n\n.card-counter[_ngcontent-%COMP%]   .count-name[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 35px;\n    top: 65px;\n    font-style: italic;\n    text-transform: capitalize;\n    opacity: 0.5;\n    display: block;\n    font-size: 18px;\n}\n\n.breadcrumb[_ngcontent-%COMP%] {\n    padding: 8px 15px;\n    margin-bottom: 20px;\n    list-style: none;\n    background-color: transparent;\n    border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzREFBc0Q7SUFDdEQsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFHQTtJQUNJLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jbG9zZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbn1cblxuLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNjOGRiYztcbn1cblxuLm1haW4ge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogODglO1xufVxuXG5cbiNteVNpZGViYXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAvKiBib3gtc2hhZG93OiAycHggMHB4IDJweCByZ2JhKDAwMCwgMDAwLCAwMDAsIDAuNSk7ICovXG4gICAgd2lkdGg6IDEyJTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuI215U2lkZWJhciB1bCBsaSBhIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuXG4uY2FyZC1jb3VudGVyIHtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggI0RBREFEQTtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0cmFuc2l0aW9uOiAuM3MgbGluZWFyIGFsbDtcbn1cblxuLmNhcmQtY291bnRlcjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAyMHB4ICNEQURBREE7XG4gICAgdHJhbnNpdGlvbjogLjNzIGxpbmVhciBhbGw7XG59XG5cbi5jYXJkLWNvdW50ZXIucHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLmNhcmQtY291bnRlci5kYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjUzNTA7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi5jYXJkLWNvdW50ZXIuc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2YmI2YTtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLmNhcmQtY291bnRlci5pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZjNmRhO1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG4uY2FyZC1jb3VudGVyIGkge1xuICAgIGZvbnQtc2l6ZTogNWVtO1xuICAgIG9wYWNpdHk6IDAuMjtcbn1cblxuLmNhcmQtY291bnRlciAuY291bnQtbnVtYmVycyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzNXB4O1xuICAgIHRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jYXJkLWNvdW50ZXIgLmNvdW50LW5hbWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzVweDtcbiAgICB0b3A6IDY1cHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5icmVhZGNydW1iIHtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [{
            type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
          }, {
            type: _services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]
          }, {
            type: _services_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"]
          }, {
            type: _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_4__["PurchaseOrderService"]
          }, {
            type: _services_sales_order_service__WEBPACK_IMPORTED_MODULE_5__["SalesOrderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AfT/":
    /*!***********************************************!*\
      !*** ./src/app/_services/category.service.ts ***!
      \***********************************************/

    /*! exports provided: CategoryService */

    /***/
    function AfT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
        return CategoryService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_model/http-client-helper */
      "aj3h");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CategoryService = /*#__PURE__*/function () {
        function CategoryService(http) {
          _classCallCheck(this, CategoryService);

          this.http = http;
          this.baseUrl = _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__["HttpClientHelper"].baseURL + '/category';
        }

        _createClass(CategoryService, [{
          key: "getCategory",
          value: function getCategory(id) {
            return this.http.get("".concat(this.baseUrl, "/").concat(id));
          } // tslint:disable-next-line: ban-types

        }, {
          key: "createCategory",
          value: function createCategory(category) {
            return this.http.post("".concat(this.baseUrl), category);
          } // tslint:disable-next-line: ban-types

        }, {
          key: "updateCategory",
          value: function updateCategory(value) {
            return this.http.put("".concat(this.baseUrl), value);
          }
        }, {
          key: "deleteCategory",
          value: function deleteCategory(id) {
            return this.http["delete"]("".concat(this.baseUrl, "/").concat(id), {
              responseType: 'text'
            });
          }
        }, {
          key: "getCategoryList",
          value: function getCategoryList() {
            return this.http.get("".concat(this.baseUrl));
          }
        }]);

        return CategoryService;
      }();

      CategoryService.ɵfac = function CategoryService_Factory(t) {
        return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CategoryService,
        factory: CategoryService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Aulu":
    /*!********************************************************************!*\
      !*** ./src/app/locations/location-list/location-list.component.ts ***!
      \********************************************************************/

    /*! exports provided: LocationListComponent */

    /***/
    function Aulu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationListComponent", function () {
        return LocationListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _create_location_create_location_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../create-location/create-location.component */
      "bXlC");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/customer.service */
      "TZGB");
      /* harmony import */


      var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/location.service */
      "BAgB");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function LocationListComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LocationListComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r8.cityName, " ");
        }
      }

      function LocationListComponent_td_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.id, " ");
        }
      }

      function LocationListComponent_th_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LocationListComponent_td_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationListComponent_td_17_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var element_r10 = ctx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.updateLocationModal(element_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationListComponent_td_17_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var element_r10 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.deleteLocation(element_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r11);
        }
      }

      function LocationListComponent_tr_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
        }
      }

      function LocationListComponent_tr_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
        }
      }

      var _c0 = function _c0() {
        return [15, 30, 50];
      };

      var LocationListComponent = /*#__PURE__*/function () {
        function LocationListComponent(dialog, customerService, locationService) {
          _classCallCheck(this, LocationListComponent);

          this.dialog = dialog;
          this.customerService = customerService;
          this.locationService = locationService;
          this.displayedColumns = ['cityName', 'id'];
        }

        _createClass(LocationListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getLocationList();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var _this12 = this;

            var dialogRef = this.dialog.open(_create_location_create_location_component__WEBPACK_IMPORTED_MODULE_3__["CreateLocationComponent"], {
              width: '550px'
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');

              _this12.getLocationList();
            });
          }
        }, {
          key: "updateLocationModal",
          value: function updateLocationModal(_updateLocationModal) {
            var _this13 = this;

            var dialogRef = this.dialog.open(_create_location_create_location_component__WEBPACK_IMPORTED_MODULE_3__["CreateLocationComponent"], {
              width: '550px',
              data: {
                data: _updateLocationModal
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');

              _this13.getLocationList();
            });
          }
        }, {
          key: "getLocationList",
          value: function getLocationList() {
            var _this14 = this;

            this.locationService.getLocationList().subscribe(function (data) {
              _this14.dataSource = data;
              _this14.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
              _this14.dataSource.paginator = _this14.paginator;
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "deleteLocation",
          value: function deleteLocation(event) {
            var _this15 = this;

            this.locationService.deleteLocation(event.id).subscribe(function (response) {
              _this15.getLocationList();
            }, function (error) {
              return console.log(error);
            });
          }
        }]);

        return LocationListComponent;
      }();

      LocationListComponent.ɵfac = function LocationListComponent_Factory(t) {
        return new (t || LocationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"]));
      };

      LocationListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LocationListComponent,
        selectors: [["app-location-list"]],
        viewQuery: function LocationListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 21,
        vars: 6,
        consts: [[2, "width", "300px"], ["matInput", "", 3, "keyup"], ["input", ""], [1, "pull-right"], [1, "btn", "btn-info", "btn-sm", 2, "height", "35px", "width", "150px", 3, "click"], [1, "mat-elevation-z8"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "cityName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["hidden", "", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"], ["mat-header-cell", ""], ["mat-cell", ""], ["hidden", "", "mat-cell", ""], ["aria-label", "Example icon-button with a menu", "mat-icon-button", "", 1, "kebab-menu-btn", 3, "matMenuTriggerFor"], [1, "kebab-menu"], [2, "background-color", "#f7f3f3"], ["menu", "matMenu"], [1, "btn", "btn-info", 2, "width", "80px", "margin-left", "15px", 3, "click"], [1, "btn", "btn-danger", 2, "margin-top", "5px", "width", "80px", "margin-left", "15px", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function LocationListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function LocationListComponent_Template_input_keyup_4_listener($event) {
              return ctx.applyFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationListComponent_Template_button_click_7_listener() {
              return ctx.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add Location ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LocationListComponent_th_12_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LocationListComponent_td_13_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LocationListComponent_td_14_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LocationListComponent_th_16_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LocationListComponent_td_17_Template, 13, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LocationListComponent_tr_18_Template, 1, 0, "tr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LocationListComponent_tr_19_Template, 1, 0, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-paginator", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("pageSize", 15);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenu"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n    background-color: #ababab;\n    font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQiIsImZpbGUiOiJsb2NhdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxudGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYmFiYWI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-location-list',
            templateUrl: './location-list.component.html',
            styleUrls: ['./location-list.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]
          }, {
            type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "BAgB":
    /*!***********************************************!*\
      !*** ./src/app/_services/location.service.ts ***!
      \***********************************************/

    /*! exports provided: LocationService */

    /***/
    function BAgB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationService", function () {
        return LocationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_model/http-client-helper */
      "aj3h");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var LocationService = /*#__PURE__*/function () {
        function LocationService(http) {
          _classCallCheck(this, LocationService);

          this.http = http;
          this.baseUrl = _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__["HttpClientHelper"].baseURL + '/location';
        }

        _createClass(LocationService, [{
          key: "getLocation",
          value: function getLocation(id) {
            return this.http.get("".concat(this.baseUrl, "/").concat(id));
          }
        }, {
          key: "createLocation",
          value: function createLocation(Location) {
            return this.http.post("".concat(this.baseUrl), Location);
          }
        }, {
          key: "updateLocation",
          value: function updateLocation(value) {
            return this.http.put("".concat(this.baseUrl), value);
          }
        }, {
          key: "deleteLocation",
          value: function deleteLocation(id) {
            return this.http["delete"]("".concat(this.baseUrl, "/").concat(id), {
              responseType: 'text'
            });
          }
        }, {
          key: "getLocationList",
          value: function getLocationList() {
            return this.http.get("".concat(this.baseUrl));
          }
        }]);

        return LocationService;
      }();

      LocationService.ɵfac = function LocationService_Factory(t) {
        return new (t || LocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LocationService,
        factory: LocationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "BDUJ":
    /*!**************************************************!*\
      !*** ./src/app/_model/customer-balance-sheet.ts ***!
      \**************************************************/

    /*! exports provided: CustomerBalanceSheet */

    /***/
    function BDUJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerBalanceSheet", function () {
        return CustomerBalanceSheet;
      });

      var CustomerBalanceSheet = function CustomerBalanceSheet() {
        _classCallCheck(this, CustomerBalanceSheet);
      };
      /***/

    },

    /***/
    "Cw76":
    /*!*****************************************************************!*\
      !*** ./src/app/products/product-list/product-list.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ProductListComponent */

    /***/
    function Cw76(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
        return ProductListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../create-product/create-product.component */
      "445I");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/product.service */
      "szdb");
      /* harmony import */


      var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/company.service */
      "feko");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProductListComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductListComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.productName, " ");
        }
      }

      function ProductListComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductListComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.category == null ? null : element_r18.category.categoryName, " ");
        }
      }

      function ProductListComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Qty Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductListComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.qty, " ");
        }
      }

      function ProductListComponent_th_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Rate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductListComponent_td_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r20.price, "1.0-2"), " ");
        }
      }

      function ProductListComponent_th_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " HAN/SAC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductListComponent_td_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r21.hsnNo, "");
        }
      }

      function ProductListComponent_th_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " GST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductListComponent_td_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r22.gst, "%");
        }
      }

      function ProductListComponent_th_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductListComponent_td_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_td_31_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var element_r23 = ctx.$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.updateProduct(element_r23);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_td_31_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var element_r23 = ctx.$implicit;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.deleteProduct(element_r23.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_td_31_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var element_r23 = ctx.$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.productDetails(element_r23.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r24);
        }
      }

      function ProductListComponent_tr_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 28);
        }
      }

      function ProductListComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 29);
        }
      }

      var _c0 = function _c0() {
        return [15, 30, 50];
      };

      var ProductListComponent = /*#__PURE__*/function () {
        function ProductListComponent(dialog, productService, companyService) {
          _classCallCheck(this, ProductListComponent);

          this.dialog = dialog;
          this.productService = productService;
          this.companyService = companyService;
          this.displayedColumns = ['productName', 'category', 'price', 'qty', 'GST', 'HSN/SAC', 'productDesc'];
        }

        _createClass(ProductListComponent, [{
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProductList();
          }
        }, {
          key: "getProductList",
          value: function getProductList() {
            var _this16 = this;

            this.productService.getProductsList().subscribe(function (res) {
              _this16.dataSource = res;
              _this16.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res);
              _this16.dataSource.paginator = _this16.paginator;
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "createProduct",
          value: function createProduct() {
            var _this17 = this;

            var dialogRef = this.dialog.open(_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_3__["CreateProductComponent"], {
              width: '550px'
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');

              _this17.getProductList();
            });
          }
        }, {
          key: "updateProduct",
          value: function updateProduct(_updateProduct) {
            var _this18 = this;

            var dialogRef = this.dialog.open(_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_3__["CreateProductComponent"], {
              width: '550px',
              data: {
                data: _updateProduct
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');

              _this18.getProductList();
            });
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct(productId) {
            var _this19 = this;

            this.productService.deleteProduct(productId).subscribe(function (response) {
              _this19.getProductList();
            }, function (error) {
              return console.log(error);
            });
          }
        }]);

        return ProductListComponent;
      }();

      ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
        return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"]));
      };

      ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductListComponent,
        selectors: [["app-product-list"]],
        viewQuery: function ProductListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 35,
        vars: 7,
        consts: [[2, "width", "300px"], ["matInput", "", 3, "keyup"], ["input", ""], [1, "pull-right"], [1, "btn", "btn-info", "btn-sm", 2, "height", "35px", "width", "150px", 3, "click"], [1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "productName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "category"], ["matColumnDef", "qty"], ["matColumnDef", "price"], ["matColumnDef", "HSN/SAC"], ["matColumnDef", "GST"], ["matColumnDef", "productDesc"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"], ["mat-header-cell", ""], ["mat-cell", ""], ["aria-label", "Example icon-button with a menu", "mat-icon-button", "", 1, "kebab-menu-btn", 3, "matMenuTriggerFor"], [1, "kebab-menu"], [2, "background-color", "#f7f3f3"], ["menu", "matMenu"], [1, "btn", "btn-info", 2, "width", "80px", "margin-left", "15px", 3, "click"], [1, "btn", "btn-danger", 2, "margin-top", "5px", "width", "80px", "margin-left", "15px", 3, "click"], [1, "btn", "btn-info", 2, "margin-top", "5px", "width", "80px", "margin-left", "15px", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function ProductListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProductListComponent_Template_input_keyup_4_listener($event) {
              return ctx.applyFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_7_listener() {
              return ctx.createProduct();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add Product ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductListComponent_th_12_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductListComponent_td_13_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProductListComponent_th_15_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProductListComponent_td_16_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProductListComponent_th_18_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProductListComponent_td_19_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProductListComponent_th_21_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProductListComponent_td_22_Template, 3, 4, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProductListComponent_th_24_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProductListComponent_td_25_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProductListComponent_th_27_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProductListComponent_td_28_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProductListComponent_th_30_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProductListComponent_td_31_Template, 15, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProductListComponent_tr_32_Template, 1, 0, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ProductListComponent_tr_33_Template, 1, 0, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-paginator", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("pageSize", 15);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenu"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DecimalPipe"]],
        styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n    background-color: #ababab;\n    font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkIiLCJmaWxlIjoicHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbnRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJhYmFiO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-list',
            templateUrl: './product-list.component.html',
            styleUrls: ['./product-list.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
          }, {
            type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "EN+z":
    /*!************************************************************!*\
      !*** ./src/app/create-product/create-product.component.ts ***!
      \************************************************************/

    /*! exports provided: CreateProductComponent */

    /***/
    function ENZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateProductComponent", function () {
        return CreateProductComponent;
      });
      /* harmony import */


      var _model_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_model/product */
      "TpFj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/product.service */
      "szdb");
      /* harmony import */


      var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_services/category.service */
      "AfT/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var CreateProductComponent = /*#__PURE__*/function () {
        function CreateProductComponent(productService, categoryService, router) {
          _classCallCheck(this, CreateProductComponent);

          this.productService = productService;
          this.categoryService = categoryService;
          this.router = router;
          this.product = new _model_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();
          this.submitted = false;
        }

        _createClass(CreateProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reloadData();
          }
        }, {
          key: "reloadData",
          value: function reloadData() {
            this.categories = this.categoryService.getCategoryList();
          }
        }, {
          key: "newProduct",
          value: function newProduct() {
            this.submitted = false;
            this.product = new _model_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();
          }
        }, {
          key: "save",
          value: function save() {
            var _this20 = this;

            this.productService.createProduct(this.product).subscribe(function (data) {
              console.log(data);
              _this20.product = new _model_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();

              _this20.gotoList();
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.submitted = true;
            console.log(this.product);
            this.save();
          }
        }, {
          key: "gotoList",
          value: function gotoList() {
            this.router.navigate(['/products']);
          }
        }]);

        return CreateProductComponent;
      }();

      CreateProductComponent.ɵfac = function CreateProductComponent_Factory(t) {
        return new (t || CreateProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      CreateProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CreateProductComponent,
        selectors: [["app-create-productt"]],
        decls: 5,
        vars: 2,
        consts: [[2, "width", "400px", 3, "hidden"], [3, "ngSubmit"], [3, "hidden"]],
        template: function CreateProductComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CreateProductComponent_Template_form_ngSubmit_1_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "You submitted successfully!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.submitted);
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateProductComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-create-productt',
            templateUrl: './create-product.component.html'
          }]
        }], function () {
          return [{
            type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
          }, {
            type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "FQmJ":
    /*!****************************************************!*\
      !*** ./src/app/_services/token-storage.service.ts ***!
      \****************************************************/

    /*! exports provided: TokenStorageService */

    /***/
    function FQmJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
        return TokenStorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TOKEN_KEY = 'auth-token';
      var USER_KEY = 'auth-user';

      var TokenStorageService = /*#__PURE__*/function () {
        function TokenStorageService() {
          _classCallCheck(this, TokenStorageService);
        }

        _createClass(TokenStorageService, [{
          key: "signOut",
          value: function signOut() {
            window.sessionStorage.clear();
          }
        }, {
          key: "saveToken",
          value: function saveToken(token) {
            window.sessionStorage.removeItem(TOKEN_KEY);
            window.sessionStorage.setItem(TOKEN_KEY, token);
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return sessionStorage.getItem(TOKEN_KEY);
          }
        }, {
          key: "saveUser",
          value: function saveUser(user) {
            window.sessionStorage.removeItem(USER_KEY);
            window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return JSON.parse(sessionStorage.getItem(USER_KEY));
          }
        }]);

        return TokenStorageService;
      }();

      TokenStorageService.ɵfac = function TokenStorageService_Factory(t) {
        return new (t || TokenStorageService)();
      };

      TokenStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TokenStorageService,
        factory: TokenStorageService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenStorageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "HxLs":
    /*!****************************************************************!*\
      !*** ./src/app/reports/sales-report/sales-report.component.ts ***!
      \****************************************************************/

    /*! exports provided: SalesReportComponent */

    /***/
    function HxLs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalesReportComponent", function () {
        return SalesReportComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_sales_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../_services/sales-order.service */
      "RQfM");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      function SalesReportComponent_ng_template_0_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SalesReportComponent_ng_template_0_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r28.product == null ? null : element_r28.product.id, " ");
        }
      }

      function SalesReportComponent_ng_template_0_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Product Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SalesReportComponent_ng_template_0_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r29.product == null ? null : element_r29.product.productName, " ");
        }
      }

      function SalesReportComponent_ng_template_0_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sales Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SalesReportComponent_ng_template_0_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r30.salesPrice, " ");
        }
      }

      function SalesReportComponent_ng_template_0_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Order Qty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SalesReportComponent_ng_template_0_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r31.qtyOrdered, " ");
        }
      }

      function SalesReportComponent_ng_template_0_tr_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
        }
      }

      function SalesReportComponent_ng_template_0_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
        }
      }

      function SalesReportComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SalesReportComponent_ng_template_0_th_2_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SalesReportComponent_ng_template_0_td_3_Template, 2, 1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SalesReportComponent_ng_template_0_th_5_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SalesReportComponent_ng_template_0_td_6_Template, 2, 1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SalesReportComponent_ng_template_0_th_8_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SalesReportComponent_ng_template_0_td_9_Template, 2, 1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SalesReportComponent_ng_template_0_th_11_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SalesReportComponent_ng_template_0_td_12_Template, 2, 1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SalesReportComponent_ng_template_0_tr_13_Template, 1, 0, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SalesReportComponent_ng_template_0_tr_14_Template, 1, 0, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r1.dataSource[0] == null ? null : ctx_r1.dataSource[0].salesOrderDetail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.productColumns)("matHeaderRowDefSticky", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r1.productColumns);
        }
      }

      function SalesReportComponent_th_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sales Order ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["right", "auto"];
      };

      function SalesReportComponent_td_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r0)("placement", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r33.salesOrderID, " ");
        }
      }

      function SalesReportComponent_th_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SalesReportComponent_td_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r34.customer == null ? null : element_r34.customer.customerName, " ");
        }
      }

      function SalesReportComponent_th_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Amount Paid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SalesReportComponent_td_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r35.amountPaid, " ");
        }
      }

      function SalesReportComponent_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SalesReportComponent_td_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r36.totalPrice, " ");
        }
      }

      function SalesReportComponent_th_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Created Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SalesReportComponent_td_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r37.createdDate, " ");
        }
      }

      function SalesReportComponent_th_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SalesReportComponent_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r38.status, " ");
        }
      }

      function SalesReportComponent_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total Qty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SalesReportComponent_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r39.totalQty, " ");
        }
      }

      function SalesReportComponent_tr_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
        }
      }

      function SalesReportComponent_tr_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
        }
      }

      var SalesReportComponent = /*#__PURE__*/function () {
        function SalesReportComponent(salesOrderService) {
          _classCallCheck(this, SalesReportComponent);

          this.salesOrderService = salesOrderService;
          this.displayedColumns = ['salesOrderID', 'customerName', 'amountPaid', 'totalPrice', 'createdDate', 'status', 'totalQty'];
          this.productColumns = ['id', 'productName', 'salesPrice', 'qtyOrdered'];
          this.dataSource = [{
            "createdDate": "2021-05-12T03:14:14.902",
            "createdBy": "anonymousUser",
            "lastModifiedDate": "2021-05-12T03:14:14.902",
            "lastModifiedBy": "anonymousUser",
            "salesOrderID": 20,
            "totalPrice": 15297.916666666666,
            "amountPaid": 0,
            "currentBalance": 15297.916666666666,
            "previousBalance": 0,
            "totalQty": 2,
            "status": null,
            "customer": {
              "id": 1,
              "customerName": "Kallappa",
              "location": {
                "id": 1,
                "cityName": "Shinal",
                "createdDate": "2021-05-10T17:04:03.843+0000"
              },
              "phoneNumber": "9878923745",
              "createdDate": "2021-05-10T17:04:03.932+0000"
            },
            "salesOrderDetail": [{
              "salesOrderDetailID": 21,
              "product": {
                "id": 1,
                "productName": "Urea",
                "price": 224.16666666666666,
                "currentPrice": 0,
                "category": {
                  "id": 1,
                  "categoryName": "Fertilizer",
                  "categoryDesc": "fertilizer desc",
                  "createdDate": "2021-05-10T17:04:03.958+0000"
                },
                "productDesc": "urea desc",
                "qty": 110,
                "createdDate": "2021-05-10T17:04:03.998+0000"
              },
              "qtyOrdered": 10,
              "salesPrice": 0,
              "purchasePrice": 224.16666666666666,
              "profit": -2242
            }, {
              "salesOrderDetailID": 22,
              "product": {
                "id": 2,
                "productName": "Tanger",
                "price": 945.9002463054186,
                "currentPrice": 0,
                "category": {
                  "id": 3,
                  "categoryName": "Pesticide",
                  "categoryDesc": "pestiside desc",
                  "createdDate": "2021-05-10T17:04:03.961+0000"
                },
                "productDesc": "tanger desc",
                "qty": 203,
                "createdDate": "2021-05-10T17:04:04.001+0000"
              },
              "qtyOrdered": 10,
              "salesPrice": 0,
              "purchasePrice": 1275.625,
              "profit": -12756
            }]
          }, {
            "createdDate": "2021-05-12T03:14:14.902",
            "createdBy": "anonymousUser",
            "lastModifiedDate": "2021-05-12T03:14:14.902",
            "lastModifiedBy": "anonymousUser",
            "salesOrderID": 20,
            "totalPrice": 15297.916666666666,
            "amountPaid": 0,
            "currentBalance": 15297.916666666666,
            "previousBalance": 0,
            "totalQty": 2,
            "status": null,
            "customer": {
              "id": 1,
              "customerName": "Kallappa",
              "location": {
                "id": 1,
                "cityName": "Shinal",
                "createdDate": "2021-05-10T17:04:03.843+0000"
              },
              "phoneNumber": "9878923745",
              "createdDate": "2021-05-10T17:04:03.932+0000"
            },
            "salesOrderDetail": [{
              "salesOrderDetailID": 21,
              "product": {
                "id": 1,
                "productName": "Urea",
                "price": 224.16666666666666,
                "currentPrice": 0,
                "category": {
                  "id": 1,
                  "categoryName": "Fertilizer",
                  "categoryDesc": "fertilizer desc",
                  "createdDate": "2021-05-10T17:04:03.958+0000"
                },
                "productDesc": "urea desc",
                "qty": 110,
                "createdDate": "2021-05-10T17:04:03.998+0000"
              },
              "qtyOrdered": 10,
              "salesPrice": 0,
              "purchasePrice": 224.16666666666666,
              "profit": -2242
            }, {
              "salesOrderDetailID": 22,
              "product": {
                "id": 2,
                "productName": "Tanger",
                "price": 945.9002463054186,
                "currentPrice": 0,
                "category": {
                  "id": 3,
                  "categoryName": "Pesticide",
                  "categoryDesc": "pestiside desc",
                  "createdDate": "2021-05-10T17:04:03.961+0000"
                },
                "productDesc": "tanger desc",
                "qty": 203,
                "createdDate": "2021-05-10T17:04:04.001+0000"
              },
              "qtyOrdered": 10,
              "salesPrice": 0,
              "purchasePrice": 1275.625,
              "profit": -12756
            }]
          }, {
            "createdDate": "2021-05-12T03:14:14.902",
            "createdBy": "anonymousUser",
            "lastModifiedDate": "2021-05-12T03:14:14.902",
            "lastModifiedBy": "anonymousUser",
            "salesOrderID": 20,
            "totalPrice": 15297.916666666666,
            "amountPaid": 0,
            "currentBalance": 15297.916666666666,
            "previousBalance": 0,
            "totalQty": 2,
            "status": null,
            "customer": {
              "id": 1,
              "customerName": "Kallappa",
              "location": {
                "id": 1,
                "cityName": "Shinal",
                "createdDate": "2021-05-10T17:04:03.843+0000"
              },
              "phoneNumber": "9878923745",
              "createdDate": "2021-05-10T17:04:03.932+0000"
            },
            "salesOrderDetail": [{
              "salesOrderDetailID": 21,
              "product": {
                "id": 1,
                "productName": "Urea",
                "price": 224.16666666666666,
                "currentPrice": 0,
                "category": {
                  "id": 1,
                  "categoryName": "Fertilizer",
                  "categoryDesc": "fertilizer desc",
                  "createdDate": "2021-05-10T17:04:03.958+0000"
                },
                "productDesc": "urea desc",
                "qty": 110,
                "createdDate": "2021-05-10T17:04:03.998+0000"
              },
              "qtyOrdered": 10,
              "salesPrice": 0,
              "purchasePrice": 224.16666666666666,
              "profit": -2242
            }, {
              "salesOrderDetailID": 22,
              "product": {
                "id": 2,
                "productName": "Tanger",
                "price": 945.9002463054186,
                "currentPrice": 0,
                "category": {
                  "id": 3,
                  "categoryName": "Pesticide",
                  "categoryDesc": "pestiside desc",
                  "createdDate": "2021-05-10T17:04:03.961+0000"
                },
                "productDesc": "tanger desc",
                "qty": 203,
                "createdDate": "2021-05-10T17:04:04.001+0000"
              },
              "qtyOrdered": 10,
              "salesPrice": 0,
              "purchasePrice": 1275.625,
              "profit": -12756
            }]
          }];
        }

        _createClass(SalesReportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSalesOrderList();
          }
        }, {
          key: "getSalesOrderList",
          value: function getSalesOrderList() {
            this.salesOrderService.getSalesOrderList().subscribe(function (res) {// this.dataSource = res;
            }, function (error) {
              return console.log(error);
            });
          }
        }]);

        return SalesReportComponent;
      }();

      SalesReportComponent.ɵfac = function SalesReportComponent_Factory(t) {
        return new (t || SalesReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sales_order_service__WEBPACK_IMPORTED_MODULE_1__["SalesOrderService"]));
      };

      SalesReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SalesReportComponent,
        selectors: [["app-sales-report"]],
        decls: 26,
        vars: 4,
        consts: [["test", ""], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "salesOrderID"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "customerName"], ["matColumnDef", "amountPaid"], ["matColumnDef", "totalPrice"], ["matColumnDef", "createdDate"], ["matColumnDef", "status"], ["matColumnDef", "totalQty"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "id"], ["matColumnDef", "productName"], ["matColumnDef", "salesPrice"], ["matColumnDef", "qtyOrdered"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["type", "button", "triggers", "mouseenter:mouseleave", 1, "btn", 3, "ngbPopover", "placement"]],
        template: function SalesReportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SalesReportComponent_ng_template_0_Template, 15, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SalesReportComponent_th_4_Template, 2, 0, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SalesReportComponent_td_5_Template, 3, 4, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SalesReportComponent_th_7_Template, 2, 0, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SalesReportComponent_td_8_Template, 2, 1, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SalesReportComponent_th_10_Template, 2, 0, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SalesReportComponent_td_11_Template, 2, 1, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SalesReportComponent_th_13_Template, 2, 0, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SalesReportComponent_td_14_Template, 2, 1, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SalesReportComponent_th_16_Template, 2, 0, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SalesReportComponent_td_17_Template, 2, 1, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SalesReportComponent_th_19_Template, 2, 0, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SalesReportComponent_td_20_Template, 2, 1, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SalesReportComponent_th_22_Template, 2, 0, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SalesReportComponent_td_23_Template, 2, 1, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SalesReportComponent_tr_24_Template, 1, 0, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SalesReportComponent_tr_25_Template, 1, 0, "tr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopover"]],
        styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNhbGVzLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesReportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sales-report',
            templateUrl: './sales-report.component.html',
            styleUrls: ['./sales-report.component.css']
          }]
        }], function () {
          return [{
            type: _services_sales_order_service__WEBPACK_IMPORTED_MODULE_1__["SalesOrderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Lgm+":
    /*!*******************************************************************!*\
      !*** ./src/app/menu/action-bar-item/action-bar-item.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ActionBarItemComponent */

    /***/
    function Lgm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionBarItemComponent", function () {
        return ActionBarItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ActionBarItemComponent = function ActionBarItemComponent() {
        _classCallCheck(this, ActionBarItemComponent);

        this.shadow = false;
      };

      ActionBarItemComponent.ɵfac = function ActionBarItemComponent_Factory(t) {
        return new (t || ActionBarItemComponent)();
      };

      ActionBarItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ActionBarItemComponent,
        selectors: [["app-action-bar-item"]],
        inputs: {
          shadow: "shadow"
        },
        decls: 7,
        vars: 2,
        consts: [[1, "action-bar-item"], [1, "hamburger-container"], [1, "bar1"], [1, "bar2"], [1, "bar3"], ["_ngcontent-c1", "", 1, "action-bar-item-text"]],
        template: function ActionBarItemComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("shadow-sm", ctx.shadow);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYmFyLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionBarItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-action-bar-item',
            templateUrl: './action-bar-item.component.html',
            styleUrls: ['./action-bar-item.component.css']
          }]
        }], null, {
          shadow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "MBi1":
    /*!************************************************************************!*\
      !*** ./src/app/suppliers/create-supplier/create-supplier.component.ts ***!
      \************************************************************************/

    /*! exports provided: CreateSupplierComponent */

    /***/
    function MBi1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateSupplierComponent", function () {
        return CreateSupplierComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_services_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_services/supplier.service */
      "8LTU");
      /* harmony import */


      var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/location.service */
      "BAgB");
      /* harmony import */


      var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/company.service */
      "feko");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function CreateSupplierComponent_mat_option_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var location_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", location_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", location_r2.cityName, " ");
        }
      }

      function CreateSupplierComponent_mat_option_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var company_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", company_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r3.companyName);
        }
      }

      var CreateSupplierComponent = /*#__PURE__*/function () {
        function CreateSupplierComponent(supplierService, location, companyService, dialogRef, data) {
          _classCallCheck(this, CreateSupplierComponent);

          this.supplierService = supplierService;
          this.location = location;
          this.companyService = companyService;
          this.dialogRef = dialogRef;
          this.data = data;
          this.supplierUpdateData = data;
          this.supplierForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            cityName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            supplierName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            gstIn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
          });
          this.locationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            cityName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });

          if (data != null) {
            this.supplierForm.controls['supplierName'].setValue(this.supplierUpdateData.data.supplierName);
            this.supplierForm.controls['gstIn'].setValue(this.supplierUpdateData.data.gstIn);
            this.supplierForm.controls['phoneNumber'].setValue(this.supplierUpdateData.data.phoneNumber);
            this.supplierForm.controls['cityName'].setValue(this.supplierUpdateData.data.location.cityName);
            this.supplierForm.controls['companyName'].setValue(this.supplierUpdateData.data.location.companyName);
          }
        }

        _createClass(CreateSupplierComponent, [{
          key: "closeModal",
          value: function closeModal() {
            this.dialogRef.close();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCompanyList();
            this.getlocationList();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _a;

            if (((_a = this.supplierUpdateData) === null || _a === void 0 ? void 0 : _a.data.id) != null) {// this.updateCustomer();
            } else {
              this.saveSupplier();
            }
          }
        }, {
          key: "saveSupplier",
          value: function saveSupplier() {
            var _this21 = this;

            var data = {
              supplierName: this.supplierForm.controls.supplierName.value,
              gstIn: this.supplierForm.controls.gstIn.value,
              location: this.supplierForm.controls.cityName.value,
              company: this.supplierForm.controls.companyName.value,
              phoneNumber: this.supplierForm.controls.phoneNumber.value
            };
            this.supplierService.createSupplier(data).subscribe(function (res) {
              if (res != null) {
                _this21.successMsg = 'Supplier Successfully Created..!'; // this.getCompanyList();

                _this21.closeModal();
              }
            }, function (error) {
              _this21.errorMsg = error.error.errorMessage;
            });
          } // updateCustomer() {
          //   let data = {
          //     companyID: this.companyUpdateData?.data.id,
          //     companyName: this.customerForm.controls.companyName.value,
          //     phoneNumber: this.customerForm.controls.phoneNumber.value
          //   }
          //   this.customerService.updateCompany(data).subscribe(res => {
          //     if (res != null) {
          //       this.successMsg = "Company Successfully Updated..!";
          //       this.getCompanyList();
          //       this.closeModal();
          //     }
          //   }, error => {
          //     this.errorMsg = error.error.errorMessage; "Company Unsuccessfully Updated..";
          //   })
          // }

        }, {
          key: "getlocationList",
          value: function getlocationList() {
            var _this22 = this;

            this.location.getLocationList().subscribe(function (res) {
              _this22.citiesList = res;
            });
          }
        }, {
          key: "getCompanyList",
          value: function getCompanyList() {
            var _this23 = this;

            this.companyService.getCompanyList().subscribe(function (res) {
              _this23.companies = res;
            });
          }
        }]);

        return CreateSupplierComponent;
      }();

      CreateSupplierComponent.ɵfac = function CreateSupplierComponent_Factory(t) {
        return new (t || CreateSupplierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      CreateSupplierComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateSupplierComponent,
        selectors: [["app-create-supplier"]],
        decls: 33,
        vars: 6,
        consts: [[1, "product-conatiner"], [1, "title-header"], [1, "title"], [3, "formGroup"], [1, "forms-fildes"], ["matInput", "", "placeholder", "Supplier Name", "formControlName", "supplierName"], ["matInput", "", "placeholder", "GSTIN", "formControlName", "gstIn"], ["placeholder", "City", "formControlName", "cityName"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "company Name", "formControlName", "companyName"], ["matInput", "", "placeholder", "Phone Number", "formControlName", "phoneNumber"], [1, "button-container"], ["aria-label", "Close", 1, "btn", "btn-warning", 2, "width", "25%", "margin-left", "5px", 3, "click"], [1, "btn", "btn-primary", 2, "width", "25%", "margin-left", "5px", "border-radius", "10px", 3, "disabled", "click"], [2, "color", "green"], [2, "color", "red"], [3, "value"]],
        template: function CreateSupplierComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Supplier");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CreateSupplierComponent_mat_option_15_Template, 2, 2, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CreateSupplierComponent_mat_option_19_Template, 2, 2, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateSupplierComponent_Template_button_click_24_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateSupplierComponent_Template_button_click_26_listener() {
              return ctx.saveSupplier();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.supplierForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.citiesList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.supplierForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.successMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMsg);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]],
        styles: [".title[_ngcontent-%COMP%]{\n    font-weight: 500;\n    font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1zdXBwbGllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkIiLCJmaWxlIjoiY3JlYXRlLXN1cHBsaWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateSupplierComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-supplier',
            templateUrl: './create-supplier.component.html',
            styleUrls: ['./create-supplier.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"]
          }, {
            type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"]
          }, {
            type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "MOdX":
    /*!***********************************!*\
      !*** ./src/app/_model/company.ts ***!
      \***********************************/

    /*! exports provided: Company */

    /***/
    function MOdX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Company", function () {
        return Company;
      });

      var Company = function Company() {
        _classCallCheck(this, Company);
      };
      /***/

    },

    /***/
    "MhES":
    /*!*****************************************************!*\
      !*** ./src/app/ui_modules/table/table.component.ts ***!
      \*****************************************************/

    /*! exports provided: TableComponent */

    /***/
    function MhES(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableComponent", function () {
        return TableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _utils_numToWords_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../utils/numToWords.js */
      "oT6E");
      /* harmony import */


      var src_app_services_token_storage_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services/token-storage.service.js */
      "3zzm");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TableComponent_tr_92_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cart_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r3 + 1, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cart_r2 == null ? null : cart_r2.product == null ? null : cart_r2.product.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cart_r2 == null ? null : cart_r2.product == null ? null : cart_r2.product.hsnNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", (cart_r2 == null ? null : cart_r2.price.toLocaleString("en-IN")) || 0, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((cart_r2 == null ? null : cart_r2.qtyOrdered) || 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ((cart_r2 == null ? null : cart_r2.price) * (cart_r2 == null ? null : cart_r2.qtyOrdered)).toLocaleString("en-IN") || 0, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cart_r2 == null ? null : cart_r2.product == null ? null : cart_r2.product.gst, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ((cart_r2 == null ? null : cart_r2.product == null ? null : cart_r2.product.gst) * cart_r2.price * cart_r2.qtyOrdered / 100).toLocaleString("en-IN"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9", (cart_r2.price * cart_r2.qtyOrdered + (cart_r2 == null ? null : cart_r2.product == null ? null : cart_r2.product.gst) * cart_r2.price * cart_r2.qtyOrdered / 100).toLocaleString("en-IN"), " ");
        }
      }

      function TableComponent_div_116_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A/c no:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Branch:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "IFSC code:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.user == null ? null : ctx_r1.user.bankAccount == null ? null : ctx_r1.user.bankAccount.bankName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user == null ? null : ctx_r1.user.bankAccount == null ? null : ctx_r1.user.bankAccount.accountNo, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user == null ? null : ctx_r1.user.bankAccount == null ? null : ctx_r1.user.bankAccount.branchName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user == null ? null : ctx_r1.user.bankAccount == null ? null : ctx_r1.user.bankAccount.ifscCode, " ");
        }
      }

      var TableComponent = /*#__PURE__*/function () {
        function TableComponent(tokenStorageService) {
          _classCallCheck(this, TableComponent);

          this.tokenStorageService = tokenStorageService;
          this.totalPrice = 0;
          this.amountInWords = '';
          this.user = null;
        }

        _createClass(TableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('this.response', JSON.stringify(window['response']));
            var purchaseOrder = window['response'];

            if (!purchaseOrder) {
              var invoiceData = sessionStorage.getItem('invoiceData');

              if (invoiceData) {
                purchaseOrder = JSON.parse(invoiceData);
              }
            } else {
              sessionStorage.setItem('invoiceData', JSON.stringify(purchaseOrder));
            }

            this.response = purchaseOrder;
            document.title = 'Tax Invoice';

            this._calculateTotals();

            this.user = this.tokenStorageService.getUser();
          }
        }, {
          key: "printPDF",
          value: function printPDF() {
            window.print();
          }
        }, {
          key: "_calculateTotals",
          value: function _calculateTotals() {
            var _a, _b, _c;

            var totalPrice = 0;
            console.log('response?.purchaseOrderDetail', (_a = this.response) === null || _a === void 0 ? void 0 : _a.purchaseOrderDetail);
            (_c = (_b = this.response) === null || _b === void 0 ? void 0 : _b.purchaseOrderDetail) === null || _c === void 0 ? void 0 : _c.forEach(function (purchaseOrder) {
              var _a;

              var amount = (purchaseOrder === null || purchaseOrder === void 0 ? void 0 : purchaseOrder.price) * (purchaseOrder === null || purchaseOrder === void 0 ? void 0 : purchaseOrder.qtyOrdered);
              var taxAmount = amount * ((_a = purchaseOrder === null || purchaseOrder === void 0 ? void 0 : purchaseOrder.product) === null || _a === void 0 ? void 0 : _a.gst) / 100;
              totalPrice += amount + taxAmount;
            });
            this.totalPrice = Math.round(totalPrice);
            this.amountInWords = Object(_utils_numToWords_js__WEBPACK_IMPORTED_MODULE_1__["numberInWords"])(this.totalPrice);
          }
        }]);

        return TableComponent;
      }();

      TableComponent.ɵfac = function TableComponent_Factory(t) {
        return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_storage_service_js__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]));
      };

      TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TableComponent,
        selectors: [["app-table"]],
        decls: 156,
        vars: 28,
        consts: [[1, "page-content", "container"], [1, "page-header", "text-blue-d2"], [1, "container", "px-0"], [1, "row", "pt-4"], [1, "col-12", "col-lg-10", "offset-lg-1"], [1, "d-flex"], ["src", "/assets/images/logo.png", "alt", "image", 1, "logo"], [2, "text-align", "center", "width", "55%"], [1, "text-sm", "text-grey-m2", "align-middle", "font-weight-bold"], [1, "text-sm", "text-grey-m2", "align-middle"], [1, "row", "brc-default-l1", "mx-n1", "mb-4"], [1, "row"], [1, "col-sm-6"], [1, "my-2"], [1, "text-sm", "text-grey-m2", "align-middle", "font-weight-bold", "my-2"], [1, "text-600", "text-110", "text-blue", "align-middle"], [1, "text-95", "col-sm-6", "align-self-start", "d-sm-flex", "justify-content-end"], [1, "d-sm-none"], [1, "text-grey-m2"], [1, "text-600", "text-90", "font-weight-bold"], [1, "text-600", "text-90"], [1, "table", "table-bordered"], ["scope", "col"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"], ["colspan", "8"], [1, "text-lg", "text-grey-m2", "align-middle", "font-weight-bold"], [4, "ngIf"], [1, "text-300", "text-30"], [1, "print-btn", 2, "text-align", "center"], [3, "click"]],
        template: function TableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Supplier Name: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " GSTIN/UIN: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Mobile Number: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Address: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Bill Date:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Due Date:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Bill Status:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Motor Vehicle no:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "table", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "SI.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "NO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Item & Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "HSN/SAC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Quantity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "CGST/SGST ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " IGST Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Tax Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Total Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, TableComponent_tr_92_Template, 19, 9, "tr", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Amount chargeable(in words):");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Payment Mode:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Cash ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "PhonePe:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " NA ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, TableComponent_div_116_Template, 19, 4, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "hr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Amount Paid: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Current Balance: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Previous Balance: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Total Pay Balance:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Authorised Signatory");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "This is a computer generated invoice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_Template_button_click_154_listener() {
              return ctx.printPDF();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user == null ? null : ctx.user.brandName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("GST: ", ctx.user == null ? null : ctx.user.gstNo, " | PAN: ", ctx.user == null ? null : ctx.user.panNo, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("P: ", ctx.user == null ? null : ctx.user.phoneNumber, " | E: ", ctx.user == null ? null : ctx.user.email, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.response == null ? null : ctx.response.supplier == null ? null : ctx.response.supplier.supplierName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.response == null ? null : ctx.response.supplier == null ? null : ctx.response.supplier.gstIn, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.response == null ? null : ctx.response.supplier == null ? null : ctx.response.supplier.phoneNumber, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.response == null ? null : ctx.response.supplier == null ? null : ctx.response.supplier.location == null ? null : ctx.response.supplier.location.cityName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 22, ctx.response == null ? null : ctx.response.createdDate, "dd/MM/yyyy hh:mm:ss"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](53, 25, ctx.response == null ? null : ctx.response.dueDate, "dd/MM/yyyy hh:mm:ss"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.response == null ? null : ctx.response.status, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.response == null ? null : ctx.response.vehicleNo, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.response == null ? null : ctx.response.purchaseOrderDetail);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx.totalPrice.toLocaleString("en-IN"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.amountInWords, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.bankAccount != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9", (ctx.response == null ? null : ctx.response.amountPaid.toLocaleString("en-IN")) || 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9", (ctx.response == null ? null : ctx.response.currentBalance.toLocaleString("en-IN")) || 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9", ((ctx.response == null ? null : ctx.response.previousBalance) - (ctx.response == null ? null : ctx.response.currentBalance) >= 0 ? (ctx.response == null ? null : ctx.response.previousBalance) - (ctx.response == null ? null : ctx.response.currentBalance) : 0).toLocaleString("en-IN") || 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9", (ctx.response == null ? null : ctx.response.previousBalance.toLocaleString("en-IN")) || 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx.user == null ? null : ctx.user.brandName, ")");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
        styles: [".logo[_ngcontent-%COMP%] {\n  width: 180px;\n}\n\n.print-btn[_ngcontent-%COMP%]{\n  margin-top: 10px;\n}\n\n@media print {\n  .print-btn[_ngcontent-%COMP%]{\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gIHdpZHRoOiAxODBweDtcbn1cblxuLnByaW50LWJ0bntcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgLnByaW50LWJ0bntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_token_storage_service_js__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QhWZ":
    /*!*****************************************************!*\
      !*** ./src/app/_services/purchase-order.service.ts ***!
      \*****************************************************/

    /*! exports provided: PurchaseOrderService */

    /***/
    function QhWZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PurchaseOrderService", function () {
        return PurchaseOrderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_model/http-client-helper */
      "aj3h");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var PurchaseOrderService = /*#__PURE__*/function () {
        function PurchaseOrderService(http) {
          _classCallCheck(this, PurchaseOrderService);

          this.http = http;
          this.baseUrl = _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__["HttpClientHelper"].baseURL + '/purchaseOrder';
        }

        _createClass(PurchaseOrderService, [{
          key: "createPurchaseOrder",
          value: function createPurchaseOrder(invoice) {
            return this.http.post("".concat(this.baseUrl), invoice);
          }
        }, {
          key: "getPurchaseOrderList",
          value: function getPurchaseOrderList() {
            return this.http.get("".concat(this.baseUrl));
          }
        }, {
          key: "getPurchaseOrderBalaceBySupplier",
          value: function getPurchaseOrderBalaceBySupplier(supplierID) {
            return this.http.get("".concat(this.baseUrl, "/supplier/").concat(supplierID));
          }
        }, {
          key: "getAllSupplierPurchaseOrderBalace",
          value: function getAllSupplierPurchaseOrderBalace() {
            return this.http.get("".concat(this.baseUrl, "/supplier"));
          }
        }, {
          key: "getAllSupplierPurchaseOrderBalanceSheet",
          value: function getAllSupplierPurchaseOrderBalanceSheet() {
            return this.http.get("".concat(this.baseUrl, "/supplier/balance"));
          }
        }]);

        return PurchaseOrderService;
      }();

      PurchaseOrderService.ɵfac = function PurchaseOrderService_Factory(t) {
        return new (t || PurchaseOrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      PurchaseOrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PurchaseOrderService,
        factory: PurchaseOrderService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseOrderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RQch":
    /*!******************************************************************!*\
      !*** ./src/app/companies/company-list/company-list.component.ts ***!
      \******************************************************************/

    /*! exports provided: CompanyListComponent */

    /***/
    function RQch(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyListComponent", function () {
        return CompanyListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _create_company_create_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../create-company/create-company.component */
      "j4kV");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/customer.service */
      "TZGB");
      /* harmony import */


      var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/company.service */
      "feko");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function CompanyListComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CompanyListComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.companyName, " ");
        }
      }

      function CompanyListComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CompanyListComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.phoneNumber, " ");
        }
      }

      function CompanyListComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CompanyListComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyListComponent_td_19_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var element_r11 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.updateComapny(element_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyListComponent_td_19_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var element_r11 = ctx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.deleteCompany(element_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r12);
        }
      }

      function CompanyListComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
        }
      }

      function CompanyListComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
        }
      }

      var _c0 = function _c0() {
        return [15, 30, 50];
      };

      var CompanyListComponent = /*#__PURE__*/function () {
        function CompanyListComponent(dialog, customerService, companyService) {
          _classCallCheck(this, CompanyListComponent);

          this.dialog = dialog;
          this.customerService = customerService;
          this.companyService = companyService;
          this.displayedColumns = ['companyName', 'phoneNumber', 'id'];
        }

        _createClass(CompanyListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCompanyList();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var _this24 = this;

            var dialogRef = this.dialog.open(_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_3__["CreateCompanyComponent"], {
              width: '550px'
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');

              _this24.getCompanyList();
            });
          }
        }, {
          key: "updateComapny",
          value: function updateComapny(_updateComapny) {
            var _this25 = this;

            var dialogRef = this.dialog.open(_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_3__["CreateCompanyComponent"], {
              width: '550px',
              data: {
                data: _updateComapny
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');

              _this25.getCompanyList();
            });
          }
        }, {
          key: "getCompanyList",
          value: function getCompanyList() {
            var _this26 = this;

            this.companyService.getCompanyList().subscribe(function (data) {
              _this26.dataSource = data;
              _this26.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
              _this26.dataSource.paginator = _this26.paginator;
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "deleteCompany",
          value: function deleteCompany(event) {
            var _this27 = this;

            this.companyService.deleteCompany(event.id).subscribe(function (response) {
              _this27.getCompanyList();
            }, function (error) {
              return console.log(error);
            });
          }
        }]);

        return CompanyListComponent;
      }();

      CompanyListComponent.ɵfac = function CompanyListComponent_Factory(t) {
        return new (t || CompanyListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"]));
      };

      CompanyListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CompanyListComponent,
        selectors: [["app-company-list"]],
        viewQuery: function CompanyListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 23,
        vars: 6,
        consts: [[2, "width", "300px"], ["matInput", "", 3, "keyup"], ["input", ""], [1, "pull-right"], [1, "btn", "btn-info", "btn-sm", 2, "height", "35px", "width", "150px", 3, "click"], [1, "mat-elevation-z8"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "companyName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "phoneNumber"], ["matColumnDef", "id"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"], ["mat-header-cell", ""], ["mat-cell", ""], ["aria-label", "Example icon-button with a menu", "mat-icon-button", "", 1, "kebab-menu-btn", 3, "matMenuTriggerFor"], [1, "kebab-menu"], [2, "background-color", "#f7f3f3"], ["menu", "matMenu"], [1, "btn", "btn-info", 2, "width", "80px", "margin-left", "15px", 3, "click"], [1, "btn", "btn-danger", 2, "margin-top", "5px", "width", "80px", "margin-left", "15px", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function CompanyListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CompanyListComponent_Template_input_keyup_4_listener($event) {
              return ctx.applyFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyListComponent_Template_button_click_7_listener() {
              return ctx.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add Company ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CompanyListComponent_th_12_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CompanyListComponent_td_13_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CompanyListComponent_th_15_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CompanyListComponent_td_16_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CompanyListComponent_th_18_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CompanyListComponent_td_19_Template, 13, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CompanyListComponent_tr_20_Template, 1, 0, "tr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CompanyListComponent_tr_21_Template, 1, 0, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-paginator", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("pageSize", 15);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenu"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n    background-color: #ababab;\n    font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnktbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CIiwiZmlsZSI6ImNvbXBhbnktbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbnRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJhYmFiO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-company-list',
            templateUrl: './company-list.component.html',
            styleUrls: ['./company-list.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]
          }, {
            type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "RQfM":
    /*!**************************************************!*\
      !*** ./src/app/_services/sales-order.service.ts ***!
      \**************************************************/

    /*! exports provided: SalesOrderService */

    /***/
    function RQfM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalesOrderService", function () {
        return SalesOrderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_model/http-client-helper */
      "aj3h");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var SalesOrderService = /*#__PURE__*/function () {
        function SalesOrderService(http) {
          _classCallCheck(this, SalesOrderService);

          this.http = http;
          this.baseUrl = _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__["HttpClientHelper"].baseURL + '/salesOrder';
        }

        _createClass(SalesOrderService, [{
          key: "createSalesOrder",
          value: function createSalesOrder(invoice) {
            return this.http.post("".concat(this.baseUrl), invoice);
          }
        }, {
          key: "getSalesOrderList",
          value: function getSalesOrderList() {
            return this.http.get("".concat(this.baseUrl));
          }
        }, {
          key: "getSalesOrderBalaceByCustomer",
          value: function getSalesOrderBalaceByCustomer(customerID) {
            return this.http.get("".concat(this.baseUrl, "/customer/balance/").concat(customerID));
          }
        }, {
          key: "getAllCustomerSalesOrderBalance",
          value: function getAllCustomerSalesOrderBalance() {
            return this.http.get("".concat(this.baseUrl, "/customer/"));
          }
        }, {
          key: "getAllCustomerSalesOrderBalanceSheet",
          value: function getAllCustomerSalesOrderBalanceSheet() {
            return this.http.get("".concat(this.baseUrl, "/customer/balance"));
          }
        }]);

        return SalesOrderService;
      }();

      SalesOrderService.ɵfac = function SalesOrderService_Factory(t) {
        return new (t || SalesOrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      SalesOrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SalesOrderService,
        factory: SalesOrderService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesOrderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./_services/token-storage.service */
      "FQmJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(tokenStorageService) {
          _classCallCheck(this, AppComponent);

          this.tokenStorageService = tokenStorageService;
          this.title = 'RK FERTILIZER';
          this.isLoggedIn = false;
          this.showAdminBoard = false;
          this.showModeratorBoard = false;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.isLoggedIn = !!this.tokenStorageService.getToken();
            // if (this.isLoggedIn) {
            //   const user = this.tokenStorageService.getUser();
            //   this.roles = user.roles;
            //   // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            //   // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
            //   this.username = user.username;
            // }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        consts: [["id", "app"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "TTYc":
    /*!***********************************************************!*\
      !*** ./src/app/menu/mobile-menu/mobile-menu.component.ts ***!
      \***********************************************************/

    /*! exports provided: MobileMenuComponent */

    /***/
    function TTYc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MobileMenuComponent", function () {
        return MobileMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var MobileMenuComponent = /*#__PURE__*/function () {
        function MobileMenuComponent() {
          _classCallCheck(this, MobileMenuComponent);
        }

        _createClass(MobileMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MobileMenuComponent;
      }();

      MobileMenuComponent.ɵfac = function MobileMenuComponent_Factory(t) {
        return new (t || MobileMenuComponent)();
      };

      MobileMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MobileMenuComponent,
        selectors: [["app-mobile-menu"]],
        decls: 34,
        vars: 0,
        consts: [[1, "navbar", "navbar-expand-lg", "bg-primary", "navbar-dark"], ["href", "#", 1, "navbar-brand"], ["aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", "data-target", "#navbarSupportedContent", "data-toggle", "collapse", "type", "button", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "/dashboard", "routerLinkActive", "active", 1, "nav-link"], ["href", "/dashboard/products", 1, "nav-link"], ["href", "/dashboard/salesOrder", 1, "nav-link"], ["href", "/dashboard/add", 1, "nav-link"], ["href", "/dashboard/addCategory", 1, "nav-link"], ["href", "/dashboard/supplier", 1, "nav-link"], ["href", "/dashboard/location", 1, "nav-link"], ["href", "/dashboard/company", 1, "nav-link"], ["href", "/dashboard/customer", 1, "nav-link"]],
        template: function MobileMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " LOCATION");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " COMPANY");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " CUSTOMER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2JpbGUtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileMenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-mobile-menu',
            templateUrl: './mobile-menu.component.html',
            styleUrls: ['./mobile-menu.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "TZGB":
    /*!***********************************************!*\
      !*** ./src/app/_services/customer.service.ts ***!
      \***********************************************/

    /*! exports provided: CustomerService */

    /***/
    function TZGB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
        return CustomerService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_model/http-client-helper */
      "aj3h");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CustomerService = /*#__PURE__*/function () {
        function CustomerService(http) {
          _classCallCheck(this, CustomerService);

          this.http = http;
          this.baseUrl = _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__["HttpClientHelper"].baseURL + '/customer';
        }

        _createClass(CustomerService, [{
          key: "getCustomer",
          value: function getCustomer(id) {
            return this.http.get("".concat(this.baseUrl, "/").concat(id));
          } // tslint:disable-next-line: ban-types

        }, {
          key: "createCustomer",
          value: function createCustomer(customer) {
            return this.http.post("".concat(this.baseUrl), customer);
          } // tslint:disable-next-line: ban-types

        }, {
          key: "updateCustomer",
          value: function updateCustomer(value) {
            return this.http.put("".concat(this.baseUrl), value);
          }
        }, {
          key: "deleteCustomer",
          value: function deleteCustomer(id) {
            return this.http["delete"]("".concat(this.baseUrl, "/").concat(id), {
              responseType: 'text'
            });
          }
        }, {
          key: "getCustomerList",
          value: function getCustomerList() {
            return this.http.get("".concat(this.baseUrl));
          }
        }]);

        return CustomerService;
      }();

      CustomerService.ɵfac = function CustomerService_Factory(t) {
        return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      CustomerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CustomerService,
        factory: CustomerService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "TpFj":
    /*!***********************************!*\
      !*** ./src/app/_model/product.ts ***!
      \***********************************/

    /*! exports provided: Product */

    /***/
    function TpFj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Product", function () {
        return Product;
      });

      var Product = function Product() {
        _classCallCheck(this, Product);
      };
      /***/

    },

    /***/
    "U5Cf":
    /*!********************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
      \********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function U5Cf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _menu_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../menu/action-bar/action-bar.component */
      "jD4/");
      /* harmony import */


      var _menu_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../menu/navigation-bar/navigation-bar.component */
      "2Uo4");
      /* harmony import */


      var _menu_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../menu/mobile-menu/mobile-menu.component */
      "TTYc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DashboardComponent_ng_template_8_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r2.urlPath.pop(), " ", item_r3, " ");
        }
      }

      function DashboardComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_ng_template_8_li_1_Template, 2, 2, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.urlPath);
        }
      }

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(router) {
          _classCallCheck(this, DashboardComponent);

          this.router = router;
          this.isVisible = false;
          this.urlPath = [];
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCurrentPage();
          }
        }, {
          key: "getCurrentPage",
          value: function getCurrentPage() {
            var _this28 = this;

            var path = this.router.url.split('/');

            if (path.length === 2 && path[1] === 'dashboard') {
              this.isVisible = true;
            }

            path.forEach(function (e) {
              if (e !== '') {
                _this28.urlPath.push(e);
              }
            });
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 13,
        vars: 0,
        consts: [[1, "app-container"], [1, "d-none", "d-sm-block"], [1, "main-container", "flex-fill"], [1, "d-block", "d-sm-none"], [1, "container-fluid", "mt-2"], [1, "row"], ["aria-label", "breadcrumb"], ["visibleCrum", ""], [1, "col-md-12"], [1, "breadcrumb"], ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-action-bar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-navigation-bar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-mobile-menu", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_ng_template_8_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_menu_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_2__["ActionBarComponent"], _menu_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavigationBarComponent"], _menu_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_4__["MobileMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        styles: [".close[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 20px;\n    padding: 10px;\n    background-color: #fff;\n    border-bottom: 1px solid #000;\n}\n\n.navbar[_ngcontent-%COMP%] {\n    background-color: #3c8dbc;\n}\n\n.main[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 100vh;\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n    float: left;\n    width: 88%;\n}\n\n#mySidebar[_ngcontent-%COMP%] {\n    height: 100vh;\n    background-color: #000;\n    \n    width: 12%;\n    float: left;\n}\n\n#mySidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff;\n}\n\n.card-counter[_ngcontent-%COMP%] {\n    box-shadow: 2px 2px 10px #DADADA;\n    margin: 5px;\n    padding: 20px 10px;\n    background-color: #fff;\n    height: 100px;\n    border-radius: 5px;\n    transition: .3s linear all;\n}\n\n.card-counter[_ngcontent-%COMP%]:hover {\n    box-shadow: 4px 4px 20px #DADADA;\n    transition: .3s linear all;\n}\n\n.card-counter.primary[_ngcontent-%COMP%] {\n    background-color: #007bff;\n    color: #FFF;\n}\n\n.card-counter.danger[_ngcontent-%COMP%] {\n    background-color: #ef5350;\n    color: #FFF;\n}\n\n.card-counter.success[_ngcontent-%COMP%] {\n    background-color: #66bb6a;\n    color: #FFF;\n}\n\n.card-counter.info[_ngcontent-%COMP%] {\n    background-color: #26c6da;\n    color: #FFF;\n}\n\n.card-counter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 5em;\n    opacity: 0.2;\n}\n\n.card-counter[_ngcontent-%COMP%]   .count-numbers[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 35px;\n    top: 20px;\n    font-size: 32px;\n    display: block;\n}\n\n.card-counter[_ngcontent-%COMP%]   .count-name[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 35px;\n    top: 65px;\n    font-style: italic;\n    text-transform: capitalize;\n    opacity: 0.5;\n    display: block;\n    font-size: 18px;\n}\n\n.breadcrumb[_ngcontent-%COMP%] {\n    padding: 8px 15px;\n    margin-bottom: 20px;\n    list-style: none;\n    background-color: transparent;\n    border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNEQUFzRDtJQUN0RCxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUdBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2xvc2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG59XG5cbi5uYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzhkYmM7XG59XG5cbi5tYWluIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDg4JTtcbn1cblxuXG4jbXlTaWRlYmFyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgLyogYm94LXNoYWRvdzogMnB4IDBweCAycHggcmdiYSgwMDAsIDAwMCwgMDAwLCAwLjUpOyAqL1xuICAgIHdpZHRoOiAxMiU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbiNteVNpZGViYXIgdWwgbGkgYSB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cblxuLmNhcmQtY291bnRlciB7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4ICNEQURBREE7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdHJhbnNpdGlvbjogLjNzIGxpbmVhciBhbGw7XG59XG5cbi5jYXJkLWNvdW50ZXI6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMjBweCAjREFEQURBO1xuICAgIHRyYW5zaXRpb246IC4zcyBsaW5lYXIgYWxsO1xufVxuXG4uY2FyZC1jb3VudGVyLnByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi5jYXJkLWNvdW50ZXIuZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY1MzUwO1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG4uY2FyZC1jb3VudGVyLnN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NmJiNmE7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi5jYXJkLWNvdW50ZXIuaW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YzZkYTtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLmNhcmQtY291bnRlciBpIHtcbiAgICBmb250LXNpemU6IDVlbTtcbiAgICBvcGFjaXR5OiAwLjI7XG59XG5cbi5jYXJkLWNvdW50ZXIgLmNvdW50LW51bWJlcnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzVweDtcbiAgICB0b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2FyZC1jb3VudGVyIC5jb3VudC1uYW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDM1cHg7XG4gICAgdG9wOiA2NXB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYnJlYWRjcnVtYiB7XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XSPX":
    /*!*************************************************************************!*\
      !*** ./src/app/categories/create-category/create-category.component.ts ***!
      \*************************************************************************/

    /*! exports provided: CreateCategoryComponent */

    /***/
    function XSPX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateCategoryComponent", function () {
        return CreateCategoryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_model_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_model/category */
      "aDtp");
      /* harmony import */


      var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/category.service */
      "AfT/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      function CreateCategoryComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateCategoryComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateCategoryComponent_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Category Name required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var CreateCategoryComponent = /*#__PURE__*/function () {
        function CreateCategoryComponent(categoryService, dialogRef, data) {
          _classCallCheck(this, CreateCategoryComponent);

          this.categoryService = categoryService;
          this.dialogRef = dialogRef;
          this.data = data;
          this.category = new src_app_model_category__WEBPACK_IMPORTED_MODULE_3__["Category"]();
          this.categoryUpdateData = data;
          this.categoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            categoryName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            categoryDesc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
          });

          if (data != null) {
            this.categoryForm.controls["categoryName"].setValue(this.categoryUpdateData.data.categoryName);
            this.categoryForm.controls["categoryDesc"].setValue(this.categoryUpdateData.data.categoryDesc);
          }
        }

        _createClass(CreateCategoryComponent, [{
          key: "closeModal",
          value: function closeModal() {
            this.dialogRef.close();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _a;

            if (((_a = this.categoryUpdateData) === null || _a === void 0 ? void 0 : _a.data.id) != null) {
              this.updateCategory();
            } else {
              this.saveCategory();
            }
          }
        }, {
          key: "saveCategory",
          value: function saveCategory() {
            var _this29 = this;

            var _a;

            var data = {
              id: (_a = this.categoryUpdateData) === null || _a === void 0 ? void 0 : _a.data.id,
              categoryName: this.categoryForm.controls.categoryName.value,
              categoryDesc: this.categoryForm.controls.categoryDesc.value
            };
            this.categoryService.createCategory(data).subscribe(function (res) {
              if (res != null) {
                _this29.successMsg = "Category Successfully Created..!";

                _this29.getCategoryList();

                _this29.closeModal();
              }
            }, function (error) {
              _this29.errorMsg = error.error.errorMessage;
            });
          }
        }, {
          key: "updateCategory",
          value: function updateCategory() {
            var _this30 = this;

            var _a;

            var data = {
              id: (_a = this.categoryUpdateData) === null || _a === void 0 ? void 0 : _a.data.id,
              categoryName: this.categoryForm.controls.categoryName.value,
              categoryDesc: this.categoryForm.controls.categoryDesc.value
            };
            this.categoryService.updateCategory(data).subscribe(function (res) {
              if (res != null) {
                _this30.successMsg = "Category Successfully Updated..!";

                _this30.getCategoryList();

                _this30.closeModal();
              }
            }, function (error) {
              _this30.errorMsg = error.error.errorMessage;
            });
          }
        }, {
          key: "getCategoryList",
          value: function getCategoryList() {
            this.categoryService.getCategoryList().subscribe(function (data) {}, function (error) {
              return console.log(error);
            });
          }
        }]);

        return CreateCategoryComponent;
      }();

      CreateCategoryComponent.ɵfac = function CreateCategoryComponent_Factory(t) {
        return new (t || CreateCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      CreateCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateCategoryComponent,
        selectors: [["app-create-category"]],
        decls: 22,
        vars: 7,
        consts: [[1, "product-conatiner"], ["class", "title-header", 4, "ngIf"], [3, "formGroup"], [1, "title-header"], [1, "forms-fildes"], ["matInput", "", "placeholder", "Category Name", "formControlName", "categoryName", "required", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Category description", "formControlName", "categoryDesc"], [1, "button-container"], ["aria-label", "Close", 1, "btn", "btn-warning", 2, "width", "25%", "margin-left", "5px", 3, "click"], [1, "btn", "btn-primary", 2, "width", "25%", "margin-left", "5px", 3, "disabled", "click"], [2, "color", "green"], [2, "color", "red"], [1, "title"]],
        template: function CreateCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateCategoryComponent_div_1_Template, 3, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateCategoryComponent_div_2_Template, 3, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateCategoryComponent_mat_error_8_Template, 2, 0, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateCategoryComponent_Template_button_click_13_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateCategoryComponent_Template_button_click_15_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.categoryUpdateData == null ? null : ctx.categoryUpdateData.data.id) == null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.categoryUpdateData == null ? null : ctx.categoryUpdateData.data.id) != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.categoryForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categoryForm.get("categoryName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.categoryForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.successMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMsg);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
        styles: [".title[_ngcontent-%COMP%]{\n    font-weight: 500;\n    font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkIiLCJmaWxlIjoiY3JlYXRlLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateCategoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-category',
            templateUrl: './create-category.component.html',
            styleUrls: ['./create-category.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Xzbv":
    /*!************************************!*\
      !*** ./src/app/_model/customer.ts ***!
      \************************************/

    /*! exports provided: Customer */

    /***/
    function Xzbv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Customer", function () {
        return Customer;
      });

      var Customer = function Customer() {
        _classCallCheck(this, Customer);
      };
      /***/

    },

    /***/
    "ZAGK":
    /*!**********************************************!*\
      !*** ./src/app/reports/reports.component.ts ***!
      \**********************************************/

    /*! exports provided: ReportsComponent */

    /***/
    function ZAGK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsComponent", function () {
        return ReportsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ReportsComponent = /*#__PURE__*/function () {
        function ReportsComponent() {
          _classCallCheck(this, ReportsComponent);
        }

        _createClass(ReportsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReportsComponent;
      }();

      ReportsComponent.ɵfac = function ReportsComponent_Factory(t) {
        return new (t || ReportsComponent)();
      };

      ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReportsComponent,
        selectors: [["app-reports"]],
        decls: 1,
        vars: 0,
        template: function ReportsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-reports',
            templateUrl: './reports.component.html',
            styleUrls: ['./reports.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _purchase_order_purchase_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./purchase-order/purchase-order.component */
      "7YO1");
      /* harmony import */


      var _sales_order_sales_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./sales-order/sales-order.component */
      "a+ZH");
      /* harmony import */


      var _balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./balance-sheet/balance-sheet.component */
      "8LCG");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");
      /* harmony import */


      var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pages/dashboard/dashboard.component */
      "U5Cf");
      /* harmony import */


      var _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./pages/notfound/notfound.component */
      "bPkx");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");
      /* harmony import */


      var _menu_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./menu/mobile-menu/mobile-menu.component */
      "TTYc");
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! primeng/table */
      "rEr+");
      /* harmony import */


      var _menu_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./menu/action-bar/action-bar.component */
      "jD4/");
      /* harmony import */


      var _menu_action_bar_item_action_bar_item_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./menu/action-bar-item/action-bar-item.component */
      "Lgm+");
      /* harmony import */


      var _menu_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./menu/navigation-bar/navigation-bar.component */
      "2Uo4");
      /* harmony import */


      var _pages_dashboard_categories_dashboard_categories_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./pages/dashboard-categories/dashboard-categories.component */
      "fQh4");
      /* harmony import */


      var _material_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./material.module */
      "vvyD");
      /* harmony import */


      var _customers_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./customers/create-customer/create-customer.component */
      "y11v");
      /* harmony import */


      var _customers_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./customers/customers-list/customers-list.component */
      "oe4g");
      /* harmony import */


      var _companies_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./companies/create-company/create-company.component */
      "j4kV");
      /* harmony import */


      var _companies_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./companies/company-list/company-list.component */
      "RQch");
      /* harmony import */


      var _categories_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./categories/category-list/category-list.component */
      "ZU6c");
      /* harmony import */


      var _suppliers_create_supplier_create_supplier_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./suppliers/create-supplier/create-supplier.component */
      "MBi1");
      /* harmony import */


      var _suppliers_supplier_list_supplier_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./suppliers/supplier-list/supplier-list.component */
      "paCs");
      /* harmony import */


      var _locations_location_list_location_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./locations/location-list/location-list.component */
      "Aulu");
      /* harmony import */


      var _locations_create_location_create_location_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./locations/create-location/create-location.component */
      "bXlC");
      /* harmony import */


      var _categories_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./categories/create-category/create-category.component */
      "XSPX");
      /* harmony import */


      var _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./products/product-list/product-list.component */
      "Cw76");
      /* harmony import */


      var _products_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./products/create-product/create-product.component */
      "445I");
      /* harmony import */


      var _ui_modules_table_table_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./ui_modules/table/table.component */
      "MhES");
      /* harmony import */


      var _ui_modules_table_sales_table_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./ui_modules/table/sales-table.component */
      "2RjZ");
      /* harmony import */


      var _reports_reports_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./reports/reports.component */
      "ZAGK");
      /* harmony import */


      var _reports_sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./reports/sales-report/sales-report.component */
      "HxLs");
      /* harmony import */


      var _reports_purchase_report_purchase_report_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./reports/purchase-report/purchase-report.component */
      "shVH");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[primeng_table__WEBPACK_IMPORTED_MODULE_22__["TableModule"], _material_module__WEBPACK_IMPORTED_MODULE_27__["DemoMaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["NgxPaginationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _products_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_39__["CreateProductComponent"], _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_38__["ProductListComponent"], _categories_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_37__["CreateCategoryComponent"], _purchase_order_purchase_order_component__WEBPACK_IMPORTED_MODULE_11__["PurchaseOrderComponent"], _customers_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_28__["CreateCustomerComponent"], _suppliers_create_supplier_create_supplier_component__WEBPACK_IMPORTED_MODULE_33__["CreateSupplierComponent"], _locations_create_location_create_location_component__WEBPACK_IMPORTED_MODULE_36__["CreateLocationComponent"], _sales_order_sales_order_component__WEBPACK_IMPORTED_MODULE_12__["SalesOrderComponent"], _balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_13__["BalanceSheetComponent"], _menu_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_23__["ActionBarComponent"], _menu_action_bar_item_action_bar_item_component__WEBPACK_IMPORTED_MODULE_24__["ActionBarItemComponent"], _menu_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_25__["NavigationBarComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"], _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_18__["NotfoundComponent"], _menu_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_21__["MobileMenuComponent"], _pages_dashboard_categories_dashboard_categories_component__WEBPACK_IMPORTED_MODULE_26__["DashboardCategoriesComponent"], _customers_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_29__["CustomersListComponent"], _companies_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_30__["CreateCompanyComponent"], _companies_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_31__["CompanyListComponent"], _categories_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_32__["CategoryListComponent"], _suppliers_create_supplier_create_supplier_component__WEBPACK_IMPORTED_MODULE_33__["CreateSupplierComponent"], _suppliers_supplier_list_supplier_list_component__WEBPACK_IMPORTED_MODULE_34__["SupplierListComponent"], _locations_location_list_location_list_component__WEBPACK_IMPORTED_MODULE_35__["LocationListComponent"], _ui_modules_table_table_component__WEBPACK_IMPORTED_MODULE_40__["TableComponent"], _ui_modules_table_sales_table_component__WEBPACK_IMPORTED_MODULE_41__["SalesTableComponent"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_42__["ReportsComponent"], _reports_sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_43__["SalesReportComponent"], _reports_purchase_report_purchase_report_component__WEBPACK_IMPORTED_MODULE_44__["PurchaseReportComponent"]],
          imports: [primeng_table__WEBPACK_IMPORTED_MODULE_22__["TableModule"], _material_module__WEBPACK_IMPORTED_MODULE_27__["DemoMaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["NgxPaginationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _products_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_39__["CreateProductComponent"], _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_38__["ProductListComponent"], _categories_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_37__["CreateCategoryComponent"], _purchase_order_purchase_order_component__WEBPACK_IMPORTED_MODULE_11__["PurchaseOrderComponent"], _customers_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_28__["CreateCustomerComponent"], _suppliers_create_supplier_create_supplier_component__WEBPACK_IMPORTED_MODULE_33__["CreateSupplierComponent"], _locations_create_location_create_location_component__WEBPACK_IMPORTED_MODULE_36__["CreateLocationComponent"], _sales_order_sales_order_component__WEBPACK_IMPORTED_MODULE_12__["SalesOrderComponent"], _balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_13__["BalanceSheetComponent"], _menu_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_23__["ActionBarComponent"], _menu_action_bar_item_action_bar_item_component__WEBPACK_IMPORTED_MODULE_24__["ActionBarItemComponent"], _menu_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_25__["NavigationBarComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"], _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_18__["NotfoundComponent"], _menu_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_21__["MobileMenuComponent"], _pages_dashboard_categories_dashboard_categories_component__WEBPACK_IMPORTED_MODULE_26__["DashboardCategoriesComponent"], _customers_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_29__["CustomersListComponent"], _companies_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_30__["CreateCompanyComponent"], _companies_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_31__["CompanyListComponent"], _categories_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_32__["CategoryListComponent"], _suppliers_create_supplier_create_supplier_component__WEBPACK_IMPORTED_MODULE_33__["CreateSupplierComponent"], _suppliers_supplier_list_supplier_list_component__WEBPACK_IMPORTED_MODULE_34__["SupplierListComponent"], _locations_location_list_location_list_component__WEBPACK_IMPORTED_MODULE_35__["LocationListComponent"], _ui_modules_table_table_component__WEBPACK_IMPORTED_MODULE_40__["TableComponent"], _ui_modules_table_sales_table_component__WEBPACK_IMPORTED_MODULE_41__["SalesTableComponent"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_42__["ReportsComponent"], _reports_sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_43__["SalesReportComponent"], _reports_purchase_report_purchase_report_component__WEBPACK_IMPORTED_MODULE_44__["PurchaseReportComponent"]],
            imports: [primeng_table__WEBPACK_IMPORTED_MODULE_22__["TableModule"], _material_module__WEBPACK_IMPORTED_MODULE_27__["DemoMaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["NgxPaginationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZU6c":
    /*!*********************************************************************!*\
      !*** ./src/app/categories/category-list/category-list.component.ts ***!
      \*********************************************************************/

    /*! exports provided: CategoryListComponent */

    /***/
    function ZU6c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function () {
        return CategoryListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../create-category/create-category.component */
      "XSPX");
      /* harmony import */


      var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/category.service */
      "AfT/");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function CategoryListComponent_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CategoryListComponent_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r8.categoryName, " ");
        }
      }

      function CategoryListComponent_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CategoryListComponent_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.categoryDesc, " ");
        }
      }

      function CategoryListComponent_th_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CategoryListComponent_td_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryListComponent_td_18_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var element_r10 = ctx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.updateCategory(element_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryListComponent_td_18_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var element_r10 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.deleteCategory(element_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r11);
        }
      }

      function CategoryListComponent_tr_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
        }
      }

      function CategoryListComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
        }
      }

      var _c0 = function _c0() {
        return [15, 30, 50];
      };

      var CategoryListComponent = /*#__PURE__*/function () {
        function CategoryListComponent(categoryService, dialog) {
          _classCallCheck(this, CategoryListComponent);

          this.categoryService = categoryService;
          this.dialog = dialog;
          this.displayedColumns = ['categoryName', 'categoryDesc', 'id'];
        }

        _createClass(CategoryListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCategoryList();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var _this31 = this;

            var dialogRef = this.dialog.open(_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_3__["CreateCategoryComponent"], {
              width: '550px'
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');

              _this31.getCategoryList();
            });
          }
        }, {
          key: "updateCategory",
          value: function updateCategory(_updateCategory) {
            var _this32 = this;

            var dialogRef = this.dialog.open(_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_3__["CreateCategoryComponent"], {
              width: '550px',
              data: {
                data: _updateCategory
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');

              _this32.getCategoryList();
            });
          }
        }, {
          key: "getCategoryList",
          value: function getCategoryList() {
            var _this33 = this;

            this.categoryService.getCategoryList().subscribe(function (data) {
              _this33.dataSource = data;
              _this33.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
              _this33.dataSource.paginator = _this33.paginator;
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "deleteCategory",
          value: function deleteCategory(event) {
            var _this34 = this;

            this.categoryService.deleteCategory(event.id).subscribe(function (response) {
              _this34.getCategoryList();
            }, function (error) {
              return console.log(error);
            });
          }
        }]);

        return CategoryListComponent;
      }();

      CategoryListComponent.ɵfac = function CategoryListComponent_Factory(t) {
        return new (t || CategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
      };

      CategoryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CategoryListComponent,
        selectors: [["app-category-list"]],
        viewQuery: function CategoryListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 22,
        vars: 6,
        consts: [[2, "width", "300px"], ["matInput", "", 3, "keyup"], [1, "pull-right"], [1, "btn", "btn-info", "btn-sm", 2, "height", "35px", "width", "150px", 3, "click"], [1, "mat-elevation-z8"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "categoryName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "categoryDesc"], ["matColumnDef", "id"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 1, "kebab-menu-btn", 3, "matMenuTriggerFor"], [1, "kebab-menu"], [2, "background-color", "#f7f3f3"], ["menu", "matMenu"], [1, "btn", "btn-info", 2, "width", "80px", "margin-left", "15px", 3, "click"], [1, "btn", "btn-danger", 2, "margin-top", "5px", "width", "80px", "margin-left", "15px", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function CategoryListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CategoryListComponent_Template_input_keyup_4_listener($event) {
              return ctx.applyFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryListComponent_Template_button_click_6_listener() {
              return ctx.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Category ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CategoryListComponent_th_11_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CategoryListComponent_td_12_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CategoryListComponent_th_14_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CategoryListComponent_td_15_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CategoryListComponent_th_17_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CategoryListComponent_td_18_Template, 13, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CategoryListComponent_tr_19_Template, 1, 0, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CategoryListComponent_tr_20_Template, 1, 0, "tr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-paginator", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("pageSize", 15);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenu"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  th[_ngcontent-%COMP%]{\n    background-color: #ababab;\n   font-size: 15px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0VBQ2I7RUFDQTtJQUNFLHlCQUF5QjtHQUMxQixlQUFlO0VBQ2hCIiwiZmlsZSI6ImNhdGVnb3J5LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIHRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYmFiYWI7XG4gICBmb250LXNpemU6IDE1cHg7XG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-category-list',
            templateUrl: './category-list.component.html',
            styleUrls: ['./category-list.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "a+ZH":
    /*!******************************************************!*\
      !*** ./src/app/sales-order/sales-order.component.ts ***!
      \******************************************************/

    /*! exports provided: SalesOrderComponent */

    /***/
    function aZH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalesOrderComponent", function () {
        return SalesOrderComponent;
      });
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _model_sales_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_model/sales-order */
      "9c9/");
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/product.service */
      "szdb");
      /* harmony import */


      var _services_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/customer.service */
      "TZGB");
      /* harmony import */


      var _services_sales_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../_services/sales-order.service */
      "RQfM");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function SalesOrderComponent_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var customer_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", customer_r35.customerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", customer_r35.customerName, " ");
        }
      }

      function SalesOrderComponent_mat_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", product_r36.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r36.productName, " ");
        }
      }

      function SalesOrderComponent_th_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "S. No");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SalesOrderComponent_td_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r38 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r38 + 1, ". ");
        }
      }

      function SalesOrderComponent_td_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SalesOrderComponent_th_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SalesOrderComponent_td_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SalesOrderComponent_td_40_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42);

            var i_r40 = ctx.index;

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r41.removeProduct(i_r40);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SalesOrderComponent_td_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 45);
        }
      }

      function SalesOrderComponent_th_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Item & Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SalesOrderComponent_td_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r43.get("product").value == null ? null : element_r43.get("product").value.productName);
        }
      }

      function SalesOrderComponent_td_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 45);
        }
      }

      function SalesOrderComponent_th_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Rate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SalesOrderComponent_td_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u20B9");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var index_r45 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", index_r45);
        }
      }

      function SalesOrderComponent_td_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 45);
        }
      }

      function SalesOrderComponent_th_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SalesOrderComponent_td_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r46 = ctx.$implicit;
          var index_r47 = ctx.index;
          var tmp_1_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", index_r47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", (tmp_1_0 = element_r46.get("product")) == null ? null : tmp_1_0.value == null ? null : tmp_1_0.value.qty);
        }
      }

      function SalesOrderComponent_td_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 45);
        }
      }

      function SalesOrderComponent_th_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SalesOrderComponent_td_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r48 = ctx.$implicit;
          var tmp_0_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u20B9", ((tmp_0_0 = element_r48.get("price")) == null ? null : tmp_0_0.value) * ((tmp_0_0 = element_r48.get("qtyOrdered")) == null ? null : tmp_0_0.value), "");
        }
      }

      function SalesOrderComponent_td_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 45);
        }
      }

      function SalesOrderComponent_th_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " CGST/SGST ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " IGST Rate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SalesOrderComponent_td_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r49 = ctx.$implicit;
          var tmp_0_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = element_r49.get("product")) == null ? null : tmp_0_0.value.gst, "%");
        }
      }

      function SalesOrderComponent_td_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 45);
        }
      }

      function SalesOrderComponent_th_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tax Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SalesOrderComponent_td_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r50 = ctx.$implicit;
          var tmp_0_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u20B9", ((tmp_0_0 = element_r50.get("price")) == null ? null : tmp_0_0.value) * ((tmp_0_0 = element_r50.get("qtyOrdered")) == null ? null : tmp_0_0.value) * ((tmp_0_0 = element_r50.get("product")) == null ? null : tmp_0_0.value.gst) / 100, " ");
        }
      }

      function SalesOrderComponent_td_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 45);
        }
      }

      function SalesOrderComponent_th_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Total Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SalesOrderComponent_td_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r51 = ctx.$implicit;
          var tmp_0_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u20B9", ((tmp_0_0 = element_r51.get("price")) == null ? null : tmp_0_0.value) * ((tmp_0_0 = element_r51.get("qtyOrdered")) == null ? null : tmp_0_0.value) + ((tmp_0_0 = element_r51.get("price")) == null ? null : tmp_0_0.value) * ((tmp_0_0 = element_r51.get("qtyOrdered")) == null ? null : tmp_0_0.value) * ((tmp_0_0 = element_r51.get("product")) == null ? null : tmp_0_0.value.gst) / 100, " ");
        }
      }

      function SalesOrderComponent_td_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r31.totalAmount, "INR"), " ");
        }
      }

      function SalesOrderComponent_tr_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 57);
        }
      }

      function SalesOrderComponent_tr_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 58);
        }
      }

      function SalesOrderComponent_tr_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 59);
        }
      }

      var SalesOrderComponent = /*#__PURE__*/function () {
        function SalesOrderComponent(_fb, productService, customerService, salesOrderService) {
          _classCallCheck(this, SalesOrderComponent);

          this._fb = _fb;
          this.productService = productService;
          this.customerService = customerService;
          this.salesOrderService = salesOrderService;
          this.displayedColumns = ['sno', 'action', 'item', 'price', 'quantity', 'amount', 'taxType', 'taxAmount', 'totalAmount'];
          this.previousBalance = 0;
          this.totalAmount = 0;
          this.customers = [];
          this.products = [];
        }

        _createClass(SalesOrderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fetchData();

            this._createForm();

            console.log('this.salesOrderForm', this.salesOrderForm);
          }
        }, {
          key: "removeProduct",
          value: function removeProduct(index) {
            this.salesOrderDetailArr.removeAt(index);
            this.salesOrderDetailData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.salesOrderDetailArr.controls);
          }
        }, {
          key: "selectedProduct",
          value: function selectedProduct(_selectedProduct2) {
            var product = this._findProduct(_selectedProduct2);

            this._addProduct(product);
          }
        }, {
          key: "selectedCustomer",
          value: function selectedCustomer(_selectedCustomer) {
            var customer = this._findCustomer(_selectedCustomer);

            this._customerBalanceData(customer === null || customer === void 0 ? void 0 : customer.id);
          }
        }, {
          key: "fetchData",
          value: function fetchData() {
            var _this35 = this;

            this.customerService.getCustomerList().subscribe(function (data) {
              _this35.customers = data;
            });
            this.productService.getProductsList().subscribe(function (data) {
              _this35.products = data;

              _this35._valueChangesListner();
            });
          }
        }, {
          key: "getCurrentBalance",
          value: function getCurrentBalance() {
            return this.totalAmount - this.amountPaid.value;
          }
        }, {
          key: "getTotalBalance",
          value: function getTotalBalance() {
            return this.previousBalance + this.getCurrentBalance();
          }
        }, {
          key: "save",
          value: function save() {
            var _this36 = this;

            var isStockAvail = true;
            this.salesOrderDetailArr.value.forEach(function (value) {
              if (value.product.qty < value.qtyOrdered) {
                alert('No Stock for product: ' + value.product.productName);
                isStockAvail = false;
              }

              if (value.qtyOrdered === 0) {
                alert('Please add Quantity to : ' + value.product.productName);
                isStockAvail = false;
              }
            });

            if (isStockAvail) {
              // console.log('this.salesOrderForm', this.salesOrderForm.value);
              var salesOrder = new _model_sales_order__WEBPACK_IMPORTED_MODULE_4__["SalesOrder"]();
              var customerName = this.salesOrderForm.get('customerName').value;

              var customer = this._findCustomer(customerName);

              salesOrder.customer = customer;
              salesOrder.currentBalance = this.getCurrentBalance();
              salesOrder.salesOrderDetail = this.salesOrderDetailArr.value;
              salesOrder.totalPrice = this.totalAmount;
              salesOrder.vehicleNo = this.salesOrderForm.get('motorVehicleNo').value;
              salesOrder.amountPaid = this.salesOrderForm.get('amountPaid').value;
              salesOrder.dueDate = this.salesOrderForm.get('dueDate').value;

              if (salesOrder.currentBalance <= 0) {
                salesOrder.status = 'PAID';
              } else if (salesOrder.amountPaid > 0) {
                salesOrder.status = 'PARTIAL';
              } else {
                salesOrder.status = 'DUE';
              }

              this.salesOrderService.createSalesOrder(salesOrder).subscribe(function (data) {
                console.log(data);

                _this36._printPdf(data);

                _this36.refreshAfterSave();
              }, function (error) {
                return console.log(error);
              });
            }
          }
        }, {
          key: "refreshAfterSave",
          value: function refreshAfterSave() {
            window.location.reload(); // this.previousBalance = 0;
            // this.salesOrderDetailData = [];
            // this._createForm();
          }
        }, {
          key: "_customerBalanceData",
          value: function _customerBalanceData(customerID) {
            var _this37 = this;

            this.salesOrderService.getSalesOrderBalaceByCustomer(customerID).subscribe(function (data) {
              _this37.previousBalance = data;
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "_printPdf",
          value: function _printPdf(response) {
            var url = "".concat(location.origin, "/#salesTable");
            var myWindow = window.open(url);
            myWindow['response'] = response;
          }
        }, {
          key: "_filterCustomer",
          value: function _filterCustomer(value) {
            if (!value) {
              return this.customers;
            }

            var filterValue = value.toLowerCase();
            var customerList = this.customers.filter(function (option) {
              return option.customerName.toLowerCase().indexOf(filterValue) === 0;
            });
            return customerList;
          }
        }, {
          key: "_filterProduct",
          value: function _filterProduct(value) {
            if (!value) {
              return this.products;
            }

            var filterValue = value.toLowerCase();
            return this.products.filter(function (option) {
              return option.productName.toLowerCase().indexOf(filterValue) === 0;
            });
          }
        }, {
          key: "_findProduct",
          value: function _findProduct(value) {
            return this.products.find(function (option) {
              return option.productName === value;
            });
          }
        }, {
          key: "_findCustomer",
          value: function _findCustomer(value) {
            return this.customers.find(function (option) {
              return option.customerName === value;
            });
          }
        }, {
          key: "_initRow",
          value: function _initRow(product) {
            return this._fb.group({
              price: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100000)]],
              qtyOrdered: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10000)]],
              product: [product]
            });
          }
        }, {
          key: "_addProduct",
          value: function _addProduct(product) {
            var newRow = this._initRow(product);

            this.salesOrderDetailArr.push(newRow);
            this.salesOrderDetailData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.salesOrderDetailArr.controls);
          }
        }, {
          key: "_valueChangesListner",
          value: function _valueChangesListner() {
            var _this38 = this;

            this.filteredCustomers = this.salesOrderForm.controls['customerName'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
              return _this38._filterCustomer(value);
            }));
            this.filteredProducts = this.salesOrderForm.controls['productName'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
              return _this38._filterProduct(value);
            }));
            this.salesOrderDetailArr.valueChanges.subscribe(function (productList) {
              var totalAmount = 0;
              productList.forEach(function (product) {
                var _a;

                var amount = Number(product.qtyOrdered) * Number(product.price);
                var taxAmount = amount * (((_a = product.product) === null || _a === void 0 ? void 0 : _a.gst) || 0) / 100;
                totalAmount += amount + taxAmount;
              });
              _this38.totalAmount = Math.round(totalAmount);
            });
          }
        }, {
          key: "_createForm",
          value: function _createForm() {
            this.salesOrderForm = this._fb.group({
              customerName: [''],
              productName: [''],
              motorVehicleNo: [''],
              dueDate: [new Date()],
              salesOrderDetail: this._fb.array([]),
              amountPaid: [0]
            });
          }
        }, {
          key: "salesOrderDetailArr",
          get: function get() {
            return this.salesOrderForm.get('salesOrderDetail');
          }
        }, {
          key: "amountPaid",
          get: function get() {
            return this.salesOrderForm.get('amountPaid');
          }
        }]);

        return SalesOrderComponent;
      }();

      SalesOrderComponent.ɵfac = function SalesOrderComponent_Factory(t) {
        return new (t || SalesOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_sales_order_service__WEBPACK_IMPORTED_MODULE_7__["SalesOrderService"]));
      };

      SalesOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SalesOrderComponent,
        selectors: [["app-sales-order"]],
        decls: 98,
        vars: 29,
        consts: [[3, "formGroup"], [1, "d-flex"], [1, "form-group", "col-3"], [1, "forms-fildes"], ["type", "text", "placeholder", "Select Customer", "aria-label", "Customer", "matInput", "", "formControlName", "customerName", 3, "matAutocomplete"], ["autoActiveFirstOption", "", 3, "optionSelected"], ["customerAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Select Product", "aria-label", "Product", "matInput", "", "formControlName", "productName", "required", "", 3, "matAutocomplete"], ["productAuto", "matAutocomplete"], ["type", "text", "placeholder", "Motor Vehicle No", "aria-label", "Motor Vehicle no", "matInput", "", "formControlName", "motorVehicleNo"], [1, "form-group", "col-2"], ["matInput", "", "formControlName", "dueDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "mat-elevation-z8", "sales-order-container"], ["formArrayName", "salesOrderDetail", "mat-table", "", 3, "dataSource"], ["matColumnDef", "sno"], ["mat-header-cell", "", "class", "text-left pr-4", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right pr-4", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "action"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "price"], ["mat-header-cell", "", "class", "text-right pr-4", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right pr-4", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "quantity"], ["matColumnDef", "amount"], ["matColumnDef", "taxType"], ["matColumnDef", "taxAmount"], ["matColumnDef", "totalAmount"], ["mat-footer-cell", "", "class", "text-right pr-4", 4, "matFooterCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], [1, "total-container"], ["for", "name"], ["type", "number", "formControlName", "amountPaid", "required", "", 1, "amount-edit"], [1, "amount-read-only"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], [3, "value"], ["mat-header-cell", "", 1, "text-left", "pr-4"], ["mat-cell", "", 1, "text-right", "pr-4"], ["mat-footer-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "aria-label", "Remove product", 3, "click"], ["mat-header-cell", ""], ["mat-header-cell", "", 1, "text-right", "pr-4"], ["mat-cell", "", 1, "text-right", "pr-4", 3, "formGroupName"], ["floatLabel", "never"], ["matInput", "", "placeholder", "Price", "type", "number", "formControlName", "price", "required", "", 1, "text-right"], ["matPrefix", ""], ["floatLabel", "never", 1, "text-right"], ["matInput", "", "type", "number", "formControlName", "qtyOrdered", "required", "", 3, "placeholder"], ["mat-footer-cell", "", 1, "text-right", "pr-4"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]],
        template: function SalesOrderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Customer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-autocomplete", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function SalesOrderComponent_Template_mat_autocomplete_optionSelected_7_listener($event) {
              return ctx.selectedCustomer($event.option.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SalesOrderComponent_mat_option_9_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-autocomplete", 5, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function SalesOrderComponent_Template_mat_autocomplete_optionSelected_16_listener($event) {
              return ctx.selectedProduct($event.option.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SalesOrderComponent_mat_option_18_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Motor Vehicle no");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Due date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "mat-datepicker-toggle", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "mat-datepicker", null, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "table", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](34, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, SalesOrderComponent_th_35_Template, 2, 0, "th", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, SalesOrderComponent_td_36_Template, 2, 1, "td", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, SalesOrderComponent_td_37_Template, 3, 0, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](38, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, SalesOrderComponent_th_39_Template, 2, 0, "th", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, SalesOrderComponent_td_40_Template, 4, 0, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, SalesOrderComponent_td_41_Template, 1, 0, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](42, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, SalesOrderComponent_th_43_Template, 2, 0, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, SalesOrderComponent_td_44_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, SalesOrderComponent_td_45_Template, 1, 0, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](46, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, SalesOrderComponent_th_47_Template, 2, 0, "th", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, SalesOrderComponent_td_48_Template, 5, 1, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, SalesOrderComponent_td_49_Template, 1, 0, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](50, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, SalesOrderComponent_th_51_Template, 2, 0, "th", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, SalesOrderComponent_td_52_Template, 3, 2, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, SalesOrderComponent_td_53_Template, 1, 0, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](54, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, SalesOrderComponent_th_55_Template, 2, 0, "th", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, SalesOrderComponent_td_56_Template, 2, 1, "td", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, SalesOrderComponent_td_57_Template, 1, 0, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](58, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, SalesOrderComponent_th_59_Template, 4, 0, "th", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, SalesOrderComponent_td_60_Template, 2, 1, "td", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, SalesOrderComponent_td_61_Template, 1, 0, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](62, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, SalesOrderComponent_th_63_Template, 2, 0, "th", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, SalesOrderComponent_td_64_Template, 2, 1, "td", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, SalesOrderComponent_td_65_Template, 1, 0, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](66, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, SalesOrderComponent_th_67_Template, 2, 0, "th", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, SalesOrderComponent_td_68_Template, 2, 1, "td", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, SalesOrderComponent_td_69_Template, 3, 4, "td", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, SalesOrderComponent_tr_70_Template, 1, 0, "tr", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, SalesOrderComponent_tr_71_Template, 1, 0, "tr", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, SalesOrderComponent_tr_72_Template, 1, 0, "tr", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Amount Paid ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Current Balance ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "span", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](83, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Previous Balance ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "span", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](89, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Total Pay Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "span", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](95, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SalesOrderComponent_Template_button_click_96_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.salesOrderForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 16, ctx.filteredCustomers));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 18, ctx.filteredProducts));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.salesOrderDetailData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matFooterRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](83, 20, ctx.getCurrentBalance(), "INR"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](89, 23, ctx.previousBalance, "INR"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](95, 26, ctx.getTotalBalance(), "INR"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.salesOrderForm.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatFooterRowDef"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatFooterCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatPrefix"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatFooterRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"]],
        styles: [".amount-read-only[_ngcontent-%COMP%] {\n  width: 100px;\n  display: inline-block;\n}\n\n.amount-edit[_ngcontent-%COMP%] {\n  width: 100px;\n  text-align: right;\n  margin-left: 4px;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #ababab;\n  font-size: 15px;\n}\n\n.total-container[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: right;\n}\n\n.sales-order-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 150px);\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.forms-fildes[_ngcontent-%COMP%] {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLW9yZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNhbGVzLW9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW1vdW50LXJlYWQtb25seSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYW1vdW50LWVkaXQge1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmFiYWI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRvdGFsLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uc2FsZXMtb3JkZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZm9ybXMtZmlsZGVzIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SalesOrderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-sales-order',
            templateUrl: './sales-order.component.html',
            styleUrls: ['./sales-order.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
          }, {
            type: _services_customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"]
          }, {
            type: _services_sales_order_service__WEBPACK_IMPORTED_MODULE_7__["SalesOrderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "aDtp":
    /*!************************************!*\
      !*** ./src/app/_model/category.ts ***!
      \************************************/

    /*! exports provided: Category */

    /***/
    function aDtp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Category", function () {
        return Category;
      });

      var Category = function Category() {
        _classCallCheck(this, Category);
      };
      /***/

    },

    /***/
    "aj3h":
    /*!**********************************************!*\
      !*** ./src/app/_model/http-client-helper.ts ***!
      \**********************************************/

    /*! exports provided: HttpClientHelper */

    /***/
    function aj3h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpClientHelper", function () {
        return HttpClientHelper;
      });

      var HttpClientHelper = function HttpClientHelper() {
        _classCallCheck(this, HttpClientHelper);
      }; //static baseURL: string = 'http://ec2-18-222-37-157.us-east-2.compute.amazonaws.com:8080';
      //Visual studio with backend


      HttpClientHelper.baseURL = 'http://localhost:8080';
      /***/
    },

    /***/
    "bPkx":
    /*!******************************************************!*\
      !*** ./src/app/pages/notfound/notfound.component.ts ***!
      \******************************************************/

    /*! exports provided: NotfoundComponent */

    /***/
    function bPkx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function () {
        return NotfoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NotfoundComponent = /*#__PURE__*/function () {
        function NotfoundComponent() {
          _classCallCheck(this, NotfoundComponent);
        }

        _createClass(NotfoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotfoundComponent;
      }();

      NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) {
        return new (t || NotfoundComponent)();
      };

      NotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotfoundComponent,
        selectors: [["app-notfound"]],
        decls: 9,
        vars: 0,
        consts: [[1, "container"], [1, "error-wrapper"], [1, "man-icon"], [1, "title"], [1, "info"], ["routerLink", "/dashboard", "type", "button", 1, "home-btn"]],
        template: function NotfoundComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: ["p[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  background: #f3f3f3;\n}\n\n.error-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.error-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: #000;\n}\n\n.error-wrapper[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.home-btn[_ngcontent-%COMP%], .home-btn[_ngcontent-%COMP%]:focus, .home-btn[_ngcontent-%COMP%]:hover, .home-btn[_ngcontent-%COMP%]:visited {\n  text-decoration: none;\n  font-size: 14px;\n  color: #55aa29;\n  padding: 17px 77px;\n  border: 1px solid #55aa29;\n  border-radius: 3px;\n  display: block;\n  margin: 20px 0;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  background-color: transparent;\n  outline: 0;\n}\n\n.man-icon[_ngcontent-%COMP%] {\n  background: url(\"https://www.hotstar.com/assets/b5e748831c911ca02f9c07afc11f2ae5.svg\") center center no-repeat;\n  display: inline-block;\n  height: 100px;\n  width: 118px;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vdGZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBOzs7O0VBSUUscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFJQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4R0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6Im5vdGZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCwgaDEsIGgyLCBoMywgaDQsIGg1IHtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbn1cblxuLmVycm9yLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lcnJvci13cmFwcGVyIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5lcnJvci13cmFwcGVyIC5pbmZvIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaG9tZS1idG4sXG4uaG9tZS1idG46Zm9jdXMsXG4uaG9tZS1idG46aG92ZXIsXG4uaG9tZS1idG46dmlzaXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzU1YWEyOTtcbiAgcGFkZGluZzogMTdweCA3N3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTVhYTI5O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5tYW4taWNvbiB7XG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly93d3cuaG90c3Rhci5jb20vYXNzZXRzL2I1ZTc0ODgzMWM5MTFjYTAyZjljMDdhZmMxMWYyYWU1LnN2ZycpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotfoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-notfound',
            templateUrl: './notfound.component.html',
            styleUrls: ['./notfound.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "bXlC":
    /*!************************************************************************!*\
      !*** ./src/app/locations/create-location/create-location.component.ts ***!
      \************************************************************************/

    /*! exports provided: CreateLocationComponent */

    /***/
    function bXlC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateLocationComponent", function () {
        return CreateLocationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var src_app_model_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_model/location */
      "zOs6");
      /* harmony import */


      var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/location.service */
      "BAgB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      function CreateLocationComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateLocationComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateLocationComponent_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " City Name required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var CreateLocationComponent = /*#__PURE__*/function () {
        function CreateLocationComponent(locationService, dialogRef, data) {
          _classCallCheck(this, CreateLocationComponent);

          this.locationService = locationService;
          this.dialogRef = dialogRef;
          this.data = data;
          this.location = new src_app_model_location__WEBPACK_IMPORTED_MODULE_4__["Location"]();
          this.locationUpdateData = data;
          this.locationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            cityName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });

          if (data != null) {
            this.locationForm.controls['cityName'].setValue(this.locationUpdateData.data.cityName);
          }
        }

        _createClass(CreateLocationComponent, [{
          key: "closeModal",
          value: function closeModal() {
            this.dialogRef.close();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _a;

            if (((_a = this.locationUpdateData) === null || _a === void 0 ? void 0 : _a.data.id) != null) {
              this.updateLocation();
            } else {
              this.saveLocation();
            }
          }
        }, {
          key: "saveLocation",
          value: function saveLocation() {
            var _this39 = this;

            var _a;

            var data = {
              id: (_a = this.locationUpdateData) === null || _a === void 0 ? void 0 : _a.data.id,
              cityName: this.locationForm.controls.cityName.value
            };
            this.locationService.createLocation(data).subscribe(function (res) {
              if (res != null) {
                _this39.successMsg = 'Location Successfully Created..!';

                _this39.getLocationList();

                _this39.closeModal();
              }
            }, function (error) {
              _this39.errorMsg = error.error.errorMessage;
            });
          }
        }, {
          key: "updateLocation",
          value: function updateLocation() {
            var _this40 = this;

            var _a;

            var data = {
              id: (_a = this.locationUpdateData) === null || _a === void 0 ? void 0 : _a.data.id,
              cityName: this.locationForm.controls.cityName.value
            };
            this.locationService.updateLocation(data).subscribe(function (res) {
              if (res != null) {
                _this40.successMsg = 'Location Successfully Updated..!';

                _this40.getLocationList();

                _this40.closeModal();
              }
            }, function (error) {
              _this40.errorMsg = error.error.errorMessage;
            });
          }
        }, {
          key: "getLocationList",
          value: function getLocationList() {
            var _this41 = this;

            this.locationService.getLocationList().subscribe(function (data) {
              _this41.dataSource = data;
              _this41.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            }, function (error) {
              return console.log(error);
            });
          }
        }]);

        return CreateLocationComponent;
      }();

      CreateLocationComponent.ɵfac = function CreateLocationComponent_Factory(t) {
        return new (t || CreateLocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      CreateLocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateLocationComponent,
        selectors: [["app-create-location"]],
        decls: 19,
        vars: 7,
        consts: [[1, "product-conatiner"], ["class", "title-header", 4, "ngIf"], [3, "formGroup"], [1, "title-header"], [1, "forms-fildes"], ["formControlName", "cityName", "matInput", "", "placeholder", "location Name", "required", ""], [4, "ngIf"], [1, "button-container"], ["aria-label", "Close", 1, "btn", "btn-warning", 2, "width", "25%", "margin-left", "5px", 3, "click"], [1, "btn", "btn-primary", 2, "width", "25%", "margin-left", "5px", 3, "disabled", "click"], [2, "color", "green"], [2, "color", "red"], [1, "title"]],
        template: function CreateLocationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateLocationComponent_div_1_Template, 3, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateLocationComponent_div_2_Template, 3, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateLocationComponent_mat_error_8_Template, 2, 0, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateLocationComponent_Template_button_click_10_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateLocationComponent_Template_button_click_12_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.locationUpdateData == null ? null : ctx.locationUpdateData.data.id) == null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.locationUpdateData == null ? null : ctx.locationUpdateData.data.id) != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.locationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.locationForm.get("cityName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.locationForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.successMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMsg);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]],
        styles: [".title[_ngcontent-%COMP%] {\n    font-weight: 500;\n    font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1sb2NhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkIiLCJmaWxlIjoiY3JlYXRlLWxvY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateLocationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-location',
            templateUrl: './create-location.component.html',
            styleUrls: ['./create-location.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "dm9D":
    /*!************************************!*\
      !*** ./src/app/_model/supplier.ts ***!
      \************************************/

    /*! exports provided: Supplier */

    /***/
    function dm9D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Supplier", function () {
        return Supplier;
      });

      var Supplier = function Supplier() {
        _classCallCheck(this, Supplier);
      };
      /***/

    },

    /***/
    "fQh4":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/dashboard-categories/dashboard-categories.component.ts ***!
      \******************************************************************************/

    /*! exports provided: DashboardCategoriesComponent */

    /***/
    function fQh4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardCategoriesComponent", function () {
        return DashboardCategoriesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var DashboardCategoriesComponent = /*#__PURE__*/function () {
        function DashboardCategoriesComponent(router) {
          _classCallCheck(this, DashboardCategoriesComponent);

          this.router = router;
          this.isVisible = false;
          this.urlPath = [];
        }

        _createClass(DashboardCategoriesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCurrentPage();
          }
        }, {
          key: "getCurrentPage",
          value: function getCurrentPage() {
            var _this42 = this;

            var path = this.router.url.split('/');

            if (path.length === 2 && path[1] === 'dashboard') {
              this.isVisible = true;
            }

            path.forEach(function (e) {
              if (e !== '') {
                _this42.urlPath.push(e);
              }
            });
          }
        }]);

        return DashboardCategoriesComponent;
      }();

      DashboardCategoriesComponent.ɵfac = function DashboardCategoriesComponent_Factory(t) {
        return new (t || DashboardCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      DashboardCategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardCategoriesComponent,
        selectors: [["app-dashboard-categories"]],
        decls: 34,
        vars: 0,
        consts: [[1, "app-container"], [1, "main-container", "flex-fill"], [1, "container-fluid", "mt-2"], [1, "row"], [1, "col-md-12"], [1, "col-md-3"], [1, "card-counter", "primary"], [1, "fa", "fa-code-fork"], [1, "count-numbers"], [1, "count-name"], [1, "card-counter", "danger"], [1, "fa", "fa-ticket"], [1, "card-counter", "success"], [1, "fa", "fa-database"], [1, "card-counter", "info"], [1, "fa", "fa-users"]],
        template: function DashboardCategoriesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Flowz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "599");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Instances");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "6875");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "35");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".close[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 20px;\n    padding: 10px;\n    background-color: #fff;\n    border-bottom: 1px solid #000;\n}\n\n.navbar[_ngcontent-%COMP%] {\n    background-color: #3c8dbc;\n}\n\n.main[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 100vh;\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n    float: left;\n    width: 88%;\n}\n\n#mySidebar[_ngcontent-%COMP%] {\n    height: 100vh;\n    background-color: #000;\n    \n    width: 12%;\n    float: left;\n}\n\n#mySidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff;\n}\n\n.card-counter[_ngcontent-%COMP%] {\n    box-shadow: 2px 2px 10px #DADADA;\n    margin: 5px;\n    padding: 20px 10px;\n    background-color: #fff;\n    height: 100px;\n    border-radius: 5px;\n    transition: .3s linear all;\n}\n\n.card-counter[_ngcontent-%COMP%]:hover {\n    box-shadow: 4px 4px 20px #DADADA;\n    transition: .3s linear all;\n}\n\n.card-counter.primary[_ngcontent-%COMP%] {\n    background-color: #007bff;\n    color: #FFF;\n}\n\n.card-counter.danger[_ngcontent-%COMP%] {\n    background-color: #ef5350;\n    color: #FFF;\n}\n\n.card-counter.success[_ngcontent-%COMP%] {\n    background-color: #66bb6a;\n    color: #FFF;\n}\n\n.card-counter.info[_ngcontent-%COMP%] {\n    background-color: #26c6da;\n    color: #FFF;\n}\n\n.card-counter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 5em;\n    opacity: 0.2;\n}\n\n.card-counter[_ngcontent-%COMP%]   .count-numbers[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 35px;\n    top: 20px;\n    font-size: 32px;\n    display: block;\n}\n\n.card-counter[_ngcontent-%COMP%]   .count-name[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 35px;\n    top: 65px;\n    font-style: italic;\n    text-transform: capitalize;\n    opacity: 0.5;\n    display: block;\n    font-size: 18px;\n}\n\n.breadcrumb[_ngcontent-%COMP%] {\n    padding: 8px 15px;\n    margin-bottom: 20px;\n    list-style: none;\n    background-color: transparent;\n    border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0RBQXNEO0lBQ3RELFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBR0E7SUFDSSxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiZGFzaGJvYXJkLWNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNsb3NlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xufVxuXG4ubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M4ZGJjO1xufVxuXG4ubWFpbiB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA4OCU7XG59XG5cblxuI215U2lkZWJhciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIC8qIGJveC1zaGFkb3c6IDJweCAwcHggMnB4IHJnYmEoMDAwLCAwMDAsIDAwMCwgMC41KTsgKi9cbiAgICB3aWR0aDogMTIlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4jbXlTaWRlYmFyIHVsIGxpIGEge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG5cbi5jYXJkLWNvdW50ZXIge1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAjREFEQURBO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRyYW5zaXRpb246IC4zcyBsaW5lYXIgYWxsO1xufVxuXG4uY2FyZC1jb3VudGVyOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDIwcHggI0RBREFEQTtcbiAgICB0cmFuc2l0aW9uOiAuM3MgbGluZWFyIGFsbDtcbn1cblxuLmNhcmQtY291bnRlci5wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG4uY2FyZC1jb3VudGVyLmRhbmdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNTM1MDtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLmNhcmQtY291bnRlci5zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiYjZhO1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG4uY2FyZC1jb3VudGVyLmluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmM2ZGE7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi5jYXJkLWNvdW50ZXIgaSB7XG4gICAgZm9udC1zaXplOiA1ZW07XG4gICAgb3BhY2l0eTogMC4yO1xufVxuXG4uY2FyZC1jb3VudGVyIC5jb3VudC1udW1iZXJzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDM1cHg7XG4gICAgdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNhcmQtY291bnRlciAuY291bnQtbmFtZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzNXB4O1xuICAgIHRvcDogNjVweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmJyZWFkY3J1bWIge1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardCategoriesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard-categories',
            templateUrl: './dashboard-categories.component.html',
            styleUrls: ['./dashboard-categories.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "feko":
    /*!**********************************************!*\
      !*** ./src/app/_services/company.service.ts ***!
      \**********************************************/

    /*! exports provided: CompanyService */

    /***/
    function feko(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyService", function () {
        return CompanyService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_model/http-client-helper */
      "aj3h");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CompanyService = /*#__PURE__*/function () {
        function CompanyService(http) {
          _classCallCheck(this, CompanyService);

          this.http = http;
          this.baseUrl = _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__["HttpClientHelper"].baseURL + '/company';
        }

        _createClass(CompanyService, [{
          key: "getCompany",
          value: function getCompany(id) {
            return this.http.get("".concat(this.baseUrl, "/").concat(id));
          } // tslint:disable-next-line: ban-types

        }, {
          key: "createCompany",
          value: function createCompany(company) {
            return this.http.post("".concat(this.baseUrl), company);
          } // tslint:disable-next-line: ban-types

        }, {
          key: "updateCompany",
          value: function updateCompany(value) {
            return this.http.put("".concat(this.baseUrl), value);
          }
        }, {
          key: "deleteCompany",
          value: function deleteCompany(id) {
            return this.http["delete"]("".concat(this.baseUrl, "/").concat(id), {
              responseType: 'text'
            });
          }
        }, {
          key: "getCompanyList",
          value: function getCompanyList() {
            return this.http.get("".concat(this.baseUrl));
          }
        }]);

        return CompanyService;
      }();

      CompanyService.ɵfac = function CompanyService_Factory(t) {
        return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CompanyService,
        factory: CompanyService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "j4kV":
    /*!**********************************************************************!*\
      !*** ./src/app/companies/create-company/create-company.component.ts ***!
      \**********************************************************************/

    /*! exports provided: CreateCompanyComponent */

    /***/
    function j4kV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateCompanyComponent", function () {
        return CreateCompanyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_model_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_model/company */
      "MOdX");
      /* harmony import */


      var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/company.service */
      "feko");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      function CreateCompanyComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateCompanyComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateCompanyComponent_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var CreateCompanyComponent = /*#__PURE__*/function () {
        function CreateCompanyComponent(companyService, dialogRef, data) {
          _classCallCheck(this, CreateCompanyComponent);

          this.companyService = companyService;
          this.dialogRef = dialogRef;
          this.data = data;
          this.company = new src_app_model_company__WEBPACK_IMPORTED_MODULE_3__["Company"]();
          this.companyUpdateData = data;
          this.companyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
          });

          if (data != null) {
            this.companyForm.controls['companyName'].setValue(this.companyUpdateData.data.companyName);
            this.companyForm.controls['phoneNumber'].setValue(this.companyUpdateData.data.phoneNumber);
          }
        }

        _createClass(CreateCompanyComponent, [{
          key: "closeModal",
          value: function closeModal() {
            this.dialogRef.close();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _a;

            if (((_a = this.companyUpdateData) === null || _a === void 0 ? void 0 : _a.data.id) != null) {
              this.updateCompany();
            } else {
              this.saveCompany();
            }
          }
        }, {
          key: "saveCompany",
          value: function saveCompany() {
            var _this43 = this;

            var _a;

            var data = {
              id: (_a = this.companyUpdateData) === null || _a === void 0 ? void 0 : _a.data.id,
              companyName: this.companyForm.controls.companyName.value,
              phoneNumber: this.companyForm.controls.phoneNumber.value
            };
            this.companyService.createCompany(data).subscribe(function (res) {
              if (res != null) {
                _this43.successMsg = 'Company Successfully Created..!';

                _this43.getCompanyList();

                _this43.closeModal();
              }
            }, function (error) {
              _this43.errorMsg = error.error.errorMessage;
            });
          }
        }, {
          key: "updateCompany",
          value: function updateCompany() {
            var _this44 = this;

            var _a;

            var data = {
              id: (_a = this.companyUpdateData) === null || _a === void 0 ? void 0 : _a.data.id,
              companyName: this.companyForm.controls.companyName.value,
              phoneNumber: this.companyForm.controls.phoneNumber.value
            };
            this.companyService.updateCompany(data).subscribe(function (res) {
              if (res != null) {
                _this44.successMsg = 'Company Successfully Updated..!';

                _this44.getCompanyList();

                _this44.closeModal();
              }
            }, function (error) {
              _this44.errorMsg = error.error.errorMessage;
            });
          }
        }, {
          key: "getCompanyList",
          value: function getCompanyList() {
            this.companyService.getCompanyList().subscribe(function (data) {}, function (error) {
              return console.log(error);
            });
          }
        }]);

        return CreateCompanyComponent;
      }();

      CreateCompanyComponent.ɵfac = function CreateCompanyComponent_Factory(t) {
        return new (t || CreateCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      CreateCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateCompanyComponent,
        selectors: [["app-create-company"]],
        decls: 22,
        vars: 7,
        consts: [[1, "product-conatiner"], ["class", "title-header", 4, "ngIf"], [3, "formGroup"], [1, "title-header"], [1, "forms-fildes"], ["formControlName", "companyName", "matInput", "", "placeholder", "Company Name", "required", ""], [4, "ngIf"], ["formControlName", "phoneNumber", "matInput", "", "placeholder", "Phone Number"], [1, "button-container"], ["aria-label", "Close", 1, "btn", "btn-warning", 2, "width", "25%", "margin-left", "5px", 3, "click"], [1, "btn", "btn-primary", 2, "width", "25%", "margin-left", "5px", 3, "disabled", "click"], [2, "color", "green"], [2, "color", "red"], [1, "title"]],
        template: function CreateCompanyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateCompanyComponent_div_1_Template, 3, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateCompanyComponent_div_2_Template, 3, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateCompanyComponent_mat_error_8_Template, 2, 0, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateCompanyComponent_Template_button_click_13_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateCompanyComponent_Template_button_click_15_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.companyUpdateData == null ? null : ctx.companyUpdateData.data.id) == null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.companyUpdateData == null ? null : ctx.companyUpdateData.data.id) != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.companyForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.companyForm.get("companyName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.companyForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.successMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMsg);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
        styles: [".title[_ngcontent-%COMP%] {\n    font-weight: 500;\n    font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jb21wYW55LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQiIsImZpbGUiOiJjcmVhdGUtY29tcGFueS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateCompanyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-company',
            templateUrl: './create-company.component.html',
            styleUrls: ['./create-company.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "jD4/":
    /*!*********************************************************!*\
      !*** ./src/app/menu/action-bar/action-bar.component.ts ***!
      \*********************************************************/

    /*! exports provided: ActionBarComponent */

    /***/
    function jD4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionBarComponent", function () {
        return ActionBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/tree */
      "8yBR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _action_bar_item_action_bar_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../action-bar-item/action-bar-item.component */
      "Lgm+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function ActionBarComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "DASHBOARDS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionBarComponent_mat_tree_node_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionBarComponent_mat_tree_node_12_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var node_r8 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.getOrder(node_r8.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r8.name, "");
        }
      }

      function ActionBarComponent_mat_tree_node_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r11 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Toggle " + node_r11.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.treeControl.isExpanded(node_r11) ? "expand_more" : "add", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r11.name, " ");
        }
      }

      function ActionBarComponent_mat_tree_node_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionBarComponent_mat_tree_node_15_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var node_r12 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.getComponent(node_r12.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r12.name, "");
        }
      }

      function ActionBarComponent_mat_tree_node_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r15 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Toggle " + node_r15.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.treeControl.isExpanded(node_r15) ? "expand_more" : "chevron_right", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r15.name, " ");
        }
      }

      function ActionBarComponent_mat_tree_17_mat_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionBarComponent_mat_tree_17_mat_tree_node_1_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var node_r18 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r19.getReports(node_r18.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r18.name, "");
        }
      }

      function ActionBarComponent_mat_tree_17_mat_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r21 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Toggle " + node_r21.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.treeControl.isExpanded(node_r21) ? "expand_more" : "add", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r21.name, " ");
        }
      }

      function ActionBarComponent_mat_tree_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ActionBarComponent_mat_tree_17_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ActionBarComponent_mat_tree_17_mat_tree_node_2_Template, 5, 3, "mat-tree-node", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r5.dataSourceReports)("treeControl", ctx_r5.treeControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTreeNodeDefWhen", ctx_r5.hasChild);
        }
      }

      function ActionBarComponent_li_18_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "BALANCE SHEET");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionBarComponent_li_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ActionBarComponent_li_18_span_3_Template, 2, 0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.expanded);
        }
      }

      function ActionBarComponent_li_19_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "USERS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionBarComponent_li_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ActionBarComponent_li_19_span_3_Template, 2, 0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.expanded);
        }
      }

      var ActionBarComponent = /*#__PURE__*/function () {
        function ActionBarComponent(router) {
          _classCallCheck(this, ActionBarComponent);

          this.router = router;

          this._transformer = function (node, level) {
            return {
              expandable: !!node.children && node.children.length > 0,
              name: node.name,
              level: level
            };
          };

          this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](function (node) {
            return node.level;
          }, function (node) {
            return node.expandable;
          });
          this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this._transformer, function (node) {
            return node.level;
          }, function (node) {
            return node.expandable;
          }, function (node) {
            return node.children;
          });
          this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
          this.dataSource_Order = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
          this.dataSourceReports = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);

          this.hasChild = function (_, node) {
            return node.expandable;
          };

          this.expanded = true;
          this.dataSource.data = TREE_DATA;
          this.dataSource_Order.data = Order_DATA;
          this.dataSourceReports.data = REPORTS;
          console.log('dataSourceReports', this.dataSourceReports);
        }

        _createClass(ActionBarComponent, [{
          key: "goTohome",
          value: function goTohome() {
            this.router.navigate(['dashboard']);
          }
        }, {
          key: "getComponent",
          value: function getComponent(item) {
            if (item == "Product") {
              this.router.navigate(['dashboard/products']);
            }

            if (item == "Category") {
              this.router.navigate(['dashboard/categories-list']);
            }

            if (item == "Supplier") {
              this.router.navigate(['dashboard/suppliers-list']);
            }

            if (item == "Customer") {
              this.router.navigate(['dashboard/customers-list']);
            }

            if (item == "Company") {
              this.router.navigate(['dashboard/companies-list']);
            }

            if (item == "Location") {
              this.router.navigate(['dashboard/locations-list']);
            }
          }
        }, {
          key: "getOrder",
          value: function getOrder(item) {
            if (item == "Buy") {
              this.router.navigate(['dashboard/purchaseOrder']);
            }

            if (item == "Sell") {
              this.router.navigate(['dashboard/salesOrder']);
            }
          }
        }, {
          key: "getReports",
          value: function getReports(item) {
            if (item === "Sales Order Report") {
              this._redirectToPage('dashboard/reports/sales-report');
            }

            if (item === "Purchase Order Report") {
              this._redirectToPage('dashboard/reports/purchase-report');
            }
          }
        }, {
          key: "_redirectToPage",
          value: function _redirectToPage(route) {
            this.router.navigate([route]);
          }
        }]);

        return ActionBarComponent;
      }();

      ActionBarComponent.ɵfac = function ActionBarComponent_Factory(t) {
        return new (t || ActionBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      ActionBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ActionBarComponent,
        selectors: [["app-action-bar"]],
        decls: 20,
        vars: 13,
        consts: [[1, "action-bar"], [3, "shadow", "click"], [1, "action-bar-item-icon", "jam", "jam-bar-chart", "transform-rotate-90"], [1, "action-bar-item-text"], [1, "navbar", "navbar-light"], [1, "navbar-nav", "nav"], [1, "nav-item"], ["routerLink", "/dashboard/home", "routerLinkActive", "active", 1, "nav-link", 2, "cursor", "pointer"], [1, "fa", "fa-home"], ["class", "d-none d-sm-inline", 4, "ngIf"], [2, "margin-right", "10px", 3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], [3, "dataSource", "treeControl"], ["style", "margin-right: 10px;", 3, "dataSource", "treeControl", 4, "ngIf"], ["class", "nav-item", 4, "ngIf"], [1, "d-none", "d-sm-inline"], ["matTreeNodePadding", ""], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["routerLink", "/dashboard/balance-sheet", 1, "nav-link"], [1, "fa", "fa-inr"], ["routerLink", "/dashboard/user", 1, "nav-link"], [1, "fa", "fa-users"]],
        template: function ActionBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-action-bar-item", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionBarComponent_Template_app_action_bar_item_click_1_listener() {
              return ctx.expanded = !ctx.expanded;
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-tree", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ActionBarComponent_mat_tree_node_12_Template, 3, 1, "mat-tree-node", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ActionBarComponent_mat_tree_node_13_Template, 5, 3, "mat-tree-node", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-tree", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ActionBarComponent_mat_tree_node_15_Template, 3, 1, "mat-tree-node", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ActionBarComponent_mat_tree_node_16_Template, 5, 3, "mat-tree-node", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ActionBarComponent_mat_tree_17_Template, 3, 3, "mat-tree", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ActionBarComponent_li_18_Template, 4, 1, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ActionBarComponent_li_19_Template, 4, 1, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("action-bar-expanded", ctx.expanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("shadow", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource_Order)("treeControl", ctx.treeControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
          }
        },
        directives: [_action_bar_item_action_bar_item_component__WEBPACK_IMPORTED_MODULE_4__["ActionBarItemComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodePadding"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
        styles: [".nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  color: white;\n}\n\n.span[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.fa[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  margin-left: 10px;\n}\n\nul.nav[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n}\n\n.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n\n .mat-menu-content:not(:empty) {\n  \n  \n  background-color: #ababab;\n  \n}\n\n .a {\n  color: white;\n}\n\n .d-sm-inline {\n  display: inline !important;\n  color: white;\n}\n\n .mat-tree-node {\n  display: flex;\n  align-items: center;\n  flex: 1;\n  word-wrap: break-word;\n  color: white;\n}\n\n .mat-tree-node {\n  display: flex;\n  align-items: center;\n  flex: 1;\n  word-wrap: break-word;\n  color: white;\n}\n\n .mat-tree-node {\n  min-height: 48px;\n  background-color: #1389fd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FjdGlvbi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFDQTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxzQkFBQTtBQUVGOztBQUFBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7QUFJRjs7QUFGQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtBQUtGOztBQUhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQU1GOztBQUpBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQU9GOztBQUxBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtBQVFGIiwiZmlsZSI6ImFjdGlvbi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbmsgc3BhbntcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zcGFue1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYXtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5cbnVsLm5hdiBsaS5uYXYtaXRlbXtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLm5hdi1pdGVtIC5uYXYtbGlua3tcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcC5tYXQtbWVudS1jb250ZW50Om5vdCg6ZW1wdHkpIHtcbiAgLyogcGFkZGluZy10b3A6IDhweDsgKi9cbiAgLyogcGFkZGluZy1ib3R0b206IDhweDsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2FiYWJhYjtcbiAgLyogY29sb3I6IHdoaXRlOyAqL1xufVxuOjpuZy1kZWVwLmF7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjo6bmctZGVlcC5kLXNtLWlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZSFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjo6bmctZGVlcC5tYXQtdHJlZS1ub2RlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleDogMTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBjb2xvcjogd2hpdGU7XG59XG46Om5nLWRlZXAubWF0LXRyZWUtbm9kZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXg6IDE7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuOjpuZy1kZWVwLm1hdC10cmVlLW5vZGUge1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM4OWZkO1xufVxuIl19 */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-action-bar',
            templateUrl: './action-bar.component.html',
            styleUrls: ['./action-bar.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();

      var Order_DATA = [{
        name: 'Order',
        children: [{
          name: 'Buy'
        }, {
          name: 'Sell'
        }]
      }];
      var REPORTS = [{
        name: 'Reports',
        children: [{
          name: 'Sales Order Report'
        }, {
          name: 'Purchase Order Report'
        }]
      }]; // <a class="nav-link" routerLink="/dashboard/salesOrder"><span *ngIf="expanded" class="d-none d-sm-inline">Sales
      // Order</span></a>
      // <a class="nav-link" routerLink="/dashboard/purchaseOrder"> <span *ngIf="expanded"
      // class="d-none d-sm-inline">Purchase
      // Order</span></a>

      var TREE_DATA = [{
        name: 'MASTER',
        children: [{
          name: 'Location'
        }, {
          name: 'Company'
        }, {
          name: 'Supplier'
        }, {
          name: 'Customer'
        }, {
          name: 'Category'
        }, {
          name: 'Product'
        }]
      }];
      /***/
    },

    /***/
    "oT6E":
    /*!*************************************!*\
      !*** ./src/app/utils/numToWords.js ***!
      \*************************************/

    /*! exports provided: numberInWords */

    /***/
    function oT6E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "numberInWords", function () {
        return numberInWords;
      });

      var a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
      var b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

      function numberInWords(num) {
        if ((num = num.toString()).length > 9) return 'overflow';
        var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return '';
        var str = '';
        str += n[1] != 0 ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ' : '';
        str += n[2] != 0 ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
        str += n[3] != 0 ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
        str += n[4] != 0 ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
        str += n[5] != 0 ? (str != '' ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'Only ' : '';
        return str;
      }
      /***/

    },

    /***/
    "oe4g":
    /*!**********************************************************************!*\
      !*** ./src/app/customers/customers-list/customers-list.component.ts ***!
      \**********************************************************************/

    /*! exports provided: CustomersListComponent */

    /***/
    function oe4g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomersListComponent", function () {
        return CustomersListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../create-customer/create-customer.component */
      "y11v");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/customer.service */
      "TZGB");
      /* harmony import */


      var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/company.service */
      "feko");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function CustomersListComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CustomersListComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.customerName, " ");
        }
      }

      function CustomersListComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "GSTIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CustomersListComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.gstIn, " ");
        }
      }

      function CustomersListComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CustomersListComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.phoneNumber, " ");
        }
      }

      function CustomersListComponent_th_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CustomersListComponent_td_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.location == null ? null : element_r18.location.cityName, " ");
        }
      }

      function CustomersListComponent_th_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
        }
      }

      function CustomersListComponent_td_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 26, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomersListComponent_td_25_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var element_r19 = ctx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.updateCustomer(element_r19);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomersListComponent_td_25_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var element_r19 = ctx.$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.deleteCustomer(element_r19);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r20);
        }
      }

      function CustomersListComponent_th_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Symbol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CustomersListComponent_td_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r24.symbol, " ");
        }
      }

      function CustomersListComponent_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 30);
        }
      }

      function CustomersListComponent_tr_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 31);
        }
      }

      var _c0 = function _c0() {
        return [15, 30, 50];
      };

      var CustomersListComponent = /*#__PURE__*/function () {
        function CustomersListComponent(dialog, customerService, companyService) {
          _classCallCheck(this, CustomersListComponent);

          this.dialog = dialog;
          this.customerService = customerService;
          this.companyService = companyService;
          this.displayedColumns = ['customerName', 'GSTIN', 'location', 'phoneNumber', 'id'];
        }

        _createClass(CustomersListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCustomerList();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var _this45 = this;

            var dialogRef = this.dialog.open(_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_3__["CreateCustomerComponent"], {
              width: '550px'
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');

              _this45.getCustomerList();
            });
          }
        }, {
          key: "updateCustomer",
          value: function updateCustomer(_updateCustomer) {
            var _this46 = this;

            var dialogRef = this.dialog.open(_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_3__["CreateCustomerComponent"], {
              width: '550px',
              data: {
                data: _updateCustomer
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');

              _this46.getCustomerList();
            });
          }
        }, {
          key: "getCustomerList",
          value: function getCustomerList() {
            var _this47 = this;

            this.customerService.getCustomerList().subscribe(function (data) {
              _this47.dataSource = data;
              _this47.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
              _this47.dataSource.paginator = _this47.paginator;
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "deleteCustomer",
          value: function deleteCustomer(event) {
            var _this48 = this;

            this.customerService.deleteCustomer(event.id).subscribe(function (response) {
              _this48.getCustomerList();
            }, function (error) {
              return console.log(error);
            });
          }
        }]);

        return CustomersListComponent;
      }();

      CustomersListComponent.ɵfac = function CustomersListComponent_Factory(t) {
        return new (t || CustomersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"]));
      };

      CustomersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CustomersListComponent,
        selectors: [["app-customers-list"]],
        viewQuery: function CustomersListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 32,
        vars: 6,
        consts: [[2, "width", "300px"], ["matInput", "", 3, "keyup"], ["input", ""], [1, "pull-right"], [1, "btn", "btn-info", "btn-sm", 2, "height", "35px", "width", "150px", 3, "click"], [1, "mat-elevation-z8"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "customerName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "GSTIN"], ["matColumnDef", "phoneNumber"], ["matColumnDef", "location"], ["matColumnDef", "id"], ["mat-header-cell", "", 3, "hidden", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "hidden", 4, "matCellDef"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 3, "hidden"], ["mat-cell", "", 3, "hidden"], ["aria-label", "Example icon-button with a menu", "mat-icon-button", "", 1, "kebab-menu-btn", 3, "matMenuTriggerFor"], [1, "kebab-menu"], [2, "background-color", "#f7f3f3"], ["menu", "matMenu"], [1, "btn", "btn-info", 2, "width", "80px", "margin-left", "15px", 3, "click"], [1, "btn", "btn-danger", 2, "margin-top", "5px", "width", "80px", "margin-left", "15px", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function CustomersListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CustomersListComponent_Template_input_keyup_4_listener($event) {
              return ctx.applyFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomersListComponent_Template_button_click_7_listener() {
              return ctx.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add Customer ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CustomersListComponent_th_12_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CustomersListComponent_td_13_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CustomersListComponent_th_15_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CustomersListComponent_td_16_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CustomersListComponent_th_18_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CustomersListComponent_td_19_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CustomersListComponent_th_21_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CustomersListComponent_td_22_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CustomersListComponent_th_24_Template, 2, 1, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CustomersListComponent_td_25_Template, 13, 2, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CustomersListComponent_th_27_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CustomersListComponent_td_28_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CustomersListComponent_tr_29_Template, 1, 0, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CustomersListComponent_tr_30_Template, 1, 0, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-paginator", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("pageSize", 15);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenu"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n    background-color: #ababab;\n    font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVycy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQiIsImZpbGUiOiJjdXN0b21lcnMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG50aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FiYWJhYjtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-customers-list',
            templateUrl: './customers-list.component.html',
            styleUrls: ['./customers-list.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]
          }, {
            type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "paCs":
    /*!********************************************************************!*\
      !*** ./src/app/suppliers/supplier-list/supplier-list.component.ts ***!
      \********************************************************************/

    /*! exports provided: SupplierListComponent */

    /***/
    function paCs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupplierListComponent", function () {
        return SupplierListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _create_supplier_create_supplier_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../create-supplier/create-supplier.component */
      "MBi1");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_services_supplier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/supplier.service */
      "8LTU");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function SupplierListComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Supplier");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupplierListComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.supplierName, " ");
        }
      }

      function SupplierListComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "GSTIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupplierListComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.gstIn, " ");
        }
      }

      function SupplierListComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupplierListComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.company == null ? null : element_r19.company.companyName, " ");
        }
      }

      function SupplierListComponent_th_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupplierListComponent_td_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r20.location == null ? null : element_r20.location.cityName, " ");
        }
      }

      function SupplierListComponent_th_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupplierListComponent_td_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r21.phoneNumber, " ");
        }
      }

      function SupplierListComponent_th_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
        }
      }

      function SupplierListComponent_td_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 27, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupplierListComponent_td_28_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var element_r22 = ctx.$implicit;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.updateSuppliers(element_r22);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupplierListComponent_td_28_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var element_r22 = ctx.$implicit;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.deleteSupllier(element_r22);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r23);
        }
      }

      function SupplierListComponent_th_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Symbol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupplierListComponent_td_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r27.symbol, " ");
        }
      }

      function SupplierListComponent_tr_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 31);
        }
      }

      function SupplierListComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 32);
        }
      }

      var _c0 = function _c0() {
        return [15, 30, 50];
      };

      var SupplierListComponent = /*#__PURE__*/function () {
        function SupplierListComponent(dialog, supplierService) {
          _classCallCheck(this, SupplierListComponent);

          this.dialog = dialog;
          this.supplierService = supplierService;
          this.displayedColumns = ['supplierName', 'GSTIN', 'company', 'location', 'phoneNumber', 'id'];
        }

        _createClass(SupplierListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSupplierList();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var _this49 = this;

            var dialogRef = this.dialog.open(_create_supplier_create_supplier_component__WEBPACK_IMPORTED_MODULE_3__["CreateSupplierComponent"], {
              width: '550px'
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');

              _this49.getSupplierList();
            });
          }
        }, {
          key: "getSupplierList",
          value: function getSupplierList() {
            var _this50 = this;

            this.supplierService.getSupplierList().subscribe(function (data) {
              _this50.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
              _this50.dataSource.paginator = _this50.paginator;
              _this50.dataSource = data;
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "deleteSupllier",
          value: function deleteSupllier(event) {
            var _this51 = this;

            this.supplierService.deleteSupplier(event.id).subscribe(function (response) {
              _this51.getSupplierList();
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "updateSuppliers",
          value: function updateSuppliers(updateSupplier) {
            var _this52 = this;

            var dialogRef = this.dialog.open(_create_supplier_create_supplier_component__WEBPACK_IMPORTED_MODULE_3__["CreateSupplierComponent"], {
              width: '550px',
              data: {
                data: updateSupplier
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');

              _this52.getSupplierList();
            });
          }
        }]);

        return SupplierListComponent;
      }();

      SupplierListComponent.ɵfac = function SupplierListComponent_Factory(t) {
        return new (t || SupplierListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_supplier_service__WEBPACK_IMPORTED_MODULE_5__["SupplierService"]));
      };

      SupplierListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SupplierListComponent,
        selectors: [["app-supplier-list"]],
        viewQuery: function SupplierListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 35,
        vars: 6,
        consts: [[2, "width", "300px"], ["matInput", "", 3, "keyup"], ["input", ""], [1, "pull-right"], [1, "btn", "btn-info", "btn-sm", 2, "height", "35px", "width", "150px", 3, "click"], [1, "mat-elevation-z8"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "supplierName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "GSTIN"], ["matColumnDef", "company"], ["matColumnDef", "location"], ["matColumnDef", "phoneNumber"], ["matColumnDef", "id"], ["mat-header-cell", "", 3, "hidden", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "hidden", 4, "matCellDef"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 3, "hidden"], ["mat-cell", "", 3, "hidden"], ["aria-label", "Example icon-button with a menu", "mat-icon-button", "", 1, "kebab-menu-btn", 3, "matMenuTriggerFor"], [1, "kebab-menu"], [2, "background-color", "#f7f3f3"], ["menu", "matMenu"], [1, "btn", "btn-info", 2, "width", "80px", "margin-left", "15px", 3, "click"], [1, "btn", "btn-danger", 2, "margin-top", "5px", "width", "80px", "margin-left", "15px", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function SupplierListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SupplierListComponent_Template_input_keyup_4_listener($event) {
              return ctx.applyFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupplierListComponent_Template_button_click_7_listener() {
              return ctx.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add Supplier ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SupplierListComponent_th_12_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SupplierListComponent_td_13_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SupplierListComponent_th_15_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SupplierListComponent_td_16_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SupplierListComponent_th_18_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SupplierListComponent_td_19_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SupplierListComponent_th_21_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SupplierListComponent_td_22_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SupplierListComponent_th_24_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SupplierListComponent_td_25_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SupplierListComponent_th_27_Template, 2, 1, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SupplierListComponent_td_28_Template, 13, 2, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SupplierListComponent_th_30_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SupplierListComponent_td_31_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SupplierListComponent_tr_32_Template, 1, 0, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SupplierListComponent_tr_33_Template, 1, 0, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-paginator", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("pageSize", 15);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenu"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n    background-color: #ababab;\n    font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBsaWVyLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQiIsImZpbGUiOiJzdXBwbGllci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxudGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYmFiYWI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupplierListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-supplier-list',
            templateUrl: './supplier-list.component.html',
            styleUrls: ['./supplier-list.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: src_app_services_supplier_service__WEBPACK_IMPORTED_MODULE_5__["SupplierService"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "r4IO":
    /*!**************************************************!*\
      !*** ./src/app/_model/supplier-balance-sheet.ts ***!
      \**************************************************/

    /*! exports provided: SupplierBalanceSheet */

    /***/
    function r4IO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupplierBalanceSheet", function () {
        return SupplierBalanceSheet;
      });

      var SupplierBalanceSheet = function SupplierBalanceSheet() {
        _classCallCheck(this, SupplierBalanceSheet);
      };
      /***/

    },

    /***/
    "shVH":
    /*!**********************************************************************!*\
      !*** ./src/app/reports/purchase-report/purchase-report.component.ts ***!
      \**********************************************************************/

    /*! exports provided: PurchaseReportComponent */

    /***/
    function shVH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PurchaseReportComponent", function () {
        return PurchaseReportComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PurchaseReportComponent = /*#__PURE__*/function () {
        function PurchaseReportComponent() {
          _classCallCheck(this, PurchaseReportComponent);
        }

        _createClass(PurchaseReportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PurchaseReportComponent;
      }();

      PurchaseReportComponent.ɵfac = function PurchaseReportComponent_Factory(t) {
        return new (t || PurchaseReportComponent)();
      };

      PurchaseReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PurchaseReportComponent,
        selectors: [["app-purchase-report"]],
        decls: 2,
        vars: 0,
        template: function PurchaseReportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "purchase-report works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdXJjaGFzZS1yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseReportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-purchase-report',
            templateUrl: './purchase-report.component.html',
            styleUrls: ['./purchase-report.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "szdb":
    /*!**********************************************!*\
      !*** ./src/app/_services/product.service.ts ***!
      \**********************************************/

    /*! exports provided: ProductService */

    /***/
    function szdb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductService", function () {
        return ProductService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_model/http-client-helper */
      "aj3h");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ProductService = /*#__PURE__*/function () {
        function ProductService(http) {
          _classCallCheck(this, ProductService);

          this.http = http;
          this.baseUrl = _model_http_client_helper__WEBPACK_IMPORTED_MODULE_1__["HttpClientHelper"].baseURL + '/product';
        }

        _createClass(ProductService, [{
          key: "getProduct",
          value: function getProduct(id) {
            return this.http.get("".concat(this.baseUrl, "/").concat(id));
          } // tslint:disable-next-line: ban-types

        }, {
          key: "createProduct",
          value: function createProduct(product) {
            return this.http.post("".concat(this.baseUrl), product);
          } // tslint:disable-next-line: ban-types

        }, {
          key: "createProductWithCategory",
          value: function createProductWithCategory(product, id) {
            return this.http.post("".concat(this.baseUrl, "/").concat(id), product);
          } // tslint:disable-next-line: ban-types

        }, {
          key: "updateProduct",
          value: function updateProduct(value) {
            return this.http.put("".concat(this.baseUrl), value);
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct(id) {
            return this.http["delete"]("".concat(this.baseUrl, "/").concat(id), {
              responseType: 'text'
            });
          }
        }, {
          key: "getProductsList",
          value: function getProductsList() {
            return this.http.get(this.baseUrl);
          }
        }]);

        return ProductService;
      }();

      ProductService.ɵfac = function ProductService_Factory(t) {
        return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProductService,
        factory: ProductService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tIkO":
    /*!*******************************!*\
      !*** ./src/app/auth.guard.ts ***!
      \*******************************/

    /*! exports provided: AuthGuard */

    /***/
    function tIkO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard() {
          _classCallCheck(this, AuthGuard);
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (localStorage.getItem('accessToken')) {
              return true;
            }

            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)();
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: routes, AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _ui_modules_table_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ui_modules/table/table.component */
      "MhES");
      /* harmony import */


      var _ui_modules_table_sales_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ui_modules/table/sales-table.component */
      "2RjZ");
      /* harmony import */


      var _balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./balance-sheet/balance-sheet.component */
      "8LCG");
      /* harmony import */


      var _sales_order_sales_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sales-order/sales-order.component */
      "a+ZH");
      /* harmony import */


      var _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./create-product/create-product.component */
      "EN+z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _purchase_order_purchase_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./purchase-order/purchase-order.component */
      "7YO1");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/dashboard/dashboard.component */
      "U5Cf");
      /* harmony import */


      var _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pages/notfound/notfound.component */
      "bPkx");
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./auth.guard */
      "tIkO");
      /* harmony import */


      var _pages_dashboard_categories_dashboard_categories_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./pages/dashboard-categories/dashboard-categories.component */
      "fQh4");
      /* harmony import */


      var _customers_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./customers/customers-list/customers-list.component */
      "oe4g");
      /* harmony import */


      var _companies_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./companies/company-list/company-list.component */
      "RQch");
      /* harmony import */


      var _categories_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./categories/category-list/category-list.component */
      "ZU6c");
      /* harmony import */


      var _suppliers_supplier_list_supplier_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./suppliers/supplier-list/supplier-list.component */
      "paCs");
      /* harmony import */


      var _locations_location_list_location_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./locations/location-list/location-list.component */
      "Aulu");
      /* harmony import */


      var _locations_create_location_create_location_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./locations/create-location/create-location.component */
      "bXlC");
      /* harmony import */


      var _categories_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./categories/create-category/create-category.component */
      "XSPX");
      /* harmony import */


      var _suppliers_create_supplier_create_supplier_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./suppliers/create-supplier/create-supplier.component */
      "MBi1");
      /* harmony import */


      var _customers_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./customers/create-customer/create-customer.component */
      "y11v");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./products/product-list/product-list.component */
      "Cw76");
      /* harmony import */


      var _reports_reports_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./reports/reports.component */
      "ZAGK");
      /* harmony import */


      var _reports_sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./reports/sales-report/sales-report.component */
      "HxLs");
      /* harmony import */


      var _reports_purchase_report_purchase_report_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./reports/purchase-report/purchase-report.component */
      "shVH");

      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
      }, {
        path: '404',
        component: _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__["NotfoundComponent"]
      }, {
        path: 'dashboard',
        pathMatch: 'prefix',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
        children: [{
          path: 'dashboard2',
          component: _pages_dashboard_categories_dashboard_categories_component__WEBPACK_IMPORTED_MODULE_13__["DashboardCategoriesComponent"],
          canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
        }, {
          path: 'products',
          component: _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_24__["ProductListComponent"],
          canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
        }, {
          path: 'add',
          component: _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_4__["CreateProductComponent"]
        }, {
          path: 'category',
          component: _categories_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_20__["CreateCategoryComponent"]
        }, {
          path: 'purchaseOrder',
          component: _purchase_order_purchase_order_component__WEBPACK_IMPORTED_MODULE_7__["PurchaseOrderComponent"]
        }, {
          path: 'salesOrder',
          component: _sales_order_sales_order_component__WEBPACK_IMPORTED_MODULE_3__["SalesOrderComponent"]
        }, {
          path: 'location',
          component: _locations_create_location_create_location_component__WEBPACK_IMPORTED_MODULE_19__["CreateLocationComponent"]
        }, {
          path: 'customer',
          component: _customers_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_22__["CreateCustomerComponent"]
        }, {
          path: 'supplier',
          component: _suppliers_create_supplier_create_supplier_component__WEBPACK_IMPORTED_MODULE_21__["CreateSupplierComponent"]
        }, {
          path: 'balance-sheet',
          component: _balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_2__["BalanceSheetComponent"]
        }, {
          path: 'customers-list',
          component: _customers_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_14__["CustomersListComponent"]
        }, {
          path: 'companies-list',
          component: _companies_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_15__["CompanyListComponent"]
        }, {
          path: 'suppliers-list',
          component: _suppliers_supplier_list_supplier_list_component__WEBPACK_IMPORTED_MODULE_17__["SupplierListComponent"]
        }, {
          path: 'categories-list',
          component: _categories_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_16__["CategoryListComponent"]
        }, {
          path: 'locations-list',
          component: _locations_location_list_location_list_component__WEBPACK_IMPORTED_MODULE_18__["LocationListComponent"]
        }, {
          path: 'home',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"]
        }, {
          path: 'reports',
          redirectTo: 'reports/sales-report'
        }, {
          path: 'reports',
          component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_25__["ReportsComponent"],
          children: [{
            path: 'sales-report',
            component: _reports_sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_26__["SalesReportComponent"]
          }, {
            path: 'purchase-report',
            component: _reports_purchase_report_purchase_report_component__WEBPACK_IMPORTED_MODULE_27__["PurchaseReportComponent"]
          }]
        }]
      }, {
        path: 'table',
        component: _ui_modules_table_table_component__WEBPACK_IMPORTED_MODULE_0__["TableComponent"]
      }, {
        path: 'salesTable',
        component: _ui_modules_table_sales_table_component__WEBPACK_IMPORTED_MODULE_1__["SalesTableComponent"]
      }, {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes, {
          useHash: true
        })], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes, {
              useHash: true
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/auth.service */
      "7Vn+");
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/token-storage.service */
      "FQmJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function LoginComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_16_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_16_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_16_div_1_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_16_div_2_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.minlength);
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(authService, tokenStorage, router) {
          _classCallCheck(this, LoginComponent);

          this.authService = authService;
          this.tokenStorage = tokenStorage;
          this.router = router;
          this.form = {};
          this.errorMessage = '';
          this.roles = [];
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.tokenStorage.getToken()) {
              this.roles = this.tokenStorage.getUser().roles;
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this53 = this;

            this.authService.login(this.form).subscribe(function (data) {
              _this53.tokenStorage.saveToken(data.accessToken);

              localStorage.setItem('accessToken', data.accessToken);

              _this53.tokenStorage.saveUser(data);

              _this53.roles = _this53.tokenStorage.getUser().roles;

              _this53.router.navigate(['dashboard/home']);
            }, function (err) {
              _this53.errorMessage = err.error.message;
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 20,
        vars: 4,
        consts: [[1, "col-md-12"], [1, "card", "card-container"], ["id", "profile-img", "src", "//ssl.gstatic.com/accounts/ui/avatar_2x.png", 1, "profile-img-card"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "username"], ["name", "username", "required", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["for", "password"], ["minlength", "6", "name", "password", "required", "", "type", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "btn", "btn-primary", "btn-block"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngIf"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

              return _r0.form.valid && ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.form.username = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 2, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) {
              return ctx.form.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_div_16_Template, 3, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.submitted && _r1.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.submitted && _r3.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"]],
        styles: ["label[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 10px;\n}\n\n.card-container.card[_ngcontent-%COMP%] {\n    max-width: 400px !important;\n    padding: 40px 40px;\n}\n\n.card[_ngcontent-%COMP%] {\n    background-color: #f7f7f7;\n    padding: 20px 25px 30px;\n    margin: 0 auto 25px;\n    margin-top: 50px;\n    border-radius: 2px;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card[_ngcontent-%COMP%] {\n    width: 96px;\n    height: 96px;\n    margin: 0 auto 10px;\n    display: block;\n    border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUdoQixrQkFBa0I7SUFHbEIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztJQUdkLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lci5jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNDBweCA0MHB4O1xufVxuXG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHggMzBweDtcbiAgICBtYXJnaW46IDAgYXV0byAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLnByb2ZpbGUtaW1nLWNhcmQge1xuICAgIHdpZHRoOiA5NnB4O1xuICAgIGhlaWdodDogOTZweDtcbiAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vvyD":
    /*!************************************!*\
      !*** ./src/app/material.module.ts ***!
      \************************************/

    /*! exports provided: DemoMaterialModule */

    /***/
    function vvyD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function () {
        return DemoMaterialModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/clipboard */
      "UXJo");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      "B/XX");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/table */
      "f6nW");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/material/tree */
      "8yBR");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");

      var DemoMaterialModule = function DemoMaterialModule() {
        _classCallCheck(this, DemoMaterialModule);
      };

      DemoMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DemoMaterialModule
      });
      DemoMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DemoMaterialModule_Factory(t) {
          return new (t || DemoMaterialModule)();
        },
        imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, {
          exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoMaterialModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "y11v":
    /*!************************************************************************!*\
      !*** ./src/app/customers/create-customer/create-customer.component.ts ***!
      \************************************************************************/

    /*! exports provided: CreateCustomerComponent */

    /***/
    function y11v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateCustomerComponent", function () {
        return CreateCustomerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_services/customer.service */
      "TZGB");
      /* harmony import */


      var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/location.service */
      "BAgB");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function CreateCustomerComponent_mat_option_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var location_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", location_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", location_r1.cityName, " ");
        }
      }

      var CreateCustomerComponent = /*#__PURE__*/function () {
        function CreateCustomerComponent(customerService, location, dialogRef, data) {
          _classCallCheck(this, CreateCustomerComponent);

          this.customerService = customerService;
          this.location = location;
          this.dialogRef = dialogRef;
          this.data = data;
          this.customerUpdateData = data;
          this.customerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            cityName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            customerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            gstIn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
          });
          this.locationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            cityName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });

          if (data != null) {
            this.customerForm.controls['customerName'].setValue(this.customerUpdateData.data.customerName);
            this.customerForm.controls['gstIn'].setValue(this.customerUpdateData.data.gstIn);
            this.customerForm.controls['phoneNumber'].setValue(this.customerUpdateData.data.phoneNumber);
            this.customerForm.controls['cityName'].setValue(this.customerUpdateData.data.location.cityName);
          }
        }

        _createClass(CreateCustomerComponent, [{
          key: "closeModal",
          value: function closeModal() {
            this.dialogRef.close();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getlocationList();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _a;

            if (((_a = this.customerUpdateData) === null || _a === void 0 ? void 0 : _a.data.id) != null) {// this.updateCustomer();
            } else {
              this.saveCustomer();
            }
          }
        }, {
          key: "saveCustomer",
          value: function saveCustomer() {
            var _this54 = this;

            var data = {
              customerName: this.customerForm.controls.customerName.value,
              gstIn: this.customerForm.controls.gstIn.value,
              location: this.customerForm.controls.cityName.value,
              phoneNumber: this.customerForm.controls.phoneNumber.value
            };
            this.customerService.createCustomer(data).subscribe(function (res) {
              if (res != null) {
                _this54.successMsg = 'Company Successfully Created..!'; // this.getCompanyList();

                _this54.closeModal();
              }
            }, function (error) {
              _this54.errorMsg = error.error.errorMessage;
            });
          } // updateCustomer() {
          //   let data = {
          //     companyID: this.companyUpdateData?.data.id,
          //     companyName: this.customerForm.controls.companyName.value,
          //     phoneNumber: this.customerForm.controls.phoneNumber.value
          //   }
          //   this.customerService.updateCompany(data).subscribe(res => {
          //     if (res != null) {
          //       this.successMsg = "Company Successfully Updated..!";
          //       this.getCompanyList();
          //       this.closeModal();
          //     }
          //   }, error => {
          //     this.errorMsg = error.error.errorMessage; "Company Unsuccessfully Updated..";
          //   })
          // }
          // getCompanyList() {
          //   this.customerService.getCompanyList().subscribe(data => {
          //   }, error => console.log(error));
          // }

        }, {
          key: "getlocationList",
          value: function getlocationList() {
            var _this55 = this;

            this.location.getLocationList().subscribe(function (res) {
              _this55.citiesList = res;
            });
          }
        }]);

        return CreateCustomerComponent;
      }();

      CreateCustomerComponent.ɵfac = function CreateCustomerComponent_Factory(t) {
        return new (t || CreateCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      CreateCustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateCustomerComponent,
        selectors: [["app-create-customer"]],
        decls: 29,
        vars: 5,
        consts: [[1, "product-conatiner"], [1, "title-header"], [1, "title"], [3, "formGroup"], [1, "forms-fildes"], ["formControlName", "customerName", "matInput", "", "placeholder", "Customer Name"], ["formControlName", "gstIn", "matInput", "", "placeholder", "GSTIN"], ["formControlName", "cityName", "placeholder", "City"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "phoneNumber", "matInput", "", "placeholder", "Phone Number"], [1, "button-container"], ["aria-label", "Close", 1, "btn", "btn-warning", 2, "width", "25%", "margin-left", "5px", 3, "click"], [1, "btn", "btn-primary", 2, "width", "25%", "margin-left", "5px", 3, "disabled", "click"], [2, "color", "green"], [2, "color", "red"], [3, "value"]],
        template: function CreateCustomerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Customer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CreateCustomerComponent_mat_option_15_Template, 2, 2, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateCustomerComponent_Template_button_click_20_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateCustomerComponent_Template_button_click_22_listener() {
              return ctx.saveCustomer();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.customerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.citiesList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.customerForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.successMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMsg);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]],
        styles: [".title[_ngcontent-%COMP%] {\n    font-weight: 500;\n    font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jdXN0b21lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkIiLCJmaWxlIjoiY3JlYXRlLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateCustomerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-customer',
            templateUrl: './create-customer.component.html',
            styleUrls: ['./create-customer.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]
          }, {
            type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zOs6":
    /*!************************************!*\
      !*** ./src/app/_model/location.ts ***!
      \************************************/

    /*! exports provided: Location */

    /***/
    function zOs6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Location", function () {
        return Location;
      });

      var Location = function Location() {
        _classCallCheck(this, Location);
      };
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map