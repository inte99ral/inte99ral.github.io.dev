// -- API & Library
import React from 'react';

// -- Styles
import { Styled_ProfilePage } from './style';

// -- Components
import { ProfileBanner } from './components/ProfileBanner';

export const ProfilePage = () => {
  // -- Return
  return (
    <Styled_ProfilePage className="profile-page">
      <ProfileBanner />
      {/* <ProfileTest></ProfileTest> */}
    </Styled_ProfilePage>
  );
};
