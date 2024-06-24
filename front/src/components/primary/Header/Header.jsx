import { useSelector } from "react-redux";
import {
  BoxHeader,
  ButtonAuth,
  HeaderContainerLeft,
  HeaderContainerRight,
  HeaderStyled,
  LogoImage,
  Question1,
  Question2,
  Title,
  Title2,
  Title3,
  Title4,
  Title5,
  Underline,
} from "./Header.styled";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const id = useSelector((state) => state.idReducer.userId);
  const isLoggedIn = id > 0;
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <HeaderContainerLeft>
        <LogoImage
          src="./src/assets/HenryLogo (2).png"
          alt="Logo Henry"
          className="header-logo"
        ></LogoImage>
        <Title> Impulsa tu carrera</Title>
        <Title2>laboral en tan solo</Title2>
        <Title3>
          {" "}
          <Underline>3 meses.</Underline>{" "}
        </Title3>
      </HeaderContainerLeft>

      <HeaderContainerRight>
        <Title4>Estudia Inglés</Title4>
        <Title5>
          {" "}
          <Underline>100% Online</Underline>{" "}
        </Title5>
        <BoxHeader>
          {!isLoggedIn && (
            <>
              <Question1>
                <strong>¿Primera vez</strong> por aquí?{" "}
              </Question1>
              <ButtonAuth onClick={() => navigate("/register")}>
                ¡Registrate!
              </ButtonAuth>
              <Question2>
                ¿Aún no reservas tu <strong>clase personalizada</strong>?{" "}
              </Question2>
              <ButtonAuth onClick={() => navigate("/login")}>
                ¡Inicia sesión!
              </ButtonAuth>
            </>
          )}
          {isLoggedIn && (
            <>
              <Question1>
                ¡Reserva tu <strong>clase personalizada</strong>!{" "}
              </Question1>
              <ButtonAuth onClick={() => navigate("/appointments")}>
                ¡Agenda!
              </ButtonAuth>
            </>
          )}
        </BoxHeader>
      </HeaderContainerRight>
    </HeaderStyled>
  );
}
