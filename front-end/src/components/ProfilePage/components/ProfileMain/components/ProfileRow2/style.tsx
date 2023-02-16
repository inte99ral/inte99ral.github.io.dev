// API & Library
import Styled from 'styled-components';

// Assets
import character from './assets/images/character.png';

export const Styled_ProfileRow2 = Styled.div`
  position: relative;
  height: 20rem;
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;

  border-radius: 10rem;
  background-color: white;
`;

export const Styled_ProfileRow1Container = Styled.div`
  height: 100%;
  width: 100%;



  /* border-radius: 9rem; */
  /* background-color: red; */
`;

export const Styled_ProfileRow1ContainerPicture = Styled.div`
  height: 18rem;
  width: 18rem;
  min-height: 18rem;
  min-width: 18rem;

  border-radius: 9rem;
  background-image: url(${character});
  background-repeat: no-repeat;
  background-size: cover;
`;
