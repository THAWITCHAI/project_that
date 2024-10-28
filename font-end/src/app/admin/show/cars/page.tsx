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

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

type Props = {}

interface DataTypeCar {
    id: number
    name: string
}
interface DataStatusCar {
    id: number
    name: string
}

interface DataCar {
    id: number
    brand: string
    model: string
    useCar: number
    seat: number
    color: string
    license: string
    price: number
    status: {
        id: number
        name: string
    }
    type: {
        id: number
        name: string
    }
    image: string
    createdAt: string
    updatedAt: string
}

export default function Cars({ }: Props) {
    const [dataCar, setDataCar] = useState<DataCar[]>([])
    const [dataType, setDataType] = useState<DataTypeCar[]>([])
    const [dataStatus, setDataStatus] = useState<DataStatusCar[]>([])

    // setVarible
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [seat, setSeat] = useState(0)
    const [color, setColor] = useState('#fffff')
    const [license, setLicense] = useState('')
    const [price, setPrice] = useState('')
    const [statusCarId, setStatusCarId] = useState<number | null>(null)
    const [typeCarId, setTypeCarId] = useState<number | null>(null)
    const [image, setImage] = useState<File>(null)

    useEffect(() => {
        getDataStatus()
        getDataType()
        getCar()
    }, [])

    const getDataStatus = async () => {
        await fetch('http://localhost:8000/status-car')
            .then((res) => res.json())
            .then((res) => setDataStatus(res))

        return
    }

    const getDataType = async () => {
        await fetch('http://localhost:8000/type-car')
            .then((res) => res.json())
            .then((res) => setDataType(res))

        return
    }

    const getCar = async () => {
        const res = await fetch('http://localhost:8000/cars')
        const data = await res.json()
        setDataCar(data)
        return
    }

    const handleDelete = async (id: number) => {
        const res = await fetch(`http://localhost:8000/cars/${id}`, {
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
        getCar()
        return
    }

    const handleUpdate = async (id: number) => {
        const formData = new FormData()

        if (color != '#fffff') {
            formData.append('color', color)
        }
        if (brand) {
            formData.append('brand', brand)
        }
        if (model) {
            formData.append('model', model)
        }
        if (seat) {
            formData.append('seat', Number(seat))
        }
        if (license) {
            formData.append('license', license)
        }
        if (price) {
            formData.append('price', Number(price))
        }
        if (statusCarId) {
            formData.append('statusId', Number(statusCarId))
        }
        if (typeCarId) {
            formData.append('typeId', Number(typeCarId))
        }
        if (image) {
            formData.append('image', image)
        }
        const res = await fetch(`http://localhost:8000/cars/${id}`, {
            method: 'PUT',
            body: formData,
        })
        if (!res.ok) {
            toast.error('แก้ไขข้อมูลไม่สำเร็จ', {
                action: {
                    label: 'ปิด'
                }
            })
            return
        }
        toast.success('แก้ไขข้อมูลสำเร็จ', {
            action: {
                label: 'ปิด'
            }
        })
        getCar()
        setBrand('')
        setModel('')
        setSeat(0)
        setColor('#fffff')
        setLicense('')
        setPrice('')
        setStatusCarId(0)
        setTypeCarId(0)
        return
    }

    return (
        <div className='w-full h-full flex flex-col justify-start gap-4 items-center'>
            <h1 className='w-full'>ข้อมูลรถ</h1>
            <div className='w-full p-2 flex justify-end gap-2 items-center '>
                <Select>
                    <SelectTrigger className="w-[180px] bg-white">
                        <SelectValue placeholder="เลือกประเภทรถ" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>ประเภทรถ</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px] bg-white">
                        <SelectValue placeholder="เลือกสถานะรถ" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>สถานะรถ</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className='w-full bg-white  h-full rounded-md overflow-y-scroll'>
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
                        {
                            dataCar.map((car, index) => (
                                <TableRow key={index}>
                                    <TableCell>{car.id}</TableCell>
                                    <TableCell>{car.brand}</TableCell>
                                    <TableCell>{car.model}</TableCell>
                                    <TableCell>{car.seat}</TableCell>
                                    <TableCell>{car.type.name}</TableCell>
                                    <TableCell>{car.license}</TableCell>
                                    <TableCell className='text-green-500'>{car.status.name}</TableCell>
                                    <TableCell>{

                                        Intl.NumberFormat('th-TH', {
                                            style: 'currency',
                                            currency: 'THB',
                                        }).format(car.price)

                                    }</TableCell>
                                    <TableCell className='flex justify-end w-fit items-center gap-2'>
                                        <Sheet>
                                            <SheetTrigger className='outline-none' asChild>
                                                <button className='flex gap-2 justify-center items-center py-1 w-[7rem] px-1 rounded-sm bg-blue-500 text-white'>
                                                    <Image src={'/see-white.png'} width={20} height={20} alt='' />
                                                    รายละเอียด
                                                </button>
                                            </SheetTrigger>
                                            <SheetContent>
                                                <SheetHeader>
                                                    <SheetTitle>รายละเอียด</SheetTitle>
                                                    <SheetDescription className='flex flex-col justify-start items-center gap-4'>
                                                        <Image src={`/uploads/${car.image}`} width={150} height={150} alt='' className='rounded-md' />
                                                        <div className='w-fit flex-col flex justify-start items-start gap-2'>
                                                            <li>รหัสรถ {car.id}</li>
                                                            <li>แบรนด์ {car.brand}</li>
                                                            <li>ยี่ห้อ {car.model}</li>
                                                            <li>ที่นั่ง {car.seat}</li>
                                                            <li className='flex gap-2 justify-center items-center'>
                                                                สี
                                                                <span className='rounded-full w-[2rem] h-[2rem] border' style={{ background: car.color }}></span></li>
                                                            <li>ป้ายทะเบียน {car.license}</li>
                                                            <li>ราคา {car.price}</li>
                                                            <li>สถานะรถ {car.status.name}</li>
                                                            <li>ประเภทรถ {car.type.name}</li>
                                                            <li>จำนวนการใช้งาน {car.useCar}</li>
                                                            <li>วันสร้าง {car.createdAt}</li>
                                                            <li>วันที่อัพเดท {car.updatedAt}</li>
                                                        </div>
                                                    </SheetDescription>
                                                </SheetHeader>
                                            </SheetContent>
                                        </Sheet>
                                        <Sheet>
                                            <SheetTrigger className='outline-none' asChild>
                                                <button className='flex gap-2 justify-center items-center py-1 w-[7rem] px-1 rounded-sm bg-yellow-500 text-white'>
                                                    <Image src={'/edit.png'} width={20} height={20} alt='' />
                                                    แก้ไข
                                                </button>
                                            </SheetTrigger>
                                            <SheetContent>
                                                <SheetHeader>
                                                    <SheetTitle className='flex gap-2'>แก้ไขข้องมูล <h1 className='text-blue-500'>{car.model}</h1></SheetTitle>
                                                    <SheetDescription className='w-full flex flex-col justify-start items-center gap-2 text-black'>
                                                        <div className='w-full flex justify-between items-center'>
                                                            <label htmlFor="">รหัสรถ</label>
                                                            <Input disabled defaultValue={car.id} className='w-[70%] border ' />
                                                        </div>
                                                        <div className='w-full flex justify-between items-center'>
                                                            <label htmlFor="">แบรนด์</label>
                                                            <Input onChange={(e) => setBrand(e.target.value)} type='text' defaultValue={car.brand} className='w-[70%] border ' />
                                                        </div>
                                                        <div className='w-full flex justify-between items-center'>
                                                            <label htmlFor="">ยี่ห้อ</label>
                                                            <Input onChange={(e) => setModel(e.target.value)} type='text' defaultValue={car.model} className='w-[70%] border ' />
                                                        </div>
                                                        <div className='w-full flex justify-between items-center'>
                                                            <label htmlFor="">ที่นั่ง</label>
                                                            <Input onChange={(e) => setSeat(parseInt(e.target.value))} type='number' defaultValue={car.seat} className='w-[70%] border ' />
                                                        </div>
                                                        <div className='w-full flex justify-between items-center'>
                                                            <label htmlFor="">สี</label>
                                                            <Input onChange={(e) => setColor(e.target.value)} defaultValue={car.color} type='color' className='w-[70%] border ' />
                                                        </div>
                                                        <div className='w-full flex justify-between items-center'>
                                                            <label htmlFor="">ป้ายทะเบียน</label>
                                                            <Input onChange={(e) => setLicense(e.target.value)} type='text' defaultValue={car.license} className='w-[70%] border ' />
                                                        </div>
                                                        <div className='w-full flex justify-between items-center'>
                                                            <label htmlFor="">ราคา</label>
                                                            <Input onChange={(e) => setPrice(parseInt(e.target.value))} type='number' defaultValue={car.price} className='w-[70%] border ' />
                                                        </div>
                                                        <div className='w-full flex justify-between items-center'>
                                                            <label htmlFor="">สถานะรถ</label>
                                                            <Select onValueChange={(e) => setStatusCarId(parseInt(e))} defaultValue={String(car.status.id)} >
                                                                <SelectTrigger className="w-[70%]">
                                                                    <SelectValue placeholder="เลือกสถานะรถ" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectGroup>
                                                                        <SelectLabel>เลือกสถานะรถ</SelectLabel>
                                                                        {
                                                                            dataStatus.map((item, index) => (
                                                                                <SelectItem key={index} value={String(item.id)}>{item.name}</SelectItem>
                                                                            ))
                                                                        }
                                                                    </SelectGroup>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                        <div className='w-full flex justify-between items-center'>
                                                            <label htmlFor="">ประเภทรถ</label>
                                                            <Select onValueChange={(e) => setTypeCarId(parseInt(e))} defaultValue={String(car.type.id)} >
                                                                <SelectTrigger className="w-[70%]">
                                                                    <SelectValue placeholder="เลือกประเภทรถ" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectGroup>
                                                                        <SelectLabel>เลือกประเภทรถ</SelectLabel>
                                                                        {
                                                                            dataType.map((item, index) => (
                                                                                <SelectItem key={index} value={String(item.id)}>{item.name}</SelectItem>
                                                                            ))
                                                                        }
                                                                    </SelectGroup>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                        <div className='w-full flex justify-between items-center'>
                                                            <label htmlFor="">ภาพ</label>
                                                            <Input onChange={(e) => setImage(e.target.files[0])} type='file' className='w-[70%] py-2 border ' />
                                                        </div>
                                                        <div className='w-full flex justify-between items-center'>
                                                            <label htmlFor="">จำนวนการใช้งาน</label>
                                                            <Input type='text' defaultValue={car.useCar} disabled className='w-[70%] py-2 border ' />
                                                        </div>
                                                        <div className='w-full flex justify-between items-center'>
                                                            <label htmlFor="">วันที่สร้าง</label>
                                                            <Input defaultValue={car.createdAt} disabled className='w-[70%] border ' />
                                                        </div>
                                                        <div className='w-full flex justify-between items-center'>
                                                            <label htmlFor="">วันที่อัพเดท</label>
                                                            <Input defaultValue={car.updatedAt} disabled className='w-[70%] border ' />
                                                        </div>
                                                    </SheetDescription>
                                                </SheetHeader>
                                                <SheetFooter className='w-full my-2'>
                                                    <SheetClose className='w-full flex justify-end items-center gap-2'>
                                                        <Button onClick={() => handleUpdate(parseInt(car.id))} className='w-1/4 bg-green-500 hover:bg-green-600 transition-all ease-in-out' type="submit">อัพเดท</Button>
                                                        <Button onClick={() => handleDelete(parseInt(car.id))} className='w-1/4 bg-red-500 hover:bg-red-600 transition-all ease-in-out' type="submit">ลบ</Button>
                                                    </SheetClose>
                                                </SheetFooter>
                                            </SheetContent>
                                        </Sheet>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                    <TableFooter className='bg-white'>
                        <TableRow>
                            <TableCell colSpan={8}>รวม</TableCell>
                            <TableCell className="text-right">{dataCar.length} คัน</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div >
    )
}