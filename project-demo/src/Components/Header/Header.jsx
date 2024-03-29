import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HomeContext } from "../../Context/HomeContext.js";
import HookHeader from "./HeaderHook.js";
import { dataHeader } from "../../Data/Header.js";
import "./Header.css";

const Header = () => {
   const { userLogin } = useContext(HomeContext);
   const { inputValue, listMovieSearch, result, searchInputChange, searchClick, logOut } =
      HookHeader();
   return (
      <header id="header">
         <nav id="navbar">
            <div className="logo">
               <NavLink to="/" className="logo-link">
                  <img
                     className="logo-img"
                     src={require("../../Image/logo-phimmoi.png")}
                     alt="Logo"
                  />
               </NavLink>
            </div>
            <div className="menu">
               <ul className="main-menu">
                  {/* <li className="menu-icon">
                     <i class="fa-solid fa-bars"></i>
                  </li> */}
                  {dataHeader.map((item, idx) => (
                     <li key={idx} className="main-menu-item">
                        {item.Link ? (
                           <NavLink to={item.Link} className="main-menu-link">
                              {item.Name}
                              {item.Icon && <i className={`${item.Icon} main-menu-icon`}></i>}
                           </NavLink>
                        ) : (
                           <span className="main-menu-link">
                              {item.Name}
                              {item.Icon && <i className={`${item.Icon} main-menu-icon`}></i>}{" "}
                           </span>
                        )}
                        {item.SubMenu && (
                           <ul className="sub-menu">
                              {item.SubMenu.map((item, idx) => (
                                 <li key={idx} className="sub-menu-item">
                                    <NavLink
                                       to={`/danh-muc?category=${item.Name}`}
                                       className="sub-menu-link"
                                    >
                                       {item.Name}
                                    </NavLink>
                                 </li>
                              ))}
                           </ul>
                        )}
                     </li>
                  ))}
               </ul>
            </div>

            <div className="navbar-right">
               <button className="search-icon" onClick={() => searchClick()}>
                  <i class="fa-solid fa-magnifying-glass "></i>
               </button>
               <div className="account">
                  <ul className="account-info">
                     {userLogin ? (
                        <li className="account-item">
                           <NavLink to="/thong-tin-tai-khoan" className="account-link">
                              <i class="fa-solid fa-user account-icon"></i>

                              <span className="account-title">
                                 {userLogin.Ho} {userLogin.Ten}
                              </span>
                           </NavLink>

                           <ul className="register">
                              <li className="register-item">
                                 <NavLink to="/thong-tin-tai-khoan" className="register-link">
                                    Thông tin tài khoản
                                 </NavLink>
                              </li>
                              <li className="register-item">
                                 <button
                                    type="button"
                                    className="register-link"
                                    onClick={() => logOut()}
                                 >
                                    Đăng xuất
                                 </button>
                              </li>
                           </ul>
                        </li>
                     ) : (
                        <li className="account-item">
                           <NavLink to="/dang-nhap" className="account-link">
                              <i class="fa-solid fa-user account-icon"></i>
                              <span className="account-title">Tài khoản</span>
                           </NavLink>

                           <ul className="register">
                              <li className="register-item">
                                 <NavLink to="/dang-nhap" className="register-link">
                                    Đăng nhập
                                 </NavLink>
                              </li>
                              <li className="register-item">
                                 <NavLink to="/dang-ki" className="register-link">
                                    Đăng kí
                                 </NavLink>
                              </li>
                           </ul>
                        </li>
                     )}
                  </ul>
               </div>
            </div>
         </nav>
         {result && (
            <div className="search">
               <form className=" form-search">
                  <button className="search-btn" type="button">
                     <i class="fa-solid fa-magnifying-glass btn-icon"></i>
                  </button>
                  <input
                     className="search-input"
                     type="search"
                     autoFocus
                     placeholder="Nhập tìm kiếm"
                     onChange={searchInputChange}
                  />
               </form>
               {inputValue.length > 0 && (
                  <div className="return">
                     <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {listMovieSearch.length === 0 && inputValue.length > 0 ? (
                           <li>Không có kết quả tìm kiếm cho từ khóa "{inputValue}"</li>
                        ) : (
                           listMovieSearch?.map((movie) => (
                              <li
                                 key={movie.id}
                                 style={{ display: "flex", alignItems: "flex-start", gap: "5px" }}
                              >
                                 {movie?.image && (
                                    <img
                                       style={{ width: "30px", height: "40px" }}
                                       src={require(`../../Image/Movie-Item/${movie?.image}`)}
                                       alt="Ảnh"
                                    />
                                 )}
                                 <NavLink
                                    to={`/gioi-thieu-phim/${movie?.id}_${movie?.link}`}
                                    className="return-link"
                                    onClick={searchClick}
                                 >
                                    {movie.name}
                                 </NavLink>
                              </li>
                           ))
                        )}
                     </ul>
                  </div>
               )}
            </div>
         )}
      </header>
   );
};

export default Header;
