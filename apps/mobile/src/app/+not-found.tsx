import S from "@app/not-found.styles";
import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: "Oops!" }} />
			<View style={S.container}>
				<Text style={S.title}>This screen doesn't exist.</Text>

				<Link href="/" style={S.link}>
					<Text style={S.linkText}>Go to home screen!</Text>
				</Link>
			</View>
		</>
	);
}
