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

  overflow: hidden;

  background-color: white;
`;

export const Styled_ProfileMainPhoto = Styled.div`
  height: 10rem;
  width: 10rem;

  border-radius: 50%;

  background-image: url(${Character});
  background-repeat: no-repeat;
  background-size: cover;
`;
