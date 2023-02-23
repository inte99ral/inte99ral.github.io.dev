// -- API & Library
import Styled from 'styled-components';

// -- Assets
import Personal from './assets/images/Personal.png';
import PersonalDJ from './assets/images/PersonalDJ.png';

// -- Interfaces & Types
interface props {
  right: number;
}

export const Styled_ProfileBannerPhoto = Styled.div`
  height: 12rem;
  width: 12rem;
  margin: 1rem;

  display: flex;
  /* justify-content: start; */

  overflow: hidden;
  border-radius: 50%;
  border: 0.5rem solid #e4e5e7;

  background-color: #ffffff;
`;

export const Styled_ProfileBannerPhoto1 = Styled.div<props>`
  right: ${({ right }: props) => right}rem;
  height: 100%;
  min-width: 100%;

  background-image: url(${Personal});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Styled_ProfileBannerPhoto2 = Styled.div<props>`
  right: ${({ right }: props) => right}rem;
  height: 100%;
  min-width: 100%;

  background-image: url(${PersonalDJ});
  background-repeat: no-repeat;
  background-size: cover;
`;
