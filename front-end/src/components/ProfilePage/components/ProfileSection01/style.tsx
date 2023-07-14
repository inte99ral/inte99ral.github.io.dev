// -- API & Library
import Styled from 'styled-components';

// -- Assets
import BG from './assets/image/BG.jpg';

export const Styled_ProfileSection01 = Styled.div`
  min-height: 100vh;
  width: 120%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(-30deg, #6aa5e3, #6866e9);
`;

export const Styled_ProfileSectionLine = Styled.div`
  height: 80vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: red;
  overflow: hidden;
`;

export const Styled_ProfileSectionHeadline = Styled.div`
  height: 80vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: red;
  overflow: hidden;
`;

export const Styled_ProfileSectionTitle = Styled.div`
  height: 4rem;
  padding: 1rem;

  display: flex;
  align-items: center;

  background: red;
`;
