import * as React from 'react';
import { render } from '@testing-library/react-native';

import Character from '../Character';

import { tonyStark } from '../../fixtures';

describe('<Character />', () => {
  it('renders the character data', () => {
    const { container } = render(
      <Character onPress={jest.fn()} {...tonyStark[0]} />
    );
    expect(container).toMatchInlineSnapshot(`
      <View
        collapsable={true}
        pointerEvents="box-none"
        style={
          Object {
            "flex": 1,
          }
        }
      >
        <TouchableOpacity
          activeOpacity={0.2}
        >
          <View
            style={
              Object {
                "alignItems": "center",
                "borderBottomColor": "#D42026",
                "borderBottomWidth": 1,
                "flexDirection": "row",
                "padding": 18,
                "width": "100%",
              }
            }
          >
            <Image
              source={
                Object {
                  "uri": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
                }
              }
              style={
                Object {
                  "borderRadius": 50,
                  "height": 50,
                  "marginRight": 25,
                  "width": 50,
                }
              }
            />
            <Text
              style={
                Object {
                  "fontSize": 21,
                }
              }
            >
              Tony Stark
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    `);
  });
});
