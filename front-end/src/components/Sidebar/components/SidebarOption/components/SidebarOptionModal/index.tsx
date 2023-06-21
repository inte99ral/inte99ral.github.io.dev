// -- API & Library
import React, { MouseEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import { isDarkState } from 'api/recoil/store';

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
  isModel: boolean;
  handleClick: (e: MouseEvent) => void;
}

export const SidebarOptionModal = ({ isModel, handleClick }: props) => {
  // -- Init
  const [isTest, setIsTest] = useState(false);
  const [isDark, setIsDark] = useRecoilState(isDarkState);

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
    setIsTest(!isTest);
  };

  // -- Return
  return (
    <Styled_SidebarOptionModalContainer className="sidebar-option-modal-container">
      <Styled_SidebarOptionModalBackground
        className="sidebar-option-modal-background blur"
        onClick={handleClick}
      />
      <Styled_SidebarOptionModal className="sidebar-option-modal" onClick={preventClick}>
        <div>이얍</div>
        <SidebarOptionModalItem
          title="Dark Mode"
          isTrue={isDark}
          handleIsTrue={handleIsDark}
        ></SidebarOptionModalItem>

        <SidebarOptionModalItem
          title="Test Mode"
          isTrue={isTest}
          handleIsTrue={handleIsTest}
        ></SidebarOptionModalItem>
      </Styled_SidebarOptionModal>
    </Styled_SidebarOptionModalContainer>
  );
};
