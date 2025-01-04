// # src/component/Home/index.tsx

// ## Import Declaration =====================================================

// ### API & Library:

import React, { useState, useEffect } from 'react';
import { getPost } from 'api/rest/post';

// ### Component:

// import { Markdown_0 } from './component/Markdown_0';
// import { Markdown_1 } from './component/Markdown_1';
// import { Markdown_2 } from './component/Markdown_2';
// import { Markdown_3 } from './component/Markdown_3';
// import { Markdown_4 } from './component/Markdown_4';
// import { Markdown_5 } from './component/Markdown_5';
// import { Markdown_6 } from './component/Markdown_6';
import { Markdown_7 } from './component/Markdown_7';
import { Markdown_8 } from './component/Markdown_8';

// ### Style:

import { Styled_Home, Styled_HomeCard } from './style';

// ## Component ==============================================================

// ### Home:
export const Home = () => {
  // #### Variable:
  const [post, setPost] = useState('');

  // #### Hook:
  useEffect(() => {
    (async () => {
      setPost(await getPost(1));
    })();
  }, []);

  // #### Return:
  return (
    <Styled_Home>
      <Styled_HomeCard>
        <Markdown_7>{post}</Markdown_7>
      </Styled_HomeCard>
      <Styled_HomeCard>
        <Markdown_8>{post}</Markdown_8>
      </Styled_HomeCard>
    </Styled_Home>
  );
};
