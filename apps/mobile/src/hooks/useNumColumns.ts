import { useWindowDimensions } from "react-native";

const breakpoints = { mobile: 0, tablet: 768, desktop: 1024 };

export default function useNumColumns(): number {
	const { width } = useWindowDimensions();

	if (width >= breakpoints.desktop) return 3;
	if (width >= breakpoints.tablet) return 2;

	return 1;
}
