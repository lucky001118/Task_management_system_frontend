import React from 'react'
import TaskCard from '../Task/TaskCard/TaskCard'

export default function TaskList() {
  return (
    <div className='w-[67vw]'>
        <div className='space-y-3'>
        {
        [1,1,1,1].map((item)=><TaskCard />)
      }
        </div>

    </div>
  )
}
