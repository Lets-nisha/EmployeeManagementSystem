import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <>
      <div
        id="AllTask"
        className="bg-[#1c1c1c] mt-5  rounded p-5 h-60 overflow-auto "
      >   <div className="bg-emerald-400 mb-2 py-2 px-4 rounded flex justify-between">
              <h2 className=" text-lg font-medium w-1/5 ">Employee Task</h2>
              <h3 className=" text-lg font-medium w-1/5 ">New Task</h3>
              <h5 className=" text-lg font-medium w-1/5 ">Active Task</h5>
              <h5 className=" text-lg font-medium w-1/5 ">Completed</h5>
              <h5 className=" text-lg font-medium w-1/5 ">Failed</h5>
            </div>
        <div className=" ">
          {userData.map(function (e , idx ) {
          return (
            <div  key={idx} className=" manage border-emerald-400  mb-2 py-2 px-4 rounded flex justify-between">
              <h2 className="text-lg font-medium w-1/5 text-white ">{e.firstName }</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-400">{e.taskCount.newTask}</h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">{e.taskCount.active}</h5>
              <h5 className="text-lg font-medium w-1/5 text-green-400">{e.taskCount.completed}</h5>
              <h5 className="text-lg font-medium w-1/5 text-red-400">{e.taskCount.failed}</h5>
            </div>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default AllTask;
