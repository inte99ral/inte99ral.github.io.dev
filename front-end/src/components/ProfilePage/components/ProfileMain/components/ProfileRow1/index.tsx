// -- API & Library
import React from 'react';
import { useRecoilState } from 'recoil';
import { scroll } from 'api/recoil/store';

// -- Styles
import { Styled_ProfileRow1 } from './style';

export const ProfileRow1 = () => {
  const [getScroll, setScroll] = useRecoilState(scroll);

  return (
    <Styled_ProfileRow1 className="profile-row-2 outer">
      <div>프로필1: {getScroll}</div>
    </Styled_ProfileRow1>
  );
};
