import AppHeader from "@components/AppHeader";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Stack
				screenOptions={{
					header: AppHeader,
				}}
			>
				<Stack.Screen name="(tabs)" />
			</Stack>
		</SafeAreaView>
	);
}
