import { Img, Section } from "@react-email/components";
import * as React from "react";

const logoSection = {
	padding: "40px 40px 20px",
	textAlign: "center" as const,
};

const logoImage = {
	width: "52px",
	height: "60px",
	margin: "0 auto",
};

const baseUrl = process.env.SERVER_URL ?? "http://localhost:3003";

export default function LogoEmail() {
	return (
		<Section style={logoSection}>
			<Img
				src={`${baseUrl}/static/rdc-logo.png`}
				style={logoImage}
				alt="Receitas de Crochê"
			/>
		</Section>
	);
}
