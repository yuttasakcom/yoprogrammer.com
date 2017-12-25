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

var _Header = __webpack_require__(9);

var _Header2 = _interopRequireDefault(_Header);

var _HomePage = __webpack_require__(10);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _UserPage = __webpack_require__(11);

var _UserPage2 = _interopRequireDefault(_UserPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = function Router() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _HomePage2.default, exact: true }),
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    'header',
    null,
    _react2.default.createElement(
      'nav',
      { className: 'navbar navbar-dark bg-dark navbar-expand-sm' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/', className: 'navbar-brand' },
          'Yo Programmer'
        )
      )
    )
  );
};

exports.default = Header;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HomePage = function HomePage() {
  return _react2.default.createElement(
    "div",
    { className: "container" },
    _react2.default.createElement(
      "div",
      { className: "row" },
      _react2.default.createElement(
        "div",
        { className: "col-12 col-lg-8" },
        _react2.default.createElement(
          "div",
          { className: "card my-3 my-lg-5" },
          _react2.default.createElement("img", {
            className: "card-img-top",
            src: "/statics/img/full-stack-developer1.png",
            alt: "Card image cap"
          }),
          _react2.default.createElement(
            "div",
            { className: "card-body" },
            _react2.default.createElement(
              "h4",
              { className: "card-title" },
              "\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E32\u0E07\u0E2A\u0E39\u0E48 Full Stack Web Developer"
            ),
            _react2.default.createElement(
              "p",
              { className: "card-text" },
              _react2.default.createElement(
                "small",
                { className: "text-muted" },
                "Last updated 3 mins ago"
              )
            ),
            _react2.default.createElement(
              "p",
              { className: "card-text" },
              "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            ),
            _react2.default.createElement(
              "p",
              _defineProperty({ className: "card-text" }, "className", "text-right"),
              _react2.default.createElement(
                "button",
                { className: "btn btn-primary" },
                "\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D"
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "col-12 col-lg-4" },
        "b"
      )
    )
  );
};

exports.default = HomePage;

/***/ }),
/* 11 */
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