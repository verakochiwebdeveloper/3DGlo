/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(100)\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (24:54)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|             calcDayValue = 2\\n| \\n>         } else f(calcDay.value && calcDay.value < 10) {\\n|             calcDayValue = 1.5\\n|         } \");\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector(\".menu\");\r\n  const menu = document.querySelector(\"menu\");\r\n  const closeBtn = menu.querySelector(\".clocse-btn\");\r\n  const menuItems = menu.querySelector(\"ul>li>a\");\r\n\r\n  const handlmenu = () => {\r\n    menu.classList.toggle(\"menu-active\");\r\n  };\r\n\r\n  menuBtn.addEventListener(\"click\", handlmenu);\r\n\r\n  closeBtn.addEventListener(\"click\", handlmenu);\r\n\r\n  menuItems.forEach((menuItem) => {\r\n    menuItem[i].addEventListener(\"click\", handlmenu);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => { \r\n    const modal = document.querySelector('.popup'); \r\n    const buttons = document.querySelectorAll('.popup-btn'); \r\n    const popupCloseBtn = modal.querySelector('.popup-close'); \r\n\r\n    buttons.forEach(btn => { \r\n        btn.addEventListener('click', () => { \r\n            modal.style.display = 'block'; \r\n        }); \r\n    }); \r\n\r\n    popupCloseBtn.addEventListener('click', () => { \r\n        modal.style.display = 'none'; \r\n    }); \r\n\r\n        const showModal = () => {\r\n            modal.classList.add('show');\r\n        };\r\n\r\n        const hideModal = () => {\r\n            modal.classList.remove('show');\r\n        };\r\n\r\n        const checkScreenWidth = () => {\r\n            if (window.innerWidth >= 768) {\r\n                showModal();\r\n            }\r\n        };\r\n\r\n        window.addEventListener('load', checkScreenWidth);\r\n\r\n        \r\n        buttons.forEach(btn => {\r\n            btn.addEventListener('click', () => {\r\n                showModal();\r\n            });\r\n        });\r\n\r\n        popupCloseBtn.addEventListener('click', () => {\r\n            hideModal();\r\n        });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  //portfolio-content\r\n  //portfolio-item\r\n  const sliderBlock = document.querySelector(\".portfolio-content\");\r\n  const slides = document.querySelectorAll(\".portfolio-item\");\r\n  const dots = document.querySelectorAll('dot')\r\n  let currentSlide = 0;\r\n  let interval; \r\n\r\n  slides.forEach((slide, index) => {\r\n    const dot = document.createElement('div');\r\n    dot.classList.add('dot');\r\n    dot.setAttribute('data-slide', index);\r\n    sliderBlock.appendChild(dot);\r\n\r\n    if(event.target.matches('.dot')) {\r\n      currentSlide = parseInt(event.target.getAttribute('data-slide'));\r\n    }\r\n    \r\n  });\r\n\r\n  \r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass)\r\n  };\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass)\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n    prevSlide(dots, currentSlide, 'dot-active')\r\n    currentSlide++\r\n    if(currentSlide >= slides.length) {\r\n        currentSlide = 0\r\n    }\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n    nextSlide(dots, currentSlide, 'dot-active')\r\n  };\r\n\r\n\r\n  const startSlide = ( timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer)\r\n  };\r\n  const stopSlide = () => {\r\n    clearInterval(interval)\r\n  };\r\n\r\n  sliderBlock.addEventListener('click', (event) => {\r\n    event.preventDefault()\r\n\r\n    if(!event.target.matches('.dot, .portfolio-btn')) {\r\n      return\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n    prevSlide(dots, currentSlide, 'dot-active')\r\n\r\n    if(event.target.matches('#arrow-right')) {\r\n      currentSlide++\r\n\r\n    } else if(event.target.matches('#arrow-left')) {\r\n      currentSlide--\r\n\r\n    } else if(event.target.classList.contains('dot')) {\r\n      dots.array.forEach((dot, index) => {\r\n        if(event.target === dot) {\r\n          currentSlide = index\r\n        } \r\n\r\n        \r\n      });\r\n\r\n      if(currentSlide >= slides.length) {\r\n        currentSlide = 0\r\n      }\r\n\r\n      if(currentSlide < 0 ) {\r\n        currentSlide = slides.length -1\r\n      }\r\n\r\n    }\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n    nextSlide(dots, currentSlide, 'dot-active')\r\n  })\r\n\r\n  sliderBlock.addEventListener('mouseinter', (event) =>{\r\n    if(event.target.matches('.dot, .portfolio-btn')) {\r\n      stopSlide(2000)\r\n    }\r\n  }, true)\r\n\r\n  sliderBlock.addEventListener('mouseleave', (event) =>{\r\n    if(event.target.matches('.dot, .portfolio-btn')) {\r\n      startSlide(2000)\r\n    }\r\n  },true)\r\n\r\n  startSlide(2000)\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelectorAll('.service-header');\r\n    const tabsContent = document.querySelectorAll('.service-tab');\r\n    const tab = document.querySelectorAll('.service-header-tab');\r\n\r\n    tabPanel.addEventListner('click', (event) => {\r\n        if (event.target.closest('.service-header-tab')) {\r\n            const tabBtn = event.target.closest('.service-header-tab')\r\n            tabs.forEach(tab, index => {\r\n                if(tab === event.target) {\r\n                    tab.classList.add('active')\r\n                    tabsContent[index].classList.remove('d-none')\r\n                } else {\r\n                    tab.classList.remove('active')\r\n                    tabsContent[index].classList.add('d-none')\r\n                }\r\n            });\r\n        }\r\n    })\r\n\r\n   }\r\n   \r\n   /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

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