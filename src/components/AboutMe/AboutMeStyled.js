import styled from "styled-components"

export const Container = styled.div`
  margin-top: 4em;
  display: grid;
  grid-template-columns: 50% 50%;
`
export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-top: 1em;
  }
`
export const DivLogos = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const Logos = styled.img`
  width: 5em;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`
export const DivImg = styled.div`
  display: flex;
  justify-content: end;
  height: 420px;
`
export const Img = styled.img`
  border-radius: 20px;
`
