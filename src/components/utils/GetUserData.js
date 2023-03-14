import Userfront from "@userfront/react";
Userfront.init(process.env.REACT_APP_USERFRONT_ACCOUNT_ID);

export default function GetUserData() {
  if (!Userfront.accessToken()) return null;
  console.log(Userfront.user);
}
