import { BoxCards, CardAdv, CardAdvUp, CardDescription, CardTitle, LogoCardTitle } from "./Cards.styled";

export default function Cards() {
  return (
    <BoxCards>
      <CardAdv>
        <CardAdvUp>
          <LogoCardTitle>
            <img src="./src/assets/clock.png" alt="clock" />
          </LogoCardTitle>
          <CardTitle>¡Domina el inglés a tu ritmo! </CardTitle>
        </CardAdvUp>
        <CardDescription>
          Programa tutorías personalizadas y avanza hacia la fluidez con nuestro
          equipo de expertos
        </CardDescription>
      </CardAdv>

      <CardAdv>
        <CardAdvUp>
          <LogoCardTitle>
            <img src="./src/assets/success.png" alt="success" />
          </LogoCardTitle>
          <CardTitle>Prepárate para el éxito global </CardTitle>
        </CardAdvUp>
        <CardDescription>
          Prepárate para brillar en exámenes internacionales con nuestro apoyo
          experto
        </CardDescription>
      </CardAdv>

      <CardAdv>
        <CardAdvUp>
          <LogoCardTitle>
            <img src="./src/assets/lamp.png" alt="lamp" />
          </LogoCardTitle>
          <CardTitle>¡No esperes más para brillar!</CardTitle>
        </CardAdvUp>
        <CardDescription>
          Nuestros horarios flexibles te acercan al éxito, ¡comienza tu viaje
          hoy mismo!
        </CardDescription>
      </CardAdv>
    </BoxCards>
  );
}
