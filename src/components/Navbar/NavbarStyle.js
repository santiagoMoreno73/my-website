import styled from "styled-components"

export const Nav = styled.nav`
  width: 100%;
  height: 45px;
  border-botton: 2px solid blue;
  padding: 0 20px;
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
  .dot {
    position: absolute;
    top: 38px;
    left: 150px;
    width: 6px;
    height: 6px;
    background: #0099ff;
    border-radius: 50%;
    opacity: 0;
    -webkit-transform: translateX(30px);
    transform: translateX(30px);
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.8s ease-in-out;
  }
  a:nth-child(1):hover ~ .dot {
    -webkit-transform: translateX(86px);
    transform: translateX(86px);
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.8s ease-in-out;
    opacity: 1;
  }

  a:nth-child(2):hover ~ .dot {
    -webkit-transform: translateX(530px);
    transform: translateX(530px);
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.8s ease-in-out;
    opacity: 1;
  }

  a:nth-child(3):hover ~ .dot {
    -webkit-transform: translateX(974px);
    transform: translateX(974px);
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.8s ease-in-out;
    opacity: 1;
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

//  position: fixed;
//  z-index: 1;
//  justify-content: center;
//  background: White;
//  top: 0;
//  width: 100%;
//  display: flex;
//  opacity: 0.8;
//  justify-content: space-around;
//  padding: 10px;
//
//  @media ${props => props.theme.breakpoints.sm} {
//    display: flex;
//    justify-content: center;
//  }
//
//  a {
//    color: Black;
//    text-decoration: none;
//    font-size: 1.2em;
//    text-transform: uppercase;
//    font-weight: 500;
//    display: inline-block;
//    width: 80px;
//    -webkit-transition: all 0.2s ease-in-out;
//    transition: all 0.2s ease-in-out;
//  }

//
//  .dot {
//    position: absolute;
//    top: 38px;
//    left: 150px;
//    width: 6px;
//    height: 6px;
//    background: #0099ff;
//    border-radius: 50%;
//    opacity: 0;
//    -webkit-transform: translateX(30px);
//    transform: translateX(30px);
//    -webkit-transition: all 0.5s ease-in-out;
//    transition: all 0.8s ease-in-out;
//  }
//
//  a:nth-child(1):hover ~ .dot {
//    -webkit-transform: translateX(86px);
//    transform: translateX(86px);
//    -webkit-transition: all 0.5s ease-in-out;
//    transition: all 0.8s ease-in-out;
//    opacity: 1;
//  }
//
//  a:nth-child(2):hover ~ .dot {
//    -webkit-transform: translateX(530px);
//    transform: translateX(530px);
//    -webkit-transition: all 0.5s ease-in-out;
//    transition: all 0.8s ease-in-out;
//    opacity: 1;
//  }
//
//  a:nth-child(3):hover ~ .dot {
//    -webkit-transform: translateX(974px);
//    transform: translateX(974px);
//    -webkit-transition: all 0.5s ease-in-out;
//    transition: all 0.8s ease-in-out;
//    opacity: 1;
//  }
