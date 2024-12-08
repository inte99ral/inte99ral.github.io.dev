// # src/component/HelloPage/index.tsx
// ## API & Library ==================================================

import React, { useEffect, useState } from 'react';
import { getTestData, TestData } from 'api/rest/test';
// import { AxiosApi } from 'api/axios';

// ## Asset ==========================================================
// ## Style ==========================================================

import { Styled_Portfolio, Styled_PortfolioTable } from './style';

// ## Component ======================================================

export const PortfolioPage = () => {
  // ## Variable & Constant ============================================

  const [testData, setTestData] = useState<TestData[]>();

  // ## Hook ===========================================================

  useEffect(() => {
    (async () => setTestData(await getTestData()))();
  }, []);

  // ## Method =========================================================

  // ## Return =========================================================

  return (
    <Styled_Portfolio>
      <h1>Hello, world!</h1>
      <h3>front-end : {Number(process.env.REACT_APP_NUMBER) + 5}</h3>
      {testData ? (
        <Styled_PortfolioTable>
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
        </Styled_PortfolioTable>
      ) : (
        <></>
      )}
    </Styled_Portfolio>
  );
};
