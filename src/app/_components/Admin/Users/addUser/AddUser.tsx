'use client'
import React from "react";
import "./addcar.css";
type Props = {};

export default function AddUser({}: Props) {
  return (
    <div className="main-add-user">
      <form method="post" className="form-add-car">
        <div className="input-box">
          <h1 className="title">รหัสผู้ใช้</h1>
          <input
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
            required
            name="uphone"
            type="text"
            className="input"
            placeholder="Your Phone Number"
          />
        </div>
        <div className="input-box">
          <h1 className="title">บทบาท</h1>
          <select name="urole" className="input">
            <option className=" text-black" value="">
              User
            </option>
            <option className=" text-black" value="">
              Admin
            </option>
          </select>
        </div>
        <div className="input-box">
          <h1 className="title">โปรไฟล์</h1>
          <input required name="uimg_pro" type="file" className="file" />
        </div>
        <div className="input-box">
          <h1 className="title">ใบขับขี่</h1>
          <input required name="uimg_car" type="file" className="file" />
        </div>
        <div className="input-btn bg-green-500">
          <button className="text-white text-2xl">ลงทะเบียน</button>
        </div>
      </form>
    </div>
  );
}
