import { createMuiTheme } from '@material-ui/core';

const MATERIAL_THEME = 'dark';
const COLOR_PRIMARY_MAIN = '#00adee';
const BACKGROUND_COLOR = '#303030';
const DEFAULT_H1_FONT_SIZE = '4em';
const DEFAULT_H2_FONT_SIZE = '2.6em';
const HEADER_APP_BAR_BG_COLOR = BACKGROUND_COLOR;

const theme = createMuiTheme({
  palette: {
    type: MATERIAL_THEME,
    primary: {
      main: COLOR_PRIMARY_MAIN,
    },
    background: {
      paper: BACKGROUND_COLOR,
    },
  },
  props: {
    MuiTextField: {
      size: 'small',
    },
  },
  overrides: {
    MuiFormLabel: {
      asterisk: {
        color: 'red',
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: 'inherit',
      },
    },
    MuiTypography: {
      h1: {
        fontSize: DEFAULT_H1_FONT_SIZE, // default 6 em
      },
      h2: {
        fontSize: DEFAULT_H2_FONT_SIZE, // default 3.75 em
      },
    },
    MuiCardMedia: {
      media: {
        width: '100%',
        height: 'auto',
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: HEADER_APP_BAR_BG_COLOR,
        color: 'white',
      },
    },
    MuiButtonBase: {
      root: {
        '&:focus': {
          outline: 'none',
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: 'capitalize',
      },
    },
  },
});

export default theme;
