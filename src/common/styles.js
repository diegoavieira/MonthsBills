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
  normalPrimaryStrong: {
    color: COLOR.primary,
    fontSize: FONT_SIZE.normal,
    fontWeight: '500'
  },
  normalMedium: {
    color: COLOR.medium,
    fontSize: FONT_SIZE.normal
  },
  normalDark: {
    color: COLOR.dark,
    fontSize: FONT_SIZE.normal
  },
  normalDarkStrong: {
    color: COLOR.dark,
    fontSize: FONT_SIZE.normal,
    fontWeight: '500'
  },
  highLight: {
    color: COLOR.light,
    fontSize: FONT_SIZE.high
  },
  highLightStrong: {
    color: COLOR.light,
    fontSize: FONT_SIZE.high,
    fontWeight: '500'
  },
  highDark: {
    color: COLOR.dark,
    fontSize: FONT_SIZE.high
  }
});