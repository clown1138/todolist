import React, { useState } from 'react';
import "../cssstyle.css"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const ToDoListProject = ({ item, onClick }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

    return (
      <>
      <hr className={isChecked? 'hrToDo':'hrToDohide'}></hr>

      <div className='toDoListPro' >
      <div style={{ display: 'flex' }}>

        <input type='checkbox' style={{ marginRight: '9px' }} onChange={handleCheckboxChange} />
        <p style={{ color: '#fff' }}>{item}</p>
      </div>
      <div style={{ marginTop: '10px' }}>
        {isChecked?
        <AddCircleIcon
          color='#5F596C'
          sx={{
            transform: 'rotate(45deg)',
            color: '#FFFFFF80',
          }}
        />:
        <AddCircleIcon
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