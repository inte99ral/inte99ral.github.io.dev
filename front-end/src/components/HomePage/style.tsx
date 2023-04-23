// -- API & Library
import Styled from 'styled-components';

// -- Assets
import Architect from './assets/architect.png';

export const Styled_HomePage = Styled.div`
  min-height: 100vh;
  width: 100%;
  flex-grow: 1;
  flex-shrink: 0;
  padding-left: 3.25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--color-sub);
`;

export const Styled_HomePageSign = Styled.div`
  margin-bottom: 2rem;
  height: 16rem;
  width: 16rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* border: 1px solid red; */
  /* box-shadow: inset 0 2px 2px var(--color-main); */
  border-radius: 50%;
`;

export const Styled_HomePageSignIcon = Styled.div`
  margin-bottom: 1rem;
  height: 10rem;
  width: 10rem;

  background-image: url(${Architect});
  background-repeat: no-repeat;
  background-size: cover;
`;
