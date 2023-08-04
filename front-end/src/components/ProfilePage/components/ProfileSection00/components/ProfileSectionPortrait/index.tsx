// -- API & Library
import React, { CSSProperties } from 'react';

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
      <Styled_ProfileSectionPortraitDJ style={{ '--deg': 0 } as CSSProperties} />
      <Styled_ProfileSectionPortraitRingfit style={{ '--deg': 1 } as CSSProperties} />
      {/* <Styled_ProfileSectionPortraitRingfit style={{ '--deg': 3 } as CSSProperties} />
      <Styled_ProfileSectionPortraitSuit style={{ '--deg': 2 } as CSSProperties} />
      <Styled_ProfileSectionPortraitDJ style={{ '--deg': 1 } as CSSProperties} /> */}
    </Styled_ProfileSectionPortrait>
  );
};
