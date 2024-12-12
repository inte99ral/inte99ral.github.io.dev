// # src/component/HelloPage/index.tsx

// ## API & Library ==========================================================
import React, { useState, useEffect } from 'react';
import { getExampleUserlist, ExampleUser } from 'api/rest/example';
import { AiFillSetting } from 'react-icons/ai';

// ## Asset ==================================================================

// ## Style ==================================================================

import { Styled_Example, Styled_ExampleTable } from './style';

// ## Component ==============================================================

// ## Rendering ==============================================================

export const Example = () => {
  // ### Variable:
  const [exampleUserList, setExampleUserList] = useState<ExampleUser[]>();

  // ### Function:

  // ### Hook:

  useEffect(() => {
    (async () => setExampleUserList(await getExampleUserlist()))();
  }, []);

  // ### Return:

  return (
    <Styled_Example>
      <AiFillSetting />
      <h1>Hello, world!</h1>

      {/* #### Read Environment Variable */}
      <h3>front-end : {Number(process.env.REACT_APP_NUMBER) + 5}</h3>

      {/* #### Read Server JSON */}
      {exampleUserList ? (
        <Styled_ExampleTable>
          <thead>
            <tr>
              {Object.keys(exampleUserList[0]).map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {exampleUserList.map((row, rowIndex) => (
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
