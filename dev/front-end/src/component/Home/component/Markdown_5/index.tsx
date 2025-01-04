// # src/component/Home/component/Markdown_5/index.tsx

// ## Import Declaration =====================================================

// ### API & Library:

import React, { FC } from 'react';
import Markdown from 'react-markdown';
import GFM from 'remark-gfm';
import RAW from 'rehype-raw';
import STZ from 'rehype-sanitize'; // <--

// ### Style:

import 'github-markdown-css/github-markdown.css';

// ## Component ==============================================================

export const Markdown_5: FC<{ children: string }> = ({ children }) => {
  // * GitHub 스타일의 보안 스키마 정의
  const githubSchema = {
    // ** 태그의 허용할 속성들을 명시적으로 정의
    attributes: {
      // *** 모든 태그에게 허용하는 속성
      '*': ['className', 'id', 'align'],

      // *** 허용하는 코드 블록 언어 속성
      code: ['language-js', 'language-python', 'language-ruby', 'language-java'],

      // *** 허용하는 링크 속성
      a: ['href', 'title', 'target', 'user-mention', 'team-mention', 'issue-link', 'commit-link'],

      // *** 허용하는 이미지 태그 속성
      img: ['src', 'alt', 'title', 'width', 'height'],

      // *** 허용하는 체크박스 속성
      input: ['type', 'checked', 'disabled'],
    },

    // ** 허용하는 HTML 태그 명
    tagNames: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'p',
      'div',
      'strong',
      'em',
      'del',
      'a',
      'img',
      'ol',
      'ul',
      'li',
      'input',
      'pre',
      'code',
      'blockquote',
      'table',
      'thead',
      'tbody',
      'tr',
      'th',
      'td',
      'br',
      'hr',
      'details',
      'summary',
    ],

    // ** 추가 보안 설정
    protocols: {
      href: ['http', 'https', 'mailto', 'tel', '#'],
      src: ['http', 'https'],
    },
    clobberPrefix: 'user-content-',
    clobber: ['name', 'id'],
    strip: ['script', 'style', 'xml'],
    allowComments: false,
    allowDoctypes: false,
  };

  return (
    <>
      <div>Markdown #5</div>
      <div>
        <Markdown
          className={'markdown-body'}
          remarkPlugins={[GFM]}
          rehypePlugins={[RAW, [STZ, githubSchema]]} // <--
        >
          {children}
        </Markdown>
      </div>
    </>
  );
};
