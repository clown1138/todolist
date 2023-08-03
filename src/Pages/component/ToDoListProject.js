import React, { useState } from 'react';
import "../cssstyle.css"
import AddCircleIcon from '@mui/icons-material/AddCircle';
const ToDoListProject = ({ item, onClick, checkboxonClick }) => {
    return (
      <>
      <hr className={item.isChecked? 'hrToDo':'hrToDohide'}></hr>

      <div className='toDoListPro' >
      <div style={{ display: 'flex' }}>

        <input type='checkbox' style={{ marginRight: '9px' }}checked={item.isChecked} onChange={checkboxonClick} />
        <p style={{ color: '#fff' }}>{item.value}</p>
      </div>
      <div style={{ marginTop: '10px' }}>
        {<AddCircleIcon
          color='#5F596C'
          onClick={onClick}
          sx={{
            transform: 'rotate(45deg)',
            color: '#FFFFFF80',
          }}
        />}
      </div>
    </div>
    </>

    );
  };
export default ToDoListProject