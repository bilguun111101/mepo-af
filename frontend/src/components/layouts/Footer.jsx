import { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../API/useAuth";
import { langFooterArr } from "../../utils/constants";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import classes from "../../assets/styles/footer.module.scss";
import { GlobalContext } from "./../../context/GlobalContext";

export const Footer = () => {
  const { logout } = useAuth();
  const {
    language: { lang },
  } = useContext(GlobalContext);
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footer}>
        {Object.entries(langFooterArr[lang]).map(([name, arr]) => (
          <div key={name} className={classes.footer_item}>
            <div className={classes.footer_item_inner}>
              <h4>{name}</h4>
              <div>
                {arr.map((el, i) => (
                  <Link onClick={el.name === "Log out" || el.name === "Гарах" ? logout : null} key={i} to={el.path}>
                    {el.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className={classes.footer_item_social}>
          <div className={classes.footer_item_social_inner}>
            <h4>{lang === "en" ? "SOCIAL LINKS" : "Сошиал хаяг"}</h4>
            <span>
              <a href="www.instagram.com">
                <BsInstagram size={22} />
              </a>
              <a href="www.facebook.com">
                <BsFacebook size={22} />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className={classes.footerBottom}>
        <Link to={"/"} className={classes.footer_image_container}>
          <img alt="mepoAfLogo" src="https://res.cloudinary.com/mustnest/image/upload/v1669191520/Mepo_Af/logoBlack_awmpvg.png" />
        </Link>
        <span>@2022 Mepo Af. Website designed by Surneke</span>
      </div>
    </div>
  );
};
