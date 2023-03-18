import { createTheme } from '@mui/material/styles';
import { blue, lightBlue } from '@mui/material/colors';
export const theme = createTheme({
    typography:{
        fontFamily:'CustomFont',
        letterSpacing:'0.13px',

    },
    palette: {
        primary: {
            main: blue[500]
        },
        secondary: {
            main: lightBlue[800],
            midNightBlue: "#003366",
            grey:"#707070"
        }
    }
});