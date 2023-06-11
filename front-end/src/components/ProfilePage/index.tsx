// -- API & Library
import React, { MouseEvent, useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { scroll, isSmooth } from 'api/recoil/store';

// -- Styles
import { Styled_ProfilePage } from './style';

// -- Components
import { ProfileSection01 } from './components/ProfileSection01';
import { ProfileSection02 } from './components/ProfileSection02';

export const ProfilePage = () => {
  // -- Init
  const [getScroll, setScroll] = useRecoilState(scroll);
  const [getIsSmooth, setIsSmooth] = useRecoilState(isSmooth);
  const [getLastScroll, setLastScroll] = useState(0);

  // -- Methods
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setScroll(0);
  };

  const handleClick2 = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setScroll(window.innerHeight);
  };

  // -- Hooks
  useEffect(() => {
    setScroll(0);
    setLastScroll(0);
    setIsSmooth(true);
  }, []);

  useEffect(() => {
    if (!getIsSmooth) return;

    const viewHeight = window.innerHeight;
    if (getLastScroll % viewHeight == 0) {
      // console.log('[confirm]');
      if (getLastScroll < getScroll) {
        // setScroll(Math.floor(getScroll / (viewHeight + 1) + 1) * viewHeight);
        console.log('[DOWN] : ' + Math.floor(getScroll / (viewHeight + 1) + 1));
      } else {
        // setScroll(Math.floor(getScroll / (viewHeight + 1)) * viewHeight);
        console.log('[UP] : ' + Math.floor(getScroll / (viewHeight + 1)));
      }
    } else {
      // console.log('[reject]');
    }
    setLastScroll(getScroll);

    // if (getLastScroll < getScroll) {
    //   setScroll(Math.floor(getScroll / (viewHeight + 1) + 1) * viewHeight);
    //   // console.log('[DOWN] : ' + Math.floor(getScroll / (viewHeight + 1) + 1));
    // } else {
    //   setScroll(Math.floor(getScroll / (viewHeight + 1)) * viewHeight);
    //   // console.log('[UP] : ' + Math.floor(getScroll / (viewHeight + 1)));
    // }
    // setLastScroll(getScroll);

    // if (Math.abs(lastScroll - getScroll) > 100) {
    //   console.log('skip');
    //   return;
    // }
    // if (getScroll < lastScroll) {
    //   console.log(sectionIndex + '--');
    // } else {
    //   console.log(sectionIndex + '++');
    // }
    // lastScroll = getScroll;
    // const viewHeight = window.innerHeight;
    // if (sectionIndex * viewHeight > getScroll) setScroll(sectionIndex-- * viewHeight);
    // else setScroll(sectionIndex++ * viewHeight);
  }, [getScroll]);

  // -- Return
  return (
    <Styled_ProfilePage className="profile-page" onClick={handleClick2}>
      <ProfileSection01 />
      <ProfileSection02 />
    </Styled_ProfilePage>
  );
};
