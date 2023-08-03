import React, { useState } from 'react';
import InputComponent from "./component/InputComponent"
import { useFormik } from 'formik';
import './cssstyle.css';
const Register=()=>{
    const [shakeAnimation, setShakeAnimation]=useState(false)
    const formik = useFormik({
        initialValues: {
          email: '',
          password:'',
          password2:'',
          emailerror:'',
          passworderror:'',
          password2error:''
        },
    
        onSubmit: async (values) => {
          if(!values.email|| !/(?=.*[@])/.test(values.email)){
            values.emailerror=true
          }else(values.emailerror=false)
          if (!values.password || values.password.length < 8 || values.password.length > 20 || !/(?=.*[a-zA-Z])(?=.*\d)/.test(values.password)) {
            values.passworderror = true;
          }else(values.passworderror = false)
          if(!values.password2 ||values.password!==values.password2){
            values.password2error=true
          }else(values.password2error=false)
          const checkboxChecked = document.querySelector('.inputcheckbox').checked;
          if (!checkboxChecked) {
            setShakeAnimation(true)
            setTimeout(() => {
                setShakeAnimation(false);
              }, 1000);
            }
            if (
                values.emailerror === false &&
                values.passworderror === false &&
                values.password2error === false &&
                checkboxChecked === true
              ) {
                window.location.href="/"
                // 執行跳轉到 "/"
              }
          console.log(values);

        },
      });
   
      return (
        <div style={{width: "336px",
          height: "479px",
          top: "182px",
          left: "12px",
          borderRadius: "12px",
          backgroundColor: "#372B4B",
          margin:"100px auto"
          }}>
          <form className='fromstyle' onSubmit={formik.handleSubmit}>
          <h1 className='title'>註冊會員</h1>
  
            <InputComponent
              name="email"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              valuemis="請輸入可進行信件認證的 Email 信箱"
              errorm="* 請輸入有效的電子信箱"
              error={formik.values.emailerror}
            />
  
            <InputComponent
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              valuemis="請輸入密碼，需8~20個字元英數混合"
              errorm="* 最少須8個字元且英數混合"
              error={formik.values.passworderror}
            />
            <InputComponent
              name="password2"
              type="password"
              value={formik.values.password2}
              onChange={formik.handleChange}
              valuemis="請再次確認密碼"
              errorm="* 密碼錯誤"
              error={formik.values.password2error}
            />
            <div className={`divcheckbox ${shakeAnimation ? 'shakeAnimation' : ''}`}>
                <input type="checkbox" className='inputcheckbox'/><p className='Pcheckbox'>我已閱讀並同意</p> <a href='/#' className='acheckbox'>使用條款</a> <p className='Pcheckbox'>及</p><a className='acheckbox' href='/#'>隱私權政策</a>
            </div>
            <div style={{margin:"10px"}}>
                <button type="submit"
                className='buttonS'
                >註冊
                </button>
            </div>
          </form>
        </div>
      )
}
export default Register;