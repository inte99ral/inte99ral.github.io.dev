// -- API & Library
import React from 'react';

// -- Assets
import { Styled_ProfileSection } from './style';

// -- Components

// -- Interface & Type
interface propsInf {
  isActive: boolean;
}

export const ProfileSection02 = ({ isActive }: propsInf) => {
  // -- Return
  return (
    <Styled_ProfileSection className="profile-section">
      <h1>{isActive ? 'true' : 'false'}</h1>
    </Styled_ProfileSection>
  );
};
