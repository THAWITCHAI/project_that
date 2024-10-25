'use client'
import Sidebar from '@/app/_components/Sidebar'
import React, { useState } from 'react'
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

export default function BookingList({ }: Props) {
    const [toggle, setToggle] = useState(true)
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
                        <TableRow>
                            <TableCell className="font-medium">#1746</TableCell>
                            <TableCell>นาย ธวิชชัย บุญส่ง</TableCell>
                            <TableCell>Honda</TableCell>
                            <TableCell>Honda Civic 2024</TableCell>
                            <TableCell>15 ตุลาคม 2567</TableCell>
                            <TableCell>20 ตุลาคม 2567</TableCell>
                            <TableCell>
                                <input type="text" className='border px-2 w-[10rem] h-[2rem] text-yellow-500 rounded-md bg-slate-100 text-center' value={"กำลังดำเนินการ"} disabled/>
                            </TableCell>
                            <TableCell className="flex justify-center items-center gap-2">
                                {
                                    toggle == true ?
                                        <button onClick={() => setToggle(!toggle)} className='bg-blue-500 hover:bg-blue-600 transition-all ease-in-out w-[5rem] text-white h-fit p-2 rounded-sm'>คืนรถ</button>
                                        :
                                        <button onClick={() => setToggle(!toggle)} className='bg-red-500 hover:bg-red-600 transition-all ease-in-out w-[5rem] text-white h-fit p-2 rounded-sm'>ลบ</button>

                                }
                                <button className='bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out w-[5rem] text-white h-fit p-2 rounded-sm'>
                                    <Link href={'/booking-list/15'}>รายละเอียด</Link>
                                </button>
                            </TableCell>
                        </TableRow>
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