import React from "react";
import { NavLink } from "react-router-dom";
import { dataFooter } from "../../Data/Header.js";
import "./Footer.css";

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer-left">
            <NavLink to="/" className="footer-link-home">
               <img src="" alt="logo" className="footer-img" />
            </NavLink>
         </div>

         <ul className="footer-menu">
            <li className="footer-item-top">Phim mới</li>
            {dataFooter.map((item, idx) =>
               item.PhimMoi?.map((Item, idx) => (
                  <li key={idx} className="footer-item">
                     <NavLink to={Item.Link} className="footer-link">
                        {Item.Name}
                     </NavLink>
                  </li>
               ))
            )}
         </ul>
         <ul className="footer-menu">
            <li className="footer-item-top">Phim Hay</li>
            {dataFooter.map((item, idx) =>
               item.PhimHay?.map((Item, idx) => (
                  <li key={idx} className="footer-item">
                     <NavLink to={Item.Link} className="footer-link">
                        {Item.Name}
                     </NavLink>
                  </li>
               ))
            )}
         </ul>
         <ul className="footer-menu">
            <li className="footer-item-top">Trợ Giúp</li>
            <li className="footer-item">
               <NavLink to="" className="footer-link">
                  Hỏi đáp
               </NavLink>
            </li>
            <li className="footer-item">
               <NavLink to="" className="footer-link">
                  Liên hệ
               </NavLink>
            </li>
            <li className="footer-item">
               <NavLink to="" className="footer-link">
                  Tin tức
               </NavLink>
            </li>
         </ul>
         <ul className="footer-menu">
            <li className="footer-item-top">Thông tin</li>
            <li className="footer-item">
               <NavLink to="" className="footer-link">
                  Về chúng tôi
               </NavLink>
            </li>
            <li className="footer-item">
               <NavLink to="" className="footer-link">
                  Điều khoản sử dụng
               </NavLink>
            </li>
            <li className="footer-item">
               <NavLink to="" className="footer-link">
                  Chính sách riêng tư
               </NavLink>
            </li>
            <li className="footer-item">
               <NavLink to="" className="footer-link">
                  Khiếu nại bản quyền
               </NavLink>
            </li>
         </ul>
      </footer>
   );
};

export default Footer;
