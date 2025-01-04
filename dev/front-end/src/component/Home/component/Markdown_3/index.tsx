// # src/component/Home/component/Markdown_3/index.tsx

// ## Import Declaration =====================================================

// ### API & Library:

import React, { FC } from 'react';
import Markdown from 'react-markdown';
import gfm from 'remark-gfm'; // <--

// ### Style:

import 'github-markdown-css/github-markdown.css';

// ## Component ==============================================================

export const Markdown_3: FC<{ children: string }> = ({ children }) => {
  return (
    <>
      <div>Markdown #3</div>
      <div>
        <Markdown
          className={'markdown-body'}
          remarkPlugins={[gfm]} // <--
        >
          {children}
        </Markdown>
      </div>
    </>
  );
};
