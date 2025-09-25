import express from "express";
import path from "node:path";
import routes from "@/routes/index.ts";
import { fileURLToPath } from "node:url";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const corsOptions = {
	origin: process.env.FRONTEND_URL || "http://localhost:3000",
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(routes);

app.listen(parseInt(process.env.PORT || "3002"), "0.0.0.0", () => {
	console.log(`Server running on port ${process.env.PORT || 3002}`);
});
