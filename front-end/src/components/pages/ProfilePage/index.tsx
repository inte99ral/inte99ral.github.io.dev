// API & Library
import React from 'react';

// Styles
import { Styled_Page } from './style';

// Components
import { ProfileBanner } from './ProfileBanner';
import { ProfileMain } from './ProfileMain';

export const ProfilePage = () => {
  return (
    <Styled_Page className="profile-page">
      <ProfileBanner />
      <ProfileMain />
    </Styled_Page>
  );
};
