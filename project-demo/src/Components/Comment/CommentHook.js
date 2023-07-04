import { useState, useEffect, useContext } from "react";
import { HomeContext } from "../../Context/HomeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CommentHook = () => {
   const navigateLogin = useNavigate();
   const { userLogin, movieShow, listComment, setListComment } = useContext(HomeContext);
   const [inputValue, setInputValue] = useState("");
   const [comment, setComment] = useState();
   const [numberComment, setNumberComment] = useState(0);

   useEffect(() => {
      const movieComment = listComment?.find((x) => x?.MovieId === movieShow?.id);
      if (movieComment) {
         setComment(movieComment?.Comments);
         setNumberComment(movieComment?.Comments?.length);
      } else {
         setComment(null);
         setNumberComment(0);
      }
   }, [listComment, movieShow]);

   const handleInputChange = (e) => {
      setInputValue(e.target.value);
   };

   const commentClick = (event) => {
      event.preventDefault();
      const listCommentClone = JSON.parse(JSON.stringify(listComment));

      if (!userLogin) {
         toast.success("Vui lòng đăng nhập trước khi bình luận");
         navigateLogin("/dang-nhap");
      } else {
         if (inputValue) {
            const movieComment = listCommentClone?.find((x) => x?.MovieId === movieShow?.id);
            if (movieComment) {
               listCommentClone.forEach((item) => {
                  if (item.MovieId === movieShow.id) {
                     const newUserComment = {
                        UserId: userLogin.UserId,
                        Name: userLogin.Ho + " " + userLogin.Ten,
                        Comment: inputValue,
                        Date: new Date().toLocaleDateString(),
                     };
                     item.Comments.push(newUserComment);
                  }
               });
            } else {
               const newComment = {
                  MovieId: movieShow?.id,
                  Comments: [
                     {
                        UserId: userLogin.UserId,
                        Name: userLogin.Ho + " " + userLogin.Ten,
                        Comment: inputValue,
                        Date: new Date().toLocaleDateString(),
                     },
                  ],
               };
               console.log(newComment);
               listCommentClone.push(newComment);
            }
         } else {
            toast.success("Vui lòng nhập bình luận");
         }
      }

      setInputValue("");
      setListComment(listCommentClone);
      localStorage.setItem("listComment", JSON.stringify(listCommentClone));
   };

   const actHuy = () => {
      setInputValue("");
   };
   return {
      comment,
      numberComment,
      commentClick,
      handleInputChange,
      inputValue,
      actHuy,
      userLogin,
   };
};

export default CommentHook;
