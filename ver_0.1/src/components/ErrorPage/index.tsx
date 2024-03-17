// -- API & Library
import React, { useState } from 'react';
import { test } from 'api/rest';

// -- Style
import { Styled_ErrorPage, Styled_ErrorSign, Styled_ErrorSignIcon } from './style';

export const ErrorPage = () => {
  // -- Init
  const [getTest, setTest] = useState(null);

  // -- Method
  const handleClick = async () => {
    const data = await test.getTestData();
    console.log(data);
    setTest(data);
    return;
  };

  //-- Return
  return (
    <Styled_ErrorPage className="error-page">
      <Styled_ErrorSign className="outer" onClick={handleClick}>
        <Styled_ErrorSignIcon />
        <div>{getTest ? getTest : '😢 개선 중 입니다'}</div>
      </Styled_ErrorSign>
    </Styled_ErrorPage>
  );
};
