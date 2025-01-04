// # src/component/Home/component/Markdown_7/style.tsx

// ## Documentation ==========================================================
/** */

// ## Import Declaration =====================================================

// ### API & Library:

import Styled from 'styled-components';

// ### Style:

import githubMarkdownCss from 'github-markdown-css/github-markdown-light.min.css';
import katexCss from 'katex/dist/katex.min.css';

// ## Style ==================================================================

export const Styled_MarkdownBody = Styled.div`
  ${githubMarkdownCss}
  ${katexCss}

  & .katex msup mn { margin-top: 0.1rem; font-size: 0.7em; }
  & .markdown-body del { text-decoration: line-through; }
`;
