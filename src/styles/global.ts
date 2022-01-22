import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`

  :root{
    --pink: #E31F71;
    --yellow: #e8e3c3;
    --textCol : #0c0d0d;
    --green: #23ce6b;
    
    --blue: #016fb9;
    --black: #000000;
    --purple:#432a59;
    --white: #ffffff;
    --orange: #e6aa32;
    scroll-padding-top: 10rem;

    &.light{

      body{
        transition: 0.5s;
        background-color:   #f5f5f5;
        color: var(--black);
      }

      .logo{
        color: var(--white);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f550;
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--yellow); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--yellow);
      }
    }
  }



  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(-yellow);
    color: #FFFF;
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: #FFFF;
    &::first-letter{
      color: var(--green);
    }
  }
  

`