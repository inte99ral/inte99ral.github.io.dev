// -- API & Library
import React, { ReactNode, useEffect } from 'react';
import { VanillaTilt } from 'api/vanilla-tilt';

// -- Interface & Type
interface propsInf {
  children: ReactNode;
}

// -- Style
import { Styled_SectionCard } from './style';

export const SectionCard = ({ children }: propsInf) => {
  // -- Hooks
  useEffect(() => {
    console.log('awake');
    VanillaTilt.init(document.querySelector('.section-card'), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 1,
    });
  }, []);

  // -- Return
  return <Styled_SectionCard className="section-card">{children}</Styled_SectionCard>;
};
