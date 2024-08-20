"use client";
import Sidebar from "@/app/_components/Admin/Sidebar/Sidebar";
import "./Type.css";
import { useState } from "react";
type Props = {};

export default function Add_type({}: Props) {
  const [form, setForm] = useState({});
  const handleChang = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (Object.keys(form).length >= 2) {
      fetch("/");
      fetch("/api/type_car", {
        method: "POST",
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((res) => alert(res["massage"]));
      return;
    }
    return;
  };
  return (
    <div className="main">
      <Sidebar />
      <div className="type-car">
        <form action="" method="post" className="form-type">
          <div className="box-input-type">
            <h1 className="title-type text-black">รหัสประเภทรถ</h1>
            <input
              onChange={handleChang}
              name="tid"
              type="number"
              className="input-type"
              placeholder="#2212"
              required
            />
          </div>
          <div className="box-input-type">
            <h1 className="title-type text-black">ชื่อประเภทรถ</h1>
            <input
              onChange={handleChang}
              name="tname"
              type="text"
              className="input-type"
              placeholder="Your Name Type car"
              required
            />
          </div>
          <div className="box-input-type flex justify-center items-center">
            <button
              className="btn-sub bg-blue-500 rounded-md hover:bg-blue-600 active:scale-90 transition-all"
              onClick={handleSubmit}
            >
              เพิ่ม
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
