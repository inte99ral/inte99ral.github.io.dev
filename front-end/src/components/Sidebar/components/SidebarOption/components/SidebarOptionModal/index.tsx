// -- API & Library
import React, { MouseEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import { isDark } from 'api/recoil/store';

// -- Styles
import {
  Styled_SidebarOptionModalContainer,
  Styled_SidebarOptionModalBackground,
  Styled_SidebarOptionModal,
} from './style';

// -- Components
import { SidebarOptionModalItem } from './components/SidebarOptionModalItem';

// -- Interfaces & Types
interface props {
  handleClick: (e: MouseEvent) => void;
}

export const SidebarOptionModal = ({ handleClick }: props) => {
  // -- Init
  const [getIsTest, setIsTest] = useState(false);
  const [getIsDark, setIsDark] = useRecoilState(isDark);

  // -- Methods
  const preventClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleIsDark = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.setItem('isDark', localStorage.getItem('isDark') == '1' ? '0' : '1');
    setIsDark(localStorage.getItem('isDark') == '1');
  };

  const handleIsTest = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTest(!getIsTest);
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

        <SidebarOptionModalItem
          title="Test Mode"
          isTrue={getIsTest}
          handleIsTrue={handleIsTest}
        ></SidebarOptionModalItem>
      </Styled_SidebarOptionModal>
    </Styled_SidebarOptionModalContainer>
  );
};
