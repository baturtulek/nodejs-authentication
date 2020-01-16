/* eslint-disable no-console */
const Redis = require('ioredis');
const chalk = require('chalk');

const redis = new Redis({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
});

redis.on('connect', () => {
  console.log(chalk.green.bold('Connected to Redis!'));
});
redis.on('error', (error) => {
  console.log(chalk.red.bold(`Redis connection error: ${error}`));
  process.exit();
});

module.exports = { redis };
