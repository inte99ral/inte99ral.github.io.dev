// -- API & Library
import Styled from 'styled-components';

export const Styled_ProfileSection = Styled.div`
  min-height: 100vh;
  width: 120%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(150deg, #6aa5e3, #6866e9);

  & * {
    color: white;
  }
`;

export const Styled_ProfileSectionLineBox = Styled.div`
  height: 80vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* background-color: red; */
  overflow: hidden;
`;

export const Styled_ProfileSectionLine01 = Styled.h1`
`;

export const Styled_ProfileSectionLine02 = Styled.h1`
margin-left: 1rem;
  padding: 2rem 1rem 2rem 0;
  display: flex;
  align-items: center;
`;

export const Styled_ProfileSectionLine03 = Styled.h1`
  margin-left: calc(var(--size-font-lg) * 5);
`;
