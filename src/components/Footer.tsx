import * as React from 'react';
import { View, ViewStyle, Text, TouchableOpacity } from 'react-native';

import { getVisiblePages } from 'utils/helpers';

import { footerStyles as styles } from './styles';

interface FooterPropsType {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  numPages: number;
}

const Footer: React.FC<FooterPropsType> = ({
  currentPage,
  setCurrentPage,
  numPages,
}) => {
  const getPageStyle = (page: number): ViewStyle =>
    page === currentPage ? styles.selectedPage : styles.pageNumber;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === numPages || numPages === 0;

  const goBack = () => setCurrentPage(currentPage - 1);
  const goForward = () => setCurrentPage(currentPage + 1);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack} disabled={isFirstPage}>
        <Text style={styles.defaultFont}>{!isFirstPage ? '◀' : ' '}</Text>
      </TouchableOpacity>
      <View style={styles.pagesContainer}>
        {getVisiblePages(currentPage, numPages).map(
          (page: number): JSX.Element => (
            <TouchableOpacity key={page} onPress={() => setCurrentPage(page)}>
              <Text
                testID={currentPage === page ? 'selected-page' : `page-${page}`}
                style={getPageStyle(page)}
              >
                {page}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>
      <TouchableOpacity onPress={goForward} disabled={isLastPage}>
        <Text style={styles.defaultFont}>{!isLastPage ? '▶' : ' '}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
