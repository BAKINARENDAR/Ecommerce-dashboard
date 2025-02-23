import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { CiMenuKebab } from "react-icons/ci";
import { FaClockRotateLeft } from "react-icons/fa6";


const Boxmenu=()=>{
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return(
        <>
        <section >
        <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='menud-b'
        disableRipple
      >
          <CiMenuKebab className='menu-dots' />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      

        <MenuItem onClick={handleClose}><FaClockRotateLeft  className='day-st'/> Last day</MenuItem>
        <MenuItem onClick={handleClose}> <FaClockRotateLeft className='day-st' />Last Week</MenuItem>
        <MenuItem onClick={handleClose}> <FaClockRotateLeft  className='day-st'/>Last Month</MenuItem>
        <MenuItem onClick={handleClose}> <FaClockRotateLeft  className='day-st'/>Last Year</MenuItem>
      </Menu>
    </div>
        </section>
        </>
    )
}
export default Boxmenu;