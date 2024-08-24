"use client";
import React, { useEffect, useState } from "react";
import "./reponsive.css";
import "./hee.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
type Props = {};

export default function All_Cars({}: Props) {
  const [dataCar, setDataCar] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/car")
      .then((res) => res.json())
      .then((res) => setDataCar(res));
  }, []);

  return (
    <div className="booking">
      {dataCar.map((item, index) => {
        return (
          <div key={index} className="card">
            <div className="card-image overflow-hidden mb-2">
              <Image
                src={item["cpath"]}
                width={570 / 2}
                height={220 / 2} //Image size Width:570px,Heigth:220px
                alt="image"
                className="Image"
              />
            </div>
            <div className="card-contact">
              <div className="name">{item["cmodel"]}</div>
              <div className="seat">จำนวนที่นั่ง: {item["cseat"]}</div>
              <div className="price">{item["cprice"]} ฿</div>
            </div>
            <div className="card-btn">
              <button
                className="btn btn-1"
                onClick={() => router.push("/client/detail-car/" + item["cid"])}
              >
                รายละเอียด
              </button>
              {item["sid"] == "1" && (
                <button className=" btn-2 bg-green-500">{item["sname"]}</button>
              )}
              {item["sid"] == "2" && (
                <button className="btn-2 ">{item["sname"]}</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
// #23A33F
