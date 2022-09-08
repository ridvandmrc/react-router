import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  useEffect(() => {
    console.log("location has been changed: ", location);
  }, [location]);
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "300px",
          justifyContent: "space-around",
          color: "darkgray",
        }}
      >
        <Link to="login"> Login </Link>
        <Link to="about"> About </Link>
        <Link to="admin"> Admin </Link>
        <Link to="user"> User </Link>
      </div>

      <div style={{ margin: "15px" }}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
