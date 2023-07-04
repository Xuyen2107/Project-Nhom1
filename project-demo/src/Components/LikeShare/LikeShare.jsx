import React from "react";
import LikeShareHook from "./LikeShareHook.js";
import style from "./LikeShare.module.css";

const LikeShare = () => {
   const {
      star,
      like,
      numberLikes,
      rate,
      averageNumberRate,
      numberRate,
      getRatingTitle,
      handleLikeClick,
      handleStarClick,
   } = LikeShareHook();
   return (
      <div className={style.container}>
         <div className={style.container_top}>
            <label className={style.label}>Tổng quan phim: </label>
            <div>
               {star.map((rating) => (
                  <i
                     key={rating}
                     className={`fa-solid fa-star ${style.star_icon} ${
                        rating <= Math.round(averageNumberRate) ? style.active : ""
                     }`}
                     title={getRatingTitle(rating)}
                  />
               ))}
               <span>({averageNumberRate}/10)</span>
               <span className={style.top_span}>
                  {getRatingTitle(Math.round(averageNumberRate))}
               </span>
            </div>
            <div className={style.rate_bottom}>
               <span className={style.rate_number}>{numberRate}</span>
               <span className={style.rate_name}>Đánh giá</span>
            </div>
         </div>
         <div className={style.like_share}>
            <button
               className={`${style.like_btn} ${like ? style.like_active : ""}`}
               type="button"
               onClick={handleLikeClick}
            >
               <span className={style.like}>Like</span>
               <i className={`fa-solid fa-thumbs-up ${style.like_icon}`}></i>
               <span className={style.like_number}>{numberLikes}</span>
            </button>
            <button className={style.share_btn} type="button">
               <span className={style.share}>Share</span>
               <i className={`fa-solid fa-share ${style.share_icon}`}></i>
            </button>
         </div>
         <div className={style.rate_star}>
            <label className={style.label}>Đánh giá của bạn :</label>

            <div className={style.start_area}>
               <div className={style.star}>
                  {star.map((itemRate) => (
                     <i
                        key={itemRate}
                        className={`fa-solid fa-star ${style.star_icon} ${
                           itemRate <= rate ? style.active : ""
                        }`}
                        title={getRatingTitle(itemRate)}
                        onClick={() => handleStarClick(itemRate)}
                     />
                  ))}
               </div>
               <span className={style.result}>{getRatingTitle(rate)}</span>
            </div>
         </div>
      </div>
   );
};

export default LikeShare;
