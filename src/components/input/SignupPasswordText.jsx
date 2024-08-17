import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HiOutlineEyeOff } from "react-icons/hi";
import { FiEye } from "react-icons/fi";

const placeholderStyle = css`
  font-size: 18px;
  margin-left: 10px;
  position: absolute;
  color: white;
  opacity: 50%;
`;

const labelStyle = css`
  position: relative;

  input:focus {
    border: 3px solid #1e90ff;
    outline: none;
  }

  input:not(:placeholder-shown) + span {
    margin-top: 25px;
    margin-left: 0;
    color: white;
    transform: translateY(-26px) scale(0.75);
  }

  input:focus + span {
    margin-top: 25px;
    margin-left: 0;
    color: #1e90ff;
    opacity: 100%;
    transform: translateY(-26px) scale(0.75);
  }

  display: flex;
  align-items: center;
`;

const inputStyle = css`
  background: none;
  width: 100%;
  height: 60px;
  border: 1px solid rgba(187, 187, 187, 0.3);
  border-radius: 5px;
  color: white;
  font-size: 20px;
  padding-left: 7px;
  padding-top: 15px;
  box-sizing: border-box;
`;

const visibility = css`
  position: absolute;
  right: 10px;
  cursor: pointer;
  color: white;
  font-size: 20px;
  transform: scaleX(-1);
`;

export function SignupPasswordText({ placeholder }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => setIsVisible(!isVisible);

  return (
    <label css={labelStyle}>
      <input
        type={isVisible ? "text" : "password"}
        css={inputStyle}
        placeholder={""}
      />
      <span css={placeholderStyle}>{placeholder}</span>

      {isVisible ? (
        <HiOutlineEyeOff css={visibility} onClick={handleVisible} />
      ) : (
        <FiEye css={visibility} onClick={handleVisible} />
      )}
    </label>
  );
}
