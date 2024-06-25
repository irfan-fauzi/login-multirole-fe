import { FC } from "react";
import AuthUser from "../helper/AuthUser";
import Http from "../helper/Fetch";

const Dashboard: FC = () => {
  const user = AuthUser.GetAuth();
  const getCurentUser = async () => {
    try {
      const res = await Http.get("/user/current", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      console.log(res.data.data);
    } catch (error) {
      console.log(`ada error ${error}`)
    }
  };

  return (
    <>
      <div>Dashboard</div>
      <button
        onClick={getCurentUser}
        className='border border-blue-500 px-2 py-2'
      >
        get curent user
      </button>
    </>
  );
};

export default Dashboard;
