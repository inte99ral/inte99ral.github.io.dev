// -- API & Library
import React from 'react';

// -- Styles
import {
  Styled_HomePage,
  Styled_HomePageSign,
  Styled_HomePageSignIcon,
  Styled_HomePageButton,
} from './style';

// -- Components
// import { HomeBanner } from './components/HomeBanner';
// import { HomeMain } from './components/HomeMain';

export const HomePage = () => {
  // -- Return
  return (
    <Styled_HomePage className="home-page">
      {/* <HomeBanner />
      <HomeMain /> */}
      <Styled_HomePageButton />
      <Styled_HomePageSign className="outer">
        <Styled_HomePageSignIcon />
        <div>😢 개선 중 입니다</div>
      </Styled_HomePageSign>
    </Styled_HomePage>
  );
};
