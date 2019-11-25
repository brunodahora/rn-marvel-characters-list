import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { colors } from '../constants';

interface ListStylesType {
  mainContainer: ViewStyle;
}

interface DetailStylesType {
  container: ViewStyle;
  characterImage: ImageStyle;
  defaultFont: TextStyle;
  titleFont: TextStyle;
}

export const listStyles = StyleSheet.create<ListStylesType>({
  mainContainer: { flex: 1 },
});

export const detailStyles = StyleSheet.create<DetailStylesType>({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  characterImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginRight: 25,
    alignSelf: 'center',
  },
  defaultFont: {
    fontSize: 21,
  },
  titleFont: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.marvelRed,
    marginTop: 16,
  },
});
