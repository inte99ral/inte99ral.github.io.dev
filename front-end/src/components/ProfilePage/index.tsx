//>> API & Library
import React, { useRef, useEffect } from 'react';

//>> Styles
import { Styled_ProfilePage } from './style';

//>> Components
import { ProfileBanner } from './components/ProfileBanner';
import { ProfileMain } from './components/ProfileMain';

export const ProfilePage = () => {
  //>> Init
  const ProfilePage = useRef<HTMLDivElement>(null);

  //>> Methods
  const test = () => {
    // setScroll((x) => x + 1);
  };

  //>> LifeCycle
  useEffect(() => {
    ProfilePage.current?.addEventListener('scroll', test);
    return () => ProfilePage.current?.removeEventListener('scroll', test);
  }, []);

  //>> Return
  return (
    <Styled_ProfilePage className="profile-page" ref={ProfilePage}>
      {/* <div>테스트용: {getScroll}</div> */}
      <ProfileBanner />
      <ProfileMain />
    </Styled_ProfilePage>
  );
};
