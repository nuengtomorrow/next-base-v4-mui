import { createMuiTheme } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors/';

const fontStyle = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
}

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2196F3",
      light: "rgba(197, 220, 250, 0.5)",
    },
    secondary: {
      main: '#f50057',
    },
    error: {
      main: red.A400,
      contrastText: "#FCD0CF",
    },
    success: {
      main: "#1F8B24",
      contrastText: "#C5F2C7",
    },
    background: {
      default: "#F5F5F5",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 750,
      md: 960,
      lg: 1300,
      xl: 1920,
    },
  },
  typography: {
    "fontFamily": `"Roboto", "Helvetica", sans-serif`,
    "h1": {
      fontSize: 94,
      lineHeight: "125%",
      fontWeight: fontStyle.bold,
      letterSpacing: "-1.5%",
    },
    "h2": {
      fontSize: 58,
      lineHeight: "133%",
      fontWeight: fontStyle.bold,
      letterSpacing: "-1%",
     },
     "h3": {
      fontSize: 46,
      lineHeight: "133%",
      fontWeight: fontStyle.bold,
      letterSpacing: "-0.5%",
     },
     "h4": {
      fontSize: 32,
      lineHeight: "130%",
      fontWeight: fontStyle.semiBold,
     },
     "h5": {
      fontSize: 22,
      lineHeight: "132%",
      fontWeight: fontStyle.semiBold,
     },
    "h6": {
      fontSize: 18,
      lineHeight: "138%",
      fontWeight: fontStyle.semiBold,
      letterSpacing: "0.75%",
    },
    "subtitle1": {
      fontSize: 16,
      lineHeight: "150%",
      fontWeight: fontStyle.bold,
      letterSpacing: "0.5%",
      fontFeatureSettings: `'tnum' on, 'lnum' on`,
     },
     "subtitle2": {
      fontSize: 14,
      lineHeight: "142%",
      fontWeight: fontStyle.bold,
      letterSpacing: "0.5%",
      fontFeatureSettings: `'tnum' on, 'lnum' on`,
     },
     "body1": {
      fontSize: 16,
      lineHeight: "150%",
      fontWeight: fontStyle.regular,
      letterSpacing: "1.68%",
      fontFeatureSettings: `'tnum' on, 'lnum' on`,
     },
     "body2": {
      fontSize: 14,
      lineHeight: "142%",
      fontWeight: fontStyle.regular,
      letterSpacing: "1.68%",
      fontFeatureSettings: `'tnum' on, 'lnum' on`,
     },
     "caption": {
      fontSize: 14,
      lineHeight: "130%",
      fontWeight: fontStyle.regular,
      letterSpacing: "3%",
     },
     "button": {
      fontSize: 15,
      lineHeight: "150%",
      fontWeight: fontStyle.semiBold,
      letterSpacing: "5%",
     },
     "overline": {
      fontSize: 10,
      lineHeight: "158%",
      fontWeight: fontStyle.bold,
      letterSpacing: "15%",
     },
   }
});

export default theme;