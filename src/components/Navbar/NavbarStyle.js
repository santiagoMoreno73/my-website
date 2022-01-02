import styled from "styled-components"

export const Nav = styled.nav`
  width: 100%;
  height: 45px;
  border-botton: 2px solid blue;
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  background: #ffffff;
  z-index: 2;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.8em;
  }
`
export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  a {
    padding: 10px 10px;
    color: Black;
    text-decoration: none;
    font-size: 0.8em;
    text-transform: uppercase;
    display: inline-block;
    width: 100%;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
  a:hover {
    color: #0099ff;
  }

  @media ${props => props.theme.breakpoints.md} {
    flex-flow: column nowrap;
    background: #fbfbfb;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`
export const StyledBurguer = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: none;
  z-index: 4;

  @media ${props => props.theme.breakpoints.md} {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #0099ff;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
