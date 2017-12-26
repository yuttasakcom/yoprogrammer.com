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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _dotenv = __webpack_require__(4);

var _dotenv2 = _interopRequireDefault(_dotenv);

var _routes = __webpack_require__(5);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Init environment
// use .env edit to dotenv.config()
_dotenv2.default.config();

// Create Express server.
// Module dependencies.
var app = (0, _express2.default)();

// Express configuration.
app.set('port', process.env.PORT || 3000);
app.use(_express2.default.static('public'));

// Routes.
(0, _routes2.default)(app);

// Start Express server.
app.listen(app.get('port'), function () {
  console.log('Server running at port:' + app.get('port'));
  console.log('Press CTRL-C to stop');
});

// Export app
exports.default = app;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _renderer = __webpack_require__(6);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = function router(app) {
  app.use('/api', function (req, res) {
    res.end('Welcome to NODE ES6');
  });

  app.get('*', function (req, res) {
    res.send((0, _renderer2.default)(req));
  });
};

exports.default = router;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(7);

var _reactRouterDom = __webpack_require__(1);

var _routes = __webpack_require__(8);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { location: req.path, context: {} },
    _react2.default.createElement(_routes2.default, null)
  ));

  return '<!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="UTF-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1.0">\n      <meta http-equiv="X-UA-Compatible" content="ie=edge">\n      <title>Yo Programmer</title>\n      <link rel=icon type=image/png href=/statics/img/favicon.png>\n      <link rel="stylesheet" href="/styles.css">\n    </head>\n    <body>\n      <div id="root">' + content + '</div>\n      <script src="bundle.js"></script>\n    </body>\n    </html>';
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _LoginPage = __webpack_require__(9);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _HomePage = __webpack_require__(11);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _UserPage = __webpack_require__(12);

var _UserPage2 = _interopRequireDefault(_UserPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = function Router() {
  return _react2.default.createElement(
    'div',
    { id: 'routes' },
    _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _HomePage2.default, exact: true }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _LoginPage2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/user', component: _UserPage2.default })
  );
};

exports.default = Router;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Header = __webpack_require__(10);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginPage = function LoginPage() {
  return _react2.default.createElement(
    'div',
    { id: 'login-page', className: 'background' },
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-12 col-lg-4 mt-sm-10 mt-md-10 mt-lg-21' },
          _react2.default.createElement(
            'div',
            { className: 'loginContainer' },
            _react2.default.createElement(
              'form',
              null,
              _react2.default.createElement(
                'h2',
                { className: 'mb-4 text-center' },
                _react2.default.createElement('i', { className: 'fa fa-lock', 'aria-hidden': 'true' }),
                ' ',
                '\u0E25\u0E47\u0E2D\u0E01\u0E2D\u0E34\u0E19\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'username' },
                  'Username'
                ),
                _react2.default.createElement('input', {
                  className: 'transparent border-left-0 border-top-0 border-right-0',
                  type: 'text',
                  placeholder: 'e.g. example',
                  required: true
                })
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'password' },
                  'Password'
                ),
                _react2.default.createElement('input', {
                  className: 'transparent border-left-0 border-top-0 border-right-0',
                  type: 'password',
                  placeholder: 'your password',
                  required: true
                })
              ),
              _react2.default.createElement(
                'button',
                {
                  type: 'submit',
                  className: 'btn btn-lg btn-block btn-outline-light mt-5'
                },
                _react2.default.createElement('i', { className: 'fa fa-key', 'aria-hidden': 'true' }),
                ' Login'
              ),
              _react2.default.createElement(
                'small',
                { className: 'form-text text-muted text-center mt-3' },
                _react2.default.createElement(
                  'span',
                  { className: 'mr-2 text-light' },
                  'Login with Facebook : '
                ),
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '' },
                  _react2.default.createElement('i', {
                    className: 'fa fa-facebook-official fs-20',
                    'aria-hidden': 'true'
                  })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-12 col-lg-8 mt-5 mt-md-10 mt-lg-20 pl-lg-20' },
          _react2.default.createElement(
            'div',
            { className: 'd-flex justify-content-between' },
            _react2.default.createElement('div', { className: 'border login-line' }),
            _react2.default.createElement(
              'div',
              { className: 'loginText' },
              _react2.default.createElement(
                'h1',
                null,
                'POS'
              ),
              _react2.default.createElement(
                'h2',
                null,
                '\u0E23\u0E30\u0E1A\u0E1A\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32'
              ),
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  '\u0E2A\u0E30\u0E14\u0E27\u0E01 \u0E23\u0E27\u0E14\u0E40\u0E23\u0E47\u0E27 \u0E2A\u0E27\u0E22\u0E07\u0E32\u0E21 \u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E07\u0E48\u0E32\u0E22'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  '\u0E21\u0E35 Feature \u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22 \u0E41\u0E25\u0E30 \u0E1F\u0E23\u0E35!'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  '\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22 (OWASP Top 10 - 2017) '
                )
              )
            )
          )
        )
      )
    )
  );
};

exports.default = LoginPage;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    'header',
    null,
    _react2.default.createElement(
      'nav',
      { className: 'navbar navbar-dark bg-inverse navbar-expand-sm' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/', className: 'navbar-brand' },
          'YoProgrammer'
        )
      )
    )
  );
};

exports.default = Header;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
  return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
};

exports.default = HomePage;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserPage = function UserPage() {
  return _react2.default.createElement(
    'div',
    null,
    'User Page'
  );
};

exports.default = UserPage;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map