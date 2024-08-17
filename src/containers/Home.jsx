import React from "react";
import { Navigate } from "react-router-dom";

export function Home() {
  const shouldRedirect = true; // ここでリダイレクト条件を設定

  if (shouldRedirect) {
    return <Navigate to="/signup" />;
  }
  return <div></div>;
}
