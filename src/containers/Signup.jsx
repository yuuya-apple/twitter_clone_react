import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SignupDialog } from "../components/dialog/Signup/SignupDialog";
import { SignupPromotionDialog } from "../components/dialog/Signup/SignupPromotionDialog";

export function Signup() {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div>
      <SignupDialog isSignup={isSignup} setIsSignup={setIsSignup} />
      <SignupPromotionDialog isSignup={isSignup} setIsSignup={setIsSignup} />
    </div>
  );
}
