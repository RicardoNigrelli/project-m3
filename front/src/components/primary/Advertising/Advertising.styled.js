import styled from "styled-components";

const AdvertisingContainer = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  height: 500px;  
`;

const AdvertisingContainerLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #083d77;
  margin-left: 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const AdvertisingContainerRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #083d77;
  margin-right: 20px;
  border-top-right-radius: 10px; 
  border-bottom-right-radius: 10px; 
`;

const Question = styled.h3`
  color: white;
  font-weight: 4;
  text-align: center;
  margin-bottom: 100px;
  font-size: 35px;
`;

const ButtonAuth2 = styled.button`
  color: white;
  font-weight: bold;
  background-color: #09b3ff;
  width: 60%;
  height: 15%;
  border-color: #09b3ff;
  border-radius: 20px;
  font-size: 25px;
`;

const Title1 = styled.h2`
  color: white;
  padding: 0 4rem 0rem;
  margin: 0rem;
  transform: translate(0px, 50px);
  font-size: 40px;
`;

const Title2 = styled.h2`
  font-size: 40px;
  padding: 0 4rem 0rem;
  margin: 0rem;
  transform: translate(0px, 50px);
  padding-bottom: 6rem;
  color: white;
`;

const Underline = styled.span`
  display: inline-block;
  border-bottom: 5px solid white;
`;

export {
  AdvertisingContainer,
  AdvertisingContainerLeft,
  AdvertisingContainerRight,
  ButtonAuth2,
  Title1,
  Title2,
  Underline,
  Question,
};
