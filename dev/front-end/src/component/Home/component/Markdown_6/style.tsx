// # src/component/Home/component/Markdown_6/style.tsx

// ## Documentation ==========================================================
/** */

// ## Import Declaration =====================================================

// ### API & Library:

import Styled from 'styled-components';

// ### Style:

import githubMarkdownCss from 'github-markdown-css/github-markdown.css';

// ## Style ==================================================================

export const Styled_MarkdownBody = Styled.div`
  ${githubMarkdownCss}

  & .markdown-body del {
    text-decoration: line-through;
  }
`;
