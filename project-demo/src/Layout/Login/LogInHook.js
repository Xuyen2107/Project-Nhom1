import { useEffect, useState, useContext } from "react";
import { HomeContext } from "../../Context/HomeContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const accountDefault = {
   TaiKhoan: "",
   Password: "",
};

const errorDefault = {
   TaiKhoan: "",
   Password: "",
};

const LogInHook = () => {
   const { setUserLogin, listUser } = useContext(HomeContext);
   const [show, setShow] = useState(false);
   const [account, setAccount] = useState(accountDefault);
   const [error, setError] = useState(errorDefault);
   const navigateHome = useNavigate();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   useEffect(() => {
      setError((prevError) => ({
         ...prevError,
         TaiKhoan: "",
         Password: "",
      }));
   }, [account]);

   const handleInputChange = (e, name) => {
      setAccount((prevAccount) => ({
         ...prevAccount,
         [name]: e.target.value,
      }));
   };

   const showPassword = () => {
      setShow((prevShow) => !prevShow);
   };

   const logInClick = () => {
      const userNotEmpty = Object.values(account).every((value) => value !== "");
      if (!userNotEmpty) {
         setError((prevError) => ({
            ...prevError,
            TaiKhoan: account.TaiKhoan ? "" : "Vui lòng nhập tài khoản của bạn",
            Password: account.Password ? "" : "Vui lòng nhập mật khẩu của bạn",
         }));
      } else {
         const userDefault = listUser?.find(
            (x) => x.Phone === account?.TaiKhoan || x.Email === account?.TaiKhoan
         );

         if (!userDefault) {
            toast.success("Tài khoản không tồn tại");
         } else {
            if (userDefault?.Password !== account?.Password) {
               toast.success("Mật khẩu chưa chính xác");
            } else {
               toast.success(
                  `Bạn đã đăng nhập thành công. Xin chào ${userDefault.Ho} ${userDefault.Ten} `
               );
               setUserLogin(userDefault);
               Cookies.set("userLogin", JSON.stringify(userDefault));
               navigateHome("/");
            }
         }
      }
   };
   return { error, show, handleInputChange, showPassword, logInClick };
};

export default LogInHook;
