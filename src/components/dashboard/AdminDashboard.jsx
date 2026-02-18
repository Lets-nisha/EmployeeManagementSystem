import React from "react";
import Header from "../header/header";
import CreateTask from "../header/CreateTask";
import AllTask from "../header/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
