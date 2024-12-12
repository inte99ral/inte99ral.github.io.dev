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
      <h3>예시 유저들의 목록은 다음과 같습니다.</h3>

      {exampleUserList ? (
        <table style={{}}>
          <tr>
            {Object.keys(exampleUserList[0]).map((header, index) => (
              <th key={index} style={{ border: '1px solid black' }}>
                {header}
              </th>
            ))}
          </tr>
        </table>
      ) : (
        <></>
      )}
    </>
  );
};
