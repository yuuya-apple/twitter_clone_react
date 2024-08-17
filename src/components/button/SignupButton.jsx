import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const buttonStyle = css`
  border-radius: 30px;
  margin-bottom: 30px;
  height: 40px;
  width: 100%;
  border: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export function SignupButton({ buttunValue, onClick }) {
  return (
    <button css={buttonStyle} onClick={onClick}>
      {buttunValue}
    </button>
  );
}
