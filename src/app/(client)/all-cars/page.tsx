import Link from 'next/link'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Sidebar from '@/app/_components/Sidebar'
import Image from 'next/image'


type Props = object

export default function AllCars({ }: Props) {
    return (
        <div className='w-full h-full flex justify-center items-center gap-2'>
            <Sidebar />
            <div className='w-[82%] h-full flex flex-col overflow-y-scroll'>
                <div className='w-full h-fit py-5 px-2 flex flex-col justify-center items-end gap-2'>
                    <Select >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="เลือกประเภทรถ" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>ประเภทรถ</SelectLabel>
                                <SelectItem value="apple">รถตู้</SelectItem>
                                <SelectItem value="banana">รถสปอร์ต</SelectItem>
                                <SelectItem value="blueberry">รถแท็กซี่</SelectItem>
                                <SelectItem value="grapes">รถจักยานยนต์</SelectItem>
                                <SelectItem value="pineapple">รถเก๋ง</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="เลือกสถานะรถ" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>สถานะรถ</SelectLabel>
                                <SelectItem className='text-green-500 hover:text-green-600' value="A">พร้อมใช้งาน</SelectItem>
                                <SelectItem className='text-red-500 hover:text-red-600' value="B">ไม่พร้อมใช้งาน</SelectItem>
                                <SelectItem className='text-yellow-500 hover:text-yellow-600' value="C">รอคืน</SelectItem>
                                <SelectItem className='text-blue-500 hover:text-blue-600' value="D">รออนุมัติ</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className='grid grid-cols-4 gap-4 w-full py-10 px-10'>
                    <Card className='w-[15rem] rounded-none hover:scale-110 transition-all ease-in-out h-[20rem] shadow-md border gap-2 flex flex-col items-center justify-start overflow-hidden'>
                        <Image src={'/car_item.png'} width={600} height={600} alt='' />
                        <h1 className='w-full text-center p-2 bg-slate-800 text-white'>Honda Civic 2024</h1>
                        <button className='w-[70%] my-2 bg-green-500 text-white py-2 flex justify-center items-center gap-2 rounded-sm'>
                            <Image src={'/see-white.png'} width={24} height={24} alt='' />
                            ดูรายละเอียดรถ
                        </button>
                        <div className='w-full h-fit flex justify-between items-center gap-2'>
                            <p className='text-end px-2 font-light text-sm text-green-500'>กำลังใช้งาน</p>
                            <p className='text-end px-2 font-light text-sm text-yellow-600'>จำนวนการใช้รถ 12</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}