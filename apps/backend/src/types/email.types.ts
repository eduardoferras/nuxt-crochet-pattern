import type { Attachment } from "resend";

export default interface EmailPayload {
	to: string;
	subject: string;
	body: string;
	attachments?: Attachment[];
}
