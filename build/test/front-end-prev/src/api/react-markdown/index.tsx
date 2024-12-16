// # src/api/react-markdown/index.tsx

// ## Documentation ==========================================================
/**
 * @description
 *
 * 마크다운 양식을 읽는 리액트 컴포넌트 API 입니다.
 *
 * @author inte99ral
 * @version 2024-12-15
 */

// ## Import Declaration =====================================================

// ### API & Library:

import React from 'react';
import ReactMarkdown from 'react-markdown';
// import remarkGfm from "remark-gfm";
// import rehypeRaw from 'rehype-raw';

// ### Style:
import 'github-markdown-css/github-markdown.css';

// ## Interface & Class ======================================================

interface propsType {
  content: string;
}

// ## Component ==============================================================

export const Markdown = ({ content }: propsType) => {
  return <ReactMarkdown>{content}</ReactMarkdown>;
};
