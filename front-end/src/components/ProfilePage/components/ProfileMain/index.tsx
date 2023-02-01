// API & Library
import React from 'react';

// Styles
import { Styled_ProfileMain } from './style';

// Components
import { ProfileRow1 } from './components/ProfileRow1';
import { ProfileRow2 } from './components/ProfileRow2';

export const ProfileMain = () => {
  return (
    <Styled_ProfileMain className="profile-main">
      <ProfileRow1 />
      <ProfileRow2 />
    </Styled_ProfileMain>
  );
};
