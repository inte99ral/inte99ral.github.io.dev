// -- API & Library
import React from 'react';

// -- Assets
import { Styled_ProfileSection } from './style';

// -- Components

// -- Styles

// -- Interface & Type
interface propsInf {
  isActive: boolean;
}

export const ProfileSection03 = ({ isActive }: propsInf) => {
  // -- Init

  // -- Methods

  // -- Hooks

  // -- Return
  return (
    <Styled_ProfileSection className="profile-section">
      <div>{isActive ? 'true' : 'false'}</div>
    </Styled_ProfileSection>
  );
};
