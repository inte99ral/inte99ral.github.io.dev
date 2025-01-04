// # src/component/Home/component/Markdown_8/index.tsx

// ## Import Declaration =====================================================

// ### API & Library:

import React, { FC } from 'react';
import Markdown from 'react-markdown';
import GFM from 'remark-gfm';
import MAT from 'remark-math';
import RAW from 'rehype-raw';
import STZ from 'rehype-sanitize';
import KTX from 'rehype-katex';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// import { github } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// ### Style:
import { Styled_MarkdownBody } from './style';

// ## Component ==============================================================

// ### Markdown_8
export const Markdown_8: FC<{ children: string }> = ({ children }) => {
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
      code: [/^language-./, ['math-inline', 'math-display']], // <--
      a: ['href', 'title', 'target', 'user-mention', 'team-mention', 'issue-link', 'commit-link'],
      span: ['className', 'style'],
      div: ['className', 'style'],
    },
    tagNames: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'p',
      'strong',
      'b',
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
      'span',
      'div',
      'svg',
      'path',
      'annotation',
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

  // const codeStyle = github as { [key: string]: CSSProperties } | undefined;

  // const codeStyle = (typeof github == {[key: string]: CSSProperties})

  // interface CodeStyleType {
  //   [key: string]: React.CSSProperties;
  // }

  // const codeStyle: {
  //   [key: string]: React.CSSProperties;
  // } = github;

  return (
    <>
      <div>Markdown #8</div>
      <Styled_MarkdownBody>
        <Markdown
          className={'markdown-body'}
          remarkPlugins={[GFM, MAT]}
          rehypePlugins={[RAW, [STZ, githubSchema], [KTX, { strict: false, output: 'mathml' }]]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter style={github} language={match[1]} PreTag="div" {...props}>
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {children}
        </Markdown>
      </Styled_MarkdownBody>
    </>
  );
};
