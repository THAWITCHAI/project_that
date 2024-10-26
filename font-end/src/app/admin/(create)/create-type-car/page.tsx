'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

type Props = {}

export default function CreateType({ }: Props) {
  const [name, setName] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name) {
      const currentDate = new Date(Date.now()).toLocaleDateString('th-TH', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });

      return toast(`กรุณากรอกข้อมูลให้ครบ! วันที่ ${currentDate}`, {
        action: {
          label: 'ปิด',
        },
      });
    }

    const res = await fetch(`http://localhost:8000/type-car`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
    if (!res.ok) {
      const response = await res.json()
      toast.error(response.message, {
        action: {
          label: 'ปิด',
        },
      });
      return;
    }
    toast.success('สร้างข้อมูลประเภทรถสำเร็จ', {
      action: {
        label: 'ปิด',
      },
    });

    setName("")
    return router.push('/admin/show/type-cars')
  }
  return (
    <div className='w-full flex flex-col justify-start items-center gap-4'>
      <h1 className='w-full'>สร้างประเภทข้อมูล</h1>
      <form method='POST' className='bg-white w-1/2 h-fit p-2 shadow-md rounded-md gap-3 flex flex-col justify-start items-center'>
        <h1 className='w-full text-center text-xl font-medium'>กรอกข้อมูลประเภทรถ</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='ชื่อประเภทรถ' className='w-full h-[2.5rem] border rounded-md px-2 outline-none' />
        <button onClick={handleSubmit} className='w-1/2 bg-blue-500 rounded-md h-[2.5rem] text-white hover:bg-blue-600 transition-all ease-in-out'>
          เพิ่มข้อมูล
        </button>
      </form>
    </div>
  )
}