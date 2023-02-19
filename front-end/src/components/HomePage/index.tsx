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
      <div style={{ height: 1800, display: 'flex', alignItems: 'center' }}>
        현 스크롤 값 : {getScroll}
      </div>
      {/* <HomeBanner />
      <HomeMain /> */}
    </Styled_HomePage>
  );
};
