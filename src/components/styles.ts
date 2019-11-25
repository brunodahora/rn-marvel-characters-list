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

interface FooterStylesType {
  container: ViewStyle;
  pagesContainer: ViewStyle;
  defaultFont: TextStyle;
  leftArrow: TextStyle;
  rightArrow: TextStyle;
  selectedPage: TextStyle;
  pageNumber: TextStyle;
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
      fontSize: 16,
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

export const footerStyles = StyleSheet.create<FooterStylesType>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingTop: 18,
    paddingRight: 30,
    paddingBottom: 24,
  },
  pagesContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  defaultFont: { color: colors.marvelRed, fontSize: 16 },
  leftArrow: { marginRight: 60 },
  rightArrow: { marginLeft: 40 },
  selectedPage: {
    backgroundColor: colors.marvelRed,
    borderColor: colors.marvelRed,
    borderWidth: 1,
    borderRadius: 32,
    color: colors.white,
    fontSize: 21,
    height: 32,
    marginLeft: 20,
    textAlign: 'center',
    width: 32,
  },
  pageNumber: {
    borderColor: colors.marvelRed,
    borderWidth: 1,
    borderRadius: 32,
    color: colors.marvelRed,
    fontSize: 21,
    height: 32,
    marginLeft: 20,
    textAlign: 'center',
    width: 32,
  },
});
