// -- API & Library
import React, { MouseEvent, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { appState } from 'api/recoil/store';

// -- Styles
import { Styled_ProfilePage } from './style';

// -- Components
import { ProfileSection01 } from './components/ProfileSection01';
import { ProfileSection02 } from './components/ProfileSection02';
import { ProfileSection03 } from './components/ProfileSection03';

export const ProfilePage = () => {
  // -- Init
  const app = useRecoilValue(appState);
  let viewHeight = window.innerHeight;
  let scrollArr = [0, viewHeight * 1, viewHeight * 1.5];
  let scrollIndex = 0;

  // -- Methods
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
      return;
    }

    if (app.scrollTop > scrollArr[scrollIndex + 1] - viewHeight) {
      app.classList.add('smooth');
      app.scrollTop = scrollArr[++scrollIndex];
      return;
    }
  };

  const handleResize = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    if (!app) return;

    viewHeight = window.innerHeight;
    scrollArr = [0, viewHeight * 1, viewHeight * 1.5];
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
      <ProfileSection01 />
      <ProfileSection02 />
      <ProfileSection03 />
    </Styled_ProfilePage>
  );
};
