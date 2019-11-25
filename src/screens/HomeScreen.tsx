import * as React from 'react';
import { View } from 'react-native';

import { Header, CharactersList, Footer } from 'components';
import { homeStyles as styles } from './styles';

import { charactersList } from '../fixtures';

const HomeScreen: React.FC = () => {
  const [search, setSearch] = React.useState<string>('');
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  return (
    <View style={styles.mainContainer}>
      <Header search={search} setSearch={setSearch} />
      <CharactersList charactersList={charactersList} />
      <Footer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numPages={10}
      />
    </View>
  );
};

export default HomeScreen;
