// -- API & Library
import React, { MouseEvent } from 'react';

// -- Styles
import { Styled_SidebarOptionModalBackground, Styled_SidebarOptionModal } from './style';

// -- Interfaces & Types
interface props {
  handleClick: (e: MouseEvent) => void;
}

export const SidebarOptionModal = ({ handleClick }: props) => {
  // -- Return
  return (
    <Styled_SidebarOptionModalBackground
      className="sidebar-option-modal-background blur"
      onClick={handleClick}
    >
      <Styled_SidebarOptionModal></Styled_SidebarOptionModal>
    </Styled_SidebarOptionModalBackground>
  );
};
