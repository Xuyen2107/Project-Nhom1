import React from "react";
import Card from "../../Components/Card/Card";
import "./Home.css";
import { NavLink } from "react-router-dom";
import HomeHock from "./Hook";

const Home = () => {
   const {
      listPhimLe,
      listPhimBo,
      listPhimChieuRap,
      listPhimThinhHanh,
      listPhimSapChieu,
      loading,
   } = HomeHock();

   return loading ? (
      <h1 style={{ height: "100vh" }}> Đang tải phim...</h1>
   ) : (
      <div className="home">
         <div className="slide-movie"></div>
         <div className="home-movie">
            <div className="home-title">
               <label className="category">PHIM LẺ MỚI CẬP NHẬT</label>
               <div className="watch-all">
                  <NavLink to="" className="watch-all-link">
                     Xem tất cả <i class="fa-solid fa-caret-right watch-all-icon"></i>
                  </NavLink>
               </div>
            </div>
            <hr className="hr" />
            <div className="home-row">
               <ul className="list-movie">
                  {listPhimLe.map((item) => (
                     <Card
                        addClassName
                        key={item?.id}
                        nowPlaying={item?.nowPlaying}
                        name={item?.name}
                        link={item?.link}
                        id={item?.id}
                        image={item?.image}
                     />
                  ))}
               </ul>
            </div>
            <hr className="home-hr-end" />
         </div>
         <div className="home-movie">
            <div className="home-title">
               <label className="category">PHIM BỘ MỚI CẬP NHẬT</label>
               <div className="watch-all">
                  <NavLink to="/danh-muc?category=Phim Bộ" className="watch-all-link">
                     Xem tất cả <i class="fa-solid fa-caret-right watch-all-icon"></i>
                  </NavLink>
               </div>
            </div>
            <hr className="hr" />
            <div className="home-row">
               <ul className="list-movie">
                  {listPhimBo.map((item) => (
                     <Card
                        addClassName
                        key={item?.id}
                        nowPlaying={item?.nowPlaying}
                        name={item?.name}
                        link={item?.link}
                        id={item?.id}
                        image={item?.image}
                     />
                  ))}
               </ul>
            </div>
            <hr className="home-hr-end" />
         </div>
         <div className="home-movie">
            <div className="home-title">
               <label className="category">PHIM CHIẾU RẠP</label>
               <div className="watch-all">
                  <NavLink to="" className="watch-all-link">
                     Xem tất cả <i class="fa-solid fa-caret-right watch-all-icon"></i>
                  </NavLink>
               </div>
            </div>
            <hr className="hr" />
            <div className="home-row">
               <ul className="list-movie">
                  {listPhimChieuRap.map((item) => (
                     <Card
                        addClassName
                        key={item?.id}
                        nowPlaying={item?.nowPlaying}
                        name={item?.name}
                        link={item?.link}
                        id={item?.id}
                        image={item?.image}
                     />
                  ))}
               </ul>
            </div>
            <hr className="home-hr-end" />
         </div>
         <div className="home-movie">
            <div className="home-title">
               <label className="category">PHIM THỊNH HÀNH</label>
               <div className="watch-all">
                  <NavLink to="" className="watch-all-link">
                     Xem tất cả <i class="fa-solid fa-caret-right watch-all-icon"></i>
                  </NavLink>
               </div>
            </div>
            <hr className="hr" />
            <div className="home-row">
               <ul className="list-movie list-movie-1">
                  {listPhimThinhHanh.map((item) => (
                     <Card
                        addClassName
                        key={item?.id}
                        nowPlaying={item?.nowPlaying}
                        name={item?.name}
                        link={item?.link}
                        id={item?.id}
                        image={item?.image}
                     />
                  ))}
               </ul>
            </div>
            <hr className="home-hr-end" />
         </div>
         <div className="home-movie">
            <div className="home-title">
               <label className="category">PHIM SẮP CHIẾU</label>
               <div className="watch-all">
                  <NavLink to="" className="watch-all-link">
                     Xem tất cả <i class="fa-solid fa-caret-right watch-all-icon"></i>
                  </NavLink>
               </div>
            </div>
            <hr className="hr" />
            <div className="home-row">
               <ul className="list-movie list-movie-1">
                  {listPhimSapChieu.map((item) => (
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
            </div>
         </div>
      </div>
   );
};

export default Home;
