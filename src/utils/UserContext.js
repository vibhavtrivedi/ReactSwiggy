import { createContext } from "react";

const UserContext = createContext({
  loginName: "Default",
});

export default UserContext;
