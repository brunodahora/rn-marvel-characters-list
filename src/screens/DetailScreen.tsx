import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import { isEmptyString } from 'utils/helpers';
import { detailStyles as styles } from './styles';
import { CharacterType, ItemType } from '../models';

interface DetailScreenPropsType {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const DetailScreen: React.FC<DetailScreenPropsType> = ({
  navigation: { getParam },
}) => {
  const {
    name,
    description,
    thumbnail: { path, extension },
    series,
    events,
  }: CharacterType = getParam('character');
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={{ uri: `${path}.${extension}` }}
          style={styles.characterImage}
        />
        <Text style={styles.titleFont}>Nome</Text>
        <Text style={styles.defaultFont}>{name}</Text>
        {!isEmptyString(description) && (
          <Text style={styles.titleFont}>Descrição</Text>
        )}
        {!isEmptyString(description) && (
          <Text style={styles.defaultFont}>{description}</Text>
        )}
        {series.items.length > 0 && (
          <Text style={styles.titleFont}>Séries</Text>
        )}
        {series.items.map((serie: ItemType) => (
          <Text key={serie.name} style={styles.defaultFont}>
            {serie.name}
          </Text>
        ))}
        {events.items.length > 0 && (
          <Text style={styles.titleFont}>Eventos</Text>
        )}
        {events.items.map((event: ItemType) => (
          <Text key={event.name} style={styles.defaultFont}>
            {event.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
