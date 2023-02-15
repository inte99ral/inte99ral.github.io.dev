//>> API & Library
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { count } from 'store';

//>> Styles
import { Styled_ProfileRow2 } from './style';

export const ProfileRow2 = () => {
  //>> Init
  const [counter, setCounter] = useRecoilState(count);

  //>> LifeCycle
  useEffect(() => console.log('테스트완료'), [counter]);

  return (
    <Styled_ProfileRow2 className="profile-row-2 outer">
      <div>프로필1 : {counter}</div>
    </Styled_ProfileRow2>
  );
};
