import redisConnection from "@/config/redis.ts";
import { Queue } from "bullmq";

const emailQueue = new Queue("emailQueue", { connection: redisConnection });

export default emailQueue;
