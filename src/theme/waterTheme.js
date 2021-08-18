import { createTheme } from '@material-ui/core/styles'
import { enumThemes } from './enumThemes'

const textColor = '#eee'

export const waterTheme = createTheme({
  name: 'water',
  breakpoints: {
    values: {
      sm: 528,
    },
  },
  typography: {
    subtitle1: {
      fontSize: 15,
      fontFamily: 'Helvetica, Arial, sans-serif',
      color: 'rgb(102, 102, 102)',
    },
    h5: {
      fontSize: 20,
      fontFamily: 'Helvetica, Arial, sans-serif',
      color: 'rgb(51,51,51)',
      fontWeight: 700,
    },
    h6: {
      fontWeight: 400,
      color: 'rgb(51,51,51)',
    },
  },
  palette: {
    primary: {
      light: '#54647b',
      main: '#293a4f',
      dark: '#001427',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffd75b',
      main: '#ffa626',
      dark: '#c67700',
      contrastText: '#000000',
    },
    default: {
      light: '#ffd75b',
      main: '#ffa626',
      dark: '#c67700',
      contrastText: '#000000',
    },
    storeBackground: 'aliceblue',
    text: textColor,
  },
})
