// -- API & Library
import React, { useEffect } from 'react';

// -- Styles
import { Styled_ProfileBackground } from './style';

export const ProfileBackground = () => {
  // -- Hooks
  useEffect(() => {
    const banner = document.getElementsByClassName('banner')[0];
    const blocks = document.getElementsByClassName('blocks') as HTMLCollectionOf<HTMLElement>;
    banner.innerHTML = '<div class="blocks"></div>';
    for (let i = 1; i < 14; i++) {
      banner.innerHTML += '<div class="blocks"></div>';
      const duration = Math.random() * 5;
      blocks[i].style.animationDuration = 5 + duration + 's';
    }
    return;
  }, []);

  // -- Return
  return (
    <Styled_ProfileBackground className="profile-background">
      <div className="banner">{/* <div className="blocks"></div> */}</div>
    </Styled_ProfileBackground>
  );
};
