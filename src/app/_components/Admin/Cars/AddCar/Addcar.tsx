"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import "./style.css";
type Props = {};

export default function Addcar({}: Props) {
  const [form, setForm] = useState({}); // ตัวแปรเก็บค่าข้อมูล
  const [typeAPI, setTypeAPI] = useState([]);
  const [base64, setBase64] = useState<String | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // ส่งข้อมูลรถไป API
  const handleSubmit = () => {
    fetch("/api/car", {
      method: "POST",
      body: JSON.stringify(Object.assign({}, form, { cpath: String(base64) })),
    }).then((res)=>res.json())
    .then((res)=>alert(res['massage']))
  };

  useEffect(() => {
    getType();
  }, []);

  const getType = async () => {
    await fetch("/api/type_car")
      .then((res) => res.json())
      .then((res) => setTypeAPI(res));
  };

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
          <select name="tid" onChange={handleChang} className="input">
            <option value={0} className="text-black">
              กรุณาเลือก...
            </option>
            {typeAPI.map((item, index) => {
              return (
                <option key={index} value={item["tid"]} className="text-black">
                  {item["tname"]}
                </option>
              );
            })}
          </select>
        </div>
        <div className="input-form">
          <div className="title">สถานะรถ</div>
          <select className="input" name="sid" onChange={handleChang}>
            <option value="0" className="text-black">
              เลือก
            </option>
            <option value="1" className="text-green-500">
              ว่าง
            </option>
            <option value="2" className="text-red-500">
              ไม่ว่าง
            </option>
            <option value="3" className="text-yellow-500">
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
            onChange={handleFileChange}
          />
        </div>
        <div className="input-form btn-2">
          {Object.keys(form).length < 9 ? (
            <button
              className="Link bg-red-500 hover:bg-red-600"
              onClick={(e) => e.preventDefault()}
            >
              <h1>กรอกให้ครบ!!</h1>
            </button>
          ) : (
            <button
              className="Link bg-green-500 hover:bg-green-600"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <h1>ยืนยันการจอง</h1>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
