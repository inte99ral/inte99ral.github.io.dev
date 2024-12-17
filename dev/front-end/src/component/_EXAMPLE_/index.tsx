// # src/component/_EXAMPLE_/index.tsx

// ## Documentation ==========================================================
/**
 * React Project 의 컨벤션과 형식에 대한 예제 파일입니다.
 *
 * @examples
 * ```
 * <Example><h1>Hello, world!</h1></Example>
 * ```
 */

// ## Import Declaration =====================================================

// ### API & Library:

import { ReactNode, useState, useEffect } from 'react';
// import ReactMarkdown from 'react-markdown';
// import { getExampleUserlist } from 'api/rest/example';
// import { getPost } from 'api/rest/post';
// import { AiFillSetting } from 'react-icons/ai';

// ### Component:

// ### Style:

import { Styled_Example, Styled_ExampleCard } from './style';

// ### Asset:

// ## Interface & Class ======================================================

interface propsType {
  children: ReactNode;
}

// ## Component ==============================================================

// ### Example
/**
 *
 * @returns
 */
export const Example = ({ children }: propsType) => {
  // #### Variable:

  // const [exampleUserList, setExampleUserList] =
  //   useState<Awaited<ReturnType<typeof getExampleUserlist>>>(); // 타입추론

  const [post, setPost] = useState('');

  // #### Function:

  // #### Hook:

  useEffect(() => {
    (async () => {
      // setExampleUserList(await getExampleUserlist());
      // setPost(await getPost(0));
    })();
  }, []);

  // #### Return:

  return (
    <Styled_Example>
      <Styled_ExampleCard>{children}</Styled_ExampleCard>

      {/* ##### Read Environment Variable */}
      <Styled_ExampleCard>
        <h3>front-end : {Number(process.env.REACT_APP_NUMBER) * 100}</h3>
      </Styled_ExampleCard>

      {/* ##### Markdown Post */}
      <Styled_ExampleCard>{/* <ReactMarkdown>{post}</ReactMarkdown> */}</Styled_ExampleCard>

      <Styled_ExampleCard>
        <div>{post}</div>
      </Styled_ExampleCard>
      <br />
    </Styled_Example>
  );
};
