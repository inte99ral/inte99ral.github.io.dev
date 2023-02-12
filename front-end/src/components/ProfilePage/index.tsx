// API & Library
import React, { useRef, useEffect } from 'react';

// Styles
import { Styled_ProfilePage } from './style';

// Components
import { ProfileBanner } from './components/ProfileBanner';
import { ProfileMain } from './components/ProfileMain';

export const ProfilePage = () => {
  // Init
  const ProfilePage = useRef<HTMLDivElement>(null);

  // Methods
  const handleScroll = () => {
    // console.log('scrolled');
    console.log(ProfilePage.current?.scrollTop);
  };

  // LifeCycle
  useEffect(() => {
    // console.log('걍때워넣1음');
    window.addEventListener('keypress', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  return (
    <Styled_ProfilePage className="profile-page" ref={ProfilePage}>
      <ProfileBanner />
      <ProfileMain />
    </Styled_ProfilePage>
  );
};
