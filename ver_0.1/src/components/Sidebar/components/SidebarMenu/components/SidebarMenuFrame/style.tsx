// -- API & Library
import Styled from 'styled-components';

export const Styled_SidebarMenuFrame = Styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  height: 3rem;
  width: 100%;
`;

export const Styled_SidebarMenuFrameLeft = Styled.div`
  position: relative;
  height: 100%;
  width: 1.5rem;
  overflow: hidden;

  &::before {
    content: '';
    box-sizing: border-box;
    
    position: absolute;
    top: -0.75rem;
    left: -0.75rem;

    display: inline-block;
    height: 4.5rem;
    width: 4.5rem;

    border: 1.25rem solid var(--color-main);
    border-radius: 50%;
  }
`;

export const Styled_SidebarMenuFrameMiddle = Styled.div`
  position: relative;
  height: 100%;
  flex-grow: 1;
  overflow: hidden;

  &::before {
    content: '';
    box-sizing: border-box;

    position: absolute;
    top: -0.75rem;

    display: inline-block;
    height: 4.5rem;
    width: 100%;

    border-top: 1.25rem solid var(--color-main);
    border-bottom: 1.25rem solid var(--color-main);
  }
`;

export const Styled_SidebarMenuFrameRight = Styled.div`
  position: relative;
  height: 100%;
  width: 0.5rem;
  overflow: hidden;

  &::before {
    content: '';
    box-sizing: border-box;
    
    position: absolute;
    top: -0.5rem;
    left: -0.5rem;

    display: inline-block;
    height: 1rem;
    width: 1rem;

    border-radius: 50%;
    background-color: var(--color-main);
  }

  &::after {
    content: '';
    box-sizing: border-box;
    
    position: absolute;
    bottom: -0.5rem;
    left: -0.5rem;

    display: inline-block;
    height: 1rem;
    width: 1rem;

    border-radius: 50%;
    background-color: var(--color-main);
  }
`;
