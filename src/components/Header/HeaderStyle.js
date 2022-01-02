import styled from "styled-components"

export const Container = styled.div`
  margin-top: 4em;

  @media ${props => props.theme.breakpoints.sm} {
    .title {
      display: flex;
      justify-content: center;
    }
    h2 {
      @media ${props => props.theme.breakpoints.sm} {
        font-size: 1.5em;
      }
    }
  }
`
