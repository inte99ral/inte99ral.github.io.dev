// API & Library
import React from 'react';

// Styles
import { Styled_HomePage } from './style';

// Components
import { HomeBanner } from './components/HomeBanner';
import { HomeMain } from './components/HomeMain';

export const HomePage = () => {
  // Return
  return (
    <Styled_HomePage className="home-page">
      <div style={{ height: 1000, display: 'flex', alignItems: 'center' }}>테스트 문구</div>
      {/* <HomeBanner />
      <HomeMain /> */}
    </Styled_HomePage>
  );
};
