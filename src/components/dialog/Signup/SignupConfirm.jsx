import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { DialogContent, DialogActions } from "@mui/material";
import { SignupText } from "../../input/SignupText";
import { SignupNextButton } from "../../button/SignupNextButton";
import { SignupStateEnum } from "../../../enum/SignupStateEnum";

const dialogContent = css`
  height: 450px;
  width: 550px;
  background-color: black;
  display: flex;
  justify-content: center;
`;

const dialogActions = css`
  padding: 0 24px;
  height: 100px;
  width: 550px;
  display: flex;
  justify-content: center;
  background-color: black;
`;

const contentDiv = css`
  width: 450px;
`;

const actionsDiv = css`
  width: 450px;
`;

const h1Style = css`
  color: white;
  margin: 0;
`;

const description = css`
  font-size: 14px;
  opacity: 60%;
  color: white;
  margin-top: 0;
  margin-bottom: 30px;
`;

const notReceiveMail = css`
  color: #1e90ff;
  margin: 0;
  margin-left: 10px;
  font-size: 13px;
`;

export function SignupConfirm({ setSignupState }) {
  const handleOnClick = () => setSignupState(SignupStateEnum.PASSWORD);

  return (
    <>
      <DialogContent css={dialogContent}>
        <div css={contentDiv}>
          <h1 css={h1Style}>認証コードを送信しました</h1>
          <p css={description}>
            メールアドレスを認証するため、以下にコードを入力してください。fullstack.apple.se@gmail.com
          </p>
          <SignupText placeholder={"認証コード"} />
          <p css={notReceiveMail}>メールが届かない場合</p>
        </div>
      </DialogContent>
      <DialogActions css={dialogActions}>
        <div css={actionsDiv}>
          <SignupNextButton
            onClick={handleOnClick}
            disabled={false}
            value={"次へ"}
          ></SignupNextButton>
        </div>
      </DialogActions>
    </>
  );
}
