import React, { useState, useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const div = css`
  display: flex;
  justify-content: space-between;
`;

const selectStyle = css`
  height: 60px;
  padding-left: 5px;
  padding-top: 15px;
  background: none;
  border: 1px solid rgba(187, 187, 187, 0.5);
  border-radius: 5px;
  font-size: 20px;
  color: white;

  &:focus {
    outline: none;
    opacity: 100%;
    border: 3px solid #1e90ff;
  }

  appearance: none; /* デフォルトの矢印を非表示 */
  -webkit-appearance: none; /* Safari, Chrome */
  -moz-appearance: none; /* Firefox */

  /* カスタム矢印 */
  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 20 20" fill="none" stroke="rgba(187, 187, 187,0.5)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 8 10 12 14 8"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;
`;

const monthSelect = css`
  ${selectStyle}
  width: 200px;
`;

const daySelect = css`
  ${selectStyle}
  width: 100px;
`;

const yearSelect = css`
  ${selectStyle}
  width: 120px;
`;

const placeholderStyle = css`
  font-size: 18px;
  padding-left: 5px;
  position: absolute;
  color: white;
  opacity: 50%;
`;

const labelStyle = css`
  position: relative;

  select:focus {
    border: 3px solid #1e90ff;
    outline: none;
  }

  select:not(:placeholder-shown) + span {
    margin-top: 25px;
    color: white;
    transform: translateY(-26px) scale(0.75);
  }

  select:focus + span {
    margin-top: 25px;
    margin-left: 2px;
    color: #1e90ff;
    opacity: 100%;
    transform: translateY(-26px) scale(0.75);
  }

  display: flex;
  align-items: center;
`;

// 年、月、日のオプションを生成
const years = Array.from({ length: 100 }, (_, i) => 2024 - i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);

// 有効な日のオプションを計算
const getValidDays = (year, month) => {
  if (!year || !month) return [];
  const daysInMonth = new Date(year, month, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => i + 1);
};

export function DateOfBirth() {
  const [year, setYear] = useState(2024);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);

  // 月や年が変更された場合の処理
  useEffect(() => {
    const validDays = getValidDays(year, month);
    // 選択された日付が新しい月に存在しない場合、デフォルトの有効な日付を選択
    if (!validDays.includes(day)) {
      setDay(validDays.length > 0 ? validDays[0] : 1);
    }
  }, [year, month]);

  const validDays = getValidDays(year, month);

  return (
    <div css={div}>
      <label css={labelStyle}>
        <select
          css={monthSelect}
          value={month}
          onChange={(e) => setMonth(Number(e.target.value))}
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <span css={placeholderStyle}>月</span>
      </label>
      <label css={labelStyle}>
        <select
          css={daySelect}
          value={day}
          onChange={(e) => setDay(Number(e.target.value))}
        >
          {validDays.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <span css={placeholderStyle}>日</span>
      </label>
      <label css={labelStyle}>
        <select
          css={yearSelect}
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <span css={placeholderStyle}>年</span>
      </label>
    </div>
  );
}
