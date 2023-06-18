import { useState, useEffect } from "react";
import { allMovies } from "../../Data/DataALLMovies.js";

const HookHeader = () => {
   const [inputValue, setInputValue] = useState("");
   const [listAllMovie, setListAllMovie] = useState([]);
   const [listMovie, setListMovie] = useState([]);
   const [result, setResult] = useState(false);

   useEffect(() => {
      const newAllMovie = allMovies.map((prop) => {
         return {
            id: prop.id,
            name: prop.name,
            eName: prop.eName,
            nowPlaying: prop.nowPlaying,
            year: prop.year,
            country: prop.country,
            category: prop.category,
            director: prop.director,
            actor: prop.actor,
         };
      });
      setListAllMovie(newAllMovie);
   }, []);

   useEffect(() => {
      if (inputValue.length > 0) {
         const searchResults = listAllMovie.filter((movie) => {
            for (let prop in movie) {
               if (movie[prop].toString().toLowerCase().includes(inputValue.toLowerCase())) {
                  return true;
               }
            }
            return false;
         });
         setListMovie(searchResults);
      } else {
         setListMovie([]);
      }
   }, [inputValue, listAllMovie]);

   useEffect(() => {
      if (result) {
         setInputValue("");
      }
   }, [result]);

   const searchInputChange = (e) => {
      setInputValue(e.target.value);
   };

   const click = () => {
      setResult(!result);
   };

   return { searchInputChange, listMovie, inputValue, result, click };
};

export default HookHeader;
