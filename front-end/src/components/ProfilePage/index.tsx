// -- API & Library
import React, { useRef, useEffect } from 'react';

// -- Styles
import { Styled_ProfilePage } from './style';

// -- Components
import { ProfileBanner } from './components/ProfileBanner';
import { ProfileMain } from './components/ProfileMain';

export const ProfilePage = () => {
  // -- Init
  const ProfilePage = useRef<HTMLDivElement>(null);

  // -- Return
  return (
    <Styled_ProfilePage className="profile-page" ref={ProfilePage}>
      <ProfileBanner />
      <ProfileMain />
    </Styled_ProfilePage>
  );
};
