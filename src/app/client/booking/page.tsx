import React from 'react'
import Sidebar from '@/app/_components/Client/Sidebar/Sidebar'
import Booking from '@/app/_components/Client/Booking/Booking'
type Props = {}

export default function BookingPage({}: Props) {
  return (
    <div className='main'>
        <Sidebar/>
        <Booking/>
    </div>
  )
}