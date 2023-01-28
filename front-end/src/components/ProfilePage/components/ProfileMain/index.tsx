// API & Library
import React from 'react';

// Styles
import { Styled_ProfileMain, Styled_ProfileMainPhoto } from './style';

export const ProfileMain = () => {
  return (
    <Styled_ProfileMain className="outer">
      <Styled_ProfileMainPhoto></Styled_ProfileMainPhoto>
      <div>프로필이란말이다</div>
    </Styled_ProfileMain>
  );
};
