import registerHealthCron from "./health-check.cron.ts";

export function initCrons() {
	registerHealthCron();
}
