"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import "./reponsive.css";
import Image from "next/image";
import Sidebar from "@/app/_components/Admin/Sidebar/Sidebar";
import Link from "next/link";

type Props = any;

export default function DetailUser({ params }: Props) {
  const { id } = params;

  const [file, setFile] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  return (
    <div className="main">
      <Sidebar />
      <div className="setting-bg">
        <div className="show-contact">
          <h1 className="text-black title">ข้อมูลผู้ใช้</h1>
          {data.map((item, index) => {
            if (String(item["uid"]) == String(id)) {
              return (
                <div key={index} className="box-form">
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
                      defaultValue={item["uid"]}
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
                      defaultValue={item["uname"]}
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
                      defaultValue={item["unick_name"]}
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
                      defaultValue={item["uemail"]}
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
                      defaultValue={item["upwd"]}
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
                      defaultValue={item["uphone"]}
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
                      defaultValue={item["rname"]}
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
                      className="btn text-white text-xl rounded-lg bg-yellow-500"
                      onClick={() => {
                        history.back();
                      }}
                    >
                      กลับ
                    </button>
                  </div>
                  <div className="box-show-btn">
                    {file == ""  ? (
                      <button className="btn text-white text-xl rounded-lg bg-gray-500">
                        อัพเดท
                      </button>
                    ) : (
                      <button className="btn text-white text-xl rounded-lg bg-green-500">
                        อัพเดท
                      </button>
                    )}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
