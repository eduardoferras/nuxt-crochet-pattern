import app from "@/app.ts";

const port = Number(process.env.PORT) || 3002;

app.listen(port, "0.0.0.0", () => {
	console.log(`Server running on port ${process.env.PORT || 3002}`);
});
