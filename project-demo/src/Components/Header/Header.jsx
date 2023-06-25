import React from "react";
import { NavLink } from "react-router-dom";
import { dataHeader } from "../../Data/Header.js";
import HookHeader from "./HeaderHook.js";
import "./Header.css";
import { useState } from "react";
import LoginForm from "../../Layout/Login/Login.jsx";
import SignupForm from "../../Layout/Login/Signup.jsx";

const Header = () => {
  const { searchInputChange, listMovie, inputValue, click, result } =
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
            {dataHeader.map((Item, idx) => (
              <li key={idx} className="main-menu-item">
                <NavLink to={Item.Link} className="main-menu-link">
                  {Item.Name}
                  {Item.Icon && (
                    <i className={`${Item.Icon} main-menu-icon`}></i>
                  )}
                </NavLink>
                {Item.SubMenu && (
                  <ul className="sub-menu">
                    {Item.SubMenu.map((item, idx) => (
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
          <button className="search-icon" onClick={click}>
            <i class="fa-solid fa-magnifying-glass "></i>
          </button>
          <div className="account">
            <ul className="account-info">
              <li className="account-item">
                <NavLink to="/" className="account-link">
                  <i class="fa-solid fa-user account-icon"></i>
                  <span className="account-title">Tài khoản</span>
                </NavLink>
                <ul className="register">
                  <li className="register-item">
                    <NavLink
                      to="/login"
                      className="register-link"
                      onClick={LoginForm}
                    >
                      Đăng nhập
                    </NavLink>
                  </li>
                  <li className="register-item">
                    <NavLink
                      to="/register"
                      className="register-link"
                      onClick={SignupForm}
                    >
                      Đăng kí
                    </NavLink>
                  </li>
                </ul>
              </li>
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
              <ul>
                {listMovie.length === 0 && inputValue.length > 0 ? (
                  <li>Không có kết quả tìm kiếm cho từ khóa "{inputValue}"</li>
                ) : (
                  listMovie.map((movie) => (
                    <li key={movie.id}>
                      <NavLink
                        to={`/gioi-thieu-phim/${movie.id}_${movie.link}`}
                        className="return-link"
                        onClick={click}
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
