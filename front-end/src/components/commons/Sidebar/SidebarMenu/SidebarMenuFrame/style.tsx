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

  &::before {
    content: '';
    box-sizing: border-box;
    
    position: absolute;
    top: -0.9rem;
    left: -0.9rem;

    display: inline-block;
    height: 5rem;
    width: 5rem;

    /* border: 1.2rem solid var(--color-main); */
    border: 1.2rem solid red;
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
    top: -0.9rem;

    display: inline-block;
    height: 5rem;
    width: 100%;

    border-top: 1.2rem solid red;
    border-bottom: 1.2rem solid red;
  }
`;

export const Styled_SidebarMenuFrameRight = Styled.div`
  position: relative;
  height: 100%;
  width: 0.4rem;
  overflow: hidden;

  &::before {
    content: '';
    box-sizing: border-box;
    
    position: absolute;
    top: -0.9rem;

    display: inline-block;
    height: 100%;
    width: 100%;

    border-radius: 50%;
    /* background-color: var(--color-main); */
    background-color: red;
  }

  &::after {
    content: '';
    box-sizing: border-box;
    
    position: absolute;
    bottom: -0.31rem;
    left: -0.3rem;

    display: inline-block;
    height: 0.6rem;
    width: 0.6rem;

    border-radius: 50%;
    /* background-color: var(--color-main); */
    /* background-color: red; */
  }
`;
