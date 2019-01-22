"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.connect = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

_mongoose.default.Promise = global.Promise;

var connect =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var _ref2,
        _ref2$host,
        host,
        _ref2$port,
        port,
        _ref2$dbName,
        dbName,
        mongoURL,
        _args = arguments;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, _ref2$host = _ref2.host, host = _ref2$host === void 0 ? process.env.MONGO_DEFAULT_HOST : _ref2$host, _ref2$port = _ref2.port, port = _ref2$port === void 0 ? process.env.MONGO_DEFAULT_PORT : _ref2$port, _ref2$dbName = _ref2.dbName, dbName = _ref2$dbName === void 0 ? process.env.MONGO_DEFAULT_DB_NAME : _ref2$dbName;
            mongoURL = "mongodb://".concat(host, ":").concat(port, "/").concat(dbName);

            _mongoose.default.connect(mongoURL, {
              useNewUrlParser: true,
              useCreateIndex: true,
              autoReconnect: true,
              keepAlive: 30000,
              reconnectInterval: 3000,
              reconnectTries: 10000
            });

            return _context.abrupt("return", _mongoose.default);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function connect() {
    return _ref.apply(this, arguments);
  };
}();

exports.connect = connect;
var _default = _mongoose.default;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHRlcm5hbC1saWJzL21vbmdvb3NlLmpzIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiUHJvbWlzZSIsImdsb2JhbCIsImNvbm5lY3QiLCJob3N0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX0RFRkFVTFRfSE9TVCIsInBvcnQiLCJNT05HT19ERUZBVUxUX1BPUlQiLCJkYk5hbWUiLCJNT05HT19ERUZBVUxUX0RCX05BTUUiLCJtb25nb1VSTCIsInVzZU5ld1VybFBhcnNlciIsInVzZUNyZWF0ZUluZGV4IiwiYXV0b1JlY29ubmVjdCIsImtlZXBBbGl2ZSIsInJlY29ubmVjdEludGVydmFsIiwicmVjb25uZWN0VHJpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQUEsa0JBQVNDLE9BQVQsR0FBbUJDLE1BQU0sQ0FBQ0QsT0FBMUI7O0FBRU8sSUFBTUUsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFJbkIsRUFKbUIscUJBQ3JCQyxJQURxQixFQUNyQkEsSUFEcUIsMkJBQ2RDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxrQkFERSxrQ0FFckJDLElBRnFCLEVBRXJCQSxJQUZxQiwyQkFFZEgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLGtCQUZFLG9DQUdyQkMsTUFIcUIsRUFHckJBLE1BSHFCLDZCQUdaTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUsscUJBSEE7QUFLZkMsWUFBQUEsUUFMZSx1QkFLU1IsSUFMVCxjQUtpQkksSUFMakIsY0FLeUJFLE1BTHpCOztBQU9yQlYsOEJBQVNHLE9BQVQsQ0FDRVMsUUFERixFQUVFO0FBQ0VDLGNBQUFBLGVBQWUsRUFBRSxJQURuQjtBQUVFQyxjQUFBQSxjQUFjLEVBQUUsSUFGbEI7QUFHRUMsY0FBQUEsYUFBYSxFQUFFLElBSGpCO0FBSUVDLGNBQUFBLFNBQVMsRUFBRSxLQUpiO0FBS0VDLGNBQUFBLGlCQUFpQixFQUFFLElBTHJCO0FBTUVDLGNBQUFBLGNBQWMsRUFBRTtBQU5sQixhQUZGOztBQVBxQiw2Q0FtQmRsQixpQkFuQmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUEcsT0FBTztBQUFBO0FBQUE7QUFBQSxHQUFiOzs7ZUFzQlFILGlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5tb25nb29zZS5Qcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG5cbmV4cG9ydCBjb25zdCBjb25uZWN0ID0gYXN5bmMgKHtcbiAgaG9zdCA9IHByb2Nlc3MuZW52Lk1PTkdPX0RFRkFVTFRfSE9TVCxcbiAgcG9ydCA9IHByb2Nlc3MuZW52Lk1PTkdPX0RFRkFVTFRfUE9SVCxcbiAgZGJOYW1lID0gcHJvY2Vzcy5lbnYuTU9OR09fREVGQVVMVF9EQl9OQU1FXG59ID0ge30pID0+IHtcbiAgY29uc3QgbW9uZ29VUkwgPSBgbW9uZ29kYjovLyR7aG9zdH06JHtwb3J0fS8ke2RiTmFtZX1gO1xuXG4gIG1vbmdvb3NlLmNvbm5lY3QoXG4gICAgbW9uZ29VUkwsXG4gICAge1xuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXG4gICAgICBhdXRvUmVjb25uZWN0OiB0cnVlLFxuICAgICAga2VlcEFsaXZlOiAzMDAwMCxcbiAgICAgIHJlY29ubmVjdEludGVydmFsOiAzMDAwLFxuICAgICAgcmVjb25uZWN0VHJpZXM6IDEwMDAwXG4gICAgfVxuICApO1xuXG4gIHJldHVybiBtb25nb29zZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlO1xuIl19