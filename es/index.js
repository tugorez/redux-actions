'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineActions = exports.handleActions = exports.handleAction = exports.createActions = exports.createAction = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _reduxActions = require('redux-actions');

var _camelcase = require('./camelcase');

var _camelcase2 = _interopRequireDefault(_camelcase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var prepareTypes = function prepareTypes(opts, types) {
  return typeof opts === 'string' ? [opts].concat(_toConsumableArray(types)) : types;
};

var preparePrefix = function preparePrefix(opts) {
  return function (sufx) {
    return (typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object' && opts.prefix ? opts.prefix + '/' + sufx : sufx;
  };
};

var createActions = function createActions(options) {
  for (var _len = arguments.length, Alltypes = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    Alltypes[_key - 1] = arguments[_key];
  }

  var types = prepareTypes(options, Alltypes);
  var prefix = preparePrefix(options);
  return types.reduce(function (actions, rawType) {
    var type = (0, _camelcase2.default)(rawType);
    var prefixed = prefix(rawType);
    var action = (0, _reduxActions.createAction)(prefixed);
    return _extends({}, actions, _defineProperty({}, type, action));
  }, {});
};

exports.createAction = _reduxActions.createAction;
exports.createActions = createActions;
exports.handleAction = _reduxActions.handleAction;
exports.handleActions = _reduxActions.handleActions;
exports.combineActions = _reduxActions.combineActions;