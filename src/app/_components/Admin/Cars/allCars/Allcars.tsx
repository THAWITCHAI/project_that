"use client";
import React, { useState } from "react";
import "./style.css";
import Link from "next/link";
type Props = {};

export default function Allcars({}: Props) {
  const [select, setSelect] = useState(1);
  return (
    <div className="all-car">
      <div className="box-count">
        <div className="h1">
          <select
            name=""
            id=""
            className="h-full w-3/5 rounded-xl "
            onChange={(e) => setSelect(Number(e.target.value))}
          >
            <option value={1} className="text-center text-[#1B98E0]">
              กรุณาเลือก
            </option>
            <option value={2} className="text-center text-[#1B98E0]">
              รถ
            </option>
            <option value={3} className="text-center text-[#1B98E0]">
              ประเภทรถ
            </option>
          </select>
        </div>
        <div className="h1">จำนวนทั้งหมด: 20</div>
      </div>
      {select == 2 ? (
        <div className="box-table">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 text-black">
                    รหัสรถ
                  </th>
                  <th scope="col" className="px-6 py-3 text-black">
                    แบรนด์
                  </th>
                  <th scope="col" className="px-6 py-3 text-black">
                    รุ่น
                  </th>
                  <th scope="col" className="px-6 py-3 text-black">
                    ป้ายทะเบียน
                  </th>
                  <th scope="col" className="px-6 py-3 text-black">
                    ราคา
                  </th>
                  <th scope="col" className="px-6 py-3 text-black">
                    จำนวนที่นั่ง
                  </th>
                  <th scope="col" className="px-6 py-3 text-black">
                    สถานะรถ
                  </th>
                  <th scope="col" className="px-6 py-3 text-black">
                    ตอบสนอง
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 box-tr">
                  <td
                    scope="row"
                    className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1524
                  </td>
                  <td
                    scope="row"
                    className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Nissan
                  </td>
                  <td
                    scope="row"
                    className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    GTR-35
                  </td>
                  <td
                    scope="row"
                    className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    กข 542 อุบลราชธานี
                  </td>
                  <td
                    scope="row"
                    className="title px-6 py-4 font-light text-green-500 whitespace-nowrap dark:text-white"
                  >
                    2,000 ฿
                  </td>
                  <td
                    scope="row"
                    className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    6
                  </td>
                  <td
                    scope="row"
                    className="title px-6 py-4 font-light text-green-500 whitespace-nowrap dark:text-white"
                  >
                    กำลังใช้งาน
                  </td>
                  <td
                    scope="row"
                    className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Link href={"/admin/car/detail-car/1254"}>
                      <button className="btn mr-4 bg-yellow-500 hover:bg-yellow-600">
                        เพิ่มเติม
                      </button>
                    </Link>
                    <Link href={""}>
                      <button className="btn bg-red-500 hover:bg-red-600">
                        ลบ
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
