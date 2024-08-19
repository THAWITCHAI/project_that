import Sidebar from "@/app/_components/Client/Sidebar/Sidebar";
import React from "react";
import "./style.css";
import Link from "next/link";

type Props = any;

export default function page({ params }: Props) {
  const { id } = params;
  // สถานที่จะไป ถนน ซอย แขวง/ตำบล อำเภอ จังหวัด รหัสไปรษณีย์
  return (
    <div className="main">
      <Sidebar />
      <div className="confirm-booking">
        <form method="post" className="card-form">
          <div className="box-input">
            <label className="text-black label">ชื่อสถานที่</label>
            <input className="input" type="text" placeholder="ชื่อสถานที่" />
          </div>
          <div className="box-input">
            <label className="text-black label">ถนน</label>
            <input className="input" type="text" placeholder="ชื่อสถานที่" />
          </div>
          <div className="box-input">
            <label className="text-black label">ซอย</label>
            <input className="input" type="text" placeholder="ชื่อสถานที่" />
          </div>
          <div className="box-input">
            <label className="text-black label">แขวง/ตำบล</label>
            <input className="input" type="text" placeholder="ชื่อสถานที่" />
          </div>
          <div className="box-input">
            <label className="text-black label">อำเภอ</label>
            <input className="input" type="text" placeholder="ชื่อสถานที่" />
          </div>
          <div className="box-input">
            <label className="text-black label">จังหวัด</label>
            <input className="input" type="text" placeholder="ชื่อสถานที่" />
          </div>
          <div className="box-input">
            <label className="text-black label">รหัสไปรษณีย์</label>
            <input className="input" type="text" placeholder="ชื่อสถานที่" />
          </div>
          <div className="box-input">
            <label className="text-black label">วันที่รับ</label>
            <input className="input" type="date" placeholder="ชื่อสถานที่" />
          </div>
          <div className="box-input">
            <label className="text-black label">วันที่คืน</label>
            <input className="input" type="date" placeholder="ชื่อสถานที่" />
          </div>
          <Link href={"/client/list"} className="Link">
            <button className="btn bg-green-500  hover:bg-green-600">
              ยืนยันการจอง
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
