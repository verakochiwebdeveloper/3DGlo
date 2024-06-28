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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(100)\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n    formId:'form1',\r\n     someElem:[\r\n        {\r\n            type: 'block',\r\n            id: 'total'\r\n        }\r\n     ]})\r\n     ;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n        formId:'form2',\r\n         someElem:[\r\n            {\r\n                type: 'block',\r\n                id: 'total'\r\n            }\r\n         ]})\r\n         ;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n            formId:'form3',\r\n             someElem:[\r\n                {\r\n                    type: 'block',\r\n                    id: 'total'\r\n                }\r\n             ]})\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\r\n    const calcBlock = document.querySelector('.calc-block');\r\n    const calcType = document.querySelector('.calc-type')\r\n    const calcSquare = document.querySelector('.calc-square')\r\n    const calcCount = document.querySelector('.calc-count')\r\n    const calcDay = document.querySelector('.calc-day')\r\n    const total = document.getElementById('total')\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value\r\n        const calcSquareValue = calcSquare.value\r\n\r\n        let totalValue = 0\r\n        let calcCountValue = 1\r\n        let calcDayValue = 1\r\n\r\n        if(calcCount.value > 1) {\r\n            calcCountValue += +calcCountValue / 10\r\n        }\r\n\r\n        if( calcDay.value && calcDay.value < 5) {\r\n            calcDayValue = 2\r\n\r\n        } else if(calcDay.value && calcDay.value < 10) {\r\n            calcDayValue = 1.5\r\n        } \r\n\r\n        if(calcType.value && calcSquare.value) {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue\r\n        } else {\r\n            totalValue = 0\r\n        }\r\n\r\n        total.textContent = totalValue\r\n    }\r\n\r\n    calcBlock.addEventListener('input', (event) => {\r\n\r\n        if(event.target === calcType || event.target === calcSquare || \r\n            event.target === calcCount || event.target === calcDay) {\r\n            countCalc()\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst animate = ({ duration, timing, draw, elem }) => {\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress);\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animate);\r\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.js */ \"./modules/helper.js\");\n\r\n\r\n\r\nconst modal = () => { \r\n    const modal = document.querySelector('.popup'); \r\n    const buttons = document.querySelectorAll('.popup-btn'); \r\n    const popupCloseBtn = modal.querySelector('.popup-close'); \r\n\r\n    buttons.forEach(btn => { \r\n        btn.addEventListener('click', () => { \r\n            modal.style.display = 'block'; \r\n        }); \r\n    }); \r\n\r\n    popupCloseBtn.addEventListener('click', () => { \r\n        modal.style.display = 'none'; \r\n    }); \r\n\r\n        const showModal = () => {\r\n            modal.classList.add('show');\r\n        };\r\n\r\n        const hideModal = () => {\r\n            modal.classList.remove('show');\r\n        };\r\n\r\n        const checkScreenWidth = () => {\r\n            if (window.innerWidth >= 768) {\r\n                showModal();\r\n            }\r\n        };\r\n\r\n        window.addEventListener('load', checkScreenWidth);\r\n\r\n        \r\n        buttons.forEach(btn => {\r\n            btn.addEventListener('click', () => {\r\n                showModal();\r\n                (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n                    duration: 1000,\r\n                    timing(timeFraction) {\r\n                        return timeFraction;\r\n                    },\r\n                    draw(progress) {\r\n                        elem.style.width = progress * 100 + '%';\r\n                    },\r\n                    elem: modal // Передаем modal в качестве элемента для анимации ширины\r\n                });\r\n            });\r\n        });\r\n        popupCloseBtn.addEventListener('click', () => {\r\n            hideModal();\r\n        });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({formId, someElem = []}) => {\r\n    const form = document.getElementById(formId);\r\n    const statusBlock = document.createElement('div');\r\n    const loadText = 'Загрузка';\r\n    const errorText = 'Ошибка';\r\n    const successText = 'Отправлено, менеджер свяжется с вами';\r\n\r\n    const validatePhone = (phone) => {\r\n        return /^[\\d()+-]*$/.test(phone);\r\n    };\r\n\r\n    const validateName = (name) => {\r\n        return /^[А-Яа-яЁё\\s]+$/.test(name);\r\n    };\r\n\r\n    const validateMessage = (message) => {\r\n        return /^[А-Яа-яЁё\\s\\d,.!?]+$/.test(message);\r\n    };\r\n\r\n    const validate = (formElements) => {\r\n        let success = true;\r\n\r\n        formElements.forEach(input => {\r\n            if (input.name === 'user_phone' && !validatePhone(input.value)) {\r\n                success = false;\r\n            } else if (input.name === 'user_name' && !validateName(input.value)) {\r\n                success = false;\r\n            } else if (input.name === 'user_message' && !validateMessage(input.value)) {\r\n                success = false;\r\n            }\r\n        });\r\n\r\n        return success;\r\n    };\r\n\r\n    const sendData = (data) => {\r\n        return fetch('', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json());\r\n    };\r\n\r\n    const submitForm = () => {\r\n        const formElements = form.querySelectorAll('input');\r\n        const formData = new FormData(form);\r\n        const formBody = {};\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val;\r\n        });\r\n\r\n        someElem.forEach(elem => {\r\n            const element = document.getElementById(elem.id);\r\n            if (elem.type === 'block') {\r\n                formBody[elem.id] = element.textContent;\r\n            } else if (elem.type === 'input') {\r\n                formBody[elem.id] = element.value;\r\n            }\r\n        });\r\n\r\n        if (validate(formElements)) {\r\n            sendData(formData).then(data => {\r\n                statusBlock.textContent = successText;\r\n                formElements.forEach(input => {\r\n                    input.value = '';\r\n                });\r\n            }).catch(error => {\r\n                statusBlock.textContent = errorText;\r\n            });\r\n        }\r\n    };\r\n\r\n    form.addEventListener('submit', (event) => {\r\n        event.preventDefault();\r\n\r\n        statusBlock.textContent = loadText;\r\n        form.append(statusBlock);\r\n\r\n        submitForm();\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  //portfolio-content\r\n  //portfolio-item\r\n  const sliderBlock = document.querySelector(\".portfolio-content\");\r\n  const slides = document.querySelectorAll(\".portfolio-item\");\r\n  const dots = document.querySelectorAll('dot')\r\n  let currentSlide = 0;\r\n  let interval; \r\n\r\n  slides.forEach((slide, index) => {\r\n    const dot = document.createElement('div');\r\n    dot.classList.add('dot');\r\n    dot.setAttribute('data-slide', index);\r\n    sliderBlock.appendChild(dot);\r\n\r\n    if(event.target.matches('.dot')) {\r\n      currentSlide = parseInt(event.target.getAttribute('data-slide'));\r\n    }\r\n    \r\n  });\r\n\r\n  \r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass)\r\n  };\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass)\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n    prevSlide(dots, currentSlide, 'dot-active')\r\n    currentSlide++\r\n    if(currentSlide >= slides.length) {\r\n        currentSlide = 0\r\n    }\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n    nextSlide(dots, currentSlide, 'dot-active')\r\n  };\r\n\r\n\r\n  const startSlide = ( timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer)\r\n  };\r\n  const stopSlide = () => {\r\n    clearInterval(interval)\r\n  };\r\n\r\n  sliderBlock.addEventListener('click', (event) => {\r\n    event.preventDefault()\r\n\r\n    if(!event.target.matches('.dot, .portfolio-btn')) {\r\n      return\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n    prevSlide(dots, currentSlide, 'dot-active')\r\n\r\n    if(event.target.matches('#arrow-right')) {\r\n      currentSlide++\r\n\r\n    } else if(event.target.matches('#arrow-left')) {\r\n      currentSlide--\r\n\r\n    } else if(event.target.classList.contains('dot')) {\r\n      dots.array.forEach((dot, index) => {\r\n        if(event.target === dot) {\r\n          currentSlide = index\r\n        } \r\n\r\n        \r\n      });\r\n\r\n      if(currentSlide >= slides.length) {\r\n        currentSlide = 0\r\n      }\r\n\r\n      if(currentSlide < 0 ) {\r\n        currentSlide = slides.length -1\r\n      }\r\n\r\n    }\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n    nextSlide(dots, currentSlide, 'dot-active')\r\n  })\r\n\r\n  sliderBlock.addEventListener('mouseinter', (event) =>{\r\n    if(event.target.matches('.dot, .portfolio-btn')) {\r\n      stopSlide(2000)\r\n    }\r\n  }, true)\r\n\r\n  sliderBlock.addEventListener('mouseleave', (event) =>{\r\n    if(event.target.matches('.dot, .portfolio-btn')) {\r\n      startSlide(2000)\r\n    }\r\n  },true)\r\n\r\n  startSlide(2000)\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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