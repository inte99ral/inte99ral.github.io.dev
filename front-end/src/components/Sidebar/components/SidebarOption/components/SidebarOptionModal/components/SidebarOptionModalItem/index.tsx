// -- API & Library
import React, { MouseEvent } from 'react';

// -- Styles
import {
  Styled_SidebarOptionModalItem,
  Styled_SidebarOptionModalSelector,
  Styled_SidebarOptionModalSelectorIndicator,
} from './style';

// -- Interface & Types
interface props {
  title: string;
  isTrue: boolean;
  handleIsTrue: (e: MouseEvent) => void;
}

export const SidebarOptionModalItem = ({ isTrue, handleIsTrue }: props) => {
  // -- Return
  return (
    <Styled_SidebarOptionModalItem className="sidebar-option-modal-item"></Styled_SidebarOptionModalItem>
  );
};
