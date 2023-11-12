// -- API & Library
import Styled from 'styled-components';

// -- Export
export const Styled_Cardbox = Styled.div`
  position: absolute;
  top: 0;
  right: 8%;

  height: 100%;
  width: clamp(19.2rem,48vw,48rem);
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.1em red solid;
  overflow: hidden;
`;

export const Styled_CardboxBubble0 = Styled.div`
  position: absolute;
  bottom: -5%;
  right: 10%;

  width: 50%;
  aspect-ratio: 1 / 1;

  border-radius: 50%;
  background: linear-gradient(#f00, #f0f);
`;

export const Styled_CardboxBubble1 = Styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 10%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: linear-gradient(#2196f3, #e91e63);
`;

export const Styled_CardboxBubble2 = Styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 10%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: red;
  background: linear-gradient(150deg, #6aa5e3, #6866e9);
  background: linear-gradient(150deg, #fed1c7, #fe8dc6);
  background: linear-gradient(-30deg, #feb683, #ff8993);
  /* background: linear-gradient(-45deg, #8d42ff, #01e973); */
  background: linear-gradient(135deg, #26bbac, #bcfb69);
  background: linear-gradient(-30deg, #b576f6, #9a4fe9);
`;
