// -- API & Library
import React, { useRef, useEffect } from 'react';

// -- Styles
import { Styled_ProfileBackground3Dtest } from './style';

export const ProfileBackground3Dtest = () => {
  // -- Init
  const checkbox = useRef<HTMLInputElement>(null);
  const section = useRef<HTMLDivElement>(null);

  // -- Hooks
  useEffect(() => {
    checkbox.current?.addEventListener('change', () => {
      if (section.current) {
        section.current.style.transformStyle = checkbox.current?.checked ? 'preserve-3d' : 'flat';
        section.current.style.transform = checkbox.current?.checked
          ? 'rotate3d(1, 1, 1, 30deg)'
          : 'rotate3d(1, 1, 1, 0deg)';
      }
    });
    return;
  });

  // -- Return
  return (
    <Styled_ProfileBackground3Dtest>
      <section ref={section}>
        <div className="face front">1</div>
        <div className="face back">2</div>
        <div className="face right">3</div>
        <div className="face left">4</div>
        <div className="face top">5</div>
        <div className="face bottom">6</div>
      </section>

      <div className="checkbox">
        <label htmlFor="preserve">
          <code>preserve-3d</code>
        </label>
        <input type="checkbox" ref={checkbox} defaultChecked={true} />
      </div>
    </Styled_ProfileBackground3Dtest>
  );
};
