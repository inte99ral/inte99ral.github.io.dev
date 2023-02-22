// -- API & Library
import React from 'react';

// -- Styles
import { Styled_ProfileBanner } from './style';

// -- Components
import { ProfileBannerPhoto } from './components/ProfileBannerPhoto';
import { ProfileBannerTitle } from './components/ProfileBannerTitle';
import { ProfileBannerSubtitle } from './components/ProfileBannerSubtitle';

export const ProfileBanner = () => {
  // -- Return
  return (
    <Styled_ProfileBanner className="profile-banner outer">
      <ProfileBannerPhoto />
      <ProfileBannerTitle />
      <ProfileBannerSubtitle />
    </Styled_ProfileBanner>
  );
};
