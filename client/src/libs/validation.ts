const regexEmail = /\S+@\S+\.\S+/;
export const checkValidEmail = (email: string) => regexEmail.test(email);
export const checkValidPassword = (password: string) => {
  return password.length >= 6 && password.length <= 15;
};
export const checkValidUsername = (username: string) =>
  username.length >= 6 && username.length <= 15;
export const checkValidName = (username: string) => username.length >= 6 && username.length <= 15;
