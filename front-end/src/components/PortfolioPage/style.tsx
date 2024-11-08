// -- API & Library
import Styled from 'styled-components';

// -- Asset
import PortPolio from './assets/images/Portfolio.png';

// -- Init

// -- Export
export const Styled_ProfilePage = Styled.div`
  min-height: 100vh;
  width: 100%;
  flex-grow: 1;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  background-color: var(--color-sub);
`;

export const Styled_ProfileMain = Styled.a`
  width: 100%;
  aspect-ratio: 1/1.414;

  background-image: url(${PortPolio});
  background-size: 100% 100%;
`;
