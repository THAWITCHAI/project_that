"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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
    return `${hours} ชั่วโมง : ${minutes} นาที : ${seconds} วินาที`;
  };
  return (
    <div className="sidebar">
      <div className="setting">
        <Link href={"#"}>
          <Image
            src={"/settings.png"}
            width={24}
            height={24}
            alt=""
            className="Image"
          />
        </Link>
      </div>
      <div className="profile">
        <div className="box-Image">
          <Image
            src={"/profile.jpg"}
            width={90}
            height={90}
            className="image"
            alt="loading"
          />
        </div>
        <div className="box-contact">
          <h1 className="name">Thawitchai</h1>
          <h1 className="status">Admin</h1>
        </div>
      </div>
      <div className="tag-bar">แสดงข้อมูล</div>
      <div className="box-menu-1">
        <Link href={"#"}>
          <div className="menu-item">
            <Image
              src={"/car.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            ข้อมูลรถ
          </div>
        </Link>
        <Link href={"#"}>
          <div className="menu-item">
            <Image
              src={"/group.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            ข้อมูลผู้ใช้
          </div>
        </Link>
      </div>
      <div className="tag-bar">เพิ่มข้อมูล</div>
      <div className="box-menu-1">
        <Link href={"#"}>
          <div className="menu-item">
            <Image
              src={"/car.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            เพิ่มรถ
          </div>
        </Link>
        <Link href={"#"}>
          <div className="menu-item">
            <Image
              src={"/group.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            เพิ่มผู้ใช้
          </div>
        </Link>
      </div>
      <div className="box-menu-1">
        <Link href={"#"}>
          <div className="menu-item">
            <Image
              src={"/to-do-list.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            รายการจอง
          </div>
        </Link>
        <Link href={"#"}>
          <div className="menu-item">
            <Image
              src={"/logout.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            ออกจากระบบ
          </div>
        </Link>
      </div>
      <div className="box-menu-2">
        <button className="time">{time ? formatTime(time) : "Loading..."}</button>
      </div>
    </div>
  );
}
