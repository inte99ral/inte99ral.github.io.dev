// -- API & Library
import React, { MouseEvent, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { scroll } from 'api/recoil/store';

// -- Styles
import { Styled_ProfilePage } from './style';

// -- Components
import { ProfileSection01 } from './components/ProfileSection01';
import { ProfileSection02 } from './components/ProfileSection02';

export const ProfilePage = () => {
  // -- Init
  const [getScroll, setScroll] = useRecoilState(scroll);

  // -- Methods
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setScroll(0);
  };

  const handleClick2 = (e: MouseEvent) => {
    console.log(window.innerHeight);
    setScroll(window.innerHeight);
  };

  // -- Hooks
  useEffect(() => {
    // console.log('[SCROLL]: ' + getScroll);
  }, [getScroll]);

  // -- Return
  return (
    <Styled_ProfilePage className="profile-page" onClick={handleClick2}>
      <ProfileSection01 />
      <ProfileSection02 />
    </Styled_ProfilePage>
  );
};
