// API & Library
import React from 'react';

// Styles
import { Styled_Page, Styled_Profile_Background } from './style';

// Components
import { ProfileBanner } from './ProfileBanner';
import { ProfileMain } from './ProfileMain';

export const ProfilePage = () => {
  return (
    <Styled_Page className="profile-page">
      <ProfileBanner />
      <ProfileMain />
      {/* <Styled_Profile_Background className="profile-page-background outer">
        <ProfileMain />
      </Styled_Profile_Background> */}
    </Styled_Page>
  );
};
