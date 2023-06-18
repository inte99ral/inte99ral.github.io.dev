// -- API & Library
import React, { MouseEvent, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { appState } from 'api/recoil/store';

// -- Styles
import { Styled_ProfilePage } from './style';

// -- Components
import { ProfileSection01 } from './components/ProfileSection01';
import { ProfileSection02 } from './components/ProfileSection02';
import { ProfileSection03 } from './components/ProfileSection03';

export const ProfilePage = () => {
  // -- Init
  const [app, setApp] = useRecoilState(appState);
  const scrollArr = [0, 961, 2242];

  // -- Methods
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleClick2 = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    app.classList.add('smooth');
    app.scrollTop = 0;

    // setApp(document.getElementById('app2') as HTMLDivElement);
    // setIsSmooth(true);
    // setIsSmooth(false);
    // console.log(document.documentElement.scrollTop);
    // if (app == undefined) console.log(app);
    // else app.scrollTop = 0;
    // app.scrollTop = 0;
    // console.log(prevScroll);
  };

  const handleScroll = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    if (app.scrollTop == 0) console.log('[ 0 ]');

    // if (app == undefined) return;
    // if (!scrollArr.includes(app.scrollTop)) return;
    // if (!scrollArr.includes(app.scrollTop)) return;
    // nextScroll = app.scrollTop;
    // if (nextScroll < prevScroll) {
    //   console.log(`[UP] next: ${nextScroll} prev: ${prevScroll}`);
    //   // app.scrollTop = scrollArr[--scrollIndex];
    //   app.scrollTop = scrollArr[0];
    // } else {
    //   console.log(`[DOWN] next: ${nextScroll} prev: ${prevScroll}`);
    //   // app.scrollTop = scrollArr[++scrollIndex];
    // }
    // prevScroll = nextScroll;
  };

  // -- Hooks
  useEffect(() => {
    console.log('error debug 1');
  }, []);

  useEffect(() => {
    if (!app) return;

    app.classList.remove('smooth');
    app.scrollTop = 0;
    app.addEventListener('scroll', handleScroll);

    return () => app.removeEventListener('scroll', handleScroll);
  }, [app]);

  // -- Return
  return (
    <Styled_ProfilePage className="profile-page" onClick={handleClick2}>
      <ProfileSection01 />
      <ProfileSection02 />
      <ProfileSection03 />
    </Styled_ProfilePage>
  );
};
