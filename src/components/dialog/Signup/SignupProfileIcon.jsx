import React, { useRef, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { DialogContent, DialogActions } from "@mui/material";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { SignupNextButton } from "../../button/SignupNextButton";
import { SignupSkipButton } from "../../button/SignupSkipButton";
import { SignupStateEnum } from "../../../enum/SignupStateEnum";
import defaultIcon from "../../../images/default_profile.png";

const dialogContent = css`
  height: 450px;
  width: 550px;
  display: flex;
  justify-content: center;
`;

const dialogActions = css`
  padding: 0 24px;
  height: 100px;
  width: 550px;
  display: flex;
  justify-content: center;
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
`;

const inputArea = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const imageInput = css`
  display: none;
`;

const userIconImage = css`
  margin: 0;
  height: 184px;
  width: 184px;
  border-radius: 50%;
  border: 2px solid black;
  outline: 2px solid white;
  opacity: 80%;
`;

const iconDivArea = css`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 108px;
`;

const iconDiv = css`
  height: 42px;
  width: 42px;
  background-color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 65%;
`;

const soloIconDiv = css`
  ${iconDiv}
  position: absolute;
`;

const photoIcon = css`
  color: white;
  cursor: pointer;
  font-size: 20px;
  transform: scaleX(-1);
`;

export function SignupProfileIcon({ setSignupState }) {
  const fileInputRef = useRef(null);
  const [userIcon, setUserIcon] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setUserIcon(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleNextClick = () => setSignupState(SignupStateEnum.USER_NAME);

  const handleDeleteIconClick = () => {
    setUserIcon(null);
    fileInputRef.current.value = null;
  };

  const renderIconDiv = () => {
    if (userIcon === null) {
      return (
        <div css={soloIconDiv}>
          <MdOutlineAddAPhoto css={photoIcon} onClick={handleIconClick} />
        </div>
      );
    } else {
      return (
        <div css={iconDivArea}>
          <div css={iconDiv}>
            <MdOutlineAddAPhoto css={photoIcon} onClick={handleIconClick} />
          </div>
          <div css={iconDiv}>
            <IoMdClose css={photoIcon} onClick={handleDeleteIconClick} />
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <DialogContent css={dialogContent}>
        <div css={contentDiv}>
          <div>
            <h1 css={h1Style}>プロフィール画像を選ぶ</h1>
            <p css={description}>お気に入りの画像をアップロードしましょう。</p>
          </div>
          <div css={inputArea}>
            {userIcon === null ? (
              <img src={defaultIcon} alt="icon" css={userIconImage} />
            ) : (
              <img src={userIcon} alt="icon" css={userIconImage} />
            )}
            {renderIconDiv()}
            <input
              type="file"
              css={imageInput}
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
        </div>
      </DialogContent>
      <DialogActions css={dialogActions}>
        <div css={actionsDiv}>
          {userIcon === null ? (
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
