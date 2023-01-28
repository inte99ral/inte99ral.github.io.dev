// API & Library
import React from 'react';

// Styles
import { Styled_Page } from './style';

// Components
import { HomeBanner } from './components/HomeBanner';

export const HomePage = () => {
  // Return
  return (
    <Styled_Page className="home-page">
      <HomeBanner />
    </Styled_Page>
  );
};
