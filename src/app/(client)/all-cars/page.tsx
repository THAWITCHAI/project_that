import Image from 'next/image'
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


type Props = object

export default function AllCars({ }: Props) {
    return (
        <div className='w-full h-full flex justify-center items-center gap-2'>
            <div className='gap-4 border w-[18%] h-full flex flex-col justify-start items-center bg-[#191970] p-2'>
                <div className='border-b-[1px] w-full flex justify-center items-center gap-2 py-2 px-5'>
                    <Image src={'/car_b.png'} width={100} height={100} alt='' className='rounded-full w-[50px] h-[50px]' />
                    <div className='text-lg font-medium text-white'>ธวิชชัย บุญส่ง</div>
                </div>
                <p className='text-slate-300 px-2 w-full text-sm font-extralight'>ข้อมูล</p>
                <Link href={''} className='flex justify-start items-center w-full px-10 gap-2 hover:bg-[#282892] transition-all ease-in-out rounded-md py-4'>
                    <Image src={'/electric-car.png'} width={20} height={20} alt='' />
                    <button className='text-slate-200 font-light'>จอง</button>
                </Link>
                <Link href={''} className='flex justify-start items-center w-full px-10 gap-2 hover:bg-[#282892] transition-all ease-in-out rounded-md py-4'>
                    <Image src={'/electric-car.png'} width={20} height={20} alt='' />
                    <button className='text-slate-200 font-light'>รถยนต์ทั้งหมด</button>
                </Link>
                <p className='text-slate-300 px-2 w-full text-sm font-extralight'>ตาราง</p>
                <Link href={''} className='flex justify-start items-center w-full px-10 gap-2 hover:bg-[#282892] transition-all ease-in-out rounded-md py-4'>
                    <Image src={'/table.png'} width={20} height={20} alt='' />
                    <button className='text-slate-200 font-light'>การจอง</button>
                </Link>
                <p className='text-slate-300 px-2 w-full text-sm font-extralight'>ข้อมูลส่วนตัว</p>
                <Link href={''} className='flex justify-start items-center w-full px-10 gap-2 hover:bg-[#282892] transition-all ease-in-out rounded-md py-4'>
                    <Image src={'/settings.png'} width={20} height={20} alt='' />
                    <button className='text-slate-200 font-light'>ตั้งค่า</button>
                </Link>
                <Link href={''} className='flex justify-start items-center w-full px-10 gap-2 hover:bg-[#282892] transition-all ease-in-out rounded-md py-4'>
                    <Image src={'/logout.png'} width={20} height={20} alt='' />
                    <button className='text-slate-200 font-light'>ออกจากระบบ</button>
                </Link>
                <div className=' w-full h-[11rem] flex justify-center items-end'>
                    <h1 className='w-full text-center text-white text'>16 ชั่วโมง 15 นาที 10 วินาที</h1>
                </div>
            </div>
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
                <div className='grid grid-cols-4 gap-4 w-full'>
                    <Card className='w-[15rem] h-[20rem] shadow-md border'></Card>
                    <Card className='w-[15rem] h-[20rem] shadow-md border'></Card>
                    <Card className='w-[15rem] h-[20rem] shadow-md border'></Card>
                    <Card className='w-[15rem] h-[20rem] shadow-md border'></Card>
                    <Card className='w-[15rem] h-[20rem] shadow-md border'></Card>
                    <Card className='w-[15rem] h-[20rem] shadow-md border'></Card>
                    <Card className='w-[15rem] h-[20rem] shadow-md border'></Card>
                    <Card className='w-[15rem] h-[20rem] shadow-md border'></Card>
                    <Card className='w-[15rem] h-[20rem] shadow-md border'></Card>
                    <Card className='w-[15rem] h-[20rem] shadow-md border'></Card>
                </div>
            </div>
        </div>
    )
}