import { createGlobalStyle } from 'styled-components';
import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';
import ComfortaaRegular from '../assets/fonts/Comfortaa-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url(${RobotoRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 400;
    src: url(${ComfortaaRegular}) format('truetype');
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
    height: 100%;
    width: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Roboto';
    line-height: 1.4em;
    margin: 0;
    min-height: 100%;
    width: 100%;
  }
`;