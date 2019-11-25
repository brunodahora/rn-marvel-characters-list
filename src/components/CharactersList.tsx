import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { CharacterType } from '../models';

import { charactersListStyles as styles } from './styles';

interface CharactersListPropsType {
  charactersList: Array<CharacterType>;
}

const CharactersList: React.FC<CharactersListPropsType> = ({
  charactersList,
}) => (
  <View style={styles.container}>
    <Text style={styles.listHeader}>Nome</Text>
    {charactersList.map(
      ({
        id,
        name,
        thumbnail: { path, extension },
      }: CharacterType): JSX.Element => (
        <View key={id} style={styles.characterContainer}>
          <Image
            source={{ uri: `${path}.${extension}` }}
            style={styles.characterImage}
          />
          <Text style={styles.characterName}>{name}</Text>
        </View>
      )
    )}
  </View>
);

export default CharactersList;
