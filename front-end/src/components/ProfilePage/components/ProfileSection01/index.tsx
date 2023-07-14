// -- API & Library
import React, { MouseEvent } from 'react';

// -- Components
import { ProfileSectionPortrait } from './components/ProfileSectionPortrait';
import { ProfileSectionLabel } from './components/ProfileSectionLabel';

// -- Styles
import {
  Styled_ProfileSection01,
  Styled_ProfileSectionLine,
  Styled_ProfileSectionTitle,
} from './style';

export const ProfileSection01 = () => {
  // -- Init

  // -- Methods
  const handleClick = () => {
    console.log('click');
  };

  // -- Hooks

  // -- Return
  return (
    <Styled_ProfileSection01 className="profile-section">
      <Styled_ProfileSectionLine>
        <h1>안녕하세요!</h1>
        <Styled_ProfileSectionTitle>
          <ProfileSectionLabel /> 개발자 박준혁 입니다.
        </Styled_ProfileSectionTitle>
      </Styled_ProfileSectionLine>
      <ProfileSectionPortrait />
    </Styled_ProfileSection01>
  );
};
