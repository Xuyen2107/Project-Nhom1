import { useState, useEffect, useContext } from "react";
import { HomeContext } from "../../Context/HomeContext";
import { useNavigate } from "react-router-dom";

const LikeShareHook = () => {
   const navigateLogin = useNavigate();
   const { userLogin, listLike, setListLike, movieShow } = useContext(HomeContext);
   const star = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   const [ratingCount, setRatingCount] = useState();
   const [message, setMessage] = useState("");
   const [liked, setLiked] = useState();
   const [movieLikes, setMovieLikes] = useState(0);

   useEffect(() => {
      const movieLike = listLike?.find((x) => x?.MovieId === movieShow.id);
      console.log(movieLike);
      if (movieLike) {
         const userLike = movieLike.Like?.find((x) => x?.UserId === userLogin?.UserId);
         setLiked(userLike);
         const likedUsers = movieLike.Like.filter((like) => like.IsLike === true);
         setMovieLikes(likedUsers.length);
      }
   }, [listLike, movieShow, userLogin]);

   const handleClick = () => {
      if (!userLogin) {
         alert("Vui lòng đăng nhập để thích phim");
         navigateLogin("/dang-nhap");
      }

      const updatedListLike = listLike.map((movie) => {
         if (movie.MovieId === movieShow.id) {
            const updatedLikes = movie.Like.map((like) => {
               if (like.UserId === userLogin.UserId) {
                  return {
                     ...like,
                     IsLike: !like.IsLike,
                  };
               }
               return like;
            });
            return {
               ...movie,
               Like: updatedLikes,
            };
         }
         return movie;
      });

      setListLike(updatedListLike);
      localStorage.setItem("listLike", JSON.stringify(updatedListLike));
   };

   const handleStarClick = (position) => {
      setRatingCount(position);

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

   return {
      star,
      movieLikes,
      ratingCount,
      getRatingTitle,
      handleStarClick,
      message,
      liked,
      handleClick,
   };
};

export default LikeShareHook;
