// API & Library
import React from 'react';

// Styles
import {
  Styled_ProfileBanner,
  Styled_ProfileBannerPhoto,
  Styled_ProfileBannerTitle,
  Styled_ProfileBannerSubtitle,
} from './style';

export const ProfileBanner = () => {
  return (
    <Styled_ProfileBanner className="profile-banner outer">
      <Styled_ProfileBannerPhoto className="profile-banner-photo inner" />
      <Styled_ProfileBannerTitle className="profile-banner-title">
        PARK JUN HYUK
      </Styled_ProfileBannerTitle>
      <Styled_ProfileBannerSubtitle className="profile-banner-subtitle">
        UIᆞUXᆞFront-End Developer
      </Styled_ProfileBannerSubtitle>
    </Styled_ProfileBanner>
  );
};
