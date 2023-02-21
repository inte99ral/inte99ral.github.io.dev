// -- API & Library
import Styled from 'styled-components';

export const Styled_ProfileBanner = Styled.div`
  width: 100%;
  height: 20rem;

  flex-grow: 0;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #44546A;
`;

export const Styled_ProfileBannerPhoto = Styled.div`
  height: 12rem;
  width: 12rem;
  margin: 1rem;

  overflow: hidden;
  border-radius: 50%;
  border: 0.5rem solid #e4e5e7;

  background-color: #ffffff;
`;

export const Styled_ProfileBannerTitle = Styled.div`
  font-family: CopperplateGothicBoldRegular;
  font-size: 1.5rem;
  color: #e4e5e7;
`;

export const Styled_ProfileBannerSubtitle = Styled.div`
  font-family: CopperplateGothicBoldRegular;
  font-size: 1rem;
  color: #333F50;
`;
