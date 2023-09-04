// -- API & Library
import React, { MouseEvent, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { appState } from 'api/recoil/store';

// -- Styles
import { Styled_ProfilePage } from './style';

// -- Components
import { Aside } from './components/Aside';
import { ProfileSection00 } from './components/ProfileSection00';
import { ProfileSection01 } from './components/ProfileSection01';
import { ProfileSection02 } from './components/ProfileSection02';
import { ProfileSection03 } from './components/ProfileSection03';
import { ProfileSection04 } from './components/ProfileSection04';
import { ProfileSection05 } from './components/ProfileSection05';

export const ProfilePage = () => {
  // -- Init
  const app = useRecoilValue(appState);
  const [scrollState, setScrollState] = useState(0);
  let scrollArr = [0];
  let scrollIndex = 0;

  // -- Methods
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    console.log(
      Array.from(document.getElementsByClassName('profile-section')).map((item: Element) =>
        Math.round(item.getBoundingClientRect().top + app.scrollTop),
      ),
    );
  };

  const handleScroll = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    if (!app) return;

    if (scrollArr.includes(app.scrollTop)) {
      app.classList.remove('smooth');
      return;
    }

    if (app.classList.contains('smooth')) return;

    if (app.scrollTop < scrollArr[scrollIndex]) {
      app.classList.add('smooth');
      app.scrollTop = scrollArr[--scrollIndex];
      setScrollState(scrollIndex);
      return;
    }

    if (app.scrollTop > scrollArr[scrollIndex + 1] - window.innerHeight) {
      app.classList.add('smooth');
      app.scrollTop = scrollArr[++scrollIndex];
      setScrollState(scrollIndex);
      return;
    }
  };

  const handleResize = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    if (!app) return;

    scrollArr = Array.from(document.getElementsByClassName('profile-section')).map(
      (item: Element) => item.getBoundingClientRect().top + app.scrollTop,
    );

    if (app.scrollTop != scrollArr[scrollIndex]) {
      app.classList.add('smooth');
      app.scrollTop = scrollArr[scrollIndex];
    }
  };

  // -- Hooks
  useEffect(() => {
    if (!app) return;

    app.classList.remove('smooth');
    app.scrollTop = 0;
    scrollIndex = 0;
    scrollArr = Array.from(document.getElementsByClassName('profile-section')).map(
      (item: Element) => item.getBoundingClientRect().top,
    );

    app.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      app.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      app.classList.remove('smooth');
    };
  }, [app]);

  // -- Return
  return (
    <Styled_ProfilePage className="profile-page" onClick={handleClick}>
      <Aside />
      <ProfileSection00 isActive={scrollState == 0} />
      <ProfileSection01 isActive={scrollState == 1} />
      <ProfileSection02 isActive={scrollState == 2} />
      <ProfileSection03 isActive={scrollState == 3} />
      <ProfileSection04 isActive={scrollState == 4} />
      <ProfileSection05 isActive={scrollState == 5} />
    </Styled_ProfilePage>
  );
};
