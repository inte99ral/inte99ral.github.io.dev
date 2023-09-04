// -- API & Library
import React, { CSSProperties } from 'react';

// -- Styles
import { Styled_ProfileSectionPortrait, Styled_ProfileSectionPortraitSuit } from './style';

export const ProfileSectionPortrait = () => {
  // -- Return
  return (
    <Styled_ProfileSectionPortrait className="profile-section-portrait">
      <Styled_ProfileSectionPortraitSuit />
    </Styled_ProfileSectionPortrait>
  );
};
