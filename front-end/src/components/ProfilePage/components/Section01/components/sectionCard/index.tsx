// -- API & Library
import React, { ReactNode } from 'react';

// -- Interface & Type
interface propsInf {
  children: ReactNode;
}

// -- Style
import { Styled_SectionCard } from './style';

export const SectionCard = ({ children }: propsInf) => {
  // -- Return
  return <Styled_SectionCard>{children}</Styled_SectionCard>;
};
