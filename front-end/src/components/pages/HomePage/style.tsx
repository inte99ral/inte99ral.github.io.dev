// API & Library
import styled from 'styled-components';

// Asset
import test from 'assets/images/test.png';

export const StyledPage = styled.div`
  height: 100vh;
  width: 100vw;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${test});
  background-repeat: no-repeat;
  background-size: cover;
`;
