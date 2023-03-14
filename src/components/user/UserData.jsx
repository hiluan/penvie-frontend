import React from "react";
import { useSelector } from "react-redux";
import Userfront from "@userfront/react";

Userfront.init(process.env.REACT_APP_USERFRONT_ACCOUNT_ID);

const UserData = () => {
  //   const { signedIn } = useSelector((state) => state.global);
  //   if (!signedIn) return null;
  if (!Userfront.accessToken) return null;
  console.log("🚀 ~ Userfront.accessToken:", Userfront.accessToken);

  //   const data = JSON.parse();
  console.log();
  return <div>UserData</div>;
};

export default UserData;
