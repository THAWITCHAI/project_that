import React from 'react'

type Props = {}

export default function CreateType({ }: Props) {
  return (
    <div className='w-full flex flex-col justify-start items-center gap-4'>
      <h1 className='w-full'>สร้างบทบาทหน้าที่</h1>
      <form method='POST' className='bg-white w-1/2 h-fit p-2 shadow-md rounded-md gap-3 flex flex-col justify-start items-center'>
        <h1 className='w-full text-center text-xl font-medium'>กรอกข้อมูลบทบาทหน้าที่</h1>
        <input type="text" placeholder='ชื่อบทบาทหน้าที่' className='w-full h-[2.5rem] border rounded-md px-2 outline-none' />
        <button className='w-1/2 bg-blue-500 rounded-md h-[2.5rem] text-white hover:bg-blue-600 transition-all ease-in-out'>
          เพิ่มข้อมูล
        </button>
      </form>
    </div>
  )
}