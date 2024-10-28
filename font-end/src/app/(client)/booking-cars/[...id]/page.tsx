'use client'
import Sidebar from '@/app/_components/Sidebar'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'

type Props = object

export default function ConfirmBooking({ params }: Props) {
    const { id } = params
    const [dateStarted, setDateStarted] = useState("")
    const [dateEnded, setDateEnded] = useState("")
    const [nameLocations, setNameLocations] = useState("")
    const [driverImage, setDriverImage] = useState<File | null>(null)
    const [road, setRoad] = useState("")
    const [alleys, setAlleys] = useState("")
    const [subdistrict, setSubdistrict] = useState("")
    const [district, setDistrict] = useState("")
    const [province, setProvince] = useState("")
    const [zipCode, setZipCode] = useState("")

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData()

        const date_s = new Date(dateStarted)
        const formattedDate_s = new Intl.DateTimeFormat('th-TH', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(date_s);
        formData.append('dateStarted', formattedDate_s)

        const date_e = new Date(dateStarted)
        const formattedDate_e = new Intl.DateTimeFormat('th-TH', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(date_e);

        formData.append('dateEnded', formattedDate_e)
        formData.append('nameLocations', nameLocations)
        formData.append('driverImage', driverImage)
        formData.append('road', road)
        formData.append('alleys', alleys)
        formData.append('subdistrict', subdistrict)
        formData.append('district', district)
        formData.append('province', province)
        formData.append('zipCode', zipCode)
        formData.append('carId',id)
        formData.append('userId',9)

        const response = await fetch(`http://localhost:8000/checkout`, {
            method: 'POST',
            body: formData,
        })
        if (response.ok) {
            const { url } = await response.json()
            console.log(url);
            return router.push(url)
        }
    };

    return (
        <div className='w-full h-full flex justify-center items-center gap-2'>

            <Sidebar />
            <div className='w-[82%] h-full flex flex-col overflow-y-scroll items-center justify-center'>
                <form method='post' className='w-fit py-2 shadow-md flex flex-col justify-center items-center gap-2 px-2'>
                    <h1 className='text-xl'>แบบฟอร์มรายละเอียดข้อมูล</h1>
                    <p className='text-slate-500 font-light text-center text-sm'>กรอกข้อมูลสถานที่จะไปทำธุระให้ครบถ้วน ข้อมูลต้องเป็นข้อมูลจริง</p>
                    <li className='w-full text-sm'>ข้อมูล</li>
                    <input onChange={(e) => setNameLocations(e.target.value)} value={nameLocations} type="text" className='w-full bg-gray-50 border font-lights h-[2rem] text-sm rounded-md outline-none text-slate-700 px-2' placeholder='ชื่อสถานที่จะเดินทางไป เช่น โรงเรียน สำนักงาน' />
                    <div className='w-full flex justify-center items-center gap-3'>
                        <input onChange={(e) => setAlleys(e.target.value)} value={alleys} type="text" className='w-full bg-gray-50 border font-lights h-[2rem] text-sm rounded-md outline-none text-slate-700 px-2' placeholder='ซอย' />
                        <input onChange={(e) => setRoad(e.target.value)} value={road} type="text" className='w-full bg-gray-50 border font-lights h-[2rem] text-sm rounded-md outline-none text-slate-700 px-2' placeholder='ถนน' />
                    </div>
                    <div className='w-full flex justify-center items-center gap-3'>
                        <input onChange={(e) => setSubdistrict(e.target.value)} value={subdistrict} type="text" className='w-full bg-gray-50 border font-lights h-[2rem] text-sm rounded-md outline-none text-slate-700 px-2' placeholder='ตำบล/แขวง' />
                        <input onChange={(e) => setDistrict(e.target.value)} value={district} type="text" className='w-full bg-gray-50 border font-lights h-[2rem] text-sm rounded-md outline-none text-slate-700 px-2' placeholder='อำเภอ' />
                    </div>
                    <div className='w-full flex justify-center items-center gap-3'>
                        <input onChange={(e) => setProvince(e.target.value)} value={province} type="text" className='w-full bg-gray-50 border font-lights h-[2rem] text-sm rounded-md outline-none text-slate-700 px-2' placeholder='จังหวัด' />
                        <input onChange={(e) => setZipCode(e.target.value)} value={zipCode} type="text" className='w-full bg-gray-50 border font-lights h-[2rem] text-sm rounded-md outline-none text-slate-700 px-2' placeholder='รหัสไปรษณีย์' />
                    </div>
                    <li className='w-full text-sm'>ภาพใบขับขี่</li>
                    <div className='w-full flex justify-center items-center gap-3'>
                        <Input onChange={(e) => setDriverImage(e.target.files[0])} type="file" className='w-full bg-gray-50 border font-lights h-[2rem] text-sm rounded-md outline-none text-slate-700 px-2' placeholder='จังหวัด' />
                    </div>
                    <li className='w-full text-sm'>วันรับรถและคืนรถ</li>
                    <div className='w-full flex justify-center items-center gap-3'>
                        <Calendar
                            mode="single"
                            selected={dateStarted}
                            onSelect={setDateStarted}
                            className="rounded-md border"
                        />
                        ถึง
                        <Calendar
                            mode="single"
                            selected={dateEnded}
                            onSelect={setDateEnded}
                            className="rounded-md border"
                        />
                    </div>
                    <button onClick={handleSubmit} className='bg-green-500 text-white w-1/4 text-center text-sm h-[2rem] rounded-md flex justify-center items-center hover:bg-green-600 transition-all ease-in-out'>
                        ยืนยันข้อมูล
                    </button>
                </form>
            </div>
        </div>
    )
}