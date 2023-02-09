// API & Library
import React, { useEffect, useRef } from 'react';

// Styles
import {
  Styled_ProfileBanner,
  Styled_ProfileBannerPhoto,
  Styled_ProfileBannerTitle,
  Styled_ProfileBannerSubtitle,
} from './style';

export const ProfileBanner = () => {
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
    <Styled_ProfileBanner className="profile-banner outer">
      <Styled_ProfileBannerPhoto className="profile-banner-photo inner" ref={ProfileBannerPhoto} />
      <Styled_ProfileBannerTitle className="profile-banner-title">
        PARK JUN HYUK
      </Styled_ProfileBannerTitle>
      <Styled_ProfileBannerSubtitle className="profile-banner-subtitle">
        UIᆞUXᆞFront-End Developer
      </Styled_ProfileBannerSubtitle>
    </Styled_ProfileBanner>
  );
};
