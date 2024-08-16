"use client";
import React from "react";
import "./reponsive.css";
import "./style.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
type Props = {};

export default function Booking({}: Props) {
  const router = useRouter();
  return (
    <div className="booking">
      <div className="card">
        <div className="card-image">
          <Image
            src={"/car-1.webp"}
            width={570 / 2}
            height={220 / 2} //Image size Width:570px,Heigth:220px
            alt="image"
            className="Image"
          />
        </div>
        <div className="card-contact">
          <div className="name">Alphard</div>
          <div className="seat">จำนวนที่นั่ง: 4</div>
          <div className="price">2,540 ฿</div>
        </div>
        <div className="card-btn">
          <button
            className="btn btn-1"
            onClick={() => router.push("/client/detail-car/564")}
          >
            <Link href={"/client/detail-car/1"}>รายละเอียด</Link>
          </button>
          <button
            className="btn btn-2"
            onClick={() => router.push("/client/confirm-booking/564")}
          >
            <Link href={"/client/confirm-booking/1"}>จอง</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
