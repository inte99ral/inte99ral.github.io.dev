// -- API & Library
import React, { MouseEvent } from 'react';

// -- Styles
import {
  Styled_SidebarOptionModalSelector,
  Styled_SidebarOptionModalSelectorIndicator,
} from './style';

// -- Interface & Types
interface props {
  isTrue: boolean;
  handleIsTrue: (e: MouseEvent) => void;
}

export const SidebarOptionModalSelector = ({ isTrue, handleIsTrue }: props) => {
  // -- Return
  return (
    <Styled_SidebarOptionModalSelector
      className="sidebar-option-modal-container"
      onClick={handleIsTrue}
      isTrue={isTrue}
    >
      <Styled_SidebarOptionModalSelectorIndicator
        className="sidebar-option-modal-container-indicator"
        isTrue={isTrue}
      />
    </Styled_SidebarOptionModalSelector>
  );
};
