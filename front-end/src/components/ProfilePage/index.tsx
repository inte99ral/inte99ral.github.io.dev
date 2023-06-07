// -- API & Library
import React, { MouseEvent, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { scroll } from 'api/recoil/store';

// -- Styles
import { Styled_ProfilePage } from './style';

// -- Components
import { ProfileSection01 } from './components/ProfileSection01';
import { ProfileSection02 } from './components/ProfileSection02';

export const ProfilePage = () => {
  // -- Init
  const setScroll = useSetRecoilState(scroll);

  // -- Methods
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setScroll(0);
  };

  // -- Hooks
  useEffect(() => {
    return;
  }, []);

  // -- Return
  return (
    <Styled_ProfilePage className="profile-page" onClick={handleClick}>
      <ProfileSection01 />
      <ProfileSection02 />
    </Styled_ProfilePage>
  );
};
