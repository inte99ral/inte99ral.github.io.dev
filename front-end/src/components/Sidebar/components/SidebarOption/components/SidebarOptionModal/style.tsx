// -- API & Library
import Styled from 'styled-components';

export const Styled_SidebarOptionModalBackground = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;

  height: 100vh;
  width: 100vw;

  display:flex;
  justify-content: center;
  align-items: center;
`;

export const Styled_SidebarOptionModal = Styled.div`
  height: 20rem;
  width: 20rem;

  background-color: var(--color-main);
`;
