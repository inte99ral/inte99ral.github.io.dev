// # src/component/HelloPage/HelloPage.tsx
// ## API & Library ==================================================

import Styled from 'styled-components';

// ## Asset ==========================================================
// ### Image

// ## Default ========================================================
// ### Variable
// ### Animation

// ## Style ==========================================================

export const Styled_Portfolio = Styled.div`
  width: 100vw;
  height: 100vh;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;

  background-color: var(--color-main);
`;

export const Styled_PortfolioTable = Styled.table`
  border-collapse: collapse;

  & * {
    border: 1px solid black;
    padding: 14px;
  }
`;
