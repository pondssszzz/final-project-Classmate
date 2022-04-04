import { createTheme } from '@mui/material/styles';
import { light } from '@mui/material/styles/createPalette';

const customBlue = "#3f72af"
const customWhite = "#F9F7F7"

export default createTheme({
    palette: {
        background:{
            default : `${customBlue}`
        },
        common :{
            blue : `${customBlue}`,
            white : `${customWhite}`
        },
        primary: {
            main : `${customBlue}`,
            dark : "#112D4E"
        },
        secondary: {
            main : `${customWhite}`
        }
    },
    typography: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        h1 :{
            fontWeight : 700
        },
        h2 :{
            fontWeight : 500
        },
        h3 :{
            fontWeight : 400
        },
        h4 :{
            fontWeight : 300
        },
    }
});