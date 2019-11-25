import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { CharacterType } from '../models';

import { charactersListStyles as styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

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
        (character: CharacterType): JSX.Element => {
          const {
            id,
            name,
            thumbnail: { path, extension },
          } = character;
          return (
            <TouchableOpacity key={id} onPress={() => openCharacter(character)}>
              <View style={styles.characterContainer}>
                <Image
                  source={{ uri: `${path}.${extension}` }}
                  style={styles.characterImage}
                />
                <Text style={styles.characterName}>{name}</Text>
              </View>
            </TouchableOpacity>
          );
        }
      )}
    </ScrollView>
  </View>
);

export default CharactersList;
