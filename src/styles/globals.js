import { createGlobalStyle } from "styled-components"
import NunitoLight from "../assets/fonts/NunitoSans-Light.ttf"

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

@font-face{
  font-family: 'Nunito Sans';
  src: url(${NunitoLight})
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Nunito Sans';
}

code {
  font-family: 'Nunito Sans';
}

button {
  font-family: 'Nunito Sans';
}
`
