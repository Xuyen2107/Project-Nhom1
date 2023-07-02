import React from "react";
import { NavLink } from "react-router-dom";
import CustomInput from "../../Components/CustomInput/CustomInput";
import RegisterHook from "./RegisterHook";
import style from "./Register.module.css";

const RegisterForm = () => {
   const { error, show, reShow, reShowPassword, handleInputChange, registerClick, showPassword } =
      RegisterHook();
   return (
      <div className={style.form}>
         <form className={style.form_register}>
            <h3 className={style.title}>Đăng kí tài khoản</h3>
            <div style={{ display: "flex", width: "100%", gap: "20px" }}>
               <CustomInput
                  label="Họ:"
                  type="text"
                  name="Họ"
                  placeholder="Nhập họ của bạn"
                  onChange={(e) => {
                     handleInputChange(e, "Ho");
                  }}
                  error={error.Ho}
               />
               <CustomInput
                  label="Tên:"
                  type="text"
                  name="Tên"
                  placeholder="Nhập tên của bạn"
                  onChange={(e) => {
                     handleInputChange(e, "Ten");
                  }}
                  error={error.Ten}
               />
            </div>
            <CustomInput
               label="Email:"
               type="email"
               name="Email"
               placeholder="Nhập email của bạn"
               onChange={(e) => {
                  handleInputChange(e, "Email");
               }}
               error={error.Email}
            />
            <CustomInput
               label="Phone:"
               type="tel"
               name="Phone"
               placeholder="Nhập số điện thoại của bạn"
               onChange={(e) => {
                  handleInputChange(e, "Phone");
               }}
               error={error.Phone}
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

            <CustomInput
               label="Nhập lại mật khẩu:"
               type={reShow ? "text" : "password"}
               name="Mật khẩu"
               placeholder="Nhập lại mật khẩu"
               onChange={(e) => {
                  handleInputChange(e, "RePassword");
               }}
               showPassword
               show={reShow}
               onClick={reShowPassword}
               error={error.RePassword}
            />

            <button className={style.form_submit_button} type="button" onClick={registerClick}>
               Đăng ký
            </button>
            <div className={style.form_bottom}>
               <NavLink to="/" className={style.link_back_home}>
                  Quay lại trang chủ?
               </NavLink>
               <NavLink to="/dang-nhap" className={style.link_to_login}>
                  Đăng nhập?
               </NavLink>
            </div>
         </form>
      </div>
   );
};

export default RegisterForm;
