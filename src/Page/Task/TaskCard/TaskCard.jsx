import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const role = "ROLE_ADMIN"

export default function TaskCard() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
    const handleOpenUserList=()=>{

    }
    const handleOpenSubmissionList=()=>{
        
    }
    const handleOpenUpdateModel=()=>{

    }
    const handleDeleteTask=()=>{
        
    }
  return (
    <div>
      <div className='card lg:flex justify-between'>
         <div className='lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]'>
            <div className="">
                <img className='lg:w-[7rem] lg:h-[7rem] object-cover'
                src="https://images.javatpoint.com/springboot/images/spring-boot-tutorial.jpg" alt="" />
            </div>
            <div className='space-y-5'>
                <div className='space-y-2'>
                    <h1 className='font-bold text-lg '>Spring Boot Documentation</h1>
                    <p className='text-gray-500 text-sm'>The latest spring boot frame's Documentation available here.</p>
                </div>
                <div className='flex flex-wrap gap-2 items-center'>
                    {[1,1,1,1].map((item)=>
                    <span className='techStack py-1 px-5 rounded-full'>Angular</span>
                    )}
                </div>
            </div>
         </div>
         <div>
            <IconButton id="basic-button"
        aria-controls={openMenu ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? 'true' : undefined}
        onClick={handleMenuClick}>
                <MoreVertIcon></MoreVertIcon>
            </IconButton>
            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
            role==="ROLE_ADMIN"?<>
            <MenuItem onClick={handleOpenUserList}>Assign Users</MenuItem>
            <MenuItem onClick={handleOpenSubmissionList}>See Submissions</MenuItem>
            <MenuItem onClick={handleOpenUpdateModel}>Edit</MenuItem>
            <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
            </>:<></>
        }
      </Menu>
         </div>
      </div>
    </div>
  )
}
