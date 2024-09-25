/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/about.css":
/*!******************************!*\
  !*** ./src/styles/about.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/scripts/about.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_about_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/about.css */ "./src/styles/about.css");
// about.js //



console.log("from about.js");

const elem = (prop, par) => (par || document).querySelector(prop);
const elems = (prop, par) => (par || document).querySelectorAll(prop);

// will need to get width fronm bounding rect when media query is applied //
// need WIDTH = slideFrame.getBoundingClientRect().width / (images.length - 1);

let sliderIndex = 0;

const nextImg = function () {
    const images = elems('.img-cont');
    if (sliderIndex === images.length - 1) return;
   
    sliderIndex += 1;
    shiftImage();
    console.log('nextImg');
};

const prevImg = function () {
    if (sliderIndex === 0) return
    sliderIndex -= 1;
    shiftImage();
    console.log('prevImg');
};

const shiftImage = function (ms = 400) {
    const slideFrame = elem('#img-content');
    const images = elems('.img-cont');
    const newWIDTH = slideFrame.getBoundingClientRect().width / (images.length);
    console.log(newWIDTH);
    slideFrame.style.transitionDuration = `${ms}ms`;
    slideFrame.style.transform = `translateX(${-newWIDTH * sliderIndex}px)`;
};

document.addEventListener('DOMContentLoaded', () => {
    const serviceMenuLink = document.querySelector('#services');
    const dropDownMenu = document.querySelector('#dropdown-menu');

    const toggleMenuDisplay = function () {
      dropDownMenu.style.top = `${serviceMenuLink.offsetTop + 40}px`;
      dropDownMenu.style.left = `${serviceMenuLink.offsetLeft}px`;
      dropDownMenu.style.display = 'flex';
    };

    serviceMenuLink.addEventListener('mouseover', () => {
        toggleMenuDisplay();
        console.log('serviceMenuLink: mouseover');
    });

    serviceMenuLink.addEventListener('mouseout', () => {
        dropDownMenu.style.display = 'none';
        console.log("mouseout");
    });

    dropDownMenu.addEventListener('mouseover', () => {
        toggleMenuDisplay();
        console.log('dropDownMenu: mouseover');
    });

    // img slider functionality: //
    const imgSlideButtons = elems('.scroll-slider');
    imgSlideButtons[0].addEventListener('click', prevImg);
    imgSlideButtons[1].addEventListener('click', nextImg);

    // nav overlay opening
    const navOpenBtn = elem('#mobile-nav-btn');
    const navDialog = elem('#mobile-dialog');
    const closeDiaNav = elem('.nav-close-btn');
    const servicesSymb = document.querySelector('.dia-menu-symb');

    navOpenBtn.addEventListener('click', () => {
        navDialog.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    closeDiaNav.addEventListener('click', () => {
        subNavDisplay.style.display = 'none';
        document.body.style.overflow = '';
        navDialog.style.display = 'none';
        servicesSymb.textContent = '+';
    });

    // nav subservice menu opening
    const subNavbtn = document.querySelector('#services-nav');
    const subNavDisplay = document.querySelector('#nav-srvc-menu');
    subNavbtn.addEventListener('click', () => {
        if (subNavDisplay.style.display === 'none') {
            subNavDisplay.style.display = 'flex';
            servicesSymb.textContent = '-';
        } else {
            subNavDisplay.style.display = 'none';
            servicesSymb.textContent = '+';
        }
    });

});


/******/ })()
;
//# sourceMappingURL=about.bundle.js.map