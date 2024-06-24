import { AdvertisingContainer, AdvertisingContainerLeft, AdvertisingContainerRight, ButtonAuth2, Question, Title1, Title2, Underline } from "./Advertising.styled";
import { useNavigate } from "react-router-dom";
export default function Advertising() {
  const navigate = useNavigate();
  return (
    <AdvertisingContainer>
      <AdvertisingContainerLeft>
        <Title1>Estudia Inglés</Title1>
        <Title2>
          {" "}
          <Underline>100% Online</Underline>{" "}
        </Title2>
      </AdvertisingContainerLeft>

      <AdvertisingContainerRight>
        <Question>
          ¿Aún no reservas tu <strong>clase personalizada?</strong>{" "}
        </Question>
        <ButtonAuth2 onClick={() => navigate("/appointments")}>
          Impulsa tu Carrera
        </ButtonAuth2>
      </AdvertisingContainerRight>
    </AdvertisingContainer>
  );
}
