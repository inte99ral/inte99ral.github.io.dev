// -- API & Library
import React from 'react';

// -- Component
import { SectionCard } from './components/sectionCard';

// -- Style
import { Styled_Section } from './style';

// -- Interface & Type
interface propsInf {
  isActive: boolean;
}

export const Section01 = ({ isActive }: propsInf) => {
  // -- Return
  return (
    <>
      {isActive ? (
        <Styled_Section className="section">
          <SectionCard>
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
          </SectionCard>
        </Styled_Section>
      ) : (
        <Styled_Section className="section" />
      )}
    </>
  );
};
