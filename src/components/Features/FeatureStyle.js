import styled from "styled-components"

export const Container = styled.div`
  margin-top: 4em;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(3, 1fr);
`
export const DataCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20.75em;
  min-height: 20.75em;
  overflow: hidden;
  border-radius: 0.5em;
  text-decoration: none;
  background: white;
  margin: 1em;
  padding: 2.75em 2.5em;
  box-shadow: 0 1.5em 2.5em -0.5em rgba(#000000, 0.1);
  transition: transform 0.45s ease, background 0.45s ease;

  img {
    width: 200px;
  }

  h3 {
    color: #2e3c40;
    font-size: 3em;
    font-weight: 400;
    line-height: 1;
    padding-bottom: 0.5em;
    border-bottom: 2px solid #0099ff;
    transition: color 0.45s ease, border 0.45s ease;
  }

  h4 {
    color: #627084;
    text-transform: uppercase;
    font-size: 1.125em;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.1em;
    margin: 1em 0em 1em 0em;
    transition: color 0.45s ease;
  }

  p {
    opacity: 0;
    color: #ffffff;
    font-weight: 600;
    line-height: 1.8;
    margin: 0 0 1.25em;
    transform: translateY(-1em);
    transition: opacity 0.45s ease, transform 0.5s ease;
  }

  a {
    display: block;
    color: #0099ff;
    text-decoration: none;
    font-size: 1.125em;
    font-weight: 600;
    line-height: 1.2;
    margin: auto 0 0;
    transition: color 0.45s ease;
  }

  &:hover {
    background: #0099ff;
    transform: scale(1.02);

    h3 {
      color: #ffffff;
      border-bottom-color: #ffffff;
    }

    h4 {
      color: #ffffff;
    }

    p {
      opacity: 1;
      transform: none;
    }

    .link-text {
      color: #ffffff;
    }
  }
`
