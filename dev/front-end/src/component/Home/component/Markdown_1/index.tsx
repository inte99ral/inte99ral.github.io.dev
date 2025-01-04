// # src/component/Home/component/Markdown_1/index.tsx

// ## Import Declaration =====================================================

// ### API & Library:

import React, { FC } from 'react';
import Markdown from 'react-markdown'; // <--

// ## Component ==============================================================

export const Markdown_1: FC<{ children: string }> = ({ children }) => {
  return (
    <>
      <div>Markdown #1</div>
      <div>
        <Markdown>{children}</Markdown>
      </div>
    </>
  );
};
