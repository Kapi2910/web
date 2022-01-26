import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  --black: #000000;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    color: black;
    border-bottom: 0.2rem solid var(--blue);
  }

  h3{
    margin-top: 2rem;
    color: black;
    color: var(--purple);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    color: var(--purple);
    font-weight: 500;
  }

  .social-media{
    display: flex;
    align-items: center;
    
    margin-top: 1.6rem;
    flex-wrap: wrap;
    gap: 1.8rem;

    img,span{
      font-size: 3rem;
      width: 3rem;
    }
  }
  
  

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 100%;
     filter: grayscale(1);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;

    .about-image{
      display: flex;
    }
    .hard-skills{
      justify-content: center;
    }
    
  }

`