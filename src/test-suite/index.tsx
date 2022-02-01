import { ThemeProvider } from '@mui/material'
import { render } from '@testing-library/react'
import { TotalProvider } from '../context/total-context'
import { FC } from 'react'
import theme from '../styles/theme'
import { CustomRender } from './test-suite.types'

const makeProviders =
  (): FC =>
  ({ children }) =>
    (
      <ThemeProvider theme={theme}>
        <TotalProvider>{children}</TotalProvider>
      </ThemeProvider>
    )

export const customRender: CustomRender = (ui, options = {}) => {
  return render(ui, {
    wrapper: makeProviders(),
    ...options
  })
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render }
