import React from "react";
import { NavLink } from "react-router-dom";
import CustomInput from "../../Components/CustomInput/CustomInput";
import LogInHook from "./LogInHook";
import style from "./LogIn.module.css";

const LogIn = () => {
   const { error, show, handleInputChange, showPassword, logInClick } = LogInHook();

   return (
      <div className={style.form}>
         <form className={style.form_log_in}>
            <h3 className={style.title}>Đăng nhập</h3>

            <CustomInput
               label="Tài khoản"
               type="text"
               name="Tài khoản"
               placeholder="Nhập số điện thoại hoặc email của bạn"
               onChange={(e) => {
                  handleInputChange(e, "TaiKhoan");
               }}
               error={error.TaiKhoan}
            />

            <CustomInput
               label="Mât khẩu:"
               type={show ? "text" : "password"}
               name="Mật khẩu"
               placeholder="Nhập mật khẩu của bạn"
               onChange={(e) => {
                  handleInputChange(e, "Password");
               }}
               showPassword
               show={show}
               onClick={showPassword}
               error={error.Password}
            />
            <button className={style.form_submit_button} type="button" onClick={logInClick}>
               Đăng Nhập
            </button>
            <div className={style.form_bottom}>
               <NavLink to="/quen-mat-khau" className={style.link_to_forget}>
                  Quên mật khẩu?
               </NavLink>
               <NavLink to="/dang-ki" className={style.link_to_register}>
                  Đăng kí?
               </NavLink>
            </div>
         </form>
      </div>
   );
};

export default LogIn;
