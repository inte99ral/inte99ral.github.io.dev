/**
 * TODO: 옵션 모달에 라이트/다크 모드 채우기
 */

// -- API & Library
import React, { MouseEvent } from 'react';

// -- Styles
import {
  Styled_SidebarOptionModalContainer,
  Styled_SidebarOptionModalBackground,
  Styled_SidebarOptionModal,
  Styled_SidebarOptionModalBlock,
} from './style';

// -- Components
import { SidebarOptionModalSelector } from './components/SidebarOptionModalSelector';

// -- Interfaces & Types
interface props {
  handleClick: (e: MouseEvent) => void;
}

export const SidebarOptionModal = ({ handleClick }: props) => {
  // -- Methods
  const preventClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // -- Return
  return (
    <Styled_SidebarOptionModalContainer className="sidebar-option-modal-container">
      <Styled_SidebarOptionModalBackground
        className="sidebar-option-modal-background blur"
        onClick={handleClick}
      />
      <Styled_SidebarOptionModal className="sidebar-option-modal" onClick={preventClick}>
        <Styled_SidebarOptionModalBlock className="sidebar-option-modal-block">
          <div>Dark Mode</div>
          <SidebarOptionModalSelector />
        </Styled_SidebarOptionModalBlock>
      </Styled_SidebarOptionModal>
    </Styled_SidebarOptionModalContainer>
  );
};
