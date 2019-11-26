import * as React from 'react';
import { render } from '@testing-library/react-native';

import DetailScreen from '../DetailScreen';

import { tonyStark } from '../../fixtures';

describe('<DetailsScree />', () => {
  it('renders the character data', () => {
    const navigation = { getParam: () => tonyStark[0] };
    const { container } = render(<DetailScreen navigation={navigation} />);
    expect(container).toMatchSnapshot();
  });
});
