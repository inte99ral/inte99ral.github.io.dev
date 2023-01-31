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
      <HomeBanner />
      <HomeMain />
    </Styled_HomePage>
  );
};
