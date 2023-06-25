import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { registeredUsers } from "../../Data/RegisteredUsers";
import Card from "../../Components/Card/Card";
import style from "../DanhMuc/DanhMuc.module.css";

const LoginForm = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    setIsOpen(false);
    window.location.href = "/";
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = registeredUsers.find((user) => user.email === email);

    if (user && user.password === password) {
      alert("Bạn đã đăng nhập thành công!");
      // const favoriteFilms = user.favorites;
      // return (
      //   <div>
      //   {favoriteFilms.length > 0 ? (
      //     <div>
      //       <h2>Danh sách phim:</h2>
      //       <ul className={style.row_card}>
      //         {favoriteFilms.map((item) => (
      //           <Card
      //             key={item?.id}
      //             nowPlaying={item?.nowPlaying}
      //             name={item?.name}
      //             link={item?.link}
      //             id={item?.id}
      //             image={item?.image}
      //           />
      //         ))}
      //       </ul>
      //     </div>
      // ) : (
      //   <p>Bạn chưa có phim yêu thích</p>
      // )
    } else {
      alert("Email hoặc mật khẩu không tồn tại!");
    }
  };

  return (
    <div id="container" className={`LoginForm ${isOpen ? "open" : "closed"}`}>
      {isOpen && (
        <form onSubmit={handleSubmit}>
          <h1>Đăng nhập</h1>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Mật khẩu:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {error && <p className="error">{error}</p>}
          </div>

          <br />
          <button id="submit" type="submit">
            Đăng nhập
          </button>
          <button type="button" onClick={handleClose} id="clear-button">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
