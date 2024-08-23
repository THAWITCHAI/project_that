"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import "./addcar.css";
type Props = {};

export default function AddUser({}: Props) {
  const [form, setForm] = useState({});
  const [role, setRole] = useState([]);
  const [base64_profile, setBase64_profile] = useState<String | null>(null);
  const [base64, setBase64] = useState<String | null>(null);

  const handleFileProfileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64_profile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleFileDiveChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChang = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetch("/api/role")
      .then((res) => res.json())
      .then((res) => setRole(res));
  }, []);

  const handleSubmit = async () => {
    await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify(
        Object.assign({}, form, { uprofile: base64_profile }, { udive: base64 })
      ),
    })
      .then((res) => res.json())
      .then((res) => alert(res["massage"]));
  };
  return (
    <div className="main-add-user">
      <form method="post" className="form-add-car">
        <div className="input-box">
          <h1 className="title">รหัสผู้ใช้</h1>
          <input
            onChange={handleChang}
            required
            name="uid"
            type="number"
            className="input"
            placeholder="Your ID User"
          />
        </div>
        <div className="input-box">
          <h1 className="title">ชื่อ</h1>
          <input
            onChange={handleChang}
            required
            name="uname"
            type="text"
            className="input"
            placeholder="Your Name"
          />
        </div>
        <div className="input-box">
          <h1 className="title">ชื่อเล่น</h1>
          <input
            onChange={handleChang}
            required
            name="unick_name"
            type="text"
            className="input"
            placeholder="Your Nick Name"
          />
        </div>
        <div className="input-box">
          <h1 className="title">อีเมล</h1>
          <input
            onChange={handleChang}
            required
            name="uemail"
            type="email"
            className="input"
            placeholder="Your Email"
          />
        </div>
        <div className="input-box">
          <h1 className="title">รหัสผ่าน</h1>
          <input
            onChange={handleChang}
            required
            name="upwd"
            type="password"
            className="input"
            placeholder="Your Password"
          />
        </div>
        <div className="input-box">
          <h1 className="title">เบอร์ติดต่อ</h1>
          <input
            onChange={handleChang}
            required
            name="uphone"
            type="text"
            className="input"
            placeholder="Your Phone Number"
          />
        </div>
        <div className="input-box">
          <h1 className="title">บทบาท</h1>
          <select name="rid" className="input" onChange={handleChang}>
            <option className=" text-black" value="">
              เลือก....
            </option>
            {role.map((item, index) => {
              return (
                <option key={index} className=" text-black" value={item["rid"]}>
                  {item["rname"]}
                </option>
              );
            })}
          </select>
        </div>
        <div className="input-box">
          <h1 className="title">โปรไฟล์</h1>
          <input
            required
            name="uprofile"
            type="file"
            className="file"
            onChange={handleFileProfileChange}
          />
        </div>
        <div className="input-box">
          <h1 className="title">ใบขับขี่</h1>
          <input
            required
            name="udive"
            type="file"
            className="file"
            onChange={handleFileDiveChange}
          />
        </div>
        <div className="input-btn bg-green-500">
          <button
            className="text-white text-2xl"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            ลงทะเบียน
          </button>
        </div>
      </form>
    </div>
  );
}
