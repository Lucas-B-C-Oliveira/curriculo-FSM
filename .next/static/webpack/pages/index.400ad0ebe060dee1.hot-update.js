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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar Index = function(param) {\n    var repos = param.repos, user = param.user;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"container mx-auto\",\n        __source: {\n            fileName: \"D:\\\\Avell\\\\Projects\\\\FullStackMaster\\\\LUCAS-RESUME\\\\pages\\\\index.js\",\n            lineNumber: 5,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: \"text-5xl\",\n                __source: {\n                    fileName: \"D:\\\\Avell\\\\Projects\\\\FullStackMaster\\\\LUCAS-RESUME\\\\pages\\\\index.js\",\n                    lineNumber: 6,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Ol\\xe1, eu sou o Lucas B C Oliveira\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                className: \"font-bold text-3xl\",\n                __source: {\n                    fileName: \"D:\\\\Avell\\\\Projects\\\\FullStackMaster\\\\LUCAS-RESUME\\\\pages\\\\index.js\",\n                    lineNumber: 7,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Meus Reposit\\xf3rios no GitHub\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                __source: {\n                    fileName: \"D:\\\\Avell\\\\Projects\\\\FullStackMaster\\\\LUCAS-RESUME\\\\pages\\\\index.js\",\n                    lineNumber: 8,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    \"GitHub stats: public repos: \",\n                    user.public_repos,\n                    \" / public gists: \",\n                    user.public_gists,\n                    \" / followers: \",\n                    user.followers\n                ]\n            }),\n            props.repos.map(function(repo) {\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md\",\n                    __source: {\n                        fileName: \"D:\\\\Avell\\\\Projects\\\\FullStackMaster\\\\LUCAS-RESUME\\\\pages\\\\index.js\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    },\n                    __self: _this1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                            className: \"font-bold\",\n                            __source: {\n                                fileName: \"D:\\\\Avell\\\\Projects\\\\FullStackMaster\\\\LUCAS-RESUME\\\\pages\\\\index.js\",\n                                lineNumber: 12,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: repo.full_name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                            __source: {\n                                fileName: \"D:\\\\Avell\\\\Projects\\\\FullStackMaster\\\\LUCAS-RESUME\\\\pages\\\\index.js\",\n                                lineNumber: 13,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: [\n                                \"Language: \",\n                                repo.language,\n                                \" | Stars: \",\n                                repo.stargazers_count\n                            ]\n                        })\n                    ]\n                }, repo.id));\n            })\n        ]\n    }));\n};\n_c = Index;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCOztBQUV6QixHQUFLLENBQUNDLEtBQUssR0FBRyxRQUFRLFFBQWEsQ0FBQztRQUFuQkMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLElBQUksU0FBSkEsSUFBSTs7SUFDMUIsTUFBTSx1RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBbUI7Ozs7Ozs7O2lGQUMvQkMsQ0FBRTtnQkFBQ0QsU0FBUyxFQUFDLENBQVU7Ozs7Ozs7MEJBQUMsQ0FBZ0M7O2lGQUN2REUsQ0FBQztnQkFBQ0YsU0FBUyxFQUFDLENBQW9COzs7Ozs7OzBCQUFDLENBQTJCOztrRkFDN0RHLENBQUM7Ozs7Ozs7O29CQUFDLENBQTRCO29CQUFDTCxJQUFJLENBQUNNLFlBQVk7b0JBQUMsQ0FBaUI7b0JBQUNOLElBQUksQ0FBQ08sWUFBWTtvQkFBQyxDQUFjO29CQUFDUCxJQUFJLENBQUNRLFNBQVM7OztZQUNsSEMsS0FBSyxDQUFDVixLQUFLLENBQUNXLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxJQUFJLEVBQUksQ0FBQztnQkFDeEIsTUFBTSx1RUFDSFYsQ0FBRztvQkFBZUMsU0FBUyxFQUFDLENBQW1EOzs7Ozs7Ozs2RkFDN0VVLENBQUU7NEJBQUNWLFNBQVMsRUFBQyxDQUFXOzs7Ozs7O3NDQUFFUyxJQUFJLENBQUNFLFNBQVM7OzhGQUN4Q1IsQ0FBQzs7Ozs7Ozs7Z0NBQUMsQ0FBVTtnQ0FBQ00sSUFBSSxDQUFDRyxRQUFRO2dDQUFDLENBQVU7Z0NBQUNILElBQUksQ0FBQ0ksZ0JBQWdCOzs7O21CQUZwREosSUFBSSxDQUFDSyxFQUFFO1lBS3JCLENBQUM7OztBQUdQLENBQUM7S0FoQktsQixLQUFLOztBQWtEWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEluZGV4ID0gKHsgcmVwb3MsIHVzZXIgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG14LWF1dG8nPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTV4bCc+T2zDoSwgZXUgc291IG8gTHVjYXMgQiBDIE9saXZlaXJhPC9oMT5cclxuICAgICAgPGgyIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtM3hsJz5NZXVzIFJlcG9zaXTDs3Jpb3Mgbm8gR2l0SHViPC9oMj5cclxuICAgICAgPHA+R2l0SHViIHN0YXRzOiBwdWJsaWMgcmVwb3M6IHt1c2VyLnB1YmxpY19yZXBvc30gLyBwdWJsaWMgZ2lzdHM6IHt1c2VyLnB1YmxpY19naXN0c30gLyBmb2xsb3dlcnM6IHt1c2VyLmZvbGxvd2Vyc308L3A+XHJcbiAgICAgIHtwcm9wcy5yZXBvcy5tYXAocmVwbyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYga2V5PXtyZXBvLmlkfSBjbGFzc05hbWU9J3JvdW5kZWQgYmctZ3JheS0yMDAgbXgtOCBteS00IHAtNCBob3ZlcjpzaGFkb3ctbWQnPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdmb250LWJvbGQnPntyZXBvLmZ1bGxfbmFtZX08L2gzPlxyXG4gICAgICAgICAgICA8cD5MYW5ndWFnZToge3JlcG8ubGFuZ3VhZ2V9IHwgU3RhcnM6IHtyZXBvLnN0YXJnYXplcnNfY291bnR9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcblxyXG4gIGNvbnN0IHJlc1VzZXIgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9MdWNhcy1CLUMtT2xpdmVpcmEnKVxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCByZXNVc2VyLmpzb24oKVxyXG5cclxuICBjb25zdCByZXNSZXBvcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0x1Y2FzLUItQy1PbGl2ZWlyYS9yZXBvcz9zb3J0PXVwZGF0ZWQnKVxyXG4gIGNvbnN0IG9yaWdpbmFsUmVwb3MgPSBhd2FpdCByZXNSZXBvcy5qc29uKClcclxuXHJcbiAgY29uc3QgZG9udFNob3dSZXBvcyA9IFsnTHVjYXMtQi1DLU9saXZlaXJhL3Rlc3QxJ11cclxuXHJcbiAgY29uc3QgaXNOb3RGb3JrID0gcmVwbyA9PiAhcmVwby5mb3JrXHJcbiAgY29uc3QgZG9udFNob3dGaWx0ZXIgPSByZXBvID0+IGRvbnRTaG93UmVwb3MuaW5kZXhPZihyZXBvLmZ1bGxfbmFtZSkgPT09IC0xXHJcbiAgY29uc3QgZXh0cmFjdERhdGEgPSByZXBvID0+ICh7XHJcbiAgICBpZDogcmVwby5pZCxcclxuICAgIGZ1bGxfbmFtZTogcmVwby5mdWxsX25hbWUsXHJcbiAgICBsYW5ndWFnZTogcmVwby5sYW5ndWFnZSxcclxuICAgIHN0YXJnYXplcnNfY291bnQ6IHJlcG8uc3RhcmdhemVyc19jb3VudFxyXG4gIH0pXHJcbiAgY29uc3QgcmVwb3MgPSBvcmlnaW5hbFJlcG9zXHJcbiAgICAuZmlsdGVyKGlzTm90Rm9yaylcclxuICAgIC5maWx0ZXIoZG9udFNob3dGaWx0ZXIpXHJcbiAgICAubWFwKGV4dHJhY3REYXRhKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgY3VycmVudERhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgICAgcmVwb3MsXHJcbiAgICAgIHVzZXJcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sIm5hbWVzIjpbIlJlYWN0IiwiSW5kZXgiLCJyZXBvcyIsInVzZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwicCIsInB1YmxpY19yZXBvcyIsInB1YmxpY19naXN0cyIsImZvbGxvd2VycyIsInByb3BzIiwibWFwIiwicmVwbyIsImgzIiwiZnVsbF9uYW1lIiwibGFuZ3VhZ2UiLCJzdGFyZ2F6ZXJzX2NvdW50IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});