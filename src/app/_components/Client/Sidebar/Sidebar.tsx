"use client";
import React, { useEffect, useState } from "react";
import "./reponsive.css";
import "./sidebar.css";
import Image from "next/image";
type Props = {};

export default function Sidebar({}: Props) {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // Set the initial time once the component has mounted (client-side)
    setTime(new Date());

    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format time as HH:mm:ss
  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours} : ${minutes}  : ${seconds} `;
  };
  return (
    <div className="sidebar">
      <div className="setting">
        <Image
          src={"/settings.png"}
          width={24}
          height={24}
          alt="setting"
          className="Image"
        />
      </div>
      <div className="profile">
        <div className="image-profile">
          <Image
            src={"/profile.jpg"}
            alt="profile"
            width={128}
            height={128}
            className="Image"
          />
        </div>
        <div className="contact-profile">
          <h1 className="status">Thawitchai Boonsong</h1>
          <p>User</p>
        </div>
      </div>
      <div className="side-menu">
        <div className="item menu-1">
          <Image
            src={"/appointment.png"}
            width={24}
            height={24}
            alt=""
            className="Image"
          />
          <h3>จองรถ</h3>
        </div>
        <div className="item menu-2">
          <Image
            src={"/to-do-list.png"}
            width={24}
            height={24}
            alt=""
            className="Image"
          />
          <h3>ประวัติการจอง</h3>
        </div>
        <div className="item menu-3">
          <Image
            src={"/pickup-car.png"}
            width={24}
            height={24}
            alt=""
            className="Image"
          />
          <h3>รถทั้งหมด</h3>
        </div>
        <div className="item menu-4">
          <Image
            src={"/logout.png"}
            width={24}
            height={24}
            alt=""
            className="Image"
          />
          <h3>ออกจากระบบ</h3>
        </div>
        <div className="menu-5">{time ? formatTime(time) : "Loading..."}</div>
      </div>
    </div>
  );
}
