// -- API & Library
import React, { ReactElement, MouseEvent, useState } from 'react';

// -- Styles
import { Styled_SidebarOption, Styled_SidebarOptionIcon, Styled_SidebarOptionTitle } from './style';

// -- Components
import { SidebarOptionModal } from './components/SidebarOptionModal';

// -- Interfaces & Types
interface props {
  icon: ReactElement;
  title: ReactElement;
}

export const SidebarOption = ({ icon, title }: props) => {
  // -- Init
  const [isModel, setIsModel] = useState<boolean>(true);

  // -- Methods
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModel(!isModel);
  };

  // -- Return
  return (
    <Styled_SidebarOption className="sidebar-menu" onClick={handleClick}>
      {isModel ? <SidebarOptionModal handleClick={handleClick} /> : ''}
      <Styled_SidebarOptionIcon className="sidebar-menu-icon">{icon}</Styled_SidebarOptionIcon>
      <Styled_SidebarOptionTitle className="sidebar-menu-title">{title}</Styled_SidebarOptionTitle>
    </Styled_SidebarOption>
  );
};
