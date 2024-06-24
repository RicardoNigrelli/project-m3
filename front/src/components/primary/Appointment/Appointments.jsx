import { useState } from "react";
import { postAppointment } from "../../../helpers";
import { validateAppointmentsDtos } from "../../../helpers/validate";
import { ErrorMessage } from "../Login/Login.styled";
import { AppointmentContainer, Button, Form, Input, InputLabel, InputLogo, InputTitle, LogoTitleContainer } from "./Appointment.styled";
import { useDispatch, useSelector } from "react-redux";
import { YouMustLogin } from "../Profile/Profile.styled";
import { useNavigate } from "react-router-dom";
import { addAppointment } from "../../../redux/appointmentSlices";

export default function AppointmentsComponent() {
  const user = useSelector((state) => state.idReducer.userId);

  const dispatch = useDispatch();

  const [appointmentDtos, setAppointmentDtos] = useState({
    date: "",
    time: "",
    description: "",
  });

  const [errorAppointmentDtos, setErrorAppointmentDtos] = useState({
    date: "",
    time: "",
    description: "",
  });
  const navigation = useNavigate();

  function handleChange(e) {
    const { name, value, type } = e.target;
    const newValue = type === "number" ? parseInt(value, 10) : value;
    const infoActual = { ...appointmentDtos, [name]: newValue };
    setAppointmentDtos(infoActual);
    const errorsAppointments = validateAppointmentsDtos(infoActual);
    const allErrorsAppointments = { ...errorsAppointments };
    setErrorAppointmentDtos(allErrorsAppointments);
  }

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Datos del appointment a enviar:", appointmentDtos);
  if (Object.keys(errorAppointmentDtos).length === 0) {
    postAppointment(appointmentDtos, user)
      .then((response) => {
        dispatch(addAppointment(response.newAppointment));
        setAppointmentDtos({
          date: "",
          time: "",
          description: "",
        });
        navigation("/profile");
        alert("¡Clase agendada correctamente!");
      })
      .catch((error) => {
        console.error("Error al agendar la clase:", error);
        const resError = error.response.data;
        alert(resError.message);
        throw error;
      });
  } else {
    alert("Revisa, hay errores");
  }
};

  const hasErrors = Object.values(errorAppointmentDtos).some(
    (error) => error !== ""
  );
  const hasEmptyValies = Object.values(appointmentDtos).some(
    (value) => value === ""
  );
  const isSubmitDisabled = hasErrors || hasEmptyValies;

  const isLoggedIn = user > 0;

  return (
    <AppointmentContainer>
      {isLoggedIn && (
        <Form onSubmit={handleSubmit}>
          <LogoTitleContainer>
            <InputLogo
              src="./src/assets/HenryLogo (2).png"
              alt="Logo Henry"
              className="header-logo"
            />
            <InputTitle>
              <strong>¡Agenda tu clase!</strong>
            </InputTitle>
          </LogoTitleContainer>
          <InputLabel>
            Fecha
            <Input
              type="date"
              id="date"
              name="date"
              value={appointmentDtos.date}
              placeholder="YYYY-MM-DD"
              onChange={handleChange}
            />
          </InputLabel>
          <ErrorMessage>{errorAppointmentDtos.date}</ErrorMessage>

          <InputLabel>
            Horario
            <Input
              type="time"
              id="time"
              name="time"
              value={appointmentDtos.time}
              placeholder="15:30"
              onChange={handleChange}
            />
          </InputLabel>
          <ErrorMessage>{errorAppointmentDtos.time}</ErrorMessage>

          <InputLabel>
            Descripcion (¿Que temáticas te gustaría profundizar?)
            <Input
              type="text"
              id="description"
              name="description"
              value={appointmentDtos.description}
              placeholder="Clase para alcanzar el B1"
              onChange={handleChange}
            />
          </InputLabel>
          <ErrorMessage>{errorAppointmentDtos.description}</ErrorMessage>

          <Button type="submit" disabled={isSubmitDisabled}>
            Agendar
          </Button>
        </Form>
      )}
      {!isLoggedIn && (
        <YouMustLogin>¡Debes loguearte para ver esta página!</YouMustLogin>
      )}
    </AppointmentContainer>
  );
}




