"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _winston = _interopRequireDefault(require("./external-libs/winston"));

var _restful = _interopRequireDefault(require("./restful"));

// Init application
var app = (0, _express.default)(); // Cors config

var corsOptions = function corsOptions(req, callback) {
  var corsOptions;

  if (process.env.SERVER_REQUEST_WHITE_LIST.includes(req.header("Origin"))) {
    corsOptions = {
      origin: true,
      credentials: true
    };
  } else {
    corsOptions = {
      origin: false
    };
  }

  callback(null, corsOptions);
}; // let corsOptions = {
//   origin(origin, callback) {
//     if (process.env.SERVER_REQUEST_WHITE_LIST.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true
// };


if (process.env.NODE_ENV !== "production") {
  corsOptions = {};
}

app.use((0, _cors.default)(corsOptions));
app.use(_bodyParser.default.json({
  limit: "100mb"
})); // Endpoint to check if the API is running

app.get("/", function (req, res) {
  res.status(200).json({
    success: true,
    version: "1.0",
    status: "green"
  });
}); // RESTful API

app.use("/api", _restful.default); // catch 404 and forward to error handler

app.use(
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(req, res, next) {
    var err;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Error("Not Found");

          case 2:
            err = _context.sent;
            err.status = 404;
            next(err);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}()); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  _winston.default.error("Error: " + err.message); // render the error page


  res.status(err.status || 500);
  res.json({
    message: "error"
  });
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJjb3JzT3B0aW9ucyIsInJlcSIsImNhbGxiYWNrIiwicHJvY2VzcyIsImVudiIsIlNFUlZFUl9SRVFVRVNUX1dISVRFX0xJU1QiLCJpbmNsdWRlcyIsImhlYWRlciIsIm9yaWdpbiIsImNyZWRlbnRpYWxzIiwiTk9ERV9FTlYiLCJ1c2UiLCJib2R5UGFyc2VyIiwianNvbiIsImxpbWl0IiwiZ2V0IiwicmVzIiwic3RhdHVzIiwic3VjY2VzcyIsInZlcnNpb24iLCJyZXN0ZnVsIiwibmV4dCIsIkVycm9yIiwiZXJyIiwibG9jYWxzIiwibWVzc2FnZSIsImVycm9yIiwibG9nZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQSxJQUFNQSxHQUFHLEdBQUcsdUJBQVosQyxDQUVBOztBQUNBLElBQUlDLFdBQVcsR0FBRyxxQkFBQ0MsR0FBRCxFQUFNQyxRQUFOLEVBQW1CO0FBQ25DLE1BQUlGLFdBQUo7O0FBQ0EsTUFBSUcsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHlCQUFaLENBQXNDQyxRQUF0QyxDQUErQ0wsR0FBRyxDQUFDTSxNQUFKLENBQVcsUUFBWCxDQUEvQyxDQUFKLEVBQTBFO0FBQ3hFUCxJQUFBQSxXQUFXLEdBQUc7QUFBRVEsTUFBQUEsTUFBTSxFQUFFLElBQVY7QUFBZ0JDLE1BQUFBLFdBQVcsRUFBRTtBQUE3QixLQUFkO0FBQ0QsR0FGRCxNQUVPO0FBQ0xULElBQUFBLFdBQVcsR0FBRztBQUFFUSxNQUFBQSxNQUFNLEVBQUU7QUFBVixLQUFkO0FBQ0Q7O0FBQ0ROLEVBQUFBLFFBQVEsQ0FBQyxJQUFELEVBQU9GLFdBQVAsQ0FBUjtBQUNELENBUkQsQyxDQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFJRyxPQUFPLENBQUNDLEdBQVIsQ0FBWU0sUUFBWixLQUF5QixZQUE3QixFQUEyQztBQUN6Q1YsRUFBQUEsV0FBVyxHQUFHLEVBQWQ7QUFDRDs7QUFDREQsR0FBRyxDQUFDWSxHQUFKLENBQVEsbUJBQUtYLFdBQUwsQ0FBUjtBQUNBRCxHQUFHLENBQUNZLEdBQUosQ0FBUUMsb0JBQVdDLElBQVgsQ0FBZ0I7QUFBRUMsRUFBQUEsS0FBSyxFQUFFO0FBQVQsQ0FBaEIsQ0FBUixFLENBRUE7O0FBQ0FmLEdBQUcsQ0FBQ2dCLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBQ2QsR0FBRCxFQUFNZSxHQUFOLEVBQWM7QUFDekJBLEVBQUFBLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JKLElBQWhCLENBQXFCO0FBQ25CSyxJQUFBQSxPQUFPLEVBQUUsSUFEVTtBQUVuQkMsSUFBQUEsT0FBTyxFQUFFLEtBRlU7QUFHbkJGLElBQUFBLE1BQU0sRUFBRTtBQUhXLEdBQXJCO0FBS0QsQ0FORCxFLENBUUE7O0FBQ0FsQixHQUFHLENBQUNZLEdBQUosQ0FBUSxNQUFSLEVBQWdCUyxnQkFBaEIsRSxDQUVBOztBQUNBckIsR0FBRyxDQUFDWSxHQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBUSxpQkFBT1YsR0FBUCxFQUFZZSxHQUFaLEVBQWlCSyxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNVLElBQUlDLEtBQUosQ0FBVSxXQUFWLENBRFY7O0FBQUE7QUFDRkMsWUFBQUEsR0FERTtBQUVOQSxZQUFBQSxHQUFHLENBQUNOLE1BQUosR0FBYSxHQUFiO0FBQ0FJLFlBQUFBLElBQUksQ0FBQ0UsR0FBRCxDQUFKOztBQUhNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsSyxDQU1BOztBQUNBeEIsR0FBRyxDQUFDWSxHQUFKLENBQVEsVUFBQ1ksR0FBRCxFQUFNdEIsR0FBTixFQUFXZSxHQUFYLEVBQWdCSyxJQUFoQixFQUF5QjtBQUMvQjtBQUNBTCxFQUFBQSxHQUFHLENBQUNRLE1BQUosQ0FBV0MsT0FBWCxHQUFxQkYsR0FBRyxDQUFDRSxPQUF6QjtBQUNBVCxFQUFBQSxHQUFHLENBQUNRLE1BQUosQ0FBV0UsS0FBWCxHQUFtQnpCLEdBQUcsQ0FBQ0YsR0FBSixDQUFRZ0IsR0FBUixDQUFZLEtBQVosTUFBdUIsYUFBdkIsR0FBdUNRLEdBQXZDLEdBQTZDLEVBQWhFOztBQUNBSSxtQkFBT0QsS0FBUCxDQUFhLFlBQVlILEdBQUcsQ0FBQ0UsT0FBN0IsRUFKK0IsQ0FLL0I7OztBQUNBVCxFQUFBQSxHQUFHLENBQUNDLE1BQUosQ0FBV00sR0FBRyxDQUFDTixNQUFKLElBQWMsR0FBekI7QUFDQUQsRUFBQUEsR0FBRyxDQUFDSCxJQUFKLENBQVM7QUFBRVksSUFBQUEsT0FBTyxFQUFFO0FBQVgsR0FBVDtBQUNELENBUkQ7ZUFVZTFCLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi9leHRlcm5hbC1saWJzL3dpbnN0b25cIjtcbmltcG9ydCByZXN0ZnVsIGZyb20gXCIuL3Jlc3RmdWxcIjtcblxuLy8gSW5pdCBhcHBsaWNhdGlvblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4vLyBDb3JzIGNvbmZpZ1xubGV0IGNvcnNPcHRpb25zID0gKHJlcSwgY2FsbGJhY2spID0+IHtcbiAgbGV0IGNvcnNPcHRpb25zO1xuICBpZiAocHJvY2Vzcy5lbnYuU0VSVkVSX1JFUVVFU1RfV0hJVEVfTElTVC5pbmNsdWRlcyhyZXEuaGVhZGVyKFwiT3JpZ2luXCIpKSkge1xuICAgIGNvcnNPcHRpb25zID0geyBvcmlnaW46IHRydWUsIGNyZWRlbnRpYWxzOiB0cnVlIH07XG4gIH0gZWxzZSB7XG4gICAgY29yc09wdGlvbnMgPSB7IG9yaWdpbjogZmFsc2UgfTtcbiAgfVxuICBjYWxsYmFjayhudWxsLCBjb3JzT3B0aW9ucyk7XG59O1xuXG4vLyBsZXQgY29yc09wdGlvbnMgPSB7XG4vLyAgIG9yaWdpbihvcmlnaW4sIGNhbGxiYWNrKSB7XG4vLyAgICAgaWYgKHByb2Nlc3MuZW52LlNFUlZFUl9SRVFVRVNUX1dISVRFX0xJU1QuaW5jbHVkZXMob3JpZ2luKSkge1xuLy8gICAgICAgY2FsbGJhY2sobnVsbCwgdHJ1ZSk7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcihcIk5vdCBhbGxvd2VkIGJ5IENPUlNcIikpO1xuLy8gICAgIH1cbi8vICAgfSxcbi8vICAgY3JlZGVudGlhbHM6IHRydWVcbi8vIH07XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgY29yc09wdGlvbnMgPSB7fTtcbn1cbmFwcC51c2UoY29ycyhjb3JzT3B0aW9ucykpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oeyBsaW1pdDogXCIxMDBtYlwiIH0pKTtcblxuLy8gRW5kcG9pbnQgdG8gY2hlY2sgaWYgdGhlIEFQSSBpcyBydW5uaW5nXG5hcHAuZ2V0KFwiL1wiLCAocmVxLCByZXMpID0+IHtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgdmVyc2lvbjogXCIxLjBcIixcbiAgICBzdGF0dXM6IFwiZ3JlZW5cIlxuICB9KTtcbn0pO1xuXG4vLyBSRVNUZnVsIEFQSVxuYXBwLnVzZShcIi9hcGlcIiwgcmVzdGZ1bCk7XG5cbi8vIGNhdGNoIDQwNCBhbmQgZm9yd2FyZCB0byBlcnJvciBoYW5kbGVyXG5hcHAudXNlKGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBsZXQgZXJyID0gYXdhaXQgbmV3IEVycm9yKFwiTm90IEZvdW5kXCIpO1xuICBlcnIuc3RhdHVzID0gNDA0O1xuICBuZXh0KGVycik7XG59KTtcblxuLy8gZXJyb3IgaGFuZGxlclxuYXBwLnVzZSgoZXJyLCByZXEsIHJlcywgbmV4dCkgPT4ge1xuICAvLyBzZXQgbG9jYWxzLCBvbmx5IHByb3ZpZGluZyBlcnJvciBpbiBkZXZlbG9wbWVudFxuICByZXMubG9jYWxzLm1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcbiAgcmVzLmxvY2Fscy5lcnJvciA9IHJlcS5hcHAuZ2V0KFwiZW52XCIpID09PSBcImRldmVsb3BtZW50XCIgPyBlcnIgOiB7fTtcbiAgbG9nZ2VyLmVycm9yKFwiRXJyb3I6IFwiICsgZXJyLm1lc3NhZ2UpO1xuICAvLyByZW5kZXIgdGhlIGVycm9yIHBhZ2VcbiAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzIHx8IDUwMCk7XG4gIHJlcy5qc29uKHsgbWVzc2FnZTogXCJlcnJvclwiIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiJdfQ==