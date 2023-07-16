// -- API & Library
import React, { CSSProperties } from 'react';

// -- Styles
import { Styled_ProfileSectionLabel } from './style';

export const ProfileSectionLabel = () => {
  // -- Return
  return (
    <Styled_ProfileSectionLabel>
      <span style={{ '--deg': 0 } as CSSProperties}>React</span>
      <span style={{ '--deg': 3 } as CSSProperties}>Unity</span>
      <span style={{ '--deg': 2 } as CSSProperties}>Full Stack</span>
      <span style={{ '--deg': 1 } as CSSProperties}>웃고있는</span>
    </Styled_ProfileSectionLabel>
  );
};
