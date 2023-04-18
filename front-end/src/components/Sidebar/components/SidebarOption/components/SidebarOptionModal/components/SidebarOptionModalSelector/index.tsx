// -- API & Library
import React, { useState, MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import { isDark } from 'api/recoil/store';

// -- Styles
import {
  Styled_SidebarOptionModalSelector,
  Styled_SidebarOptionModalSelectorIndicator,
} from './style';

export const SidebarOptionModalSelector = () => {
  // -- Init
  const [getIsDark, setIsDark] = useRecoilState(isDark);

  // -- Methods
  const handleIsDark = (e: MouseEvent) => {
    localStorage.setItem('isDark', localStorage.getItem('isDark') == '1' ? '0' : '1');
    setIsDark(localStorage.getItem('isDark') == '1');
    console.log('click isdark');
  };

  // -- Return
  return (
    <Styled_SidebarOptionModalSelector
      className="sidebar-option-modal-container"
      onClick={handleIsDark}
    >
      <Styled_SidebarOptionModalSelectorIndicator
        className="sidebar-option-modal-container-indicator"
        isTrue={getIsDark}
      />
    </Styled_SidebarOptionModalSelector>
  );
};
