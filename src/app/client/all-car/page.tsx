import All_Cars from '@/app/_components/Client/All-Car/All_Cars'
import Sidebar from '@/app/_components/Client/Sidebar/Sidebar'
import React from 'react'

type Props = {}

export default function AllCarPage({}: Props) {
  return (
    <div className='main'>
        <Sidebar/>
        <All_Cars/>
    </div>
  )
}