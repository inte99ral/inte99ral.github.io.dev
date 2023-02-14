// API & Library
import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { count } from 'store';

// Styles
import { Styled_ProfilePage } from './style';

// Components
import { ProfileBanner } from './components/ProfileBanner';
import { ProfileMain } from './components/ProfileMain';

export const ProfilePage = () => {
  // Init
  const ProfilePage = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useRecoilState(count);

  // Methods
  const handleScroll = () => {
    // console.log('scrolled');
    console.log(ProfilePage.current?.scroll({ top: 0, behavior: 'smooth' }));
  };

  const countUp = () => {
    // console.log('scrolled');
    setCounter((x) => x + 1);
  };

  // LifeCycle
  useEffect(() => {
    // console.log('걍때워넣1음');
    window.addEventListener('keypress', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  useEffect(() => {
    console.log('걍때워넣1음');
  }, [ProfilePage.current?.scrollTop]);

  return (
    <Styled_ProfilePage className="profile-page" ref={ProfilePage}>
      <div>테스트용: {counter}</div>
      <div>테스트용: {ProfilePage.current?.scrollTop}</div>
      <button onClick={countUp} style={{ height: 100, width: 100 }}>
        카운터
      </button>
      <ProfileBanner />
      <ProfileMain />
    </Styled_ProfilePage>
  );
};
