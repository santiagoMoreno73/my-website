import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
`
export const Div1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.md} {
    margin-top: 2em;
  }
  p {
    font-size: 1.3em;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    margin: 3em;
  }
`
export const DivLinks = styled.div`
  display: flex;
`
