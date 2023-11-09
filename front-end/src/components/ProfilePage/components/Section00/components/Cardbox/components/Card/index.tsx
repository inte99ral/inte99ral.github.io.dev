// -- API & Library
import React, { ReactNode, useEffect } from 'react';
import { VanillaTilt } from 'api/vanilla-tilt';

// -- Interface & Type
interface propsInf {
  children: ReactNode;
}

// -- Style
import { Styled_Card } from './style';

export const Card = ({ children }: propsInf) => {
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
  return <Styled_Card className="section-card">{children}</Styled_Card>;
};
