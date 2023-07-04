import { useEffect, useState, useContext } from "react";
import { HomeContext } from "../../Context/HomeContext";
import { useNavigate } from "react-router-dom";
import Validate from "./Validate";
import { toast } from "react-toastify";

const userDefault = {
   Ho: "",
   Ten: "",
   Email: "",
   Phone: "",
   Password: "",
   RePassword: "",
};

const errorMessage = {
   Ho: "",
   Ten: "",
   Email: "",
   Phone: "",
   Password: "",
   RePassword: "",
};

const RegisterHook = () => {
   const navigate = useNavigate();
   const { listUser, setListUser } = useContext(HomeContext);
   const [show, setShow] = useState(false);
   const [reShow, setReShow] = useState(false);
   const [user, setUser] = useState(userDefault);
   const [error, setError] = useState(errorMessage);
   const { validateEmail, validatePassword, validatePhoneNumberVN, validateText } = Validate();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   useEffect(() => {
      const checkPhone = listUser.find((item) => item.Phone === user.Phone);
      const checkEmail = listUser.find((item) => item.Email === user.Email);
      setError((prevError) => ({
         ...prevError,
         Ho: !user.Ho || validateText(user.Ho) ? "" : "Vui lòng nhập đúng họ của bạn",
         Ten: !user.Ten || validateText(user.Ten) ? "" : "Vui lòng nhập đúng tên của bạn",
         Phone:
            !user.Phone || validatePhoneNumberVN(user.Phone)
               ? checkPhone
                  ? "Số điện thoại đã tồn tại"
                  : ""
               : "Vui lòng nhập đúng số điện thoại của bạn",
         Email:
            !user.Email || validateEmail(user.Email)
               ? checkEmail
                  ? "Email đã tồn tại"
                  : ""
               : "Vui lòng nhập đúng email của bạn",
         Password:
            !user.Password || validatePassword(user.Password)
               ? ""
               : "Mật khẩu từ 6 kí tự trở lên bao gồm chữ in, chữ thường và số",
         RePassword:
            user.RePassword &&
            (user.RePassword !== user.Password ? "Mật khẩu nhập lại chưa đúng" : ""),
      }));
   }, [user, listUser]);

   const genId = () => {
      const Id = Math.floor(Math.random() * 100);
      const check = listUser.find((x) => x.UserId === Id);
      if (check) {
         genId();
      }
      return Id;
   };

   const handleInputChange = (e, name) => {
      setUser((prevUser) => ({
         ...prevUser,
         [name]: e.target.value,
      }));
   };

   const registerClick = () => {
      const userNotEmpty = Object.values(user).every((value) => value !== "");
      const errorNotEmpty = Object.values(error).every((value) => value === "");

      if (!userNotEmpty) {
         const checkPhone = listUser.find((item) => item.Phone === user.Phone);
         const checkEmail = listUser.find((item) => item.Email === user.Email);
         setError((prevError) => ({
            ...prevError,
            Ho: user.Ho
               ? validateText(user.Ho)
                  ? ""
                  : "Vui lòng nhập đúng họ của bạn"
               : "Họ không được để trống",
            Ten: user.Ten
               ? validateText(user.Ten)
                  ? ""
                  : "Vui lòng nhập đúng tên của bạn"
               : "Tên không được để trống",
            Phone: user.Phone
               ? validatePhoneNumberVN(user.Phone)
                  ? checkPhone
                     ? "Số điện thoại đã tồn tại"
                     : ""
                  : "Vui lòng nhập đúng số điện thoại của bạn"
               : "Số điện thoại không được để trống",
            Email: user.Email
               ? validateEmail(user.Email)
                  ? checkEmail
                     ? "Email đã tồn tại"
                     : ""
                  : "Vui lòng nhập đúng email của bạn"
               : "Email không được để trống",
            Password: user.Password
               ? validatePassword(user.Password)
                  ? ""
                  : "Mật khẩu từ 6 kí tự trở lên bao gồm chữ in, chữ thường và số"
               : "Mật khẩu không được để trống",
            RePassword: user.RePassword
               ? user.RePassword !== user.Password
                  ? "Mật khẩu nhập lại chưa đúng"
                  : ""
               : "Mật khẩu nhập lại không được để trống",
         }));
      }

      if (!errorNotEmpty) {
         alert("Vui lòng kiểm tra đúng các thông tin bên dưới");
      }

      if (userNotEmpty && errorNotEmpty) {
         const users = {
            UserId: genId(),
            Ho: user.Ho,
            Ten: user.Ten,
            Phone: user.Phone,
            Email: user.Email,
            Password: user.Password,
         };

         const updateListUser = [...listUser, users];
         toast.success(`Bạn đã đăng kí thành công. Hãy đăng nhập rồi quay lại trang chủ nhé! `);
         setListUser(updateListUser);
         localStorage.setItem("listUser", JSON.stringify(updateListUser));
         alert("Bạn đã đăng kí thành công");
         navigate("/dang-nhap");
      }
   };

   const showPassword = () => {
      setShow((prevShow) => !prevShow);
   };

   const reShowPassword = () => {
      setReShow((prevShow) => !prevShow);
   };

   return { error, show, reShow, reShowPassword, handleInputChange, registerClick, showPassword };
};

export default RegisterHook;
