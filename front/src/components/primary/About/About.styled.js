import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
  width: 100%;
  height: 500px;
`;

const AboutTitle = styled.h2`
  display: flex;
  color: black;
  border-bottom: 2px solid #09b3ff;
`;

const AboutDescription = styled.h4 `
    display: flex;
    color: black;
    padding: 50px;
    width: 900px
`


export {AboutContainer, AboutDescription, AboutTitle}
