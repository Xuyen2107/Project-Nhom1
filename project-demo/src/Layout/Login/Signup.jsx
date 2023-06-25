import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { registeredUsers } from "../../Data/RegisteredUsers";

const SignupForm = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [addNewUser, setRegisteredUsers] = useState([registeredUsers]);
  const [error, setError] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validatePassword = () => {
    password !== confirmPassword
      ? setPasswordError("Mật khẩu nhập lại không trùng khớp")
      : password.length < 6
      ? setPasswordError("Mật khẩu cần ít nhất 6 kí tự")
      : setPasswordError("");
  };

  const handleClose = () => {
    setIsOpen(false);
    window.location.href = "/";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password before submitting the form
    validatePassword();

    // Check if the email or username already exists
    const emailExists = registeredUsers.some((user) => user.email === email);
    const usernameExists = registeredUsers.some((user) => user.name === name);

    emailExists
      ? setError("Email đã tồn tại!")
      : usernameExists
      ? setError("Tên đăng ký đã tồn tại!")
      : setError("");

    //Create a new user object
    const randomId = uuidv4();
    const newUser = {
      id: randomId,
      name,
      email,
      password,
    };

    const addNewUser = () => {
      setRegisteredUsers((prevArray) => [...prevArray, newUser]);
    };
    //Update the list of registered users

    // Clear form inputs and error message
    setEmail("");
    setPassword("");
    setName("");
    setConfirmPassword("");
    setError("");
  };

  return (
    <div id="container" className={`SigupForm ${isOpen ? "open" : "closed"}`}>
      {isOpen && (
        <form onSubmit={handleSubmit}>
          <h1>Đăng ký</h1>
          <div>
            <label htmlFor="name">Họ tên:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
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
          <div>
            <label htmlFor="confirmPassword">Nhập lại mật khẩu:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          {passwordError && <p className="error">{passwordError}</p>}
          <br />
          <button id="submit" type="submit" onClick={addNewUser}>
            Đăng ký
          </button>
          <button type="button" onClick={handleClose} id="clear-button">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </form>
      )}
    </div>
  );
};

export default SignupForm;
