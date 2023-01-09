// API & Library
import styled from 'styled-components';

// Type
export interface styleType {
  isActive: boolean;
}

export const Styled_SidebarMenu = styled.div<{ isActive: boolean }>`
  position: relative;
  height: 3.2rem;
  padding: 0.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow-x: hidden;

  background-color: lightblue;
`;

export const Styled_SidebarMenuFrameLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 1.6rem;
  /* background-color: yellow; */
`;

export const Styled_SidebarMenuFrameRight = styled.div`
  position: absolute;
  top: 0;
  left: 1.6rem;

  height: 100%;
  width: 100%;

  border-top: 0.4rem solid red;
  border-bottom: 0.4rem solid red;

  /* background-color: blue; */
`;

export const Styled_SidebarMenuItem = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.6rem;

  overflow: hidden;
  background-color: green;
`;

export const Styled_SidebarMenuIcon = styled.div`
  height: 100%;
  font-size: 2rem;
`;

export const Styled_SidebarMenuTitle = styled.div`
  font-weight: bold;
  white-space: nowrap;
  font-size: 1rem;
`;
