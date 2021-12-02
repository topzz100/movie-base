import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  :root {
    --maxWidth: 1280px; 
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535; 
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Outfit', sans-serif;
  }
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`