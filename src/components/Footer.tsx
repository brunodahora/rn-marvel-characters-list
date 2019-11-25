import * as React from 'react';
import { View, ViewStyle, Text, TouchableOpacity } from 'react-native';

import { footerStyles as styles } from './styles';

interface FooterPropsType {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  numPages: number;
}

export const getVisiblePages = (
  currentPage: number,
  numPages: number
): Array<number> => {
  console.log(numPages);
  if (numPages < 3) return [...Array(numPages + 1).keys()].slice(1);
  if (currentPage === 1) return [1, 2, 3];
  else if (currentPage === numPages)
    return [numPages - 2, numPages - 1, numPages];
  else return [currentPage - 1, currentPage, currentPage + 1];
};

const Footer: React.FC<FooterPropsType> = ({
  currentPage,
  setCurrentPage,
  numPages,
}) => {
  const getPageStyle = (page: number): ViewStyle =>
    page === currentPage ? styles.selectedPage : styles.pageNumber;

  const isFirstPage = currentPage !== 1;
  const isLastPage = currentPage !== numPages;

  const goBack = () => setCurrentPage(currentPage - 1);
  const goForward = () => setCurrentPage(currentPage + 1);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack} disabled={!isFirstPage}>
        <Text style={styles.defaultFont}>{isFirstPage ? '◀' : ' '}</Text>
      </TouchableOpacity>
      <View style={styles.pagesContainer}>
        {getVisiblePages(currentPage, numPages).map(
          (page: number): JSX.Element => (
            <TouchableOpacity key={page} onPress={() => setCurrentPage(page)}>
              <Text style={getPageStyle(page)}>{page}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
      <TouchableOpacity onPress={goForward} disabled={!isLastPage}>
        <Text style={styles.defaultFont}>{isLastPage ? '▶' : ' '}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
