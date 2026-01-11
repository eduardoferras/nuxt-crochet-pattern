import type { ConfigContext, ExpoConfig } from "expo/config";
import { version } from "./package.json";

export default ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	slug: "receitas-de-croche",
	name: "Receitas de Crochê",
	version,
});
