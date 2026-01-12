import SpinnerLoading from "@components/SpinnerLoading";
import useNumColumns from "@hooks/useNumColumns";
import type Product from "@interfaces/Product";
import { fetchProducts } from "@services/api";
import { useCallback, useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import S from "./styles";

export default function ProductCard() {
	const numColumns = useNumColumns();
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetchProducts()
			.then(setProducts)
			.catch((err) => {
				console.error("Error fetching products:", err);
				setError(
					"Não foi possível carregar os produtos. Tente novamente mais tarde.",
				);
			})
			.finally(() => setLoading(false));
	}, []);

	const renderProductItem = useCallback(
		({ item }: { item: Product }) => (
			<View
				style={[
					S.card,
					{
						flexBasis: `${100 / numColumns}%`,
						maxWidth: `${100 / numColumns}%`,
					},
				]}
			>
				<Image
					source={{ uri: item.image }}
					style={S.cardImage}
					accessibilityLabel={`Imagem do produto ${item.name}`}
				/>
				<View style={S.product}>
					<Text style={S.productTitle}>{item.name}</Text>
					<Text style={S.productSeller}>por {item.seller.name}</Text>
					<Text style={S.productPrice}>
						R$ {item.price.toFixed(2).replace(".", ",")}
					</Text>
					<Text style={S.productBadge}>produto digital</Text>
				</View>
			</View>
		),
		[numColumns],
	);

	if (loading) {
		return (
			<View>
				<HeaderTitle />
				<SpinnerLoading />
				<Text>Carregando produtos...</Text>
			</View>
		);
	}

	if (error) {
		return (
			<View>
				<HeaderTitle />
				<Text style={{ color: "red", marginVertical: 8 }}>{error}</Text>
			</View>
		);
	}

	return (
		<FlatList
			data={products}
			key={numColumns}
			keyExtractor={(item) => item.id.toString()}
			numColumns={numColumns}
			columnWrapperStyle={numColumns > 1 ? { gap: 12 } : undefined}
			ListHeaderComponent={HeaderTitle}
			showsVerticalScrollIndicator={false}
			ListEmptyComponent={ListEmptyComponent}
			renderItem={renderProductItem}
		/>
	);
}

const ListEmptyComponent = () => (
	<Text>Nenhum produto disponível no momento.</Text>
);

const HeaderTitle = () => <Text style={S.title}>Últimos Lançamentos</Text>;
