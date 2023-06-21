import React from "react";
import { NavLink } from "react-router-dom";
import MovieWatchDetail from "./XemPhimHook";
import LikeShare from "../../Components/LikeShare/LikeShare";
import style from "./XemPhim.module.css";

const XemPhim = () => {
   const { selectMovie } = MovieWatchDetail();
   return (
      <div className={style.watch_movie}>
         <div className={style.watch_title}>
            <NavLink to="/" title="Phim Mới" className={style.watch_home}>
               <i className={`fa-solid fa-house ${style.icon_home}`}></i>
               <span>Phim mới</span>
            </NavLink>
            <i className={`fa-solid fa-angle-right ${style.icon_home}`}></i>
            <span> Xem Phim </span>
            <i className={`fa-solid fa-angle-right ${style.icon_home}`}></i>
            <span>{selectMovie?.name}</span>
         </div>

         <div className={style.watch_video}>
            <iframe
               width="100%"
               height="100%"
               src={selectMovie?.iframe}
               title="YouTube video player"
               frameborder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowfullscreen
            ></iframe>
         </div>

         <span className={style.watch_note}>
            Phim xem tốt nhất trên trình duyệt Safari, FireFox hoặc Chrome. Đừng tiếc 1 comment bên
            dưới để đánh giá phim hoặc báo lỗi.
         </span>

         <hr className={style.watch_hr} />

         <LikeShare likeNumber={selectMovie?.like} rateNumber={selectMovie?.rate} />

         <hr className={style.watch_hr_1} />
         <div className={style.watch_bottom}>
            <span className={style.watch_name}>{selectMovie?.name}</span>
            <div className={style.watch_content}>
               <p className={style.review}>{selectMovie?.review}</p>
               <NavLink
                  to={`/gioi-thieu-phim/${selectMovie?.id}_${selectMovie?.link}`}
                  className={style.content_link}
               >
                  [Xem Thêm Tại Đây]
               </NavLink>
            </div>
         </div>
      </div>
   );
};

export default XemPhim;
