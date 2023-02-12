// API & Library
import React, { useRef, useEffect } from 'react';

// Styles
import { Styled_ProfilePage } from './style';

// Components
import { ProfileBanner } from './components/ProfileBanner';
import { ProfileMain } from './components/ProfileMain';

export const ProfilePage = () => {
  // Init
  const ProfileBannerPhoto = useRef<HTMLDivElement>(null);

  // Methods
  const handleScroll = () => {
    // console.log('scrolled');
    console.log(ProfileBannerPhoto.current?.scrollTop);
  };

  // LifeCycle
  useEffect(() => {
    console.log('걍때워넣음');
    // window.addEventListener('keypress', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  return (
    <Styled_ProfilePage className="profile-page">
      <ProfileBanner />
      <ProfileMain />
    </Styled_ProfilePage>
  );
};
