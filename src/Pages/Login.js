import React, { useState } from 'react';
import InputComponent from "./component/InputComponent"
import { useFormik } from 'formik';
import './cssstyle.css';

const Login = ({user}) => {
    const formik = useFormik({
      initialValues: {
        email: '',
        password:'',
        emailerror:false,
        passworderror:false
      },
  
      onSubmit: async (values) => {
        if(!values.email||values.email!==user.userEmail){
          values.emailerror=true
        }else(values.emailerror=false)
        if(!values.password||values.password!==user.userpassword){
          values.passworderror=true
        }else(values.passworderror=false)
        if(values.email===user.userEmail &&values.password===user.userpassword){
          window.location.href="/Todolist"
        }
      },
    });
 
    return (
      <div style={{width: "336px",
        height: "359px",
        top: "182px",
        left: "12px",
        borderRadius: "12px",
        backgroundColor: "#372B4B",
        margin:"100px auto"
        }}>
        <form className='fromstyle' onSubmit={formik.handleSubmit}>
        <h1 className='title'>會員登入</h1>

          <InputComponent
            name="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            valuemis="請輸入 Email 帳號"
            errorm="* 請輸入有效的電子信箱"
            error={formik.values.emailerror}
          />

          <InputComponent
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            valuemis="請輸入密碼"
            errorm="* 密碼錯誤"
            error={formik.values.passworderror}
          />
          <div style={{margin:"10px"}}>
            <button type='button'
              style={{float:'left',}}
              className='buttonB'
              onClick={() =>  window.location.href = '/Register'}
            >註冊會員
            </button>
            <button type="submit"
              style={{float:'right',}}
              className='buttonS'
            >登入
            </button>
          </div>
        </form>
      </div>
    );
  };
export default Login