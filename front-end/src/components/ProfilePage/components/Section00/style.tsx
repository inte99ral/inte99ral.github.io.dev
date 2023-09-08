// -- API & Library
import Styled from 'styled-components';

export const Styled_Section = Styled.div`
  min-height: 100vh;
  width: 120%;
  padding-left: 12%;

  display: flex;
  // justify-content: center;
  align-items: center;

  // background: var(--color-sub);
  background: red;
`;

export const Styled_SectionContent = Styled.div`
  width: clamp(19.2rem,48vw,48rem);
`;

export const Styled_SectionContentTextFX = Styled.div`
  position: relative;

  & h3 {
    color: transparent;
    -webkit-text-stroke: .7px var(--color-reverse);
  }
`;
