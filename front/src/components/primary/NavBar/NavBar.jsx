import { addId } from "../../../redux/idSlices";
import { NavBarStyled, StyledLink, TextWithStyles } from "./NavBar.styled";
import { useDispatch, useSelector } from "react-redux";

export default function NavBar() {
  const userId = useSelector((state) => state.idReducer.userId);
  const isLoggedIn = userId > 0;
  const dispatch = useDispatch();

    const handleLogout = () => {
      dispatch(addId(0)); 
      alert("¡Has cerrado sesión exitosamente!");
    };

  return (
    <NavBarStyled>
      <StyledLink to="/">
        <TextWithStyles>Inicio</TextWithStyles>
      </StyledLink>
      {!isLoggedIn && (
        <StyledLink to="/login">
          <TextWithStyles>Iniciar Sesión</TextWithStyles>
        </StyledLink>
      )}

      {!isLoggedIn && (
        <StyledLink to="/register">
          <TextWithStyles>Registrarse</TextWithStyles>
        </StyledLink>
      )}

      <StyledLink to="/about">
        <TextWithStyles>Acerca de Nosotros</TextWithStyles>
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/appointments">
          <TextWithStyles>¡Agenda tu clase!</TextWithStyles>
        </StyledLink>
      )}
      {isLoggedIn && (
        <StyledLink to="/profile">
          <TextWithStyles>Perfil</TextWithStyles>
        </StyledLink>
      )}

      {isLoggedIn && (
        <StyledLink onClick={handleLogout}>
          <TextWithStyles>Cerrar Sesión</TextWithStyles>
        </StyledLink>
      )}
    </NavBarStyled>
  );
}

//USESELECTOR PARA PROFILE y AGENDA TU CLASE
