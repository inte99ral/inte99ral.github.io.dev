// API & Library
import React from 'react';

// Styles
import {
  Styled_ProfileRow2,
  Styled_ProfileRow1Container,
  Styled_ProfileRow1ContainerPicture,
} from './style';

export const ProfileRow2 = () => {
  return (
    <Styled_ProfileRow2 className="profile-row1 outer">
      <Styled_ProfileRow1Container>
        <Styled_ProfileRow1ContainerPicture className="profile-row1-container-picture inner" />
      </Styled_ProfileRow1Container>
    </Styled_ProfileRow2>
  );
};
