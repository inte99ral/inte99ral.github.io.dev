// API & Library
import React from 'react';

// Styles
import { Styled_Page } from './style';

// Components
import { HomeBanner } from './HomeBanner';

export const HomePage = () => {
  // Return
  return (
    <Styled_Page className="home-page">
      <HomeBanner></HomeBanner>
    </Styled_Page>
  );
};
