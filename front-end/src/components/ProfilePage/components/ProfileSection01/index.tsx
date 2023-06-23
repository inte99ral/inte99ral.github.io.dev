// -- API & Library
import React, { MouseEvent } from 'react';

// -- Assets
import {
  Styled_ProfileSection01,
  Styled_ProfileSectionBackground,
  Styled_ProfileSectionButton,
} from './style';

// -- Components

// -- Styles

export const ProfileSection01 = () => {
  // -- Init

  // -- Methods
  const handleClick = (e: MouseEvent) => {
    console.log('click');
  };

  // -- Hooks

  // -- Return
  return (
    <Styled_ProfileSection01 className="profile-section">
      <Styled_ProfileSectionBackground className="profile-section-background" />
      <h1>안녕하세요!</h1>
      <h2>full-stack 개발자 박준혁 입니다.</h2>
      <Styled_ProfileSectionButton onClick={handleClick} />
    </Styled_ProfileSection01>
  );
};
