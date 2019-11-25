import { createStackNavigator } from 'react-navigation-stack';
import { ListScreen, DetailScreen } from 'screens';
import { colors } from '../constants';

const AppNavigator = createStackNavigator({
  List: {
    screen: ListScreen,
    navigationOptions: {
      header: null,
    },
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      title: 'Perfil do personagem',
      headerStyle: {
        backgroundColor: colors.marvelRed,
      },
      headerTintColor: colors.white,
    },
  },
});

export default AppNavigator;
