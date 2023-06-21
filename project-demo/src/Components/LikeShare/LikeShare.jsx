import React, { useContext } from "react";
import { LikeShareContext } from "../../Context/LikeShareContext";
import style from "./LikeShare.module.css";

const LikeShare = () => {
   const context = useContext(LikeShareContext);
   return (
      <div className={style.rate_movie}>
         <div className={style.like_share}>
            <button className={style.like_btn} type="button" onClick={context.handleLikeClick}>
               <span className={style.like}>Like</span>
               <i class={`fa-solid fa-thumbs-up ${style.like_icon}`}></i>
               <span className={style.like_number}>{context.likeCount}</span>
            </button>
            <button className={style.share_btn} type="button" onClick={context.handleShareClick}>
               <span className={style.share}>Share</span>
               <i className={`fa-solid fa-share ${style.share_icon}`}></i>
            </button>
         </div>
         <div className={style.rate_star}>
            <label className={style.rate_title}>Đánh giá phim:</label>
            <div className={style.start_area}>
               <div className={style.star}>
                  {context.star.map((rating) => (
                     <i
                        key={rating}
                        className={`fa-solid fa-star ${style.star_icon} ${
                           rating <= context.ratingCount ? style.active : ""
                        }`}
                        title={context.getRatingTitle(rating)}
                        onClick={() => context.handleStarClick(rating)}
                     />
                  ))}
               </div>
               <span className={style.result}>{context.message}</span>
            </div>
            <div className={style.rate_bottom}>
               <span className={style.rate_number}>{context.rate}</span>
               <span className={style.rate_name}>Đánh giá</span>
            </div>
         </div>
      </div>
   );
};

export default LikeShare;
