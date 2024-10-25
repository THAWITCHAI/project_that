import React from 'react'
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

type Props = {}

export default function TypeCars({ }: Props) {
    return (
        <div className='w-full h-full flex flex-col justify-start gap-4 items-center'>
            <h1 className='w-full'>ข้อมูลประเภทรถ</h1>
            <div className='w-full bg-white  h-full rounded-md'>
                <Table>
                    <TableCaption>ไม่มีข้อมูล</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>รหัสรถ</TableHead>
                            <TableHead>แบรนด์</TableHead>
                            <TableHead>ยี่ห้อ</TableHead>
                            <TableHead>ที่นั่ง</TableHead>
                            <TableHead>ประเภทรถ</TableHead>
                            <TableHead>ป้ายทะเบียน</TableHead>
                            <TableHead>สถานะรถ</TableHead>
                            <TableHead>ราคา</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Honda</TableCell>
                            <TableCell>Civic 2026</TableCell>
                            <TableCell>10</TableCell>
                            <TableCell>รถเก๋ง</TableCell>
                            <TableCell>15 กข อุบลราชธานี</TableCell>
                            <TableCell className='text-green-500'>พร้อมใช้งาน</TableCell>
                            <TableCell>15,000 ฿</TableCell>
                            <TableCell className='flex justify-end w-fit items-center gap-2'>
                                <Link href={''}>
                                    <button className='flex gap-2 justify-center items-center py-1 w-[7rem] px-1 rounded-sm bg-yellow-500 text-white'>
                                        <Image src={'/see-white.png'} width={20} height={20} alt='' />
                                        รายละเอียด
                                    </button>
                                </Link>
                                <button className='flex gap-2 justify-center items-center py-1 w-[7rem] px-1 rounded-sm bg-red-500 text-white'>
                                    <Image src={'/waste.png'} width={20} height={20} alt='' />
                                    ลบ
                                </button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter className='bg-white'>
                        <TableRow>
                            <TableCell colSpan={8}>รวม</TableCell>
                            <TableCell className="text-right">10 คัน</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div >
    )
}