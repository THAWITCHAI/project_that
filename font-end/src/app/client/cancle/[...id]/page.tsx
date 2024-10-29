import Sidebar from '@/app/_components/Sidebar'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Success({ }: Props) {
    return (
        <div className='w-full h-full flex justify-center items-center gap-2'>
            <Sidebar />
            <div className='w-[82%] h-full flex flex-col overflow-y-scroll py-10 justify-start items-center'>
                <div className='w-[40%] border h-fit flex justify-center flex-col gap-2 items-center p-5 rounded-sm bg-slate-100'>
                    <h1 className='text-red-500'>ชำระเงินไม่สำเร็จ</h1>
                    <p className='text-gray-500 text-sm font-light'>16 มีนาคม 2565 13:00 น.</p>
                    <p className='text-gray-500 text-sm font-light'>รหัสอ้างอิง dfac1552-eb07-4e25-976f-c05478ee3289</p>

                    <button className='w-full h-fit p-2 bg-green-500 rounded-md text-white'>
                        <Link href={'/client/booking-cars'}>กลับไปหน้าจองรถ</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}