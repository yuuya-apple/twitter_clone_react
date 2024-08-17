import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { DialogContent, DialogActions } from "@mui/material";
import { SignupPasswordText } from "../../input/SignupPasswordText";
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
  margin: 0;
  margin-bottom: 30px;
`;

export function SignupPassword({ setSignupState }) {
  const handleOnClick = () => setSignupState(SignupStateEnum.PROFILE_ICON);

  return (
    <>
      <DialogContent css={dialogContent}>
        <div css={contentDiv}>
          <h1 css={h1Style}>パスワードを入力</h1>
          <p css={description}>8文字以上にしてください。</p>
          <SignupPasswordText placeholder={"パスワード"} />
        </div>
      </DialogContent>
      <DialogActions css={dialogActions}>
        <div css={actionsDiv}>
          <SignupNextButton
            onClick={handleOnClick}
            disabled={false}
            value={"登録"}
          ></SignupNextButton>
        </div>
      </DialogActions>
    </>
  );
}
