import { createContext, useState, useEffect, useRef } from "react";

const LikeShareContext = createContext();

const LikeShareProvider = ({ children }) => {
   const star = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   const [likeCount, setLikeCount] = useState(0);
   const [resultLike, setResultLike] = useState(false);
   const [ratingCount, setRatingCount] = useState(0);
   const [message, setMessage] = useState("");
   const [resultRate, setResultRate] = useState(false);
   const [rate, setRate] = useState(0);

   useEffect(() => {
      if (resultLike) {
         setLikeCount((pre) => pre + 1);
      }
   }, [resultLike]);

   useEffect(() => {
      if (resultRate) {
         setRate((pre) => pre + 1);
      }
   }, [resultRate]);

   const handleLikeClick = (movieId) => {
      if (!resultLike) {
         setResultLike(true);
      } else {
         alert("Bạn đã thích video");
      }
   };

   const handleShareClick = () => {
      const currentUrl = window.location.href;
      const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
         currentUrl
      )}`;
      window.open(facebookShareUrl, "_blank");
   };

   const handleStarClick = (position) => {
      setRatingCount(position);
      setResultRate(true);
      switch (position) {
         case 1:
            setMessage("Dở tệ");
            break;
         case 2:
            setMessage("Dở");
            break;
         case 3:
            setMessage("Không hay");
            break;
         case 4:
            setMessage("Không hay lắm");
            break;
         case 5:
            setMessage("Bình thường");
            break;
         case 6:
            setMessage("Xem Được");
            break;
         case 7:
            setMessage("Có vẻ hay");
            break;
         case 8:
            setMessage("Hay");
            break;
         case 9:
            setMessage("Rất hay");
            break;
         case 10:
            setMessage("Tuyệt phẩm");
            break;
         default:
            setMessage("");
            break;
      }
   };

   const getRatingTitle = (rating) => {
      switch (rating) {
         case 1:
            return "Dở tệ";
         case 2:
            return "Dở";
         case 3:
            return "Không hay";
         case 4:
            return "Không hay lắm";
         case 5:
            return "Bình thường";
         case 6:
            return "Xem Được";
         case 7:
            return "Có vẻ hay";
         case 8:
            return "Hay";
         case 9:
            return "Rất hay";
         case 10:
            return "Tuyệt phẩm";
         default:
            return "";
      }
   };

   const value = {
      star,
      likeCount,
      ratingCount,
      message,
      getRatingTitle,
      handleStarClick,
      handleLikeClick,
      handleShareClick,
      rate,
   };

   return <LikeShareContext.Provider value={value}>{children}</LikeShareContext.Provider>;
};

export { LikeShareContext, LikeShareProvider };
