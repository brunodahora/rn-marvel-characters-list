import * as React from 'react';
import { View, Alert } from 'react-native';

import { Header, CharactersList, Footer } from 'components';
import useFetch from 'utils/useFetch';
import { getApiUrl, debounce } from 'utils/helpers';
import { homeStyles as styles } from './styles';

const HomeScreen: React.FC = () => {
  const [search, setSearch] = React.useState<string>('');
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [name, setName] = React.useState<string>('');
  const { response, error } = useFetch(getApiUrl(currentPage, name));

  const updateNameSearch = (search: string): void => {
    setSearch(search);
    debounce(() => setName(search));
  };

  let charactersList = [];
  let numPages = 0;

  if (error || (response && response.status !== 'Ok')) {
    Alert.alert('Opa, algo deu errado!', 'Por favor tente novamente.');
  } else if (response) {
    charactersList = response.data.results;
    numPages = response.data.total;
  }

  return (
    <View style={styles.mainContainer}>
      <Header search={search} setSearch={updateNameSearch} />
      <CharactersList charactersList={charactersList} />
      <Footer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numPages={numPages}
      />
    </View>
  );
};

export default HomeScreen;
