"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _winston = require("winston");

var customFormat = _winston.format.printf(function (_ref) {
  var timestamp = _ref.timestamp,
      level = _ref.level,
      message = _ref.message;
  return "[".concat(timestamp, "] ").concat(level, ": ").concat(message);
});

var timestampWithTimezone = (0, _winston.format)(function (info) {
  info.timestamp = (0, _moment.default)().format();
  return info;
});
var logger = (0, _winston.createLogger)({
  level: "info",
  format: _winston.format.combine(timestampWithTimezone(), _winston.format.json(), customFormat),
  transports: [new _winston.transports.File({
    filename: "".concat(process.cwd(), "/logs/error.log"),
    level: "error"
  })],
  exceptionHandlers: [new _winston.transports.File({
    filename: "".concat(process.cwd(), "/logs/exceptions.log")
  })]
});

if (process.env.NODE_ENV !== "test") {
  logger.add(new _winston.transports.Console({
    format: _winston.format.combine(_winston.format.colorize(), timestampWithTimezone(), _winston.format.simple(), customFormat)
  }));
}

var _default = {
  info: logger.info,
  warn: logger.warn,
  error: function error(_error, additionalData) {
    var message = _error; // Error-like

    if (_error && _error.message && _error.stack) {
      message = [_error.message, "---", JSON.stringify(_error.stack)].join("\n");
    }

    if (typeof message !== "string") {
      message = JSON.stringify(_error);
    }

    if (additionalData) {
      message = [message, "---", JSON.stringify(additionalData)].join("\n");
    }

    return logger.error(["###", message, "###"].join("\n"));
  }
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHRlcm5hbC1saWJzL3dpbnN0b24uanMiXSwibmFtZXMiOlsiY3VzdG9tRm9ybWF0IiwiZm9ybWF0IiwicHJpbnRmIiwidGltZXN0YW1wIiwibGV2ZWwiLCJtZXNzYWdlIiwidGltZXN0YW1wV2l0aFRpbWV6b25lIiwiaW5mbyIsImxvZ2dlciIsImNvbWJpbmUiLCJqc29uIiwidHJhbnNwb3J0cyIsIkZpbGUiLCJmaWxlbmFtZSIsInByb2Nlc3MiLCJjd2QiLCJleGNlcHRpb25IYW5kbGVycyIsImVudiIsIk5PREVfRU5WIiwiYWRkIiwiQ29uc29sZSIsImNvbG9yaXplIiwic2ltcGxlIiwid2FybiIsImVycm9yIiwiYWRkaXRpb25hbERhdGEiLCJzdGFjayIsIkpTT04iLCJzdHJpbmdpZnkiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLGdCQUFPQyxNQUFQLENBQ25CO0FBQUEsTUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsTUFBY0MsS0FBZCxRQUFjQSxLQUFkO0FBQUEsTUFBcUJDLE9BQXJCLFFBQXFCQSxPQUFyQjtBQUFBLG9CQUF1Q0YsU0FBdkMsZUFBcURDLEtBQXJELGVBQStEQyxPQUEvRDtBQUFBLENBRG1CLENBQXJCOztBQUdBLElBQU1DLHFCQUFxQixHQUFHLHFCQUFPLFVBQUFDLElBQUksRUFBSTtBQUMzQ0EsRUFBQUEsSUFBSSxDQUFDSixTQUFMLEdBQWlCLHVCQUFTRixNQUFULEVBQWpCO0FBQ0EsU0FBT00sSUFBUDtBQUNELENBSDZCLENBQTlCO0FBS0EsSUFBTUMsTUFBTSxHQUFHLDJCQUFhO0FBQzFCSixFQUFBQSxLQUFLLEVBQUUsTUFEbUI7QUFFMUJILEVBQUFBLE1BQU0sRUFBRUEsZ0JBQU9RLE9BQVAsQ0FBZUgscUJBQXFCLEVBQXBDLEVBQXdDTCxnQkFBT1MsSUFBUCxFQUF4QyxFQUF1RFYsWUFBdkQsQ0FGa0I7QUFHMUJXLEVBQUFBLFVBQVUsRUFBRSxDQUNWLElBQUlBLG9CQUFXQyxJQUFmLENBQW9CO0FBQ2xCQyxJQUFBQSxRQUFRLFlBQUtDLE9BQU8sQ0FBQ0MsR0FBUixFQUFMLG9CQURVO0FBRWxCWCxJQUFBQSxLQUFLLEVBQUU7QUFGVyxHQUFwQixDQURVLENBSGM7QUFTMUJZLEVBQUFBLGlCQUFpQixFQUFFLENBQ2pCLElBQUlMLG9CQUFXQyxJQUFmLENBQW9CO0FBQUVDLElBQUFBLFFBQVEsWUFBS0MsT0FBTyxDQUFDQyxHQUFSLEVBQUw7QUFBVixHQUFwQixDQURpQjtBQVRPLENBQWIsQ0FBZjs7QUFjQSxJQUFJRCxPQUFPLENBQUNHLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixNQUE3QixFQUFxQztBQUNuQ1YsRUFBQUEsTUFBTSxDQUFDVyxHQUFQLENBQ0UsSUFBSVIsb0JBQVdTLE9BQWYsQ0FBdUI7QUFDckJuQixJQUFBQSxNQUFNLEVBQUVBLGdCQUFPUSxPQUFQLENBQ05SLGdCQUFPb0IsUUFBUCxFQURNLEVBRU5mLHFCQUFxQixFQUZmLEVBR05MLGdCQUFPcUIsTUFBUCxFQUhNLEVBSU50QixZQUpNO0FBRGEsR0FBdkIsQ0FERjtBQVVEOztlQUVjO0FBQ2JPLEVBQUFBLElBQUksRUFBRUMsTUFBTSxDQUFDRCxJQURBO0FBRWJnQixFQUFBQSxJQUFJLEVBQUVmLE1BQU0sQ0FBQ2UsSUFGQTtBQUdiQyxFQUFBQSxLQUFLLEVBQUUsZUFBQ0EsTUFBRCxFQUFRQyxjQUFSLEVBQTJCO0FBQ2hDLFFBQUlwQixPQUFPLEdBQUdtQixNQUFkLENBRGdDLENBRWhDOztBQUNBLFFBQUlBLE1BQUssSUFBSUEsTUFBSyxDQUFDbkIsT0FBZixJQUEwQm1CLE1BQUssQ0FBQ0UsS0FBcEMsRUFBMkM7QUFDekNyQixNQUFBQSxPQUFPLEdBQUcsQ0FBQ21CLE1BQUssQ0FBQ25CLE9BQVAsRUFBZ0IsS0FBaEIsRUFBdUJzQixJQUFJLENBQUNDLFNBQUwsQ0FBZUosTUFBSyxDQUFDRSxLQUFyQixDQUF2QixFQUFvREcsSUFBcEQsQ0FBeUQsSUFBekQsQ0FBVjtBQUNEOztBQUVELFFBQUksT0FBT3hCLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDL0JBLE1BQUFBLE9BQU8sR0FBR3NCLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixNQUFmLENBQVY7QUFDRDs7QUFFRCxRQUFJQyxjQUFKLEVBQW9CO0FBQ2xCcEIsTUFBQUEsT0FBTyxHQUFHLENBQUNBLE9BQUQsRUFBVSxLQUFWLEVBQWlCc0IsSUFBSSxDQUFDQyxTQUFMLENBQWVILGNBQWYsQ0FBakIsRUFBaURJLElBQWpELENBQXNELElBQXRELENBQVY7QUFDRDs7QUFDRCxXQUFPckIsTUFBTSxDQUFDZ0IsS0FBUCxDQUFhLENBQUMsS0FBRCxFQUFRbkIsT0FBUixFQUFpQixLQUFqQixFQUF3QndCLElBQXhCLENBQTZCLElBQTdCLENBQWIsQ0FBUDtBQUNEO0FBbEJZLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciwgdHJhbnNwb3J0cywgZm9ybWF0IH0gZnJvbSBcIndpbnN0b25cIjtcblxuY29uc3QgY3VzdG9tRm9ybWF0ID0gZm9ybWF0LnByaW50ZihcbiAgKHsgdGltZXN0YW1wLCBsZXZlbCwgbWVzc2FnZSB9KSA9PiBgWyR7dGltZXN0YW1wfV0gJHtsZXZlbH06ICR7bWVzc2FnZX1gXG4pO1xuY29uc3QgdGltZXN0YW1wV2l0aFRpbWV6b25lID0gZm9ybWF0KGluZm8gPT4ge1xuICBpbmZvLnRpbWVzdGFtcCA9IG1vbWVudCgpLmZvcm1hdCgpO1xuICByZXR1cm4gaW5mbztcbn0pO1xuXG5jb25zdCBsb2dnZXIgPSBjcmVhdGVMb2dnZXIoe1xuICBsZXZlbDogXCJpbmZvXCIsXG4gIGZvcm1hdDogZm9ybWF0LmNvbWJpbmUodGltZXN0YW1wV2l0aFRpbWV6b25lKCksIGZvcm1hdC5qc29uKCksIGN1c3RvbUZvcm1hdCksXG4gIHRyYW5zcG9ydHM6IFtcbiAgICBuZXcgdHJhbnNwb3J0cy5GaWxlKHtcbiAgICAgIGZpbGVuYW1lOiBgJHtwcm9jZXNzLmN3ZCgpfS9sb2dzL2Vycm9yLmxvZ2AsXG4gICAgICBsZXZlbDogXCJlcnJvclwiXG4gICAgfSlcbiAgXSxcbiAgZXhjZXB0aW9uSGFuZGxlcnM6IFtcbiAgICBuZXcgdHJhbnNwb3J0cy5GaWxlKHsgZmlsZW5hbWU6IGAke3Byb2Nlc3MuY3dkKCl9L2xvZ3MvZXhjZXB0aW9ucy5sb2dgIH0pXG4gIF1cbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwidGVzdFwiKSB7XG4gIGxvZ2dlci5hZGQoXG4gICAgbmV3IHRyYW5zcG9ydHMuQ29uc29sZSh7XG4gICAgICBmb3JtYXQ6IGZvcm1hdC5jb21iaW5lKFxuICAgICAgICBmb3JtYXQuY29sb3JpemUoKSxcbiAgICAgICAgdGltZXN0YW1wV2l0aFRpbWV6b25lKCksXG4gICAgICAgIGZvcm1hdC5zaW1wbGUoKSxcbiAgICAgICAgY3VzdG9tRm9ybWF0XG4gICAgICApXG4gICAgfSlcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbmZvOiBsb2dnZXIuaW5mbyxcbiAgd2FybjogbG9nZ2VyLndhcm4sXG4gIGVycm9yOiAoZXJyb3IsIGFkZGl0aW9uYWxEYXRhKSA9PiB7XG4gICAgbGV0IG1lc3NhZ2UgPSBlcnJvcjtcbiAgICAvLyBFcnJvci1saWtlXG4gICAgaWYgKGVycm9yICYmIGVycm9yLm1lc3NhZ2UgJiYgZXJyb3Iuc3RhY2spIHtcbiAgICAgIG1lc3NhZ2UgPSBbZXJyb3IubWVzc2FnZSwgXCItLS1cIiwgSlNPTi5zdHJpbmdpZnkoZXJyb3Iuc3RhY2spXS5qb2luKFwiXFxuXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAoYWRkaXRpb25hbERhdGEpIHtcbiAgICAgIG1lc3NhZ2UgPSBbbWVzc2FnZSwgXCItLS1cIiwgSlNPTi5zdHJpbmdpZnkoYWRkaXRpb25hbERhdGEpXS5qb2luKFwiXFxuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbG9nZ2VyLmVycm9yKFtcIiMjI1wiLCBtZXNzYWdlLCBcIiMjI1wiXS5qb2luKFwiXFxuXCIpKTtcbiAgfVxufTtcbiJdfQ==