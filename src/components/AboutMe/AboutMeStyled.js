import styled from "styled-components"

export const DivLogos = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${props => props.theme.breakpoints.md} {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fill, 1fr);
  }
`
export const Logos = styled.img`
  width: 5em;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`

export const Img = styled.img`
  border-radius: 20px;
  @media ${props => props.theme.breakpoints.md} {
    margin-top: 2em;
    width: 300px;
    height: 400px;
  }
`
