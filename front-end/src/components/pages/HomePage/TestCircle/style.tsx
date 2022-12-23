// API & Library
import styled from 'styled-components';

const Styled = {
  TestCircle: styled.div`
    height: 100px;
    width: 100px;

    border-radius: 50%;

    background-color: black;

    &:hover {
      background-color: red;
    }

    &::after {
      display: inline-block;
      height: 10px;
      width: 10px;
      content: 'sd';
      background-color: blue;
    }
  `,
};

export default Styled;
