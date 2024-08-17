import React from "react";
/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

const div = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  height: 100vh;
`;

const bounce = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const h1 = css`
  animation: ${bounce} 4s infinite linear;
  margin-bottom: 100px;
`;

export function NotFound() {
  return (
    <div css={div}>
      <h1 css={h1}>404 Not Found</h1>
      <p>お探しのページは見つかりませんでした。</p>
    </div>
  );
}
