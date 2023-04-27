import { createTheme } from '@mui/material/styles';
import { blue, lightBlue } from '@mui/material/colors';
export const theme = createTheme({
    typography:{
        fontFamily:'CustomFont',
        letterSpacing:'0.13px',

    },
    palette: {
        secondary: {
            main: lightBlue[800],
            midNightBlue: "#003366",
            grey:"#707070",
            myblue:'#3BC5CA',
            white:'#FFFFFF'
        },
      
    }
});