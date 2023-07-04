import React from "react";
import Card from "../../Components/Card/Card";
import CategoryTitle from "../../Components/CategoryTitle/CategoryTitle.jsx";
import HomeHock from "./HomeHook";
import SliderComponent from "../../Components/SliderComponent/SliderComponent";
import "./Home.css";
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
      <h2 style={{ height: "100vh" }}> Đang tải phim...</h2>
   ) : (
      <div className="home">
         <div className="home-movie">
            <CategoryTitle category="PHIM THỊNH HÀNH" link="/danh-muc?category=Phim Thịnh Hành" />
            <div className="home-row">
               <ul className="list-movie-flex  ">
                  <SliderComponent arrImage={listPhimThinhHanh} />
               </ul>
            </div>
            <hr className="home-hr-end" />
         </div>

         <div className="home-movie">
            <CategoryTitle
               category="PHIM LẺ MỚI CẬP NHẬT"
               showLink
               link="/danh-muc?category=Phim Lẻ"
            />
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
            <CategoryTitle
               category="PHIM BỘ MỚI CẬP NHẬT"
               showLink
               link="/danh-muc?category=Phim Bộ"
            />
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
            <CategoryTitle
               category="PHIM CHIẾU RẠP"
               showLink
               link="/danh-muc?category=Phim Chiếu Rạp"
            />
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
            <CategoryTitle
               category="PHIM SẮP CHIÊU"
               showLink
               link="/danh-muc?category=Phim Sắp Chiếu"
            />
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
