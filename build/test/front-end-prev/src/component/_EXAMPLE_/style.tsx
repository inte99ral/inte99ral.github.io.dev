// # src/component/_EXAMPLE_/style.tsx

// ## Documentation ==========================================================
/**
 * @author inte99ral
 * @version 2024-11-18
 */

// ## Import Declaration =====================================================

// ### API & Library:

import Styled, { keyframes } from 'styled-components';

// ### Asset:

import img from './asset/image/error.png';

// ## Interface & Class ======================================================

// ### ExampleType
/**
 * 『JS_DOC』
 */
export interface propsType {
  id: number;
  name: string;
}

// ## Variable & Constant ====================================================
// ### Variable:
// ### Animation:

export const popUp = keyframes`
  0% {
    opacity: 0;
    scale: 0;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
`;

// ## Style ==================================================================

export const Styled_Example = Styled.div`
  width: 100vw;
  height: 100vh;
  padding: 14px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: auto;

  background-color: var(--color-sub);
`;

export const Styled_ExampleCard = Styled.div<{ isInner?: boolean }>`
  border-radius: 14px;
  padding: 28px;
  margin: 14px;
  background-color: var(--color-main);

  ${({ isInner }) =>
    isInner
      ? `
        box-shadow: 
          inset 4px 4px 10px -1px rgba(0, 0, 0, 0.25), 
          inset -4px -4px 10px -1px rgba(255, 255, 255, 0.25);
      `
      : `
        box-shadow:
          4px 4px 10px -1px rgba(0, 0, 0, 0.25),
          -4px -4px 10px -1px rgba(255, 255, 255, 0.25); 
      `}
`;

export const Styled_ExampleForProps = Styled.div<propsType>`
  background: ${({ id }) => (id ? 'red' : img)};
  animation: ${popUp} 0.2s;
`;

export const Styled_ExampleTable = Styled.table`
  border-collapse: collapse;

  & * {
    border: 1px solid black;
    padding: 14px;
  } 
`;
