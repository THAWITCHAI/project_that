import Setting from "@/app/_components/Client/Setting/Setting";
import Sidebar from "@/app/_components/Client/Sidebar/Sidebar";
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
