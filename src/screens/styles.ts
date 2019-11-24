import { StyleSheet, ViewStyle } from 'react-native';

interface HomeStylesType {
  mainContainer: ViewStyle;
}

export const homeStyles = StyleSheet.create<HomeStylesType>({
  mainContainer: { flex: 1 },
});
