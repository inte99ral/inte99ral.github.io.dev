// # src/component/Home/component/Markdown_2/index.tsx

// ## Import Declaration =====================================================

// ### API & Library:

import React, { FC } from 'react';
import Markdown from 'react-markdown';

// ### Style:

import 'github-markdown-css/github-markdown.css'; // <--

// ## Component ==============================================================

export const Markdown_2: FC<{ children: string }> = ({ children }) => {
  return (
    <>
      <div>Markdown #2</div>
      <div>
        <Markdown className={'markdown-body'}>{children}</Markdown> {/* <--  */}
      </div>
    </>
  );
};
