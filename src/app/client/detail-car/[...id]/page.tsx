import Sidebar from "@/app/_components/Client/Sidebar/Sidebar";
import React from "react";
import "./reponsive.css";
import "./style.css";
import Image from "next/image";

type Props = any;

export default function Detail_Cars({ params }: Props) {
  const { id } = params;
  if (id) {
    return (
      <div className="main">
        <Sidebar />
        <div className="detail-car">
          <div className="contact">
            <div className="image">
              <Image src={"/car-1.webp"} width={600} height={128} alt="" />
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
                <div className="resualt text-black">Nissan</div>
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
                <div className="resualt text-black">GTR-35</div>
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
                <div className="resualt text-black">6</div>
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
                  <div className="bg-[#f0f] rounded-xl w-12 h-12"></div>
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
                <div className="resualt text-black">42 กข อุบลราชธานี</div>
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
                <div className="resualt text-black">5000</div>
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
                  <h1 className="text-black title-name">ประเภท</h1>
                </div>
                <div className="resualt text-black">รถยนต์</div>
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
                <div className="resualt text-green-500">ว่าง</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
