import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const buttonStyle = css`
  border-radius: 30px;
  margin-bottom: 30px;
  height: 45px;
  width: 300px;
  border: none;
`;

const divStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export function SignupButton({ buttunValue, onClick }) {
  return (
    <button css={buttonStyle}>
      <div css={divStyle} onClick={onClick}>
        {buttunValue}
      </div>
    </button>
  );
}
