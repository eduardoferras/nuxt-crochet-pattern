import cron from "node-cron";
import pingHealth from "@/utils/pingHealth.ts";

export default function registerHealthCron() {
	cron.schedule("*/10 * * * *", async () => {
		await pingHealth();
	});
}
