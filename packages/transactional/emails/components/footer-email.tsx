import { Container, Hr, Section, Text } from "@react-email/components";
import * as React from "react";

const fullYear = new Date().getFullYear();

const hr = {
	borderColor: "#e5e5e5",
	margin: "0",
};

const footer = {
	padding: "24px 40px",
	textAlign: "center" as const,
};

const footerSmall = {
	color: "#9ca3af",
	fontSize: "12px",
	margin: "4px 0 0",
};

export default function FooterEmail() {
	return (
		<Container>
			<Hr style={hr} />
			<Section style={footer}>
				<Text style={footerSmall}>
					© {fullYear} Receitas de Crochê. Todos os direitos reservados.
				</Text>
				<Text style={footerSmall}>
					Você está recebendo este email porque solicitou a redefinição de
					senha.
				</Text>
			</Section>
		</Container>
	);
}
