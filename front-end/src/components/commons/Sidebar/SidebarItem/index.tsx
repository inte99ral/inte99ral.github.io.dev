// API & Library
import React, { ReactNode } from 'react';

// Styled
import { styleType, Styled_SidebarItem } from './style';

// Type
interface propsType extends styleType {
  children: ReactNode;
  isActive?: boolean;
}

export const SidebarItem = ({ children, isActive }: propsType) => {
  return (
    <Styled_SidebarItem>
      <div>
        <div style={{ height: isActive ? '20px' : '10px', width: '20px', background: '' }}>s</div>
      </div>
    </Styled_SidebarItem>
  );
};
