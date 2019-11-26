import * as React from 'react';
import {
  render,
  fireEvent,
  act,
  waitForElement,
  wait,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import { fetch } from 'whatwg-fetch';
import fetchMock from 'fetch-mock';

import { getApiUrl } from 'utils/helpers';
import ListScreen from '../ListScreen';

import {
  charactersListPage1,
  charactersListPage2,
  charactersListPage3,
  charactersListPage4,
  tonyStark,
} from '../../fixtures';

const navigation = { navigate: jest.fn() };

describe('<ListScreen />', () => {
  beforeAll(() => {
    global.fetch = fetch;

    fetchMock.mock(getApiUrl(1), {
      status: 'Ok',
      data: {
        total: 4,
        results: charactersListPage1,
      },
    });
    fetchMock.mock(getApiUrl(2), {
      status: 'Ok',
      data: {
        total: 4,
        results: charactersListPage2,
      },
    });
    fetchMock.mock(getApiUrl(3), {
      status: 'Ok',
      data: {
        total: 4,
        results: charactersListPage3,
      },
    });
    fetchMock.mock(getApiUrl(4), {
      status: 'Ok',
      data: {
        total: 4,
        results: charactersListPage4,
      },
    });
    fetchMock.mock(getApiUrl(1, 'Tony Stark'), {
      status: 'Ok',
      data: {
        total: 1,
        results: tonyStark,
      },
    });
  });
  afterAll(() => {
    global.fetch.mockRestore();
  });

  it('shows four Marvel characters', async () => {
    act(async () => {
      const { queryByText } = render(<ListScreen navigation={navigation} />);
      await wait(() => expect(queryByText('3-D Man')).toBeTruthy());
      await wait(() => expect(queryByText('A-Bomb (HAS)')).toBeTruthy());
      await wait(() => expect(queryByText('A.I.M.')).toBeTruthy());
      await wait(() => expect(queryByText('Aaron Stack')).toBeTruthy());
    });
  });

  it('fetches next page and renders it', async () => {
    act(async () => {
      const { getByText, getByTestId } = render(
        <ListScreen navigation={navigation} />
      );
      const nextButton = await waitForElement(() => getByText('▶'));
      fireEvent.press(nextButton);
      await waitForElement(() => getByText('Abomination (Emil Blonsky)'));
      await waitForElement(() => getByText('Abomination (Ultimate)'));
      await waitForElement(() => getByText('Absorbing Man'));
      await waitForElement(() => getByText('Abyss'));
      await waitForElement(() => getByText('◀'));
      const selectedPage = await waitForElement(() =>
        getByTestId('selected-page')
      );
      expect(selectedPage.props.children).toEqual(2);
    });
  });

  it('fetches selected page and renders it', async () => {
    act(async () => {
      const { getByText, getByTestId } = render(
        <ListScreen navigation={navigation} />
      );
      fetchMock.mock(getApiUrl(1, 'Tony Stark'), () => {
        throw new Error(ERROR_MESSAGE);
      });
      fireEvent.press(getByText('3'));
      await waitForElement(() => getByText('Abyss (Age of Apocalypse)'));
      await waitForElement(() => getByText('Adam Destine'));
      await wait(() => expect(queryByText('3-D Man')).toBeTruthy());
      await waitForElement(() => getByText('Adam Warlock'));
      await waitForElement(() => getByText('Aegis (Trey Rollins)'));
      await waitForElement(() => getByText('◀'));
      await waitForElement(() => getByText('2'));
      await waitForElement(() => getByText('3'));
      await waitForElement(() => getByText('4'));
      await waitForElement(() => getByText('▶'));
      const selectedPage = await waitForElement(() =>
        getByTestId('selected-page')
      );
      await waitForElement(() => getByText('Aegis (Trey Rollins)'));
      expect(selectedPage.props.children).toEqual(3);
    });
  });

  it('renders last page and dont show right arrow', async () => {
    act(async () => {
      const { getByText, queryByText } = render(
        <ListScreen navigation={navigation} />
      );
      fireEvent.press(getByText('▶'));
      fireEvent.press(getByText('▶'));
      fireEvent.press(getByText('▶'));
      await waitForElement(() => getByText('2'));
      await waitForElement(() => getByText('3'));
      await waitForElement(() => getByText('4'));
      await waitForElementToBeRemoved(() => queryByText('▶'));
    });
  });

  it('inputs search and fetch character', async () => {
    act(async () => {
      const { getByText, getByTestId } = render(
        <ListScreen navigation={navigation} />
      );
      const searchInput = await waitForElement(() =>
        getByTestId('search-input')
      );
      fireEvent.change(searchInput, { target: { value: 'Tony Stark' } });
      await waitForElement(() => getByText('Tony Stark'));
    });
  });

  it('shows four Marvel characters', async () => {
    act(async () => {
      const navigation = { navigate: jest.fn() };
      const { getByText } = render(<ListScreen navigation={navigation} />);
      const character = await waitForElement(() => getByText('3-D Man'));
      fireEvent.click(character);
      expect(navigation.navigate).toHavenBeenCalledWith('Detail', {
        character: charactersListPage1[0],
      });
    });
  });

  it('shows an error', async () => {
    fetchMock.config.overwriteRoutes = true;
    fetchMock.mock(getApiUrl(1, 'Tony Stark'), () => {
      throw new Error('Error');
    });
    act(async () => {
      const { getByText } = render(<ListScreen navigation={navigation} />);
      await waitForElement(() => getByText('Opa, algo deu errado!'));
    });
  });
});
