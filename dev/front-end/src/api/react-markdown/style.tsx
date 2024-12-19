// # src/component/_EXAMPLE_/style.tsx

// ## Documentation ==========================================================
/**
 * @dependencies
 * github-markdown-css
 */

// ## Import Declaration =====================================================

// ### API & Library:

import Styled from 'styled-components';

// ### Style:

import externalCss from 'github-markdown-css/github-markdown.css';

// ## Style ==================================================================

export const Styled_MarkDown = Styled.div`
  ${externalCss}

  color: red;

  & .markdown-body del {
    text-decoration: line-through;
  }
`;
