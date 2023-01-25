// API & Library
import Styled from 'styled-components';

// Assets
import Character from 'assets/images/character.png';

export const Styled_ProfileMain = Styled.div`
  position: relative;

  margin-top: 1rem;
  padding: 1rem;
  width: calc(100% - 8rem);

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  background-color: white;

  transition: 0.2s;

  &:hover {
    scale: 1.01;
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
    background-color: #a91101;
  }
`;

export const Styled_ProfileMainPhoto = Styled.div`
  height: 10rem;
  width: 10rem;

  border-radius: 50%;

  background-image: url(${Character});
  background-repeat: no-repeat;
  background-size: cover;
`;
