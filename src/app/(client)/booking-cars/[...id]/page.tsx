'use client'
import Sidebar from '@/app/_components/Sidebar'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
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

type Props = object

export default function ConfirmBooking({ }: Props) {
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch(`/api/checkout/`, {
            method: 'POST',
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
                <form method='post' className='w-[40%] py-2 shadow-md flex flex-col justify-center items-center gap-2 px-2'>
                    <h1 className='text-xl'>แบบฟอร์มรายละเอียดข้อมูล</h1>
                    <p className='text-slate-500 font-light text-center text-sm'>กรอกข้อมูลสถานที่จะไปทำธุระให้ครบถ้วน ข้อมูลต้องเป็นข้อมูลจริง</p>
                    <li className='w-full text-sm'>ข้อมูล</li>
                    <input type="text" className='w-full bg-gray-50 border font-lights h-[2rem] text-sm rounded-md outline-none text-slate-700 px-2' placeholder='ชื่อสถานที่จะเดินทางไป เช่น โรงเรียน สำนักงาน' />
                    <div className='w-full flex justify-center items-center gap-3'>
                        <input type="text" className='w-full bg-gray-50 border font-lights h-[2rem] text-sm rounded-md outline-none text-slate-700 px-2' placeholder='ซอย' />
                        <input type="text" className='w-full bg-gray-50 border font-lights h-[2rem] text-sm rounded-md outline-none text-slate-700 px-2' placeholder='ถนน' />
                    </div>
                    <div className='w-full flex justify-center items-center gap-3'>
                        <input type="text" className='w-full bg-gray-50 border font-lights h-[2rem] text-sm rounded-md outline-none text-slate-700 px-2' placeholder='ตำบล/แขวง' />
                        <input type="text" className='w-full bg-gray-50 border font-lights h-[2rem] text-sm rounded-md outline-none text-slate-700 px-2' placeholder='อำเภอ' />
                    </div>
                    <div className='w-full flex justify-center items-center gap-3'>
                        <input type="text" className='w-full bg-gray-50 border font-lights h-[2rem] text-sm rounded-md outline-none text-slate-700 px-2' placeholder='จังหวัด' />
                        <input type="text" className='w-full bg-gray-50 border font-lights h-[2rem] text-sm rounded-md outline-none text-slate-700 px-2' placeholder='รหัสไปรษณีย์' />
                    </div>
                    <button onClick={handleSubmit} className='bg-green-500 text-white w-1/4 text-center text-sm h-[2rem] rounded-md flex justify-center items-center hover:bg-green-600 transition-all ease-in-out'>
                        ยืนยันข้อมูล
                    </button>
                </form>
            </div>
        </div>
    )
}