import { env } from "@config/env.config.ts";
import app from "@/app.ts";

const port = env.PORT;

app.listen(port, "0.0.0.0", () => {
	console.log(`Server running on port ${port}`);
});
