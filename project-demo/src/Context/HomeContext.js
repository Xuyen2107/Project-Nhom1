import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { ListUserDefault } from "../Data/DataUser";
import { ListLikeDefault } from "../Data/DataLike";
import { ListRateDefault } from "../Data/DataRate";
import { ListCommentDefault } from "../Data/DataComment";

const HomeContext = createContext();

const HomeProvider = ({ children }) => {
   const [userLogin, setUserLogin] = useState();
   const [listUser, setListUser] = useState([]);
   const [listLike, setListLike] = useState([]);
   const [listRate, setListRate] = useState([]);
   const [listComment, setListComment] = useState([]);
   const [movieShow, setMovieShow] = useState();

   // useEffect(() => {
   //    localStorage.setItem("listUser", JSON.stringify(ListUserDefault));
   //    localStorage.setItem("listLike", JSON.stringify(ListLikeDefault));
   //    localStorage.setItem("listRate", JSON.stringify(ListRateDefault));
   //    localStorage.setItem("listComment", JSON.stringify(ListCommentDefault));
   //    Cookies.remove("userLogin");
   // }, []);

   useEffect(() => {
      const getListUser = localStorage.getItem("listUser");
      const getListLike = localStorage.getItem("listLike");
      const getListRate = localStorage.getItem("listRate");
      const getListComment = localStorage.getItem("listComment");
      if (getListUser) {
         setListUser(JSON.parse(getListUser));
      }
      if (getListLike) {
         setListLike(JSON.parse(getListLike));
      }
      if (getListRate) {
         setListRate(JSON.parse(getListRate));
      }
      if (getListComment) {
         setListComment(JSON.parse(getListComment));
      }
   }, []);

   useEffect(() => {
      const getUserLogin = Cookies.get("userLogin");
      if (getUserLogin) {
         setUserLogin(JSON.parse(getUserLogin));
      }
   }, []);

   return (
      <HomeContext.Provider
         value={{
            userLogin,
            setUserLogin,
            listUser,
            setListUser,
            listLike,
            setListLike,
            listRate,
            setListRate,
            listComment,
            setListComment,
            movieShow,
            setMovieShow,
         }}
      >
         {children}
      </HomeContext.Provider>
   );
};

export { HomeContext, HomeProvider };
