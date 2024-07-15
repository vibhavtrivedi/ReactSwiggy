import { useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(false);
  window.addEventListener("online", () => {
    setOnlineStatus(true);
  });
  window.addEventListener("offline", () => {
    setOnlineStatus(false);
  });
  return onlineStatus;
};

export default useOnlineStatus;
