"use client";
import Sidebar from "@/app/_components/Client/Sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import "./reponsive.css";
import "./style.css";
import Image from "next/image";

type Props = any;

export default function Detail_Cars({ params }: Props) {
  const { id } = params;
  const [Datacar, setDataCar] = useState([]);

  useEffect(() => {
    fetch("/api/car")
      .then((res) => res.json())
      .then((res) => setDataCar(res));
  }, []);
  if (id) {
    return (
      <div className="main">
        <Sidebar />
        {Datacar.map((item, index) => {
          if (String(item["cid"]) == String(id)) {
            return (
              <div key={index} className="detail-car">
                <div className="contact">
                  <div className="image overflow-hidden">
                    <Image
                      src={item["cpath"]}
                      width={600}
                      height={128}
                      alt=""
                      className=" rounded-lg"
                    />
                  </div>
                  <div className="detail">
                    <div className="detail-item">
                      <div className="title">
                        <Image
                          src={"/key-chain.png"}
                          width={24}
                          height={24}
                          alt=""
                          className="Image"
                        />
                        <h1 className="text-black title-name">รหัสรถ</h1>
                      </div>
                      <div className="resualt text-black">{id}</div>
                    </div>
                    <div className="detail-item">
                      <div className="title">
                        <Image
                          src={"/tag.png"}
                          width={24}
                          height={24}
                          alt=""
                          className="Image"
                        />
                        <h1 className="text-black title-name">แบรนด์</h1>
                      </div>
                      <div className="resualt text-black">{item["cbrand"]}</div>
                    </div>
                    <div className="detail-item">
                      <div className="title">
                        <Image
                          src={"/hatchback.png"}
                          width={24}
                          height={24}
                          alt=""
                          className="Image"
                        />
                        <h1 className="text-black title-name">รุ่น</h1>
                      </div>
                      <div className="resualt text-black">{item["cmodel"]}</div>
                    </div>
                    <div className="detail-item">
                      <div className="title">
                        <Image
                          src={"/car-seat.png"}
                          width={24}
                          height={24}
                          alt=""
                          className="Image"
                        />
                        <h1 className="text-black title-name">ที่นั่ง</h1>
                      </div>
                      <div className="resualt text-black">{item["cseat"]}</div>
                    </div>
                    <div className="detail-item">
                      <div className="title">
                        <Image
                          src={"/art.png"}
                          width={24}
                          height={24}
                          alt=""
                          className="Image"
                        />
                        <h1 className="text-black title-name">สี</h1>
                      </div>
                      <div className="resualt text-black">
                        <div
                          className="rounded-xl w-12 h-12 color"
                          style={{ background: String(item["ccolor"]) }}
                        ></div>
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="title">
                        <Image
                          src={"/license-plate.png"}
                          width={24}
                          height={24}
                          alt=""
                          className="Image"
                        />
                        <h1 className="text-black title-name">ป้ายทะเบียน</h1>
                      </div>
                      <div className="resualt text-black">
                        {item["clicense"]}
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="title">
                        <Image
                          src={"/dollar.png"}
                          width={24}
                          height={24}
                          alt=""
                          className="Image"
                        />
                        <h1 className="text-black title-name">ราคา</h1>
                      </div>
                      <div className="resualt text-black">{item["cprice"]}</div>
                    </div>
                    <div className="detail-item">
                      <div className="title">
                        <Image
                          src={"/vehicle.png"}
                          width={24}
                          height={24}
                          alt=""
                          className="Image"
                        />
                        <h1 className="text-black title-name">ประเภท</h1>
                      </div>
                      <div className="resualt text-black">{item["tname"]}</div>
                    </div>
                    <div className="detail-item">
                      <div className="title">
                        <Image
                          src={"/clipboard.png"}
                          width={24}
                          height={24}
                          alt=""
                          className="Image"
                        />
                        <h1 className="text-black title-name">สถานะรถ</h1>
                      </div>
                      {item["sid"] == "1" && (
                        <div className="resualt text-green-500">
                          {item["sname"]}
                        </div>
                      )}
                      {item["sid"] == "2" && (
                        <div className="resualt text-red-500">
                          {item["sname"]}
                        </div>
                      )}
                      {item["sid"] == "3" && (
                        <div className="resualt text-yellow-500">
                          {item["sname"]}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
