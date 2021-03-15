/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/blocks/dal.js":
/*!******************************!*\
  !*** ./src/js/blocks/dal.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_ApiServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/ApiServices */ "./src/js/services/ApiServices.js");

const dal = {
  getData() {
    Object(_services_ApiServices__WEBPACK_IMPORTED_MODULE_0__["default"])().then(res => this.createTable(res.results));
  },

  initialTable() {
    document.querySelector('#SWTable tbody').innerHTML = `
            <tr>
                  <td>Planet name</td>
                  <td>Diameter</td>
                  <td>Climate</td>
                  <td>Gravity</td>
                  <td>Population</td>
            </tr>
        `;
  },

  createTable(data) {
    this.initialTable();
    data.map(n => {
      document.querySelector('#SWTable tbody').innerHTML += `
            <tr>
                <td>${n.name}</td>
                <td>${n.diameter}</td>
                <td>${n.climate}</td>
                <td>${n.gravity}</td>
                <td>${n.population}</td>
            </tr>
            `;
    });
  }

};
/* harmony default export */ __webpack_exports__["default"] = (dal);

/***/ }),

/***/ "./src/js/blocks/initialState.js":
/*!***************************************!*\
  !*** ./src/js/blocks/initialState.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let initialState = [{
  name: 'no data :(',
  diameter: 'no data :(',
  climate: 'no data :(',
  gravity: 'no data :(',
  population: 'no data :('
}];
/* harmony default export */ __webpack_exports__["default"] = (initialState);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_dal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/dal */ "./src/js/blocks/dal.js");
/* harmony import */ var _blocks_initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/initialState */ "./src/js/blocks/initialState.js");


window.addEventListener('DOMContentLoaded', () => {
  const loadButton = document.querySelector('#loadButton');
  const deleteButton = document.querySelector('#deleteButton');
  loadButton.addEventListener('click', () => _blocks_dal__WEBPACK_IMPORTED_MODULE_0__["default"].getData());
  deleteButton.addEventListener('click', () => _blocks_dal__WEBPACK_IMPORTED_MODULE_0__["default"].createTable(_blocks_initialState__WEBPACK_IMPORTED_MODULE_1__["default"]));
});

/***/ }),

/***/ "./src/js/services/ApiServices.js":
/*!****************************************!*\
  !*** ./src/js/services/ApiServices.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _apiBaseUrl = 'https://swapi.dev/api/';

const getPlanets = async () => {
  let res = await fetch(`${_apiBaseUrl}planets/`);
  return res.json();
};

/* harmony default export */ __webpack_exports__["default"] = (getPlanets);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map