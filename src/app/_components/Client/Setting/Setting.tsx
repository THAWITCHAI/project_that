"use client";
import React, { useState } from "react";
import "./style.css";
import "./reponsive.css";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

type Props = {};

export default function Setting({}: Props) {
  const {data:session} = useSession()
  const [file, setFile] = useState("");
  return (
    <div className="setting-bg">
      <div className="show-contact">
        <h1 className="text-black title">ข้อมูลผู้ตัวเอง</h1>
        <div className="box-form">
          <div className="box-show">
            <Image
              src={"/key-chain.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            <input
              type="text"
              placeholder="รหัสผู้ใช้"
              className="input"
              disabled
              defaultValue={session?.user.uid}
            />
          </div>
          <div className="box-show">
            <Image
              src={"/id-card.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            <input
              type="text"
              placeholder="ชื่อ - นามสกุล"
              className="input"
              defaultValue={session?.user.uname}
            />
          </div>
          <div className="box-show">
            <Image
              src={"/id-card.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            <input
              type="text"
              placeholder="ชื่อเล่น"
              className="input"
              defaultValue={session?.user.unick_name}
            />
          </div>
          <div className="box-show">
            <Image
              src={"/mail.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            <input
              type="text"
              placeholder="อีเมล"
              className="input"
              defaultValue={session?.user.uemail}
            />
          </div>
          <div className="box-show">
            <Image
              src={"/password.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            <input
              type="text"
              placeholder="รหัสผ่าน"
              className="input"
              defaultValue={session?.user.upwd}
            />
          </div>
          <div className="box-show">
            <Image
              src={"/telephone.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            <input
              type="text"
              placeholder="เบอร์โทร"
              className="input"
              defaultValue={session?.user.uphone}
            />
          </div>
          <div className="box-show">
            <Image
              src={"/search.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            <input
              type="text"
              placeholder="สถานะ"
              className="input"
              defaultValue={session?.user.rname}
              disabled
            />
          </div>
          <div className="box-show box-file">
            <label htmlFor="" className="text-black">
              อัพเดทใบขับขี่
            </label>
            <input
              type="file"
              placeholder="รหัสผู้ใช้"
              className="file"
              onChange={(e) => setFile(e.target.value)}
            />
          </div>
          <div className="box-show-btn">
            <button
              className="btn text-white text-xl rounded-lg bg-yellow-500 w-full h-full"
              onClick={() => [history.back()]}
            >
              กลับ
            </button>
          </div>
          <div className="box-show-btn">
            {file == "" ? (
              ""
            ) : (
              <button className="btn text-white text-xl rounded-lg bg-green-500">
                อัพเดท
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
