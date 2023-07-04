import React from "react";
import CommentHook from "./CommentHook.js";
import style from "./Comment.module.css";

const Comment = () => {
   const {
      comment,
      numberComment,
      handleInputChange,
      commentClick,
      inputValue,
      actHuy,
      userLogin,
   } = CommentHook();

   return (
      <div className={style.container_comment}>
         <h3 className={style.title}>Bình luận phim</h3>
         <span>{numberComment} Bình luận</span>
         <div className={style.comment_form}>
            <form className={style.form} onSubmit={commentClick}>
               <div className={style.form_top}>
                  {userLogin && (
                     <img className={style.img} src={require("../../Image/user.jpg")} alt="" />
                  )}
                  <input
                     className={style.form_input}
                     type="text"
                     name="BinhLuan"
                     value={inputValue}
                     placeholder="Nhập bình luận..."
                     onChange={handleInputChange}
                  />
               </div>
               <div className={style.form_bottom}>
                  <button className={style.comment_btn} type="button" onClick={actHuy}>
                     Hủy
                  </button>
                  <button
                     className={`${style.comment_btn} ${inputValue ? style.btn_active : ""}`}
                     type="submit"
                  >
                     Gửi bình luận
                  </button>
               </div>
            </form>
         </div>
         <div className={style.list_comment}>
            {comment && (
               <ul className={style.list_row}>
                  {comment?.map((item, idx) => (
                     <li className={style.list_item} key={idx}>
                        <img className={style.img} src={require("../../Image/user.jpg")} alt="" />
                        <div className={style.list_right}>
                           <div
                              style={{
                                 display: "flex",
                                 alignItems: "center",
                                 gap: "10px",
                              }}
                           >
                              <label className={style.name}>{item.Name}</label>
                              <span className={style.date}>{item.Date}</span>
                           </div>
                           <p className={style.comment}>{item.Comment}</p>
                        </div>
                     </li>
                  ))}
               </ul>
            )}
         </div>
      </div>
   );
};

export default Comment;
