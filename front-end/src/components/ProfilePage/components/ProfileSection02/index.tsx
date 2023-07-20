// -- API & Library
import React from 'react';

// -- Assets
import { Styled_ProfileSection02 } from './style';

// -- Components

// -- Interface & Type
interface propsInf {
  isActive: boolean;
}

export const ProfileSection02 = ({ isActive }: propsInf) => {
  // -- Return
  return (
    <Styled_ProfileSection02 className="profile-section">
      <h1>{isActive ? 'true' : 'false'}</h1>
    </Styled_ProfileSection02>
  );
};
