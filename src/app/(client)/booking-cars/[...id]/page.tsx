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

type Props = object

export default function ConfirmBooking({ }: Props) {
    const [cardNumber, setCardNumber] = useState('');

    const formatCardNumber = (value: string) => {
        // ลบช่องว่างเดิมทั้งหมดก่อน
        const newValue = value.replace(/\s+/g, '');

        // จัดรูปแบบโดยเพิ่มช่องว่างทุก 4 ตัวอักษร
        return newValue.replace(/(.{4})/g, '$1 ').trim();
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
                    <div className='bg-green-500 text-white w-1/4 text-center text-sm h-[2rem] rounded-md flex justify-center items-center hover:bg-green-600 transition-all ease-in-out'>
                        <AlertDialog>
                            <AlertDialogTrigger>
                                ยืนยันข้อมูล
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        <h1 className='py-2 w-full text-center'>Invoice</h1>
                                        <div className='w-full h-fit flex justify-start items-center gap-2'>
                                            <Image src={'/visa.png'} width={24} height={24} alt='' />
                                            <Image src={'/card.png'} width={24} height={24} alt='' />
                                            <Image src={'/jcb.png'} width={24} height={24} alt='' />
                                        </div></AlertDialogTitle>
                                    <AlertDialogDescription>
                                        <div className='w-full grid grid-cols-2 gap-2'>
                                            <input maxLength={19} value={cardNumber} className='w-full border h-[2rem] rounded-md px-2 outline-none bg-gray-50' type="text" placeholder="Card Number" required
                                                onChange={(e) => {
                                                    const formatted = formatCardNumber(e.target.value)
                                                    setCardNumber(formatted)
                                                }}
                                            />
                                            <input className='w-full border h-[2rem] rounded-md px-2 outline-none bg-gray-50' type="number" placeholder="Name or Card" required />
                                            <input className='w-full border h-[2rem] rounded-md px-2 outline-none bg-gray-50' type="date" placeholder="Expiration Date (MM/YY)" required />
                                            <input maxLength={4} className='w-full border h-[2rem] rounded-md px-2 outline-none bg-gray-50' type="password" placeholder="CVV" required />
                                        </div>
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>ปิด</AlertDialogCancel>
                                    <AlertDialogAction>ชำระเงิน</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                    </div>
                </form>
            </div>
        </div>
    )
}