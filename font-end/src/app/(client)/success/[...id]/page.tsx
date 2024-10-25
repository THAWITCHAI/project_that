import Sidebar from '@/app/_components/Sidebar'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Success({params}: Props) {
    const {id} = params
    return (
        <div className='w-full h-full flex justify-center items-center gap-2'>
            <Sidebar />
            <div className='w-[82%] h-full flex flex-col overflow-y-scroll py-10 justify-start items-center'>
                <div className='w-[40%] border h-fit flex justify-center flex-col gap-2 items-center p-5 rounded-sm bg-slate-100'>
                    <h1>ชำระเงินสำเร็จ</h1>
                    <p className='text-gray-500 text-sm font-light'>16 มีนาคม 2565 13:00 น.</p>
                    <p className='text-gray-500 text-sm font-light'>รหัสอ้างอิง {id}</p>
                    <li className='w-full text-sm text-gray-700'>ข้อมูลผู้ใช้</li>
                    <div className='w-full flex px-5 justify-center items-center gap-2'>
                        <label className='text-xs text-gray-700 w-[6rem]'>ชื่อผู้จอง</label>
                        <input type="text" className='w-full border rounded-md h-[2.5rem] outline-none px-2 text-xs' disabled defaultValue={'นายธวิชชัย บุญส่ง'} />
                    </div>
                    <div className='w-full flex px-5 justify-center items-center gap-2'>
                        <label className='text-xs text-gray-700 w-[6rem]'>อีเมล์</label>
                        <input type="text" className='w-full border rounded-md h-[2.5rem] outline-none px-2 text-xs' disabled defaultValue={'Thawitchai@gmail.com'} />
                    </div>
                    <div className='w-full flex px-5 justify-center items-center gap-2'>
                        <label className='text-xs text-gray-700 w-[6rem]'>เบอร์ติดต่อ</label>
                        <input type="text" className='w-full border rounded-md h-[2.5rem] outline-none px-2 text-xs' disabled defaultValue={'0652974104'} />
                    </div>
                    <li className='w-full text-sm text-gray-700'>ข้อมูลรถ</li>
                    <div className='w-full flex px-5 justify-center items-center gap-2'>
                        <label className='text-xs text-gray-700 w-[6rem]'>แบรนด์</label>
                        <input type="text" className='w-full border rounded-md h-[2.5rem] outline-none px-2 text-xs' disabled defaultValue={'Honda'} />
                    </div>
                    <div className='w-full flex px-5 justify-center items-center gap-2'>
                        <label className='text-xs text-gray-700 w-[6rem]'>ยี่ห้อ</label>
                        <input type="text" className='w-full border rounded-md h-[2.5rem] outline-none px-2 text-xs' disabled defaultValue={'Civic 2027'} />
                    </div>
                    <div className='w-full flex px-5 justify-center items-center gap-2'>
                        <label className='text-xs text-gray-700 w-[6rem]'>จำนวนที่นั่ง</label>
                        <input type="text" className='w-full border rounded-md h-[2.5rem] outline-none px-2 text-xs' disabled defaultValue={'5'} />
                    </div>
                    <div className='w-full flex px-5 justify-start items-center gap-2'>
                        <label className='text-xs text-gray-700 w-[5rem]'>สี</label>
                        <div className='w-[2rem] h-[2rem] bg-red-500 rounded-full'></div>
                    </div>
                    <div className='w-full flex px-5 justify-center items-center gap-2'>
                        <label className='text-xs text-gray-700 w-[6rem]'>ป้ายทะเบียน</label>
                        <input type="text" className='w-full border rounded-md h-[2.5rem] outline-none px-2 text-xs' disabled defaultValue={'1 กข อุบลราชธานี'} />
                    </div>
                    <div className='w-full flex px-5 justify-center items-center gap-2'>
                        <label className='text-xs text-gray-700 w-[6rem]'>ราคา</label>
                        <input type="text" className='w-full border rounded-md h-[2.5rem] outline-none px-2 text-xs text-green-500' disabled defaultValue={'1500 ฿'} />
                    </div>
                    <div className='w-full flex px-5 justify-center items-center gap-2'>
                        <label className='text-xs text-gray-700 w-[6rem]'>ประเภทรถ</label>
                        <input type="text" className='w-full border rounded-md h-[2.5rem] outline-none px-2 text-xs' disabled defaultValue={'รถยนต์'} />
                    </div>
                    <button className='w-full h-fit p-2 bg-green-500 rounded-md text-white'>
                        <Link href={'/booking-list'}>กลับไปหน้าข้อมูลจอง</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}