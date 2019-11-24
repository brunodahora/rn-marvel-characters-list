import * as React from 'react';
import { View } from 'react-native';

import { Header, CharactersList } from 'components';
import { homeStyles as styles } from './styles';

import { charactersList } from '../fixtures';

const HomeScreen: React.FC = () => {
  const [search, setSearch] = React.useState<string>('');
  return (
    <View style={styles.mainContainer}>
      <Header search={search} setSearch={setSearch} />
      <CharactersList charactersList={charactersList} />
    </View>
  );
};

export default HomeScreen;
