// -- API & Library
import React from 'react';

// -- Styles
import { Styled_ProfileMain } from './style';

// -- Components
import { ProfileMainTitle } from './components/ProfileMainTitle';
import { ProfileMainContent } from './components/ProfileMainContent';
import { ProfileRow1 } from './components/ProfileRow1';

export const ProfileMain = () => {
  // -- Return
  return (
    <Styled_ProfileMain className="profile-main">
      <ProfileMainTitle></ProfileMainTitle>
      <ProfileMainContent></ProfileMainContent>
      <ProfileRow1 />
    </Styled_ProfileMain>
  );
};
