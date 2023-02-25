// -- API & Library
import React from 'react';

// -- Styles
import {
  Styled_ProfileMainTitle,
  Styled_ProfileMainTitleL,
  Styled_ProfileMainTitleR,
} from './style';

export const ProfileMainTitle = () => {
  return (
    <Styled_ProfileMainTitle className="profile-main-title">
      <Styled_ProfileMainTitleL></Styled_ProfileMainTitleL>
      <Styled_ProfileMainTitleR />
    </Styled_ProfileMainTitle>
  );
};
