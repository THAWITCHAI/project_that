"use client";
import Sidebar from "@/app/_components/Client/Sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import "./style.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = any;

export default function Confirm_Booking({ params }: Props) {
  const { id } = params;
  // สถานที่จะไป ถนน ซอย แขวง/ตำบล อำเภอ จังหวัด รหัสไปรษณีย์
  const [dataCar, setDataCar] = useState([]);
  const [form, setForm] = useState({});
  const router = useRouter();

  const handleChang = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const cid = id[0];
    const data = Object.assign({}, form, { uid: 1, cid: cid });
    console.log(data);
    return router.replace("/client/list");
  };

  useEffect(() => {
    fetch("/api/car")
      .then((res) => res.json())
      .then((res) => setDataCar(res));
  }, []);

  return (
    <div className="main">
      <Sidebar />
      <div className="confirm-booking">
        {dataCar.map((item, index) => {
          if (String(item["cid"]) === String(id)) {
            return (
              <form key={index} method="post" className="card-form">
                <div className="box-input">
                  <label className="text-black label">ชื่อสถานที่</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="ชื่อสถานที่"
                    name="location"
                    onChange={handleChang}
                  />
                </div>
                <div className="box-input">
                  <label className="text-black label">ถนน</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="ชื่อถนน"
                    name="road"
                    onChange={handleChang}
                  />
                </div>
                <div className="box-input">
                  <label className="text-black label">ซอย</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="ชื่อซอย"
                    name="alley"
                    onChange={handleChang}
                  />
                </div>
                <div className="box-input">
                  <label className="text-black label">แขวง/ตำบล</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="ชื่อแขวง/ตำบล"
                    name="s_d"
                    onChange={handleChang}
                  />
                </div>
                <div className="box-input">
                  <label className="text-black label">อำเภอ</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="ชื่ออำเภอ"
                    name="district"
                    onChange={handleChang}
                  />
                </div>
                <div className="box-input">
                  <label className="text-black label">จังหวัด</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="ชื่อจังหวัด"
                    name="province"
                    onChange={handleChang}
                  />
                </div>
                <div className="box-input">
                  <label className="text-black label">รหัสไปรษณีย์</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="ตัวอย่าง 34220"
                    name="post_id"
                    onChange={handleChang}
                  />
                </div>
                <div className="box-input">
                  <label className="text-black label">วันที่รับ</label>
                  <input
                    className="input"
                    type="date"
                    placeholder="ชื่อสถานที่"
                    name="s_date"
                    onChange={handleChang}
                  />
                </div>
                <div className="box-input">
                  <label className="text-black label">วันที่คืน</label>
                  <input
                    className="input"
                    type="date"
                    placeholder="ชื่อสถานที่"
                    name="e_date"
                    onChange={handleChang}
                  />
                </div>
                <button
                  className="btn bg-green-500  hover:bg-green-600 Link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  ยืนยันการจอง
                </button>
              </form>
            );
          }
        })}
      </div>
    </div>
  );
}
