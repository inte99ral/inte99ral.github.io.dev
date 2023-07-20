// -- API & Library
import React, { MouseEvent } from 'react';

// -- Components
import { ProfileSectionPortrait } from './components/ProfileSectionPortrait';
import { ProfileSectionLabel } from './components/ProfileSectionLabel';

// -- Styles
import {
  Styled_ProfileSection01,
  Styled_ProfileSectionLineBox,
  Styled_ProfileSectionLine01,
  Styled_ProfileSectionLine02,
  Styled_ProfileSectionLine03,
} from './style';

// -- Interface & Type
interface propsType {
  isActive: boolean;
}

export const ProfileSection01 = ({ isActive }: propsType) => {
  // -- Init

  // -- Methods
  const handleClick = () => {
    console.log('click');
  };

  // -- Return
  return (
    <Styled_ProfileSection01 className="profile-section">
      <Styled_ProfileSectionLineBox>
        <Styled_ProfileSectionLine01 className="profile-section-line 01">
          안녕하세요!
        </Styled_ProfileSectionLine01>
        <Styled_ProfileSectionLine02 className="profile-section-line 02">
          <ProfileSectionLabel /> 개발자
        </Styled_ProfileSectionLine02>
        <Styled_ProfileSectionLine03 className="profile-section-line 03">
          박준혁 입니다.
        </Styled_ProfileSectionLine03>
      </Styled_ProfileSectionLineBox>
      <ProfileSectionPortrait />
    </Styled_ProfileSection01>
  );
};
