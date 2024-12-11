// # src/component/HelloPage/HelloPage.tsx
// ## API & Library ==================================================

import Styled from 'styled-components';

// ## Asset ==========================================================
// ### Image

import img from './asset/image/error.png';

// ## Default ========================================================
// ### Variable
// ### Animation

// ## Style ==========================================================

export const Styled_Example = Styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--color-main);
  box-shadow: 4px 4px 10px -1px rgba(0, 0, 0, 0.25), -4px -4px 10px -1px rgba(255, 255, 255, 0.25);
`;

export const Styled_ExampleTable = Styled.table`
  border-collapse: collapse;

  & * {
    border: 1px solid black;
    padding: 14px;
  } 
`;

export const Styled_ExampleCard = Styled.div<{ isActive: boolean }>`
  background: ${({ isActive }) => (isActive ? 'red' : img)};
`;
