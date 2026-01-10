import { View } from "react-native";
import S from "./styles";

export default function AppContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return <View style={S.container}>{children}</View>;
}
