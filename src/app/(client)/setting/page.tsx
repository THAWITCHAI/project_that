import Sidebar from '@/app/_components/Sidebar'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'
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

type Props = object

export default function Setting({ }: Props) {
    return (
        <div className='w-full h-full flex justify-center items-center gap-2'>
            <Sidebar />
            <div className='w-[82%] h-full justify-start py-5 items-center flex flex-col overflow-y-scroll'>
                <div className='shadow-md h-fit w-[50%] p-5 flex flex-col justify-center items-center gap-4'>
                    <h1 className='w-full text-center text-xl font-semibold'>
                        ตั้งค่าโปรไฟล์
                    </h1>
                    <div className='w-full flex justify-center items-center gap-2'>
                        <div className='w-full'>
                            <li className='w-full'>รหัสผู้ใช้</li>
                            <input disabled type="text" className=' outline-none border w-full h-[3rem] rounded-md px-2 text-slate-500' value={1521} />
                        </div>
                        <div className='w-full'>
                            <li className='w-full'>ชื่อเล่น</li>
                            <input type="text" className=' outline-none border w-full h-[3rem] rounded-md px-2 text-slate-600' value={'เป้'} />
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center gap-2'>
                        <div className='w-full'>
                            <li className='w-full'>ชื่อ-นามสกุล</li>
                            <input type="text" className=' outline-none border w-full h-[3rem] rounded-md px-2 text-slate-600' value={'นาย ธวิชชัย  บุญส่ง'} />
                        </div>
                        <div className='w-full'>
                            <li className='w-full'>เบอร์โทรศัพท์</li>
                            <input type="text" className=' outline-none border w-full h-[3rem] rounded-md px-2 text-slate-600' value={'065-2974-104'} />
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center gap-2'>
                        <div className='w-full'>
                            <li className='w-full'>อีเมล์</li>
                            <input type="email" className=' outline-none border w-full h-[3rem] rounded-md px-2 text-slate-600' value={'thawitchai@gmail.com'} />
                        </div>
                        <div className='w-full'>
                            <li className='w-full'>รหัสผ่านใหม่</li>
                            <input type="password" className=' outline-none ring-1 ring-green-500 w-full h-[3rem] rounded-md px-2 text-slate-600' placeholder='ถ้าต้องการเปลี่ยนรหัสผ่านใหม่' />
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center gap-2'>
                        <div className='w-full'>
                            <li className='w-full'>ภาพโปรไฟล์ใหม่</li>
                            <Input type="file" className='cursor-pointer outline-none border py-3 w-full h-[3rem] rounded-md px-7 text-slate-600' />
                        </div>
                        <div className='w-full flex justify-center flex-col items-center'>
                            <p className='w-full text-center'>ภาพโปรไฟล์เดิม</p>
                            <AlertDialog>
                                <AlertDialogTrigger>
                                    <Image className='cursor-pointer' src={'/see.png'} width={24} height={24} alt='' />
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>ภาพโปรไฟล์เดิม</AlertDialogTitle>
                                        <AlertDialogDescription className='overflow-hidden'>
                                            <Image src={'/car_b.png'} width={1000} height={1000} alt='' className='rounded-lg' />
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center gap-2'>
                        <div className='w-full'>
                            <li className='w-full'>ใบขับขี่ใหม่</li>
                            <Input type="file" className='cursor-pointer outline-none border py-3 w-full h-[3rem] rounded-md px-7 text-slate-600' />
                        </div>
                        <div className='w-full flex justify-center flex-col items-center'>
                            <p className='w-full text-center'>ใบขับขี่เดิม</p>
                            <AlertDialog>
                                <AlertDialogTrigger>
                                    <Image className='cursor-pointer' src={'/see.png'} width={24} height={24} alt='' />
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>ภาพโปรไฟล์เดิม</AlertDialogTitle>
                                        <AlertDialogDescription className='overflow-hidden'>
                                            <Image src={'/car_b.png'} width={1000} height={1000} alt='' className='rounded-lg' />
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>
                    <button className='w-1/2 bg-blue-500 h-[3rem] rounded-md text-white'>อัพเดท</button>
                </div>
            </div>
        </div>
    )
}