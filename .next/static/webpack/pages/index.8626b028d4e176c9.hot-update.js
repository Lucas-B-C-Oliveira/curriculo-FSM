"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar Index = function(props) {\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"D:\\\\Avell\\\\Projects\\\\FullStackMaster\\\\LUCAS-RESUME\\\\pages\\\\index.js\",\n            lineNumber: 5,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"D:\\\\Avell\\\\Projects\\\\FullStackMaster\\\\LUCAS-RESUME\\\\pages\\\\index.js\",\n                    lineNumber: 6,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Ol\\xe1, eu sou o Lucas B C Oliveira\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"D:\\\\Avell\\\\Projects\\\\FullStackMaster\\\\LUCAS-RESUME\\\\pages\\\\index.js\",\n                    lineNumber: 7,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: props.currentDate\n            }),\n            props.repos.map(function(repo) {\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"D:\\\\Avell\\\\Projects\\\\FullStackMaster\\\\LUCAS-RESUME\\\\pages\\\\index.js\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    },\n                    __self: _this1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                            __source: {\n                                fileName: \"D:\\\\Avell\\\\Projects\\\\FullStackMaster\\\\LUCAS-RESUME\\\\pages\\\\index.js\",\n                                lineNumber: 11,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: repo.full_name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                            __source: {\n                                fileName: \"D:\\\\Avell\\\\Projects\\\\FullStackMaster\\\\LUCAS-RESUME\\\\pages\\\\index.js\",\n                                lineNumber: 12,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: [\n                                \"Language: \",\n                                repo.language,\n                                \" | Stars: \",\n                                repo.stargazers_count\n                            ]\n                        })\n                    ]\n                }, repo.id));\n            })\n        ]\n    }));\n};\n_c = Index;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCOztBQUV6QixHQUFLLENBQUNDLEtBQUssR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOztJQUN4QixNQUFNLHVFQUNIQyxDQUFHOzs7Ozs7OztpRkFDREMsQ0FBRTs7Ozs7OzswQkFBQyxDQUFnQzs7aUZBQ25DRCxDQUFHOzs7Ozs7OzBCQUFFRCxLQUFLLENBQUNHLFdBQVc7O1lBQ3RCSCxLQUFLLENBQUNJLEtBQUssQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLENBQVJBLElBQUksRUFBSSxDQUFDO2dCQUN4QixNQUFNLHVFQUNITCxDQUFHOzs7Ozs7Ozs2RkFDRE0sQ0FBRTs7Ozs7OztzQ0FBRUQsSUFBSSxDQUFDRSxTQUFTOzs4RkFDbEJDLENBQUM7Ozs7Ozs7O2dDQUFDLENBQVU7Z0NBQUNILElBQUksQ0FBQ0ksUUFBUTtnQ0FBQyxDQUFVO2dDQUFDSixJQUFJLENBQUNLLGdCQUFnQjs7OzttQkFGcERMLElBQUksQ0FBQ00sRUFBRTtZQUtyQixDQUFDOzs7QUFHUCxDQUFDO0tBZktiLEtBQUs7O0FBNkNYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPk9sw6EsIGV1IHNvdSBvIEx1Y2FzIEIgQyBPbGl2ZWlyYTwvaDE+XHJcbiAgICAgIDxkaXY+e3Byb3BzLmN1cnJlbnREYXRlfTwvZGl2PlxyXG4gICAgICB7cHJvcHMucmVwb3MubWFwKHJlcG8gPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17cmVwby5pZH0+XHJcbiAgICAgICAgICAgIDxoMz57cmVwby5mdWxsX25hbWV9PC9oMz5cclxuICAgICAgICAgICAgPHA+TGFuZ3VhZ2U6IHtyZXBvLmxhbmd1YWdlfSB8IFN0YXJzOiB7cmVwby5zdGFyZ2F6ZXJzX2NvdW50fTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG5cclxuICBjb25zdCByZXNSZXBvcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0x1Y2FzLUItQy1PbGl2ZWlyYS9yZXBvcz9zb3J0PXVwZGF0ZWQnKVxyXG4gIGNvbnN0IG9yaWdpbmFsUmVwb3MgPSBhd2FpdCByZXNSZXBvcy5qc29uKClcclxuXHJcbiAgY29uc3QgZG9udFNob3dSZXBvcyA9IFsnTHVjYXMtQi1DLU9saXZlaXJhL3Rlc3QxJ11cclxuXHJcbiAgY29uc3QgaXNOb3RGb3JrID0gcmVwbyA9PiAhcmVwby5mb3JrXHJcbiAgY29uc3QgZG9udFNob3dGaWx0ZXIgPSByZXBvID0+IGRvbnRTaG93UmVwb3MuaW5kZXhPZihyZXBvLmZ1bGxfbmFtZSkgPT09IC0xXHJcbiAgY29uc3QgZXh0cmFjdERhdGEgPSByZXBvID0+ICh7XHJcbiAgICBpZDogcmVwby5pZCxcclxuICAgIGZ1bGxfbmFtZTogcmVwby5mdWxsX25hbWUsXHJcbiAgICBsYW5ndWFnZTogcmVwby5sYW5ndWFnZSxcclxuICAgIHN0YXJnYXplcnNfY291bnQ6IHJlcG8uc3RhcmdhemVyc19jb3VudFxyXG4gIH0pXHJcbiAgY29uc3QgcmVwb3MgPSBvcmlnaW5hbFJlcG9zXHJcbiAgICAuZmlsdGVyKGlzTm90Rm9yaylcclxuICAgIC5maWx0ZXIoZG9udFNob3dGaWx0ZXIpXHJcbiAgICAubWFwKGV4dHJhY3REYXRhKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgY3VycmVudERhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgICAgcmVwb3NcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sIm5hbWVzIjpbIlJlYWN0IiwiSW5kZXgiLCJwcm9wcyIsImRpdiIsImgxIiwiY3VycmVudERhdGUiLCJyZXBvcyIsIm1hcCIsInJlcG8iLCJoMyIsImZ1bGxfbmFtZSIsInAiLCJsYW5ndWFnZSIsInN0YXJnYXplcnNfY291bnQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});