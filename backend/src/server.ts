import app from "@/app.ts";

app.listen(parseInt(process.env.PORT || "3002"), "0.0.0.0", () => {
	console.log(`Server running on port ${process.env.PORT || 3002}`);
});
