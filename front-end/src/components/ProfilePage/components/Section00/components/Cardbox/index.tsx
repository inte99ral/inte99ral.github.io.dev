// -- API & Library
import React from 'react';

// -- Asset

// -- Component
import { Card } from './components/Card';

// -- Style
import {
  Styled_Cardbox,
  Styled_CardboxBubble0,
  Styled_CardboxBubble1,
  Styled_CardboxBubble2,
} from './style';

// -- Interface & Type

export const Cardbox = () => {
  // -- Init

  // -- Method

  // -- Hook

  // -- Return
  return (
    <Styled_Cardbox className="profile-section-cardbox">
      <Styled_CardboxBubble0 />
      <Styled_CardboxBubble1 />
      <Styled_CardboxBubble2 />
      <Card>
        <div className="content">
          <h2>02</h2>
          <h3>Card Two</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae esse, quam asperiores
            accusantium doloribus id assumenda suscipit perferendis! Illum natus quam nisi fuga
            nesciunt maiores vitae expedita culpa soluta earum!
          </p>
          <a href="#">Read More</a>
        </div>
      </Card>
    </Styled_Cardbox>
  );
};
