// -- API & Library
import Styled from 'styled-components';

export const Styled_ProfileSectionLabel = Styled.div`
  background-color: red;
  transform-style: preserve-3d;
  height: 2rem;
  width: 8rem;
  margin-right: 1rem;

  & span {
    position: absolute;
    top: 0;
    left: 0;
    height: 2rem;
    width: 8rem;
    line-height: 2rem;

    text-align: center;

    background-color: green;
  }
`;
