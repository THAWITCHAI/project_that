import React, { useState } from "react";
import "./style.css";
type Props = {};

export default function Addcar({}: Props) {
  const [form, setForm] = useState({});

  const handleChang = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="main-addcar">
      <form action="" method="post" className="form-addcar">
        <div className="input-form">
          <div className="title">รหัสรถ</div>
          <input
            required
            type="number"
            className="input"
            placeholder="#1542"
            name="cid"
            onChange={handleChang}
          />
        </div>
        <div className="input-form">
          <div className="title">แบรนด์</div>
          <input
            required
            type="text"
            className="input"
            placeholder="#Your Brand Car?"
            name="cbrand"
            onChange={handleChang}
          />
        </div>
        <div className="input-form">
          <div className="title">รุ่น</div>
          <input
            required
            type="text"
            className="input"
            placeholder="#Your Model Car?"
            name="cmodel"
            onChange={handleChang}
          />
        </div>
        <div className="input-form">
          <div className="title">ที่นั่ง</div>
          <input
            required
            type="number"
            className="input"
            placeholder="#5"
            name="cseat"
            onChange={handleChang}
          />
        </div>
        <div className="input-form">
          <div className="title">สี</div>
          <input
            required
            type="color"
            className="input"
            placeholder="#1542"
            name="ccolor"
            onChange={handleChang}
          />
        </div>
        <div className="input-form">
          <div className="title">ป้ายทะเบียน</div>
          <input
            required
            type="text"
            className="input"
            placeholder="#NEED 1524"
            name="clicense"
            onChange={handleChang}
          />
        </div>
        <div className="input-form">
          <div className="title">ราคา(฿)</div>
          <input
            required
            type="number"
            className="input"
            placeholder="#200"
            name="cprice"
            onChange={handleChang}
          />
        </div>
        <div className="input-form">
          <div className="title">ประเภทรถ</div>
          <select name="ctype" onChange={handleChang} className="input">
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
          <select className="input" name="cstatus" onChange={handleChang}>
            <option value="152" className="text-green-500">
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
          <input
            type="file"
            className="input file"
            placeholder="#1542"
            name="cimg"
            onChange={handleChang}
          />
        </div>
        <div className="input-form btn">
          {Object.keys(form).length < 10 ? (
            <button className="Link bg-red-500 hover:bg-red-600">
              <h1>กรอกให้ครบ!!</h1>
            </button>
          ) : (
            <button className="Link bg-green-500 hover:bg-green-600">
              <h1>ยืนยันการจอง</h1>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
