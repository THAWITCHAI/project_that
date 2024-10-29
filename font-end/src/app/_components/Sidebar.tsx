'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
type Props = object

export default function Sidebar({ }: Props) {
    const url = usePathname()
    const { data: session } = useSession()
    return (
        <>
            <div className='gap-4 border w-[18%] h-full flex flex-col justify-start items-center bg-[#081c1f] p-2'>
                <div className='border-b w-full flex justify-center items-center gap-2 py-2 px-5'>
                    <Image src={`/uploads/${session?.user.profileImage}`} width={100} height={100} alt='' className='rounded-full w-[50px] h-[50px]' />
                    <div className='text-lg font-medium text-white'>{session?.user.name}</div>
                </div>
                <p className='text-slate-300 px-2 w-full text-sm font-extralight'>ข้อมูล</p>
                {
                    url === '/client/booking-cars' ?
                        <Link href={'/client/booking-cars'} className='flex justify-start items-center w-full px-10 gap-2 bg-[#AB81CD] shadow-md transition-all ease-in-out rounded-md py-4'>
                            <Image src={'/electric-car.png'} width={20} height={20} alt='' />
                            <button className='text-slate-200 font-light'>จอง</button>
                        </Link>
                        :
                        <Link href={'/client/booking-cars'} className='flex justify-start items-center w-full px-10 gap-2 hover:bg-[#AB81CD] hover:shadow-md transition-all ease-in-out rounded-md py-4'>
                            <Image src={'/electric-car.png'} width={20} height={20} alt='' />
                            <button className='text-slate-200 font-light'>จอง</button>
                        </Link>
                }
                {
                    url === '/client/all-cars' ?
                        <Link href={'/client/all-cars'} className='flex justify-start items-center w-full px-10 gap-2 bg-[#AB81CD] shadow-md transition-all ease-in-out rounded-md py-4'>
                            <Image src={'/electric-car.png'} width={20} height={20} alt='' />
                            <button className='text-slate-200 font-light'>รถยนต์ทั้งหมด</button>
                        </Link>
                        :
                        <Link href={'/client/all-cars'} className='flex justify-start items-center w-full px-10 gap-2 hover:bg-[#AB81CD] hover:shadow-md transition-all ease-in-out rounded-md py-4'>
                            <Image src={'/electric-car.png'} width={20} height={20} alt='' />
                            <button className='text-slate-200 font-light'>รถยนต์ทั้งหมด</button>
                        </Link>
                }
                <p className='text-slate-300 px-2 w-full text-sm font-extralight'>ตาราง</p>
                {
                    url === '/client/booking-list' ?
                        <Link href={'/client/booking-list'} className='flex justify-start items-center w-full px-10 gap-2 bg-[#AB81CD] shadow-md transition-all ease-in-out rounded-md py-4'>
                            <Image src={'/table.png'} width={20} height={20} alt='' />
                            <button className='text-slate-200 font-light'>รายการจองรถ</button>
                        </Link>
                        :
                        <Link href={'/client/booking-list'} className='flex justify-start items-center w-full px-10 gap-2 hover:bg-[#AB81CD] hover:shadow-md transition-all ease-in-out rounded-md py-4'>
                            <Image src={'/table.png'} width={20} height={20} alt='' />
                            <button className='text-slate-200 font-light'>รายการจองรถ</button>
                        </Link>
                }

                <p className='text-slate-300 px-2 w-full text-sm font-extralight'>ข้อมูลส่วนตัว</p>
                {
                    url === '/client/setting' ?
                        <Link href={'/client/setting'} className='flex justify-start items-center w-full px-10 gap-2 bg-[#AB81CD] shadow-md transition-all ease-in-out rounded-md py-4'>
                            <Image src={'/settings.png'} width={20} height={20} alt='' />
                            <button className='text-slate-200 font-light'>ตั้งค่า</button>
                        </Link>
                        :
                        <Link href={'/client/setting'} className='flex justify-start items-center w-full px-10 gap-2 hover:bg-[#AB81CD] hover:shadow-md transition-all ease-in-out rounded-md py-4'>
                            <Image src={'/settings.png'} width={20} height={20} alt='' />
                            <button className='text-slate-200 font-light'>ตั้งค่า</button>
                        </Link>
                }
                <Link href={'/api/auth/signout?csrf=true'} className='flex justify-start items-center w-full px-10 gap-2 hover:bg-[#AB81CD] hover:shadow-md transition-all ease-in-out rounded-md py-4'>
                    <Image src={'/logout.png'} width={20} height={20} alt='' />
                    <button className='text-slate-200 font-light'>ออกจากระบบ</button>
                </Link>
                <div className=' w-full h-[11rem] flex justify-center items-end'>
                    <h1 className='w-full text-center text-white text'>16 ชั่วโมง 15 นาที 10 วินาที</h1>
                </div>
            </div></>
    )
}