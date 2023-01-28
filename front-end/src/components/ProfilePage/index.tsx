// API & Library
import React from 'react';

// Styles
import { Styled_ProfilePage } from './style';

// Components
import { ProfileBanner } from './components/ProfileBanner';
import { ProfileMain } from './components/ProfileMain';

export const ProfilePage = () => {
  return (
    <Styled_ProfilePage className="profile-page">
      <ProfileBanner />
      <ProfileMain />
    </Styled_ProfilePage>
  );
};
