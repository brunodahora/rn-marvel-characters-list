import * as React from 'react';
import { View, Alert } from 'react-native';

import { Header, CharactersList, Footer } from 'components';
import useFetch from 'utils/useFetch';
import { homeStyles as styles } from './styles';
import { API_URL, API_TS, API_KEY, API_HASH } from '../../environment';

export const getApiUrl = (currentPage: number, name?: string): string =>
  `${API_URL}/characters?${
    name ? `name=${name.replace(' ', '+')}&` : ''
  }limit=4&offset=${4 *
    (currentPage - 1)}&ts=${API_TS}&apikey=${API_KEY}&hash=${API_HASH}`;

let timeoutId: number = null;
const debounce = (func: Function, timeout = 300): void => {
  if (timeoutId) clearTimeout(timeoutId);
  timeoutId = setTimeout(() => func(), timeout);
};

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
