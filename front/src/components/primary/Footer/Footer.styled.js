import styled from "styled-components"

const FooterContainer = styled.div`
  display: flex;
  background-color: #0155a7;
  width: 100%;
  height: 350px;
  border-top: 3px solid white;
`; 
const HeaderContainerLeft1 = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const HeaderContainerLeft2 = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
`;

const HeaderContainerRight1 = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
`;

const HeaderContainerRight2 = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`;

const LogoFooter = styled.div`
  display: flex;
  
  width: 200px;
  height: 200px;
`

const TextBox = styled.h4`
  color: white;
  font-size: 15px;
  font-weight: 2;
  
`

const SocialsText = styled.h4`
  
`;

const SocialsIcons = styled.div`
  
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialsContainer = styled.div `
    display: flex;
    align-items: center;

`

   export {
     FooterContainer,
     HeaderContainerLeft1,
     HeaderContainerLeft2,
     HeaderContainerRight1,
     HeaderContainerRight2,
     LogoFooter,
     SocialsText,
     SocialsIcons,
     TextBox,
     SocialsContainer,
   };