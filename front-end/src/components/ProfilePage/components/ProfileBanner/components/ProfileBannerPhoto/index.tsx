// -- API & Library
import React, { useRef, useEffect } from 'react';
import { useRecoilStateLoadable } from 'recoil';
import { scroll } from 'api/recoil/store';

// -- Styles
import {
  Styled_ProfileBannerPhoto,
  Styled_ProfileBannerPhoto1,
  Styled_ProfileBannerPhoto2,
} from './style';

export const ProfileBannerPhoto = () => {
  // -- init
  const right = 11; // 0 ~ 11
  const [getScroll, setScroll] = useRecoilStateLoadable(scroll);
  const profileBannerPhoto = useRef<HTMLDivElement>(null);

  // -- Methods
  const printScroll = () => {
    console.log(getScroll);
  };

  // -- Hooks
  const handleClick = useEffect(() => {
    profileBannerPhoto.current?.addEventListener('click', printScroll);
    return () => profileBannerPhoto.current?.removeEventListener('click', printScroll);
  }, []);

  // -- return
  return (
    <Styled_ProfileBannerPhoto className="profile-banner-photo inner" ref={profileBannerPhoto}>
      <Styled_ProfileBannerPhoto1 right={right} />
      <Styled_ProfileBannerPhoto2 right={right} />
    </Styled_ProfileBannerPhoto>
  );
};
