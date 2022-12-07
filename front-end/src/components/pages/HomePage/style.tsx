// API & Library
import styled from 'styled-components';

// Asset
import test from 'asset/image/test.png';

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

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000000;
    background-clip: padding-box;
    border-radius: 100px;

    border: 2px solid transparent;
  }
`;
