// API & Library
import styled from 'styled-components';

// Type
export interface styleType {
  isActive: boolean;
}

export const Styled_SidebarMenu = styled.div<{ isActive: boolean }>`
  position: relative;
  height: ${({ isActive }) => (isActive ? '3.2rem' : '3.2rem')};

  padding: 0.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

export const Styled_SidebarMenuItem = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;

  background-color: green;
`;
