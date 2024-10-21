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
                                <SelectItem value="apple">ทั้งหมด</SelectItem>
                                <SelectItem value="apple">รถตู้</SelectItem>
                                <SelectItem value="banana">รถสปอร์ต</SelectItem>
                                <SelectItem value="blueberry">รถแท็กซี่</SelectItem>
                                <SelectItem value="grapes">รถจักยานยนต์</SelectItem>
                                <SelectItem value="pineapple">รถเก๋ง</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className='grid grid-cols-4 gap-4 w-full py-10 px-10'>
                    <Card className='w-[15rem] rounded-none hover:scale-110 transition-all ease-in-out h-[20rem] shadow-md border gap-2 flex flex-col items-center justify-start overflow-hidden'>
                        <Image src={'/car_item.png'} width={600} height={600} alt='' />
                        <h1 className='w-full text-center p-2 bg-slate-800 text-white'>Honda Civic 2024</h1>

                        <AlertDialog >
                            <AlertDialogTrigger className='w-full flex justify-center items-center'>
                                <button className='w-[70%] my-2 bg-green-500 text-white py-2 flex justify-center items-center gap-2 rounded-sm'>
                                    <Image src={'/image-gallery.png'} width={24} height={24} alt='' />
                                    จองรถ
                                </button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>รายละเอียดรถ</AlertDialogTitle>
                                    <AlertDialogDescription className='flex justify-center items-center flex-col gap-2'>
                                        <div className='w-full'>
                                            <p className='w-fit flex justify-center items-center'>แบรนด์ : Honda</p>
                                        </div>
                                        <div className='w-full'>
                                            <p className='w-fit flex justify-center items-center'>รุ่น : Honda Civic 2026</p>
                                        </div>
                                        <div className='w-full'>
                                            <p className='w-fit flex justify-center items-center gap-2'>สี : <div className='w-[1.5rem] h-[1.5rem] rounded-full bg-red-500'></div></p>
                                        </div>
                                        <div className='w-full'>
                                            <p className='w-fit flex justify-center items-center '>ป้ายทะเบียน : 56 คย อุบลราชธานี</p>
                                        </div>
                                        <div className='w-full'>
                                            <p className='w-fit flex justify-center items-center text-green-500'>ราคา : 5000฿</p>
                                        </div>
                                        <div className='w-full'>
                                            <p className='w-fit flex justify-center items-center text-green-500'>สถานะรถ : พร้อมใช้งาน</p>
                                        </div>
                                        <div className='w-full'>
                                            <p className='w-fit flex justify-center items-center'>ประเภทรถ : รถยนต์</p>
                                        </div>
                                        <div className='w-full'>
                                            <p className='w-fit flex justify-center items-center text-blue-500'>จำนวนการใช้งาน : 15 ครั้ง</p>
                                        </div>
                                        <div className='w-full'>
                                            <p className='w-fit flex justify-center items-center'>ที่นั่ง : 6 ที่</p>
                                        </div>
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>ปิด</AlertDialogCancel>
                                    <AlertDialogAction>
                                        <Link href={'/booking-cars/'+15}>ยืนยัน</Link>
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                        <div className='w-full h-fit flex justify-between items-center gap-2 py-2'>
                            <p className='text-end px-2 font-light text-sm text-green-500'>ราคา 5000฿</p>
                            <p className='text-end px-2 font-light text-sm text-yellow-600'>จำนวนการใช้รถ 12</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}