'use client'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
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
import { useRouter } from 'next/navigation'
interface DataStatus {
    id: number
    name: string
}
type Props = {}

export default function CreateUser({ }: Props) {
    const [dataStatus, setDataStatus] = useState<DataStatus[]>([])

    const [roleId, setRoleId] = useState<number>(0)
    const [name, setName] = useState<string>("")
    const [nickName, setNickName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [profile, setProfile] = useState<File>(null)
    const router = useRouter()

    useEffect(() => {
        getDataStatus()
    }, [])

    const getDataStatus = async () => {
        await fetch('http://localhost:8000/role-user')
            .then(res => res.json())
            .then(res => setDataStatus(res))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (
            name === "" ||
            nickName === "" ||
            email === "" ||
            phone === "" ||
            password === "" ||
            confirmPassword === "" ||
            profile === null
        ) {
            toast.error('กรอกข้อมูลให้ครบ!', {
                action: {
                    label: 'ปิด'
                }
            })
            return
        }
        if (password.length < 8) {
            toast.error('รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร!', {
                action: {
                    label: 'ปิด'
                }
            })
            return
        }

        if (password != confirmPassword) {
            toast.error('รหัสผ่านไม่ตรงกัน!', {
                action: {
                    label: 'ปิด'
                }
            })
            return
        }

        const formData = new FormData()
        formData.append('name', name)
        formData.append('nick_name', nickName)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('phone', phone)
        formData.append('profileImage', profile)
        formData.append('roleId', roleId)

        const res = await fetch(`http://localhost:8000/users`, {
            method: 'POST',
            body: formData,
        })
        if (!res.ok) {
            toast.error('ไม่สามารถสร้างข้อมูลผู้ใช้ได้!', {
                action: {
                    label: 'ปิด'
                }
            })
            return
        }
        toast.success('สร้างข้อมูลผู้ใช้เรียบร้อย!', {
            action: {
                label: 'ปิด'
            }
        })
        setName("")
        setNickName("")
        setEmail("")
        setPhone("")
        setPassword("")
        setConfirmPassword("")
        setProfile(null)
        setRoleId(0)
        router.push('/admin/show/users')
        return

    }
    // console.log({
    //     roleId,
    //     name,
    //     nickName,
    //     email,
    //     phone,
    //     password,
    //     confirmPassword,
    //     profile,
    // });
    return (
        <div className='w-full h-fit flex flex-col justify-start gap-4 items-center'>
            <h1 className='w-full'>เพิ่มข้อมูลผู้ใช้</h1>
            <form method='POST' className='bg-white shadow-md p-2 w-1/2 flex justify-start items-center flex-col gap-3 rounded-md'>
                <h1 className='text-xl font-medium'>กรอกข้อมูลผู้ใช้</h1>
                <p className='text-sm text-slate-500 font-light'>กรอกข้อมูลผู้ใช้ให้ครบแล้วค่อยกดเพิ่มข้อมูล</p>
                <div className='w-full flex justify-center items-center gap-2'>
                    <input onChange={(e) => setName(e.target.value)} type="text" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='ชื่อ - นามสกุล' />
                    <input onChange={(e) => setNickName(e.target.value)} type="text" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='ชื่อเล่น' />
                </div>
                <div className='w-full flex justify-center items-center gap-2'>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='อีเมล์' />
                    <Input onChange={(e) => setPhone(e.target.value)} type="text" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='เบอร์โทร' />
                </div>
                <div className='w-full flex justify-center items-center gap-2'>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='รหัสผ่าน' />
                    <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='ยืนยันรหัสผ่าน' />
                </div>
                <li className='w-full text-sm'>โปรไฟล์</li>
                <div className='w-full flex justify-center items-center gap-2'>
                    <Input onChange={(e) => setProfile(e.target.files[0])} type="file" className='border py-2.5 w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='ราคา' />
                </div>
                <div className='w-full flex justify-center items-center gap-2'>
                    <Select onValueChange={(e) => setRoleId(parseInt(e))}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="เลือกบทบาทหน้าที่" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>เลือกบทบาทหน้าที่</SelectLabel>
                                {
                                    dataStatus.map((item) => (
                                        <SelectItem key={item.id} value={String(item.id)}>
                                            {item.name}
                                        </SelectItem>
                                    ))
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <button onClick={handleSubmit} className='w-1/2 my-2 text-white h-[2.5rem] rounded-md bg-blue-500 hover:bg-blue-600 transition-all ease-in-out'>
                    เพิ่มข้อมูล
                </button>
            </form>
        </div>
    )
}