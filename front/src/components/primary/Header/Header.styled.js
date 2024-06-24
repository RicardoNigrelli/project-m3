import styled from "styled-components"

const HeaderStyled = styled.div`
    display: flex;
    background-color: #083D77;
    width: 100%;
    height: 668px;
    border-bottom: 4px solid white
`
const LogoImage = styled.img`
  width: 280px;
  height: 280px;
  padding: 0px;
  margin: 0px;
  transform: translate(50px, 50px);
`;

const Title = styled.h1`
  color: white;
  padding: 0 4rem 0rem;
  margin: 0rem;
  transform: translate(0px, 50px);
  font-size: 3.5vw;
  
`;

const Title2 = styled(Title)`
  transform: translate(0px, 20px);
`;

const Title3 = styled(Title)`
  transform: translate(0px, -10px);
`;

const Title4 = styled(Title)`
color: white;
font-size: 40px;
`;

const Title5 = styled(Title)`
font-size: 40px;
padding-bottom: 6rem;
color: white;;
`;

const Underline = styled.span`
  display: inline-block;
  border-bottom: 5px solid white;
`;

const BoxHeader = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 280px;
height: 240px;
background-color: white;
border-radius: 9px;
`

const Question1 = styled.h3`
color: black;
font-weight: 2;
text-align: center;
margin-bottom: 10px;
`
const Question2 = styled.h3`
color: black;
font-weight: 2;
text-align: center;
margin-bottom: 10px;
margin-top: 30px;
`
const ButtonAuth = styled.button`
color: white;
font-weight: bold;
background-color: #09B3FF;
width: 80%;
height: 15%;
border-color: #09B3FF;
border-radius: 20px;
`

const HeaderContainerLeft = styled.div`
width:50%;
`

const HeaderContainerRight = styled.div`
width:50%;
display: flex;
flex-direction: column;
justify-content: center;
    align-items: center;
`
export {HeaderStyled, LogoImage, Title, Title2, Title3, Title4, Title5, Underline, BoxHeader, HeaderContainerLeft, HeaderContainerRight, Question1, Question2, ButtonAuth}