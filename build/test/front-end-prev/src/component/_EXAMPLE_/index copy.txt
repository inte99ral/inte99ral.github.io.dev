// # src/component/_EXAMPLE_/index.tsx

// ## Documentation ==========================================================
/**
 *
 */

// ## Import Declaration =====================================================

// ### API & Library:

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { getExampleUserlist } from 'api/rest/example';
import { getPost } from 'api/rest/post';
import { AiFillSetting } from 'react-icons/ai';

// ### Component:

// ### Style:

import { Styled_Example } from './style';

// ### Asset:

// ## Component ==============================================================

// ### Example
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

      setPost(await getPost());
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
      <ReactMarkdown>{post}</ReactMarkdown>
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
