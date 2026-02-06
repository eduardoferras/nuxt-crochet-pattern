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
import * as React from "react";
import FooterEmail from "./components/footer-email.tsx";
import LogoEmail from "./components/logo-email.tsx";
import ButtonEmail from "./components/ui/button-email.tsx";
import type PasswordResetEmailProps from "./interfaces/password-reset.ts";

const main = {
	backgroundColor: "#f5f3f0",
	fontFamily:
		'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const container = {
	backgroundColor: "#ffffff",
	margin: "0 auto",
	padding: "0",
	maxWidth: "600px",
	borderRadius: "12px",
	boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const contentSection = {
	padding: "0 40px 40px",
};

const heading = {
	color: "#1a1a1a",
	fontSize: "22px",
	fontWeight: "700",
	textAlign: "center" as const,
	margin: "0 0 20px",
};

const paragraph = {
	color: "#6b6b6b",
	fontSize: "16px",
	lineHeight: "26px",
	textAlign: "center" as const,
	margin: "0 0 16px",
};

const buttonSection = {
	textAlign: "center" as const,
	margin: "24px 0",
};

const linkSection = {
	backgroundColor: "#f5f3f0",
	borderRadius: "8px",
	padding: "16px",
	margin: "24px 0",
};

const linkLabel = {
	color: "#6b6b6b",
	fontSize: "14px",
	margin: "0 0 8px",
};

const linkText = {
	color: "#c2410c",
	fontSize: "12px",
	fontFamily: "monospace",
	wordBreak: "break-all" as const,
	backgroundColor: "#ffffff",
	padding: "8px",
	borderRadius: "4px",
	border: "1px solid #e5e5e5",
	margin: "0",
};

const warningSection = {
	borderLeft: "4px solid #f97316",
	backgroundColor: "#fff7ed",
	padding: "16px",
	borderRadius: "0 8px 8px 0",
	margin: "24px 0 0",
};

const warningText = {
	color: "#6b6b6b",
	fontSize: "14px",
	margin: "0",
	lineHeight: "22px",
};

export default function PasswordResetEmail({
	userEmail,
	resetLink,
}: PasswordResetEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>Redefina sua senha - Receitas de Crochê</Preview>
			<Body style={main}>
				<Container style={container}>
					<LogoEmail />
					<Section style={contentSection}>
						<Heading style={heading}>Redefinição de Senha</Heading>
						<Text style={paragraph}>
							Olá! Recebemos uma solicitação para redefinir a senha da sua conta
							associada ao email <strong>{userEmail}</strong>.
						</Text>
						<Text style={paragraph}>
							Clique no botão abaixo para criar uma nova senha:
						</Text>
						<Section style={buttonSection}>
							<ButtonEmail href={resetLink} name="Redefinir Minha Senha" />
						</Section>
						<Section style={linkSection}>
							<Text style={linkLabel}>
								Ou copie e cole este link no seu navegador:
							</Text>
							<Text style={linkText}>{resetLink}</Text>
						</Section>
						<Section style={warningSection}>
							<Text style={warningText}>
								<strong>⚠️ Importante:</strong> Este link expira em{" "}
								<strong>1 hora</strong>. Se você não solicitou esta redefinição,
								ignore este email com segurança.
							</Text>
						</Section>
					</Section>
					<FooterEmail />
				</Container>
			</Body>
		</Html>
	);
}
