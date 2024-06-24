import { Link } from "react-router-dom";
import styled from "styled-components"

const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  color: black;
  height: 50px;
`;

const StyledLink = styled(Link)`
  color: black;
  font-weight: bold;
  text-decoration: none;
  padding: 0 10px;
  font-size: 16px;
`;

const TextWithStyles = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: #083d77;
  border-left: 2px solid #09b3ff;
  border-right: 2px solid #09b3ff;
  padding: 5px 10px 5px 10px;
`

;



export { NavBarStyled, StyledLink, TextWithStyles };