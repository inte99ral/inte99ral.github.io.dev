// -- API & Library
import React from 'react';
import { useRecoilValue } from 'recoil';
import { isDark } from 'api/recoil/store';

// -- Styles
import {
  Styled_Footer,
  Styled_FooterLogoDark,
  Styled_FooterLogoLight,
  Styled_FooterLogoAnnotation,
} from './style';

export const Footer = () => {
  // -- Init
  const getIsDark = useRecoilValue<boolean>(isDark);

  // -- Return
  return (
    <Styled_Footer className="footer outer">
      {getIsDark ? <Styled_FooterLogoDark /> : <Styled_FooterLogoLight />}
      <Styled_FooterLogoAnnotation>There&#39;s no vector in life</Styled_FooterLogoAnnotation>
    </Styled_Footer>
  );
};
