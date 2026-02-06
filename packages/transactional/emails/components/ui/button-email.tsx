import { Button } from "@react-email/components";
import * as React from "react";
import type ButtonEmailProps from "../../interfaces/button.ts";

const button = {
	background: "linear-gradient(135deg, #c2410c 0%, #f97316 100%)",
	borderRadius: "12px",
	color: "#ffffff",
	fontSize: "16px",
	fontWeight: "700",
	textDecoration: "none",
	textAlign: "center" as const,
	padding: "16px 32px",
	display: "inline-block",
};

export default function ButtonEmail({ name, ...props }: ButtonEmailProps) {
	return (
		<Button style={button} {...props}>
			{name}
		</Button>
	);
}
