// -- API & Library
import Styled from 'styled-components';

export const Styled_SectionCard = Styled.div`
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
`;
