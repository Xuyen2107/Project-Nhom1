import React from "react";
import { NavLink } from "react-router-dom";
import MovieDetail from "./GioiThieuPhimHook";
import LikeShare from "../../Components/LikeShare/LikeShare";
import style from "./GioiThieuPhim.module.css";

const GioiThieuPhim = () => {
   const { selectMovie, result, videoTrailer, elementRef } = MovieDetail();
   return (
      <div className={style.intro_movie}>
         <div className={style.intro_title}>
            <NavLink to="/" title="Xem Phim" className={style.intro_link}>
               <i className={`fa-solid fa-house ${style.icon_home}`}></i>
               Phim mới
            </NavLink>
            <i className={`fa-solid fa-angle-right ${style.icon_home}`}></i>
            <span> Giới Thiệu Phim </span>
            <i className={`fa-solid fa-angle-right ${style.icon_home}`}></i>
            <span className="intro-name">{selectMovie?.name}</span>
         </div>

         <div className={style.intro_info}>
            <NavLink to={`/xem-phim/${selectMovie?.id}_${selectMovie?.link}`} className="icon-play">
               <i className={`fa-solid fa-circle-play ${style.icon_play}`}></i>
            </NavLink>
            {selectMovie?.image && (
               <>
                  <img
                     src={require(`../../Image/Movie-Item/${selectMovie?.image}`)}
                     alt="Ảnh nền"
                     className={style.info_img_background}
                  />

                  <div className={style.info_place}>
                     <img
                        src={require(`../../Image/Movie-Item/${selectMovie?.image}`)}
                        alt="Ảnh"
                        className={style.info_img}
                     />
                     <div className={style.place_right}>
                        <label className={style.place_name}>{selectMovie?.name}</label>
                        <label className={style.place_e_name}>{selectMovie?.eName}</label>
                        <div className={style.place_watch}>
                           <button
                              type="button"
                              className={style.watch_trailer}
                              onClick={videoTrailer}
                           >
                              <i className="fa-brands fa-youtube"></i>
                              Trailer
                           </button>

                           <NavLink
                              to={`/xem-phim/${selectMovie?.id}_${selectMovie?.link}`}
                              className={style.watch_movie}
                           >
                              <i className="fa-regular fa-circle-play"></i>
                              Xem Phim
                           </NavLink>
                        </div>
                     </div>
                  </div>
               </>
            )}
         </div>

         <div className="intro-content">
            <LikeShare />
            <div className="intro-rate">
               <hr className={style.content_hr} />
               <ul className={style.content_info}>
                  <li className={style.content_item}>
                     <label className={style.content_label}>Đang Phát: </label>
                     <span className={style.content_title}>{selectMovie?.nowPlaying}</span>
                  </li>
                  <li className={style.content_item}>
                     <label className={style.content_label}>Năm Phát Hành: </label>
                     <span className={style.content_title}>{selectMovie?.year}</span>
                  </li>
                  <li className={style.content_item}>
                     <label className={style.content_label}>Quốc Gia: </label>
                     <span className={style.content_title}>{selectMovie?.country}</span>
                  </li>
                  <li className={style.content_item}>
                     <label className={style.content_label}>Thể Loại: </label>
                     <span className={style.content_title}>{selectMovie?.category}</span>
                  </li>
                  <li className={style.content_item}>
                     <label className={style.content_label}>Đạo Diễn: </label>
                     <span>{selectMovie?.director}</span>
                  </li>
                  <li className={style.content_item}>
                     <label className={style.content_label}>Thời Lượng: </label>
                     <span className={style.content_title}>{selectMovie?.time}</span>
                  </li>
                  <li className={style.content_item}>
                     <label className={style.content_label}>Diễn Viên: </label>
                     <span className={style.content_title}>{selectMovie?.actor}</span>
                  </li>
               </ul>

               {result && (
                  <div className={style.intro_trailer} ref={elementRef}>
                     <hr className={style.content_hr} />
                     <div className={style.trailer_video}>
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
                  </div>
               )}
               <hr className={style.content_hr} />
               <div className={style.content_review}>
                  <p className={style.review_title}>Nội dung phim và review:</p>
                  <p className={style.review_content}>{selectMovie?.review}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default GioiThieuPhim;
