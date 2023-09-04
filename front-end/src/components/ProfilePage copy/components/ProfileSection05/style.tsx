// -- API & Library
import Styled from 'styled-components';

export const Styled_ProfileSection05 = Styled.div`
  min-height: 200vh;
  width: 120%;
  background: linear-gradient(-45deg, #f078c8, #e1c8fa, #506ec8);

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
