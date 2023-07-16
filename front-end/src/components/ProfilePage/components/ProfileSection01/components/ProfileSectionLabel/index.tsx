// -- API & Library
import React, { CSSProperties } from 'react';

// -- Styles
import { Styled_ProfileSectionLabel } from './style';

export const ProfileSectionLabel = () => {
  // -- Return
  return (
    <Styled_ProfileSectionLabel>
      <span style={{ '--i': 0 } as CSSProperties}>React</span>
      <span style={{ '--i': 0 } as CSSProperties}>즐거운</span>
      <span style={{ '--i': 0 } as CSSProperties}>창의적인</span>
      <span style={{ '--i': 0 } as CSSProperties}>Full Stack</span>
    </Styled_ProfileSectionLabel>
  );
};
