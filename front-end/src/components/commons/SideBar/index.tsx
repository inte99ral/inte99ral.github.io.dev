// API & Library
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

// Styles
import {
  StyledSideBarBackground,
  StyledSideBar,
  StyledSideBarProfile,
  StyledSideBarProfilePhoto,
  StyledSideBarLine,
  StyledSideBarItem,
  StyledSideBarBlank,
} from './style';

// Components
import { SideBarItemFrame } from 'components/commons/SideBarItemFrame';

export const SideBar = () => {
  // Init
  const [isActive, setIsActive] = useState(false);

  // Return
  return (
    <StyledSideBarBackground isActive={isActive} className="side-bar-background outer">
      <StyledSideBar
        className="side-bar outer"
        isActive={isActive}
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
      >
        <NavLink
          to="/home"
          style={({ isActive }) => ({ background: isActive ? 'none' : '#ffffff' })}
        >
          <StyledSideBarProfile className="side-bar-profile">
            {/* <SideBarItemFrame isActive={isActive} widthActive="12rem" widthInactive="3.2rem" /> */}
            <StyledSideBarProfilePhoto isActive={isActive}></StyledSideBarProfilePhoto>
          </StyledSideBarProfile>
        </NavLink>

        <StyledSideBarLine className="side-bar-line" isActive={false}></StyledSideBarLine>

        <NavLink
          to="/blog"
          style={({ isActive }) => ({ background: isActive ? 'none' : '#ffffff' })}
        >
          <StyledSideBarItem className="side-bar-item" isActive={false}>
            <SideBarItemFrame isActive={true} widthActive="12rem" widthInactive="3.2rem" />
            <AiFillGithub />
            <div>블로그</div>
          </StyledSideBarItem>
        </NavLink>

        <NavLink
          to="/error"
          style={({ isActive }) => ({ background: isActive ? 'none' : '#ffffff' })}
        >
          <StyledSideBarItem className="side-bar-item" isActive={isActive}>
            <AiFillGithub />
            <div>에러페이지</div>
          </StyledSideBarItem>
        </NavLink>

        <StyledSideBarBlank />
      </StyledSideBar>
    </StyledSideBarBackground>
  );
};
