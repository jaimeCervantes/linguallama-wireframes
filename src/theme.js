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
});

export default theme;