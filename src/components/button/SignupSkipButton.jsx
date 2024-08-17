import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const buttonStyle = css`
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: black;
  color: white;
  height: 52px;
  width: 100%;
  font-size: 17px;
  font-weight: 700;
`;

export function SignupSkipButton({ onClick }) {
  return (
    <>
      <button css={buttonStyle} onClick={onClick}>
        今はしない
      </button>
    </>
  );
}
