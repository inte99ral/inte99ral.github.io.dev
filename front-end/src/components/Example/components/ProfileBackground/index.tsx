// -- API & Library
import React, { useEffect } from 'react';

// -- Styles
import { Styled_ProfileBackground } from './style';

export const ProfileBackground = () => {
  // -- Hooks
  useEffect(() => {
    const profileBackground = document.getElementsByClassName('profile-background')[0];
    const profileBackgroundBlocks = document.getElementsByClassName(
      'profile-background-block',
    ) as HTMLCollectionOf<HTMLElement>;
    profileBackground.innerHTML = '<div class="profile-background-block"></div>';
    for (let i = 1; i < 14; i++) {
      profileBackground.innerHTML += '<div class="profile-background-block"></div>';
      const duration = Math.random() * 4;
      profileBackgroundBlocks[i].style.animationDuration = 4 + duration + 's';
      profileBackgroundBlocks[i].style.animationDelay = duration + 's';
    }
    return;
  }, []);

  // -- Return
  return (
    <Styled_ProfileBackground className="profile-background">
      <div className="profile-background-block"></div>
    </Styled_ProfileBackground>
  );
};
