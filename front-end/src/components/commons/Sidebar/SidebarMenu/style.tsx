// API & Library
import Styled from 'styled-components';

export const Styled_SidebarMenu = Styled.div`
  position: relative;
  height: 3.2rem;
  padding: 0.6rem;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.6rem;

  overflow: hidden;

  /* background-color: lightblue; */
`;

export const Styled_SidebarMenuFrameLeft = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 1.6rem;
  /* background-color: yellow; */
`;

export const Styled_SidebarMenuFrameRight = Styled.div`
  position: absolute;
  top: 0;
  left: 1.6rem;

  height: 100%;
  width: 100%;

  border-top: 0.4rem solid red;
  border-bottom: 0.4rem solid red;

  /* background-color: blue; */
`;

export const Styled_SidebarMenuIcon = Styled.div`
  height: 100%;
  font-size: 2rem;
`;

export const Styled_SidebarMenuTitle = Styled.div`
  height: 2rem;
  width: 11.2rem;

  line-height: 2rem;

  font-weight: bold;
  white-space: nowrap;
  font-size: 1rem;

  background-color: blue;
`;
