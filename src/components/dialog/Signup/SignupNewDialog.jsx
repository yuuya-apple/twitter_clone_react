import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { DialogContent, DialogActions } from "@mui/material";
import { DateOfBirth } from "./DateOfBirth";
import { SignupStateEnum } from "../../../enum/SignupStateEnum";
import { SignupText } from "../../input/SignupText";
import { SignupNextButton } from "../../button/SignupNextButton";

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

const actionsDiv = css`
  width: 450px;
`;

const contentDiv = css`
  width: 450px;
`;

const h1Style = css`
  color: white;
  margin: 0;
  margin-bottom: 20px;
`;

const nameDiv = css`
  margin-bottom: 30px;
`;

const emailDiv = css`
  margin-bottom: 10px;
`;

const changeInputText = css`
  color: #1e90ff;
  display: flex;
  justify-content: flex-end;
`;

const dateOfBirthHeader = css`
  font-size: 15px;
  font-weight: bold;
  color: white;
  margin: 0;
`;

const description = css`
  font-size: 14px;
  opacity: 60%;
  color: white;
  margin: 0;
  margin-bottom: 20px;
`;

export function SignupNewDialog({ setSignupState }) {
  const handleOnClick = () => setSignupState(SignupStateEnum.CONFIRM);

  return (
    <>
      <DialogContent css={dialogContent}>
        <div css={contentDiv}>
          <h1 css={h1Style}>アカウントを作成</h1>
          <div css={nameDiv}>
            <SignupText placeholder={"名前"} />
          </div>
          <div css={emailDiv}>
            <SignupText placeholder={"電話番号"} />
          </div>
          <p css={changeInputText}>かわりに電話番号を登録する</p>
          <p css={dateOfBirthHeader}>生年月日</p>
          <p css={description}>
            この情報は公開されません。このアカウントをビジネス、ペットなどに使う場合でも、ご自身の年齢を確認してください。
          </p>
          <DateOfBirth />
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
