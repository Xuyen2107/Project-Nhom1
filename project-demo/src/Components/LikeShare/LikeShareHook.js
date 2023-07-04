import { useState, useEffect, useContext } from "react";
import { HomeContext } from "../../Context/HomeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LikeShareHook = () => {
   const navigateLogin = useNavigate();
   const { userLogin, movieShow, listLike, setListLike, listRate, setListRate } =
      useContext(HomeContext);
   const star = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   const [like, setLike] = useState(false);
   const [numberLikes, setNumberLikes] = useState(0);
   const [rate, setRate] = useState(0);
   const [averageNumberRate, setAverageNumberRate] = useState(0);
   const [numberRate, setNumberRate] = useState(0);

   useEffect(() => {
      const movieLike = listLike?.find((x) => x?.MovieId === movieShow?.id);
      if (movieLike) {
         const userLike = movieLike?.Like.includes(userLogin?.UserId);
         setLike(userLike);
         setNumberLikes(movieLike?.Like.length);
      } else {
         setLike(false);
         setNumberLikes(0);
      }
   }, [listLike, movieShow, userLogin]);

   useEffect(() => {
      const movieRate = listRate?.find((x) => x?.MovieId === movieShow?.id);
      if (movieRate) {
         const userRate = movieRate?.ListRate.find((x) => x?.UserId === userLogin?.UserId);
         if (userRate) {
            setRate(userRate?.Rate);
         } else {
            setRate(0);
         }
      } else {
         setRate(0);
      }

      const numberUserRate = movieRate?.ListRate.map((item) => {
         return item.Rate;
      });

      if (numberUserRate) {
         setNumberRate(numberUserRate.length);
         let sum = 0;
         for (var i = 0; i < numberUserRate?.length; i++) {
            sum += numberUserRate[i];
         }
         let average = sum / numberUserRate?.length;
         setAverageNumberRate(average.toFixed(1));
      } else {
         setNumberRate(0);
         setAverageNumberRate(0);
      }
   }, [listRate, movieShow, userLogin]);

   const handleStarClick = (starIndex) => {
      if (!userLogin) {
         toast.success("Vui lòng đăng nhập để thực hiện thao tác");
         navigateLogin("/dang-nhap");
      } else {
         let checked = false;
         const listRateClone = JSON.parse(JSON.stringify(listRate));
         const rateMovie = listRateClone?.find((x) => x?.MovieId === movieShow?.id);
         if (rateMovie) {
            listRateClone.forEach((item) => {
               if (item.MovieId === movieShow.id) {
                  item.ListRate.forEach((rate) => {
                     if (rate?.UserId === userLogin?.UserId) {
                        rate.Rate = starIndex;
                        checked = true;
                        toast.success(`Cảm ơn bạn đã đánh giá phim ${movieShow?.name}`);
                     }
                  });
                  if (!checked) {
                     const newUserRate = {
                        UserId: userLogin.UserId,
                        Rate: starIndex,
                     };
                     item.ListRate.push(newUserRate);
                     toast.success(`Cảm ơn bạn đã đánh giá phim ${movieShow?.name}`);
                  }
               }
            });
         } else {
            const newMovieRate = {
               MovieId: movieShow.id,
               ListRate: [{ UserId: userLogin.UserId, Rate: starIndex }],
            };
            listRateClone.push(newMovieRate);
            toast.success(`Cảm ơn bạn đã đánh giá phim ${movieShow?.name}`);
         }
         setListRate(listRateClone);
         localStorage.setItem("listRate", JSON.stringify(listRateClone));
      }
   };

   const handleLikeClick = () => {
      if (!userLogin) {
         toast.success("Vui lòng đăng nhập để thực hiện thao tác");
         navigateLogin("/dang-nhap");
      } else {
         const listLikeClone = JSON.parse(JSON.stringify(listLike));
         const likeMovie = listLikeClone?.find((x) => x.MovieId === movieShow.id);
         if (likeMovie) {
            listLikeClone?.forEach((item) => {
               if (item.MovieId === movieShow.id) {
                  const index = item.Like?.indexOf(userLogin?.UserId);
                  console.log(index);
                  if (index !== -1) {
                     item?.Like.splice(index, 1);
                     toast.success(`Hic, bạn đã bỏ thích phim ${movieShow?.name}`);
                  } else {
                     item?.Like.push(userLogin?.UserId);
                     toast.success(`Cảm ơn bạn đã thích phim ${movieShow?.name}`);
                  }
               }
            });
         } else {
            const newMovieLike = {
               MovieId: movieShow?.id,
               Like: [userLogin?.UserId],
            };
            listLikeClone.push(newMovieLike);
            toast.success(`Cảm ơn bạn đã thích phim ${movieShow?.name}`);
         }
         setListLike(listLikeClone);
         localStorage.setItem("listLike", JSON.stringify(listLikeClone));
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
      like,
      numberLikes,
      rate,
      averageNumberRate,
      numberRate,
      getRatingTitle,
      handleLikeClick,
      handleStarClick,
   };
};

export default LikeShareHook;
