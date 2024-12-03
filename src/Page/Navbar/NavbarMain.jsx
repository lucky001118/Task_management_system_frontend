import { Avatar } from '@mui/material'
import React from 'react'
import "./NavbarMain.css"

export default function NavbarMain() {
  return (
    <div className="container z-10 sticky left-0 right-0 top-0 py-3 px-5 lg:px-10, flex justify-between items-center w-full">
        <p className="font-bold text-lg">Lucky Task Manager</p>
        <div className='flex items-center gap-5'>
            <p>luckymanikpuri</p>
            <Avatar sx={{backgroundColor:"#c24dd0"}} className='bg-[#c24dd0]'>C</Avatar>
        </div>
      
    </div>
  )
}
