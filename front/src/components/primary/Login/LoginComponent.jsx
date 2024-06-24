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
  LoginContainer,
} from "./Login.styled.js";
import { postUserLogin } from "../../../helpers/index.js";
import { validateLoginDtos } from "../../../helpers/validate.js";
import { useDispatch } from "react-redux";
import { addId } from "../../../redux/idSlices.js";
import { useNavigate } from "react-router-dom";
import { addAppointments } from "../../../redux/appointmentSlices.js";
import { addUser } from "../../../redux/userSlices.js";

export default function LoginComponent() {
  const [userDtos, setUserDtos] = useState({
    username: "",
    password: "",
  });

  const [errorUserDtos, setErrorUserDtos] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigation = useNavigate();

  function handleChange(event) {
    const { name, value, type } = event.target;
    const newValue = type === "number" ? parseInt(value, 10) : value;
    const infoActual = { ...userDtos, [name]: newValue };
    setUserDtos(infoActual);
    const objetoErrores = validateLoginDtos(infoActual);
    const erroresDeUsuario = { ...objetoErrores };
    setErrorUserDtos(erroresDeUsuario);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await postUserLogin(userDtos);
      alert(response.message);
      console.log (response)
      dispatch(addId(response.user.id))
      dispatch(addAppointments(response.user.appointments))
      dispatch(addUser(response.user))
      navigation("/profile");
      console.log("Usuario Logueado");
      

    } catch (error) {
      console.error("Error al loguear usuario:", error);
      const resError = error.response?.data;
      if (resError && resError.message) {
        alert(resError.message);
      } else {
        alert("Error al loguear usuario, intente nuevamente.");
      }
    }
  }

  const hasErrors = Object.values(errorUserDtos).some((error) => error !== "");
  const hasEmptyValies = Object.values(userDtos).some((value) => value === "");
  const isSubmitDisabled = hasErrors || hasEmptyValies;

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <LogoTitleContainer>
          <InputLogo
            src="./src/assets/HenryLogo (2).png"
            alt="Logo Henry"
            className="header-logo"
          />
          <InputTitle>
            <strong>Acceso</strong>
          </InputTitle>
        </LogoTitleContainer>

        <InputLabel htmlFor="username">Nombre de Usuario:</InputLabel>
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="andrea"
          onChange={handleChange}
        />
        <ErrorMessage>{errorUserDtos.username}</ErrorMessage>

        <InputLabel htmlFor="password">Contraseña:</InputLabel>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="*****"
          onChange={handleChange}
        />
        <ErrorMessage>{errorUserDtos.password}</ErrorMessage>

        <Button type="submit" disabled={isSubmitDisabled}>
          Acceder
        </Button>
      </Form>
    </LoginContainer>
  );
}
