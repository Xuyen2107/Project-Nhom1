const Validate = () => {
   const validatePhoneNumberVN = (phoneNumber) => {
      const regexViettel = /^(0|\+84)(32|33|34|35|36|37|38|39|86|96|97|98)\d{7}$/;
      const regexVinaphone = /^(0|\+84)(55|83|84|85|81|82|88|91|94)\d{7}$/;
      const regexMobifone = /^(0|\+84)(70|79|77|76|78|90|93|89)\d{7}$/;
      const regexVietnamobile = /^(0|\+84)(56|58|92)\d{7}$/;
      const regexGmobile = /^(0|\+84)(59|99)\d{7}$/;
      return (
         regexViettel.test(phoneNumber) ||
         regexVinaphone.test(phoneNumber) ||
         regexMobifone.test(phoneNumber) ||
         regexVietnamobile.test(phoneNumber) ||
         regexGmobile.test(phoneNumber)
      );
   };

   const validateEmail = (email) => {
      const regex =
         /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
   };

   const validateText = (text) => {
      return /^[a-zA-ZÀ-ỹ\s]+$/g.test(text);
   };

   const validateNumber = (number) => {
      return /^[0-9]+$/.test(number);
   };

   const validatePassword = (password) => {
      const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*[^\s]{6,}$/;
      return regex.test(password);
   };

   return {
      validatePhoneNumberVN,
      validateEmail,
      validateText,
      validateNumber,
      validatePassword,
   };
};

export default Validate;
