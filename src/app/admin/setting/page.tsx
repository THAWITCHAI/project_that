import Sidebar from "@/app/_components/Admin/Sidebar/Sidebar";
import Setting from "@/app/_components/Client/Setting/Setting";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="main">
      <Sidebar />
      <Setting/>
    </div>
  );
}
