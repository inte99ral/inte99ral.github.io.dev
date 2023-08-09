// -- API & Library
import React, { useState } from 'react';
import { test } from 'api/rest';

// -- Styles
import { Styled_HomePage, Styled_HomePageSign, Styled_HomePageSignIcon } from './style';

// -- Components
import { HomeBanner } from './components/HomeBanner';
import { HomeMain } from './components/HomeMain';

export const HomePage = () => {
  // -- Init
  const [getTest, setTest] = useState(null);

  // -- Methods
  const handleClick = async () => {
    const data = await test.getTestData();
    console.log(data);
    setTest(data);
    return;
  };

  // -- Return
  return (
    <Styled_HomePage className="home-page">
      <HomeBanner />
      <HomeMain />
    </Styled_HomePage>
  );
};
