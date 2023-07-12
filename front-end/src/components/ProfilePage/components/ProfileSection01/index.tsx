// -- API & Library
import React from 'react';

// -- Components
import { ProfileSectionPortrait } from './components/ProfileSectionPortrait';
import { ProfileSectionHeadline } from './components/ProfileSectionHeadline';

// -- Styles
import { Styled_ProfileSection01 } from './style';

export const ProfileSection01 = () => {
  // -- Return
  return (
    <Styled_ProfileSection01 className="profile-section">
      <ProfileSectionHeadline />
      <ProfileSectionPortrait />
    </Styled_ProfileSection01>
  );
};
