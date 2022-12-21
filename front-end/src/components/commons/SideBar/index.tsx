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
            <SideBarItemFrame />
            <StyledSideBarProfilePhoto isActive={isActive}></StyledSideBarProfilePhoto>
          </StyledSideBarProfile>
        </NavLink>

        <StyledSideBarLine className="side-bar-line" isActive={isActive}>
          <AiFillGithub />
          <AiFillGithub />
          <AiFillGithub />
        </StyledSideBarLine>

        <NavLink
          to="/blog"
          style={({ isActive }) => ({ background: isActive ? 'none' : '#ffffff' })}
        >
          <StyledSideBarItem className="side-bar-item">
            <SideBarItemFrame />
            <AiFillGithub />
            <div>사이드바</div>
          </StyledSideBarItem>
        </NavLink>

        <NavLink
          to="/error"
          style={({ isActive }) => ({ background: isActive ? 'none' : '#ffffff' })}
        >
          <StyledSideBarItem className="side-bar-item">
            <AiFillGithub />
            <div>사이드바</div>
          </StyledSideBarItem>
        </NavLink>

        <StyledSideBarBlank />
      </StyledSideBar>
    </StyledSideBarBackground>
  );
};
