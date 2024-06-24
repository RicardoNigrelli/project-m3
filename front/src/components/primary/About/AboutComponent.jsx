import { AboutContainer, AboutDescription, AboutTitle } from "./About.styled";

export default function AboutComponent() {
  return (
    <AboutContainer>
      <AboutTitle>Acerca de Nosotros</AboutTitle>
      <AboutDescription>
        <div>
          <h1>Bienvenido al Henry English Institute</h1>
          <p>
            <span>Bienvenido al Henry English Institute</span>
            , donde transformamos vidas y carreras en tiempo récord.
          </p>
          <p>
            Nuestro lema, -Impulsa tu carrera laboral en tan solo 3 meses-,
            refleja nuestra misión de proporcionar una educación de inglés de
            alta calidad y efectiva, diseñada específicamente para profesionales
            que desean avanzar rápidamente en sus carreras.
          </p>
          <p>
            En Henry English Institute, comprendemos que el dominio del inglés
            es una herramienta esencial en el competitivo mercado laboral
            global, y estamos comprometidos a brindar la mejor capacitación
            posible para ayudarte a alcanzar tus metas.
          </p>
        </div>
      </AboutDescription>
    </AboutContainer>
  );
}
