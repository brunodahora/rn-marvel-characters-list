import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { charactersListStyles as styles } from './styles';

import { CharacterType } from '../models';

interface CharacterPropsType extends CharacterType {
  onPress: () => void;
}

const Character: React.FC<CharacterPropsType> = ({
  id,
  name,
  thumbnail: { path, extension },
  onPress,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.characterContainer}>
      <View style={styles.characterImageContainer}>
        <Image
          source={{ uri: `${path}.${extension}` }}
          style={styles.characterImage}
        />
      </View>
      <Text style={styles.characterName}>{name}</Text>
    </View>
  </TouchableOpacity>
);

export default Character;
