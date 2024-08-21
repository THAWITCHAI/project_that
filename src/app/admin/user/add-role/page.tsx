"use client";
import Sidebar from "@/app/_components/Admin/Sidebar/Sidebar";
import React, { useState } from "react";
import "./Type.css";
type Props = {};

export default function Add_role({}: Props) {
  const [form, setForm] = useState({});

  const handleChang = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    await fetch("/api/role", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
  };
  return (
    <div className="main">
      <Sidebar />
      <div className="type-car">
        <form action="" method="post" className="form-type">
          <div className="box-input-type">
            <h1 className="title-type text-black">รหัสสิทธิ์</h1>
            <input
              name="rid"
              onChange={handleChang}
              type="number"
              className="input-type"
              placeholder="#2212"
              required
            />
          </div>
          <div className="box-input-type">
            <h1 className="title-type text-black">ชื่อสิทธิ์</h1>
            <input
              name="rname"
              onChange={handleChang}
              type="text"
              className="input-type"
              placeholder="Your Name Type Role"
              required
            />
          </div>
          <div className="box-input-type flex justify-center items-center">
            <button
              className="btn-sub bg-blue-500 rounded-md hover:bg-blue-600 active:scale-90 transition-all"
              onClick={(e) => {
                e.preventDefault();
                if (Object.keys(form).length < 2) {
                  return alert("กรอกไม่ครบ!!");
                } else {
                  handleSubmit();
                }
              }}
            >
              เพิ่ม
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
