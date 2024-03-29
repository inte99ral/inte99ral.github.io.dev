// -- API & Library
import Styled from 'styled-components';

export const Styled_Section = Styled.div`
  min-height: 100vh;
  width: 120%;
  padding-left: 12%;

  display: flex;
  align-items: center;

  background: var(--color-sub);
  // background: red;
`;

export const Styled_SectionContent = Styled.div`
  width: clamp(19.2rem,48vw,48rem);
`;

export const Styled_SectionContentTextFX = Styled.div`
  margin-top: 1rem;

  & h3 {
    color: transparent;
    -webkit-text-stroke: .7px var(--color-reverse);
  }
`;

export const Styled_SectionContentBtnbox = Styled.div`
  height: 4rem;
  width: clamp(9.6rem,24vw,24rem);

  display: flex;
  justify-content: space-between;

  & a {
    position: relative;
    height: 100%;
    width: 45%;

    margin-top: 2rem;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    border: 0.2rem solid var(--color-reverse);
    border-radius: 0.8rem;

    font-weight: 1000;
    letter-spacing: 0.1rem;

    overflow: hidden;

    transition: 0.5s;
  }

  & a:nth-child(1) {
    background-color: var(--color-reverse);
    color: var(--color-main);
  }

  & a:hover {
    color: var(--color-main);
  }

  & a:hover:nth-child(1) {
    color: var(--color-reverse);
  }

  & a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 0%;
    background: var(--color-reverse);
    z-index: -1;
    transition: 0.5s;
  }

  & a:nth-child(1)::before {
    background: var(--color-main);
  }

  & a:hover::before {
    width: 100%;
  }
`;

export const Styled_SectionLinkbox = Styled.div`
  position: absolute;
  bottom: 1rem;
  
  height: 4rem;
  width: clamp(9.6rem,12vw,12rem);
  display: flex;
  justify-content: space-between;
  align-items: center;

  & a {
    position: relative;
    height: 2.5rem;
    width: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: 1.5rem;

    border: 0.2rem solid var(--color-reverse);
    border-radius: 50%;

    overflow: hidden;
  }

  & a:hover * {
    transition: 0.5s;
    color: var(--color-main);
  }

  & a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 0%;
    background: var(--color-reverse);
    z-index: -1;
    transition: 0.5s;
  }

  & a:hover::before {
    width: 100%;
  }
`;

// -- 삭제 예정

export const Styled_SectionCardbox = Styled.div`
  position: absolute;
  top: 0;
  right: 8%;

  height: 100%;
  width: clamp(19.2rem,48vw,48rem);
  display: flex;
  justify-content: center;
  align-items: center;

  // background: gray;
  border: 0.1em red solid;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: -10%;
    right: 10%;

    height: 50%;
    aspect-ratio: 1 / 1;

    border-radius: 50%;
    background: linear-gradient(#f00, #f0f);
    // clip-path: circle(30% at 60% 90%);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;
    background: linear-gradient(#2196f3, #e91e63);
    clip-path: circle(20% at 90% 60%);
  }
`;

export const Styled_SectionCardBubble0 = Styled.div`
  position: absolute;
  bottom: -10%;
  right: 10%;

  width: 50%;
  aspect-ratio: 1 / 1;

  border-radius: 50%;
  background: linear-gradient(#f00, #f0f);
`;

export const Styled_SectionImgbox = Styled.div`
  position: absolute;
  top: 0;
  right: 10%;

  height: 100%;
  width: 40%;

  background: transparent;

  // background-image: url();
  background-repeat: no-repeat;
  background-size: cover;

  // border: 2px solid red;

  transition: 0.5s;



  &:hover {
    opacity: 0.5;
  }
`;
