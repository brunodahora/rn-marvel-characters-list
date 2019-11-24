import * as React from 'react';
import { View } from 'react-native';

import { Header } from 'components';
import { homeStyles as styles } from './styles';

const HomeScreen: React.FC = () => {
  const [search, setSearch] = React.useState<string>('');
  return (
    <View style={styles.mainContainer}>
      <Header search={search} setSearch={setSearch} />
    </View>
  );
};

export default HomeScreen;
