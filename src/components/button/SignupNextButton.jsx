import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const buttonStyle = css`
  border-radius: 30px;
  height: 52px;
  width: 100%;
  border: none;
  font-size: 17px;
  font-weight: 700;
  color: black;

  &:disabled {
    background-color: gray;
  }
`;

export function SignupNextButton({ onClick, disabled, value }) {
  return (
    <>
      <button css={buttonStyle} onClick={onClick} disabled={disabled}>
        {value}
      </button>
    </>
  );
}
