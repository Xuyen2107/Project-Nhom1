import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import { allMovies } from "../../Data/DataALLMovies";

const DanhMucHook = () => {
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const category = queryParams.get("category");

   const [listAllMovie, setListAllMovie] = useState([]);
   const [list, setList] = useState([]);

   useEffect(() => {
      setListAllMovie(allMovies);
   }, []);

   useEffect(() => {
      const arr = listAllMovie.filter(
         (item) =>
            item?.category?.includes(category) ||
            item?.country?.includes(category) ||
            category.includes(item?.year)
      );

      const newArr = arr.reverse().slice(0, 25);
      setList(newArr);
   }, [category, listAllMovie]);

   return { category, list };
};

export default DanhMucHook;
