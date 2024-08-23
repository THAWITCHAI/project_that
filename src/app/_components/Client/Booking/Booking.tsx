"use client";
import React, { useEffect, useState } from "react";
import "./reponsive.css";
import "./style.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
type Props = {};

export default function Booking({}: Props) {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    getDatacar();
  }, []);

  const getDatacar = async () => {
    await fetch("/api/car")
      .then((res) => res.json())
      .then((res) => setCars(res));
  };
  const router = useRouter();
  return (
    <div className="booking">
      {cars.map((item, index) => {
        if(item['sid']=='1'){
          return (
            <div key={index} className="card">
              <div className="card-image overflow-hidden">
                <Image
                  src={item["cpath"]}
                  width={570 / 2}
                  height={220 / 2} //Image size Width:570px,Heigth:220px
                  alt="image"
                  className="Image"
                />
              </div>
              <div className="card-contact mt-2">
                <div className="name">{item["cbrand"]}</div>
                <div className="seat">จำนวนที่นั่ง {item["cseat"]}</div>
                <div className="price">{item["cprice"]}</div>
              </div>
              <div className="card-btn">
                <button
                  className="btn btn-1"
                  onClick={() => router.push("/client/detail-car/" + item["cid"])}
                >
                  <Link href={"/client/detail-car/" + item["cid"]}>
                    รายละเอียด
                  </Link>
                </button>
                <button
                  className="btn btn-2"
                  onClick={() =>
                    router.push("/client/confirm-booking/" + item["cid"])
                  }
                >
                  <Link href={"/client/confirm-booking/" + item["cid"]}>จอง</Link>
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
