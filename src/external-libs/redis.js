import Redis from "ioredis";

Redis.Promise = global.Promise;

const redis = new Redis({
  host: process.env.REDIS_DEFAULT_HOST,
  port: process.env.REDIS_DEFAULT_PORT,
  db: process.env.REDIS_DEFAULT_DB,
  retry_strategy: options => {
    return Math.max(options.attempt * 100, 3000);
  },
  reconnectOnError: err => {
    const targetError = "READONLY";
    if (err.message.slice(0, targetError.length) === targetError) {
      // Only reconnect when the error starts with "READONLY"
      return true; // or `return 1;`
    }
  }
});

export default redis;
