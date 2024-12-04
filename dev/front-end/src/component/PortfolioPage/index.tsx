// # src/component/HelloPage/index.tsx
// ## API & Library ==================================================

import React, { useEffect } from 'react';
import { test } from 'api/rest';

// ## Asset ==========================================================
// ## Style ==========================================================

import { Styled_PortfolioPage } from './style';

// ## Component ======================================================

export const PortfolioPage = () => {
  // ## Hook ===========================================================
  useEffect(() => {
    const test10 = (async () => await test.test10())();

    try {
    } catch (e) {}

    console.log('test10 :', test10);
    console.log('test11 :', (async () => await test.test11())());

    // console.log('처리된 JSON 데이터 2:', (async () => await test.testOn())());
  }, []);

  // ## Method =========================================================

  // ## Return =========================================================

  return (
    <Styled_PortfolioPage>
      <h1>Hello, world!</h1>
      <h3>front-end : {Number(process.env.REACT_APP_NUMBER) + 5}</h3>
    </Styled_PortfolioPage>
  );
};
