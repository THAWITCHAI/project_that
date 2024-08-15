import List from '@/app/_components/Client/List/List'
import Sidebar from '@/app/_components/Client/Sidebar/Sidebar'
import React from 'react'

type Props = {}

export default function ListPage({}: Props) {
  return (
    <div className='main'>
        <Sidebar/>
        <List/>
    </div>
  )
}