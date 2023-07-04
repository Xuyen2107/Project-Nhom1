// import { updateComment } from "../../Api";
import CommentForm from "./CommentForm";

const Comment = ({
   comment,
   replies,
   currentUserId,
   addComment,
   updateComment,
   deleteComment,
   activeComment,
   setActiveComment,
   parentId = null,
}) => {
   const fiveMinutes = 300000;
   const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
   const canReply = Boolean(currentUserId);
   const canEdit = currentUserId === comment.userId && !timePassed;
   const canDelete = currentUserId === comment.userId && !timePassed;
   const createdAt = new Date(comment.createdAt).toLocaleDateString();
   const isReplying =
      activeComment && activeComment.type === "replying" && activeComment.id === comment.id;

   const isEditing =
      activeComment && activeComment.type === "editing" && activeComment.id === comment.id;
   const replyId = comment.parentId ? parentId : comment.id;

   return (
      <div className="comment">
         <div className="comment-image-container">
            <img src="/avatar.png" />
         </div>
         <div className="comment-right-part">
            <div className="comment-content">
               <div className="comment-author">{comment.username}</div>
               <div>{createdAt}</div>
            </div>
            {!isEditing && <div className="comment-text">{comment.body}</div>}
            {isEditing && (
               <CommentForm
                  submitLabel="Chỉnh sửa"
                  cancelSubmit="Huỷ"
                  hasCancelButton
                  initialText={comment.body}
                  handleSubmit={(text) => updateComment(text, comment.id)}
                  handleCancel={() => setActiveComment(null)}
                  parentId={parentId}
               />
            )}

            <div className="comment-actions">
               {canReply && (
                  <div
                     className="comment-actions"
                     onClick={() => setActiveComment({ id: comment.id, type: "replying" })}
                  >
                     Trả lời
                  </div>
               )}
               {canEdit && (
                  <div
                     className="comment-actions"
                     onClick={() => setActiveComment({ id: comment.id, type: "editing" })}
                  >
                     Chỉnh sửa
                  </div>
               )}
               {canDelete && (
                  <div className="comment-actions" onClick={() => deleteComment(comment.id)}>
                     Xoá
                  </div>
               )}
            </div>
            {isReplying && (
               <CommentForm
                  submitLabel="Trả lời"
                  cancelSubmit="Huỷ"
                  handleSubmit={(text) => addComment(text, replyId)}
               />
            )}
            {replies.length > 0 && (
               <div className="replies">
                  {replies.map((reply) => (
                     <Comment
                        comment={reply}
                        key={reply.id}
                        replies={[]}
                        currentUserId={currentUserId}
                        activeComment={activeComment}
                        updateComment={updateComment}
                        setActiveComment={setActiveComment}
                        addComment={addComment}
                        deleteComment={deleteComment}
                        parentId={comment.id}
                     />
                  ))}
               </div>
            )}
         </div>
      </div>
   );
};

export default Comment;
