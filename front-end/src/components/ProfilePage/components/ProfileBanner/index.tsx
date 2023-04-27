// -- API & Library
import React from 'react';

// -- Styles
import {
  Styled_ProfileBanner,
  Styled_ProfileBannerPhoto,
  Styled_ProfileBannerScreen,
} from './style';

// -- Components

export const ProfileBanner = () => {
  // -- Return
  return (
    <Styled_ProfileBanner className="profile-banner">
      <Styled_ProfileBannerPhoto></Styled_ProfileBannerPhoto>
      <Styled_ProfileBannerScreen></Styled_ProfileBannerScreen>
    </Styled_ProfileBanner>
  );
};
