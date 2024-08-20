import Sidebar from "@/app/_components/Admin/Sidebar/Sidebar";
import React from "react";
import "./Type.css";
type Props = {};

export default function page({}: Props) {
  return (
    <div className="main">
      <Sidebar />
      <div className="type-car">
        <form action="" method="post" className="form-type">
          <div className="box-input-type">
            <h1 className="title-type text-black">รหัสสิทธิ์</h1>
            <input
              type="number"
              className="input-type"
              placeholder="#2212"
              required
            />
          </div>
          <div className="box-input-type">
            <h1 className="title-type text-black">ชื่อสิทธิ์</h1>
            <input
              type="text"
              className="input-type"
              placeholder="Your Name Type Role"
              required
            />
          </div>
          <div className="box-input-type flex justify-center items-center">
            <button className="btn-sub bg-blue-500 rounded-md hover:bg-blue-600 active:scale-90 transition-all">เพิ่ม</button>
          </div>
        </form>
      </div>
    </div>
  );
}
