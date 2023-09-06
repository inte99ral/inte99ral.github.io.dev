// -- API & Library
import React from 'react';

// -- Component

// -- Style
import { Styled_Section } from './style';

// -- Interface & Type
interface propsInf {
  isActive: boolean;
}

export const Section00 = ({ isActive }: propsInf) => {
  // -- Return
  return (
    <>
      {isActive ? (
        <Styled_Section className="section">
          <p>안녕</p>
        </Styled_Section>
      ) : (
        <Styled_Section className="section" />
      )}
    </>
  );
};
