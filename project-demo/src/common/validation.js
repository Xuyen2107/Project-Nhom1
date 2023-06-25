const validation = () => {
  const validateUser = /^\[A-z\][A-z0-9-_]{3,23}$/;
  const validatePwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  return { validateUser, validatePwd };
};

export default validation;
