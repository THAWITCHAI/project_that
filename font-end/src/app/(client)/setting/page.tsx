'use client'
import Sidebar from '@/app/_components/Sidebar'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
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
    const [dataUser, setDataUser] = useState<DataUsers[]>([])

    const [nick_name, setNickName] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [profileImage, setProfile] = useState<File>(null)


    useEffect(() => {
        getDataUser()
    }, [])

    const getDataUser = async () => {
        const response = await fetch('http://localhost:8000/users/9')
        if (response.ok) {
            const data = await response.json()
            setDataUser(data)
        }
        return
    }


    const handleEdit = async (id: number) => {
        const formData = new FormData()
        if (name) {
            formData.append('name', name)
        }
        if (nick_name) {
            formData.append('nick_name', nick_name)
        }
        if (email) {
            formData.append('email', email)
        }
        if (phone) {
            formData.append('phone', phone)
        }
        if (profileImage) {
            formData.append('profileImage', profileImage)
        }
        if (password) {
            formData.append('password', password)
        }

        const response = await fetch(`http://localhost:8000/users/${id}`, {
            method: 'PUT',
            body: formData,
        })
        getDataUser()
        return
    }

    return (
        <div className='w-full h-full flex justify-center items-center gap-2'>
            <Sidebar />
            <div className='w-[82%] h-full justify-start py-5 items-center flex flex-col overflow-y-scroll'>
                {
                    dataUser.map((item, index) => (
                        <div className='shadow-md h-fit w-[50%] p-5 flex flex-col justify-center items-center gap-4'>
                            <h1 className='w-full text-center text-xl font-semibold'>
                                ตั้งค่าโปรไฟล์
                            </h1>
                            <div className='w-full flex justify-center items-center gap-2'>
                                <div className='w-full'>
                                    <li className='w-full'>รหัสผู้ใช้</li>
                                    <input disabled type="text" className=' outline-none border w-full h-[2.5rem] rounded-md text-sm px-2 text-slate-500' value={item.id} />
                                </div>
                                <div className='w-full'>
                                    <li className='w-full'>ชื่อเล่น</li>
                                    <input onChange={(e) => setNickName(e.target.value)} type="text" className=' outline-none border w-full h-[2.5rem] rounded-md text-sm px-2 text-slate-600' defaultValue={item.nick_name} />
                                </div>
                            </div>
                            <div className='w-full flex justify-center items-center gap-2'>
                                <div className='w-full'>
                                    <li className='w-full'>ชื่อ-นามสกุล</li>
                                    <input onChange={(e) => setName(e.target.name)} type="text" className=' outline-none border w-full h-[2.5rem] rounded-md text-sm px-2 text-slate-600' defaultValue={item.name} />
                                </div>
                                <div className='w-full'>
                                    <li className='w-full'>เบอร์โทรศัพท์</li>
                                    <input onChange={(e) => setPhone(e.target.value)} type="text" className=' outline-none border w-full h-[2.5rem] rounded-md text-sm px-2 text-slate-600' defaultValue={item.phone} />
                                </div>
                            </div>
                            <div className='w-full flex justify-center items-center gap-2'>
                                <div className='w-full'>
                                    <li className='w-full'>อีเมล์</li>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" className=' outline-none border w-full h-[2.5rem] rounded-md text-sm px-2 text-slate-600' defaultValue={item.email} />
                                </div>
                                <div className='w-full'>
                                    <li className='w-full'>รหัสผ่านใหม่</li>
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" className=' outline-none ring-1 ring-green-500 w-full h-[2.5rem] rounded-md text-sm px-2 text-slate-600' placeholder='ถ้าต้องการเปลี่ยนรหัสผ่านใหม่' />
                                </div>
                            </div>
                            <div className='w-full flex justify-center items-center gap-2'>
                                <div className='w-full'>
                                    <li className='w-full'>ภาพโปรไฟล์ใหม่</li>
                                    <Input onChange={(e) => setProfile(e.target.files[0])} type="file" className='cursor-pointer outline-none border py-2 w-full h-[2.5rem] rounded-md text-sm px-7 text-slate-600' />
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
                                                    <Image src={`/uploads/${item.profileImage}`} width={200} height={200} alt='' className='rounded-lg' />
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
                            <button onClick={() => handleEdit(Number(item.id))} className='w-1/2 bg-blue-500 h-[2.5rem] rounded-md text-white'>อัพเดท</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}