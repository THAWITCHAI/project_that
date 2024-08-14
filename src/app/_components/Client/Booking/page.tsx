import React from "react";
import "./reponsive.css";
import "./style.css";
import Image from "next/image";
type Props = {};

export default function Booking({}: Props) {
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
          <div className="price">2540 ฿</div>
        </div>
        <div className="card-btn">
          <button className="btn btn-1">รายละเอียด</button>
          <button className="btn btn-2">จอง</button>
        </div>
      </div>
    </div>
  );
}
