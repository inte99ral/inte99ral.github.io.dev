// # src/component/HelloPage/index.tsx
// ## API & Library ==================================================

import React from 'react';
import { AiFillSetting } from 'react-icons/ai';

// ## Asset ==========================================================

import img from './asset/image/error.png';

// ## Style ==========================================================

import { Styled_HelloPage } from './style';

// ## Component ======================================================

export const ExamplePage = () => {
  // ## Variable & Constant ============================================
  // ## Method =========================================================
  // ## Hook ===========================================================
  // ## Return =========================================================

  return (
    <Styled_HelloPage>
      <AiFillSetting />
      <h1>Hello, world!</h1>
      <h3>front-end : {process.env.REACT_APP_VERSION}</h3>
    </Styled_HelloPage>
  );
};
