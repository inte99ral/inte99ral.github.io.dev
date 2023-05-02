// -- API & Library
import React from 'react';

// -- Components
import { ProfileBackground3Dtest } from './components/ProfileBackground3Dtest';

// -- Styles
import { Styled_ProfileBackground } from './style';

export const ProfileBackground = () => {
  // -- Return
  return (
    <Styled_ProfileBackground className="profile-background">
      {/* <h2>JS Animation</h2>
      <div className="banner">
        <div className="block"></div>
      </div> */}
      <ProfileBackground3Dtest></ProfileBackground3Dtest>
    </Styled_ProfileBackground>
  );
};
