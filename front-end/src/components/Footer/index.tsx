// -- API & Library
import React from 'react';
import { useRecoilValue } from 'recoil';
import { isDark } from 'api/recoil/store';

// -- Styles
import { Styled_Footer, Styled_Footer_LogoDark, Styled_Footer_LogoLight } from './style';

export const Footer = () => {
  // -- Init
  const getIsDark = useRecoilValue<boolean>(isDark);

  // -- Return
  return (
    <Styled_Footer className="footer outer">
      {getIsDark ? <Styled_Footer_LogoDark /> : <Styled_Footer_LogoLight />}
      <div>ⓒ Scalar Studio. All Rights Reserved.</div>
    </Styled_Footer>
  );
};
