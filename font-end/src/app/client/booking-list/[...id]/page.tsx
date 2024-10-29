'use client'
import Sidebar from '@/app/_components/Sidebar'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Image from 'next/image'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface DataBookingsAll {
    // number
    // string

    "id": number,
    "userId": number,
    "carId": number,
    "dateStarted": string,
    "dateEnded": string,
    "notes": null,
    "nameLocations": string,
    "driverImage": string,
    "road": "-",
    "alleys": "-",
    "subdistrict": string,
    "district": string,
    "province": string,
    "zipCode": string,
    "orderId": string,
    "orderName": string,
    "createdAt": string
    "updatedAt": string,
    "car": {
        "id": number,
        "brand": string,
        "model": string,
        "useCar": number,
        "seat": number,
        "color": string,
        "license": string,
        "price": number,
        "statusId": number,
        "image": string,
        "typeId": number,
        "createdAt": string,
        "updatedAt": string,
        "status": {
            "id": number,
            "name": string,
            "createdAt": string,
            "updatedAt": string
        },
        "type": {
            "id": number,
            "name": string,
            "createdAt": string,
            "updatedAt": string
        }
    },
    "user": {
        "id": number,
        "name": string,
        "nick_name": string,
        "email": string,
        "password": string,
        "phone": string,
        "profileImage": string,
        "roleId": number,
        "createdAt": string,
        "updatedAt": string
        "role": {
            "id": number,
            "name": string,
            "createdAt": string,
            "updatedAt": string
        }
    }
}

type Props = object

export default function Details({ params }: Props) {
    const { id } = params
    const [data, setData] = useState<DataBookingsAll[]>([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/bookings/${id}`)
            if (!response.ok) throw new Error(response.statusText)
            const json = await response.json()
            setData(json)
        } catch (error) {
            console.error('Error:', error)
        }
    }
    return (
        <div className='w-full h-full flex justify-center items-center gap-2'>
            <Sidebar />
            <div className='w-[82%] h-full flex flex-col overflow-y-scroll justify-start items-center gap-4 py-10'>
                {
                    data.map((item, index) => (
                        <Tabs defaultValue="account" className="w-[60%]">
                            <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger value="account">ข้อมูลผู้ใช้</TabsTrigger>
                                <TabsTrigger value="password">ข้อมูลรถ</TabsTrigger>
                                <TabsTrigger value="date">วันรับ-คืน รถ</TabsTrigger>
                                <TabsTrigger value="location">ข้อมูลสถานที่จะไป</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className='text-center'>ข้อมูลผู้ใช้</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-col justify-start items-center gap-2">
                                        <li className='w-full'>ใบขับขี่</li>
                                        <div className='w-full flex justify-around items-center'>
                                            <Image src={`/uploads/${item.driverImage}`} width={300} height={300} alt='' className='rounded-2xl h-[10rem]' />
                                            <Image src={`/uploads/${item.user.profileImage}`} width={150} height={150} alt='' className='rounded-2xl h-[10rem]' />
                                        </div>
                                        <li className='w-full'>ข้อมูล</li>
                                        <div className='w-full flex justify-between items-center gap-2'>
                                            <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                                <label className='w-[5rem]' htmlFor="">ชื่อ</label>
                                                <input type="text" value={item.user.name} className=' rounded-md px-2 h-[2rem]' disabled />
                                            </div>
                                            <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                                <label className='w-[5rem]' htmlFor="">เบอร์ติดต่อ</label>
                                                <input type="text" value={item.user.phone} className=' rounded-md px-2  h-[2rem]' disabled />
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-between items-center gap-2'>
                                            <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                                <label className='w-[5rem]' htmlFor="">อีเมล์</label>
                                                <input type="text" value={item.user.email} className=' rounded-md px-2 h-[2rem]' disabled />
                                            </div>
                                            <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                                <label className='w-[5rem]' htmlFor="">ชื่อเล่น</label>
                                                <input type="text" value={item.user.nick_name} className=' rounded-md px-2  h-[2rem]' disabled />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="password">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className='text-center'>ข้อมูลรถ</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-col justify-start items-center gap-2">
                                        <li className='w-full'>ภาพรถ</li>
                                        <div className='w-full flex justify-around items-center'>
                                            <Image src={`/uploads/${item.car.image}`} width={300} height={300} alt='' />
                                        </div>
                                        <li className='w-full'>ข้อมูล</li>
                                        <div className='w-full flex justify-between items-center gap-2'>
                                            <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                                <label className='w-[5rem]' htmlFor="">แบรนด์</label>
                                                <input type="text" value={item.car.brand} className=' rounded-md px-2 h-[2rem]' disabled />
                                            </div>
                                            <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                                <label className='w-[5rem]' htmlFor="">ยี่ห้อ</label>
                                                <input type="text" value={item.car.model} className=' rounded-md px-2  h-[2rem]' disabled />
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-between items-center gap-2'>
                                            <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                                <label className='w-[5rem]' htmlFor="">ป้ายทะเบียน</label>
                                                <input type="text" value={item.car.license} className=' rounded-md px-2 h-[2rem]' disabled />
                                            </div>
                                            <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                                <label className='w-[5rem]' htmlFor="">ที่นั่ง</label>
                                                <input type="text" value={item.car.seat} className=' rounded-md px-2  h-[2rem]' disabled />
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-between items-center gap-2'>
                                            <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                                <label className='w-[5rem]' htmlFor="">ประเภทรถ</label>
                                                <input type="text" value={item.car.type.name} className=' rounded-md px-2 h-[2rem]' disabled />
                                            </div>
                                            <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                                <label className='w-[5rem]' htmlFor="">ราคา</label>
                                                <input type="text" value={item.car.price} className=' rounded-md px-2  h-[2rem]' disabled />
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-between items-center gap-2'>
                                            <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                                <label className='w-[5rem]' htmlFor="">สี</label>
                                                <div className='w-[2rem] h-8 rounded-full shadow-md ' style={{ background: item.car.color }}></div>
                                            </div>
                                            <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                                <label className='w-[5rem]' htmlFor="">ชำระมัดจำ</label>
                                                <input type="text" value={item.orderName} className=' rounded-md px-2  h-[2rem] text-green-500' disabled />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="date">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className='text-center'>วันรับ-คืน รถ</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-col justify-start items-center gap-2">
                                        <li className='w-full'>ตาราง</li>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>วันรับ</TableHead>
                                                    <TableHead>วันคืน</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>{item.dateStarted}</TableCell>
                                                    <TableCell>{item.dateEnded}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>

                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="location">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className='text-center'>สถานที่จะไป</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-col justify-start items-center gap-2">
                                        <li className='w-full'>พิกัด</li>
                                        <div className='w-full flex justify-between items-center gap-2'>
                                            <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                                <label className='w-[5rem]' htmlFor="">ชื่อสถานที่</label>
                                                <input type="text" value={item.nameLocations} className=' rounded-md px-2 h-[2rem]' disabled />
                                            </div>
                                            <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                                <label className='w-[5rem]' htmlFor="">ซอย/ตรอก</label>
                                                <input type="text" value={item.alleys} className=' rounded-md px-2  h-[2rem]' disabled />
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-between items-center gap-2'>
                                            <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                                <label className='w-[5rem]' htmlFor="">ถนน</label>
                                                <input type="text" value={item.road} className=' rounded-md px-2 h-[2rem]' disabled />
                                            </div>
                                            <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                                <label className='w-[5rem]' htmlFor="">ตำบล</label>
                                                <input type="text" value={item.subdistrict} className=' rounded-md px-2  h-[2rem]' disabled />
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-between items-center gap-2'>
                                            <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                                <label className='w-[5rem]' htmlFor="">อำเภอ</label>
                                                <input type="text" value={item.district} className=' rounded-md px-2 h-[2rem]' disabled />
                                            </div>
                                            <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                                <label className='w-[5rem]' htmlFor="">จังหวัด</label>
                                                <input type="text" value={item.province} className=' rounded-md px-2  h-[2rem]' disabled />
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-between items-center gap-2'>
                                            <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                                <label className='w-[5rem]' htmlFor="">รหัสไปรษณีย์</label>
                                                <input type="text" value={item.zipCode} className=' rounded-md px-2  h-[2rem]' disabled />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    ))
                }
            </div>
        </div>
    )
}