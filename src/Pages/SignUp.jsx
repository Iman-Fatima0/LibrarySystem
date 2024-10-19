import React from "react";
import "../Components/SignUpForm";
import SignUpForm from "../Components/SignUpForm";
import { ToastBar, Toaster } from "react-hot-toast";

function SignUp() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      <SignUpForm />
    </div>
  );
}

export default SignUp;
