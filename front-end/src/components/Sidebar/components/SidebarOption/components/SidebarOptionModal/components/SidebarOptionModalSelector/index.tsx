// -- API & Library
import React, { useState } from 'react';
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
  const handleIsDark = (e: Event) => {
    console.log('click isdark');
  };

  // -- Return
  return (
    <Styled_SidebarOptionModalSelector className="sidebar-option-modal-container">
      <Styled_SidebarOptionModalSelectorIndicator className="sidebar-option-modal-container-indicator" />
    </Styled_SidebarOptionModalSelector>
  );
};
