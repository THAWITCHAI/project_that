import React from "react";
import "./style.css";
type Props = {};

export default function Addcar({}: Props) {
  return (
    <div className="main-addcar">
      <form action="" method="post" className="form-addcar">
        <div className="input-form">
          <div className="title">รหัสรถ</div>
          <input type="text" className="input" placeholder="#1542" />
        </div>
        <div className="input-form">
          <div className="title">แบรนด์</div>
          <input type="text" className="input" placeholder="#Your Brand Car?" />
        </div>
        <div className="input-form">
          <div className="title">ยี่ห้อ</div>
          <input type="text" className="input" placeholder="#Your Model Car?" />
        </div>
        <div className="input-form">
          <div className="title">ที่นั่ง</div>
          <input type="text" className="input" placeholder="#5" />
        </div>
        <div className="input-form">
          <div className="title">สี</div>
          <input type="color" className="input" placeholder="#1542" />
        </div>
        <div className="input-form">
          <div className="title">ป้ายทะเบียน</div>
          <input type="text" className="input" placeholder="#NEED 1524" />
        </div>
        <div className="input-form">
          <div className="title">ราคา(฿)</div>
          <input type="text" className="input" placeholder="#200" />
        </div>
        <div className="input-form">
          <div className="title">ประเภทรถ</div>
          <select className="input">
            <option value="" className="text-black">
              รถยนต์
            </option>
            <option value="" className="text-black">
              มอเตอร์ไซต์
            </option>
          </select>
        </div>
        <div className="input-form">
          <div className="title">สถานะรถ</div>
          <select className="input">
            <option value="" className="text-green-500">
              ว่าง
            </option>
            <option value="" className="text-red-500">
              ไม่ว่าง
            </option>
            <option value="" className="text-yellow-500">
              กำลังใช้งาน
            </option>
          </select>
        </div>
        <div className="input-form">
          <div className="title">ภาพ</div>
          <input type="file" className="input file" placeholder="#1542" />
        </div>
      </form>
    </div>
  );
}
