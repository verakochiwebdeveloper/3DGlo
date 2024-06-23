/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\n    document.querySelectorAll('.calc-item').forEach(item => {\r\n        if (item.classList.contains('calc-square') || item.classList.contains('calc-count') || item.classList.contains('calc-day')) {\r\n            item.addEventListener('input', function() {\r\n                this.value = this.value.replace(/\\D/g, '');\r\n            });\r\n        }\r\n    });\r\n    document.querySelectorAll('input[type=\"text\"][placeholder=\"Ваше сообщение\"]').forEach(input => {\r\n        input.addEventListener('input', function() {\r\n            this.value = this.value.replace(/[^а-яА-Я\\s-]/g, '');\r\n        });\r\n    });\r\n    \r\n    document.querySelectorAll('input[type=\"email\"]').forEach(input => {\r\n        input.addEventListener('input', function() {\r\n            this.value = this.value.replace(/[^a-zA-Z0-9@_.!~*'\"]/g, '');\r\n        });\r\n    });\r\n    \r\n    document.querySelectorAll('input[type=\"tel\"]').forEach(input => {\r\n        input.addEventListener('input', function() {\r\n            this.value = this.value.replace(/[^\\d()-]/g, '');\r\n        });\r\n    });\r\n        \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector(\".menu\");\r\n  const menu = document.querySelector(\"menu\");\r\n  const closeBtn = menu.querySelector(\".clocse-btn\");\r\n  const menuItems = menu.querySelector(\"ul>li>a\");\r\n\r\n  const handlmenu = () => {\r\n    menu.classList.toggle(\"menu-active\");\r\n  };\r\n\r\n  menuBtn.addEventListener(\"click\", handlmenu);\r\n\r\n  closeBtn.addEventListener(\"click\", handlmenu);\r\n\r\n  menuItems.forEach((menuItem) => {\r\n    menuItem[i].addEventListener(\"click\", handlmenu);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => { \r\n    const modal = document.querySelector('.popup'); \r\n    const buttons = document.querySelectorAll('.popup-btn'); \r\n    const popupCloseBtn = modal.querySelector('.popup-close'); \r\n\r\n    buttons.forEach(btn => { \r\n        btn.addEventListener('click', () => { \r\n            modal.style.display = 'block'; \r\n        }); \r\n    }); \r\n\r\n    popupCloseBtn.addEventListener('click', () => { \r\n        modal.style.display = 'none'; \r\n    }); \r\n\r\n        const showModal = () => {\r\n            modal.classList.add('show');\r\n        };\r\n\r\n        const hideModal = () => {\r\n            modal.classList.remove('show');\r\n        };\r\n\r\n        const checkScreenWidth = () => {\r\n            if (window.innerWidth >= 768) {\r\n                showModal();\r\n            }\r\n        };\r\n\r\n        window.addEventListener('load', checkScreenWidth);\r\n\r\n        \r\n        buttons.forEach(btn => {\r\n            btn.addEventListener('click', () => {\r\n                showModal();\r\n            });\r\n        });\r\n\r\n        popupCloseBtn.addEventListener('click', () => {\r\n            hideModal();\r\n        });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n const tabsPanel = document.querySelectorAll('.service-header')\r\n const tabsContent = document.querySelectorAll('.service-tab')\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;