import React from "react";
import "./style.css";
import Link from "next/link";
type Props = {};

export default function Alluser({}: Props) {
  return (
    <div className="all-car">
      <div className="box-count">
        <div className="h1">
          <select name="" id="" className="h-full w-3/5 rounded-xl ">
            <option value="" className="text-center text-[#1B98E0]">
              กรุณาเลือก
            </option>
            <option value="" className="text-center text-[#1B98E0]">
              ผู้ใช้
            </option>
            <option value="" className="text-center text-[#1B98E0]">
              บทบาท
            </option>
          </select>
        </div>
        <div className="h1">จำนวนทั้งหมด: 20</div>
      </div>
      <div className="box-table">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-black">
                  รหัสผู้ใช้
                </th>
                <th scope="col" className="px-6 py-3 text-black">
                  ชื่อ - นามสุกล
                </th>
                <th scope="col" className="px-6 py-3 text-black">
                  ชื่อเล่น
                </th>
                <th scope="col" className="px-6 py-3 text-black">
                  อีเมล
                </th>
                <th scope="col" className="px-6 py-3 text-black">
                  เบอร์โทร
                </th>
                <th scope="col" className="px-6 py-3 text-black">
                  บทบาท
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
                  5134
                </td>
                <td
                  scope="row"
                  className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Thawitchai Boonsong
                </td>
                <td
                  scope="row"
                  className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                >
                  เป้
                </td>
                <td
                  scope="row"
                  className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                >
                  thawitchai@gmail.com
                </td>
                <td
                  scope="row"
                  className="title px-6 py-4 font-light text-green-500 whitespace-nowrap dark:text-white"
                >
                  0652974104
                </td>
                <td
                  scope="row"
                  className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                >
                  User
                </td>
                <td
                  scope="row"
                  className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Link href={"/admin/user/detail-user/1524"}>
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
    </div>
  );
}
