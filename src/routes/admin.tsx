import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const AdminPage = () => {
  const [see, setSee] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSee(false);
    }, 5000);
  }, []);

  return see ? (
    <div>You can not see this page, your role has to be ADMIN</div>
  ) : (
    <Navigate to={"/"} />
  );
};
