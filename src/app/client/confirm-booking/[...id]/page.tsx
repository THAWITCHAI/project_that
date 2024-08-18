import Sidebar from "@/app/_components/Client/Sidebar/Sidebar";
import React from "react";
import "./style.css";
import Link from "next/link";

type Props = any;

export default function page({ params }: Props) {
  const { id } = params;
  return (
    <div className="main">
      <Sidebar />
      <div className="confirm-booking">
        <div className="card">
          <h1 className="text-black h1">กรุณากรอกวันที่</h1>
          <form action="" className="form">
            <div className="input">
              <label htmlFor="" className="text-green-500 w-32 label">
                วันที่รับรถ
              </label>
              <input type="date" className="text-black inp" />
            </div>
            <div className="input">
              <label htmlFor="" className="text-green-500 w-32 label">
                วันที่คืน
              </label>
              <input type="date" className="text-black inp" />
            </div>
            <div className="btn flex justify-center items-center">
              <button type="submit" className="text-white bg-green-500 button">
                <Link href={'/client/list'}>ยืนยันการจอง</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
