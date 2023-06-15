// -- API & Library
import React, { MouseEvent, useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isSmoothState } from 'api/recoil/store';

// -- Styles
import { Styled_ProfilePage } from './style';

// -- Components
import { ProfileSection01 } from './components/ProfileSection01';
import { ProfileSection02 } from './components/ProfileSection02';
import { ProfileSection03 } from './components/ProfileSection03';

export const ProfilePage = () => {
  // -- Init
  const [isSmooth, setIsSmooth] = useRecoilState(isSmoothState);
  const scrollArr = [0, 961, 2242];
  let prevScroll = 0;
  let nextScroll = 0;
  // let scrollIndex = 0;

  const app = document.getElementById('app') as HTMLDivElement;

  // -- Methods
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleClick2 = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    console.log(prevScroll);
  };

  const handleScroll = (e: Event) => {
    nextScroll = app.scrollTop;
    if (nextScroll < prevScroll) {
      console.log(`[UP] next: ${nextScroll} prev: ${prevScroll}`);
      // app.scrollTop = scrollArr[--scrollIndex];
      app.scrollTop = scrollArr[0];
    } else {
      console.log(`[DOWN] next: ${nextScroll} prev: ${prevScroll}`);
      // app.scrollTop = scrollArr[++scrollIndex];
    }
    prevScroll = nextScroll;
  };

  // -- Hooks
  useEffect(() => {
    setIsSmooth(false);
    app.scrollTop = 0;
    app.addEventListener('scroll', handleScroll);
    setIsSmooth(true);
    return () => {
      setIsSmooth(false);
      app.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // -- Return
  return (
    <Styled_ProfilePage className="profile-page" onClick={handleClick2}>
      <ProfileSection01 />
      <ProfileSection02 />
      <ProfileSection03 />
    </Styled_ProfilePage>
  );
};
