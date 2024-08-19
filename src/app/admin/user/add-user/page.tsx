import Sidebar from "@/app/_components/Admin/Sidebar/Sidebar";
import AddUser from "@/app/_components/Admin/Users/addUser/AddUser";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="main">
      <Sidebar />
      <AddUser/>
    </div>
  );
}
