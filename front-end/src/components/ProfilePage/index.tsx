// -- API & Library
import React, { MouseEvent, useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isSmoothState } from 'api/recoil/store';

// -- Styles
import { Styled_ProfilePage } from './style';

// -- Components
import { ProfileSection01 } from './components/ProfileSection01';
import { ProfileSection02 } from './components/ProfileSection02';
import { ProfileSection03 } from './components/ProfileSection03';

export const ProfilePage = () => {
  // -- Init
  const [isSmooth, setIsSmooth] = useRecoilState(isSmoothState);

  const scrollArr = [0, 961, 2242];
  const viewHeight = window.innerHeight;

  const [prevScroll, setPrevScroll] = useState(0);

  const app = document.getElementById('app') as HTMLDivElement;

  // -- Methods
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleClick2 = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // const target = document.getElementsByClassName('app')[0];
    // console.log(window.pageYOffset);
    // setScroll(window.innerHeight);
  };

  const handleScroll = (e: Event) => {
    const nextScroll = app.scrollTop;
    console.log('예아');
  };

  // -- Hooks
  useEffect(() => {
    setIsSmooth(false);
    app.scrollTop = 0;
    app.addEventListener('scroll', handleScroll);

    return () => {
      setIsSmooth(false);
      app.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // -- Return
  return (
    <Styled_ProfilePage className="profile-page" onClick={handleClick2}>
      <ProfileSection01 />
      <ProfileSection02 />
      <ProfileSection03 />
    </Styled_ProfilePage>
  );
};
