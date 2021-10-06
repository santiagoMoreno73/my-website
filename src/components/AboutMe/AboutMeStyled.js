import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  margin-top: 4em;
  display: grid;
  grid-template-columns: 50% 50%;
`
export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  align-items: center;
  justify-content: center;
  height: 100%;
`
export const Img = styled.img`
  border-radius: 20px;
`
