// -- API & Library
import React, { MouseEvent, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { appState } from 'api/recoil/store';

// -- Asset

// -- Component

// -- Style
import { Styled_ProfilePage } from './style';

// -- Interface & Type
interface propsInf {
  isActive: boolean;
}

export const PortfolioPage = ({ isActive }: propsInf) => {
  // -- Init

  // -- Method

  // -- Hook

  // -- Return
  return (
    <Styled_ProfilePage>
      <div>예시용 페이지 입니다.</div>
    </Styled_ProfilePage>
  );
};
