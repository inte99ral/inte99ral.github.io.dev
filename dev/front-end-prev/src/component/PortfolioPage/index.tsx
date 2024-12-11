// # src/component/HelloPage/index.tsx
// ## API & Library ==================================================

import React, { useEffect, useState } from 'react';
// ## Asset ==========================================================
// ## Style ==========================================================

import { Styled_Portfolio, Styled_PortfolioTable } from './style';

// ## Component ======================================================

// ## Rendering ======================================================

export const PortfolioPage = () => {
  // ### Return ========================================================

  return (
    <Styled_Portfolio>
      <h1>Hello, world!</h1>
      <h3>front-end : {Number(process.env.REACT_APP_NUMBER) + 5}</h3>
    </Styled_Portfolio>
  );
};
