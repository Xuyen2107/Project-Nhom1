import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Layout/Home/Home.jsx";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import GioiThieuPhim from "./Layout/GioiThieuPhim/GioiThieuPhim.jsx";
import DanhMuc from "./Layout/DanhMuc/DanhMuc.jsx";

const Navigate = () => {
   return (
      <div>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gioi-thieu-phim/:id" element={<GioiThieuPhim />} />
            <Route path="/danh-muc" element={<DanhMuc />} />
         </Routes>

         <Footer />
      </div>
   );
};

export default Navigate;
