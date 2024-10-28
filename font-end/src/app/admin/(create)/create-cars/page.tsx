'use client'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React, { FormEvent, useEffect, useState } from 'react'
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

type Props = {}

interface DataTypeCar {
    id: number
    name: string
}
interface DataStatusCar {
    id: number
    name: string
}

export default function CreateCar({ }: Props) {

    // SetData
    const [dataType, setDataType] = useState<DataTypeCar[]>([])
    const [dataStatus, setDataStatus] = useState<DataStatusCar[]>([])

    // setVarible from input
    const [brand, setBrand] = useState("")
    const [model, setModel] = useState("")
    const [color, setColor] = useState("#fffff")
    const [seat, setSeat] = useState(0)
    const [license, setLicense] = useState("")
    const [price, setPrice] = useState("")
    const [statusCarId, setStatusCarId] = useState(0)
    const [typeCarId, setTypeCarId] = useState(0)
    const [image, setImage] = useState<File | null>(null)

    // route
    const router = useRouter()


    useEffect(() => {
        getDataStatus()
        getDataType()
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

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (
            brand === "" ||
            model === "" ||
            color === "" ||
            seat === 0 ||
            license === "" ||
            price === "" ||
            statusCarId === 0 ||
            typeCarId === 0 ||
            image === null
        ) {
            toast.error('กรอกข้อมูลให้ครบ!!', {
                action: {
                    label: 'ปิด'
                }
            })
            return
        }

        const formData = new FormData()
        formData.append('brand', brand)
        formData.append('model', model)
        formData.append('color', color)
        formData.append('seat', parseInt(seat))
        formData.append('license', license)
        formData.append('price', parseFloat(price))
        formData.append('statusId', parseInt(statusCarId))
        formData.append('typeId', parseInt(typeCarId))
        formData.append('image', image)
        const response = await fetch('http://localhost:8000/cars', {
            method: 'POST',
            body: formData
        })
        if (!response.ok) {
            const error = await response.json()
            toast.error(error.message, {
                action: {
                    label: 'ปิด'
                }
            })
            return
        }

        toast.success('สร้างข้อมูลสำเร็จ', {
            action: {
                label: 'ปิด'
            }
        })
        router.push('/admin/show/cars')
        return
    }
    return (
        <div className='w-full h-fit flex flex-col justify-start gap-4 items-center'>
            <h1 className='w-full'>เพิ่มข้อมูลรถ</h1>
            <form method='POST' className='bg-white shadow-md p-2 w-1/2 flex justify-start items-center flex-col gap-3 rounded-md'>
                <h1 className='text-xl font-medium'>กรอกข้อมูลรถ</h1>
                <p className='text-sm text-slate-500 font-light'>กรอกข้อมูลรถให้ครบแล้วค่อยกดเพิ่มข้อมูล</p>
                <div className='w-full flex justify-center items-center gap-2'>
                    <input onChange={(e) => setBrand(e.target.value)} value={brand} type="text" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='แบรนด์' />
                    <input onChange={(e) => setModel(e.target.value)} value={model} type="text" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='ยี่ห้อ' />
                </div>
                <div className='w-full flex justify-center items-center gap-2'>
                    <input onChange={(e) => setSeat(parseInt(e.target.value))} value={seat} type="number" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='ที่นั่ง' />
                    <Input onChange={(e) => setColor(e.target.value)} value={color} type="color" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='สี' />
                </div>
                <div className='w-full flex justify-center items-center gap-2'>
                    <input onChange={(e) => setLicense(e.target.value)} value={license} type="text" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='ป้ายทะเบียน' />
                    <input onChange={(e) => setPrice(e.target.value)} value={price} type="text" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='ราคา' />
                </div>
                <div className='w-full flex justify-center items-center gap-2'>
                    <Input onChange={(e) => setImage(e.target.files[0])} type="file" className='border py-2.5 w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' />
                </div>
                <div className='w-full flex justify-center items-center gap-2'>
                    <Select onValueChange={(e) => setTypeCarId(parseInt(e))} >
                        <SelectTrigger className="w-full">
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
                    <Select onValueChange={(e) => setStatusCarId(parseInt(e))}>
                        <SelectTrigger className="w-full">
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
                <button onClick={handleSubmit} className='w-1/2 my-2 text-white h-[2.5rem] rounded-md bg-blue-500 hover:bg-blue-600 transition-all ease-in-out'>
                    เพิ่มข้อมูล
                </button>
            </form>
        </div>
    )
}