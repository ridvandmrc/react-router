import { Link, Outlet } from "react-router-dom";
import { userData } from "../data";

export const User = () => {
  return (
    <>
      <div
        style={{
          borderBottom: "1px solid gray",
        }}
      >
        This is a User page
      </div>
      {userData.map((user) => (
        <Link
          to={`/user/${user.id}`}
          style={{ margin: "10px", display: "block" }}
        >
          {user.id}-{user.name}
        </Link>
      ))}
      <Outlet />
    </>
  );
};
