// API & Library
import React from 'react';

// Style
import { Styled_HomeBanner, Styled_HomeBannerBG } from './style';

export const HomeBanner = () => {
  return (
    <Styled_HomeBanner className="home-banner outer">
      <Styled_HomeBannerBG />
      <div>프로필이란말이다</div>
    </Styled_HomeBanner>
  );
};
