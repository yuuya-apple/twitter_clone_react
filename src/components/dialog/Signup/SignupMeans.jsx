import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { DialogContent } from "@mui/material";
import { SignupButton } from "../../button/SignupButton";
import { FcGoogle } from "react-icons/fc";
import AppleIcon from "@mui/icons-material/Apple";
import { SignupStateEnum } from "../../../enum/SignupStateEnum";

const dialogContent = css`
  height: 550px;
  width: 550px;
`;

const h1Style = css`
  color: white;
`;

const contentDiv = css`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const googleIconStyle = css`
  font-size: 20px;
  margin-right: 5px;
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
        <SignupButton buttunValue={googleButton} />
        <SignupButton buttunValue={appleButton} />
        <p css={h1Style}>-または-</p>
        <SignupButton buttunValue={signupButton} onClick={handleClickSignup} />
      </div>
    </DialogContent>
  );
}
