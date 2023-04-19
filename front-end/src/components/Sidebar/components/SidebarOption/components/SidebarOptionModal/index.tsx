/**
 * TODO: Test 용 함수,변수 지우기
 */

// -- API & Library
import React, { MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import { isDark } from 'api/recoil/store';

// -- Styles
import {
  Styled_SidebarOptionModalContainer,
  Styled_SidebarOptionModalBackground,
  Styled_SidebarOptionModal,
  Styled_SidebarOptionModalBlock,
} from './style';

// -- Components
import { SidebarOptionModalSelector } from './components/SidebarOptionModalSelector';
import { SidebarOptionModalItem } from './components/SidebarOptionModalItem';

// -- Interfaces & Types
interface props {
  handleClick: (e: MouseEvent) => void;
}

export const SidebarOptionModal = ({ handleClick }: props) => {
  // -- Init
  const [getIsDark, setIsDark] = useRecoilState(isDark);

  // -- Methods
  const preventClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleIsDark = (e: MouseEvent) => {
    localStorage.setItem('isDark', localStorage.getItem('isDark') == '1' ? '0' : '1');
    setIsDark(localStorage.getItem('isDark') == '1');
  };

  // -- Return
  return (
    <Styled_SidebarOptionModalContainer className="sidebar-option-modal-container">
      <Styled_SidebarOptionModalBackground
        className="sidebar-option-modal-background blur"
        onClick={handleClick}
      />
      <Styled_SidebarOptionModal className="sidebar-option-modal" onClick={preventClick}>
        <SidebarOptionModalItem
          title="Dark Mode"
          isTrue={getIsDark}
          handleIsTrue={handleIsDark}
        ></SidebarOptionModalItem>

        <Styled_SidebarOptionModalBlock className="sidebar-option-modal-block">
          <div>Dark Mode</div>
          <SidebarOptionModalSelector isTrue={getIsDark} handleIsTrue={handleIsDark} />
        </Styled_SidebarOptionModalBlock>
      </Styled_SidebarOptionModal>
    </Styled_SidebarOptionModalContainer>
  );
};
