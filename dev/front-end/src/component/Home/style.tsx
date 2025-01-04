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
  width: 30vw;
  max-width: 30vw;
  flex-shrink: 0;
  margin: 14px;

  border-radius: 14px;
  background-color: var(--color-main);
  overflow: hidden;

  box-shadow:
    4px 4px 10px -1px rgba(0, 0, 0, 0.25),
    -4px -4px 10px -1px rgba(255, 255, 255, 0.25);

  & > div:nth-of-type(1) {
    height: 80px;
    min-height: 80px;

    color: white;
    font-size: 24px;
    font-weight: bold;

    padding: 28px;
    background-color: #353839;

  }

  & > div:nth-of-type(2) {
    height: calc(100% - 80px);
    padding: 28px;
    overflow: auto;
  }
`;
