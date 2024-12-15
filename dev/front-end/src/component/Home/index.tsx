// # src/component/Home/index.tsx

import React from 'react';
// import React, { useState, useEffect } from 'react';
import RMarkdown from 'react-markdown';

import { Markdown } from 'api/react-markdown';
// import { getPost } from 'api/rest/post';

import { Styled_Home, Styled_HomeCard } from './style';

export const Home = () => {
  // const [post, setPost] = useState('');

  const post = `
  # 제목

  ## 소제목

  되는지 확인
  `;

  // useEffect(() => {
  //   (async () => setPost(await getPost(0)))();
  // }, []);

  return (
    <Styled_Home>
      <h4>예시 유저들의 목록은 다음과 같습니다.</h4>
      <br />
      <Styled_HomeCard>
        <RMarkdown>{post}</RMarkdown>
      </Styled_HomeCard>

      <Styled_HomeCard>
        <Markdown content={post} />
      </Styled_HomeCard>
    </Styled_Home>
  );
};
