import React, { useState } from 'react';
import "../cssstyle.css"

const InputComponent = ({ name, type, value, onChange, errorm,valuemis,error }) => {

    return (
      <div 
        style={{margin:"20px auto"}}
      >
        <input 
          className='inputstyle'
            type={type} 
            name={name} 
            value={value} 
            onChange={onChange} 
            placeholder={valuemis}
            />
            {error? 
            <p 
            style={{color:"red",
            fontSize: "14px",
            margin:"-12px",
            float:'left',
            paddingLeft: "26px"
          }}
          >{errorm}</p>:
          <></>}
      </div>
    );
  };
export default InputComponent