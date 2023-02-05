// API & Library
import Styled from 'styled-components';

// Assets
import MindBlow from './assets/images/MindBlow.jpg';

export const Styled_ErrorPage = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--color-main);
`;

export const Styled_ErrorPic = Styled.div`
  height: 20rem;
  width: 20rem;

  background-image: url(${MindBlow});
`;
