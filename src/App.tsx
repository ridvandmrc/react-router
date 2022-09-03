import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function App() {
  console.log("render APp");
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div>
        <h1>Welcome to Main page of Application</h1>
        <p> This page is also persist page</p>
        <Link to="login"> Login </Link> <br />
        <Link to="about"> About </Link> <br />
        <Link to="admin"> Admin </Link>
      </div>

      {location.pathname === "/admin" ? (
        <div>YOu can not see this page</div>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default App;
