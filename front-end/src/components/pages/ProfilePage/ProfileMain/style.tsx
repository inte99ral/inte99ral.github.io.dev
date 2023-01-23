// API & Library
import Styled from 'styled-components';

export const Styled_ProfileMain = Styled.div`
  position: relative;

  margin-top: 1rem;
  padding: 1rem;
  width: 92%;

  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  background-color: white;

  transition: 0.2s;

  &:hover {
    scale: 1.02;
  }

  &::before {
    content: '';
    box-sizing: border-box;

    position: absolute;
    top: -2rem;
    left: -2rem;

    height: 4rem;
    width: 4rem;

    transform: rotate(45deg);
    background-color: #e4e5e6;
  }
`;
