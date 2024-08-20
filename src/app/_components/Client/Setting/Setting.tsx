"use client";
import React, { useState } from "react";
import "./style.css";
import "./reponsive.css";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Setting({}: Props) {
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
              defaultValue={1349}
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
              defaultValue={"Tat Sutummawong"}
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
              defaultValue={"ทรรศ"}
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
              defaultValue={"Tat_Sutummawong@gmail.com"}
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
              defaultValue={"13495000"}
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
              defaultValue={"065-297-4104"}
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
              defaultValue={"User"}
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
            <button className="btn text-white text-xl rounded-lg bg-yellow-500 w-full h-full">
              <Link href={"/client/booking"}>กลับ</Link>
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
