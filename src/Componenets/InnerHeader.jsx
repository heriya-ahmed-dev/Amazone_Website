import React from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import './head.css'

const InnerHeader = () => {
  return (
    <div className='d-flex gap-3 list-unstyled bg-dark text-white h'>
        <div className='d-flex hovering '><MenuOutlinedIcon/>
          <li>All</li>
        </div>
         <li className='hovering'>Todays' Deals</li>
         <li className='hovering'>Customer Service</li>
         <li className='hovering'>Registery</li>
         <li className='hovering'>Gift Cards</li>
         <li className='hovering'>Sell</li>
    </div>
  )
}

export default InnerHeader