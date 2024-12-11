// # src/component/HelloPage/index.tsx
// ## API & Library ==================================================

import React, { useState, useEffect } from 'react';
import { getTestData, TestData } from 'api/rest/test';
import { AiFillSetting } from 'react-icons/ai';

// ## Asset ==========================================================

// ## Style ==========================================================

import { Styled_Example, Styled_ExampleTable } from './style';

// ## Component ======================================================

// ## Rendering ======================================================
export const Example = () => {
  // ### Variable ======================================================

  const [testData, setTestData] = useState<TestData[]>();

  // ### Function ======================================================

  // ### Hook ==========================================================

  useEffect(() => {
    (async () => setTestData(await getTestData()))();
  }, []);

  // ### ⇩ Return ========================================================

  return (
    <Styled_Example>
      <AiFillSetting />
      <h1>Hello, world!</h1>

      {/* ### Read Environment Variable ===================================== */}
      <h3>front-end : {Number(process.env.REACT_APP_NUMBER) + 5}</h3>

      {/* ### Read Server JSON ============================================== */}
      {testData ? (
        <Styled_ExampleTable>
          <thead>
            <tr>
              {Object.keys(testData[0]).map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {testData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.keys(row).map((header, cellIndex) => (
                  <td key={cellIndex}>{row[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Styled_ExampleTable>
      ) : (
        <></>
      )}
    </Styled_Example>
  );
};
