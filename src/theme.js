import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#950101',
    },
    secondary: {
      main: '#FFC900',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FAF7F4'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Ubuntu',
      '"Helvetica Neue"',
      'Arial',
    ].join(','),
    h2: {
      fontWeight: 700,
      letterSpacing: '-4px'
    }
  },
});

export default theme;