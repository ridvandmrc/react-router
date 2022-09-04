import { useParams } from "react-router-dom";
import { userData } from "../data";

export const UserDetail = () => {
  const param = useParams();
  console.log(param.userId);
  return param && param.userId ? (
    <div>
      <p>User Detail:</p>
      <p>User Id: {userData[(param.userId as unknown as number) - 1].id} </p>
      <p>
        User Name: {userData[(param.userId as unknown as number) - 1].name}{" "}
      </p>
      <p>
        User Info: {userData[(param.userId as unknown as number) - 1].info}{" "}
      </p>
    </div>
  ) : (
    <div>wait</div>
  );
};
