import express, { Application } from "express";
import path from "node:path";
import routes from "@/routes/index.ts";
import { fileURLToPath } from "node:url";
import cors from "cors";
import registerJobs from "@/jobs/index.ts";
import "@/workers";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const corsOptions = {
	origin: process.env.FRONTEND_URL || "http://localhost:3000",
};

const app: Application = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(routes);

registerJobs();

export default app;
