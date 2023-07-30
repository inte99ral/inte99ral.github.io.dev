// -- API & Library
import React from 'react';

// -- Components
import { ProfileSectionPortrait } from './components/ProfileSectionPortrait';
import { ProfileSectionLabel } from './components/ProfileSectionLabel';

// -- Styles
import {
  Styled_ProfileSection,
  Styled_ProfileSectionLineBox,
  Styled_ProfileSectionLine01,
  Styled_ProfileSectionLine02,
  Styled_ProfileSectionLine03,
} from './style';

// -- Interface & Type
interface propsInf {
  isActive: boolean;
}

export const ProfileSection00 = ({ isActive }: propsInf) => {
  // -- Return
  return (
    <Styled_ProfileSection className="profile-section">
      {isActive ? (
        <Styled_ProfileSectionLineBox>
          <Styled_ProfileSectionLine01 className="profile-section-line 01">
            안녕하세요!{isActive ? 'true' : 'false'}
          </Styled_ProfileSectionLine01>
          <Styled_ProfileSectionLine02 className="profile-section-line 02">
            <ProfileSectionLabel /> 개발자
          </Styled_ProfileSectionLine02>
          <Styled_ProfileSectionLine03 className="profile-section-line 03">
            박준혁 입니다.
          </Styled_ProfileSectionLine03>
        </Styled_ProfileSectionLineBox>
      ) : (
        <></>
      )}
      {isActive ? <ProfileSectionPortrait /> : <></>}
    </Styled_ProfileSection>
  );
};
