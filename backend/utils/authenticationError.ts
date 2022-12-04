import bcrypt from "bcryptjs";
import { findUserByKey } from "./findDocument";
import { emailValidator, passwordValidator } from "./validators";

export const newUserValidator = async (email: string, password: string, confirmPass: string) => {
  const errors: { [name: string]: object } = {};
  const exUser = await findUserByKey({ email });
  if (!email) {
    errors.email = { en: "Please enter your email address.", mn: "Имэйл хаягаа оруулна уу." };
  } else if (!email.match(emailValidator)) {
    errors.email = { en: "Please enter a valid email address.", mn: "Хүчинтэй имэйл хаяг оруулна уу." };
  } else if (exUser) {
    if (!exUser.isVerified) {
      errors.email = {
        en: "We already sent an account verification link to your email. Please check it.",
        mn: "Бид аль хэдийн таны имэйл хаягруу баталгаажуулах мэйл явуулсан. Шалгаж үзнэ үү.",
      };
    } else {
      errors.email = { en: "This email already exists in our system.", mn: "Бүртгэлтэй мэйл хаяг байна." };
    }
  }
  if (!password) {
    errors.password = { en: "Please enter your password.", mn: "Нууц үгээ оруулна уу." };
  } else if (!passwordValidator.test(password)) {
    errors.password = {
      en: "Password must has at least 8 characters that include at least 2 uppercase letters, 2 lowercase letters, 2 numbers and a special character in (!@#$%^&/*-+)",
      mn: "Нууц үг тань хамгийн багадаа 8 урттай байх ёстой бөгөөд багадаа 2 том үсэг, 2 жижиг үсэг, 2 тоо 1 тэмдэгт байх ёстой.",
    };
  }
  if (!confirmPass) {
    errors.cfNewPass = { en: "Please enter your confirm password.", mn: "Нууц үгээ баталгаажуулна уу." };
  } else if (confirmPass !== password) {
    errors.cfNewPass = { en: "Passwords don't match. Check again.", mn: "Нууц үгүүд таарахгүй байна." };
  }
  return errors;
};
export const loginValidator = async (email: string, password: string) => {
  const errors: { [name: string]: object } = {};
  const exUser = await findUserByKey({ email });
  if (!email) {
    errors.email = { en: "Please enter your email address.", mn: "Имэйл хаягаа оруулна уу." };
  } else if (!email.match(emailValidator)) {
    errors.email = { en: "Please enter a valid email address.", mn: "Хүчинтэй имэйл хаяг оруулна уу." };
  } else if (exUser) {
    const passMatch = await bcrypt.compare(password, exUser.password);
    if (!exUser.isVerified) {
      errors.email = {
        en: "We already sent an account verification link to your email. Please check it.",
        mn: "Бид аль хэдийн таны имэйл хаягруу баталгаажуулах мэйл явуулсан. Шалгаж үзнэ үү.",
      };
    } else if (!passMatch) {
      errors.password = { en: "Your password is incorrect.", mn: "Нууц үг буруу байна." };
    }
  } else if (!exUser) {
    errors.email = { en: "This user doesn't exist. Please register now.", mn: "Бүртгэлгүй мэйл хаяг байна. Эхлээд бүртгүүлнэ үү." };
  }

  if (!password) {
    errors.password = { en: "Please enter your password.", mn: "Нууц үгээ оруулна уу." };
  }
  return errors;
};
export const forPassValidator = async (email: string) => {
  const errors: { [name: string]: object } = {};
  const exUser = await findUserByKey({ email });
  if (!email) {
    errors.email = { en: "Please enter your email address.", mn: "Имэйл хаягаа оруулна уу." };
  } else if (!email.match(emailValidator)) {
    errors.email = { en: "Please enter a valid email address.", mn: "Хүчинтэй имэйл хаяг оруулна уу." };
  } else if (!exUser) {
    errors.email = { en: "This user doesn't exist. Please register now.", mn: "Бүртгэлгүй мэйл хаяг байна. Эхлээд бүртгүүлнэ үү." };
  }
  return errors;
};
export const resPassValidator = async (newPass: string, cfNewPass: string) => {
  const errors: { [name: string]: object } = {};
  if (!newPass) {
    errors.newPass = { en: "Please enter your new password.", mn: "Шинэ нууц үгээ оруулна уу." };
  } else if (!passwordValidator.test(newPass)) {
    errors.newPass = {
      en: "Password must has at least 8 characters that include at least 2 uppercase letters, 2 lowercase letters, 2 numbers and a special character in (!@#$%^&/*-+)",
      mn: "Нууц үг тань хамгийн багадаа 8 урттай байх ёстой бөгөөд багадаа 2 том үсэг, 2 жижиг үсэг, 2 тоо 1 тэмдэгт байх ёстой.",
    };
  }
  if (!cfNewPass) {
    errors.cfNewPass = { en: "Please confirm your new password.", mn: "Шинэ нууц үгээ баталгаажуулна уу." };
  } else if (cfNewPass !== newPass) {
    errors.cfNewPass = { en: "Passwords don't match.", mn: "Нууц үг таарахгүй байна." };
  }
  return errors;
};
