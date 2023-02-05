// API & Library
import React from 'react';

// Styles
import { Styled_ProfileBanner, Styled_ProfileBannerPhoto } from './style';

export const ProfileBanner = () => {
  return (
    <Styled_ProfileBanner className="profile-banner outer">
      <Styled_ProfileBannerPhoto></Styled_ProfileBannerPhoto>
      <div>프로필이란말이다</div>
    </Styled_ProfileBanner>
  );
};
