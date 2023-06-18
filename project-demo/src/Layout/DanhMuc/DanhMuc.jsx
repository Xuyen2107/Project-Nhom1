import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../../Components/Card/Card";
import DanhMucHook from "./DanhMucHook";
import style from "./DanhMuc.module.css";

const DanhMuc = () => {
   const { category, list } = DanhMucHook();

   return (
      <div className={style.list_movie}>
         <label className={style.category}>{category}</label>
         <hr className={style.hr} />
         <div className={style.container_movies}>
            <div className={style.title_home}>
               <NavLink to="/" className={style.home_link}>
                  <i className={`fa-solid fa-house ${style.home_icon}`}></i>
                  Phim mới
               </NavLink>
               <i className={`fa-solid fa-angle-right ${style.home_icon}`}></i>
               <span className={style.category_1}>Phim Lẻ</span>
            </div>

            <p className={style.slogan}>Phim mới được cập nhật mỗi ngày</p>
         </div>
         {list.length > 0 ? (
            <ul className={style.row_card}>
               {list.map((item) => (
                  <Card
                     key={item?.id}
                     nowPlaying={item?.nowPlaying}
                     name={item?.name}
                     link={item?.link}
                     id={item?.id}
                     image={item?.image}
                  />
               ))}
            </ul>
         ) : (
            <h2 className={style.note}>Phim sẽ được cập nhật sau</h2>
         )}
         <div>
            <ul className={style.pagination}>
               <li>
                  <NavLink to="#" className={style.current}>
                     1
                  </NavLink>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default DanhMuc;
