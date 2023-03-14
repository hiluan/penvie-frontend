import React from "react";
import Userfront from "@userfront/react";

Userfront.init(process.env.REACT_APP_USERFRONT_ACCOUNT_ID);

const SignOut = Userfront.build({
  toolId: "baamkno",
});

export default SignOut;
