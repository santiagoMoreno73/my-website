import styled from "styled-components"

export const Container = styled.div`
  margin-top: 4em;
  display: grid;
  grid-template-columns: 50% 50%;

  @media ${props => props.theme.breakpoints.md} {
    margin-top: 4em;
    display: grid;
    font-size: 0.8em;
    grid-template-columns: 100%;
  } ;
`
export const Div1 = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;

  @media ${props => props.theme.breakpoints.md} {
    display: flex;
    justify-content: center;
  }
`
export const Divimg = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`
