'use client'
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

import React, { useEffect, useState } from 'react'
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

interface DataCar {
    id: number
    brand: string
    model: string
    useCar: number
    seat: number
    color: string
    license: string
    price: number
    status: {
        id: number
        name: string
    }
    type: {
        id: number
        name: string
    }
    image: string
    createdAt: string
    updatedAt: string
}

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
  import { Button } from "@/components/ui/button"

type Props = object

export default function AllCars({ }: Props) {
    const [dataCar, setDataCar] = useState<DataCar[]>([])

    useEffect(() => {
        getAllCar()
    }, [])

    async function getAllCar() {
        await fetch(`http://localhost:8000/cars`)
            .then((res) => res.json())
            .then((res) => setDataCar(res))
    }
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
                                <SelectItem value="apple">ทั้งหมด</SelectItem>
                                <SelectItem value="van">รถตู้</SelectItem>
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
                    {
                        dataCar.length > 0 && (
                            dataCar.map((item, index) => (
                                <Card key={index} className='w-full rounded-none hover:scale-110 transition-all ease-in-out h-[20rem] shadow-md border gap-2 flex flex-col items-center justify-start overflow-hidden'>
                                    <div className='w-full h-fit overflow-hidden'>
                                        <Image src={`/uploads/${item.image}`} width={600} height={600} alt='' />
                                    </div>
                                    <h1 className='w-full text-center p-2 bg-slate-800 text-white'>{item.brand}</h1>

                                    <AlertDialog>
                                        <AlertDialogTrigger className='w-fullh-fit outline-none'>
                                            <div className='w-full px-2 my-2 bg-green-500 text-white py-2 flex justify-center items-center gap-2 rounded-sm'>
                                                <Image src={'/see-white.png'} width={24} height={24} alt='' />
                                                ดูรายละเอียดรถ
                                            </div>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>รายละเอียดรถ</AlertDialogTitle>
                                                <AlertDialogDescription className='flex justify-center items-center flex-col gap-2'>
                                                    <div className='w-full'>
                                                        <p className='w-fit flex justify-center items-center'>แบรนด์ : {item.brand}</p>
                                                    </div>
                                                    <div className='w-full'>
                                                        <p className='w-fit flex justify-center items-center'>รุ่น : {item.model}</p>
                                                    </div>
                                                    <div className='w-full'>
                                                        <p className='w-fit flex justify-center items-center gap-2'>สี : <div className='w-[1.5rem] h-[1.5rem] rounded-full' style={{ background: item.color }}></div></p>
                                                    </div>
                                                    <div className='w-full'>
                                                        <p className='w-fit flex justify-center items-center '>ป้ายทะเบียน : {item.license}</p>
                                                    </div>
                                                    <div className='w-full'>
                                                        <p className='w-fit flex justify-center items-center text-green-500'>ราคา : {
                                                            Intl.NumberFormat('th-TH', {
                                                                style: 'currency',
                                                                currency: 'THB',
                                                            }).format(item.price)
                                                        }</p>
                                                    </div>
                                                    <div className='w-full'>
                                                        <p className='w-fit flex justify-center items-center text-green-500'>สถานะรถ : {item.status.id == 2 ? "กำลังใช้งาน" : item.status.name}</p>
                                                    </div>
                                                    <div className='w-full'>
                                                        <p className='w-fit flex justify-center items-center'>ประเภทรถ : {item.type.name} </p>
                                                    </div>
                                                    <div className='w-full'>
                                                        <p className='w-fit flex justify-center items-center text-blue-500'>จำนวนการใช้งาน : {item.useCar} ครั้ง</p>
                                                    </div>
                                                    <div className='w-full'>
                                                        <p className='w-fit flex justify-center items-center'>ที่นั่ง : {item.seat} ที่</p>
                                                    </div>
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel className='outline-none'>ปิด</AlertDialogCancel>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>


                                    <div className='w-full h-fit flex justify-between items-center gap-2'>
                                        <p className='text-end px-2 font-light text-sm text-green-500'>{item.status.id == 2 ? "กำลังใช้งาน" : item.status.name}</p>
                                        <p className='text-end px-2 font-light text-sm text-yellow-600'>จำนวนการใช้รถ {item.useCar}</p>
                                    </div>
                                </Card>
                            ))
                        )
                    }
                    {dataCar.length<=0&&(
                        <div className='w-full h-fit flex justify-center items-center gap-2' key={0}>
                            <p className='text-center text-gray-500'>ไม่พบข้อมูลรถในระบบ</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}