'use client'
import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
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
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type Props = {}

interface DataUsers {
    id: number
    name: string
    nick_name: string
    email: string
    password: string
    phone: string
    profileImage: string
    roleId: number
    createdAt: string
    updatedAt: string
    role: {
        name: string
    }
}

interface DataRole {
    id: number
    name: string
}

export default function Users({ }: Props) {
    const [dataUser, setDataUser] = useState<DataUsers[]>([])
    const [dataRoles, setDataRole] = useState<DataRole[]>([])

    const [roleId, setRoleId] = useState<number>(0)
    const [name, setName] = useState<string>("")
    const [nick_name, setNickName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [profileImage, setProfile] = useState<File>(null)
    const [search, setSearch] = useState<number>(0)

    useEffect(() => {
        getDataUser()
        getDataRole()
    }, [])

    const getDataUser = async () => {
        const response = await fetch('http://localhost:8000/users')
        if (response.ok) {
            const data = await response.json()
            setDataUser(data)
        }
        return
    }
    const getDataRole = async () => {
        const response = await fetch('http://localhost:8000/role-user')
        if (response.ok) {
            const data = await response.json()
            setDataRole(data)
        }
        return
    }

    const handleDelete = async (id: number) => {
        const res = await fetch(`http://localhost:8000/users/${id}`, {
            method: 'DELETE',
        })
        if (!res.ok) {
            toast.error('ลบข้อมูลไม่สำเร็จ', {
                action: 'ปิด'
            })
            return
        }
        toast.success('ลบข้อมูลสำเร็จ', {
            action: {
                label: 'ปิด'
            }
        })
        getDataUser()
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
        if (roleId) {
            formData.append('roleId', parseInt(roleId))
        }

        const response = await fetch(`http://localhost:8000/users/${id}`, {
            method: 'PUT',
            body: formData,
        })
        getDataUser()
        return
    }

    const dataSearch = dataUser.filter((item) => {
        return item.roleId === search
    })

    return (
        <div className='w-full h-full flex flex-col justify-start gap-4 items-center'>
            <h1 className='w-full'>ข้อมูลผู้ใช้</h1>
            <div className='w-full p-2 flex justify-end gap-2 items-center '>
                <Select onValueChange={(e) => setSearch(parseInt(e))}>
                    <SelectTrigger className="w-[180px] bg-white">
                        <SelectValue placeholder="เลือกบทบาทหน้าที่" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>ประเภทบทบาท</SelectLabel>
                            <SelectItem value={0}>ทั้งหมด</SelectItem>
                            {
                                dataRoles.map((roleId, index) => (
                                    <SelectItem value={String(roleId.id)}>{roleId.name}</SelectItem>
                                ))
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className='w-full bg-white  h-full rounded-md'>
                <Table>
                    {search == 0 && dataUser.length == 0 && (<TableCaption>ไม่มีข้อมูล</TableCaption>)}
                    {search != 0 && dataSearch.length == 0 && (<TableCaption>ไม่มีข้อมูล</TableCaption>)}
                    <TableHeader>
                        <TableRow>
                            <TableHead>รหัสผู้ใช้</TableHead>
                            <TableHead>ชื่อ</TableHead>
                            <TableHead>ชื่อเล่น</TableHead>
                            <TableHead>อีเมล์</TableHead>
                            <TableHead>เบอร์โทร</TableHead>
                            <TableHead>บทบาทหน้าที่</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            search == 0 && (
                                dataUser.map((item, index) => (
                                    <TableRow>
                                        <TableCell>{item.id}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.nick_name}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.phone}</TableCell>
                                        <TableCell>{item.role.name}</TableCell>
                                        <TableCell className='flex justify-end items-center gap-2 w-full'>
                                            <Sheet>
                                                <SheetTrigger>
                                                    <button className='flex gap-2 justify-center items-center py-1 w-[7rem] px-1 rounded-sm bg-blue-500 hover:bg-blue-600 transition-all ease-in-out text-white'>
                                                        <Image src={'/see-white.png'} width={20} height={20} alt='' />
                                                        รายละเอียด
                                                    </button>
                                                </SheetTrigger>
                                                <SheetContent>
                                                    <SheetHeader>
                                                        <SheetTitle>ข้อมูลผู้ใช้</SheetTitle>
                                                        <SheetDescription className='w-full flex flex-col justify-start items-center gap-5'>
                                                            <div className='w-full flex flex-col items-center justify-center'>
                                                                <Image src={`/uploads/${item.profileImage}`} width={250} height={250} alt='' className='rounded-lg' />
                                                            </div>
                                                            <div className='w-fit flex flex-col gap-2 items-start justify-center h-fit'>
                                                                <li>รหัสผู้ใช้ {item.id}</li>
                                                                <li>ชื่อ {item.name}</li>
                                                                <li>ชื่อเล่น {item.nick_name}</li>
                                                                <li>อีเมล์ {item.email}</li>
                                                                <li>เบอร์โทร {item.phone}</li>
                                                                <li>บทบาทหน้าที่ {item.role.name}</li>
                                                                <li>วันที่สร้าง {item.createdAt}</li>
                                                                <li>วันที่อัพเดท {item.updatedAt}</li>
                                                            </div>
                                                        </SheetDescription>
                                                    </SheetHeader>
                                                </SheetContent>
                                            </Sheet>

                                            <Sheet>
                                                <SheetTrigger>
                                                    <button className='flex gap-2 justify-center items-center py-1 w-[7rem] px-1 rounded-sm bg-red-500 hover:bg-red-600 transition-all ease-in-out text-white'>
                                                        <Image src={'/edit.png'} width={20} height={20} alt='' />
                                                        แก้ไข
                                                    </button>
                                                </SheetTrigger>
                                                <SheetContent>
                                                    <SheetHeader>
                                                        <SheetTitle className='w-full flex gap-2'>แก้ไขข้อมูลของ <h1 className='text-blue-500'>{item.name}</h1></SheetTitle>
                                                        <SheetDescription className='w-full flex flex-col gap-2 justify-start items-start'>
                                                            <li>ข้อมูลส่วนตัว</li>
                                                            <div className='w-full flex justify-between items-center gap-2'>
                                                                <label htmlFor="">รหัสผู้ใช้</label>
                                                                <Input disabled type="text" className='text-black w-[70%] border h-[2.5rem] rounded-md outline-none px-2' defaultValue={item.id} />
                                                            </div>
                                                            <div className='w-full flex justify-between items-center gap-2'>
                                                                <label htmlFor="">ชื่อ</label>
                                                                <Input onChange={(e) => setName(e.target.value)} type="text" className='text-black w-[70%] border h-[2.5rem] rounded-md outline-none px-2' defaultValue={item.name} />
                                                            </div>
                                                            <div className='w-full flex justify-between items-center gap-2'>
                                                                <label htmlFor="">อีเมล์</label>
                                                                <Input onChange={(e) => setEmail(e.target.value)} type="text" className='text-black w-[70%] border h-[2.5rem] rounded-md outline-none px-2' defaultValue={item.email} />
                                                            </div>
                                                            <div className='w-full flex justify-between items-center gap-2'>
                                                                <label htmlFor="">เบอร์โทร</label>
                                                                <Input onChange={(e) => setPhone(e.target.value)} type="text" className='text-black w-[70%] border h-[2.5rem] rounded-md outline-none px-2' defaultValue={item.phone} />
                                                            </div>
                                                            <div className='w-full flex justify-between items-center gap-2'>
                                                                <label htmlFor="">ชื่อเล่น</label>
                                                                <Input onChange={(e) => setNickName(e.target.value)} type="text" className='text-black w-[70%] border h-[2.5rem] rounded-md outline-none px-2' defaultValue={item.nick_name} />
                                                            </div>
                                                            <div className='w-full flex justify-between items-center gap-2'>
                                                                <label htmlFor="">บทบาทหน้าที่</label>

                                                                <Select onValueChange={(e) => setRoleId(parseInt(e))} defaultValue={Number(item.roleId)}>
                                                                    <SelectTrigger className="w-[70%] h-[2.5rem] text-black">
                                                                        <SelectValue placeholder="เลือกบทบทหน้าที่" />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        <SelectGroup>
                                                                            <SelectLabel>ประเภทบทบาท</SelectLabel>
                                                                            {
                                                                                dataRoles.map((roleId, index) => (
                                                                                    <SelectItem value={Number(roleId.id)}>{roleId.name}</SelectItem>
                                                                                ))
                                                                            }
                                                                        </SelectGroup>
                                                                    </SelectContent>
                                                                </Select>
                                                            </div>
                                                            <div className='w-full flex justify-between items-center gap-2'>
                                                                <label htmlFor="">เปลี่ยนโปรไฟล์</label>
                                                                <Input onChange={(e) => setProfile(e.target.files[0])} type="file" className='text-black py-2 w-[70%] border h-[2.5rem] rounded-md outline-none px-2' />
                                                            </div>
                                                            <div className='w-full flex justify-between items-center gap-2'>
                                                                <label htmlFor="">วันที่สร้าง</label>
                                                                <Input disabled type="text" className='text-black w-[70%] border h-[2.5rem] rounded-md outline-none px-2' defaultValue={item.createdAt} />
                                                            </div>
                                                            <div className='w-full flex justify-between items-center gap-2'>
                                                                <label htmlFor="">วันที่อัพเดท</label>
                                                                <Input disabled type="text" className='w-[70%] text-black border h-[2.5rem] rounded-md outline-none px-2' defaultValue={item.updatedAt} />
                                                            </div>

                                                        </SheetDescription>
                                                    </SheetHeader>
                                                    <SheetFooter className='my-2'>
                                                        <SheetClose asChild>
                                                            <div className='w-full flex justify-end items-center gap-2'>
                                                                <Button onClick={() => handleEdit(item.id)} className='w-1/4 bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out'>อัพเดท</Button>
                                                                <Button onClick={() => handleDelete(item.id)} className='w-1/4 bg-red-500 hover:bg-red-600 transition-all ease-in-out'>ลบ</Button>
                                                            </div>
                                                        </SheetClose>
                                                    </SheetFooter>
                                                </SheetContent>
                                            </Sheet>

                                        </TableCell>
                                    </TableRow>
                                ))
                            )
                        }
                        {
                            search != 0 && (
                                dataSearch.map((item, index) => (
                                    <TableRow>
                                        <TableCell>{item.id}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.nick_name}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.phone}</TableCell>
                                        <TableCell>{item.role.name}</TableCell>
                                        <TableCell className='flex justify-end items-center gap-2 w-full'>
                                            <Sheet>
                                                <SheetTrigger>
                                                    <button className='flex gap-2 justify-center items-center py-1 w-[7rem] px-1 rounded-sm bg-blue-500 hover:bg-blue-600 transition-all ease-in-out text-white'>
                                                        <Image src={'/see-white.png'} width={20} height={20} alt='' />
                                                        รายละเอียด
                                                    </button>
                                                </SheetTrigger>
                                                <SheetContent>
                                                    <SheetHeader>
                                                        <SheetTitle>ข้อมูลผู้ใช้</SheetTitle>
                                                        <SheetDescription className='w-full flex flex-col justify-start items-center gap-5'>
                                                            <div className='w-full flex flex-col items-center justify-center'>
                                                                <Image src={`/uploads/${item.profileImage}`} width={250} height={250} alt='' className='rounded-lg' />
                                                            </div>
                                                            <div className='w-fit flex flex-col gap-2 items-start justify-center h-fit'>
                                                                <li>รหัสผู้ใช้ {item.id}</li>
                                                                <li>ชื่อ {item.name}</li>
                                                                <li>ชื่อเล่น {item.nick_name}</li>
                                                                <li>อีเมล์ {item.email}</li>
                                                                <li>เบอร์โทร {item.phone}</li>
                                                                <li>บทบาทหน้าที่ {item.role.name}</li>
                                                                <li>วันที่สร้าง {item.createdAt}</li>
                                                                <li>วันที่อัพเดท {item.updatedAt}</li>
                                                            </div>
                                                        </SheetDescription>
                                                    </SheetHeader>
                                                </SheetContent>
                                            </Sheet>

                                            <Sheet>
                                                <SheetTrigger>
                                                    <button className='flex gap-2 justify-center items-center py-1 w-[7rem] px-1 rounded-sm bg-red-500 hover:bg-red-600 transition-all ease-in-out text-white'>
                                                        <Image src={'/edit.png'} width={20} height={20} alt='' />
                                                        แก้ไข
                                                    </button>
                                                </SheetTrigger>
                                                <SheetContent>
                                                    <SheetHeader>
                                                        <SheetTitle className='w-full flex gap-2'>แก้ไขข้อมูลของ <h1 className='text-blue-500'>{item.name}</h1></SheetTitle>
                                                        <SheetDescription className='w-full flex flex-col gap-2 justify-start items-start'>
                                                            <li>ข้อมูลส่วนตัว</li>
                                                            <div className='w-full flex justify-between items-center gap-2'>
                                                                <label htmlFor="">รหัสผู้ใช้</label>
                                                                <Input disabled type="text" className='text-black w-[70%] border h-[2.5rem] rounded-md outline-none px-2' defaultValue={item.id} />
                                                            </div>
                                                            <div className='w-full flex justify-between items-center gap-2'>
                                                                <label htmlFor="">ชื่อ</label>
                                                                <Input onChange={(e) => setName(e.target.value)} type="text" className='text-black w-[70%] border h-[2.5rem] rounded-md outline-none px-2' defaultValue={item.name} />
                                                            </div>
                                                            <div className='w-full flex justify-between items-center gap-2'>
                                                                <label htmlFor="">อีเมล์</label>
                                                                <Input onChange={(e) => setEmail(e.target.value)} type="text" className='text-black w-[70%] border h-[2.5rem] rounded-md outline-none px-2' defaultValue={item.email} />
                                                            </div>
                                                            <div className='w-full flex justify-between items-center gap-2'>
                                                                <label htmlFor="">เบอร์โทร</label>
                                                                <Input onChange={(e) => setPhone(e.target.value)} type="text" className='text-black w-[70%] border h-[2.5rem] rounded-md outline-none px-2' defaultValue={item.phone} />
                                                            </div>
                                                            <div className='w-full flex justify-between items-center gap-2'>
                                                                <label htmlFor="">ชื่อเล่น</label>
                                                                <Input onChange={(e) => setNickName(e.target.value)} type="text" className='text-black w-[70%] border h-[2.5rem] rounded-md outline-none px-2' defaultValue={item.nick_name} />
                                                            </div>
                                                            <div className='w-full flex justify-between items-center gap-2'>
                                                                <label htmlFor="">บทบาทหน้าที่</label>

                                                                <Select onValueChange={(e) => setRoleId(parseInt(e))} defaultValue={Number(item.roleId)}>
                                                                    <SelectTrigger className="w-[70%] h-[2.5rem] text-black">
                                                                        <SelectValue placeholder="เลือกบทบทหน้าที่" />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        <SelectGroup>
                                                                            <SelectLabel>ประเภทบทบาท</SelectLabel>
                                                                            {
                                                                                dataRoles.map((roleId, index) => (
                                                                                    <SelectItem value={Number(roleId.id)}>{roleId.name}</SelectItem>
                                                                                ))
                                                                            }
                                                                        </SelectGroup>
                                                                    </SelectContent>
                                                                </Select>
                                                            </div>
                                                            <div className='w-full flex justify-between items-center gap-2'>
                                                                <label htmlFor="">เปลี่ยนโปรไฟล์</label>
                                                                <Input onChange={(e) => setProfile(e.target.files[0])} type="file" className='text-black py-2 w-[70%] border h-[2.5rem] rounded-md outline-none px-2' />
                                                            </div>
                                                            <div className='w-full flex justify-between items-center gap-2'>
                                                                <label htmlFor="">วันที่สร้าง</label>
                                                                <Input disabled type="text" className='text-black w-[70%] border h-[2.5rem] rounded-md outline-none px-2' defaultValue={item.createdAt} />
                                                            </div>
                                                            <div className='w-full flex justify-between items-center gap-2'>
                                                                <label htmlFor="">วันที่อัพเดท</label>
                                                                <Input disabled type="text" className='w-[70%] text-black border h-[2.5rem] rounded-md outline-none px-2' defaultValue={item.updatedAt} />
                                                            </div>

                                                        </SheetDescription>
                                                    </SheetHeader>
                                                    <SheetFooter className='my-2'>
                                                        <SheetClose asChild>
                                                            <div className='w-full flex justify-end items-center gap-2'>
                                                                <Button onClick={() => handleEdit(item.id)} className='w-1/4 bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out'>อัพเดท</Button>
                                                                <Button onClick={() => handleDelete(item.id)} className='w-1/4 bg-red-500 hover:bg-red-600 transition-all ease-in-out'>ลบ</Button>
                                                            </div>
                                                        </SheetClose>
                                                    </SheetFooter>
                                                </SheetContent>
                                            </Sheet>

                                        </TableCell>
                                    </TableRow>
                                ))
                            )
                        }
                    </TableBody>
                    <TableFooter className='bg-white'>
                        <TableRow>
                            <TableCell colSpan={8}>รวม</TableCell>
                            <TableCell className="text-right">{dataUser.length} คน</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div >
    )
}