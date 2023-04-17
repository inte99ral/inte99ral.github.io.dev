// -- API & Library
import Styled from 'styled-components';

export const Styled_SidebarOptionModalSelector = Styled.div`
  height: 30px;
  width: 60px;

  border-radius: 160px;
  background-color: #222;
  transition: 0.5s;
  box-shadow: 
    inset 0 2px 6px rgba(0,0,0,0.1),
    inset 0 2px 2px rgba(0,0,0,0.1),
    inset 0 -2px 2px rgba(0,0,0,0.1);
`;

export const Styled_SidebarOptionModalSelectorIndicator = Styled.div`
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;

  border-radius: 50%;
  background: linear-gradient(to bottom, #444, #222);
  transform: scale(0.9);
  box-shadow: 
    0 8px 40px rgba(0, 0, 0, 0.5),
    inset 0 2px 2px rgba(255, 255, 255, 0.2),
    inset 0 -2px 2px rgba(255, 255, 255, 0.2);
  transition: 0.5s;
`;
