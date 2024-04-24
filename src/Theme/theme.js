import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const font = 'Nunito, sans-serif';

const theme = createTheme({
  palette: {
    background: {
      default: "#fff",
      custom: "#fff"
    },
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: "#FE5722"
    },
    tirtionary: {
      main: "#0A4DAA"
    },
    black: {
      main: '#000000'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: "none",
          borderRadius: 8,
          fontSize: 16,
          cursor: "pointer",
          textTransform: "none",
          height: "30px",
          transition: "background-color 0.3s",
          "&:hover": {
            backgroundColor: "rgba(41, 184, 77, 0.1)",
          },
        },
        contained: {
          backgroundColor: "#FE5722",
          color: "#fff",
          borderRadius: 4,
          boxShadow: "0px 0px 9px 2px rgba(254, 87, 34, 0.2)",
          "&:hover": {
            backgroundColor: "#FE5722",
            borderRadius: 4,
            boxShadow: "0px 0px 13px 2px rgba(254, 87, 34, 0.3)",
          },
        },

        outlined: {
          backgroundColor: "transparent",
          color: "rgb(52,199,89)",
          border: "1px solid #379237",
          borderRadius: 6,
          "&:hover": {
            backgroundColor: "#379237",
            border: "1px solid rgb(52,199,89)",
            borderRadius: 6,
          },
        },
      },
    },
  },
  root: {
    "& .MuiDataGrid-columnHeaders": {
      fontSize: 17.8,
    },
    "& .MuiDataGrid-row Mui-selected": {
      backgroundColor: "red"
    }
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0px',
      height: '10px',
    },
    '*::-webkit-scrollbar-thumb': {
      width: '0rem',
      backgroundColor: '#D5073C',
      borderRadius: "2rem",
    },
  },
});

export default theme;