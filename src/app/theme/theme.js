'use client';
import { createTheme } from '@mui/material/styles';

// Color HEX Codes
const BLACK = "#000000";
const ORANGE = "#f95602";
const GOLD = "#b5985a";
const GREY = "#a4a9ad";
const WHITE = "#ffffff"

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1280,
      largeDesktop: 1440,
    },
  },
  palette: {
    background: {
      default: BLACK,
    },
    primary: {
      main: ORANGE,
    },
    text: {
      primary: WHITE,
      secondary: GREY,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: BLACK,
          color: WHITE,
          border: `2px solid ${GOLD}`,
          padding: "15px",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: BLACK,
          color: WHITE,
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: ORANGE
        }
      }
    }
  },
});

export default theme;
