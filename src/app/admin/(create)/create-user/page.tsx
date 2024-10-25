import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Props = {}

export default function page({ }: Props) {
    return (
        <div className='w-full h-fit flex flex-col justify-start gap-4 items-center'>
            <h1 className='w-full'>เพิ่มข้อมูลผู้ใช้</h1>
            <form method='POST' className='bg-white shadow-md p-2 w-1/2 flex justify-start items-center flex-col gap-3 rounded-md'>
                <h1 className='text-xl font-medium'>กรอกข้อมูลผู้ใช้</h1>
                <p className='text-sm text-slate-500 font-light'>กรอกข้อมูลผู้ใช้ให้ครบแล้วค่อยกดเพิ่มข้อมูล</p>
                <div className='w-full flex justify-center items-center gap-2'>
                    <input type="text" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='ชื่อ - นามสกุล' />
                    <input type="text" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='ชื่อเล่น' />
                </div>
                <div className='w-full flex justify-center items-center gap-2'>
                    <input type="number" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='อีเมล์' />
                    <Input type="text" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='เบอร์โทร' />
                </div>
                <div className='w-full flex justify-center items-center gap-2'>
                    <input type="text" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='รหัสผ่าน' />
                    <input type="text" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='ยืนยันรหัสผ่าน' />
                </div>
                <li className='w-full text-sm'>โปรไฟล์</li>
                <div className='w-full flex justify-center items-center gap-2'>
                    <Input type="file" className='border py-2.5 w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='ราคา' />
                </div>
                <li className='w-full text-sm'>ใบขับขี่</li>
                <div className='w-full flex justify-center items-center gap-2'>
                    <Input type="file" className='border py-2.5 w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='ราคา' />
                </div>
                <div className='w-full flex justify-center items-center gap-2'>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="เลือกบทบาทหน้าที่" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>เลือกบทบาทหน้าที่</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <button className='w-1/2 my-2 text-white h-[2.5rem] rounded-md bg-blue-500 hover:bg-blue-600 transition-all ease-in-out'>
                    เพิ่มข้อมูล
                </button>
            </form>
        </div>
    )
}