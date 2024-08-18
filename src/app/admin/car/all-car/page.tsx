import Allcars from '@/app/_components/Admin/Cars/allCars/Allcars'
import Sidebar from '@/app/_components/Admin/Sidebar/Sidebar'
import React from 'react'

type Props = {}

export default function AllcarPage({}: Props) {
  return (
    <div className='main'>
        <Sidebar/>
        <Allcars/>
    </div>
  )
}