// -- API & Library
import React, { MouseEvent } from 'react';

// -- Styles
import { Styled_SidebarOptionModalItem } from './style';

// -- Components
import { SidebarOptionModalItemSelector } from './components/SidebarOptionModalItemSelector';

// -- Interface & Types
interface props {
  title: string;
  isTrue: boolean;
  handleIsTrue: (e: MouseEvent) => void;
}

export const SidebarOptionModalItem = ({ title, isTrue, handleIsTrue }: props) => {
  // -- Return
  return (
    <Styled_SidebarOptionModalItem className="sidebar-option-modal-item">
      <div>{title}</div>
      <SidebarOptionModalItemSelector
        isTrue={isTrue}
        handleIsTrue={handleIsTrue}
      ></SidebarOptionModalItemSelector>
    </Styled_SidebarOptionModalItem>
  );
};
