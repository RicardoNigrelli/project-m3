import { useState } from "react";
import {
  Button,
  ErrorMessage,
  Form,
  Input,
  InputLabel,
  InputLogo,
  InputTitle,
  LogoTitleContainer,
  RegisterContainer,
} from "./Register.styled";
import { postUserRegister } from "../../../helpers";
import { validateUserDtos } from "../../../helpers/validate";
import { useNavigate } from "react-router-dom";

export default function RegisterComponent() {
  const [userDtos, setUserDtos] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    repeatPassword: "",
  });

  const [errorUserDtos, setErrorUserDtos] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    repeatPassword: "",
  });

  function handleChange(event) {
    const { name, value, type } = event.target;
    const newValue = type === "number" ? parseInt(value, 10) : value;
    const updatedUserDtos = { ...userDtos, [name]: newValue };
    setUserDtos(updatedUserDtos);
    const updatedErrorUserDtos = validateUserDtos(updatedUserDtos);
    setErrorUserDtos(updatedErrorUserDtos);
  }

  const navigation = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const { repeatPassword, ...dataToSend } = userDtos;
    console.log("Datos del usuario a enviar:", dataToSend);
    console.log(repeatPassword);
    try {
      const response = await postUserRegister(dataToSend);
      console.log("Usuario creado exitosamente:", response);
      alert(response.message);
      navigation("/login");


    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      const resError = error.response.data;
      alert(resError.message);
      throw error;
    }
  }

  const hasErrors = Object.values(errorUserDtos).some((error) => error !== "");
  const hasEmptyValies = Object.values(userDtos).some((value) => value === "")
  const isSubmitDisabled = hasErrors || hasEmptyValies
  
  return (
    <RegisterContainer>
      <Form onSubmit={handleSubmit}>
        <LogoTitleContainer>
          <InputLogo
            src="./src/assets/HenryLogo (2).png"
            alt="Logo Henry"
            className="header-logo"
          />
          <InputTitle>
            <strong>Registro</strong>
          </InputTitle>
        </LogoTitleContainer>

        <InputLabel htmlFor="name">Nombre:</InputLabel>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Andrea"
          value={userDtos.name}
          onChange={handleChange}
        />
        <ErrorMessage>{errorUserDtos.name}</ErrorMessage>

        <InputLabel htmlFor="email">Email:</InputLabel>
        <Input
          type="mail"
          id="email"
          name="email"
          placeholder="andrea@mail.com"
          value={userDtos.email}
          onChange={handleChange}
        />
        <ErrorMessage>{errorUserDtos.email}</ErrorMessage>

        <InputLabel htmlFor="birthdate">Fecha de Nacimiento:</InputLabel>
        <Input
          type="date"
          id="birthdate"
          name="birthdate"
          placeholder="YYYY-MM-DD"
          value={userDtos.birthdate}
          onChange={handleChange}
        />
        <ErrorMessage>{errorUserDtos.birthdate}</ErrorMessage>

        <InputLabel htmlFor="nDni">Número de Dni:</InputLabel>
        <Input
          type="number"
          id="nDni"
          name="nDni"
          placeholder="45678989"
          value={userDtos.nDni}
          onChange={handleChange}
        />
        <ErrorMessage>{errorUserDtos.nDni}</ErrorMessage>

        <InputLabel htmlFor="username">Nombre de Usuario:</InputLabel>
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="andreauser"
          value={userDtos.username}
          onChange={handleChange}
        />
        <ErrorMessage>{errorUserDtos.username}</ErrorMessage>

        <InputLabel htmlFor="password">Contraseña:</InputLabel>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="*****"
          value={userDtos.password}
          onChange={handleChange}
        />
        <ErrorMessage>{errorUserDtos.password}</ErrorMessage>

        <InputLabel htmlFor="repeatPassword">Repita su contraseña:</InputLabel>
        <Input
          type="password"
          id="repeatPassword"
          name="repeatPassword"
          placeholder="******"
          value={userDtos.repeatPassword}
          onChange={handleChange}
        />
        <ErrorMessage>{errorUserDtos.repeatPassword}</ErrorMessage>

        <Button type="submit" disabled={isSubmitDisabled}>
          Registrar
        </Button>
      </Form>
    </RegisterContainer>
  );
}
