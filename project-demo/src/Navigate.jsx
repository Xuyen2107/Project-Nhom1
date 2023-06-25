import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Layout/Home/Home.jsx";
import GioiThieuPhim from "./Layout/GioiThieuPhim/GioiThieuPhim.jsx";
import DanhMuc from "./Layout/DanhMuc/DanhMuc.jsx";
import XemPhim from "./Layout/XemPhim/XemPhim.jsx";
import LoginForm from "./Layout/Login/Login.jsx";
import SignupForm from "./Layout/Login/Signup.jsx";
import NotFound from "./Layout/NotFound.jsx";

const Navigate = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu-phim/:id" element={<GioiThieuPhim />} />
        <Route path="/danh-muc" element={<DanhMuc />} />
        <Route path="/xem-phim/:idx" element={<XemPhim />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<SignupForm />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
};

export default Navigate;
