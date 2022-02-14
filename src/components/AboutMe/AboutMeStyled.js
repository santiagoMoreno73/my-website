import styled from "styled-components"

export const DivLogos = styled.div`
  display: flex;
  width: 450px;
  overflow-x: scroll;
  align-items: center;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 20px;
    border: 5px solid #ffffff;
  }

  :hover::-webkit-scrollbar-thumb {
    background-color: #c8c8c8;
    border-radius: 20px;
    border: 5px solid #ffffff;
  }
`
export const Logo = styled.img`
  width: 5em;
  margin: 0em 0.8em;
  opacity: 0.9;

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
