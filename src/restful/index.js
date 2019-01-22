import { Router } from "express";
import Redis from "../external-libs/redis";

let router = Router();

// middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  next(); // make sure we go to the next routes and don't stop here
});

/* Show API */
router.route("/time").get(async (req, res, next) => {
  try {
    // test redis
    Redis.set("foo", "bar");
    Redis.get("foo").then(function(result) {
      console.log(result);
    });

    const data = Math.floor(Date.now() / 1000);
    return res.json(data);
  } catch (error) {
    return next(error);
  }
});

export default router;
