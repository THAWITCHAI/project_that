'use client'
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
import { toast } from 'sonner'

type Props = {}

export default function Booking({ }: Props) {
    const [data, setData] = useState([])
    const [selecte, setSelecte] = useState(true)
    useEffect(() => {
        getBookings()
    }, [])

    const getBookings = async () => {
        try {
            const response = await fetch('http://localhost:8000/bookings')
            const json = await response.json()
            setData(json)
        } catch (error) {
            console.error(error)
        }
        return
    }
    const cr = data.filter((item) => item.car.statusId == 3)
    const cb = data.filter((item) => item.car.statusId != 3)

    const handleDelete = async (idBooking: number, idCar: number) => {
        const res = await fetch(`http://localhost:8000/bookings/${idBooking}`, {
            method: 'DELETE',
        })
        await fetch(`http://localhost:8000/cars/${idCar}`, {
            method: 'PUT',
            body: JSON.stringify({ statusId: 1 }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (res.ok) {
            toast.success('ลบข้อมูลการจองรถสำเร็จ', {
                action: 'ปิด'
            })
            getBookings()
            return
        }
        return
    }
    return (
        <div className='w-full h-full flex flex-col justify-start gap-4 items-center'>
            <h1 className='w-full'>ข้อมูลตารางการจองรถ</h1>
            <div className='w-full p-2 flex justify-end gap-2 items-center '>
                <Select onValueChange={(e) => setSelecte(Boolean(e))}>
                    <SelectTrigger className="w-[180px] bg-white">
                        <SelectValue placeholder="เลือกประเภท" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>ประเภท</SelectLabel>
                            <SelectItem value={true}>จองรถ</SelectItem>
                            <SelectItem value={false}>คืนรถ</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className='w-full bg-white  h-full rounded-md'>
                <Table>
                    <TableCaption>ไม่มีข้อมูล</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>รหัสรถ</TableHead>
                            <TableHead>แบรนด์</TableHead>
                            <TableHead>ยี่ห้อ</TableHead>
                            <TableHead>ประเภทรถ</TableHead>
                            <TableHead>ป้ายทะเบียน</TableHead>
                            <TableHead>สถานะรถ</TableHead>
                            <TableHead>ราคา</TableHead>
                            <TableHead>ชำระ</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            selecte == true && (
                                cb.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.id}</TableCell>
                                        <TableCell>{item.car.brand}</TableCell>
                                        <TableCell>{item.car.model}</TableCell>
                                        <TableCell>{item.car.type.name}</TableCell>
                                        <TableCell>{item.car.license}</TableCell>
                                        <TableCell className='text-green-500'>{item.car.status.name}</TableCell>
                                        <TableCell>{item.car.price}</TableCell>
                                        <TableCell className='text-green-500'>{item.orderName}</TableCell>
                                        <TableCell className='flex justify-end w-fit items-center gap-2'>
                                            <Link href={'/admin/show/booking/' + item.id}>
                                                <button className='flex gap-2 justify-center items-center py-1 w-[7rem] px-1 rounded-sm bg-yellow-500 text-white'>
                                                    <Image src={'/see-white.png'} width={20} height={20} alt='' />
                                                    รายละเอียด
                                                </button>
                                            </Link>
                                            <button className='flex gap-2 justify-center items-center py-1 w-[7rem] px-1 rounded-sm bg-red-500 text-white' onClick={() => handleDelete(item.id, item.carId)}>
                                                <Image src={'/waste.png'} width={20} height={20} alt='' />
                                                ลบ
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )
                        }
                        {
                            selecte == false && (
                                cr.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.id}</TableCell>
                                        <TableCell>{item.car.brand}</TableCell>
                                        <TableCell>{item.car.model}</TableCell>
                                        <TableCell>{item.car.type.name}</TableCell>
                                        <TableCell>{item.car.license}</TableCell>
                                        <TableCell className='text-green-500'>{item.car.status.name}</TableCell>
                                        <TableCell>{item.car.price}</TableCell>
                                        <TableCell className='text-green-500'>{item.orderName}</TableCell>
                                        <TableCell className='flex justify-end w-fit items-center gap-2'>
                                            <Link href={'/admin/show/booking/' + item.id}>
                                                <button className='flex gap-2 justify-center items-center py-1 w-[7rem] px-1 rounded-sm bg-yellow-500 text-white'>
                                                    <Image src={'/see-white.png'} width={20} height={20} alt='' />
                                                    รายละเอียด
                                                </button>
                                            </Link>
                                            <button className='flex gap-2 justify-center items-center py-1 w-[7rem] px-1 rounded-sm bg-red-500 text-white' onClick={() => handleDelete(item.id, item.car.status.id)}>
                                                <Image src={'/waste.png'} width={20} height={20} alt='' />
                                                ลบ
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )
                        }
                    </TableBody>
                    <TableFooter className='bg-white'>
                        <TableRow>
                            <TableCell colSpan={8}>รวม</TableCell>
                            <TableCell className="text-right">{selecte == true ? cb.length : cr.length} คัน</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div >
    )
}