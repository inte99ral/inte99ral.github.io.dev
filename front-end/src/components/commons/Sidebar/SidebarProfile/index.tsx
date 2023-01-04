// API & Library
import React, { ReactNode } from 'react';

// Styled
import { styleType, Styled_SidebarProfile, Styled_SidebarProfileItem } from './style';

// Type
interface propsType extends styleType {
  children: ReactNode;
}

export const SidebarProfile = ({ children, isActive }: propsType) => {
  return (
    <Styled_SidebarProfile className="sidebar-profile" isActive={isActive}>
      <Styled_SidebarProfileItem className="sidebar-profile-item">
        {children}
      </Styled_SidebarProfileItem>
      {/* <div>
        <div style={{ height: isActive ? '20px' : '10px', width: '20px', background: '' }}>
          {children}
        </div>
      </div> */}
    </Styled_SidebarProfile>
  );
};
