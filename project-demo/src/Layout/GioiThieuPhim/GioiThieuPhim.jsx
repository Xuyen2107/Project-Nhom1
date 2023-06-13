import React from "react";
import { NavLink } from "react-router-dom";
import MovieDetail from "./GioiThieuPhimHook.js";
import "./GioiThieuPhim.css";

const GioiThieuPhim = () => {
   const { selectMovie } = MovieDetail();

   return (
      <div className="movie-intro">
         <div className="intro-title">
            <NavLink to="/" title="Xem Phim" className="intro-link">
               <i className="fa-solid fa-house title-icon"></i>
               Phim mới
            </NavLink>
            <i className="fa-solid fa-angle-right intro-icon"></i>
            <span> Giới Thiệu Phim </span>
            <i className="fa-solid fa-angle-right intro-icon"></i>
            <span className="intro-name">{selectMovie?.name}</span>
            <hr className="intro-hr" />
         </div>

         <div className="intro-info">
            <a href="${Item.link2}" className="icon-play">
               <i className="fa-solid fa-circle-play"></i>
            </a>
            <img
               src={require(`../../Image/Movie-Item/65-tran-chien-thoi-tien-su.jpg`)}
               alt=""
               className="info-img-1"
            />
            <img
               src={require("../../Image/Movie-Item/65-tran-chien-thoi-tien-su.jpg")}
               alt=""
               className="info-img-2"
            />
            <div className="info-place">
               <p className="place-name">{selectMovie?.name}</p>
               <p className="place-e-name">{selectMovie?.eName}</p>
               <div className="place-watch">
                  <button type="button" id="watch-trailer">
                     <i className="fa-brands fa-youtube"></i>
                     Trailer
                  </button>

                  <a href="fhdsjhfjk">
                     <i className="fa-regular fa-circle-play"></i>
                     Xem Phim
                  </a>
               </div>
            </div>
         </div>

         <div className="intro-content">
            <div className="intro-rate">
               <p className="mess">Đánh giá phim:</p>
               <div id="star-container">
                  <div className="star-widget">
                     <i className="fa-solid fa-star" title="Dở tệ"></i>
                     <i className="fa-solid fa-star" title="Dở"></i>
                     <i className="fa-solid fa-star" title="Không hay"></i>
                     <i className="fa-solid fa-star" title="Không hay lắm"></i>
                     <i className="fa-solid fa-star" title="Bình thường"></i>
                     <i className="fa-solid fa-star" title="Xem Được"></i>
                     <i className="fa-solid fa-star" title="Có vẻ hay"></i>
                     <i className="fa-solid fa-star" title="Hay"></i>
                     <i className="fa-solid fa-star" title="Rất hay"></i>
                     <i className="fa-solid fa-star" title="Tuyệt phẩm"></i>
                     <div id="like-rate" className="like-rate">
                        (<span id="rate-count">0</span>/10)
                     </div>
                  </div>
                  <p id="ketQua"></p>
               </div>
               <hr className="content-hr" />
               <ul className="content-info">
                  <li>
                     <label>Đang Phát: {selectMovie?.nowPlaying}</label>
                     <span></span>
                  </li>
                  <li>
                     <label>Năm Phát Hành: {selectMovie?.year}</label>
                     <span></span>
                  </li>
                  <li>
                     <label>Quốc Gia: {selectMovie?.country}</label>
                     <span></span>
                  </li>
                  <li>
                     <label>Thể Loại: {selectMovie?.category.join(", ")}.</label>
                     <span></span>
                  </li>
                  <li>
                     <label>Đạo Diễn: </label>
                     <span></span>
                  </li>
                  <li>
                     <label>Thời Lượng: </label>
                     <span></span>
                  </li>
                  <li>
                     <label>Diễn Viên: </label>
                     <span></span>
                  </li>
               </ul>
               <div id="trailer">
                  <hr className="content-hr" />
                  <div className="trailer-video">
                     <iframe
                        width="100%"
                        height="100%"
                        src=""
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                     ></iframe>
                  </div>
               </div>
               <hr className="content-hr" />
               <div className="content-review">
                  <p>Nội dung phim và review:</p>
                  <span></span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default GioiThieuPhim;
