// API & Library
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

// Styles
import {
  StyledSideBarBackground,
  StyledSideBar,
  StyledSideBarProfile,
  StyledSideBarLine,
  StyledSideBarItem,
} from './style';

export const SideBar = () => {
  // Init
  const [isActive, setIsActive] = useState(false);

  // Return
  return (
    <StyledSideBarBackground isActive={isActive} className="side-bar-background">
      <StyledSideBar
        className="side-bar"
        isActive={isActive}
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
      >
        <StyledSideBarProfile className="side-bar-profile" isActive={isActive} />
        <StyledSideBarLine className="side-bar-line" isActive={isActive} />
        <StyledSideBarItem className="side-bar-item">
          <AiFillGithub />
          <div>사이드바</div>
        </StyledSideBarItem>
        {/* <NavLink to="/blog" activeStyle={{ color: 'red' }}></NavLink> */}
        <NavLink to="/blog" className={({ isActive }) => (isActive ? '' : '')}></NavLink>
      </StyledSideBar>
    </StyledSideBarBackground>
  );
};
