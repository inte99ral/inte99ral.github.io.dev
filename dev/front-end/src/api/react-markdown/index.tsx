// # src/api/react-markdown/index.tsx

// ## Documentation ==========================================================
/**
 * @description
 *
 * 마크다운 양식을 읽는 리액트 컴포넌트 API 입니다.
 *
 * @dependencies
 * - [x] react-markdown
 * - [x] github-markdown-css
 * - [x] remark-gfm
 * - [x] remark-math
 * - [x] rehype-raw
 * - [x] rehype-sanitize
 * - [x] rehype-katex
 * - [x] react-syntax-highlighter
 * - [x] @types/react-syntax-highlighter
 *
 * @author inte99ral
 * @version 2024-12-15
 */

// ## Import Declaration =====================================================

// ### API & Library:

import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
// import rehypeRaw from 'rehype-raw';

// ### Style:
import { Styled_MarkDown } from './style';
import 'github-markdown-css/github-markdown.css';

// ## Interface & Class ======================================================

interface propsType {
  content: string;
}

// ## Component ==============================================================

export const Markdown = ({ content }: propsType) => {
  return (
    <Styled_MarkDown>
      <ReactMarkdown className={'markdown-body'} remarkPlugins={[gfm]}>
        {content}
      </ReactMarkdown>
    </Styled_MarkDown>
  );
};
