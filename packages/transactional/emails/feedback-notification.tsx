import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Preview,
	Section,
	Text,
} from "@react-email/components";
// biome-ignore lint/correctness/noUnusedImports: This import is required for the compiler to recognize the file as a .tsx React file.
import * as React from "react";

export default function FeedbackNotificationEmail({
	feedback,
	type,
}: {
	feedback: string;
	type: string;
}) {
	return (
		<Html>
			<Head />
			<Preview>Feedback Recebido - Receitas de Crochê</Preview>
			<Body>
				<Container>
					<Section>
						<Heading>Feedback: {type}</Heading>
						<Text>Novo feedback recebido:</Text>
						<Text>{feedback}</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
}
