import IORedis from "ioredis";

const redisConnection = new IORedis.default({
	host: process.env.REDIS_HOST || "localhost",
	port: Number(process.env.REDIS_PORT) || 6379,
	maxRetriesPerRequest: null,
	enableReadyCheck: false,
});

export default redisConnection;
