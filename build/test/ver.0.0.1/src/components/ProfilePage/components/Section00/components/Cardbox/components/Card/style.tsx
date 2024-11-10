// -- API & Library
import Styled from 'styled-components';

export const Styled_Card = Styled.div`
  width: 280px;
  height: 400px;
  margin: 30px;
  box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);

  & .content {
    padding: 1rem;
    text-align: center;
    transform: translateY(100px);
    opacity: 0;
    transition: 0.5s;
  }

  &:hover .content {
    transform: translateY(0px);
    opacity: 1;
  }

  & .content h2 {
    position: absolute;
    top: -6rem;
    right: -1rem;
    font-size: 8rem;
    opacity: 0.05;
    pointer-events: none;
  }

  & .content h3 {
    font-size: 1.8rem;
  }

  & .content p {
    font-size: 1rem;
    font-weight: 300;
  }

  & .content a {
    display: inline-block;
    padding: 8px 20px;
    margin-top: 15px;
    color: var(--color-main);
    background: var(--color-reverse);
    border-radius: 20px;
    font-weight: 500;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
`;
