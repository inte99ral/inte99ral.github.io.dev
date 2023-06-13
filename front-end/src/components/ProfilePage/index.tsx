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

  const [getIsReady, setIsReady] = useState(false);
  const [getSectionIndex, setSectionIndex] = useState(0);

  const scrollArr = [0, 961, 2242];
  const viewHeight = window.innerHeight;

  // -- Methods
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setScroll(0);
  };

  const handleClick2 = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // const target = document.getElementsByClassName('profile-section')[0];
    // console.log(target.scrollHeight);
    setScroll(window.innerHeight);
  };

  // -- Hooks
  useEffect(() => {
    setIsSmooth(true);
    setScroll(0);
    setSectionIndex(0);
    return () => setIsSmooth(false);
  }, []);

  useEffect(() => {
    if (getScroll == window.innerHeight) console.log('좆됬다');

    // if (scrollArr.includes(getScroll)) setIsSmooth(false);
    // if (getIsSmooth) return;
    // if (getScroll < scrollArr[getSectionIndex]) {
    //   setIsSmooth(true);
    //   console.log('[up]');
    //   setSectionIndex(getSectionIndex - 1);
    //   setScroll(scrollArr[getSectionIndex - 1]);
    // } else if (getScroll > scrollArr[getSectionIndex] - viewHeight) {
    //   setIsSmooth(true);
    //   console.log('[down]');
    //   setSectionIndex(getSectionIndex + 1);
    //   setScroll(scrollArr[getSectionIndex + 1]);
    // }
    // if (!getIsReady || getIsSmooth) return;
    // const viewHeight = window.innerHeight;
    // if (getLastScroll % viewHeight == 0) {
    //   setIsSmooth(true);
    //   console.log('[STATUS] : ' + getIsSmooth);
    //   // console.log('[confirm]');
    //   if (getLastScroll < getScroll) {
    //     // setScroll(Math.floor(getScroll / (viewHeight + 1) + 1) * viewHeight);
    //     console.log('[Be] : ' + getLastScroll);
    //     console.log('[Af] : ' + getScroll);
    //     console.log('[DOWN] : ' + Math.floor(getScroll / (viewHeight + 1) + 1));
    //   } else {
    //     // setScroll(Math.floor(getScroll / (viewHeight + 1)) * viewHeight);
    //     console.log('[Be] : ' + getLastScroll);
    //     console.log('[Af] : ' + getScroll);
    //     console.log('[UP] : ' + Math.floor(getScroll / (viewHeight + 1)));
    //   }
    // } else {
    //   // console.log('[reject]');
    // }
    // setLastScroll(getScroll);
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
