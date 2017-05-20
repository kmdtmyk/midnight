(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Midnight"] = factory();
	else
		root["Midnight"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
class Midnight extends Date {

  constructor() {
    super(...arguments);
    this._fixTime();
  }

  addDays(days) {
    return this.day(this.day() + days);
  }

  addMonths(months) {
    return this.month(this.month() + months);
  }

  addYears(years) {
    return this.year(this.year() + years);
  }

  static create(year, month, day) {
    return new Midnight(year, month - 1, day);
  }

  day(day) {
    if (arguments.length === 0) {
      return this.getDate();
    }
    const o = this.toObject();
    return Midnight.create(o.year, o.month, day);
  }

  endOfMonth() {
    return this.addMonths(1).day(0);
  }

  equals(value) {
    if (!value) {
      return false;
    }
    const date = new Date(value);
    return this.getFullYear() === date.getFullYear() && this.getMonth() === date.getMonth() && this.getDate() === date.getDate();
  }

  static equals(value1, value2) {
    return new Midnight(value1).equals(value2);
  }

  month(month) {
    const o = this.toObject();
    if (arguments.length === 0) {
      return o.month;
    }
    const d1 = Midnight.create(o.year, month, o.day);
    const d2 = Midnight.create(o.year, month + 1, 0);
    return d1 < d2 ? d1 : d2;
  }

  startOfMonth() {
    return this.day(1);
  }

  toObject() {
    const year = this.getFullYear();
    const month = this.getMonth() + 1;
    const day = this.getDate();
    return { year, month, day };
  }

  year(year) {
    const o = this.toObject();
    if (arguments.length === 0) {
      return o.year;
    }
    const d1 = Midnight.create(year, o.month, o.day);
    const d2 = Midnight.create(year, o.month + 1, 0);
    return d1 < d2 ? d1 : d2;
  }

  _fixTime() {
    super.setHours(0);
    super.setMinutes(0);
    super.setSeconds(0);
    super.setMilliseconds(0);
  }

}
/* harmony export (immutable) */ __webpack_exports__["default"] = Midnight;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhMjdmOTBhMjJlNTk3ZjAxNjg2YyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkbmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIk1pZG5pZ2h0IiwiRGF0ZSIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwiX2ZpeFRpbWUiLCJhZGREYXlzIiwiZGF5cyIsImRheSIsImFkZE1vbnRocyIsIm1vbnRocyIsIm1vbnRoIiwiYWRkWWVhcnMiLCJ5ZWFycyIsInllYXIiLCJjcmVhdGUiLCJsZW5ndGgiLCJnZXREYXRlIiwibyIsInRvT2JqZWN0IiwiZW5kT2ZNb250aCIsImVxdWFscyIsInZhbHVlIiwiZGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJ2YWx1ZTEiLCJ2YWx1ZTIiLCJkMSIsImQyIiwic3RhcnRPZk1vbnRoIiwic2V0SG91cnMiLCJzZXRNaW51dGVzIiwic2V0U2Vjb25kcyIsInNldE1pbGxpc2Vjb25kcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDaEVlLE1BQU1BLFFBQU4sU0FBdUJDLElBQXZCLENBQTJCOztBQUV4Q0MsZ0JBQWE7QUFDWCxVQUFNLEdBQUdDLFNBQVQ7QUFDQSxTQUFLQyxRQUFMO0FBQ0Q7O0FBRURDLFVBQVFDLElBQVIsRUFBYTtBQUNYLFdBQU8sS0FBS0MsR0FBTCxDQUFTLEtBQUtBLEdBQUwsS0FBYUQsSUFBdEIsQ0FBUDtBQUNEOztBQUVERSxZQUFVQyxNQUFWLEVBQWlCO0FBQ2YsV0FBTyxLQUFLQyxLQUFMLENBQVcsS0FBS0EsS0FBTCxLQUFlRCxNQUExQixDQUFQO0FBQ0Q7O0FBRURFLFdBQVNDLEtBQVQsRUFBZTtBQUNiLFdBQU8sS0FBS0MsSUFBTCxDQUFVLEtBQUtBLElBQUwsS0FBY0QsS0FBeEIsQ0FBUDtBQUNEOztBQUVELFNBQU9FLE1BQVAsQ0FBY0QsSUFBZCxFQUFvQkgsS0FBcEIsRUFBMkJILEdBQTNCLEVBQStCO0FBQzdCLFdBQU8sSUFBSVAsUUFBSixDQUFhYSxJQUFiLEVBQW1CSCxRQUFRLENBQTNCLEVBQThCSCxHQUE5QixDQUFQO0FBQ0Q7O0FBRURBLE1BQUlBLEdBQUosRUFBUTtBQUNOLFFBQUdKLFVBQVVZLE1BQVYsS0FBcUIsQ0FBeEIsRUFBMEI7QUFDeEIsYUFBTyxLQUFLQyxPQUFMLEVBQVA7QUFDRDtBQUNELFVBQU1DLElBQUksS0FBS0MsUUFBTCxFQUFWO0FBQ0EsV0FBT2xCLFNBQVNjLE1BQVQsQ0FBZ0JHLEVBQUVKLElBQWxCLEVBQXdCSSxFQUFFUCxLQUExQixFQUFpQ0gsR0FBakMsQ0FBUDtBQUNEOztBQUVEWSxlQUFZO0FBQ1YsV0FBTyxLQUFLWCxTQUFMLENBQWUsQ0FBZixFQUFrQkQsR0FBbEIsQ0FBc0IsQ0FBdEIsQ0FBUDtBQUNEOztBQUVEYSxTQUFPQyxLQUFQLEVBQWE7QUFDWCxRQUFHLENBQUNBLEtBQUosRUFBVTtBQUNSLGFBQU8sS0FBUDtBQUNEO0FBQ0QsVUFBTUMsT0FBTyxJQUFJckIsSUFBSixDQUFTb0IsS0FBVCxDQUFiO0FBQ0EsV0FDRSxLQUFLRSxXQUFMLE9BQXVCRCxLQUFLQyxXQUFMLEVBQXZCLElBQ0EsS0FBS0MsUUFBTCxPQUFvQkYsS0FBS0UsUUFBTCxFQURwQixJQUVBLEtBQUtSLE9BQUwsT0FBbUJNLEtBQUtOLE9BQUwsRUFIckI7QUFLRDs7QUFFRCxTQUFPSSxNQUFQLENBQWNLLE1BQWQsRUFBc0JDLE1BQXRCLEVBQTZCO0FBQzNCLFdBQU8sSUFBSTFCLFFBQUosQ0FBYXlCLE1BQWIsRUFBcUJMLE1BQXJCLENBQTRCTSxNQUE1QixDQUFQO0FBQ0Q7O0FBRURoQixRQUFNQSxLQUFOLEVBQVk7QUFDVixVQUFNTyxJQUFJLEtBQUtDLFFBQUwsRUFBVjtBQUNBLFFBQUdmLFVBQVVZLE1BQVYsS0FBcUIsQ0FBeEIsRUFBMEI7QUFDeEIsYUFBT0UsRUFBRVAsS0FBVDtBQUNEO0FBQ0QsVUFBTWlCLEtBQUszQixTQUFTYyxNQUFULENBQWdCRyxFQUFFSixJQUFsQixFQUF3QkgsS0FBeEIsRUFBK0JPLEVBQUVWLEdBQWpDLENBQVg7QUFDQSxVQUFNcUIsS0FBSzVCLFNBQVNjLE1BQVQsQ0FBZ0JHLEVBQUVKLElBQWxCLEVBQXdCSCxRQUFRLENBQWhDLEVBQW1DLENBQW5DLENBQVg7QUFDQSxXQUFPaUIsS0FBS0MsRUFBTCxHQUFVRCxFQUFWLEdBQWVDLEVBQXRCO0FBQ0Q7O0FBRURDLGlCQUFjO0FBQ1osV0FBTyxLQUFLdEIsR0FBTCxDQUFTLENBQVQsQ0FBUDtBQUNEOztBQUVEVyxhQUFVO0FBQ1IsVUFBTUwsT0FBTyxLQUFLVSxXQUFMLEVBQWI7QUFDQSxVQUFNYixRQUFRLEtBQUtjLFFBQUwsS0FBa0IsQ0FBaEM7QUFDQSxVQUFNakIsTUFBTSxLQUFLUyxPQUFMLEVBQVo7QUFDQSxXQUFPLEVBQUNILElBQUQsRUFBT0gsS0FBUCxFQUFjSCxHQUFkLEVBQVA7QUFDRDs7QUFFRE0sT0FBS0EsSUFBTCxFQUFVO0FBQ1IsVUFBTUksSUFBSSxLQUFLQyxRQUFMLEVBQVY7QUFDQSxRQUFHZixVQUFVWSxNQUFWLEtBQXFCLENBQXhCLEVBQTBCO0FBQ3hCLGFBQU9FLEVBQUVKLElBQVQ7QUFDRDtBQUNELFVBQU1jLEtBQUszQixTQUFTYyxNQUFULENBQWdCRCxJQUFoQixFQUFzQkksRUFBRVAsS0FBeEIsRUFBK0JPLEVBQUVWLEdBQWpDLENBQVg7QUFDQSxVQUFNcUIsS0FBSzVCLFNBQVNjLE1BQVQsQ0FBZ0JELElBQWhCLEVBQXNCSSxFQUFFUCxLQUFGLEdBQVUsQ0FBaEMsRUFBbUMsQ0FBbkMsQ0FBWDtBQUNBLFdBQU9pQixLQUFLQyxFQUFMLEdBQVVELEVBQVYsR0FBZUMsRUFBdEI7QUFDRDs7QUFFRHhCLGFBQVU7QUFDUixVQUFNMEIsUUFBTixDQUFlLENBQWY7QUFDQSxVQUFNQyxVQUFOLENBQWlCLENBQWpCO0FBQ0EsVUFBTUMsVUFBTixDQUFpQixDQUFqQjtBQUNBLFVBQU1DLGVBQU4sQ0FBc0IsQ0FBdEI7QUFDRDs7QUF2RnVDLEM7Ozs7Ozs7O0FDQTFDQyxPQUFPQyxPQUFQLEdBQWlCLG1CQUFBQyxDQUFRLENBQVIsRUFBc0JDLE9BQXZDLEMiLCJmaWxlIjoibWlkbmlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJNaWRuaWdodFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJNaWRuaWdodFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGEyN2Y5MGEyMmU1OTdmMDE2ODZjIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlkbmlnaHQgZXh0ZW5kcyBEYXRle1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKVxuICAgIHRoaXMuX2ZpeFRpbWUoKVxuICB9XG5cbiAgYWRkRGF5cyhkYXlzKXtcbiAgICByZXR1cm4gdGhpcy5kYXkodGhpcy5kYXkoKSArIGRheXMpXG4gIH1cblxuICBhZGRNb250aHMobW9udGhzKXtcbiAgICByZXR1cm4gdGhpcy5tb250aCh0aGlzLm1vbnRoKCkgKyBtb250aHMpXG4gIH1cblxuICBhZGRZZWFycyh5ZWFycyl7XG4gICAgcmV0dXJuIHRoaXMueWVhcih0aGlzLnllYXIoKSArIHllYXJzKVxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSh5ZWFyLCBtb250aCwgZGF5KXtcbiAgICByZXR1cm4gbmV3IE1pZG5pZ2h0KHllYXIsIG1vbnRoIC0gMSwgZGF5KVxuICB9XG5cbiAgZGF5KGRheSl7XG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCl7XG4gICAgICByZXR1cm4gdGhpcy5nZXREYXRlKClcbiAgICB9XG4gICAgY29uc3QgbyA9IHRoaXMudG9PYmplY3QoKVxuICAgIHJldHVybiBNaWRuaWdodC5jcmVhdGUoby55ZWFyLCBvLm1vbnRoLCBkYXkpXG4gIH1cblxuICBlbmRPZk1vbnRoKCl7XG4gICAgcmV0dXJuIHRoaXMuYWRkTW9udGhzKDEpLmRheSgwKVxuICB9XG5cbiAgZXF1YWxzKHZhbHVlKXtcbiAgICBpZighdmFsdWUpe1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSlcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5nZXRGdWxsWWVhcigpID09PSBkYXRlLmdldEZ1bGxZZWFyKCkgJiZcbiAgICAgIHRoaXMuZ2V0TW9udGgoKSA9PT0gZGF0ZS5nZXRNb250aCgpICYmXG4gICAgICB0aGlzLmdldERhdGUoKSA9PT0gZGF0ZS5nZXREYXRlKClcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZXF1YWxzKHZhbHVlMSwgdmFsdWUyKXtcbiAgICByZXR1cm4gbmV3IE1pZG5pZ2h0KHZhbHVlMSkuZXF1YWxzKHZhbHVlMilcbiAgfVxuXG4gIG1vbnRoKG1vbnRoKXtcbiAgICBjb25zdCBvID0gdGhpcy50b09iamVjdCgpXG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCl7XG4gICAgICByZXR1cm4gby5tb250aFxuICAgIH1cbiAgICBjb25zdCBkMSA9IE1pZG5pZ2h0LmNyZWF0ZShvLnllYXIsIG1vbnRoLCBvLmRheSlcbiAgICBjb25zdCBkMiA9IE1pZG5pZ2h0LmNyZWF0ZShvLnllYXIsIG1vbnRoICsgMSwgMClcbiAgICByZXR1cm4gZDEgPCBkMiA/IGQxIDogZDJcbiAgfVxuXG4gIHN0YXJ0T2ZNb250aCgpe1xuICAgIHJldHVybiB0aGlzLmRheSgxKVxuICB9XG5cbiAgdG9PYmplY3QoKXtcbiAgICBjb25zdCB5ZWFyID0gdGhpcy5nZXRGdWxsWWVhcigpXG4gICAgY29uc3QgbW9udGggPSB0aGlzLmdldE1vbnRoKCkgKyAxXG4gICAgY29uc3QgZGF5ID0gdGhpcy5nZXREYXRlKClcbiAgICByZXR1cm4ge3llYXIsIG1vbnRoLCBkYXl9XG4gIH1cblxuICB5ZWFyKHllYXIpe1xuICAgIGNvbnN0IG8gPSB0aGlzLnRvT2JqZWN0KClcbiAgICBpZihhcmd1bWVudHMubGVuZ3RoID09PSAwKXtcbiAgICAgIHJldHVybiBvLnllYXJcbiAgICB9XG4gICAgY29uc3QgZDEgPSBNaWRuaWdodC5jcmVhdGUoeWVhciwgby5tb250aCwgby5kYXkpXG4gICAgY29uc3QgZDIgPSBNaWRuaWdodC5jcmVhdGUoeWVhciwgby5tb250aCArIDEsIDApXG4gICAgcmV0dXJuIGQxIDwgZDIgPyBkMSA6IGQyXG4gIH1cblxuICBfZml4VGltZSgpe1xuICAgIHN1cGVyLnNldEhvdXJzKDApXG4gICAgc3VwZXIuc2V0TWludXRlcygwKVxuICAgIHN1cGVyLnNldFNlY29uZHMoMClcbiAgICBzdXBlci5zZXRNaWxsaXNlY29uZHMoMClcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWlkbmlnaHQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbWlkbmlnaHQnKS5kZWZhdWx0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9