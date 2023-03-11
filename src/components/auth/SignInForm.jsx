import React, { useState } from "react";
import Userfront from "@userfront/react";

Userfront.init(process.env.REACT_APP_USERFRONT_ACCOUNT_ID);

const SignInForm = () => {
  console.log(process.env.REACT_APP_USERFRONT_ACCOUNT_ID);
  const [error, setError] = useState(null);

  const handleLogin = () => {
    console.log(Userfront.login({ method: "google" }));
    Userfront.login({ method: "google" }).catch((err) => {
      setError(err.message);
    });
  };

  return (
    <div>
      <h1>Login with SSO</h1>
      {error && <div>Error: {error}</div>}
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default SignInForm;
