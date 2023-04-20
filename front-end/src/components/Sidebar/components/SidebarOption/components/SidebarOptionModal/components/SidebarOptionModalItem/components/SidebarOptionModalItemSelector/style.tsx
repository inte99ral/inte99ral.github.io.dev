// -- API & Library
import Styled from 'styled-components';

export const Styled_SidebarOptionModalItemSelector = Styled.div<{ isTrue: boolean }>`
  height: 30px;
  width: 60px;

  border-radius: 30px;
  background-color: ${({ isTrue }) => (isTrue ? '#0097fa' : 'var(--color-sub)')};
  transition: 0.2s;
  box-shadow: 
    inset 0 2px 6px rgba(0,0,0,0.2),
    inset 0 2px 2px rgba(0,0,0,0.2),
    inset 0 -2px 2px rgba(0,0,0,0.2);

  &::after {
    content: '';
    position: absolute;
    top: 0px;
    left: ${({ isTrue }) => (isTrue ? '30px' : '0')};

    height: 30px;
    width: 30px;

    border-radius: 50%;
    background-color: var(--color-main);
    transform: scale(0.9);
    box-shadow: 0 0 6px rgba(0,0,0,0.2);
    transition: 0.2s;
  }
`;
