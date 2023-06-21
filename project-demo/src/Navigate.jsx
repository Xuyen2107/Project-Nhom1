import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Layout/Home/Home.jsx";
import GioiThieuPhim from "./Layout/GioiThieuPhim/GioiThieuPhim.jsx";
import DanhMuc from "./Layout/DanhMuc/DanhMuc.jsx";
import XemPhim from "./Layout/XemPhim/XemPhim.jsx";

const Navigate = () => {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gioi-thieu-phim/:id" element={<GioiThieuPhim />} />
            <Route path="/danh-muc" element={<DanhMuc />} />
            <Route path="/xem-phim/:idx" element={<XemPhim />} />
         </Routes>
      </div>
   );
};

export default Navigate;
