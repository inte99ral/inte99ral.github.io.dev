// -- API & Library
import Styled from 'styled-components';

export const Styled_ProfileSection03 = Styled.div`
  min-height: 20vh;
  width: 120%;
  /* background: linear-gradient(-45deg, #8d42ff, #01e973); */
  background: linear-gradient(135deg, #26bbac, #bcfb69);

  &::after {
    content: '';
    position: absolute;
    top: -5%;
    right: -15%;
    height: 150px;
    width: 150px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 100%;
  }

  &::before {
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
