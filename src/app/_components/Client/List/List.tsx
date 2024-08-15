import React from "react";
import "./stlye.css";
import "./reponsive.css";
import Image from "next/image";
type Props = {};

export default function List({}: Props) {
  return (
    <div className="List">
      <div className="list-contact">
        <div className="list-header">
          <div className="list-count">
            <button className="btn">จำนวนทั้งหมด: 10</button>
          </div>
        </div>
        <div className="list-table">
          <div className="table">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="text-black">
                    <th
                      scope="col"
                      className="px-6 py-3 text-black font-normal"
                    >
                      รหัสการจอง
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-black font-normal"
                    >
                      ยี่ห้อรถ
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-black font-normal"
                    >
                      รุ่นรถ
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-black font-normal"
                    >
                      ชื่อผู้จอง
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-black font-normal"
                    >
                      วันที่รับรถ
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-black font-normal"
                    >
                      วันที่คืนรถ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4 text-black ">8452</td>
                    <td className="px-6 py-4 text-black ">Nissan</td>
                    <td className="px-6 py-4 text-black ">GTR-35</td>
                    <td className="px-6 py-4 text-black ">
                      นาย ธวิชชัย บุญส่ง
                    </td>
                    <td className="px-6 py-4 text-black ">12/06/2545</td>
                    <td className="px-6 py-4 text-black ">12/07/2545</td>
                    <td className="px-6 py-4 text-black action">
                      <button className="detail">
                        <Image
                          src={"/info.png"}
                          alt="logo"
                          width={24}
                          height={24}
                          className="Image"
                        />
                      </button>
                      <button className="button">
                        <Image
                          src={"/delete.png"}
                          alt="logo"
                          width={24}
                          height={24}
                          className="Image"
                        />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
