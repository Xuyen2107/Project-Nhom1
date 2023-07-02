import React from "react";
import style from "./CustomInput.module.css";

const CustomInput = ({
   label,
   type,
   name,
   placeholder,
   onChange,
   showPassword,
   show,
   onClick,
   error,
}) => {
   return (
      <div className={style.form_group}>
         <label className={style.form_label}>{label}</label>
         <div className={style.password_show}>
            <input
               className={`${style.form_input} ${error ? style.input_error : ""}`}
               type={type}
               name={name}
               placeholder={placeholder}
               onChange={onChange}
            />
            {showPassword &&
               (show ? (
                  <button className={style.password_show_btn} type="button" onClick={onClick}>
                     <i className="fa-solid fa-eye-slash"></i>
                  </button>
               ) : (
                  <button className={style.password_show_btn} type="button" onClick={onClick}>
                     <i class="fa-solid fa-eye"></i>
                  </button>
               ))}
         </div>
         {error && <span className={style.error_message}>{error}</span>}
      </div>
   );
};

export default CustomInput;
