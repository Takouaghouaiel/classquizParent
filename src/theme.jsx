import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
    },
  },
  customColor: {
    main: '#3BC5CA',
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: '2px solid #3BC5CA', 
        },
      },
    },
  },
});
