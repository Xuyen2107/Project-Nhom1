import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handlePhoneNumberChange = (e) => {
  //   setPhoneNumber(e.target.value);
  // };

  // const checkEmail = registeredUsers.find((x) => x.email != email);
  // if (checkEmail) {
  // alert("Email không tồn tại");
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
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
          {/* <div>
            <label htmlFor="phone">Số điện thoại:</label>
            <input
              type="tel"
              id="phone"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
          </div> */}
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
