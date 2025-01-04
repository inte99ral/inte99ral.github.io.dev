// # src/component/Home/component/Markdown_0/index.tsx

// ## Import Declaration =====================================================

// ### API & Library:

import React, { FC } from 'react';

// ## Component ==============================================================

export const Markdown_0: FC<{ children: string }> = ({ children }) => {
  return (
    <>
      <div>Markdown #0</div>
      <div>{children}</div>
    </>
  );
};
