// # src/component/Home/index.tsx

import React, { useState, useEffect } from 'react';

import { getExampleUserlist, ExampleUser } from 'api/rest/example';

export const Home = () => {
  const [exampleUserList, setExampleUserList] = useState<ExampleUser[]>();

  useEffect(() => {
    (async () => setExampleUserList(await getExampleUserlist()))();
  }, []);

  return (
    <>
      <h4>예시 유저들의 목록은 다음과 같습니다.</h4>
      <br />
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
    </>
  );
};
