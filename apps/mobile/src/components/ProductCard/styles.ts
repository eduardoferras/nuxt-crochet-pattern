import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: "700",
		marginVertical: 12,
	},
	card: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "#fff",
		borderRadius: 12,
		padding: 12,
		gap: 12,
	},
	cardImage: {
		width: "100%",
		resizeMode: "cover",
		aspectRatio: 1 / 1,
		borderRadius: 8,
		flex: 1,
	},
	product: {
		flex: 1,
		gap: 4,
	},
	productTitle: {
		fontSize: 16,
		fontWeight: "700",
		color: "#000",
	},
	productSeller: {
		fontSize: 12,
		fontWeight: "500",
		color: "#000",
	},
	productPrice: {
		fontSize: 18,
		fontWeight: "700",
		color: "#f45d06",
	},
	productBadge: {
		backgroundColor: "#d03838",
		color: "#fff",
		fontWeight: "600",
		fontSize: 12,
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 4,
		alignSelf: "flex-start",
	},
});

export default styles;
