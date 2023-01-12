// API & Library
import Styled from 'styled-components';

export const Styled_SidebarMenuFrame = Styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  height: 3.2rem;
  width: 100%;
`;

export const Styled_SidebarMenuFrameLeft = Styled.div`
  position: relative;
  height: 100%;
  width: 1.6rem;

  overflow: hidden;

  /* background-color: red; */

  &::before {
    content: '';
    box-sizing: border-box;
    
    position: absolute;
    top: -0.8rem;
    left: -0.8rem;

    display: inline-block;
    height: 4.8rem;
    width: 4.8rem;

    border: 1.2rem solid red;
    border-radius: 50%;
  }
`;

export const Styled_SidebarMenuFrameMiddle = Styled.div`
  flex-grow: 1;

  /* background-color: yellow; */
`;

export const Styled_SidebarMenuFrameRight = Styled.div`
  width: 0.4rem;

  background-color: blue;
`;
