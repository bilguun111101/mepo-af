import { langTextLeft } from '../../utils/constants';
import { useLocation, Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import classes from '../../assets/styles/header.module.scss';

export const MenuHorizontal = () => {
  const [current, setCurrent] = useState(0);
  const {
    user: { userDetail },
    language: { lang, setLang },
    loginOpen: { setIsLoginOpen },
    signupOpen: { setIsSignupOpen },
  } = useContext(GlobalContext);
  const { search, pathname } = useLocation();
  useEffect(() => {
    (() => {
      const query = new URLSearchParams(search);
      if (query.get('loginOpen')) return setIsLoginOpen(true);
      if (query.get('signupOpen')) return setIsSignupOpen(true);
    })();
  }, [search, setIsLoginOpen, setIsSignupOpen]);

  // useEffect(() => {
  //   (() => {
  //     switch (pathname) {
  //       case "/all":
  //         return setCurrent(1);
  //       case "/men":
  //         return setCurrent(3);
  //       case "/women":
  //         return setCurrent(2);
  //       case "/bag":
  //         return setCurrent(4);
  //       default:
  //         return setCurrent(0);
  //     }
  //   })();
  // }, [pathname]);
  const toEnglish = () => {
    setLang('en');
    localStorage.setItem('setLanguage', 'en');
  };
  const toMongolia = () => {
    setLang('mn');
    localStorage.setItem('setLanguage', 'mn');
  };
  return (
    <div className={classes.header}>
      <div className={classes.header_content}>
        <div className={classes.header_content_l}>

          <Link to={"/"} className={classes.header_content_l_image}>
            <img alt="mepoAfLogo" src="https://res.cloudinary.com/mustnest/image/upload/v1669191520/Mepo_Af/logoBlack_awmpvg.png" />
          </Link>
          <div className={classes.header_content_l_links} style={{ width: lang === "mn" ? "270px" : "" }}>

            {langTextLeft[lang].map(({ name, path }, id) => (
              <Link
                onClick={() => setCurrent(id)}
                style={{
                  fontWeight: current === id ? 600 : 300,
                  color: current === id ? '#000' : '#746c6c',
                }}
                className={
                  path === '/women' ? classes.header_content_l_links_p : {}
                }
                to={path}
                key={name}
              >
                <span>{name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div
          className={classes.header_content_r}
          style={{ width: lang === 'mn' ? '283px' : '' }}
        >
          <div className={classes.header_content_r_langs}>
            <button
              style={{
                color: lang === 'en' ? '#000' : '#746c6c',
                fontWeight: lang === 'en' ? 600 : 300,
              }}
              onClick={toEnglish}
            >
              <p>eng</p>
            </button>
            <div>&nbsp;/&nbsp;</div>
            <button
              style={{
                color: lang === 'mn' ? '#000' : '#746c6c',
                fontWeight: lang === 'mn' ? 600 : 300,
              }}
              onClick={toMongolia}
            >
              <p>мон</p>
            </button>
          </div>
          <Link onClick={() => setCurrent(3)} to={'/bag'}>
            <button
              style={{
                fontWeight: current === 3 ? 600 : 300,
                color: current === 3 ? '#000' : '#746c6c',
              }}
            >
              <p>{lang === 'en' ? 'bag' : 'сагс'}</p>
            </button>
          </Link>
          {userDetail?.token ? (

            <Link to={"/account"}>{lang === "en" ? "account" : "аккаунт"}</Link>
          ) : (
            <button onClick={() => setIsLoginOpen(true)}>{lang === "en" ? "login" : "нэвтрэх"}</button>

          )}
        </div>
      </div>
    </div>
  );
};
