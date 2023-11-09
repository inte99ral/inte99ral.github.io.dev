// -- API & Library
import React from 'react';
import { BsGithub } from 'react-icons/bs';

// -- Component
import { Cardbox } from './components/Cardbox';

// -- Style
import {
  Styled_Section,
  Styled_SectionContent,
  Styled_SectionContentTextFX,
  Styled_SectionContentBtnbox,
  Styled_SectionLinkbox,
  Styled_SectionCardbox,
  Styled_SectionImgbox,
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
          <Cardbox />
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

            <Styled_SectionContentBtnbox className="section-content-btn-box">
              <a href="#">Hire Me</a>
              <a href="#">&#39;Or Not</a>
            </Styled_SectionContentBtnbox>
          </Styled_SectionContent>
          <Styled_SectionLinkbox className="section-linkbox">
            <a href="#">
              <BsGithub />
            </a>
            <a href="#">
              <BsGithub />
            </a>
            <a href="#">
              <BsGithub />
            </a>
          </Styled_SectionLinkbox>
        </Styled_Section>
      ) : (
        <Styled_Section className="section" />
      )}
    </>
  );
};
