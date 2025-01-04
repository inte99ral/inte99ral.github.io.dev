// # src/component/Home/component/Markdown_4/index.tsx

// ## Import Declaration =====================================================

// ### API & Library:

import React, { FC } from 'react';
import Markdown from 'react-markdown';
import GFM from 'remark-gfm';
import RAW from 'rehype-raw'; // <--

// ### Style:

import 'github-markdown-css/github-markdown.css';

// ## Component ==============================================================

export const Markdown_4: FC<{ children: string }> = ({ children }) => {
  return (
    <>
      <div>Markdown #4</div>
      <div>
        <Markdown
          className={'markdown-body'}
          remarkPlugins={[GFM]}
          rehypePlugins={[RAW]} // <--
        >
          {children}
        </Markdown>
      </div>
    </>
  );
};
