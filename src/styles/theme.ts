import { createTheme, responsiveFontSizes } from '@mui/material'

let theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'Open Sans', '-apple-system'].join(',')
  }
})

theme = responsiveFontSizes(theme)

export default theme
