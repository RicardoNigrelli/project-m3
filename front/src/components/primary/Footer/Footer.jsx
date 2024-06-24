import {
  FooterContainer,
  HeaderContainerLeft1,
  HeaderContainerLeft2,
  HeaderContainerRight1,
  HeaderContainerRight2,
  LogoFooter,
  SocialsContainer,
  SocialsIcons,
  SocialsText,
  TextBox,
} from "./Footer.styled";

export default function Footer() {
  return (
    <FooterContainer>
      <HeaderContainerLeft1>
        <LogoFooter>
          <img src="./src/assets/HenryLogo (2).png" alt="logo" />
        </LogoFooter>
      </HeaderContainerLeft1>

      <HeaderContainerLeft2>
        <TextBox>
          <strong>Contactanos</strong>

          <ul>
            <br></br>
            <li>E: info@henryenglish.edu.ar</li>
            <li>P: +92 151 5468798</li>
            <li>A: 1235 Evergrenn St</li>
            <li>Cancún, Mexico</li>
          </ul>
        </TextBox>
      </HeaderContainerLeft2>

      <HeaderContainerRight1>
        <TextBox>
          <strong>Links Útiles</strong>

          <ul>
            <br></br>
            <li>Inicio</li>
            <li>¡Impulsa tu Carrera!</li>
            <li>Recursos Útiles</li>
            <li>Acerca de Nosotros</li>
          </ul>
        </TextBox>
      </HeaderContainerRight1>

      <HeaderContainerRight2>
        <SocialsContainer>
          <SocialsText>WhatsApp</SocialsText>
          <SocialsIcons>
            <img src="./src/assets/WhatsApp.png" alt="logo" />
          </SocialsIcons>
        </SocialsContainer>
        <SocialsContainer>
          <SocialsText>Facebook</SocialsText>
          <SocialsIcons>
            <img src="./src/assets/Facebook.png" alt="logo" />
          </SocialsIcons>
        </SocialsContainer>
        <SocialsContainer>
          <SocialsText>Instagram</SocialsText>
          <SocialsIcons>
            <img src="./src/assets/Instagram.png" alt="logo" />
          </SocialsIcons>
        </SocialsContainer>
      </HeaderContainerRight2>
    </FooterContainer>
  );
}
