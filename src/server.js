import logger from "./external-libs/winston";
import { connect as connectMongoDB } from "./external-libs/mongoose";
import Redis from "./external-libs/redis";

import app from ".";

const serverPort = Number(process.env.SERVER_PORT || 9000);
connectMongoDB()
  .then(() => {
    const host = process.env.MONGO_DEFAULT_HOST;
    const port = process.env.MONGO_DEFAULT_PORT;
    const dbName = process.env.MONGO_DEFAULT_DB_NAME;
    logger.info(`Mongo|Connected mongodb://${host}:${port}/${dbName}`);
    return Redis.ping();
  })
  .then(status => {
    const host = process.env.REDIS_DEFAULT_HOST;
    const port = process.env.REDIS_DEFAULT_PORT;
    const db = process.env.REDIS_DEFAULT_DB;
    logger.info(`Redis|Connected ${status} redis://${host}:${port}/${db}`);

    app.listen(serverPort, () => {
      logger.info(`Server|Started http://127.0.0.1:${serverPort}`);
    });
  })
  .catch(error => {
    logger.error(error);
  });
