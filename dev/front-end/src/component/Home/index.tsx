// # src/component/Home/index.tsx
// ## API & Library ==================================================

import React from 'react';
import { NavLink } from 'react-router-dom';

// ## Asset ==========================================================
// ## Style ==========================================================

import { Styled_Home } from './style';

// ## Component ======================================================

export const Home = () => {
  // ## Hook ===========================================================
  // ## Method =========================================================
  // ## Return =========================================================

  return (
    <Styled_Home>
      <h1>홈 페이지입니다.</h1>
      <br />
      <NavLink to="/blog">블로그 페이지로 가기</NavLink>
      <NavLink to="/error">에러 페이지로 가기</NavLink>
    </Styled_Home>
  );
};
