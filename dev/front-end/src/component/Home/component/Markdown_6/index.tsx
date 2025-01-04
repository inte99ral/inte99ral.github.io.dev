// # src/component/Home/component/Markdown_6/index.tsx

// ## Import Declaration =====================================================

// ### API & Library:

import React, { FC } from 'react';
import Markdown from 'react-markdown';
import GFM from 'remark-gfm';
import RAW from 'rehype-raw';
import STZ from 'rehype-sanitize';

// ### Style:
import { Styled_MarkdownBody } from './style';

// ## Component ==============================================================

// ### Markdown_6
export const Markdown_6: FC<{ children: string }> = ({ children }) => {
  // #### Variable:
  // ##### githubSchema
  /**
   * @description
   *
   * GitHub 스타일의 커스텀 보안 스키마 입니다.
   *
   * - githubSchema
   *   - attributes : 태그의 허용할 옵션
   *     - '*' : 모든 태그에서 허용할 옵션
   *     - 『HTML_TAG』: 해당 태그에서 허용할 옵션
   *     - code : 코드 블럭에서 허용할 옵션 및 언어
   *       - /^language-./ : 정규표현식, 모든 언어 옵션 허용
   *       - 'language-cpp' : C++
   *       - 'language-csharp' : C#
   *       - 'language-go' : Go
   *       - 'language-java' : Java
   *       - {'language-javascript' | 'language-typescript'} : {JavaScript | TypeScript}
   *       - 'language-php' : PHP
   *       - 'language-python' : Python
   *       - 'language-ruby' : Ruby
   *       - 'language-rust' : Rust
   *       - {'language-shell' | 'language-bash'} : Shell
   *       - 'language-swift': Swift
   *       - 'language-sql' : SQL
   *       - 'language-kotlin' : Kotlin
   *   - tagNames : 허용할 태그
   *   - protocols : 허용하는 프로토콜 보안 설정
   *   - clobberPrefix
   *   - clobber
   *   - strip
   *   - allowComments
   *   - allowDoctypes
   */
  const githubSchema = {
    attributes: {
      '*': ['className', 'id', 'align'],
      input: ['type', 'checked', 'disabled'],
      img: ['src', 'alt', 'title', 'width', 'height'],
      code: [/^language-./],
      a: ['href', 'title', 'target', 'user-mention', 'team-mention', 'issue-link', 'commit-link'],
    },
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
      'sup',
      'sub',
    ],
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
      <div>Markdown #6</div>
      <Styled_MarkdownBody>
        <Markdown
          className={'markdown-body'}
          remarkPlugins={[GFM]}
          rehypePlugins={[RAW, [STZ, githubSchema]]} // <--
        >
          {children}
        </Markdown>
      </Styled_MarkdownBody>
    </>
  );
};
