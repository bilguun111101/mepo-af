import men1 from "../assets/images/mepo-image-men1.jpg";
import men2 from "../assets/images/mepo-image-men2.jpg";
import men3 from "../assets/images/mepo-image-men6.jpg";
import men4 from "../assets/images/mepo-image-men3.jpg";
import men5 from "../assets/images/mepo-image-men4.jpg";

export const homeImgArr = [
  "https://res.cloudinary.com/mustnest/image/upload/v1669293202/Mepo_Af/x6shifpt9lmhfri3owm2.png",
  "https://res.cloudinary.com/mustnest/image/upload/v1669292935/Mepo_Af/u9y4kdbejy4m1iww3wu2.png",
  "https://res.cloudinary.com/mustnest/image/upload/v1669293662/Mepo_Af/fxtkizq87fbfuolujjhr.png",
];
export const langTextLeft = {
  en: [
    { name: "all", path: "/all" },
    { name: "women's", path: "/women" },
    { name: "men's", path: "/men" },
  ],
  mn: [
    { name: "Бүгд", path: "/all" },
    { name: "Эмэгтэй", path: "/women" },
    { name: "Эрэгтэй", path: "/men" },
  ],
};
export const langFooterArr = {
  en: {
    MENU: [
      { name: "About us", path: "/" },
      { name: "Products", path: "/products" },
      { name: "Account", path: "/account" },
      { name: "Log out", path: "#" },
    ],
    NEWSLETTER: [
      {
        name: "Carefully curated online store. Featuring simple. Beautifully and thoughtfully designed products.",
        path: "#",
      },
    ],
    LOCATION: [{ name: "Street 120, apartment 35, Ulaanbaatar, Mongolia", path: "#" }],
  },
  mn: {
    МЕНЮ: [
      { name: "Бидний тухай", path: "/" },
      { name: "Бүтээгдэхүүн", path: "/products" },
      { name: "Аккаунт", path: "/account" },
      { name: "Гарах", path: "#" },
    ],
    МЭДЭЭ: [
      {
        name: "Маш нарийн боловсруулсан онлайн дэлгүүр. Энгийн бөгөөд үзэсгэлэнтэй загварчилсан бараанууд.",
        path: "#",
      },
    ],
    ХАЯГ: [{ name: "Монгол улс, Улаанбаатар хот, 120-р гудамж, 35-р байр", path: "#" }],
  },
};
export const langNavbarMobile = {
  en: [
    { name: "all", path: "/bag" },
    { name: "men's", path: "/men" },
    { name: "women's", path: "/women" },
    { name: "account", path: "/account" },
    { name: "log in", path: "/products" },
  ],
  mn: [
    { name: "Бүгд", path: "/bag" },
    { name: "Эрэгтэй", path: "/men" },
    { name: "Эмэгтэй", path: "/women" },
    { name: "Аккаунт", path: "/account" },
    { name: "Нэвтрэх", path: "/products" },
  ],
};

export const specialImges = [
  { url: men1 },
  { url: men2 },
  { url: men3 },
  { url: men4 },
  { url: men5 },
];
export const specialProductDetail = [
  {
    descriptionName: "About collection",
    detail: [
      "We collect beautiful classic men’s design artifacts from the 20th & 21st century..",
      "We collect beautiful classic uniq clothes ever. Our collections all hand made. ",
      "We collect beautiful classic men’s design artifacts from the 20th & 21st century. You can make your own lookbook with mepo af.",
    ],
  },
];
