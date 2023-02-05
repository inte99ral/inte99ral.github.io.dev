// API & Library
import React from 'react';

// Styles
import { Styled_ErrorPage, Styled_ErrorPic } from './style';

export const ErrorPage = () => {
  // Return
  return (
    <>
      <Styled_ErrorPage>
        <h1>에러야! 신난다~</h1>
        <Styled_ErrorPic />
        <div>▲ 전혀 예상 못한 에러가 터졌네요. 야! 신난다</div>
      </Styled_ErrorPage>
    </>
  );
};
