// # src/api/markdown/index.tsx

// ## Documentation ==========================================================
/**
 * @description
 *
 * 마크다운 양식을 읽는 리액트 컴포넌트 API 입니다.
 *
 * @dependencies
 * - [x] react-markdown
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

import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown/lib/index';

import GFM from 'remark-gfm';
import MAT from 'remark-math';

import RAW from 'rehype-raw';
import STZ from 'rehype-sanitize';
import KTX from 'rehype-katex';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs as SyntaxStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp';
import java from 'react-syntax-highlighter/dist/esm/languages/hljs/java';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';

// ### Style:
import { Styled_Markdown } from './style';

// ## Variable & Constant ====================================================

const supportedLanguages: string[] = ['cpp', 'java', 'js'];
SyntaxHighlighter.registerLanguage('cpp', cpp);
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('js', js);

// ## Component ==============================================================

// ### Markdown
export const Markdown: FC<{ children: string }> = ({ children }) => {
  // #### Variable:
  // ##### schema
  /**
   * @description
   *
   * 커스텀 보안 정보가 담긴 스키마 입니다.
   *
   * - schema
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
  const schema = {
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

  // ##### components
  /**
   * @description 코드블럭 태그 <code></code> 를 스타일에 맞게 <SyntaxHighlighter></SyntaxHighlighter> 로 변환하는 조건을 정합니다.
   */
  const components = {
    code: ({
      inline,
      className,
      children,
      ...props
    }: {
      inline?: boolean;
      className?: string;
      children: React.ReactNode;
    }) => {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match && supportedLanguages.includes(match[1]) ? (
        <SyntaxHighlighter
          class="syntax-highlighter"
          style={SyntaxStyle}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  } as Components;

  // #### Return:
  return (
    <Styled_Markdown>
      <ReactMarkdown
        className={'markdown-body'}
        remarkPlugins={[GFM, MAT]}
        rehypePlugins={[RAW, [STZ, schema], [KTX, { strict: false, output: 'mathml' }]]}
        components={components}
      >
        {children}
      </ReactMarkdown>
    </Styled_Markdown>
  );
};
