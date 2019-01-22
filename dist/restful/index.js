"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _redis = _interopRequireDefault(require("../external-libs/redis"));

var router = (0, _express.Router)(); // middleware to use for all requests

router.use(function (req, res, next) {
  // do logging
  next(); // make sure we go to the next routes and don't stop here
});
/* Show API */

router.route("/time").get(
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(req, res, next) {
    var data;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            // test redis
            _redis.default.set("foo", "bar");

            _redis.default.get("foo").then(function (result) {
              console.log(result);
            });

            data = Math.floor(Date.now() / 1000);
            return _context.abrupt("return", res.json(data));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", next(_context.t0));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXN0ZnVsL2luZGV4LmpzIl0sIm5hbWVzIjpbInJvdXRlciIsInVzZSIsInJlcSIsInJlcyIsIm5leHQiLCJyb3V0ZSIsImdldCIsIlJlZGlzIiwic2V0IiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFJQSxNQUFNLEdBQUcsc0JBQWIsQyxDQUVBOztBQUNBQSxNQUFNLENBQUNDLEdBQVAsQ0FBVyxVQUFTQyxHQUFULEVBQWNDLEdBQWQsRUFBbUJDLElBQW5CLEVBQXlCO0FBQ2xDO0FBQ0FBLEVBQUFBLElBQUksR0FGOEIsQ0FFMUI7QUFDVCxDQUhEO0FBS0E7O0FBQ0FKLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhLE9BQWIsRUFBc0JDLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBMEIsaUJBQU9KLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRXRCO0FBQ0FHLDJCQUFNQyxHQUFOLENBQVUsS0FBVixFQUFpQixLQUFqQjs7QUFDQUQsMkJBQU1ELEdBQU4sQ0FBVSxLQUFWLEVBQWlCRyxJQUFqQixDQUFzQixVQUFTQyxNQUFULEVBQWlCO0FBQ3JDQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUNELGFBRkQ7O0FBSU1HLFlBQUFBLElBUmdCLEdBUVRDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxJQUFJLENBQUNDLEdBQUwsS0FBYSxJQUF4QixDQVJTO0FBQUEsNkNBU2ZkLEdBQUcsQ0FBQ2UsSUFBSixDQUFTTCxJQUFULENBVGU7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBV2ZULElBQUksYUFYVzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUExQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtlQWVlSixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBSZWRpcyBmcm9tIFwiLi4vZXh0ZXJuYWwtbGlicy9yZWRpc1wiO1xuXG5sZXQgcm91dGVyID0gUm91dGVyKCk7XG5cbi8vIG1pZGRsZXdhcmUgdG8gdXNlIGZvciBhbGwgcmVxdWVzdHNcbnJvdXRlci51c2UoZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgLy8gZG8gbG9nZ2luZ1xuICBuZXh0KCk7IC8vIG1ha2Ugc3VyZSB3ZSBnbyB0byB0aGUgbmV4dCByb3V0ZXMgYW5kIGRvbid0IHN0b3AgaGVyZVxufSk7XG5cbi8qIFNob3cgQVBJICovXG5yb3V0ZXIucm91dGUoXCIvdGltZVwiKS5nZXQoYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgLy8gdGVzdCByZWRpc1xuICAgIFJlZGlzLnNldChcImZvb1wiLCBcImJhclwiKTtcbiAgICBSZWRpcy5nZXQoXCJmb29cIikudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRhID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgcmV0dXJuIHJlcy5qc29uKGRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXh0KGVycm9yKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==