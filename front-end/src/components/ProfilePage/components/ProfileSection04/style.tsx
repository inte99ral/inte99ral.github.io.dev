// -- API & Library
import Styled from 'styled-components';

export const Styled_ProfileSection04 = Styled.div`
  min-height: 100vh;
  width: 120%;
  background: linear-gradient(-30deg, #b576f6, #9a4fe9);

  &::before, &::after {
    content: '';
    position: absolute;
    top: -5%;
    right: -15%;
    height: 150px;
    width: 150px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 100%;
  }
`;
