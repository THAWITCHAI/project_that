'use client'
import Sidebar from '@/app/_components/Sidebar'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {
    params: {
        id: string;
    }
}

interface DataAll {
    id: number
    user: {
        id: number
        name: string
        email: string
        phone: string
    }
    car: {
        id: number
        brand: string
        model: string
        seat: number
        color: string
        license: string
        price: number
        type: {
            id: number
            name: string
        }
    }
}

export default function Success({ params }: Props) {
    const { id } = params; // Destructure id from params
    const [fetchedId, setFetchedId] = useState('');
    const [data, setData] = useState<DataAll[]>([]);

    useEffect(() => {
        const updateBooking = async () => {
            try {
                await fetch(`http://localhost:8000/bookings/${id}`, {
                    method: 'PUT',
                })
                    .then((res) => res.json())
                    .then((res) => setData([res]))
            } catch (error) {
                console.error('Failed to update booking:', error);
            }
        };
        updateBooking();
    }, [id]);
    console.log(data);
    const timestamp = Date.now();
    const date = new Date(timestamp);
    const days = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"];
    const dayName = days[date.getDay()];

    // ชื่อเดือนในภาษาไทย
    const months = [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];
    const monthName = months[date.getMonth()];

    const day = date.getDate();
    const year = date.getFullYear();
    const time = date.toLocaleTimeString('th-TH'); // เวลาในรูปแบบ HH:MM:SS

    const formattedDate = `วัน${dayName} ที่ ${day} ${monthName} ${year} เวลา ${time}`;
    console.log(formattedDate);
    return (
        <div className='w-full h-full flex justify-center items-center gap-2'>
            <Sidebar />
            {
                data.map((item, index) => (
                    <div className='w-[82%] h-full flex flex-col overflow-y-scroll py-10 justify-start items-center'>
                        <div className='w-[40%] border h-fit flex justify-center flex-col gap-2 items-center p-5 rounded-sm bg-slate-100'>
                            <h1>ชำระเงินสำเร็จ</h1>
                            <p className='text-gray-500 text-sm font-light'>{formattedDate}</p>
                            <p className='text-gray-500 text-sm font-light'>รหัสอ้างอิง {id}</p>
                            <li className='w-full text-sm text-gray-700'>ข้อมูลผู้ใช้</li>
                            <div className='w-full flex px-5 justify-center items-center gap-2'>
                                <label className='text-xs text-gray-700 w-[6rem]'>ชื่อผู้จอง</label>
                                <input type="text" className='w-full border rounded-md h-[2.5rem] outline-none px-2 text-xs' disabled defaultValue={item.user.name} />
                            </div>
                            <div className='w-full flex px-5 justify-center items-center gap-2'>
                                <label className='text-xs text-gray-700 w-[6rem]'>อีเมล์</label>
                                <input type="text" className='w-full border rounded-md h-[2.5rem] outline-none px-2 text-xs' disabled defaultValue={item.user.email} />
                            </div>
                            <div className='w-full flex px-5 justify-center items-center gap-2'>
                                <label className='text-xs text-gray-700 w-[6rem]'>เบอร์ติดต่อ</label>
                                <input type="text" className='w-full border rounded-md h-[2.5rem] outline-none px-2 text-xs' disabled defaultValue={item.user.phone} />
                            </div>
                            <li className='w-full text-sm text-gray-700'>ข้อมูลรถ</li>
                            <div className='w-full flex px-5 justify-center items-center gap-2'>
                                <label className='text-xs text-gray-700 w-[6rem]'>แบรนด์</label>
                                <input type="text" className='w-full border rounded-md h-[2.5rem] outline-none px-2 text-xs' disabled defaultValue={item.car.brand} />
                            </div>
                            <div className='w-full flex px-5 justify-center items-center gap-2'>
                                <label className='text-xs text-gray-700 w-[6rem]'>ยี่ห้อ</label>
                                <input type="text" className='w-full border rounded-md h-[2.5rem] outline-none px-2 text-xs' disabled defaultValue={item.car.model} />
                            </div>
                            <div className='w-full flex px-5 justify-center items-center gap-2'>
                                <label className='text-xs text-gray-700 w-[6rem]'>จำนวนที่นั่ง</label>
                                <input type="text" className='w-full border rounded-md h-[2.5rem] outline-none px-2 text-xs' disabled defaultValue={item.car.seat} />
                            </div>
                            <div className='w-full flex px-5 justify-start items-center gap-2'>
                                <label className='text-xs text-gray-700 w-[5rem]'>สี</label>
                                <div className='w-[2rem] h-[2rem] rounded-full' style={{ background: item.car.color }}></div>
                            </div>
                            <div className='w-full flex px-5 justify-center items-center gap-2'>
                                <label className='text-xs text-gray-700 w-[6rem]'>ป้ายทะเบียน</label>
                                <input type="text" className='w-full border rounded-md h-[2.5rem] outline-none px-2 text-xs' disabled defaultValue={item.car.license} />
                            </div>
                            <div className='w-full flex px-5 justify-center items-center gap-2'>
                                <label className='text-xs text-gray-700 w-[6rem]'>ราคา</label>
                                <input type="text" className='w-full border rounded-md h-[2.5rem] outline-none px-2 text-xs text-green-500' disabled defaultValue={item.car.price} />
                            </div>
                            <div className='w-full flex px-5 justify-center items-center gap-2'>
                                <label className='text-xs text-gray-700 w-[6rem]'>ประเภทรถ</label>
                                <input type="text" className='w-full border rounded-md h-[2.5rem] outline-none px-2 text-xs' disabled defaultValue={item.car.type.name} />
                            </div>
                            <button className='w-full h-fit p-2 bg-green-500 rounded-md text-white'>
                                <Link href={'/booking-list'}>กลับไปหน้าข้อมูลจอง</Link>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}