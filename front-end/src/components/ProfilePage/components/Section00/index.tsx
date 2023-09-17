// -- API & Library
import React from 'react';

// -- Component

// -- Style
import {
  Styled_Section,
  Styled_SectionContent,
  Styled_SectionContentTextFX,
  Styled_SectionContentBtnbox,
  Styled_SectionContentLinkbox,
} from './style';

// -- Interface & Type
interface propsInf {
  isActive: boolean;
}

export const Section00 = ({ isActive }: propsInf) => {
  // -- Return
  return (
    <>
      {isActive ? (
        <Styled_Section className="section">
          <Styled_SectionContent className="section-content">
            <h1>
              안녕하세요, <span>박준혁</span>입니다.
            </h1>
            <Styled_SectionContentTextFX className="section-content-textFX">
              <h3>Front-end Developer</h3>
            </Styled_SectionContentTextFX>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil molestias quis
              fuga recusandae quaerat sit doloremque, corporis voluptate error ab iste, ipsa a
              dignissimos. Quo,
            </p>

            <Styled_SectionContentBtnbox className="btn-box">
              <a href="#" className="btn">
                Hire Me
              </a>
              <a href="#" className="btn">
                Let&#39;s Talk
              </a>
            </Styled_SectionContentBtnbox>
            <Styled_SectionContentLinkbox>
              <a href="#" className="btn"></a>
            </Styled_SectionContentLinkbox>
          </Styled_SectionContent>
        </Styled_Section>
      ) : (
        <Styled_Section className="section" />
      )}
    </>
  );
};
