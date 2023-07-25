// -- API & Library
import React from 'react';

// -- Styles
import { Styled_ProfileSection } from './style';

// -- Interface & Type
interface propsInf {
  isActive: boolean;
}

export const ProfileSection01 = ({ isActive }: propsInf) => {
  // -- Return
  return <Styled_ProfileSection className="profile-section"></Styled_ProfileSection>;
};
