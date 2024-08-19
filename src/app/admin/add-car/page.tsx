'use client'
import Addcar from '@/app/_components/Admin/Cars/AddCar/Addcar'
import Sidebar from '@/app/_components/Admin/Sidebar/Sidebar'
import React from 'react'

type Props = {}

export default function AddcarPage({}: Props) {
  return (
    <div className='main'>
        <Sidebar/>
        <Addcar/>
    </div>
  )
}