// -- API & Library
import React, { MouseEvent } from 'react';

// -- Styles
import { Styled_SidebarOptionModalItemSelector } from './style';

// -- Interface & Types
interface props {
  isTrue: boolean;
  handleIsTrue: (e: MouseEvent) => void;
}

export const SidebarOptionModalItemSelector = ({ isTrue, handleIsTrue }: props) => {
  // -- Return
  return (
    <Styled_SidebarOptionModalItemSelector
      className="sidebar-option-modal-item-selector"
      onClick={handleIsTrue}
      isTrue={isTrue}
    ></Styled_SidebarOptionModalItemSelector>
  );
};
