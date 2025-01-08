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

import React, { FC, ReactNode, useState, useEffect } from 'react';
import { Markdown } from 'api/markdown';
import { getExampleUserlist } from 'api/rest/example';
import { getPost } from 'api/rest/post';
import { AiFillSetting } from 'react-icons/ai';

// ### Component:

// ### Style:

import { Styled_Example, Styled_ExampleCard } from './style';

// ### Asset:

// ## Interface & Class ======================================================

interface propsType {
  children: ReactNode;
}

// ## Component ==============================================================

// ### Example_1
/**
 * @description PropsType Example
 */
export const Example_1 = ({ children = 'default text' }: propsType) => {
  return <div style={{ color: 'blue' }}>{children}</div>;
};

// ### Example_2
/**
 * @description String Props Example
 *
 * @example
 * ```
 * <Example_1>『STRING』</Example_1>
 * ```
 */
export const Example_2: FC<{ children: string }> = ({ children = 'default text' }) => {
  return <div style={{ color: 'blue' }}>{children}</div>;
};

// ### Example_0
/**
 *
 * @returns
 */
export const Example = () => {
  // #### Variable:

  const [exampleUserList, setExampleUserList] =
    useState<Awaited<ReturnType<typeof getExampleUserlist>>>(); // 타입추론

  const [post, setPost] = useState('');

  // #### Function:

  // #### Hook:

  useEffect(() => {
    (async () => {
      setExampleUserList(await getExampleUserlist());

      setPost(await getPost(0));
    })();
  }, []);

  // #### Return:

  return (
    <Styled_Example>
      <AiFillSetting />
      <h1>Hello, EXAMPLE!</h1>

      {/* ##### Read Environment Variable */}
      <h3>front-end : {Number(process.env.REACT_APP_NUMBER) + 5}</h3>
      <br />

      {/* ##### Markdown Post */}
      <Markdown>{post}</Markdown>
      <br />

      {/* ##### Read Server JSON */}
      {exampleUserList ? (
        <table style={{ borderCollapse: 'collapse' }}>
          <tr>
            {Object.keys(exampleUserList[0]).map((header, index) => (
              <th key={index} style={{ border: '1px solid black', padding: '14px' }}>
                {header}
              </th>
            ))}
          </tr>
          {exampleUserList.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(row).map((header, cellIndex) => (
                <td key={cellIndex} style={{ border: '1px solid black', padding: '14px' }}>
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </table>
      ) : (
        <></>
      )}
    </Styled_Example>
  );
};
