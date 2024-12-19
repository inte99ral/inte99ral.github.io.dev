// # src/component/Home/style.tsx

import Styled from 'styled-components';

export const Styled_Home = Styled.div`
  width: 100vw;
  height: 100vh;
  padding: 14px;

  display: flex;
  align-items: top;

  overflow: auto;

  background-color: var(--color-sub);
`;

export const Styled_HomeCard = Styled.div`
  border-radius: 14px;
  padding: 28px;
  margin: 14px;
  background-color: var(--color-main);

  box-shadow:
    4px 4px 10px -1px rgba(0, 0, 0, 0.25),
    -4px -4px 10px -1px rgba(255, 255, 255, 0.25); 
`;
