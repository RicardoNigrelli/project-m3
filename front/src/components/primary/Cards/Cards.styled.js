import styled from "styled-components";

const BoxCards = styled.div `
display: flex;
justify-content: center;
align-items: center;
gap: 5em;
width: 100%;
height: 350px;
background-color: white;
`


const CardAdv = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid #09b3ff;
  width: 240px;
  height: 290px;
  background-color: white;
  border-radius: 9px;
`;

const CardAdvUp = styled.div`
  width: 100px;
  height: 100px;
  width: 236px;
  height: 145px;
  background-color: #083D77;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top:15px;
`;

const LogoCardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  
`;

const CardTitle = styled.h3`
  color: #ffffff;
  text-align: center;
  
`;



const CardDescription = styled.h4`
  color: black;
  text-align: center;
  font-size: 14px;
  padding: 15px 10px 10px 10px;
`;




export {
  BoxCards,
  CardAdv,
  CardAdvUp,
  CardTitle,
  CardDescription,
  LogoCardTitle,
};