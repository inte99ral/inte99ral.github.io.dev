// -- API & Library
import React, { MouseEvent, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { appState } from 'api/recoil/store';

// -- Styles
import { Styled_ProfilePage } from './style';

// -- Components
import { Aside } from './components/Aside';
import { Section00 } from './components/Section00';
import { Section01 } from './components/Section01';

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
      Array.from(document.getElementsByClassName('section')).map((item: Element) =>
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

    scrollArr = Array.from(document.getElementsByClassName('section')).map(
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
    scrollArr = Array.from(document.getElementsByClassName('section')).map(
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
      <Section00 isActive={scrollState == 0} />
      <Section01 isActive={scrollState == 1} />
    </Styled_ProfilePage>
  );
};
