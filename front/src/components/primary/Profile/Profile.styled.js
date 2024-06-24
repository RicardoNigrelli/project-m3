import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  gap: 100px;
  background-color: #0155a7;
  width: 100%;
  height: 1500px;
`;

const ProfileContainerLeft = styled.div`
width: 100%;
height: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
const ProfileContainerRight = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProfileCard = styled.div`
  display: flex;
  width: 600px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
`;
const ProfileCardLeft = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border: 1px solid #09b3ff;
  border-radius: 50%;
  object-fit: cover;
`;

const InputDiv = styled.input`
  display: flex;
  width: 200px;
  height: 25px;
  border: 1px solid #09b3ff;

`;

const ProfileCardRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-left: 1px solid #09b3ff;
`;

const ProfileName = styled.h3`
    display: flex;
    color: black;
    `

const ProfileInfo = styled.h5`
    display: flex;
    flex-direction: column;
    color: black;
    `

const ProfileChangePictureButton = styled.button`
  color: white;
  font-weight: bold;
  background-color: #09b3ff;
  width: 80px;
  height: 20px;
  border-color: #09b3ff;
  border-radius: 20px;
  font-size: 10px;
  margin-top: 10px;
`;

const Underline = styled.span`
  display: inline-block;
  border-bottom: 3px solid #09b3ff;
`;

const PropertyDiv = styled.div`
  display: flex;
  width: 600px;
  height: 30px;
  border-bottom: 1px solid #09b3ff;
  border-left: 1px solid #09b3ff;
`;
const ButtonPropertyDiv = styled.div`
  display: flex;
  width: 100px;
  height: 30px;
  border-bottom: 1px solid #09b3ff;
  border-left: 1px solid #09b3ff;
`;
const UserAppointmentsTitle = styled.h3`
color: black;
text-align:center;
margin-bottom: 10px;
background-color: white;
border-radius: 4px;

`;
const UserAppointments = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 10%;
`;

const UserAppointmentsList = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  border-bottom: 1px solid #09b3ff;
  
`;
const UserAppointmentsListContainer = styled.div`
  color: black;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 20px;
`;


const UserAppointmentsListButton = styled.button`
  color: white;
  font-weight: bold;
  background-color: ${({ status }) => status === "CANCELED" ? "red" : "#09b3ff"};
  width: 80px;
  height: 20px;
  border-color: ${({ status }) => (status === "CANCELED" ? "red" : "#09b3ff")};
  border-radius: 20px;
  font-size: 10px;
  margin-right: 10px;
`;

const YouMustLogin = styled.h1`
color: white;
`

const NavigateDiv = styled.div`
  width: 800px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #09b3ff;
  border-top: 1px solid #09b3ff;
`;

export {
  ProfileContainer,
  ProfileCard,
  UserAppointments,
  ProfileCardLeft,
  ProfileCardRight,
  ProfileImg,
  ProfileInfo,
  ProfileName,
  UserAppointmentsTitle,
  UserAppointmentsList,
  UserAppointmentsListContainer,
  Underline,
  UserAppointmentsListButton,
  ProfileChangePictureButton,
  YouMustLogin,
  PropertyDiv,
  NavigateDiv,
  ButtonPropertyDiv,
  ProfileContainerLeft,
  ProfileContainerRight,
  InputDiv,
};
