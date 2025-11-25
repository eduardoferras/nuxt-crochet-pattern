import registerHealthCron from "@/jobs/crons/healthCron.ts";

export default function registerJobs() {
	registerHealthCron();
}
