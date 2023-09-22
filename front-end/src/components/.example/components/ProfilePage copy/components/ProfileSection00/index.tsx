// -- API & Library
import React from 'react';

// -- Components
import { ProfileSectionPortrait } from './components/ProfileSectionPortrait';
import { ProfileSectionLabel } from './components/ProfileSectionLabel';

// -- Styles
import {
  Styled_ProfileSection,
  Styled_ProfileSectionLineBox00,
  Styled_ProfileSectionCircle,
  Styled_ProfileSectionLine00,
  Styled_ProfileSectionLine01,
  Styled_ProfileSectionLine02,
} from './style';

// -- Interface & Type
interface propsInf {
  isActive: boolean;
}

export const ProfileSection00 = ({ isActive }: propsInf) => {
  // -- Return
  return (
    <>
      {isActive ? (
        <Styled_ProfileSection className="profile-section">
          <Styled_ProfileSectionLineBox00>
            <Styled_ProfileSectionCircle />
            <Styled_ProfileSectionLine00 className="profile-section-line 01">
              안녕하세요!
            </Styled_ProfileSectionLine00>
            <Styled_ProfileSectionLine01 className="profile-section-line 02">
              <ProfileSectionLabel /> 개발자
            </Styled_ProfileSectionLine01>
            <Styled_ProfileSectionLine02 className="profile-section-line 03">
              박준혁 입니다.
            </Styled_ProfileSectionLine02>
          </Styled_ProfileSectionLineBox00>
          <ProfileSectionPortrait />
        </Styled_ProfileSection>
      ) : (
        <Styled_ProfileSection className="profile-section" />
      )}
      {/* <Styled_ProfileSection className="profile-section">
        {isActive ? (
          <Styled_ProfileSectionLineBox00>
            <Styled_ProfileSectionCircle />
            <Styled_ProfileSectionLine00 className="profile-section-line 01">
              안녕하세요!
            </Styled_ProfileSectionLine00>
            <Styled_ProfileSectionLine01 className="profile-section-line 02">
              <ProfileSectionLabel /> 개발자
            </Styled_ProfileSectionLine01>
            <Styled_ProfileSectionLine02 className="profile-section-line 03">
              박준혁 입니다.
            </Styled_ProfileSectionLine02>
          </Styled_ProfileSectionLineBox00>
        ) : (
          <></>
        )}
        {isActive ? <ProfileSectionPortrait /> : <></>}
      </Styled_ProfileSection> */}
    </>
  );
};
