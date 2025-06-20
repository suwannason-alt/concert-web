
import { createTheme } from '@mui/material/styles';
export const MuiTheme = createTheme(
    {
        palette: {
            primary: {
                main: '#0070A4'
            },
            error: {
                main: '#F96464'
            },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                color: 'white'
              },
            },
          }
        }
      }
)