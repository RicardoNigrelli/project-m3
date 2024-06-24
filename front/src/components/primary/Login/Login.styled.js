import styled from "styled-components";

const LogoTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 40px;
`;

const InputLogo = styled.img`
  margin-left: 155px;
  width: 50px;
  height: 50px;
  border-radius: 10%;
`;

const InputTitle = styled.h2`
  color: white;
  font-weight: bold;
  margin-left: 130px;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0155a7;
  width: 100%;
  height: 100%;
  padding: 100px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 400px;
  height: 100%;
  border: 2px solid #09b3ff;
  border-radius: 9px;
  padding: 20px;
`;

const InputLabel = styled.label`
  color: white;
`;

const Input = styled.input`
  background-color: #dfe2e1;
  width: 350px;
  height: 40px;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
`;

const Button = styled.button`
  background-color: #083d77;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: red;
`;

export {
  Input,
  InputLabel,
  Form,
  Button,
  LoginContainer,
  InputLogo,
  LogoTitleContainer,
  InputTitle,
  ErrorMessage,
};

