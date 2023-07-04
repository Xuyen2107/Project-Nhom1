import { useState } from "react";
import "./Comment.css";

const CommentForm = ({
   parentID,
   submitLabel,
   handleSubmit,
   cancelSubmit,
   hasCancelButton = true,
   handleCancel,
   initialText = "",
}) => {
   const [text, setText] = useState(initialText);
   const isInputDisabled = text.length === 0;
   const clearInput = () => {
      setText("");
   };
   const onSubmit = (event) => {
      event.preventDefault();
      handleSubmit(text);
      clearInput();
   };
   const onCancel = (event) => {
      if (parentID === null) {
         event.preventDefault();
      } else {
         event.preventDefault();
         clearInput();
      }
   };

   return (
      <div style={{ display: "flex", width: "100%", marginTop: "10px" }}>
         <div className="comment-image-container">
            <img src={require("../../Image/user.jpg")} alt="Ảnh" />
         </div>
         <form onSubmit={onSubmit} className="form">
            <input
               className="comment-form-textarea"
               value={text}
               onChange={(e) => setText(e.target.value)}
               placeholder="Viết bình luận ..."
            ></input>
            <div className="btn">
               <button type="submit" className="comment-form-button" disabled={isInputDisabled}>
                  {submitLabel}
               </button>

               {hasCancelButton && (
                  <button type="button" className="comment-form-button" onClick={onCancel}>
                     {cancelSubmit}
                  </button>
               )}
            </div>
         </form>
      </div>
   );
};

export default CommentForm;
