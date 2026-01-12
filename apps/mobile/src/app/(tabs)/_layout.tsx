import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#683000",
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Início",

					tabBarIcon: () => (
						<MaterialCommunityIcons
							name="home-outline"
							size={24}
							color="#683000"
						/>
					),
				}}
			/>
		</Tabs>
	);
}
