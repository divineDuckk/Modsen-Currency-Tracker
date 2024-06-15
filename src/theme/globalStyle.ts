import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 
    p, a, h1, h2,h3,h4,h5,h6{
        font-style: normal;
    }
  
    
    h1,h2,h3,h4,h5,h6{
        color: ${({ theme }) => theme.hColor};
    }
    a{
        text-decoration:none;
    }
    ul{
        list-style-type: none;
    }
    body{
        margin: 0 auto;
        padding: 0;
        background-color:${({ theme }) => theme.body};
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        font-family: "Poppins";
        color:${({ theme }) => theme.textColor}
       
    }   
    #root {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items:center;
    }
`
