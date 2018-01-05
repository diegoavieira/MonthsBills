import { StyleSheet } from 'react-native';

export const FONT_SIZE = {
  normal: 16
}

export const COLOR = {
  primary: '#778899',
  primaryDark: '#6b7a89',
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
  }
});

export const TOAST = StyleSheet.create({
  content: {
    position: 'absolute',
    left: 15,
    right: 15,
    paddingLeft: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
    padding: 15
  }
});

export const BILLS_LIST = StyleSheet.create({
  content: {
    backgroundColor: COLOR.light,
    flex: 1,
    justifyContent: 'space-between'
  }
});