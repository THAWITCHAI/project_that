import Sidebar from '@/app/_components/Sidebar'
import React from 'react'
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


type Props = object

export default function Details({ params }: Props) {
    const { id } = params
    return (
        <div className='w-full h-full flex justify-center items-center gap-2'>
            <Sidebar />
            <div className='w-[82%] h-full flex flex-col overflow-y-scroll justify-start items-center gap-4 py-10'>
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
                                    <Image src={'/driving_license.png'} width={300} height={300} alt='' />
                                    <Image src={'/profile_face.jpg'} width={100} height={100} alt='' />
                                </div>
                                <li className='w-full'>ข้อมูล</li>
                                <div className='w-full flex justify-between items-center gap-2'>
                                    <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                        <label className='w-[5rem]' htmlFor="">ชื่อ</label>
                                        <input type="text" value={'นางสาว ใจดี โหดร้าย'} className=' rounded-md px-2 h-[2rem]' disabled />
                                    </div>
                                    <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                        <label className='w-[5rem]' htmlFor="">เบอร์ติดต่อ</label>
                                        <input type="text" value={'0651911669'} className=' rounded-md px-2  h-[2rem]' disabled />
                                    </div>
                                </div>
                                <div className='w-full flex justify-between items-center gap-2'>
                                    <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                        <label className='w-[5rem]' htmlFor="">อีเมล์</label>
                                        <input type="text" value={'jaidee@gmail.com'} className=' rounded-md px-2 h-[2rem]' disabled />
                                    </div>
                                    <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                        <label className='w-[5rem]' htmlFor="">ชื่อเล่น</label>
                                        <input type="text" value={'ใจดี'} className=' rounded-md px-2  h-[2rem]' disabled />
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
                                    <Image src={'/car_item.png'} width={300} height={300} alt='' />
                                </div>
                                <li className='w-full'>ข้อมูล</li>
                                <div className='w-full flex justify-between items-center gap-2'>
                                    <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                        <label className='w-[5rem]' htmlFor="">แบรนด์</label>
                                        <input type="text" value={'Yamaha'} className=' rounded-md px-2 h-[2rem]' disabled />
                                    </div>
                                    <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                        <label className='w-[5rem]' htmlFor="">ยี่ห้อ</label>
                                        <input type="text" value={'Yaris 2026'} className=' rounded-md px-2  h-[2rem]' disabled />
                                    </div>
                                </div>
                                <div className='w-full flex justify-between items-center gap-2'>
                                    <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                        <label className='w-[5rem]' htmlFor="">ป้ายทะเบียน</label>
                                        <input type="text" value={'1 กข อุบลราชธานี'} className=' rounded-md px-2 h-[2rem]' disabled />
                                    </div>
                                    <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                        <label className='w-[5rem]' htmlFor="">ที่นั่ง</label>
                                        <input type="text" value={'3'} className=' rounded-md px-2  h-[2rem]' disabled />
                                    </div>
                                </div>
                                <div className='w-full flex justify-between items-center gap-2'>
                                    <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                        <label className='w-[5rem]' htmlFor="">ประเภทรถ</label>
                                        <input type="text" value={'รถเก๋ง'} className=' rounded-md px-2 h-[2rem]' disabled />
                                    </div>
                                    <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                        <label className='w-[5rem]' htmlFor="">ราคา</label>
                                        <input type="text" value={'2500฿'} className=' rounded-md px-2  h-[2rem]' disabled />
                                    </div>
                                </div>
                                <div className='w-full flex justify-between items-center gap-2'>
                                    <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                        <label className='w-[5rem]' htmlFor="">สี</label>
                                        <div className='w-[2rem] h-8 rounded-full shadow-md bg-red-500'></div>
                                    </div>
                                    <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                        <label className='w-[5rem]' htmlFor="">ชำระมัดจำ</label>
                                        <input type="text" value={'จ่ายแล้ว'} className=' rounded-md px-2  h-[2rem] text-green-500' disabled />
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
                                            <TableCell>12 ตุลาคม 2567</TableCell>
                                            <TableCell>15 ตุลาคม 2567</TableCell>
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
                                        <input type="text" value={'มหาวัทยาลัยราชฏัภอุบลราชธานี'} className=' rounded-md px-2 h-[2rem]' disabled />
                                    </div>
                                    <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                        <label className='w-[5rem]' htmlFor="">ซอย/ตรอก</label>
                                        <input type="text" value={'-'} className=' rounded-md px-2  h-[2rem]' disabled />
                                    </div>
                                </div>
                                <div className='w-full flex justify-between items-center gap-2'>
                                    <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                        <label className='w-[5rem]' htmlFor="">ถนน</label>
                                        <input type="text" value={'แจ้งสนิท'} className=' rounded-md px-2 h-[2rem]' disabled />
                                    </div>
                                    <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                        <label className='w-[5rem]' htmlFor="">ตำบล</label>
                                        <input type="text" value={'ในเมือง'} className=' rounded-md px-2  h-[2rem]' disabled />
                                    </div>
                                </div>
                                <div className='w-full flex justify-between items-center gap-2'>
                                    <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                        <label className='w-[5rem]' htmlFor="">อำเภอ</label>
                                        <input type="text" value={'เมือง'} className=' rounded-md px-2 h-[2rem]' disabled />
                                    </div>
                                    <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                        <label className='w-[5rem]' htmlFor="">จังหวัด</label>
                                        <input type="text" value={'อุบลราชธานี'} className=' rounded-md px-2  h-[2rem]' disabled />
                                    </div>
                                </div>
                                <div className='w-full flex justify-between items-center gap-2'>
                                    <div className='w-fit h-fit flex justify-center items-center gap-2 text-sm'>
                                        <label className='w-[5rem]' htmlFor="">รหัสไปรษณีย์</label>
                                        <input type="text" value={'34000'} className=' rounded-md px-2  h-[2rem]' disabled />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}