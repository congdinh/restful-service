import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logger from "./external-libs/winston";
import restful from "./restful";

// Init application
const app = express();

// Cors config
let corsOptions = (req, callback) => {
  let corsOptions;
  if (process.env.SERVER_REQUEST_WHITE_LIST.includes(req.header("Origin"))) {
    corsOptions = { origin: true, credentials: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

// let corsOptions = {
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
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "100mb" }));

// Endpoint to check if the API is running
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    version: "1.0",
    status: "green"
  });
});

// RESTful API
app.use("/api", restful);

// catch 404 and forward to error handler
app.use(async (req, res, next) => {
  let err = await new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  logger.error("Error: " + err.message);
  // render the error page
  res.status(err.status || 500);
  res.json({ message: "error" });
});

export default app;
