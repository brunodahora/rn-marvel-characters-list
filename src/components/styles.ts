import {
  StyleSheet,
  TextStyle,
  ViewStyle,
  TextInputStyle,
  ImageStyle,
} from 'react-native';
import { colors } from '../constants';

interface HeaderStylesType {
  container: ViewStyle;
  titleContainer: ViewStyle;
  divider: ViewStyle;
  defaultFont: TextStyle;
  mainTitle: TextStyle;
  searchInput: TextInputStyle;
}

interface CharactersListStylesType {
  container: ViewStyle;
  listHeader: TextStyle;
  characterContainer: ViewStyle;
  characterName: TextStyle;
  characterImage: ImageStyle;
}

export const headerStyles = StyleSheet.create<HeaderStylesType>({
  container: { flexDirection: 'column', padding: 12 },
  titleContainer: { flexDirection: 'row' },
  divider: {
    backgroundColor: colors.marvelRed,
    height: 3,
    marginBottom: 12,
    width: 54,
  },
  defaultFont: { color: colors.marvelRed, fontSize: 16 },
  mainTitle: { fontWeight: 'bold' },
  searchInput: {
    borderColor: 'gray',
    borderRadius: 3,
    borderWidth: 1,
    marginBottom: 12,
    padding: 4,
  },
});

export const charactersListStyles = StyleSheet.create<CharactersListStylesType>(
  {
    container: { flex: 1 },
    listHeader: {
      backgroundColor: colors.marvelRed,
      color: colors.white,
      paddingBottom: 12,
      paddingLeft: 60,
      paddingTop: 12,
      width: '100%',
    },
    characterContainer: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: colors.marvelRed,
      flexDirection: 'row',
      padding: 18,
      width: '100%',
    },
    characterImage: {
      height: 50,
      width: 50,
      borderRadius: 50,
      marginRight: 25,
    },
    characterName: {
      fontSize: 21,
    },
  }
);
