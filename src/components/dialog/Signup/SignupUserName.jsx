import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { DialogContent, DialogActions } from "@mui/material";
import { SignupSkipButton } from "../../button/SignupSkipButton";
import { SignupNextButton } from "../../button/SignupNextButton";
import { SignupStateEnum } from "../../../enum/SignupStateEnum";
import { SignupText } from "../../input/SignupText";

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
  display: flex;
  flex-flow: column;
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

export function SignupUserName({ setSignupState }) {
  const [userName, setUserName] = useState("");

  const handleNextClick = () => setSignupState(SignupStateEnum.USER_NAME);

  return (
    <>
      <DialogContent css={dialogContent}>
        <div css={contentDiv}>
          <h1 css={h1Style}>名前を入力</h1>
          <p css={description}>
            Twitterで使われるアドレスです。英数字のみ使用できます。すでに使われているものは設定できません。後から変更することもできます。
          </p>
          <SignupText placeholder={"ユーザー名"} />
        </div>
      </DialogContent>
      <DialogActions css={dialogActions}>
        <div css={actionsDiv}>
          {userName === "" ? (
            <SignupSkipButton onClick={handleNextClick} />
          ) : (
            <SignupNextButton
              disabled={false}
              value={"次へ"}
              onClick={handleNextClick}
            />
          )}
        </div>
      </DialogActions>
    </>
  );
}
