import React from "react";
import { NavLink } from "react-router-dom";
import "./DanhMuc.css";
// import Card from "../../Components/Card/Card";
import DanhMucHook from "./DanhMucHook";

const DanhMuc = () => {
   const { category, list } = DanhMucHook();

   return (
      <div>
         <h1>{category}</h1>
         <ul>
            {list.map((item) => (
               <li key={item.id}>
                  <NavLink to={`/gioi-thieu-phim/${item.id}-${item.link}`}>{item.name}</NavLink>
               </li>
            ))}
         </ul>
         {/* <div className="all-movie">
            <label className="category" id="category-text">
               PHIM LẺ
            </label>
            <hr className="hr" />
            <div className="container-movies">
               <span className="title-home">
                  <NavLink to="./Home.html">
                     <i className="fa-solid fa-house icon"></i>
                     Phim mới
                  </NavLink>
                  <i className="fa-solid fa-angle-right icon"></i>
                  <span>Phim Lẻ</span>
               </span>

               <p>Phim mới được cập nhật mỗi ngày</p>
            </div>
            <ul className="row-card" id="card">
               <Card />
            </ul>
            <div>
               <ul className="pagination">
                  <li>
                     <a className="current" href="##">
                        1
                     </a>
                  </li>
               </ul>
            </div>
         </div> */}
      </div>
   );
};

export default DanhMuc;
