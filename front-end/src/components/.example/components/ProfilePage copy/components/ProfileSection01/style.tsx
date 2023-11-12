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

  background: linear-gradient(150deg, #fed1c7, #fe8dc6);

  & * {
    color: white;
  }
`;
