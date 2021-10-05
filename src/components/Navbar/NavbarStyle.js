import styled from "styled-components"
import { Link } from "gatsby"

export const NavMenu = styled.nav`
  position: fixed;
  justify-content: center;
  background: White;
  top: 0;
  width: 100%;
  display: flex;
  opacity: 0.8;
  justify-content: space-around;
  padding: 10px;

  a {
    color: Black;
    text-decoration: none;
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 500;
    display: inline-block;
    width: 80px;
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
`
