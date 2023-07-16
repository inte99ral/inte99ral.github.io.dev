// -- API & Library
import React from 'react';

// -- Styles
import {
  Styled_ProfileSectionPortrait,
  Styled_ProfileSectionPortraitDJ,
  Styled_ProfileSectionPortraitRingfit,
  Styled_ProfileSectionPortraitSuit,
} from './style';

export const ProfileSectionPortrait = () => {
  // -- Return
  return (
    <Styled_ProfileSectionPortrait className="profile-section-portrait">
      <Styled_ProfileSectionPortraitDJ />
      {/* <Styled_ProfileSectionPortraitRingfit /> */}
      {/* <Styled_ProfileSectionPortraitSuit /> */}
    </Styled_ProfileSectionPortrait>
  );
};