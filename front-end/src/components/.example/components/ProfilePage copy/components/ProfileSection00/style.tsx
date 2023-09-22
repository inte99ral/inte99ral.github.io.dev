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

  & * {
    color: white;
  }
`;

export const Styled_ProfileSectionLineBox00 = Styled.div`
  position: absolute;
  right: 50%;
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2000;
  overflow: none;
  white-space: nowrap;

  /* background-color: red; */
`;

export const Styled_ProfileSectionCircle = Styled.div`
  position: absolute;
  top: 10vh;
  right: 0vw;
  height: 60vw;
  width: 60vw;
  border-radius: 50%;

  background: linear-gradient(150deg, #6aa5e3, #6866e9);
`;

export const Styled_ProfileSectionLine00 = Styled.h1`
`;

export const Styled_ProfileSectionLine01 = Styled.h1`
margin-left: 1rem;
  padding: 2rem 1rem 2rem 0;
  display: flex;
  align-items: center;
`;

export const Styled_ProfileSectionLine02 = Styled.h1`
  margin-left: calc(var(--size-font-lg) * 5);
`;
