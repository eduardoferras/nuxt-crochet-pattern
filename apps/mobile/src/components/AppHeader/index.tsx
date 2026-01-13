import { Image, View } from "react-native";
import S from "./styles";

export default function AppHeader() {
	return (
		<View style={S.header}>
			<Image source={require("@assets/images/logo.png")} style={S.logo} />
		</View>
	);
}
