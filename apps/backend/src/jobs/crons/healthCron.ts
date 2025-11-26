import pingHealth from "@/utils/pingHealth.ts";
import cron from "node-cron";

export default function registerHealthCron() {
	cron.schedule("*/10 * * * *", async () => {
		await pingHealth();
	});
}
