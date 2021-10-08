import styled from "styled-components"

export const Container = styled.div`
  max-width: 1020px;
  width: 100%;
  margin: auto;

  h2 {
    font-size: 2em;
  }

  @media ${props => props.theme.breakpoints.md} {
    margin: 10px;
  }
`
