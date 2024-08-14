import React from 'react'
import Sidebar from '../_components/Client/Sidebar/Sidebar'
import Booking from '../_components/Client/Booking/page'
import './style.css'
type Props = {}

export default function BookingPage({}: Props) {
  return (
    <div className='main'>
        <Sidebar/>
        <Booking/>
    </div>
  )
}