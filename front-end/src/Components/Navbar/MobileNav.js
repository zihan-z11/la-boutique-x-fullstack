import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 1248px) {
    display: block;
    position: absolute;
    top: 0;
    right: 4%;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 110px;
  padding: 12px 40px 24px 40px;
  background-color: black;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
  @media screen and (min-width: 1248.001px) {
    display: none;
  }
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;
