import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;600&display=swap");

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Nunito Sans", sans-serif;
}

code {
  font-family: "Nunito Sans", sans-serif;
}

button {
  font-family: "Nunito Sans", sans-serif;
}
`
