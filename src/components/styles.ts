import { StyleSheet, TextStyle, ViewStyle, TextInputStyle } from 'react-native';
import { colors } from '../constants';

interface HeaderStylesType {
  container: ViewStyle;
  titleContainer: ViewStyle;
  divider: ViewStyle;
  defaultFont: TextStyle;
  mainTitle: TextStyle;
  searchInput: TextInputStyle;
}

export const headerStyles = StyleSheet.create<HeaderStylesType>({
  container: { flexDirection: 'column', padding: 12 },
  titleContainer: { flexDirection: 'row' },
  divider: {
    height: 3,
    width: 54,
    backgroundColor: colors.marvelRed,
    marginBottom: 12,
  },
  defaultFont: { color: colors.marvelRed, fontSize: 16 },
  mainTitle: { fontWeight: 'bold' },
  searchInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 12,
    padding: 4,
  },
});
