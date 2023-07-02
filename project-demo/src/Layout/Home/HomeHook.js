import { useState, useEffect } from "react";
import { allMovies } from "../../Data/DataALLMovies.js";

const filterMovie = (condition, numberStart, numberEnd) => {
   const arr = allMovies.filter((item) => item.category.includes(condition));
   const newArr = arr.reverse().slice(numberStart, numberEnd);
   return newArr;
};
const HomeHock = () => {
   const [movies, setMovies] = useState(null);
   const [listPhimLe, setListPhimLe] = useState([]);
   const [listPhimBo, setListPhimBo] = useState([]);
   const [listPhimChieuRap, setListPhimChieuRap] = useState([]);
   const [listPhimThinhHanh, setListPhimThinhHanh] = useState([]);
   const [listPhimSapChieu, setListPhimSapChieu] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   useEffect(() => {
      setMovies(allMovies);
   }, []);

   useEffect(() => {
      setLoading(true);
      const phimLe = filterMovie("Phim Lẻ", 0, 12);
      setListPhimLe(phimLe);

      const phimBo = filterMovie("Phim Bộ", 0, 12);
      setListPhimBo(phimBo);

      const phimChieuRap = filterMovie("Phim Chiếu Rạp", 0, 12);
      setListPhimChieuRap(phimChieuRap);

      const phimThinhHanh = filterMovie("Phim Thịnh Hành", 0, 12);
      setListPhimThinhHanh(phimThinhHanh);

      const phimSapChieu = filterMovie("Phim Sắp Chiếu", 0, 7);
      setListPhimSapChieu(phimSapChieu);
      setTimeout(() => {
         setLoading(false);
      }, 1000);
   }, [movies]);

   return {
      listPhimLe,
      listPhimBo,
      listPhimChieuRap,
      listPhimThinhHanh,
      listPhimSapChieu,
      loading,
   };
};

export default HomeHock;
