// -- API & Library
import React from 'react';

// -- Assets

// -- Components

// -- Styles
// -- Styles
import { Styled_ProfileSectionTitle, Styled_ProfileSectionButton } from './style';

export const ProfileSectionHeadline = () => {
  // -- Return
  return (
    <>
      <h1>안녕하세요!</h1>
      <Styled_ProfileSectionTitle>
        {/* <ProfileSectionLabel />  */}
        개발자 박준혁 입니다.
      </Styled_ProfileSectionTitle>
      <Styled_ProfileSectionButton />
      <div>
        <span>sd</span>
      </div>
    </>
  );
};
