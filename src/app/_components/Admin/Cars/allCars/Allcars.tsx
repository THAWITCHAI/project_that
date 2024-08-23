"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import Link from "next/link";
type Props = {};

export default function Allcars({}: Props) {
  const [dataType, setDataType] = useState([]);
  const [select, setSelect] = useState(1);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getDataType();
    getDatacar();
  }, []);

  const getDataType = async () => {
    await fetch("/api/type_car")
      .then((res) => res.json())
      .then((res) => setDataType(res));
  };

  const getDatacar = async () => {
    await fetch("/api/car")
      .then((res) => res.json())
      .then((res) => setCars(res));
  };

  const handleDelete = async (cid: any) => {
    await fetch("/api/car/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cid: cid }),
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res["massage"]);
        getDatacar();
      });
  };
  const handleDeleteType = async (cid: any) => {
    await fetch("/api/type_car/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tid: cid }),
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res["massage"]);
        getDataType();
      });
  };
  return (
    <div className="all-car">
      <div className="box-count">
        <div className="h1">
          <select
            name=""
            id=""
            className="h-full w-3/5 rounded-xl outline-none"
            onChange={(e) => {
              setSelect(Number(e.target.value));
            }}
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
        {select == 2 && (
          <div className="h1">จำนวนทั้งหมด: {Object.keys(cars).length}</div>
        )}
        {select == 3 && (
          <div className="h1">จำนวนทั้งหมด: {Object.keys(dataType).length}</div>
        )}
      </div>
      {select == 2 ? (
        <div className="box-table">
          <div className="relative overflow-x-auto table-center">
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
                    ประเภทรถ
                  </th>
                  <th scope="col" className="px-6 py-3 text-black">
                    ตอบสนอง
                  </th>
                </tr>
              </thead>
              <tbody>
                {cars.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 box-tr"
                    >
                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item["cid"]}
                      </td>
                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item["cbrand"]}
                      </td>
                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item["cmodel"]}
                      </td>
                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item["clicense"]}
                      </td>
                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-green-500 whitespace-nowrap dark:text-white"
                      >
                        {item["cprice"]}
                      </td>
                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item["cseat"]}
                      </td>
                      {item["sid"] == "1" && (
                        <td
                          scope="row"
                          className="title px-6 py-4 font-light text-green-500 whitespace-nowrap dark:text-white"
                        >
                          {item["sname"]}
                        </td>
                      )}
                      {item["sid"] == "2" && (
                        <td
                          scope="row"
                          className="title px-6 py-4 font-light text-red-500 whitespace-nowrap dark:text-white"
                        >
                          {item["sname"]}
                        </td>
                      )}
                      {item["sid"] == "3" && (
                        <td
                          scope="row"
                          className="title px-6 py-4 font-light text-yellow-500 whitespace-nowrap dark:text-white"
                        >
                          {item["sname"]}
                        </td>
                      )}
                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-green-500 whitespace-nowrap dark:text-white"
                      >
                        {item["tname"]}
                      </td>
                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <Link href={"/admin/car/detail-car/" + item["cid"]}>
                          <button className="btn mr-4 bg-yellow-500 hover:bg-yellow-600">
                            เพิ่มเติม
                          </button>
                        </Link>
                        <button
                          className="btn bg-red-500 hover:bg-red-600"
                          onClick={() => {
                            handleDelete(item["cid"]);
                          }}
                        >
                          ลบ
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
      {select == 3 ? (
        <div className="box-table">
          <div className="relative overflow-x-auto table-2 table-center">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 text-black">
                    รหัสรถปรเภท
                  </th>
                  <th scope="col" className="px-6 py-3 text-black">
                    ชื่อประเภท
                  </th>

                  <th scope="col" className="px-6 py-3 text-black">
                    ตอบสนอง
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataType.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 box-tr"
                    >
                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item["tid"]}
                      </td>
                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item["tname"]}
                      </td>

                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <button
                          className="btn bg-red-500 hover:bg-red-600"
                          onClick={() => {
                            handleDeleteType(item["tid"]);
                          }}
                        >
                          ลบ
                        </button>
                      </td>
                    </tr>
                  );
                })}
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
