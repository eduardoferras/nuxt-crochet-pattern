import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#683000",
				tabBarInactiveTintColor: "#999",
				tabBarLabelPosition: "below-icon",
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					headerShown: false,
					tabBarLabel: "Início",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="home-outline"
							size={28}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
