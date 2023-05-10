// -- API & Library
import React from 'react';

// -- Styles
import { Styled_ProfileBackground } from './style';

export const ProfileBackground = () => {
  // -- Return
  return (
    <Styled_ProfileBackground className="profile-background">
      <h2>JS Animation</h2>

      <div className="test"></div>

      <div className="banner">
        <div className="blocks"></div>
      </div>
    </Styled_ProfileBackground>
  );
};
