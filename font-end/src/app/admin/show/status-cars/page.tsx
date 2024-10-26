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
import { toast } from 'sonner'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


type Props = {}

interface DataTypeCar {
    id: number
    name: string
    createdAt: string
    updatedAt: string
}

export default function Statuses({ }: Props) {
    const [data, setData] = useState<DataTypeCar[]>([])
    const [name, setName] = useState('')

    useEffect(() => {
        getDataType()
    }, [])

    const getDataType = async () => {
        await fetch('http://localhost:8000/status-car')
            .then((res) => res.json())
            .then((res) => setData(res))
        return
    }

    const handleDelete = async (id: number) => {
        const response = await fetch(`http://localhost:8000/status-car/${id}`, {
            method: 'DELETE',
        })
        if (response.ok) {
            toast.success('ลบข้อมูลสถานะสำเร็จ', {
                action: {
                    label: 'ปิด'
                }
            })
            getDataType()
            return
        }
        return
    }

    const handleUpdate = async (id: number) => {
        const res = await fetch(`http://localhost:8000/status-car/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
            }),
        })

        if (!res.ok) {
            toast.error('ไม่สามารถอัพเดทข้อมูลได้', {
                action: {
                    label: 'ปิด'
                }
            })
            return
        }
        toast.success('อัพเดทข้อมูลสถานะรถสำเร็จ', {
            action: {
                label: 'ปิด'
            }
        })
        return getDataType()
    }

    return (
        <div className='w-full h-full flex flex-col justify-start gap-4 items-center'>
            <h1 className='w-full'>ข้อมูลสถานะรถ</h1>
            <div className='w-full bg-white  h-full rounded-md'>
                <Table>
                    {data.length <= 0 && (
                        <TableCaption>ไม่มีข้อมูล</TableCaption>
                    )}
                    <TableHeader>
                        <TableRow>
                            <TableHead className='text-center'>ลำดับ</TableHead>
                            <TableHead className='text-center'>รหัสสถานะรถ</TableHead>
                            <TableHead className='text-center'>ชื่อ</TableHead>
                            <TableHead className='text-center'>วันที่สร้าง</TableHead>
                            <TableHead className='text-center'>วันที่อัพเดท</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className='text-center'>{index + 1}</TableCell>
                                <TableCell className='text-center'>{item.id}</TableCell>
                                <TableCell className='text-center'>{item.name}</TableCell>
                                <TableCell className='text-center'>{item.createdAt}</TableCell>
                                <TableCell className='text-center'>{item.updatedAt}</TableCell>
                                <TableCell className='flex justify-end w-fit items-center gap-2'>

                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <button className='flex gap-2 justify-center items-center py-1 w-[7rem] px-1 rounded-sm bg-yellow-500 text-white'>
                                                <Image src={'/edit.png'} width={20} height={20} alt='' />
                                                แก้ไข
                                            </button>
                                        </SheetTrigger>
                                        <SheetContent>
                                            <SheetHeader>
                                                <SheetTitle>แก้ไขข้อมูลสถานะ</SheetTitle>
                                                <SheetDescription>
                                                    เปลี่ยนแปลงได้แค่ชื่อของข้อมูลเท่านั้น
                                                </SheetDescription>
                                                <Input type='text' placeholder='id' defaultValue={item.id} disabled />
                                                <Input onChange={(e) => setName(e.target.value)} className='border-green-500' type='text' defaultValue={item.name} placeholder='ชื่อสถานะ' />
                                                <Input type='text' defaultValue={item.createdAt} disabled />
                                                <Input type='text' defaultValue={item.updatedAt} disabled />
                                                <Button onClick={() => handleUpdate(item.id)} className='bg-green-500 hover:bg-green-600'>ยืนยัน</Button>
                                            </SheetHeader>
                                        </SheetContent>
                                    </Sheet>

                                    <button onClick={() => handleDelete(Number(item.id))} className='flex gap-2 justify-center items-center py-1 w-[7rem] px-1 rounded-sm bg-red-500 text-white'>
                                        <Image src={'/waste.png'} width={20} height={20} alt='' />
                                        ลบ
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter className='bg-white'>
                        <TableRow>
                            <TableCell colSpan={8}>รวม</TableCell>
                            <TableCell className="text-right">{data.length} คัน</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div >
    )
}