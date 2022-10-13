import styled from "styled-components";

export const CountryData = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  
    img {
      width: 440px;
      height: 300px;
    }
  
    .data--area {
      display: flex;
      flex-direction: column;
      justify-content: center;
      
      h1 {
        margin: 0px;
      }
      
      .date--firstArea {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-top: 20px;
        
        p{
          margin: 5px 0px;
          span{
            font-weight: bold;
          }
        }
        
        .language {
          font-weight: normal;
          margin-right: 5px;
        }
      }
      
      .border--area {
        margin-top: 20px;
        p{
          font-weight: bold;
        }
        
        .borders {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 5px;
          width: 100%;
          
          a {
              text-decoration: none;
              color: #000;
              display: flex;
              min-height: 25px;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              font-size: 13px;
              font-weight: 300;
              box-shadow: 1px 1px 1em rgba(0,0,0,0.2);
              
          }
        }
      }
    }
  
  @media(min-width: 768px) and (max-width: 1023px){
    &{
      img {
        width: 340px;
        height: 200px;
      }
      
      .data--area {
        h1{
          font-size: 28px;
        }
        .data--firstArea {
          p, span{
            font-size: 14px;
          }
        }
        
        .border--area{
          p,span,a {
            font-size: 14px;
          }
        }
      }
    }
  }
  
  @media(max-width: 767px){
    &{
      grid-template-columns: 1fr;
      
      img {
        width: 280px;
        height: 180px;
      }
    }
  }
`;