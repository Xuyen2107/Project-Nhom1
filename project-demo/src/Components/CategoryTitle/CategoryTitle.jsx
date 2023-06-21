import React from "react";
import { NavLink } from "react-router-dom";
import style from "./CategoryTitle.module.css";

const CategoryTitle = ({ category, showLink, link }) => {
   return (
      <>
         <div className={style.category_title}>
            <label className={style.category}>{category}</label>
            {showLink && (
               <div className={style.see_all}>
                  <NavLink to={link} className={style.see_all_link}>
                     Xem tất cả <i className={`fa-solid fa-caret-right ${style.category_icon}`}></i>
                  </NavLink>
               </div>
            )}
         </div>
         <hr className={style.category_hr} />
      </>
   );
};

export default CategoryTitle;
