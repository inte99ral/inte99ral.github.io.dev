// -- API & Library
import React, { useState } from 'react';
import { test } from 'api/rest';

// -- Styles
import { Styled_HomePage } from './style';

// -- Components
import { Banner } from './components/Banner';
import { Main } from './components/Main';

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
      <Banner />
      <Main />
    </Styled_HomePage>
  );
};
