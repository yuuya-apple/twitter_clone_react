import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dialog, DialogTitle } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import CloseIcon from "@mui/icons-material/Close";
import { SignupMeans } from "./SignupMeans";
import { SignupConfirm } from "./SignupConfirm";
import { SignupNewDialog } from "./SignupNewDialog";
import { SignupPassword } from "./SignupPassword";
import { SignupStateEnum } from "../../../enum/SignupStateEnum";
import { SignupProfileIcon } from "./SignupProfileIcon";
import { SignupProfileHeader } from "./SignupProfileHeader";
import { SignupUserName } from "./SignupUserName";

const dialogTitle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 550px;
`;

const xIconStyle = css`
  font-size: 33px;
  color: white;
`;

const headDiv = css`
  width: 100%;
`;

const cloneButton = css`
  padding: 0;
  background: none;
  border: none;
  color: white;
`;

const cloneIcon = css`
  &:hover {
    background-color: gray;
    border-radius: 50%;
  }
`;

const backGround = css`
  background-color: #666666;
`;

export function SignupDialog({ isSignup, setIsSignup }) {
  const [signupState, setSignupState] = useState(SignupStateEnum.MEANS);

  const closeDialog = () => {
    setIsSignup(false);
    setSignupState(SignupStateEnum.MEANS);
  };
  console.log(signupState);

  const renderContent = () => {
    if (signupState === SignupStateEnum.MEANS) {
      return <SignupMeans setSignupState={setSignupState} />;
    } else if (signupState === SignupStateEnum.NEW) {
      return <SignupNewDialog setSignupState={setSignupState} />;
    } else if (signupState === SignupStateEnum.CONFIRM) {
      return <SignupConfirm setSignupState={setSignupState} />;
    } else if (signupState === SignupStateEnum.PASSWORD) {
      return <SignupPassword setSignupState={setSignupState} />;
    } else if (signupState === SignupStateEnum.PROFILE_ICON) {
      return <SignupProfileIcon setSignupState={setSignupState} />;
    } else if (signupState === SignupStateEnum.PROFILE_HEADER) {
      return <SignupProfileHeader setSignupState={setSignupState} />;
    } else if (signupState === SignupStateEnum.USER_NAME) {
      return <SignupUserName setSignupState={setSignupState} />;
    }
  };

  return (
    <Dialog
      PaperProps={{
        sx: {
          borderRadius: "20px",
        },
      }}
      css={backGround}
      open={isSignup}
    >
      <DialogTitle css={dialogTitle}>
        <div css={headDiv}>
          <button css={cloneButton} onClick={closeDialog}>
            <CloseIcon css={cloneIcon} />
          </button>
        </div>
        <div>
          <XIcon css={xIconStyle} />
        </div>
        <div css={headDiv}></div>
      </DialogTitle>
      {renderContent()}
    </Dialog>
  );
}
