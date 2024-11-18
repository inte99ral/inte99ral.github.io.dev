// # src/component/HelloPage/index.tsx
// ## API & Library ==================================================

import React from 'react';

// ## Asset ==========================================================
// ## Style ==========================================================

import { Styled_PortfolioPage } from './style';

// ## Component ======================================================

export const PortfolioPage = () => {
  // ## Hook ===========================================================
  // ## Method =========================================================
  // ## Return =========================================================

  return (
    <Styled_PortfolioPage>
      <h1>Hello, world!</h1>
      <h3>front-end : {process.env.REACT_APP_VERSION}</h3>
    </Styled_PortfolioPage>
  );
};
