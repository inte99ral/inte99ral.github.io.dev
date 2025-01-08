// # src/api/markdown/style.tsx

// ## Documentation ==========================================================
/**
 *
 * 마크다운 양식의 세부적인 스타일을 조정합니다.
 *
 * @dependencies
 * - [x] github-markdown-css
 * - [x] katex
 */

// ## Import Declaration =====================================================

// ### API & Library:

import Styled from 'styled-components';

// ### Style:

import githubMarkdownCss from 'github-markdown-css/github-markdown.css';
import katexCss from 'katex/dist/katex.min.css';

// ## Style ==================================================================

export const Styled_Markdown = Styled.div`
  ${githubMarkdownCss}
  ${katexCss}

  & .syntax-highlighter { background-color: transparent !important; }
  & .katex msup mn { font-size: 0.7em; }
  & .katex mrow { margin-top: 0.1rem; }
  & .markdown-body del { text-decoration: line-through; }
`;
