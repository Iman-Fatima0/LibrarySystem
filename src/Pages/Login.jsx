import React from "react";
import LoginForm from "../Components/LoginForm";
import { Toaster } from "react-hot-toast";
function Login() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <LoginForm />
    </div>
  );
}

export default Login;
