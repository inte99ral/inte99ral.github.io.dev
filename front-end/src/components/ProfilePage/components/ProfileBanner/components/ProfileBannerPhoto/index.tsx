// -- API & Library
import React, { useRef, useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { scroll } from 'api/recoil/store';

// -- Styles
import {
  Styled_ProfileBannerPhoto,
  Styled_ProfileBannerPhoto1,
  Styled_ProfileBannerPhoto2,
} from './style';

export const ProfileBannerPhoto = () => {
  // -- init
  const [getScroll, setScroll] = useRecoilState(scroll);
  const [getRight, setRight] = useState<number>(12);
  const profileBannerPhoto = useRef<HTMLDivElement>(null);

  // -- Methods
  const handleClick = () => {
    return console.log(getRight);
  };

  // -- Hooks
  useEffect(() => {
    profileBannerPhoto.current?.addEventListener('click', handleClick);
    return () => profileBannerPhoto.current?.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    setRight(getScroll > 66 ? 11 : getScroll / 6);
  }, [getScroll]);

  // -- return
  return (
    <Styled_ProfileBannerPhoto className="profile-banner-photo inner" ref={profileBannerPhoto}>
      <Styled_ProfileBannerPhoto1 right={getRight} />
      <Styled_ProfileBannerPhoto2 right={getRight} />
    </Styled_ProfileBannerPhoto>
  );
};
