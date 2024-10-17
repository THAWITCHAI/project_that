import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Home({ }: Props) {
  return (
    <div className='w-full h-full border bg-cover bg-center z-0' style={{ backgroundImage: "url('/car_b.png')" }}>
      <div className='w-full h-fit py-5 px-10 backdrop-blur-[1px] flex justify-between items-center'>
        <div className='flex justify-center items-center gap-4 w-fit h-fit'>
          <Image
            className='object-cover'
            src='/electric-car.png'
            alt='Car'
            width={30}
            height={30}
          />
          <h1 className='text-white font-light text-lg'>จองรถออนไลน์</h1>
        </div>
        <Link href={'/login'} className='flex justify-center items-center gap-2 cursor-pointer'>
          <Image
            className='object-cover'
            src='/user.png'
            alt='login'
            width={25}
            height={25}
          />
          <h1 className='text-white font-light text-sm'>ล็อกอิน</h1>
        </Link>
      </div>
    </div>
  )
}