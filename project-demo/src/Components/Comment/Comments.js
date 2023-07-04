import { useState, useEffect } from "react";
import {
   getComments as getCommentsApi,
   createComment as createCommentApi,
   deleteComment as deleteCommentApi,
   updateComment as updateCommentApi,
} from "../../Api";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import "./Comment.css";

const Comments = ({ currentUserId }) => {
   const [backedComment, setBackedComment] = useState([]);
   const [activeComment, setActiveComment] = useState(null);

   const rootComment = backedComment.filter((backedComment) => backedComment.parentId === null);

   const getReplies = (commentId) => {
      return backedComment
         .filter((backedComment) => backedComment.parentId === commentId)
         .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
   };

   const addComment = (text, parentId) => {
      createCommentApi(text, parentId).then((comment) => {
         console.log(comment);
         setBackedComment([...backedComment, comment]);
         setActiveComment(null);
      });
   };
   const updateComment = (text, commentId) => {
      if (window.confirm("Bạn có chắc muốn sửa bình luận không")) {
         updateCommentApi(text, commentId).then(() => {
            const updateBackendComment = backedComment.map((backedComment) => {
               if (backedComment.id === commentId) {
                  console.log(commentId);
                  return { ...backedComment, body: text };
               }
               return backedComment;
            });
            setBackedComment(updateBackendComment);
            setActiveComment(null);
         });
      }
   };
   const deleteComment = (commentId) => {
      if (window.confirm("Bạn có chắc muốn xoá bình luận không")) {
         deleteCommentApi(commentId).then(() => {
            const updateBackendComment = backedComment.filter(
               (backedComment) => backedComment.id !== commentId
            );
            setBackedComment(updateBackendComment);
         });
      }
   };
   useEffect(() => {
      getCommentsApi().then((data) => {
         setBackedComment(data);
      });
   }, []);

   return (
      <div className="comments">
         <h3 className="comments-title">Comments</h3>
         <div className="comment-form-title">
            <CommentForm
               submitLabel="Bình luận"
               cancelSubmit="Huỷ"
               handleSubmit={addComment}
               activeComment={activeComment}
            />
         </div>
         <div className="comments-container">
            {rootComment.map((rootComment) => {
               return (
                  <Comment
                     key={rootComment.id}
                     comment={rootComment}
                     replies={getReplies(rootComment.id)}
                     currentUserId={currentUserId}
                     addComment={addComment}
                     updateComment={updateComment}
                     deleteComment={deleteComment}
                     activeComment={activeComment}
                     setActiveComment={setActiveComment}
                  />
               );
            })}
         </div>
      </div>
   );
};
export default Comments;
