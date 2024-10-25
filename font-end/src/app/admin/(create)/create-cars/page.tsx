import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Props = {}

export default function page({ }: Props) {
    return (
        <div className='w-full h-fit flex flex-col justify-start gap-4 items-center'>
            <h1 className='w-full'>เพิ่มข้อมูลรถ</h1>
            <form method='POST' className='bg-white shadow-md p-2 w-1/2 flex justify-start items-center flex-col gap-3 rounded-md'>
                <h1 className='text-xl font-medium'>กรอกข้อมูลรถ</h1>
                <p className='text-sm text-slate-500 font-light'>กรอกข้อมูลรถให้ครบแล้วค่อยกดเพิ่มข้อมูล</p>
                <div className='w-full flex justify-center items-center gap-2'>
                    <input type="text" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='แบรนด์' />
                    <input type="text" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='ยี่ห้อ' />
                </div>
                <div className='w-full flex justify-center items-center gap-2'>
                    <input type="number" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='ที่นั่ง' />
                    <Input type="color" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='สี' />
                </div>
                <div className='w-full flex justify-center items-center gap-2'>
                    <input type="text" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='ป้ายทะเบียน' />
                    <input type="text" className='border w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='ราคา' />
                </div>
                <div className='w-full flex justify-center items-center gap-2'>
                    <Input type="file" className='border py-2.5 w-full h-[2.5rem] outline-none rounded-md px-2 text-sm font-normal' placeholder='ราคา' />
                </div>
                <div className='w-full flex justify-center items-center gap-2'>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="เลือกประเภทรถ" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>เลือกประเภทรถ</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="เลือกสถานะรถ" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>เลือกสถานะรถ</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <button className='w-1/2 my-2 text-white h-[2.5rem] rounded-md bg-blue-500 hover:bg-blue-600 transition-all ease-in-out'>
                    เพิ่มข้อมูล
                </button>
            </form>
        </div>
    )
}