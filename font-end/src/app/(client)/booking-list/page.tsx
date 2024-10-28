'use client'
import Sidebar from '@/app/_components/Sidebar'
import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from 'next/link'

type Props = object

interface BookingList {

    id: number
    user: {
        id: number
        name: string
    }
    car: {
        brand: string
        model: string
        status: {
            id: number
            name: string
        }
    }
    dateStarted: string
    dateEnded: string
}


export default function BookingList({ }: Props) {
    const [data, setData] = useState<BookingList[]>([])

    useEffect(() => {
        getBookings()
    }, [])

    const getBookings = async () => {
        try {
            const response = await fetch('http://localhost:8000/bookingsUser/1')
            const json = await response.json()
            setData(json)
        } catch (error) {
            console.error('Error:', error)
        }
    }
    return (
        <div className='w-full h-full flex justify-center items-center gap-2'>
            <Sidebar />
            <div className='w-[82%] h-full flex flex-col overflow-y-scroll'>
                <Table className='text-[12px]'>
                    <TableCaption>ไม่มีข้อมูลการจองรถ</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">รหัสการจอง</TableHead>
                            <TableHead>ชื่อผู้จอง</TableHead>
                            <TableHead>ยีห้อรถ</TableHead>
                            <TableHead>รุ่นรถ</TableHead>
                            <TableHead>วันรับรถ</TableHead>
                            <TableHead>วันคืนรถ</TableHead>
                            <TableHead>ติดตามสถานะ</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            data.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">#{item.id}</TableCell>
                                    <TableCell>{item.user.name}</TableCell>
                                    <TableCell>{item.car.brand}</TableCell>
                                    <TableCell>{item.car.model}</TableCell>
                                    <TableCell>{item.dateStarted}</TableCell>
                                    <TableCell>{item.dateEnded}</TableCell>
                                    <TableCell>
                                        <input type="text" className='border px-2 w-[10rem] h-[2rem] text-yellow-500 rounded-md bg-slate-100 text-center' value={item.car.status.id == 4 ? "กำลังดำเนินการ" : "ยืนยันการจองเรียบร้อย"} disabled />
                                    </TableCell>
                                    <TableCell className="flex justify-center items-center gap-2">
                                        {
                                            item.car.status.id == 4 ?
                                                <button className='bg-red-500 hover:bg-red-600 transition-all ease-in-out w-[5rem] text-white h-fit p-2 rounded-sm'>ลบ</button>
                                                :
                                                <button className='bg-blue-500 hover:bg-blue-600 transition-all ease-in-out w-[5rem] text-white h-fit p-2 rounded-sm'>คืนรถ</button>

                                        }
                                        <button className='bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out w-[5rem] text-white h-fit p-2 rounded-sm'>
                                            <Link href={'/booking-list/' + item.id}>รายละเอียด</Link>
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={7}>Total</TableCell>
                            <TableCell className="text-right">1 รายการ</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>

            </div>
        </div>
    )
}