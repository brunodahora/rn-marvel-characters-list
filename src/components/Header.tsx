import * as React from 'react';
import { View, Text, TextInput } from 'react-native';

import { headerStyles as styles } from './styles';

interface HeaderPropsType {
  search: string;
  setSearch: (string) => void;
}

const Header: React.FC<HeaderPropsType> = ({ search, setSearch }) => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={[styles.defaultFont, styles.mainTitle]}>BUSCA MARVEL </Text>
      <Text style={[styles.defaultFont]}>TESTE FRONT-END</Text>
    </View>
    <View style={styles.divider} />
    <Text style={[styles.defaultFont]}>Nome do Personagem</Text>
    <TextInput
      style={styles.searchInput}
      value={search}
      onChangeText={setSearch}
    />
  </View>
);

export default Header;
