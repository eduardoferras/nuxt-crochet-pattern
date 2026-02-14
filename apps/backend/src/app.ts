import path from "node:path";
import { fileURLToPath } from "node:url";
import registerJobs from "@jobs/index.ts";
import routes from "@routes/index.ts";
import cors from "cors";
import express, { type Application } from "express";
import "@/workers";
import { env } from "@config/env.config.ts";
import authRouter from "@routes/auth.route.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const corsOptions = {
	origin: env.FRONTEND_URL,
	methods: ["GET", "POST", "PUT", "DELETE"],
	credentials: true,
};

const app: Application = express();

app.use(cors(corsOptions));
app.use("/auth", authRouter);
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(routes);

registerJobs();

export default app;
