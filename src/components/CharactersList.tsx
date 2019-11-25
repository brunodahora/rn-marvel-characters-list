import * as React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Character from './Character';
import { charactersListStyles as styles } from './styles';

import { CharacterType } from '../models';

interface CharactersListPropsType {
  charactersList: Array<CharacterType>;
  openCharacter: (chracter: CharacterType) => void;
}

const CharactersList: React.FC<CharactersListPropsType> = ({
  charactersList,
  openCharacter,
}) => (
  <View style={styles.container}>
    <Text style={styles.listHeader}>Nome</Text>
    <ScrollView>
      {charactersList.map(
        (character: CharacterType): JSX.Element => (
          <Character
            key={character.id}
            {...character}
            onPress={() => openCharacter(character)}
          />
        )
      )}
    </ScrollView>
  </View>
);

export default CharactersList;
