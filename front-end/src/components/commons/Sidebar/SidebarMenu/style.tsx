// API & Library
import Styled from 'styled-components';

export const Styled_SidebarMenu = Styled.div`
  position: relative;
  height: 3rem;
  padding: 0.5rem;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;

  overflow: hidden;
`;

export const Styled_SidebarMenuIcon = Styled.div`
  height: 2rem;
  width: 2rem;
  flex-grow: 0;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: 1.5rem;
`;

export const Styled_SidebarMenuTitle = Styled.div`
  height: 2rem;
  flex-grow: 1;
  flex-shrink: 1;

  line-height: 2rem;

  font-weight: bold;
  white-space: nowrap;
  font-size: 1rem;
`;
