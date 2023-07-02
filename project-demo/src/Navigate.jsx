import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./Layout/Home/Home.jsx";
import GioiThieuPhim from "./Layout/GioiThieuPhim/GioiThieuPhim.jsx";
import DanhMuc from "./Layout/DanhMuc/DanhMuc.jsx";
import XemPhim from "./Layout/XemPhim/XemPhim.jsx";
import LogIn from "./Layout/Login/LogIn.jsx";
import NotFound from "./Layout/NotFound.jsx";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Regisster from "./Layout/Login/Register.jsx";

const MainLayout = ({ children }) => {
   return (
      <div>
         <Header />
         {children}
         <Footer />
      </div>
   );
};

const Navigates = () => {
   return (
      <Routes>
         <Route
            path="/"
            element={
               <MainLayout>
                  <Outlet />
               </MainLayout>
            }
         >
            <Route index element={<Home />} />
            <Route path="gioi-thieu-phim/:id" element={<GioiThieuPhim />} />
            <Route path="danh-muc" element={<DanhMuc />} />
            <Route path="xem-phim/:idx" element={<XemPhim />} />{" "}
            <Route path="dang-ki" element={<Regisster />} />
            <Route path="dang-nhap" element={<LogIn />} />
         </Route>
         <Route path="*" element={<NotFound />} />
      </Routes>
   );
};

export default Navigates;
