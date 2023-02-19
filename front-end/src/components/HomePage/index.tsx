//-- API & Library
import React from 'react';
import { useRecoilValue } from 'recoil';
import { scroll } from 'api/recoil/store';

//-- Styles
import { Styled_HomePage } from './style';

//-- Components
import { HomeBanner } from './components/HomeBanner';
import { HomeMain } from './components/HomeMain';

export const HomePage = () => {
  //-- init
  const getScroll = useRecoilValue(scroll);
  //-- Return
  return (
    <Styled_HomePage className="home-page">
      <HomeBanner />
      <HomeMain />
    </Styled_HomePage>
  );
};
