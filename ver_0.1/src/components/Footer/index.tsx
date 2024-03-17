// -- API & Library
import React from 'react';
import { useRecoilValue } from 'recoil';
import { isDarkState } from 'api/recoil/store';

// -- Styles
import {
  Styled_Footer,
  Styled_FooterLogoDark,
  Styled_FooterLogoLight,
  Styled_FooterLogoAnnotation,
} from './style';

export const Footer = () => {
  // -- Init
  const isDark = useRecoilValue<boolean>(isDarkState);

  // -- Return
  return (
    <Styled_Footer className="footer">
      {isDark ? <Styled_FooterLogoDark /> : <Styled_FooterLogoLight />}
      <Styled_FooterLogoAnnotation>There&#39;s no vector in our lives</Styled_FooterLogoAnnotation>
    </Styled_Footer>
  );
};
