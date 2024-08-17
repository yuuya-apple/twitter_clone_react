import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { DialogActions, Dialog, DialogTitle } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const backGround = css`
  background-color: #666666;
`;

const iconStyle = css`
  margin-right: 10px;
  color: #1e90ff;
`;

const dialogTitle = css`
  padding: 0;
  width: 550px;
  border-bottom: 1px solid rgba(187, 187, 187, 0.3);
  flex-flow: column;

  @media (max-width: 700px) {
    width: 100%;
    min-width: 350px;
  }

  @media (max-width: 550px) {
    width: 390px;
  }
`;

const dialogActions = css`
  padding: 0;
  height: 55px;
  width: 550px;
  min-width: 200px;

  @media (max-width: 700px) {
    width: 100%;
  }
  @media (max-width: 550px) {
    width: 390px;
  }
`;

const head = css`
  margin: 16px 24px;
  align-items: center;
  font-weight: bold;
  color: white;
`;

const title = css`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: white;
`;

const foot = css`
  margin: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 510px;
  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 550px) {
    width: 350px;
  }
`;

const description = css`
  margin-top: 5px;
  color: rgba(187, 187, 187, 0.5);
  font-size: 16px;
`;

const signupButton = css`
  color: #1e90ff;
  background: none;
  border: 1px solid rgba(187, 187, 187, 0.3);
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  height: 38px;
  width: 140px;
`;

const signinButton = css`
  color: white;
  background-color: #1e90ff;
  border: 1px solid rgba(187, 187, 187, 0.3);
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  height: 38px;
  width: 100px;
`;

export function SignupPromotionDialog({ isSignup, setIsSignup }) {
  const handleClickSignup = () => {
    setIsSignup(true);
  };

  return (
    <Dialog
      PaperProps={{
        sx: {
          borderRadius: "20px",
          backgroundColor: "black",
        },
      }}
      css={backGround}
      open={!isSignup}
    >
      <DialogTitle css={dialogTitle}>
        <div css={head}>
          <div css={title}>
            <PersonAddIcon css={iconStyle} />
            ログインしますか？
          </div>
          <div css={description}>
            ポストを共有するにはログインしてください。
          </div>
        </div>
      </DialogTitle>
      <DialogActions css={dialogActions}>
        <div css={foot}>
          <button css={signupButton} onClick={handleClickSignup}>
            アカウント作成
          </button>
          <button css={signinButton}>ログイン</button>
        </div>
      </DialogActions>
    </Dialog>
  );
}
