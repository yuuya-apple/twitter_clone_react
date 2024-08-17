import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { DialogContent } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import AppleIcon from "@mui/icons-material/Apple";
import { SignupButton } from "../../button/SignupButton";
import { SignupStateEnum } from "../../../enum/SignupStateEnum";

const dialogContent = css`
  height: 600px;
  width: 550px;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-bottom: 0;
`;

const h1Style = css`
  color: white;
`;

const border = css`
  font-size: 17px;
  color: white;
  margin: 10px;
  text-align: center;
`;

const borderDiv = css`
  display: flex;
  align-items: center;
  &:before,
  &:after {
    content: "";
    flex-grow: 1;
    height: 1px; /* 線の太さ */
    background: rgba(187, 187, 187, 0.3); /* 線の色 */
  }
`;

const contentDiv = css`
  width: 300px;
`;

const googleIconStyle = css`
  font-size: 20px;
  margin-right: 5px;
`;

const googleButtonDiv = css`
  margin-bottom: 25px;
`;

const fontStyle = css`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
`;

const googleFontStyle = css`
  margin: 0;
  font-size: 15px;
  font-weight: lighter;
`;

const googleButton = (
  <>
    <FcGoogle css={googleIconStyle} />
    <p css={googleFontStyle}>Googleで登録</p>
  </>
);

const appleButton = (
  <>
    <AppleIcon css={googleIconStyle} />
    <p css={fontStyle}>Appleのアカウントで登録</p>
  </>
);

const signupButton = (
  <>
    <p css={fontStyle}>アカウントを作成</p>
  </>
);

export function SignupMeans({ setSignupState }) {
  const handleClickSignup = () => {
    setSignupState(SignupStateEnum.NEW);
  };

  return (
    <DialogContent css={dialogContent}>
      <div css={contentDiv}>
        <h1 css={h1Style}>Xをはじめましょう</h1>
        <div css={googleButtonDiv}>
          <SignupButton buttunValue={googleButton} />
        </div>
        <div>
          <SignupButton buttunValue={appleButton} />
        </div>
        <div css={borderDiv}>
          <p css={border}>または</p>
        </div>
        <SignupButton buttunValue={signupButton} onClick={handleClickSignup} />
      </div>
    </DialogContent>
  );
}
