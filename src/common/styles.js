import { StyleSheet } from 'react-native';

export const FONT_SIZE = {
  normal: 16,
  high: 20
}

export const COLOR = {
  primary: '#778899',
  light: '#fffafa',
  medium: '#d1d1d1',
  dark: '#929292'
};

export const TEXT = StyleSheet.create({
  normalLight: {
    color: COLOR.light,
    fontSize: FONT_SIZE.normal
  },
  normalMedium: {
    color: COLOR.medium,
    fontSize: FONT_SIZE.normal
  },
  normalDark: {
    color: COLOR.medium,
    fontSize: FONT_SIZE.normal
  },
  highLight: {
    color: COLOR.light,
    fontSize: FONT_SIZE.high
  }
});