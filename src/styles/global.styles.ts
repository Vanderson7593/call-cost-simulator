import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html{
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
  }
  html,
  body {
    font-family: Montserrat, Open Sans, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
  }
  input {
    border: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`

export const Container = styled.div`
disply: flex;
justify-content: center;
align-items: center;
flex-direcction: column;
`
